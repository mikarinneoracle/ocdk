# OCDK (OCI CDK)

Infrastructure as Code for OCI Functions, API Gateway, Object Storage, Vault, and OCIR using Terraform CDK (TypeScript).

**Generic and reusable** - Configure for any OCI project via environment variables.

**Note**: OCDK uses `cdktf` CLI under the hood. All `ocdk` commands are npm scripts that wrap `cdktf` commands.

## Using from npm

When you install this package in another project (e.g. `npm i @mikarinneoracle/oci-cdk`), run commands **from your project root** using `npx` so the correct package is used:

```bash
# From your project root (e.g. ocdk-test-java)
export OCI_COMPARTMENT_OCID="ocid1.compartment.oc1..aaaaaaa..."
export OCI_TENANCY_ID="ocid1.tenancy.oc1..aaaaaaa..."
export OCI_REGION="eu-frankfurt-1"
# ... other OCI_* vars as needed

npx ocdk deploy
npx ocdk diff
npx ocdk destroy
npx ocdk get    # Regenerate provider bindings (use this, not `npx cdktf get`, so it runs in the package that has cdktf.json)
npx ocdk redeploy:function   # Rebuild image (full Dockerfile), push, update function (requires a "redeploy:function" script in your project's package.json)
```

- **Use `npx ocdk get`**, not `npx cdktf get`, when you need to regenerate provider bindings.
- **`npx ocdk redeploy:function`** runs `npm run redeploy:function` in your project directory. Add a script to your `package.json`, e.g. one that builds the image with your full Dockerfile, pushes to OCIR, and updates the function (e.g. via `oci fn function update` or a second `terraform apply`). `cdktf get` must run in the directory that contains `cdktf.json` (the ocdk package); otherwise you may see "argument missing: language".
- **Do not** run `npm run deploy` from `node_modules/@mikarinneoracle` (the scope folder). The package with the scripts is **`node_modules/@mikarinneoracle/oci-cdk`**. If you want to use npm scripts from inside the package: `cd node_modules/@mikarinneoracle/oci-cdk && npm run deploy`.
- The **`ocdk`** command is provided by the package’s `bin`; use **`npx ocdk`** from your project root so npm finds it in `node_modules/.bin/ocdk`.

### What the npm package creates

- **Always:** OCI Provider and **OCIR Container Repository**.

- **When `func.yaml` + `target/*.jar` + `Dockerfile` are found** (e.g. you run `npx ocdk deploy` from your Java project root): the stack discovers the function **name** from `func.yaml` and a JAR under `target/`, and then creates the **full** deployment:
  - Docker build and push to OCIR
  - VCN, subnets, security lists, service gateway, internet gateway
  - Functions Application and Function (image from OCIR)
  - API Gateway and deployment (route to the function)

**Requirements for full stack:** Run `npx ocdk deploy` from the directory that contains:

- **`func.yaml`** – OCI Functions config with a `name:` field (function name).
- **`target/*.jar`** – at least one JAR (e.g. from `mvn package`); preferred JAR can match the function name.
- **`Dockerfile`** – to build the function image (e.g. `COPY target/*.jar /function/app/` and appropriate `CMD`).

You can override discovery with env: `OCI_FUNCTION_APP_NAME`, `OCI_FUNCTION_NAME`, `OCI_FUNCTION_JAR_PATH` (path to directory with Dockerfile). Set **`OCI_OCIR_COMPARTMENT_ID`** (non-root) when using the full stack.

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
cd ~/projects/ocdk
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

CDK-style commands (same as AWS CDK):

| Command | Description |
|---------|-------------|
| `ocdk deploy` | Deploy the stack |
| `ocdk diff` | Preview changes (plan) |
| `ocdk synth` | Synthesize Terraform |
| `ocdk destroy` | Destroy the stack |
| `ocdk list` | List stacks |
| `ocdk get` | Generate provider bindings |

**How to run (from the OCDK project root):**
- **`npm run ocdk -- deploy`** – CDK-style: runs `ocdk deploy` (same as `npm run deploy`)
- **`npm run deploy`**, **`npm run diff`**, **`npm run synth`**, etc. – same as above
- **`node bin/ocdk.js deploy`** – direct run of the CLI script

**Note:** `npx ocdk` does not work (there is no published `ocdk` package). Use the commands above from the project root. For the test app in `test/java-function/oci-cdk/`, use **`npm run deploy`** there (that project has its own cdktf scripts).

**Other:**
- `npm run build` – Compile TypeScript
- `npm run watch` – Watch mode for TypeScript
- `npm run redeploy:function` – Redeploy function code to OCI only (no Terraform; requires a `redeploy:function` script in your project, e.g. calling OCI CLI)
- `npm run cdktf -- <args>` – Pass through to cdktf (e.g. `npm run cdktf -- output`)

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
   - Configurable bucket names for templates and data

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

## Publishing to npm

To publish this package to [npm](https://www.npmjs.com/):

1. **Create an npm account** at https://www.npmjs.com/signup (if needed).
2. **Log in** from the project root:
   ```bash
   npm login
   ```
3. **Optional: use a scoped name** if `oci-cdk` is taken — in `package.json` set `"name": "@your-username/oci-cdk"`.
4. **Publish**:
   ```bash
   npm publish
   ```
   This runs `prepublishOnly` (builds the project) and publishes the contents listed in `files` (bin, lib, README.md, cdktf.json, ocdk.json).

After publishing, users can install with:

```bash
npm install oci-cdk
# or, if using a scope:
npm install @your-username/oci-cdk
```

## License

ISC
