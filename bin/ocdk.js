#!/usr/bin/env node
/**
 * OCDK CLI - CDK-style commands (same as CDK: ocdk deploy, ocdk diff, etc.)
 * Forwards to cdktf via npm run when possible, otherwise runs cdktf from PATH.
 */

const { spawnSync } = require('child_process');
const path = require('path');

const fs = require('fs');
const root = path.join(__dirname, '..');
const args = process.argv.slice(2);
const command = args[0];
const projectDirFile = path.join(root, '.ocdk-project-dir');

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
  redeploy:function  Rebuild function image (full Dockerfile), push to OCIR, update function (runs npm run redeploy:function in your project)

Examples:
  ocdk deploy
  ocdk diff
  ocdk get
  ocdk redeploy:function
  ocdk deploy --auto-approve
`);
  process.exit(args[0] === '--help' || args[0] === '-h' ? 0 : 1);
}

// redeploy:function: run project script if present, else default (docker build + push from cwd)
if (command === 'redeploy:function') {
  const cwd = process.cwd();
  let useProjectScript = false;
  try {
    const pkgPath = path.join(cwd, 'package.json');
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      const script = pkg.scripts && pkg.scripts['redeploy:function'];
      useProjectScript = typeof script === 'string' && script.length > 0;
    }
  } catch (e) {}
  if (useProjectScript) {
    const result = spawnSync('npm', ['run', 'redeploy:function', '--', ...args.slice(1)], {
      stdio: 'inherit',
      cwd,
      shell: true,
      env: process.env,
    });
    process.exit(result.status ?? 1);
  }
  const defaultScript = path.join(root, 'bin', 'redeploy-function.js');
  if (!fs.existsSync(defaultScript)) {
    console.error('Missing script: "redeploy:function". Add it to your package.json or update @mikarinneoracle/oci-cdk (npm update @mikarinneoracle/oci-cdk).');
    process.exit(1);
  }
  const result = spawnSync('node', [defaultScript, ...args.slice(1)], {
    stdio: 'inherit',
    cwd,
    shell: true,
    env: process.env,
  });
  process.exit(result.status ?? 1);
}

// Use npm run <command> so we use project's cdktf without requiring global CLI
// Pass caller's cwd so the stack can find func.yaml and target/ in a Java project (env + file fallback)
if (npmRunCommands.includes(command)) {
  const projectDir = process.cwd();
  const env = { ...process.env, OCDK_PROJECT_DIR: projectDir };
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
