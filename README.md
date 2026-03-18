# @mikarinneoracle/oci-cdk

OCI Functions (Java, Python, Node.js), API Gateway, and related infrastructure via Terraform CDK. Run from your project root with `npx ocdk`.

Quick example (Python function + API Gateway):

```bash
mkdir my-python-function && cd my-python-function
fn init --runtime python
npm i @mikarinneoracle/oci-cdk
export OCI_COMPARTMENT_ID='ocid1.compartment.oc1...gq'

# Deploy the function and API Gateway
npx ocdk deploy --auto-approve

# Call the generated API Gateway REST endpoint (from deploy outputs)
curl https://<your-api-gateway-endpoint>

# Tail recent execution logs
npx ocdk tail:execution-log
```

## Required

- **Node.js + npm** – `npx ocdk ...` runs via Node. Install a recent LTS (e.g. 20.x+), which includes npm.
- **OCI CLI** – Configured (e.g. `oci setup config`). Used for auth, OCIR login, and `tail:execution-log`.
- **Terraform** – Used under the hood by CDKTF for apply/destroy; must be on `PATH` when running `npx ocdk deploy` / `destroy`.
- **Fn CLI (optional but handy)** – For creating boilerplate functions (`fn init --runtime java|python|node`) and bumping your function version/tag in `func.yaml` with `fn bump`.

## Environment variables

Only **`OCI_COMPARTMENT_ID`** (or `OCI_COMPARTMENT_OCID`) is required for deploy; all others are optional. If not set, **tenancy**, **region**, and **namespace** default from OCI CLI config (`~/.oci/config`, profile from `OCI_CLI_PROFILE`). **Namespace** can also be resolved via OCI SDK when missing.

| Env | Description | Default |
|-----|-------------|---------|
| **OCI** | | |
| `OCI_COMPARTMENT_ID` | Compartment OCID (or `OCI_COMPARTMENT_OCID`). **Required.** | — |
| `OCI_TENANCY_ID` | Tenancy OCID | OCI CLI config |
| `OCI_REGION` | Region (e.g. `eu-frankfurt-1`) | OCI CLI config |
| `OCI_NAMESPACE` | Object Storage namespace | OCI CLI config or SDK |
| `OCI_CREATE_APIGW_POLICY` | When `1`, also create the IAM policy so **API Gateway can invoke Functions** | `0` |
| **OCIR** | | |
| `OCI_OCIR_COMPARTMENT_ID` | Compartment for OCIR repo (non-root for full stack) | same as `OCI_COMPARTMENT_ID` |
| `OCI_OCIR_REPOSITORY_NAME` | OCIR repository name | function name (func.yaml) |
| `OCI_AUTH_TOKEN` | Auth token for `docker login` to OCIR | OCI CLI token |
| `OCI_OCIR_USERNAME` | OCIR login user | `AUTO_DETECT` → `namespace/user` |
| **Function / stack** | | |
| `OCI_FUNCTION_APP_NAME` | Functions application name | func.yaml |
| `OCI_FUNCTION_NAME` | Function name | func.yaml |
| `OCI_FUNCTION_JAR_PATH` | Path to JAR or directory with Dockerfile (Java functions only) | — |
| `OCI_USE_GRAALVM_JAVA` | When `1`, use GraalVM native-image Dockerfile for Java functions and update `pom.xml`/`reflection.json` accordingly | `0` |
| `OCI_FUNCTION_HANDLER` | Handler (e.g. Java FDK CMD) | func.yaml |
| `OCI_FUNCTION_MEMORY_MB` | Memory in MB | func.yaml |
| `OCI_FUNCTION_TIMEOUT_SECONDS` | Timeout in seconds | func.yaml |
| `OCI_FUNCTION_CONFIG` | JSON object string for function config/env | — |
| `OCI_IMAGE_TAG` | Image tag for OCIR | func.yaml version or `latest` |
| **API Gateway** | | |
| `OCI_APIGATEWAY_DEPLOYMENT_JSON` | Path to deployment spec JSON | `oci_apigateway_deployment.json` in project root |
| **Stack / networking** | | |
| `OCI_STACK_NAME` | Stack name | `oci-stack` |
| `OCI_STACK_ACTION` | `function-only` = no API Gateway; `full-stack` = Function + API Gateway | `full-stack` |
| `OCI_PRIVATE_SUBNET_ID`, `OCI_PRIVATE_SUBNET_OCID`, or `OCI_FUNCTION_SUBNET_ID` | Use existing private subnet for Function App | — |
| `OCI_PUBLIC_SUBNET_ID`, `OCI_PUBLIC_SUBNET_OCID`, or `OCI_APIGATEWAY_SUBNET_ID` | Use existing public subnet for API Gateway | — |
| **Terraform state** | | |
| `OCI_STATE_BACKEND_TYPE` | Backend type | `local` |
| `OCI_STATE_BUCKET` | Bucket name (for `oci` backend) | — |
| `OCI_STATE_KEY` | State file key (for `oci` backend) | — |
| `OCI_STATE_HTTP_ADDRESS` | State URL (for `http` backend; e.g. PAR URL) | — |
| `OCI_STATE_HTTP_UPDATE_METHOD` | Update method (for `http` backend) | `PUT` |
| `OCI_STATE_HTTP_LOCK_ADDRESS` | Lock endpoint URL | — |
| `OCI_STATE_HTTP_UNLOCK_ADDRESS` | Unlock endpoint URL | — |
| **Log tail (tail-function-logs.js / tail:execution-log)** | | |
| `OCI_COMPARTMENT_ID` or `OCI_COMPARTMENT_OCID` | Required for tail | — |
| `OCI_LOG_GROUP_ID` | Log group OCID | terraform output / `write-log-config` |
| `OCI_EXECUTION_LOG_ID` | Execution log OCID | terraform output / `write-log-config` |
| `OCI_CONFIG_FILE` | OCI CLI config path | `~/.oci/config` |
| `OCI_CLI_PROFILE` | OCI CLI profile | `DEFAULT` |
| **Internal** | | |
| `OCI_PROJECT_DIR` | Set by `ocdk` CLI to caller cwd | — |

## npx commands

Run from your project root (where your `func.yaml` / function code and `node_modules/@mikarinneoracle/oci-cdk` live):

```bash
npx ocdk deploy
npx ocdk tail:execution-log
npx ocdk destroy
```

- **`npx ocdk deploy`** – Deploy the stack. Options (e.g. `--auto-approve`) are passed through.
- **`npx ocdk tail:execution-log`** – Tail function execution logs. Resolves log IDs from terraform output or `OCI_LOG_GROUP_ID` / `OCI_EXECUTION_LOG_ID`. Set **`OCI_TAIL_DEBUG=1`** to print debug info to stderr if you get no output. Requires **`OCI_COMPARTMENT_ID`** (or `OCI_COMPARTMENT_OCID`) when run without a project `tail-function-logs.js`.
- **`npx ocdk destroy`** – Destroy the stack (Terraform destroy) using the same state/backend configuration as deploy. Options (e.g. `--auto-approve`) are passed through.

## IAM plan (API Gateway invoke + log tailing)

When you invoke a Function via **API Gateway**, OCI enforces IAM authorization between the API Gateway service principal and your Function. Separately, when you **tail execution logs**, your caller (usually your *OCI CLI user*, or an automation principal) must be allowed to read log content.

### API Gateway → Functions (required for invoking through API Gateway)

- **Recommended (what `OCI_CREATE_APIGW_POLICY=1` does)**: create a tenancy-level IAM policy that allows API Gateway principals in your compartment to use `functions-family` in the same compartment:

```
ALLOW any-user to use functions-family in compartment id <functions-compartment-ocid>
  where ALL {request.principal.type= 'ApiGateway', request.resource.compartment.id = '<api-gateway-compartment-ocid>'}
```

- **How to enable via this project**:

```bash
export OCI_CREATE_APIGW_POLICY=1
npx ocdk deploy --auto-approve
```

This creates only the policy statement above.

### Tail function execution logs (for `npx ocdk tail:execution-log`)

`tail:execution-log` uses `oci logging-search search-logs` under the hood. The calling principal needs permissions to read log groups and log content.

- **If you run it locally (OCI CLI user)**: grant your user group:

```
allow group <your-group> to read log-groups in compartment id <compartment-ocid>
allow group <your-group> to read log-content in compartment id <compartment-ocid>
```

- **If you run it from automation using a Resource Principal (instance/runner)**: put that resource in a **dynamic group**, and attach the same two statements (replace `group` with `dynamic-group`).

### GraalVM Java image notes

When you enable GraalVM Java via `OCI_USE_GRAALVM_JAVA=1`, the generated Dockerfile uses:

- `docker.io/fnproject/fn-java-fdk-build:jdk17-1.0-latest` and `docker.io/fnproject/fn-java-fdk:jre17-latest` for build/runtime
- `container-registry.oracle.com/graalvm/native-image:23-ol8` for native-image
- `container-registry.oracle.com/os/oraclelinux:8-slim` as the final base

The Fn Project images on `docker.io` are public. The Oracle images on `container-registry.oracle.com` are also public, but you must accept Oracle Container Registry terms and perform a `docker login` to `container-registry.oracle.com` with a registry-generated auth token once before builds can pull them.
