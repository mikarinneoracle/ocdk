import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';

export class TestFunctionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

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
      environment: {
        PLATFORM: 'AWS',
      },
    });

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
