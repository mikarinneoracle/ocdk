#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FunctionStack } from '../lib/function-stack';

const app = new cdk.App();

new FunctionStack(app, 'FunctionStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
  },
  description: 'Stack for Java Lambda function',
  pgUrl: process.env.PG_URL,
  pgSecretArn: process.env.PG_SECRET_ARN,
});

app.synth();
