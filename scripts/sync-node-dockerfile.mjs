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

/** Fixed block we inject (replaces ADD package.json line): ADD with package-lock.json*, sed x2, comment, commented mv, npm ci/install, chown. Backslashes doubled for TS template literal. */
const OCKD_NODE_CUSTOMIZATION = `ADD package.json package-lock.json* /function/
RUN sed '\\\\|"@mikarinneoracle/oci-cdk": ".*"|d' /function/package.json > /function/package_cleaned.json
RUN sed 's!\\\\("@fnproject/fdk": "[^"]*"\\\\),!\\\\1!' /function/package_cleaned.json > /function/package.json
# UNCOMMENT NEXT LINE AND COMMENT ABOVE LINE IF BUILD FAILS
#RUN mv /function/package_cleaned.json /function/package.json
RUN npm ci --omit=dev 2>/dev/null || npm install --omit=dev
RUN chown -R $(id -u):$(id -g) node_modules`;

/**
 * Strip the ocdk customization block from content for comparison.
 * Removes lines between "ADD package.json" and the runtime "FROM ... node:22" (exclusive of ADD and FROM).
 */
function stripCustomizations(content) {
  const lines = content.split(/\r?\n/);
  const addIdx = lines.findIndex((l) => /ADD\s+package\.json/.test(l));
  const fromIdx = lines.findIndex(
    (l, idx) => idx > addIdx && /^FROM\s+(?:docker\.io\/)?fnproject\/node:22\s*$/i.test(l.trim())
  );
  if (addIdx === -1 || fromIdx === -1) return content;
  return [...lines.slice(0, addIdx + 1), ...lines.slice(fromIdx)].join('\n');
}

function normalizeForCompare(content) {
  return stripCustomizations(content)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\s+as\s+build-stage$/gim, ' AS build-stage')
    .replace(/[ \t]+$/gm, '') // trim trailing whitespace
    .replace(/\n{3,}/g, '\n\n') // collapse multiple blank lines
    .trim();
}

/** Replace the fn "ADD package.json" line with the full ocdk customization block (ADD package-lock.json* + sed + npm + chown). */
function insertCustomizations(content, customizationBlock) {
  const lines = content.split(/\r?\n/);
  const addPackageJson = /ADD\s+package\.json/;
  const out = [];
  let inserted = false;
  for (const line of lines) {
    if (!inserted && addPackageJson.test(line)) {
      out.push(customizationBlock, '');
      inserted = true;
    } else {
      out.push(line);
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

let newContent = insertCustomizations(fnWithPrefix, OCKD_NODE_CUSTOMIZATION);
newContent = newContent.replace(/\s+as\s+build-stage$/gim, ' AS build-stage');
// Only report "updated" if normalized content actually changes (avoids no-op nightly bumps)
if (normalizeForCompare(newContent) === normalizedCurrent) {
  console.log('unchanged');
  process.exit(0);
}

console.error('Node Dockerfile differs from lib/oci-stack.ts — updating (injecting ADD package-lock.json* + sed + npm ci/install + chown).');
ociStack =
  ociStack.slice(0, i + markerStart.length) +
  newContent +
  ociStack.slice(j);

fs.writeFileSync(ociStackPath, ociStack, 'utf8');
console.log('updated');
