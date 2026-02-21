import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as path from 'path';

export interface TestFunctionStackProps extends cdk.StackProps {
  /** ARN of the Secrets Manager secret for PostgreSQL (e.g. RDS secret). Set PG_SECRET_ARN env var at deploy time to pass it. */
  readonly pgSecretArn?: string;
  /** RDS host (optional). Use when the secret has no host or to override. Set RDS_HOST env var at deploy time. */
  readonly rdsHost?: string;
}

export class TestFunctionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: TestFunctionStackProps) {
    super(scope, id, props);

    const pgSecretArn = props?.pgSecretArn ?? process.env.PG_SECRET_ARN;
    const rdsHost = props?.rdsHost ?? process.env.RDS_HOST;
    const environment: Record<string, string> = {
      PLATFORM: 'AWS',
    };
    if (pgSecretArn) {
      environment.PG_SECRET_ARN = pgSecretArn;
    }
    if (rdsHost) {
      environment.RDS_HOST = rdsHost;
    }

    // Java Lambda function
    // Uses AwsFunctionHandler for platform-specific implementation
    const javaFunction = new lambda.Function(this, 'TestJavaFunction', {
      runtime: lambda.Runtime.JAVA_11,
      handler: 'com.example.function.aws.AwsFunctionHandler',
      code: lambda.Code.fromAsset(
        path.join(__dirname, '../../function-code/target/test-function-aws-1.0.0.jar')
      ),
      memorySize: 512,
      timeout: cdk.Duration.seconds(30),
      description: 'Test Java function compatible with AWS Lambda and OCI Functions',
      environment,
    });

    if (pgSecretArn) {
      const secret = secretsmanager.Secret.fromSecretCompleteArn(this, 'PgSecret', pgSecretArn);
      secret.grantRead(javaFunction);
    }

    // API Gateway REST API
    const api = new apigateway.RestApi(this, 'TestFunctionApi', {
      restApiName: 'Test Java Function API',
      description: 'API Gateway for test Java function',
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: ['Content-Type', 'X-Amz-Date', 'Authorization', 'X-Api-Key'],
      },
    });

    // Lambda integration
    const lambdaIntegration = new apigateway.LambdaIntegration(javaFunction, {
      requestTemplates: { 'application/json': '{ "statusCode": "200" }' },
    });

    // Single endpoint with query parameter routing
    // Uses query parameter ?action=hello|echo|info instead of path-based routes
    api.root.addMethod('GET', lambdaIntegration);
    api.root.addMethod('POST', lambdaIntegration);

    // Outputs
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'API Gateway endpoint URL',
      exportName: 'TestFunctionApiUrl',
    });

    new cdk.CfnOutput(this, 'FunctionName', {
      value: javaFunction.functionName,
      description: 'Lambda function name',
      exportName: 'TestFunctionName',
    });

    new cdk.CfnOutput(this, 'FunctionArn', {
      value: javaFunction.functionArn,
      description: 'Lambda function ARN',
      exportName: 'TestFunctionArn',
    });
  }
}
