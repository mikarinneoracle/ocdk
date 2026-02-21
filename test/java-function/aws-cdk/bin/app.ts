#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TestFunctionStack } from '../lib/test-function-stack';

const app = new cdk.App();

new TestFunctionStack(app, 'TestFunctionStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
  },
  description: 'Test stack for Java Lambda function',
  pgSecretArn: process.env.PG_SECRET_ARN,
  rdsHost: process.env.RDS_HOST,
});

app.synth();
