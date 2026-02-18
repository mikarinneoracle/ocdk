# OCDK (OCI CDK)

Infrastructure as Code for OCI Functions, API Gateway, Object Storage, Vault, and OCIR using Terraform CDK (TypeScript).

**Generic and reusable** - Configure for any OCI project via environment variables.

**Note**: OCDK uses `cdktf` CLI under the hood. All `ocdk` commands are npm scripts that wrap `cdktf` commands.

## Quick Start

### Prerequisites

1. **OCI CLI configured**
   ```bash
   oci setup config
   # Follow prompts to configure ~/.oci/config
   ```

2. **Node.js 18+ and npm**
   ```bash
   node --version  # Should be 18+
   npm --version
   ```

3. **Terraform CDK CLI**
   ```bash
   npm install -g cdktf-cli
   ```

### Setup

```bash
cd ocdk
npm install
npm run get  # Download OCI provider (runs: cdktf get)
# This generates TypeScript types for OCI resources including ArtifactsContainerRepository
```

### Configuration

Copy `.env.example` to `.env` and update with your OCI configuration:

```bash
cp .env.example .env
# Edit .env with your OCI credentials
```

Or set environment variables:

```bash
export OCI_COMPARTMENT_ID="ocid1.compartment.oc1..aaaaaaa..."
export OCI_TENANCY_ID="ocid1.tenancy.oc1..aaaaaaa..."
export OCI_REGION="eu-frankfurt-1"
export OCI_NAMESPACE="your-namespace"
```

#### OCIR Container Repository

OCIR repository is automatically created as part of the stack. Configure the compartment and repository name:

```bash
# IMPORTANT: Must be a non-root compartment (home compartment recommended)
# If not set, defaults to OCI_COMPARTMENT_ID
export OCI_OCIR_COMPARTMENT_ID="ocid1.compartment.oc1..aaaaaaa..."

# Repository name (defaults to function name if not set)
export OCI_OCIR_REPOSITORY_NAME="your-function-name"
```

**Note**: The OCIR repository will be created in the specified compartment. Root compartment is not allowed and will cause an error.

#### Terraform State Backend

By default, Terraform state is stored locally. To use OCI Object Storage for remote state:

**Option 1: OCI Native Backend (Recommended)**
```bash
export OCI_STATE_BACKEND_TYPE="oci"
export OCI_STATE_BUCKET="tf-state"
export OCI_STATE_KEY="oci-stack/terraform.tfstate"
```

**Option 2: HTTP Backend (for OCI Object Storage via REST API)**
```bash
export OCI_STATE_BACKEND_TYPE="http"
export OCI_STATE_HTTP_ADDRESS="https://objectstorage.eu-amsterdam-1.oraclecloud.com/p/q-9i-3q__W7.....MYpacQ/n/frsxwtjslf35/b/tf-state/o/"
export OCI_STATE_HTTP_UPDATE_METHOD="PUT"
```

**Option 3: Local State (Default)**
```bash
export OCI_STATE_BACKEND_TYPE="local"
# or simply don't set OCI_STATE_BACKEND_TYPE
```

**Note**: For OCI backend, ensure your OCI user has the following IAM permissions on the bucket:
- `OBJECT_READ`
- `OBJECT_CREATE`
- `OBJECT_DELETE`
- `OBJECT_INSPECT`

For detailed backend configuration instructions, see [BACKEND_CONFIG.md](BACKEND_CONFIG.md).

### Deploy

```bash
# Preview changes
npm run diff  # or: npm run ocdk diff

# Deploy stack
npm run deploy  # or: npm run ocdk deploy

# Destroy stack
npm run destroy  # or: npm run ocdk destroy

# List stacks
npm run list  # or: npm run ocdk list
```

## Available Commands

All commands use `npm run <command>`:

- `npm run build` - Compile TypeScript
- `npm run watch` - Watch mode for TypeScript compilation
- `npm run deploy` - Deploy infrastructure (`cdktf deploy`)
- `npm run diff` - Preview changes (`cdktf diff`)
- `npm run destroy` - Destroy infrastructure (`cdktf destroy`)
- `npm run get` - Download Terraform providers (`cdktf get`)
- `npm run synth` - Synthesize Terraform code (`cdktf synth`)
- `npm run list` - List stacks (`cdktf list`)
- `npm run ocdk <command>` - Direct access to cdktf CLI

## Structure

```
ocdk/
├── bin/
│   └── app.ts                    # CDK app entry point
├── lib/
│   └── oci-stack.ts              # Main stack definition
├── config/
│   └── oci-config.ts             # OCI configuration
├── scripts/
│   └── deploy-function.sh         # Function code deployment script
├── package.json
├── cdktf.json                     # Terraform CDK config (required by cdktf CLI)
├── tsconfig.json
└── README.md
```

## Resources Created

1. **OCIR Container Repository**
   - Container registry for function Docker images
   - Created in home compartment (non-root)
   - Repository name configurable via `OCI_OCIR_REPOSITORY_NAME`

2. **Object Storage Buckets**
   - `testimonials-html-templates` - HTML templates
   - `testimonials-db-wallet` - Database wallet

3. **OCI Vault**
   - Secrets for DB password, wallet password, client secret

4. **Dynamic Groups & Policies**
   - Function access to Vault, Object Storage, Database

5. **OCI Function**
   - Function application and function definition
   - Environment variables
   - References OCIR repository for Docker images

6. **API Gateway**
   - Gateway and deployment
   - Routes to function

## Function Deployment

### Infrastructure vs Code

- **OCDK manages**: Function infrastructure (application, function definition, config, memory, timeout)
- **OCI CLI manages**: Function code updates (Docker image deployment)

### Deploying Function Code

After OCDK creates the function infrastructure, deploy code updates using OCI CLI:

```bash
# 1. Build and push Docker image to OCI Registry
docker build -t fra.ocir.io/namespace/repo:tag .
docker push fra.ocir.io/namespace/repo:tag

# 2. Get image digest
IMAGE_DIGEST=$(docker inspect fra.ocir.io/namespace/repo:tag --format='{{index .RepoDigests 0}}' | cut -d'@' -f2)

# 3. Update function with new image
oci fn function update \
  --function-id <function-ocid> \
  --image fra.ocir.io/namespace/repo:tag@${IMAGE_DIGEST}

# Or update environment variables
oci fn function update \
  --function-id <function-ocid> \
  --config '{"KEY":"value"}'
```

### Automated Deployment Script

See `scripts/deploy-function.sh` for automated function code deployment.

## Notes

- OCDK uses Terraform CDK (`cdktf`) under the hood
- CDK manages infrastructure (buckets, vault, API Gateway, function definition)
- OCI CLI manages function code updates (Docker images)
- Terraform state can be stored locally or in OCI Object Storage (configure via environment variables)
- Function code deployment can be automated via scripts using OCI CLI

## License

ISC
