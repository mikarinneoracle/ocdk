#!/usr/bin/env node
/**
 * Compare fn CLI-generated Java Dockerfile (function/Dockerfile) with the full Java
 * Dockerfile template in lib/oci-stack.ts as a whole. If there is any diff (aside from
 * the CMD handler), replace the template with the fn Dockerfile and parameterize CMD.
 * Java only; Python and Node later.
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

function normalizeForCompare(content) {
  return content
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\nCMD\s+\[.*\]\s*/g, '\nCMD [PLACEHOLDER]\n')
    .trim();
}

function getNewFullTemplate(fnContent) {
  const withPrefix = addDockerIoPrefix(fnContent);
  const parameterizedCmd = 'CMD ["${handler.replace(/"/g, \'\\\\"\')}"]';
  const lines = withPrefix.trim().split(/\r?\n/);
  const out = [];
  for (const line of lines) {
    if (/^\s*CMD\s+\[/.test(line)) {
      out.push(parameterizedCmd);
    } else {
      out.push(line);
    }
  }
  return out.join('\n');
}

if (!fs.existsSync(fnDockerfilePath)) {
  console.error('function/Dockerfile not found (run fn init --runtime java first)');
  process.exit(2);
}

const fnDockerfile = fs.readFileSync(fnDockerfilePath, 'utf8');
let ociStack = fs.readFileSync(ociStackPath, 'utf8');

const markerStart = 'const dockerfileContentFull = `';
const markerEnd = '`;\n        dockerfileContent';
const i = ociStack.indexOf(markerStart);
const j = ociStack.indexOf(markerEnd, i);
if (i === -1 || j === -1) {
  console.error('Could not find dockerfileContentFull block in lib/oci-stack.ts');
  process.exit(2);
}

const currentFull = ociStack.slice(i + markerStart.length, j);
// Normalize fn Dockerfile with docker.io/ prefix so comparison matches oci-stack convention
const fnWithPrefix = addDockerIoPrefix(fnDockerfile);
const normalizedFn = normalizeForCompare(fnWithPrefix);
const normalizedCurrent = normalizeForCompare(currentFull);

if (normalizedFn === normalizedCurrent) {
  console.log('unchanged');
  process.exit(0);
}

console.error('Java Dockerfile differs from lib/oci-stack.ts — updating full template.');
const newFull = getNewFullTemplate(fnDockerfile);

ociStack =
  ociStack.slice(0, i + markerStart.length) +
  newFull +
  ociStack.slice(j);

fs.writeFileSync(ociStackPath, ociStack, 'utf8');
console.log('updated');
