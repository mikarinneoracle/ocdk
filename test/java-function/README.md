# Test Java Function - AWS CDK & OCI OCDK

This directory contains a test setup for deploying a Java function to both AWS Lambda (using AWS CDK) and OCI Functions (using OCI OCDK/Terraform CDK).

## Structure

```
test/java-function/
├── function-code/          # Java function source code
│   ├── src/
│   ├── pom.xml
│   ├── Dockerfile          # For OCI Functions
│   └── func.yaml           # OCI Functions configuration
├── aws-cdk/                # AWS CDK infrastructure
│   ├── bin/
│   ├── lib/
│   ├── package.json
│   └── tsconfig.json
├── oci-ocdk/              # OCI OCDK infrastructure
│   ├── bin/
│   ├── lib/
│   ├── config/
│   ├── package.json
│   └── tsconfig.json
└── scripts/               # Build and deployment scripts
    ├── build-function.sh
    ├── build-docker.sh
    └── deploy-oci-function.sh
```

## Java Function Architecture

The Java function uses a clean architecture with platform-specific handlers and shared business logic:

### Structure

```
function-code/src/main/java/com/example/function/
├── FunctionBusinessLogic.java    # Platform-agnostic business logic
├── FunctionResponse.java          # Platform-agnostic response object
├── TestFunction.java              # Backward compatibility wrapper
├── aws/
│   └── AwsFunctionHandler.java    # AWS Lambda entry point
└── oci/
    └── OciFunctionHandler.java    # OCI Functions entry point
```

### Architecture Benefits

1. **Separation of Concerns**: Business logic is completely platform-agnostic
2. **Build-Time Selection**: Use Maven profiles to build platform-specific JARs
3. **Smaller Deployments**: Only include dependencies for the target platform
4. **Maintainability**: Platform-specific code is isolated

### Query Parameter Routing

The function uses query parameter routing (following best practices):
- `?action=hello` - Returns a hello message
- `?action=echo` - Echoes the request body
- `?action=info` - Returns platform information

This pattern simplifies API Gateway configuration and works consistently across both platforms.

### Build-Time Platform Selection

Build for a specific platform using Maven profiles:

```bash
# Build for AWS Lambda only
./scripts/build-function.sh aws
# or: cd function-code && mvn clean package -Paws -Dplatform=aws

# Build for OCI Functions only
./scripts/build-function.sh oci
# or: cd function-code && mvn clean package -Poci -Dplatform=oci

# Build for both platforms (default)
./scripts/build-function.sh all
# or: cd function-code && mvn clean package -Pall
```

This ensures:
- **AWS builds** only include AWS Lambda dependencies
- **OCI builds** only include OCI Functions FDK dependencies
- **Smaller JAR sizes** for production deployments

## AWS CDK Setup

### Prerequisites

1. AWS CLI configured
2. AWS CDK CLI installed: `npm install -g aws-cdk`
3. Node.js 18+

### Build Java Function

Build for AWS Lambda:

```bash
./scripts/build-function.sh aws
```

This creates `target/test-function-aws-1.0.0.jar` with only AWS dependencies.

### Deploy AWS Infrastructure

```bash
cd aws-cdk
npm install
npm run build
npm run deploy
```

### Test

After deployment, you'll get an API Gateway URL. Test with:

```bash
curl "https://<api-id>.execute-api.<region>.amazonaws.com/prod/?action=hello"
curl "https://<api-id>.execute-api.<region>.amazonaws.com/prod/?action=info"
```

## OCI OCDK Setup

### Prerequisites

1. OCI CLI configured (`oci setup config`)
2. Terraform CDK CLI installed: `npm install -g cdktf-cli`
3. Node.js 18+
4. Docker (for building function images)

### Configuration

Set environment variables:

```bash
export OCI_COMPARTMENT_ID="ocid1.compartment.oc1..aaaaaaa..."
export OCI_TENANCY_ID="ocid1.tenancy.oc1..aaaaaaa..."
export OCI_REGION="eu-frankfurt-1"
export OCI_NAMESPACE="your-namespace"
export OCI_OCIR_COMPARTMENT_ID="ocid1.compartment.oc1..aaaaaaa..."  # Non-root compartment
export OCI_OCIR_REPOSITORY_NAME="test-java-function"
```

### Build Java Function

Build for OCI Functions:

```bash
./scripts/build-function.sh oci
```

This creates `target/test-function-oci-1.0.0.jar` with only OCI dependencies.

### Build Docker Image

```bash
./scripts/build-docker.sh
```

### Deploy OCI Infrastructure

```bash
cd oci-ocdk
npm install
npm run get  # Download OCI provider
npm run build
npm run deploy
```

### Deploy Function Code

After infrastructure is deployed:

```bash
./scripts/deploy-oci-function.sh
```

## Testing

### AWS Lambda

```bash
# Get API URL from CDK output
API_URL=$(aws cloudformation describe-stacks \
  --stack-name TestFunctionStack \
  --query 'Stacks[0].Outputs[?OutputKey==`ApiUrl`].OutputValue' \
  --output text)

# Test endpoints
curl "${API_URL}?action=hello"
curl "${API_URL}?action=info"
curl -X POST "${API_URL}?action=echo" -d '{"test":"data"}'
```

### OCI Functions

```bash
# Get function endpoint from API Gateway
# Test with query parameters
curl "https://<api-gateway-url>/test?action=hello"
curl "https://<api-gateway-url>/test?action=info"
curl -X POST "https://<api-gateway-url>/test?action=echo" -d '{"test":"data"}'
```

## Function Actions

All actions use query parameter routing (`?action=<name>`):

- **hello**: Returns a platform-specific hello message
- **echo**: Echoes the request body back
- **info**: Returns platform and runtime information

## Notes

### Architecture

- **Shared Business Logic**: `FunctionBusinessLogic` contains all routing and action handling
- **Platform Handlers**: `AwsFunctionHandler` and `OciFunctionHandler` provide platform-specific entry points
- **Build-Time Selection**: Maven profiles (`aws`, `oci`, `all`) control which dependencies are included
- **Smaller JARs**: Platform-specific builds only include necessary dependencies

### Deployment

- **AWS Lambda**: Uses JAR deployment with `AwsFunctionHandler` as entry point
- **OCI Functions**: Uses Docker container deployment with `OciFunctionHandler` as entry point
- **Query Parameter Routing**: Both use `?action=<name>` pattern for consistent API Gateway configuration
- **Infrastructure**: Managed separately via AWS CDK and OCI OCDK
- **Function Code**: Deployment is separate from infrastructure deployment

### Handler Classes

- **AWS Lambda**: `com.example.function.aws.AwsFunctionHandler`
- **OCI Functions**: `com.example.function.oci.OciFunctionHandler`
- **Backward Compatibility**: `com.example.function.TestFunction` (for legacy code)

## Cleanup

### AWS

```bash
cd aws-cdk
npm run destroy
```

### OCI

```bash
cd oci-ocdk
npm run destroy
```
