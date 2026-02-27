#!/usr/bin/env node
/**
 * Tail OCI API Gateway execution log created by OCDK.
 *
 * Usage (from your project root, after deploy):
 *   npx ocdk tail:execution-log
 *
 * Requirements:
 * - OCI CLI installed and configured (~/.oci/config)
 * - OCI_COMPARTMENT_ID set to the compartment used for the stack
 * - Stack already deployed so Terraform outputs log_group_id and execution_log_id
 */

const { spawnSync } = require('child_process');
const path = require('path');

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function extractJson(raw) {
  const s = (raw || '').trim();
  const first = s.indexOf('{');
  const last = s.lastIndexOf('}');
  if (first === -1 || last === -1 || last <= first) return null;
  try {
    return JSON.parse(s.slice(first, last + 1));
  } catch (e) {
    return null;
  }
}

function main() {
  const packageRoot = path.join(__dirname, '..');
  const projectDir = process.env.OCDK_PROJECT_DIR || process.cwd();
  const fs = require('fs');

  const compId = process.env.OCI_COMPARTMENT_ID || process.env.OCI_COMPARTMENT_OCID;
  if (!compId) {
    fail('OCI_COMPARTMENT_ID (or OCI_COMPARTMENT_OCID) must be set to tail execution logs.');
  }

  let parsed = null;
  const outputsPath = path.join(projectDir, '.ocdk-outputs.json');
  if (fs.existsSync(outputsPath)) {
    try {
      const raw = fs.readFileSync(outputsPath, 'utf8').replace(/^\uFEFF/, '').trim();
      const first = raw.indexOf('{');
      const last = raw.lastIndexOf('}');
      if (first !== -1 && last > first) parsed = JSON.parse(raw.slice(first, last + 1));
    } catch (e) {}
  }
  if (!parsed) {
    let output = spawnSync('npx', ['cdktf', 'output', '-json'], {
      cwd: packageRoot,
      shell: true,
      encoding: 'utf8',
    });
    if (output.status !== 0 || !output.stdout) {
      output = spawnSync('npx', ['cdktf', 'output', '-json'], {
        cwd: projectDir,
        shell: true,
        encoding: 'utf8',
      });
    }
    if (output.status !== 0) {
      console.error(output.stderr || output.stdout || '');
      fail('Failed to run "cdktf output -json". Run deploy first (creates .ocdk-outputs.json) or run from the project where you deployed.');
    }
    parsed = extractJson(output.stdout);
    if (!parsed) {
      console.error('Could not parse outputs. Use the generated script: node tail-function-logs.js (reads .ocdk-outputs.json after deploy).');
      fail('No valid JSON from cdktf output. Ensure the stack is deployed.');
    }
  }

  // cdktf may return outputs keyed by stack name (e.g. { "oci-stack": { "log_group_id": {...} } })
  const outputs = parsed.log_group_id != null ? parsed : Object.values(parsed).find((v) => v && typeof v === 'object' && (v.log_group_id != null || v.execution_log_id != null)) || parsed;

  function valueOf(out, key) {
    const v = out[key];
    if (!v) return undefined;
    if (typeof v === 'string') return v;
    if (v && typeof v.value === 'string') return v.value;
    return undefined;
  }

  const logGroupId = valueOf(outputs, 'log_group_id');
  const executionLogId = valueOf(outputs, 'execution_log_id');

  if (!logGroupId || !executionLogId) {
    fail('Outputs "log_group_id" and "execution_log_id" not found. Deploy the stack first.');
  }

  const now = new Date();
  const start = new Date(now.getTime() - 10 * 60 * 1000); // last 10 minutes
  const timeStart = start.toISOString();
  const timeEnd = now.toISOString();

  // Log search query: scope to compartment/log group/log and show latest entries
  const scope = `${compId}/${logGroupId}/${executionLogId}`;
  const query = `search "${scope}" | sort by datetime desc | limit 50`;

  // Echo equivalent command with vars inserted (compartment, log_group, execution_log, time range)
  console.error('Variables inserted: compartment, log_group_id, execution_log_id, time-start, time-end');
  console.error(
    'oci logging-search search-logs \\\n' +
      `  --search-query 'search "${scope}" | sort by datetime desc | limit 50' \\\n` +
      `  --time-start ${timeStart} \\\n` +
      `  --time-end ${timeEnd}`
  );
  console.error('---');
  const res = spawnSync(
    'oci',
    [
      'logging-search',
      'search-logs',
      '--search-query',
      query,
      '--time-start',
      timeStart,
      '--time-end',
      timeEnd,
    ],
    { stdio: 'inherit', shell: true }
  );

  process.exit(res.status ?? 1);
}

main();

