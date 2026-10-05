#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const fixtureDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ocdk-code-only-test-'));
const preservedEnv = Object.fromEntries([
  'OCI_PROJECT_DIR', 'OCI_COMPARTMENT_ID', 'OCI_NAMESPACE', 'OCI_DEPLOYMENT_TYPE', 'deployment-type',
  'OCI_STACK_ACTION', 'CDKTF_OUTDIR',
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

    const nodeFixtureDir = path.join(fixtureDir, 'node-function');
    fs.mkdirSync(path.join(nodeFixtureDir, 'node_modules', '@fnproject', 'fdk'), { recursive: true });
    fs.mkdirSync(path.join(nodeFixtureDir, 'node_modules', 'runtime-dependency'), { recursive: true });
    fs.mkdirSync(path.join(nodeFixtureDir, 'node_modules', '@mikarinneoracle', 'oci-cdk'), { recursive: true });
    fs.writeFileSync(path.join(nodeFixtureDir, 'func.yaml'), [
      'name: node-archive-smoke-test',
      'runtime: node',
      'entrypoint: node func.js',
      'build_image: fnproject/node:24-dev',
      '',
    ].join('\n'));
    fs.writeFileSync(path.join(nodeFixtureDir, 'func.js'), 'module.exports = () => ({ ok: true });\n');
    fs.writeFileSync(path.join(nodeFixtureDir, 'package.json'), JSON.stringify({
      dependencies: { '@fnproject/fdk': '1.0.0', '@mikarinneoracle/oci-cdk': '1.4.3' },
    }));
    fs.writeFileSync(path.join(nodeFixtureDir, 'node_modules', '@fnproject', 'fdk', 'package.json'), JSON.stringify({
      name: '@fnproject/fdk', dependencies: { 'runtime-dependency': '1.0.0' },
    }));
    fs.writeFileSync(path.join(nodeFixtureDir, 'node_modules', 'runtime-dependency', 'package.json'), JSON.stringify({ name: 'runtime-dependency' }));
    fs.writeFileSync(path.join(nodeFixtureDir, 'node_modules', '@mikarinneoracle', 'oci-cdk', 'package.json'), JSON.stringify({ name: '@mikarinneoracle/oci-cdk' }));
    fs.writeFileSync(path.join(nodeFixtureDir, 'node_modules', '@mikarinneoracle', 'oci-cdk', 'large-tool-file.js'), 'x'.repeat(1024 * 1024));

    process.env.OCI_PROJECT_DIR = nodeFixtureDir;
    const nodeConfig = await getOciConfig();
    if (nodeConfig.handler !== 'func.js' || !nodeConfig.codeOnlyArchiveBase64) {
      throw new Error('Node.js code-only archive configuration was not resolved');
    }
    const nodeArchivePath = path.join(nodeFixtureDir, 'function.zip');
    fs.writeFileSync(nodeArchivePath, Buffer.from(nodeConfig.codeOnlyArchiveBase64, 'base64'));
    const nodeArchive = spawnSync('unzip', ['-Z1', nodeArchivePath], { encoding: 'utf8' });
    const nodeEntries = nodeArchive.stdout.split(/\r?\n/);
    if (nodeArchive.status !== 0 || !nodeEntries.includes('node_modules/@fnproject/fdk/package.json') || !nodeEntries.includes('node_modules/runtime-dependency/package.json')) {
      throw new Error(`archive is missing a Node.js runtime dependency: ${nodeArchive.stderr}`);
    }
    if (nodeEntries.some((entry) => entry.includes('node_modules/@mikarinneoracle/oci-cdk'))) {
      throw new Error('archive incorrectly contains OCDK tooling files');
    }

    const synthDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ocdk-code-only-synth-'));
    try {
      const repoRoot = path.resolve(__dirname, '..');
      const synth = spawnSync(process.execPath, [path.join(repoRoot, 'lib/bin/app.js')], {
        cwd: repoRoot,
        encoding: 'utf8',
        env: {
          ...process.env,
          OCI_PROJECT_DIR: fixtureDir,
          OCI_COMPARTMENT_ID: 'ocid1.compartment.oc1..codeonlysmoketest',
          OCI_NAMESPACE: 'codeonlysmoketest',
          OCI_STACK_ACTION: 'function-only',
          CDKTF_OUTDIR: synthDir,
        },
      });
      if (synth.status !== 0) throw new Error(`code-only synthesis failed: ${synth.stderr || synth.stdout}`);
      const terraform = JSON.parse(fs.readFileSync(path.join(synthDir, 'stacks', 'oci-stack', 'cdk.tf.json'), 'utf8'));
      if (terraform.resource.oci_artifacts_container_repository) {
        throw new Error('code-only synthesis unexpectedly created an OCIR repository');
      }
      const fn = terraform.resource.oci_functions_function?.Function;
      if (fn?.image || fn?.source_details?.[0]?.archive_source_details?.[0]?.archive_source_type !== 'DIRECT_ARCHIVE') {
        throw new Error('code-only synthesis did not use a direct archive Function source');
      }
    } finally {
      fs.rmSync(synthDir, { recursive: true, force: true });
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
