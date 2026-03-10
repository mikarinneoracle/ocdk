#!/usr/bin/env node
/**
 * Compare fn CLI-generated Node Dockerfile (function/Dockerfile) with the Node
 * Dockerfile template in lib/oci-stack.ts. Ocdk injects RUN sed/mv to remove
 * @mikarinneoracle/oci-cdk from package.json; we strip that block for comparison,
 * then re-inject it when updating.
 * Prints "updated" or "unchanged".
 */
import fs from 'fs';
import path from 'path';

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const fnDockerfilePath = path.join(repoRoot, 'function', 'Dockerfile');
const ociStackPath = path.join(repoRoot, 'lib', 'oci-stack.ts');

/** Add docker.io/ to FROM lines that don't already have a registry (ocdk convention). */
function addDockerIoPrefix(content) {
  return content.replace(
    /^(FROM\s+)(fnproject\/)/gm,
    '$1docker.io/$2'
  );
}

/** Fixed block we inject after ADD package.json (sed x2, echo, commented mv, overrides for oci-common). Backslashes doubled for TS template literal. */
const OCKD_NODE_CUSTOMIZATION = `RUN sed '\\\\|"@mikarinneoracle/oci-cdk": ".*"|d' /function/package.json > /function/package_cleaned.json
RUN sed 's!\\\\("@fnproject/fdk": "[^"]*"\\\\),!\\\\1!' /function/package_cleaned.json > /function/package.json
RUN echo "IF THIS LINE ABOVE FAILS COMMENT IT AND UNCOMMENT THE NEXT LINE"
# RUN mv /function/package_cleaned.json /function/package.json
RUN node -e 'const fs=require("fs"); const p=JSON.parse(fs.readFileSync("/function/package.json","utf8")); p.overrides=p.overrides||{}; p.overrides["oci-common"]="2.126.0"; fs.writeFileSync("/function/package.json", JSON.stringify(p,null,2));'`;

/**
 * Strip the ocdk customization block from content for comparison.
 * Removes lines between "ADD package.json" and "RUN npm install" (exclusive of those two).
 */
function stripCustomizations(content) {
  const lines = content.split(/\r?\n/);
  const addIdx = lines.findIndex((l) => /ADD\s+package\.json\s+/.test(l));
  const npmIdx = lines.findIndex((l, idx) => idx > addIdx && /RUN\s+npm\s+install/.test(l));
  if (addIdx === -1 || npmIdx === -1) return content;
  return [...lines.slice(0, addIdx + 1), ...lines.slice(npmIdx)].join('\n');
}

function normalizeForCompare(content) {
  return stripCustomizations(content)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();
}

/** Insert the fixed ocdk customization block after "ADD package.json" in the build-stage. */
function insertCustomizations(content, customizationBlock) {
  const lines = content.split(/\r?\n/);
  const addPackageJson = /ADD\s+package\.json\s+/;
  const out = [];
  let inserted = false;
  for (const line of lines) {
    out.push(line);
    if (!inserted && addPackageJson.test(line)) {
      out.push('', customizationBlock, '');
      inserted = true;
    }
  }
  return out.join('\n');
}

if (!fs.existsSync(fnDockerfilePath)) {
  console.error('function/Dockerfile not found (run fn init --runtime node first)');
  process.exit(2);
}

const fnDockerfile = fs.readFileSync(fnDockerfilePath, 'utf8');
if (/fnproject\/python|func\.py|python\/bin\/fdk/.test(fnDockerfile)) {
  console.error('function/Dockerfile looks like Python, not Node (run fn init --runtime node first)');
  process.exit(2);
}
if (!/fnproject\/node|ENTRYPOINT.*func\.js/.test(fnDockerfile)) {
  console.error('function/Dockerfile does not look like Node (expected fnproject/node and func.js)');
  process.exit(2);
}
let ociStack = fs.readFileSync(ociStackPath, 'utf8');

const markerStart = "        dockerfileContent = `";
const markerEnd = "`;\n      } else {";
const nodeBlockStart = ociStack.indexOf("} else if (runtime && runtime.startsWith('node'))");
const i = ociStack.indexOf(markerStart, nodeBlockStart);
const j = ociStack.indexOf(markerEnd, i);
if (i === -1 || j === -1) {
  console.error('Could not find Node dockerfileContent block in lib/oci-stack.ts');
  process.exit(2);
}

const currentNode = ociStack.slice(i + markerStart.length, j);

const fnWithPrefix = addDockerIoPrefix(fnDockerfile);
const normalizedFn = normalizeForCompare(fnWithPrefix);
const normalizedCurrent = normalizeForCompare(currentNode);

if (normalizedFn === normalizedCurrent) {
  console.log('unchanged');
  process.exit(0);
}

console.error('Node Dockerfile differs from lib/oci-stack.ts — updating (injecting JSON-safe oci-cdk removal).');
const newContent = insertCustomizations(fnWithPrefix, OCKD_NODE_CUSTOMIZATION);

ociStack =
  ociStack.slice(0, i + markerStart.length) +
  newContent +
  ociStack.slice(j);

fs.writeFileSync(ociStackPath, ociStack, 'utf8');
console.log('updated');
