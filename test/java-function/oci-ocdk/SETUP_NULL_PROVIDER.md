# Setup: Adding Null Provider for Image Push

The stack now includes a `null_resource` that automatically builds and pushes the Docker image to OCIR after the repository is created, ensuring the image exists before the Function resource is created.

## Step 1: Generate Null Provider Types

Run this to download the null provider and generate TypeScript types:

```bash
cd test/java-function/oci-ocdk
npm run get
```

This will generate the null provider types in `.gen/providers/null/`.

## Step 2: Set Environment Variables

Before deploying, set these additional environment variables:

```bash
# Required: OCI auth token for Docker login to OCIR
export OCI_AUTH_TOKEN="your-auth-token"
# Get it from: https://cloud.oracle.com/identity/tokens

# Optional: OCIR username (format: <tenancy-namespace>/<username>)
# If not set, defaults to: <namespace>/user
export OCI_OCIR_USERNAME="frsxwtjslf35/oracleidentitycloudservice/user@example.com"
```

## Step 3: Deploy

Now you can deploy in one step:

```bash
npm run deploy
```

The deployment will:
1. Create OCIR repository
2. **Build and push Docker image** (via null_resource)
3. Create Function App
4. Create Function (image now exists!)
5. Create API Gateway deployment

## How It Works

The `null_resource` with `local-exec` provisioners:
- Depends on `ocirRepository` (runs after repo is created)
- Builds the Docker image using the Dockerfile
- Logs into OCIR (using `OCI_AUTH_TOKEN`)
- Pushes the image
- Function resource depends on this null_resource, ensuring image exists first

## Troubleshooting

**Docker login fails:**
- Ensure `OCI_AUTH_TOKEN` is set correctly
- Check token hasn't expired (tokens expire after 1 hour)
- Verify `OCI_OCIR_USERNAME` format is correct: `<namespace>/<username>`

**Image push fails:**
- Ensure Docker is running
- Check you have permissions to push to the OCIR repository
- Verify the repository was created successfully

**Function still fails:**
- Check the image tag matches exactly: `{region}.ocir.io/{namespace}/{repo-name}:latest`
- Verify image was pushed: `docker images | grep {repo-name}`
- Check Terraform logs for the null_resource execution
