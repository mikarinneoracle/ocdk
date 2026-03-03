#!/usr/bin/env node
/**
 * Compare fn CLI-generated Python Dockerfile (function/Dockerfile) with the Python
 * Dockerfile template in lib/oci-stack.ts as a whole. If there is any diff, replace
 * the template with the fn Dockerfile (with docker.io/ prefix). Prints "updated" or "unchanged".
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

function normalizeForCompare(content) {
  return content
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();
}

if (!fs.existsSync(fnDockerfilePath)) {
  console.error('function/Dockerfile not found (run fn init --runtime python first)');
  process.exit(2);
}

const fnDockerfile = fs.readFileSync(fnDockerfilePath, 'utf8');
let ociStack = fs.readFileSync(ociStackPath, 'utf8');

const markerStart = '        dockerfileContent = `';
const markerEnd = '`;\n      } else if (runtime && runtime.startsWith(\'node\'))';
const i = ociStack.indexOf(markerStart);
const j = ociStack.indexOf(markerEnd, i);
if (i === -1 || j === -1) {
  console.error('Could not find Python dockerfileContent block in lib/oci-stack.ts');
  process.exit(2);
}

const currentPython = ociStack.slice(i + markerStart.length, j);
const fnWithPrefix = addDockerIoPrefix(fnDockerfile);
const normalizedFn = normalizeForCompare(fnWithPrefix);
const normalizedCurrent = normalizeForCompare(currentPython);

if (normalizedFn === normalizedCurrent) {
  console.log('unchanged');
  process.exit(0);
}

console.error('Python Dockerfile differs from lib/oci-stack.ts — updating.');
const newContent = addDockerIoPrefix(fnDockerfile);

ociStack =
  ociStack.slice(0, i + markerStart.length) +
  newContent +
  ociStack.slice(j);

fs.writeFileSync(ociStackPath, ociStack, 'utf8');
console.log('updated');
