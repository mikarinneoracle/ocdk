#!/usr/bin/env node
/**
 * Run tsc only if lib is not already built (e.g. when package is used from npm as pre-built).
 * Uses __dirname so the check is relative to the package root, not process.cwd().
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pkgRoot = path.join(__dirname, '..');
// tsc with rootDir "." compiles lib/oci-stack.ts → lib/lib/oci-stack.js
const prebuilt = path.join(pkgRoot, 'lib', 'lib', 'oci-stack.js');
if (fs.existsSync(prebuilt)) {
  process.exit(0);
}
console.error(
  '[@mikarinneoracle/oci-cdk] Missing pre-built lib/. Reinstall the package so you get a version that includes it:\n' +
  '  npm install @mikarinneoracle/oci-cdk@latest\n' +
  'If the problem persists, the published package may be incomplete; check https://www.npmjs.com/package/@mikarinneoracle/oci-cdk'
);
process.exit(1);
