#!/usr/bin/env node
import { App } from 'cdktf';
import { FunctionStack } from '../lib/function-stack';
import { getOciConfig } from '../config/oci-config';

(async () => {
  const ociConfig = await getOciConfig();
  const app = new App();
  const stackName = process.env.OCI_STACK_NAME || 'function-stack';

  new FunctionStack(app, stackName, {
    compartmentId: ociConfig.compartmentId,
    ocirCompartmentId: ociConfig.ocirCompartmentId,
    tenancyId: ociConfig.tenancyId,
    region: ociConfig.region,
    namespace: ociConfig.namespace,
    functionAppName: ociConfig.functionAppName,
    functionName: ociConfig.functionName,
    ocirRepositoryName: ociConfig.ocirRepositoryName,
    apiGwPathPrefix: ociConfig.apiGwPathPrefix,
    apiGwRoutePath: ociConfig.apiGwRoutePath,
    apiGwMethods: ociConfig.apiGwMethods,
    pgUrl: ociConfig.pgUrl,
    vaultOcid: ociConfig.vaultOcid,
    keyOcid: ociConfig.keyOcid,
    pgSecretOcid: ociConfig.pgSecretOcid,
    backend: ociConfig.backend,
  });

  app.synth();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
