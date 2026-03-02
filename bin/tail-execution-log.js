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

  const stackName = process.env.OCI_STACK_NAME || 'oci-stack';
  const stackDir = path.join(projectDir, 'node_modules', '@mikarinneoracle', 'oci-cdk', 'cdktf.out', 'stacks', stackName);

  let logGroupId = null;
  let executionLogId = null;

  // 1) Prefer .ocdk-logs.json in project (written by write-log-config)
  const logsJsonPath = path.join(projectDir, '.ocdk-logs.json');
  if (fs.existsSync(logsJsonPath)) {
    try {
      const raw = fs.readFileSync(logsJsonPath, 'utf8').replace(/^\uFEFF/, '').trim();
      const data = JSON.parse(raw);
      if (data && typeof data.log_group_id === 'string') logGroupId = data.log_group_id.trim();
      if (data && typeof data.execution_log_id === 'string') executionLogId = data.execution_log_id.trim();
    } catch (e) {}
  }

  // 2) Terraform output from stack dir (same as write-log-config)
  if ((!logGroupId || !executionLogId) && fs.existsSync(stackDir)) {
    try {
      const { execSync } = require('child_process');
      if (!logGroupId) logGroupId = execSync('terraform output -raw log_group_id', { encoding: 'utf8', cwd: stackDir }).trim();
      if (!executionLogId) executionLogId = execSync('terraform output -raw execution_log_id', { encoding: 'utf8', cwd: stackDir }).trim();
    } catch (e) {}
  }

  // 3) .ocdk-outputs.json or cdktf output -json
  if (!logGroupId || !executionLogId) {
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
      if (output.status === 0 && output.stdout) {
        parsed = extractJson(output.stdout);
      }
    }
    if (parsed) {
      const outputs = parsed.log_group_id != null ? parsed : Object.values(parsed).find((v) => v && typeof v === 'object' && (v.log_group_id != null || v.execution_log_id != null)) || parsed;
      function valueOf(out, key) {
        const v = out[key];
        if (!v) return undefined;
        if (typeof v === 'string') return v;
        if (v && typeof v.value === 'string') return v.value;
        return undefined;
      }
      if (!logGroupId) logGroupId = valueOf(outputs, 'log_group_id');
      if (!executionLogId) executionLogId = valueOf(outputs, 'execution_log_id');
    }
  }

  if (!logGroupId || !executionLogId) {
    console.error('Outputs "log_group_id" and "execution_log_id" not found.');
    console.error('Run from project root: npx ocdk write-log-config  (then use: node tail-function-logs.js  or  npx ocdk tail:execution-log)');
    fail('Deploy the stack first, then run write-log-config.');
  }

  const now = new Date();
  const start = new Date(now.getTime() - 10 * 60 * 1000); // last 10 minutes
  const timeStart = start.toISOString();
  const timeEnd = now.toISOString();

  // Log search query: scope to compartment/log group/log and show latest entries (limit 20 like old logic)
  const scope = `${compId}/${logGroupId}/${executionLogId}`;
  const limit = 20;
  const query = `search "${scope}" | sort by datetime desc | limit ${limit}`;

  const debug = process.env.OCI_TAIL_DEBUG === '1' || process.env.OCI_TAIL_DEBUG === 'true';
  if (debug) {
    console.error('Variables inserted: compartment, log_group_id, execution_log_id, time-start, time-end');
    console.error(
      'oci logging-search search-logs \\\n' +
        `  --search-query 'search "${scope}" | sort by datetime desc | limit ${limit}' \\\n` +
        `  --time-start ${timeStart} \\\n` +
        `  --time-end ${timeEnd}`
    );
    console.error('---');
  }
  // Do not use shell: true — the query contains "|" which the shell would interpret as a pipe
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
    { encoding: 'utf8', shell: false }
  );

  if (res.status !== 0) {
    if (res.stderr) process.stderr.write(res.stderr);
    process.exit(res.status ?? 1);
  }

  // Parse JSON and print only timestamp + message (no raw JSON dump)
  const raw = (res.stdout || '').trim();
  const first = raw.indexOf('{');
  const last = raw.lastIndexOf('}');
  if (first !== -1 && last > first) {
    try {
      const json = JSON.parse(raw.slice(first, last + 1));
      const results = json?.data?.results || [];
      // Results are newest-first; print in chronological order (oldest first)
      for (let i = results.length - 1; i >= 0; i -= 1) {
        const item = results[i];
        const data = item?.data || item;
        const logContent = data?.logContent || data;
        const inner = logContent?.data || logContent;
        let ts = logContent?.time ?? data?.datetime ?? data?.time;
        if (typeof ts === 'number') ts = new Date(ts).toISOString();
        else if (!ts) ts = new Date().toISOString();
        const message = inner?.message ?? logContent?.message ?? '';
        console.log(`${ts} ${message}`);
      }
    } catch (e) {
      process.stderr.write(raw + '\n');
    }
  } else {
    process.stderr.write(raw + '\n');
  }
}

main();

