#!/usr/bin/env node
/** Delete a CLI-managed OCI Functions Code-only function before Terraform destroy. */

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectDir = path.resolve(process.env.OCI_CODE_ONLY_SOURCE_DIR || process.cwd());
const cliEnvPath = (process.env.OCI_CLI_PATH || '').trim();
const ociCliPath = cliEnvPath
  ? (cliEnvPath.includes(path.sep) ? path.resolve(cliEnvPath) : cliEnvPath)
  : 'oci';

function fail(message) {
  console.error(`Code-only destroy failed: ${message}`);
  process.exit(1);
}

function runOci(args) {
  const result = spawnSync(ociCliPath, args, { cwd: projectDir, encoding: 'utf8', stdio: 'pipe', shell: false });
  if (result.error) fail(`could not execute OCI CLI at ${ociCliPath}: ${result.error.message}`);
  if (result.status !== 0) fail(`OCI CLI command failed (exit ${result.status}): ${(result.stderr || '').trim() || args.join(' ')}`);
  return result.stdout || '';
}

function jsonOci(args) {
  const output = runOci([...args, '--output', 'json']).trim();
  const objectStart = output.indexOf('{');
  const arrayStart = output.indexOf('[');
  const start = objectStart !== -1 ? objectStart : arrayStart;
  const end = Math.max(output.lastIndexOf('}'), output.lastIndexOf(']'));
  try {
    return JSON.parse(start === -1 || end < start ? output : output.slice(start, end + 1));
  } catch (error) {
    fail(`OCI CLI returned invalid JSON for: ${args.join(' ')} (${error.message})`);
  }
}

function yamlValue(contents, key) {
  const match = contents.match(new RegExp(`^\\s*${key}\\s*:\\s*(?:["']([^"']*)["']|([^#\\r\\n]*))`, 'm'));
  return (match?.[1] || match?.[2] || '').trim();
}

function resourceDisplayName(resource) {
  return resource.displayName || resource['display-name'] || '';
}

function main() {
  const compartmentId = (process.env.OCI_COMPARTMENT_ID || process.env.OCI_COMPARTMENT_OCID || '').trim();
  if (!compartmentId) fail('set OCI_COMPARTMENT_ID (or OCI_COMPARTMENT_OCID).');
  const funcYamlPath = path.join(projectDir, 'func.yaml');
  const yaml = fs.existsSync(funcYamlPath) ? fs.readFileSync(funcYamlPath, 'utf8') : '';
  const functionName = (process.env.OCI_FUNCTION_NAME || yamlValue(yaml, 'name')).trim();
  const appName = (process.env.OCI_FUNCTION_APP_NAME || functionName).trim();
  if (!functionName) fail('set OCI_FUNCTION_NAME or add name: to func.yaml.');
  if (!appName) fail('set OCI_FUNCTION_APP_NAME.');

  const version = runOci(['--version']).trim();
  const apps = jsonOci(['fn', 'application', 'list', '--compartment-id', compartmentId, '--all']).data || [];
  const app = apps.find((item) => resourceDisplayName(item) === appName);
  if (!app) {
    console.log(`Functions Application ${appName} is absent; no code-only function needs deletion.`);
    return;
  }
  const functions = jsonOci(['fn', 'function', 'list', '--application-id', app.id, '--all']).data || [];
  const matches = functions.filter((item) => resourceDisplayName(item) === functionName);
  if (matches.length === 0) {
    console.log(`Code-only function ${functionName} is absent; continuing with Terraform destroy.`);
    return;
  }
  if (matches.length > 1) fail(`multiple functions are named "${functionName}" in application "${appName}".`);

  console.log(`Deleting code-only function ${functionName} with OCI CLI ${version}...`);
  const result = spawnSync(ociCliPath, [
    'fn', 'function', 'delete',
    '--function-id', matches[0].id,
    '--force',
    '--wait-for-state', 'SUCCEEDED',
    '--max-wait-seconds', '600',
    '--wait-interval-seconds', '10',
  ], { cwd: projectDir, stdio: 'inherit', shell: false });
  if (result.error || result.status !== 0) fail(`OCI CLI function deletion failed: ${result.error?.message || `exit ${result.status}`}`);
  console.log(`Deleted code-only function: ${matches[0].id}`);
}

main();
