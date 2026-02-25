#!/usr/bin/env node
/**
 * Default redeploy:function – build image with project Dockerfile and push to OCIR.
 * Used when the project does not define a "redeploy:function" script.
 * Requires: OCI_REGION, OCI_NAMESPACE, OCI_FUNCTION_NAME or OCI_OCIR_REPOSITORY_NAME; optional OCI_IMAGE_TAG.
 */

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const REGION_TO_OCIR_HOST = {
  'eu-frankfurt-1': 'fra', 'us-phoenix-1': 'phx', 'us-ashburn-1': 'iad', 'uk-london-1': 'lhr',
  'ap-tokyo-1': 'nrt', 'ap-mumbai-1': 'bom', 'ap-seoul-1': 'icn', 'ca-toronto-1': 'yyz',
  'sa-saopaulo-1': 'gru', 'ap-sydney-1': 'syd', 'eu-zurich-1': 'zrh', 'me-dubai-1': 'dxb',
  'ap-osaka-1': 'kix', 'eu-amsterdam-1': 'ams', 'ap-singapore-1': 'sin', 'ap-hyderabad-1': 'hyd',
  'eu-milan-1': 'mxp', 'sa-santiago-1': 'scl', 'ap-melbourne-1': 'mel', 'eu-stockholm-1': 'arn',
  'me-jeddah-1': 'jed', 'af-johannesburg-1': 'jnb', 'il-jerusalem-1': 'tlv', 'mx-queretaro-1': 'qro',
  'eu-marseille-1': 'mrs',
};

function ocirHost(region) {
  return REGION_TO_OCIR_HOST[region] || region;
}

function main() {
  const cwd = process.cwd();
  const region = process.env.OCI_REGION?.trim();
  const namespace = process.env.OCI_NAMESPACE?.trim();
  const repo = process.env.OCI_OCIR_REPOSITORY_NAME?.trim() || process.env.OCI_FUNCTION_NAME?.trim() || 'oci-function';
  const tag = process.env.OCI_IMAGE_TAG?.trim() || 'latest';

  if (!region || !namespace) {
    console.error('redeploy:function requires OCI_REGION and OCI_NAMESPACE. Set them or add a "redeploy:function" script to your package.json.');
    process.exit(1);
  }

  const registry = `${ocirHost(region)}.ocir.io`;
  const imageUrl = `${registry}/${namespace}/${repo}:${tag}`;

  const dockerfile = path.join(cwd, 'Dockerfile');
  if (!fs.existsSync(dockerfile)) {
    console.error('No Dockerfile found in current directory. Run from your function project root or add a "redeploy:function" script.');
    process.exit(1);
  }

  console.log('Building and pushing', imageUrl, '...');
  const build = spawnSync('docker', ['build', '--platform', 'linux/amd64', '-t', imageUrl, '.'], {
    stdio: 'inherit',
    cwd,
    shell: true,
  });
  if (build.status !== 0) process.exit(build.status ?? 1);

  const push = spawnSync('docker', ['push', imageUrl], { stdio: 'inherit', shell: true });
  process.exit(push.status ?? 1);
}

main();
