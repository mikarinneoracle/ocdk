import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as path from 'path';

export interface TestFunctionStackProps extends cdk.StackProps {
  /** PostgreSQL connection URL (same format as OCI: postgresql://user:password@host:port/dbname). When set, stack creates a Secrets Manager secret and passes its ARN to Lambda. Set PG_URL at deploy time. */
  readonly pgUrl?: string;
  /** When PG_URL is not set: ARN of existing Secrets Manager secret (e.g. RDS-generated JSON secret). Set PG_SECRET_ARN at deploy time. RDS is not created by this stack — create RDS manually in the stack VPC and allow the Lambda security group on port 5432. */
  readonly pgSecretArn?: string;
}

export class TestFunctionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: TestFunctionStackProps) {
    super(scope, id, props);

    const pgUrl = props?.pgUrl ?? process.env.PG_URL;
    const pgSecretArnFromEnv = props?.pgSecretArn ?? process.env.PG_SECRET_ARN;
    const environment: Record<string, string> = {
      PLATFORM: 'AWS',
    };

    // PG connection: create secret from PG_URL (like OCI) or use existing PG_SECRET_ARN
    let pgSecretArn: string | undefined;
    if (pgUrl?.trim()) {
      const pgSecret = new secretsmanager.Secret(this, 'PgUrlSecret', {
        secretName: `test-function-pg-url-${this.stackName}`,
        description: 'PostgreSQL connection URL for test function (from PG_URL)',
        secretStringValue: cdk.SecretValue.unsafePlainText(pgUrl.trim()),
      });
      pgSecretArn = pgSecret.secretArn;
      environment.PG_SECRET_ARN = pgSecretArn;
    } else if (pgSecretArnFromEnv?.trim()) {
      pgSecretArn = pgSecretArnFromEnv.trim();
      environment.PG_SECRET_ARN = pgSecretArn;
    }

    // VPC created by default (like OCI stack VCN) — create RDS manually in this VPC and allow Lambda security group on port 5432
    const vpc = new ec2.Vpc(this, 'Vpc', {
      maxAzs: 2,
      natGateways: 1,
    });

    // Java Lambda function (in VPC private subnets so it can reach RDS and AWS APIs via NAT). Build JAR first (e.g. ./scripts/build-function.sh aws).
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
      vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS },
    });

    const lambdaSg = javaFunction.connections.securityGroups[0] as ec2.SecurityGroup;

    // Dedicated security group for RDS: allow PostgreSQL from Lambda (avoids circular dependency from self-referential rule)
    const rdsSg = new ec2.SecurityGroup(this, 'RdsSecurityGroup', {
      vpc,
      description: 'Security group for RDS - allow Lambda on port 5432',
      allowAllOutbound: true,
    });
    rdsSg.addIngressRule(
      ec2.Peer.securityGroupId(lambdaSg.securityGroupId),
      ec2.Port.tcp(5432),
      'Allow PostgreSQL from Lambda',
    );

    // DB subnet group for manual RDS: use this when creating RDS in the console/CLI
    const dbSubnetGroup = new rds.SubnetGroup(this, 'DbSubnetGroup', {
      description: 'Private subnets for RDS (use when creating RDS in this VPC)',
      vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS },
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

    new cdk.CfnOutput(this, 'VpcId', {
      value: vpc.vpcId,
      description: 'VPC ID — create RDS in this VPC',
      exportName: 'TestFunctionVpcId',
    });

    new cdk.CfnOutput(this, 'LambdaSecurityGroupId', {
      value: lambdaSg.securityGroupId,
      description: 'Lambda security group ID',
      exportName: 'TestFunctionLambdaSecurityGroupId',
    });

    new cdk.CfnOutput(this, 'RdsSecurityGroupId', {
      value: rdsSg.securityGroupId,
      description: 'Assign this security group to RDS - stack allows inbound 5432 from Lambda',
      exportName: 'TestFunctionRdsSecurityGroupId',
    });

    new cdk.CfnOutput(this, 'DbSubnetGroupName', {
      value: dbSubnetGroup.subnetGroupName,
      description: 'Select this DB subnet group when creating RDS in this VPC',
      exportName: 'TestFunctionDbSubnetGroupName',
    });
  }
}
