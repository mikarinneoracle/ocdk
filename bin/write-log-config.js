#!/usr/bin/env node
/**
 * Write .ocdk/tail-function-logs.js with log IDs from terraform output.
 * Run from project root after deploy. Usage: npx ocdk write-log-config
 */
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const packageRoot = path.join(__dirname, '..');
const projectRoot = process.cwd();
const stackName = process.env.OCI_STACK_NAME || 'oci-stack';
function outputValue(value, key) {
  if (!value || typeof value !== 'object') return undefined;
  if (Object.prototype.hasOwnProperty.call(value, key)) {
    const output = value[key];
    if (typeof output === 'string') return output;
    if (output && typeof output === 'object' && typeof output.value === 'string') return output.value;
  }
  for (const child of Object.values(value)) {
    const found = outputValue(child, key);
    if (found) return found;
  }
  return undefined;
}

const tempDir = fs.mkdtempSync(path.join(require('os').tmpdir(), 'ocdk-log-output-'));
const outputFile = path.join(tempDir, 'outputs.json');
let logGroupId;
let executionLogId;
try {
  const result = spawnSync('npm', ['run', '--silent', 'cdktf', '--', 'output', stackName, '--outputs-file', outputFile], {
    cwd: packageRoot,
    encoding: 'utf8',
    shell: false,
  });
  if (result.status !== 0 || !fs.existsSync(outputFile)) {
    throw new Error((result.stderr || result.stdout || '').trim() || 'cdktf output did not produce an output file.');
  }
  const outputs = JSON.parse(fs.readFileSync(outputFile, 'utf8'));
  logGroupId = outputValue(outputs, 'log_group_id');
  executionLogId = outputValue(outputs, 'execution_log_id');
} catch (error) {
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.error(`Could not read Terraform outputs: ${error.message}`);
  process.exit(1);
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

if (!logGroupId || !executionLogId) {
  console.error('Missing log_group_id or execution_log_id from terraform output.');
  process.exit(1);
}

const srcScript = path.join(packageRoot, 'scripts', 'tail-function-log.js');
const outputDir = path.join(projectRoot, '.ocdk');
const destScript = path.join(outputDir, 'tail-function-logs.js');
if (fs.existsSync(srcScript)) {
  fs.mkdirSync(outputDir, { recursive: true });
  let content = fs.readFileSync(srcScript, 'utf8');
  content = content.replace(/__EXECUTION_LOG_ID__/g, executionLogId).replace(/__LOG_GROUP_ID__/g, logGroupId);
  fs.writeFileSync(destScript, content, 'utf8');
  console.log('Wrote .ocdk/tail-function-logs.js');
} else {
  console.warn('Source script not found:', srcScript);
}

console.log('Done. Run: npx ocdk tail:execution-log');
