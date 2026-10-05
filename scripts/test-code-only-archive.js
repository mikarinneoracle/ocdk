#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const fixtureDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ocdk-code-only-test-'));
const preservedEnv = Object.fromEntries([
  'OCI_PROJECT_DIR', 'OCI_COMPARTMENT_ID', 'OCI_NAMESPACE', 'OCI_DEPLOYMENT_TYPE', 'deployment-type',
].map((key) => [key, process.env[key]]));

async function main() {
  try {
    fs.writeFileSync(path.join(fixtureDir, 'func.yaml'), [
      'name: archive-smoke-test',
      'runtime: python',
      'entrypoint: func.handler',
      'build_image: fnproject/python:3.12-dev',
      'memory: 128',
      'timeout: 30',
      '',
    ].join('\n'));
    fs.writeFileSync(path.join(fixtureDir, 'func.py'), 'def handler(ctx, data=None):\n    return {"ok": True}\n');

    process.env.OCI_PROJECT_DIR = fixtureDir;
    process.env.OCI_COMPARTMENT_ID = 'ocid1.compartment.oc1..codeonlysmoketest';
    process.env.OCI_NAMESPACE = 'codeonlysmoketest';
    delete process.env.OCI_DEPLOYMENT_TYPE;
    delete process.env['deployment-type'];

    const { getOciConfig } = require('../lib/config/oci-config');
    const config = await getOciConfig();
    if (config.deploymentType !== 'code-only') throw new Error('code-only is not the default deployment type');
    if (config.codeOnlyRuntimeName !== 'python312.ol9') throw new Error(`unexpected runtime: ${config.codeOnlyRuntimeName}`);
    if (config.handler !== 'func.handler') throw new Error(`unexpected handler: ${config.handler}`);
    if (!config.codeOnlyArchiveBase64) throw new Error('archive was not created');

    const archivePath = path.join(fixtureDir, 'function.zip');
    fs.writeFileSync(archivePath, Buffer.from(config.codeOnlyArchiveBase64, 'base64'));
    const listed = spawnSync('unzip', ['-Z1', archivePath], { encoding: 'utf8' });
    if (listed.status !== 0 || !listed.stdout.split(/\r?\n/).includes('function/func.py')) {
      throw new Error(`archive does not contain function/func.py: ${listed.stderr}`);
    }
    console.log('Code-only archive smoke test passed.');
  } finally {
    for (const [key, value] of Object.entries(preservedEnv)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    fs.rmSync(fixtureDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
