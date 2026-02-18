# Architecture: Platform-Specific Handlers with Shared Business Logic

## Overview

This project demonstrates a clean architecture pattern for Java functions that need to run on multiple cloud platforms (AWS Lambda and OCI Functions). The key principle is **separation of platform-specific code from business logic**.

## Architecture Layers

### 1. Business Logic Layer (Platform-Agnostic)

**`FunctionBusinessLogic.java`**
- Contains all routing and action handling logic
- No platform-specific dependencies
- Pure Java business logic
- Returns platform-agnostic `FunctionResponse` objects

**`FunctionResponse.java`**
- Simple data transfer object
- Platform-agnostic response structure
- Can be converted to any platform-specific format

### 2. Platform Handler Layer

**`AwsFunctionHandler.java`** (AWS Lambda)
- Implements `RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent>`
- Converts AWS-specific request format to business logic input
- Converts business logic output to AWS-specific response format
- Entry point: `handleRequest(APIGatewayProxyRequestEvent, Context)`

**`OciFunctionHandler.java`** (OCI Functions)
- Uses OCI Functions FDK (`HTTPGatewayContext`)
- Converts OCI-specific request format to business logic input
- Converts business logic output to OCI-specific response format
- Entry point: `handleRequest(HTTPGatewayContext, OutputStream)`

### 3. Compatibility Layer (Optional)

**`TestFunction.java`**
- Backward compatibility wrapper
- Can be used for testing or legacy code
- Delegates to business logic layer

## Build-Time Platform Selection

### Maven Profiles

The `pom.xml` defines three profiles:

1. **`aws`** - AWS Lambda only
   - Includes: `aws-lambda-java-core`, `aws-lambda-java-events`
   - Excludes: OCI Functions FDK
   - Output: `test-function-aws-1.0.0.jar`

2. **`oci`** - OCI Functions only
   - Includes: OCI Functions FDK (`api`, `httpgateway`)
   - Excludes: AWS Lambda dependencies
   - Output: `test-function-oci-1.0.0.jar`

3. **`all`** - Both platforms (default)
   - Includes: All dependencies
   - Useful for development and testing
   - Output: Multiple JARs

### Build Commands

```bash
# Build for AWS only
mvn clean package -Paws -Dplatform=aws

# Build for OCI only
mvn clean package -Poci -Dplatform=oci

# Build for both (default)
mvn clean package -Pall
```

## Benefits

### 1. Smaller Deployment Artifacts
- AWS builds exclude OCI dependencies (~2MB smaller)
- OCI builds exclude AWS dependencies (~2MB smaller)
- Faster cold starts due to smaller JAR size

### 2. Clear Separation of Concerns
- Business logic changes don't affect platform handlers
- Platform-specific changes don't affect business logic
- Easier to test business logic in isolation

### 3. Maintainability
- Single source of truth for business logic
- Platform-specific code is isolated and easy to find
- New platforms can be added without modifying existing code

### 4. Type Safety
- Platform-specific types are only used in their handlers
- Business logic uses platform-agnostic types
- Compile-time safety for platform-specific APIs

## Deployment

### AWS Lambda

**Handler**: `com.example.function.aws.AwsFunctionHandler`

**Build**:
```bash
./scripts/build-function.sh aws
```

**CDK Configuration**:
```typescript
handler: 'com.example.function.aws.AwsFunctionHandler',
code: lambda.Code.fromAsset('target/test-function-aws-1.0.0.jar')
```

### OCI Functions

**Handler**: `com.example.function.oci.OciFunctionHandler::handleRequest`

**Build**:
```bash
./scripts/build-function.sh oci
```

**Dockerfile**:
```dockerfile
RUN mvn clean package -Poci -Dplatform=oci -DskipTests
COPY target/test-function-oci-1.0.0.jar /function/app.jar
ENV FN_FUNCTION_NAME=com.example.function.oci.OciFunctionHandler::handleRequest
```

## Adding a New Platform

To add support for a new platform (e.g., Azure Functions):

1. **Create handler class**: `azure/AzureFunctionHandler.java`
2. **Add Maven profile**: Add `azure` profile to `pom.xml` with Azure dependencies
3. **Update build scripts**: Add Azure build option
4. **Create deployment config**: Add Azure-specific deployment files

The business logic layer remains unchanged!

## Testing Strategy

### Unit Tests
- Test `FunctionBusinessLogic` independently (no platform dependencies)
- Mock platform-specific handlers for integration tests

### Integration Tests
- Test each platform handler with real platform SDKs
- Use platform-specific test frameworks

## Query Parameter Routing

Both platforms use the same query parameter routing pattern:
- `?action=hello` - Hello message
- `?action=echo` - Echo request body
- `?action=info` - Platform information

This ensures consistent behavior across platforms and simplifies API Gateway configuration.
