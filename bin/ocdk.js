#!/usr/bin/env node
/**
 * OCDK CLI - CDK-style commands (same as CDK: ocdk deploy, ocdk diff, etc.)
 * Forwards to cdktf via npm run when possible, otherwise runs cdktf from PATH.
 */

const { spawnSync } = require('child_process');
const path = require('path');
const os = require('os');

const fs = require('fs');
const root = path.join(__dirname, '..');
const args = process.argv.slice(2);
const command = args[0];
const projectDirFile = path.join(root, '.ocdk-project-dir');
const codeOnlyEnabled =
  process.env.OCI_CODE_ONLY === '1' ||
  process.env['code-only'] === '1' ||
  args.includes('-code-only') ||
  args.includes('--code-only');

function findFunctionAppId(value) {
  if (!value || typeof value !== 'object') return undefined;
  if (Object.prototype.hasOwnProperty.call(value, 'function_app_id')) {
    const output = value.function_app_id;
    if (typeof output === 'string') return output;
    if (output && typeof output === 'object' && typeof output.value === 'string') return output.value;
  }
  for (const child of Object.values(value)) {
    const found = findFunctionAppId(child);
    if (found) return found;
  }
  return undefined;
}

function resolveCodeOnlyFunctionAppId(env) {
  if (env.OCI_FUNCTION_APP_ID?.trim()) return env.OCI_FUNCTION_APP_ID.trim();
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ocdk-function-app-output-'));
  const outputFile = path.join(tempDir, 'outputs.json');
  const stackName = env.OCI_STACK_NAME || 'oci-stack';
  try {
    const result = spawnSync('npm', ['run', '--silent', 'cdktf', '--', 'output', stackName, '--outputs-file', outputFile], {
      cwd: root,
      env,
      encoding: 'utf8',
      shell: false,
    });
    if (result.status !== 0 || !fs.existsSync(outputFile)) {
      const detail = (result.stderr || result.stdout || '').trim();
      throw new Error(detail || 'cdktf output did not produce an output file.');
    }
    const appId = findFunctionAppId(JSON.parse(fs.readFileSync(outputFile, 'utf8')));
    if (!appId) throw new Error('Terraform output "function_app_id" is missing.');
    return appId;
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function resolveCodeOnlyArchivePath(projectDir, env) {
  let functionName = env.OCI_FUNCTION_NAME?.trim();
  if (!functionName) {
    try {
      const funcYaml = fs.readFileSync(path.join(projectDir, 'func.yaml'), 'utf8');
      const match = funcYaml.match(/^\s*name\s*:\s*(?:["']([^"']*)["']|([^#\r\n]*))/m);
      functionName = (match?.[1] || match?.[2] || '').trim();
    } catch {
      return undefined;
    }
  }
  if (!functionName) return undefined;
  const safeName = functionName.replace(/[^A-Za-z0-9._-]/g, '-');
  return path.join(projectDir, `${safeName || 'function'}.zip`);
}

const npmRunCommands = ['deploy', 'diff', 'synth', 'destroy', 'list', 'get'];

if (!command || command.startsWith('-')) {
  console.log(`
OCDK (OCI CDK) - CDK-style commands

Usage: ocdk <command> [options]

Commands (same as CDK):
  deploy      Deploy the stack
  diff        Compare stack with current state
  synth       Synthesize Terraform
  destroy     Destroy the stack
  list        List stacks
  get                Generate provider bindings (run from project root; use ocdk get, not cdktf get)
  write-log-config   (Optional) Write tail-function-logs.js to project root with log IDs from terraform output
  tail:execution-log Tail function execution logs (gets log IDs from terraform output or env)

Examples:
  ocdk deploy
  ocdk diff
  ocdk get
  ocdk deploy --auto-approve
`);
  process.exit(args[0] === '--help' || args[0] === '-h' ? 0 : 1);
}

// write-log-config – write tail-function-logs.js from terraform output (run from project root after deploy)
if (command === 'write-log-config') {
  const projectDir = process.cwd();
  const script = path.join(root, 'bin', 'write-log-config.js');
  if (!fs.existsSync(script)) {
    console.error('Missing script: "write-log-config". Update @mikarinneoracle/oci-cdk (npm update @mikarinneoracle/oci-cdk).');
    process.exit(1);
  }
  const result = spawnSync('node', [script, ...args.slice(1)], {
    stdio: 'inherit',
    cwd: projectDir,
    shell: true,
    env: process.env,
  });
  process.exit(result.status ?? 1);
}

// tail:execution-log – run project's tail-function-logs.js if present (in-code defaults from write-log-config), else package fallback
if (command === 'tail:execution-log') {
  const projectDir = process.cwd();
  const projectScript = path.join(projectDir, 'tail-function-logs.js');
  if (fs.existsSync(projectScript)) {
    const result = spawnSync('node', [projectScript, ...args.slice(1)], {
      stdio: 'inherit',
      cwd: projectDir,
      shell: true,
      env: process.env,
    });
    process.exit(result.status ?? 1);
  }
  const script = path.join(root, 'bin', 'tail-execution-log.js');
  if (!fs.existsSync(script)) {
    console.error('Missing script: "tail:execution-log". Update @mikarinneoracle/oci-cdk (npm update @mikarinneoracle/oci-cdk).');
    process.exit(1);
  }
  const result = spawnSync('node', [script, ...args.slice(1)], {
    stdio: 'inherit',
    cwd: projectDir,
    shell: true,
    env: process.env,
  });
  process.exit(result.status ?? 1);
}

// Code-only Functions use CDKTF for the Function Application/infrastructure,
// then OCI CLI preview for the archive-function itself.
if (command === 'deploy' && codeOnlyEnabled) {
  const projectDir = process.cwd();
  const script = path.join(root, 'bin', 'deploy-code-only.js');
  const passthroughArgs = args.slice(1).filter((arg) => arg !== '-code-only' && arg !== '--code-only');
  if (!fs.existsSync(script)) {
    console.error('Missing script: "deploy-code-only". Update @mikarinneoracle/oci-cdk.');
    process.exit(1);
  }
  const env = {
    ...process.env,
    OCI_CODE_ONLY: '1',
    OCI_STACK_ACTION: 'function-only',
    OCI_PROJECT_DIR: projectDir,
  };
  const infrastructure = spawnSync('npm', ['run', '--silent', 'deploy', '--', ...passthroughArgs], {
    stdio: 'inherit',
    cwd: root,
    shell: false,
    env,
  });
  if (infrastructure.status !== 0) process.exit(infrastructure.status ?? 1);
  let functionAppId;
  try {
    functionAppId = resolveCodeOnlyFunctionAppId(env);
  } catch (error) {
    console.error(`Code-only deploy failed: could not read Terraform Function App output: ${error.message}`);
    process.exit(1);
  }
  const result = spawnSync('node', [script], {
    stdio: 'inherit',
    cwd: projectDir,
    shell: false,
    env: { ...env, OCI_FUNCTION_APP_ID: functionAppId },
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
  const logConfig = spawnSync('node', [path.join(root, 'bin', 'write-log-config.js')], {
    stdio: 'inherit',
    cwd: projectDir,
    shell: false,
    env,
  });
  if (logConfig.status !== 0) {
    console.warn('Code-only function deployed, but log-tail configuration could not be written. Run: npx ocdk write-log-config');
  }
  process.exit(0);
}

// Destroy the CLI-managed archive function before Terraform destroys its
// Function Application and supporting infrastructure.
if (command === 'destroy' && codeOnlyEnabled) {
  const projectDir = process.cwd();
  const script = path.join(root, 'bin', 'destroy-code-only.js');
  const passthroughArgs = args.slice(1).filter((arg) => arg !== '-code-only' && arg !== '--code-only');
  if (!fs.existsSync(script)) {
    console.error('Missing script: "destroy-code-only". Update @mikarinneoracle/oci-cdk.');
    process.exit(1);
  }
  const env = {
    ...process.env,
    OCI_CODE_ONLY: '1',
    OCI_STACK_ACTION: 'function-only',
    OCI_PROJECT_DIR: projectDir,
  };
  let functionAppId;
  try {
    functionAppId = resolveCodeOnlyFunctionAppId(env);
  } catch (error) {
    console.error(`Code-only destroy failed: could not read Terraform Function App output: ${error.message}`);
    process.exit(1);
  }
  const functionDestroy = spawnSync('node', [script], {
    stdio: 'inherit',
    cwd: projectDir,
    shell: false,
    env: { ...env, OCI_FUNCTION_APP_ID: functionAppId },
  });
  if (functionDestroy.status !== 0) process.exit(functionDestroy.status ?? 1);
  const infrastructure = spawnSync('npm', ['run', '--silent', 'destroy', '--', ...passthroughArgs], {
    stdio: 'inherit',
    cwd: root,
    shell: false,
    env,
  });
  if (infrastructure.status === 0) {
    const archivePath = resolveCodeOnlyArchivePath(projectDir, env);
    if (archivePath && fs.existsSync(archivePath)) {
      fs.rmSync(archivePath, { force: true });
      console.log(`Removed code-only source archive: ${archivePath}`);
    }
  }
  process.exit(infrastructure.status ?? 1);
}

// Use npm run <command> so we use project's cdktf without requiring global CLI
// Pass caller's cwd so the stack can find func.yaml and target/ in a Java project (env + file fallback)
if (npmRunCommands.includes(command)) {
  const projectDir = process.cwd();
  const env = { ...process.env, OCI_PROJECT_DIR: projectDir };
  try {
    fs.writeFileSync(projectDirFile, projectDir, 'utf8');
  } catch (e) {
    // ignore if package dir not writable
  }
  const result = spawnSync('npm', ['run', '--silent', command, '--', ...args.slice(1)], {
    stdio: 'inherit',
    cwd: root,
    shell: true,
    env,
  });
  try {
    if (fs.existsSync(projectDirFile)) fs.unlinkSync(projectDirFile);
  } catch (e) {}
  process.exit(result.status ?? 1);
}

// Other commands (watch, output, login, ...): run cdktf from PATH
const result = spawnSync('cdktf', [command, ...args.slice(1)], {
  stdio: 'inherit',
  cwd: root,
  shell: true,
});

process.exit(result.status ?? 1);
