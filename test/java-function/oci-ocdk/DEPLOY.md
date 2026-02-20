# Deployment Guide

## Two-Step Deployment Process

Because the Function resource requires the Docker image to already exist in OCIR, deployment happens in two steps:

1. **Deploy infrastructure** (creates OCIR repository, VCN, API Gateway, Function App, etc.)
2. **Build and push Docker image** to the newly created OCIR repository
3. **Re-deploy** (if Function creation failed, it will succeed now that the image exists)

## Quick Start

### Option 1: Full Automated Deployment

```bash
cd test/java-function/oci-ocdk
npm run deploy:full
```

This runs:
1. `cdktf deploy` - Creates all infrastructure including OCIR repo
2. Builds the Docker image
3. Pushes image to OCIR
4. Prompts you to re-run deploy if Function creation failed

### Option 2: Manual Two-Step Process

**Step 1: Deploy infrastructure**
```bash
cd test/java-function/oci-ocdk
npm run deploy
```

**Step 2: Build and push image**
```bash
npm run push-image
# Or directly:
../scripts/push-function-image.sh
```

**Step 3: Re-deploy if needed**
If the Function resource failed to create (because image didn't exist), run deploy again:
```bash
npm run deploy
```

## Prerequisites

Set these environment variables:
```bash
export OCI_COMPARTMENT_ID="ocid1.compartment.oc1..aaaaaaa..."
export OCI_TENANCY_ID="ocid1.tenancy.oc1..aaaaaaa..."
export OCI_REGION="eu-frankfurt-1"
export OCI_NAMESPACE="your-namespace"  # From: oci os ns get
export OCI_OCIR_COMPARTMENT_ID="ocid1.compartment.oc1..aaaaaaa..."  # Non-root compartment
```

## How It Works

1. **First `npm run deploy`:**
   - Creates OCIR repository (if it doesn't exist)
   - Creates VCN, subnets, API Gateway, Function App
   - **Fails** when creating Function resource because image doesn't exist yet

2. **`npm run push-image`:**
   - Reads OCIR repository name from Terraform output
   - Builds Docker image using the Dockerfile
   - Logs into OCIR (prompts for auth token)
   - Pushes image to: `{region}.ocir.io/{namespace}/{repo-name}:latest`

3. **Second `npm run deploy`:**
   - Function resource creation now succeeds because image exists
   - API Gateway deployment is created with route to function

## Troubleshooting

**Image push fails:**
- Ensure you're logged into Docker: `docker login {region}.ocir.io`
- Get your OCI auth token from: https://cloud.oracle.com/identity/tokens
- Username format: `<tenancy-namespace>/<username>` (e.g., `frsxwtjslf35/oracleidentitycloudservice/user@example.com`)

**Function still fails after pushing image:**
- Check the image tag matches exactly what's in the stack: `{region}.ocir.io/{namespace}/{repo-name}:latest`
- Verify image was pushed successfully: `docker images | grep {repo-name}`
- Check OCIR repository exists: `oci artifacts container repository list --compartment-id {compartment-id}`
