#!/usr/bin/env node
/**
 * Deploy an OCI Functions Code-only archive with OCI CLI preview.
 *
 * This is deliberately separate from the CDKTF image deploy flow: OCI builds
 * the execution image from the supplied archive, so Docker and OCIR are not
 * involved. A Functions Application must already exist.
 */

const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const projectDir = path.resolve(process.env.OCI_CODE_ONLY_SOURCE_DIR || process.cwd());
const cliEnvPath = (process.env.OCI_CLI_PATH || '').trim();
const ociCliPath = cliEnvPath
  ? (cliEnvPath.includes(path.sep) ? path.resolve(cliEnvPath) : cliEnvPath)
  : 'oci';

function fail(message) {
  console.error(`Code-only deploy failed: ${message}`);
  process.exit(1);
}

function runOci(args, options = {}) {
  const result = spawnSync(ociCliPath, args, {
    cwd: options.cwd || projectDir,
    encoding: options.encoding || 'utf8',
    stdio: options.stdio || 'pipe',
    shell: false,
  });
  if (result.error) fail(`could not execute OCI CLI at ${ociCliPath}: ${result.error.message}`);
  if (result.status !== 0) {
    const stderr = (result.stderr || '').trim();
    fail(`OCI CLI command failed (exit ${result.status}): ${stderr || args.join(' ')}`);
  }
  return result.stdout || '';
}

function yamlValue(contents, key) {
  const match = contents.match(new RegExp(`^\\s*${key}\\s*:\\s*(?:["']([^"']*)["']|([^#\\r\\n]*))`, 'm'));
  return (match?.[1] || match?.[2] || '').trim();
}

function integerValue(value, name, fallback) {
  const parsed = Number.parseInt(value || String(fallback), 10);
  if (!Number.isInteger(parsed) || parsed <= 0) fail(`${name} must be a positive integer.`);
  return String(parsed);
}

function readFunctionMetadata() {
  const funcYamlPath = path.join(projectDir, 'func.yaml');
  const yaml = fs.existsSync(funcYamlPath) ? fs.readFileSync(funcYamlPath, 'utf8') : '';
  const functionName = (process.env.OCI_FUNCTION_NAME || yamlValue(yaml, 'name')).trim();
  const appName = (process.env.OCI_FUNCTION_APP_NAME || functionName).trim();
  const handler = (process.env.OCI_FUNCTION_HANDLER || yamlValue(yaml, 'cmd')).trim();
  const runtimeName = (process.env.OCI_CODE_ONLY_RUNTIME_NAME || '').trim();
  const memory = integerValue(process.env.OCI_FUNCTION_MEMORY_MB || yamlValue(yaml, 'memory'), 'OCI_FUNCTION_MEMORY_MB', 256);
  const timeout = integerValue(process.env.OCI_FUNCTION_TIMEOUT_SECONDS || yamlValue(yaml, 'timeout'), 'OCI_FUNCTION_TIMEOUT_SECONDS', 30);

  if (!functionName) fail('set OCI_FUNCTION_NAME or add name: to func.yaml.');
  if (!appName) fail('set OCI_FUNCTION_APP_NAME.');
  if (!runtimeName) fail('set OCI_CODE_ONLY_RUNTIME_NAME (for example python312.ol9).');
  if (!handler) fail('set OCI_FUNCTION_HANDLER or add cmd: to func.yaml.');

  return { functionName, appName, handler, runtimeName, memory, timeout };
}

function createArchive() {
  if (!fs.existsSync(projectDir) || !fs.statSync(projectDir).isDirectory()) {
    fail(`source directory does not exist: ${projectDir}`);
  }
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ocdk-code-only-'));
  const archivePath = path.join(tempDir, 'function-source.zip');
  const zip = spawnSync('zip', [
    '-q', '-r', archivePath, '.',
    '-x', 'node_modules/*',
    '-x', '.git/*',
    '-x', '.tools/*',
    '-x', '.terraform/*',
    '-x', 'cdktf.out/*',
  ], { cwd: projectDir, encoding: 'utf8', shell: false });
  if (zip.error || zip.status !== 0) {
    fs.rmSync(tempDir, { recursive: true, force: true });
    fail(`could not create source archive with zip: ${zip.stderr?.trim() || zip.error?.message || 'unknown error'}`);
  }
  return { tempDir, archivePath };
}

function jsonOci(args) {
  const output = runOci([...args, '--output', 'json']).trim();
  // Preview CLI can return an empty body for a successful list of no functions.
  if (!output) return { data: [] };
  const objectStart = output.indexOf('{');
  const arrayStart = output.indexOf('[');
  const start = objectStart !== -1 ? objectStart : arrayStart;
  const end = Math.max(output.lastIndexOf('}'), output.lastIndexOf(']'));
  try {
    return JSON.parse(start === -1 || end < start ? output : output.slice(start, end + 1));
  } catch {
    fail(`OCI CLI returned invalid JSON for: ${args.join(' ')}`);
  }
}

function resourceDisplayName(resource) {
  return resource.displayName || resource['display-name'] || '';
}

function findFunctionId(applicationId, functionName) {
  const result = jsonOci(['fn', 'function', 'list', '--application-id', applicationId, '--all']);
  const matches = (result.data || []).filter((fn) => resourceDisplayName(fn) === functionName);
  if (matches.length > 1) fail(`multiple functions are named "${functionName}" in the selected application.`);
  return matches[0]?.id;
}

function verifyPreviewCli() {
  const version = runOci(['--version']).trim();
  const help = runOci(['fn', 'function', 'create', '--help']);
  if (!help.includes('archive-function')) {
    fail(`OCI CLI ${version || 'at ' + ociCliPath} does not support archive-function. Set OCI_CLI_PATH to the OCI CLI preview binary.`);
  }
  console.log(`Using OCI CLI ${version} at ${ociCliPath}`);
}

function main() {
  const unexpectedArgs = process.argv.slice(2).filter((arg) => arg !== '--auto-approve');
  if (unexpectedArgs.length) fail(`unsupported code-only deploy option(s): ${unexpectedArgs.join(', ')}`);
  verifyPreviewCli();
  const metadata = readFunctionMetadata();
  const applicationId = (process.env.OCI_FUNCTION_APP_ID || '').trim();
  if (!applicationId) fail('Terraform output OCI_FUNCTION_APP_ID is missing. Run through "ocdk deploy --code-only".');
  const archive = createArchive();
  try {
    const functionId = findFunctionId(applicationId, metadata.functionName);
    const commonArgs = [
      '--archive-file', archive.archivePath,
      '--functions-runtime-name', metadata.runtimeName,
      '--handler', metadata.handler,
      '--memory-in-mbs', metadata.memory,
      '--timeout-in-seconds', metadata.timeout,
      '--wait-for-state', 'SUCCEEDED',
      '--max-wait-seconds', '600',
      '--wait-interval-seconds', '10',
    ];
    if (functionId) {
      console.log(`Updating code-only function ${metadata.functionName} in ${metadata.appName}...`);
      runOci(['fn', 'function', 'update', 'archive-function', '--function-id', functionId, '--runtime-config', 'FUNCTION_UPDATE', '--force', ...commonArgs], { stdio: 'inherit' });
      console.log(`Updated code-only function: ${functionId}`);
    } else {
      console.log(`Creating code-only function ${metadata.functionName} in ${metadata.appName}...`);
      runOci([
        'fn', 'function', 'create', 'archive-function', 'direct-archive', 'fn-update-runtime-config',
        '--application-id', applicationId,
        '--display-name', metadata.functionName,
        ...commonArgs,
      ], { stdio: 'inherit' });
      console.log('Created code-only function.');
    }
  } finally {
    fs.rmSync(archive.tempDir, { recursive: true, force: true });
  }
}

main();
