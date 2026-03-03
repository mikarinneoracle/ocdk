#!/usr/bin/env node
/**
 * Compare fn CLI-generated Node Dockerfile (function/Dockerfile) with the Node
 * Dockerfile template in lib/oci-stack.ts. Ocdk adds RUN sed (and RUN cat) customizations;
 * we strip them for comparison, then re-inject them into the fn Dockerfile for the final template.
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

/** Lines we inject after ADD package.json in build-stage (ocdk customizations). */
function isCustomizationLine(line) {
  return /^\s*RUN sed\s/.test(line) || /^\s*RUN cat\s/.test(line);
}

/** Remove customization lines for comparison. */
function stripCustomizations(content) {
  return content
    .split(/\r?\n/)
    .filter((line) => !isCustomizationLine(line))
    .join('\n');
}

function normalizeForCompare(content) {
  return stripCustomizations(content)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();
}

/** Extract customization lines from content (order preserved). */
function extractCustomizations(content) {
  return content
    .split(/\r?\n/)
    .filter((line) => isCustomizationLine(line));
}

/** Insert customization lines after "ADD package.json" in the build-stage. */
function insertCustomizations(content, customizationLines) {
  if (customizationLines.length === 0) return content;
  const lines = content.split(/\r?\n/);
  const addPackageJson = /ADD\s+package\.json\s+/;
  let inserted = false;
  const out = [];
  for (const line of lines) {
    out.push(line);
    if (!inserted && addPackageJson.test(line)) {
      customizationLines.forEach((l) => out.push(l));
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
let ociStack = fs.readFileSync(ociStackPath, 'utf8');

const markerStart = "        dockerfileContent = `";
const markerEnd = "`;\n      } else {";
// Node block is the one that contains node:20-dev
const nodeBlockStart = ociStack.indexOf("} else if (runtime && runtime.startsWith('node'))");
const i = ociStack.indexOf(markerStart, nodeBlockStart);
const j = ociStack.indexOf(markerEnd, i);
if (i === -1 || j === -1) {
  console.error('Could not find Node dockerfileContent block in lib/oci-stack.ts');
  process.exit(2);
}

const currentNode = ociStack.slice(i + markerStart.length, j);
const customizations = extractCustomizations(currentNode);

const fnWithPrefix = addDockerIoPrefix(fnDockerfile);
const normalizedFn = normalizeForCompare(fnWithPrefix);
const normalizedCurrent = normalizeForCompare(currentNode);

if (normalizedFn === normalizedCurrent) {
  console.log('unchanged');
  process.exit(0);
}

console.error('Node Dockerfile differs from lib/oci-stack.ts — updating (keeping RUN sed/cat customizations).');
const newContent = insertCustomizations(fnWithPrefix, customizations);

ociStack =
  ociStack.slice(0, i + markerStart.length) +
  newContent +
  ociStack.slice(j);

fs.writeFileSync(ociStackPath, ociStack, 'utf8');
console.log('updated');
