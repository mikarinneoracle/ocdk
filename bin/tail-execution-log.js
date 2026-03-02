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

async function main() {
  const packageRoot = path.join(__dirname, '..');
  const projectDir = process.env.OCI_PROJECT_DIR || process.cwd();
  const fs = require('fs');

  const compId = process.env.OCI_COMPARTMENT_ID || process.env.OCI_COMPARTMENT_OCID;
  if (!compId) {
    fail('OCI_COMPARTMENT_ID (or OCI_COMPARTMENT_OCID) must be set to tail execution logs.');
  }

  const stackName = process.env.OCI_STACK_NAME || 'oci-stack';
  const stackDir = path.join(projectDir, 'node_modules', '@mikarinneoracle', 'oci-cdk', 'cdktf.out', 'stacks', stackName);

  let logGroupId = null;
  let executionLogId = null;

  // 1) Terraform output from stack dir
  if ((!logGroupId || !executionLogId) && fs.existsSync(stackDir)) {
    try {
      const { execSync } = require('child_process');
      if (!logGroupId) logGroupId = execSync('terraform output -raw log_group_id', { encoding: 'utf8', cwd: stackDir }).trim();
      if (!executionLogId) executionLogId = execSync('terraform output -raw execution_log_id', { encoding: 'utf8', cwd: stackDir }).trim();
    } catch (e) {}
  }

  // 2) .ocdk-outputs.json or cdktf output -json
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
    fail('Deploy the stack first. Log IDs come from terraform output or set OCI_LOG_GROUP_ID and OCI_EXECUTION_LOG_ID.');
  }

  const scope = `${compId}/${logGroupId}/${executionLogId}`;
  const limit = 20;
  const intervalMs = parseInt(process.env.OCI_LOG_INTERVAL_MS || '5000', 10) || 5000;
  const debug = process.env.OCI_TAIL_DEBUG === '1' || process.env.OCI_TAIL_DEBUG === 'true';

  function runOneSearch(timeStart, timeEnd) {
    const query = `search "${scope}" | sort by datetime desc | limit ${limit}`;
    if (debug) {
      console.error('[oci-tail]', timeStart, '->', timeEnd);
    }
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
      return null;
    }
    const raw = (res.stdout || '').trim();
    const first = raw.indexOf('{');
    const last = raw.lastIndexOf('}');
    if (first === -1 || last <= first) return [];
    try {
      const json = JSON.parse(raw.slice(first, last + 1));
      const results = json?.data?.results || [];
      const lines = [];
      for (let i = results.length - 1; i >= 0; i -= 1) {
        const item = results[i];
        const data = item?.data || item;
        const logContent = data?.logContent || data;
        const inner = logContent?.data || logContent;
        const id = logContent?.id ?? data?.id ?? null;
        let ts = logContent?.time ?? data?.datetime ?? data?.time;
        if (typeof ts === 'number') ts = new Date(ts).toISOString();
        else if (!ts) ts = new Date().toISOString();
        const message = (inner?.message ?? logContent?.message ?? '').trim();
        lines.push({ id, ts: String(ts), message });
      }
      return lines;
    } catch (e) {
      return [];
    }
  }

  const seenKeys = new Set();
  let pollCount = 0;

  process.on('SIGINT', () => {
    process.exit(0);
  });

  // eslint-disable-next-line no-constant-condition
  while (true) {
    pollCount += 1;
    const now = new Date();
    const start = new Date(now.getTime() - 10 * 60 * 1000);
    const timeStart = start.toISOString();
    const timeEnd = now.toISOString();

    const lines = runOneSearch(timeStart, timeEnd);
    if (lines === null) {
      process.exit(1);
    }
    if (debug && (pollCount === 1 || lines.length > 0)) {
      console.error('[oci-tail] poll #' + pollCount, 'lines:', lines.length, 'seen:', seenKeys.size);
    }
    for (const { id, ts, message } of lines) {
      const key = (id && String(id).trim()) || `${ts}|${message}`;
      if (seenKeys.has(key)) continue;
      seenKeys.add(key);
      console.log(`${ts} ${message}`);
    }
    await new Promise((r) => setTimeout(r, intervalMs));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

