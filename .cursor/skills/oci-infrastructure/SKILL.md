---
name: oci-infrastructure
description: Best practices for OCI infrastructure provisioning including query parameter routing for serverless functions and OCIR compartment management. Use when implementing OCI Functions, API Gateway, Lambda handlers, or container registry provisioning.
---

# OCI Infrastructure Best Practices

This skill combines best practices for OCI infrastructure provisioning, including serverless function routing and container registry management.

## Query Parameter Routing

### Principle

Use query parameters (e.g., `?action=login`) instead of path-based routes (e.g., `/login`) for routing logic in serverless functions. This simplifies API Gateway configuration and makes routing consistent across OCI Functions and AWS Lambda.

### Implementation Pattern

#### Extract action from query parameters

**OCI Function (Java FDK):**
```java
String action = hctx.getQueryParameters().get("action").orElse("");
```

**AWS Lambda (Java):**
```java
Map<String, String> queryParams = request.getQueryStringParameters();
String action = queryParams != null && queryParams.containsKey("action") 
    ? queryParams.get("action") : "";
```

#### Route based on action value

```java
if ("login".equals(action)) {
    return initiateOAuthLogin(request, context);
}
if ("signup".equals(action)) {
    return redirectToSignup(request, context);
}
if ("carousel".equals(action)) {
    return getCarouselItems(context);
}
if ("send".equals(action)) {
    return handleTestimonialSubmission(request, context);
}
if ("signout".equals(action)) {
    return handleSignout(request, context);
}
```

### Benefits

1. **Simplified API Gateway configuration**: Single endpoint handles all actions
2. **Consistent routing**: Same pattern works for both OCI and AWS
3. **Easier maintenance**: Routing logic centralized in function code
4. **Flexible**: Easy to add new actions without infrastructure changes

### When to Apply

- When implementing new serverless functions
- When refactoring existing path-based routing
- When ensuring consistency between OCI and AWS implementations
- When simplifying API Gateway route configuration

---

## OCIR Compartment Best Practices

### Principle

Always create OCIR (OCI Container Image Registry) repositories in a **non-root compartment**, preferably the user's home compartment or a dedicated projects compartment. Root compartment usage is not allowed and will cause provisioning errors.

### Implementation Pattern

#### Configuration

**Environment Variable:**
```bash
# Set home compartment (non-root) for OCIR
export OCI_OCIR_COMPARTMENT_ID="ocid1.compartment.oc1..aaaaaaa..."
```

**In Code (TypeScript/CDKTF):**
```typescript
// Validate that we're not using root compartment
const ocirCompartmentId = config.ocirCompartmentId || config.compartmentId;

if (ocirCompartmentId.includes('root')) {
  throw new Error(
    'OCIR repository cannot be created in root compartment. ' +
    'Please set OCI_OCIR_COMPARTMENT_ID to your home compartment OCID.'
  );
}

const ocirRepository = new ArtifactsContainerRepository(this, 'OcirRepository', {
  compartmentId: ocirCompartmentId,
  displayName: ocirRepoName,
  isPublic: false,
  isImmutable: false,
});
```

### Best Practices

1. **Use Home Compartment**: Default to user's home compartment (`OCI_OCIR_COMPARTMENT_ID`)
2. **Validate Early**: Check for root compartment before attempting creation
3. **Provide Clear Errors**: Include helpful error messages guiding users to set correct compartment
4. **Fallback Logic**: If `OCI_OCIR_COMPARTMENT_ID` not set, fall back to main `OCI_COMPARTMENT_ID` (but still validate it's not root)

### Compartment Selection

**Recommended compartments:**
- User's home compartment (personal projects)
- Dedicated "projects" compartment (team projects)
- Application-specific compartment (if using compartment per app)

**Never use:**
- Root compartment (`ocid1.tenancy.oc1..aaaaaaa...`)
- Tenancy OCID (different from compartment)

### Error Handling

Always validate compartment OCID before creating resources:

```typescript
// Check for root compartment patterns
if (compartmentId.includes('root') || compartmentId === tenancyId) {
  throw new Error('Cannot use root compartment for OCIR');
}
```

### When to Apply

- When creating OCIR repositories via Infrastructure as Code
- When setting up CI/CD pipelines that push Docker images
- When provisioning OCI Functions that use container images
- When configuring container registries for any OCI project

---

## Examples from Codebase

### Query Parameter Routing
- **OCI**: OCI Functions using `hctx.getQueryParameters().get("action")`
- **AWS**: Lambda handlers using `request.getQueryStringParameters().get("action")`

### OCIR Compartment Management
- **OCDK**: `lib/oci-stack.ts` - Validates compartment and creates OCIR repository
- **Configuration**: `config/oci-config.ts` - Reads `OCI_OCIR_COMPARTMENT_ID` with validation
