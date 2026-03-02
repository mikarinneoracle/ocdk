#!/usr/bin/env node
/**
 * Verify that the built package contains the latest WriteOutputsToProject logic
 * (runs generate_tail_log.sh via local-exec). Fails prepublishOnly if stale.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const readmePath = path.join(root, 'README.md');
const stackPath = path.join(root, 'lib', 'lib', 'oci-stack.js');
const configPath = path.join(root, 'lib', 'config', 'oci-config.js');

let failed = false;

// 0. README.md must exist at package root so it appears on npm
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

// 1. Built stack must run generate_tail_log.sh (GENERATE_TAIL_LOG_SCRIPT_B64)
if (fs.existsSync(stackPath)) {
  const stack = fs.readFileSync(stackPath, 'utf8');
  if (!stack.includes('GENERATE_TAIL_LOG_SCRIPT_B64') || !stack.includes('generate_tail_log')) {
    console.error('[verify-publish] lib/lib/oci-stack.js missing generate_tail_log.sh run (GENERATE_TAIL_LOG_SCRIPT_B64). Rebuild with latest source.');
    failed = true;
  }
  if (stack.includes('tailScriptB64Encoded')) {
    console.error('[verify-publish] lib/lib/oci-stack.js still has old base64 tail script (tailScriptB64Encoded). Use generate_tail_log.sh.');
    failed = true;
  }
} else {
  console.error('[verify-publish] lib/lib/oci-stack.js not found. Run npm run compile first.');
  failed = true;
}

// 2. Config must create tail script in Node (ensureTailFunctionLogsScript)
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

if (failed) process.exit(1);
console.log('[@mikarinneoracle/oci-cdk] verify-publish: built package has latest tail script logic.');
