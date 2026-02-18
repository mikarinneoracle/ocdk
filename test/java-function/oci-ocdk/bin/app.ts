#!/usr/bin/env node
import { App } from 'cdktf';
import { TestFunctionStack } from '../lib/test-function-stack';
import { ociConfig } from '../config/oci-config';

const app = new App();

const stackName = process.env.OCI_STACK_NAME || 'test-function-stack';

new TestFunctionStack(app, stackName, {
  compartmentId: ociConfig.compartmentId,
  ocirCompartmentId: ociConfig.ocirCompartmentId,
  tenancyId: ociConfig.tenancyId,
  region: ociConfig.region,
  namespace: ociConfig.namespace,
  functionAppName: ociConfig.functionAppName,
  functionName: ociConfig.functionName,
  ocirRepositoryName: ociConfig.ocirRepositoryName,
  backend: ociConfig.backend,
});

app.synth();
