#!/usr/bin/env node
/**
 * Verify built package and prepublish: README present, stack and config valid.
 * Log config is written by: npx ocdk write-log-config (after deploy).
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const readmePath = path.join(root, 'README.md');
const stackPath = path.join(root, 'lib', 'lib', 'oci-stack.js');
const configPath = path.join(root, 'lib', 'config', 'oci-config.js');

let failed = false;

// 0. package.json "files" must include README.md so it is deployed with the package
const pkgPath = path.join(root, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
if (!Array.isArray(pkg.files) || !pkg.files.includes('README.md')) {
  console.error('[verify-publish] package.json "files" must include "README.md" so README is deployed to npm.');
  failed = true;
}

// 1. README.md must exist at package root so it appears on npm
if (!fs.existsSync(readmePath)) {
  console.error('[verify-publish] README.md not found at package root. It must be included for npm.');
  failed = true;
} else {
  try {
    const readme = fs.readFileSync(readmePath, 'utf8');
    if (!readme || readme.length < 100 || !readme.includes('Environment')) {
      console.error('[verify-publish] README.md is missing or too short. Ensure it documents the package for npm.');
      failed = true;
    }
  } catch (e) {
    console.error('[verify-publish] Could not read README.md:', e.message);
    failed = true;
  }
}

// 2. Built stack must exist
if (!fs.existsSync(stackPath)) {
  console.error('[verify-publish] lib/lib/oci-stack.js not found. Run npm run compile first.');
  failed = true;
}

// 3. Config must create tail script in Node (ensureTailFunctionLogsScript)
if (fs.existsSync(configPath)) {
  const config = fs.readFileSync(configPath, 'utf8');
  if (!config.includes('ensureTailFunctionLogsScript') || !config.includes('tail-function-logs.js')) {
    console.error('[verify-publish] lib/config/oci-config.js missing ensureTailFunctionLogsScript. Copy config → lib/config and ensure latest config is used.');
    failed = true;
  }
} else {
  console.error('[verify-publish] lib/config/oci-config.js not found. prepublishOnly should copy config → lib/config.');
  failed = true;
}

// 4. Ensure README.md is in the pack (npm pack --dry-run) so it appears on npm
if (!failed) {
  const { execSync } = require('child_process');
  try {
    const out = execSync('npm pack --dry-run 2>&1', { encoding: 'utf8', cwd: root });
    if (!out.includes('README.md')) {
      console.error('[verify-publish] npm pack --dry-run did not list README.md. Fix .npmignore / package.json "files".');
      failed = true;
    }
  } catch (e) {
    console.error('[verify-publish] npm pack --dry-run failed:', e.message);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('[@mikarinneoracle/oci-cdk] verify-publish: README in pack, stack and config OK.');
