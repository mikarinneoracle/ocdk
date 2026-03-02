#!/usr/bin/env node
/**
 * Write tail-function-logs.js to the project root with log IDs from terraform output.
 * Run from project root after deploy. Usage: npx ocdk write-log-config
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const packageRoot = path.join(__dirname, '..');
const projectRoot = process.cwd();
const stackName = process.env.OCI_STACK_NAME || 'oci-stack';
const stackDir = path.join(projectRoot, 'node_modules', '@mikarinneoracle', 'oci-cdk', 'cdktf.out', 'stacks', stackName);

if (!fs.existsSync(stackDir)) {
  console.error('Stack directory not found:', stackDir);
  console.error('Run from your project root after "npx ocdk deploy". Ensure the stack is deployed.');
  process.exit(1);
}

let logGroupId;
let executionLogId;
try {
  logGroupId = execSync(`terraform output -raw log_group_id`, { encoding: 'utf8', cwd: stackDir }).trim();
  executionLogId = execSync(`terraform output -raw execution_log_id`, { encoding: 'utf8', cwd: stackDir }).trim();
} catch (e) {
  console.error('Could not read terraform outputs. Ensure the stack is deployed and terraform is on PATH.');
  process.exit(1);
}

if (!logGroupId || !executionLogId) {
  console.error('Missing log_group_id or execution_log_id from terraform output.');
  process.exit(1);
}

const srcScript = path.join(packageRoot, 'scripts', 'tail-function-log.js');
const destScript = path.join(projectRoot, 'tail-function-logs.js');
if (fs.existsSync(srcScript)) {
  let content = fs.readFileSync(srcScript, 'utf8');
  content = content.replace(/__EXECUTION_LOG_ID__/g, executionLogId).replace(/__LOG_GROUP_ID__/g, logGroupId);
  fs.writeFileSync(destScript, content, 'utf8');
  console.log('Wrote tail-function-logs.js');
} else {
  console.warn('Source script not found:', srcScript);
}

console.log('Done. Run: node tail-function-logs.js  or  npx ocdk tail:execution-log');
