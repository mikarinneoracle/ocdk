#!/usr/bin/env node
import { App } from 'cdktf';
import { OciStack } from '../lib/oci-stack';
import { getOciConfig } from '../config/oci-config';

(async () => {
  const ociConfig = await getOciConfig();
  const app = new App();
  const stackName = process.env.OCI_STACK_NAME || 'oci-stack';

  new OciStack(app, stackName, {
    compartmentId: ociConfig.compartmentId,
    ocirCompartmentId: ociConfig.ocirCompartmentId,
    tenancyId: ociConfig.tenancyId,
    region: ociConfig.region,
    namespace: ociConfig.namespace,
    functionAppName: ociConfig.functionAppName,
    functionName: ociConfig.functionName,
    functionJarPath: ociConfig.functionJarPath,
    dockerContextPath: ociConfig.dockerContextPath,
    imageTag: ociConfig.imageTag,
    handler: ociConfig.handler,
    ocirRepositoryName: ociConfig.ocirRepositoryName,
    backend: ociConfig.backend,
  });

  app.synth();
})();
