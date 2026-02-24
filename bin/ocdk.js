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
  get         Generate provider bindings

Examples:
  ocdk deploy
  ocdk diff
  ocdk deploy --auto-approve
`);
  process.exit(args[0] === '--help' || args[0] === '-h' ? 0 : 1);
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
