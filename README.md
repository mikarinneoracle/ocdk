# @mikarinneoracle/oci-cdk

OCI Functions (Java, Python, Node.js), API Gateway, and related infrastructure via Terraform CDK. Run from your project root with `npx ocdk`.

## Required

- **OCI CLI** – Configured (e.g. `oci setup config`). Used for auth, OCIR login, and `tail:execution-log`.
- **Terraform** – Used under the hood by CDKTF for apply/destroy; must be on `PATH` when running `npx ocdk deploy` / `destroy`.

## Environment variables

Only **`OCI_COMPARTMENT_ID`** (or `OCI_COMPARTMENT_OCID`) is required for deploy; all others are optional. If not set, **tenancy**, **region**, and **namespace** default from OCI CLI config (`~/.oci/config`, profile from `OCI_CLI_PROFILE`). **Namespace** can also be resolved via OCI SDK when missing.

| Env | Description | Default |
|-----|-------------|---------|
| **OCI** | | |
| `OCI_COMPARTMENT_ID` | Compartment OCID (or `OCI_COMPARTMENT_OCID`). **Required.** | — |
| `OCI_TENANCY_ID` | Tenancy OCID | OCI CLI config |
| `OCI_REGION` | Region (e.g. `eu-frankfurt-1`) | OCI CLI config |
| `OCI_NAMESPACE` | Object Storage namespace | OCI CLI config or SDK |
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

### GraalVM Java image notes

When you enable GraalVM Java via `OCI_USE_GRAALVM_JAVA=1`, the generated Dockerfile uses:

- `docker.io/fnproject/fn-java-fdk-build:jdk17-1.0-latest` and `docker.io/fnproject/fn-java-fdk:jre17-latest` for build/runtime
- `container-registry.oracle.com/graalvm/native-image:23-ol8` for native-image
- `container-registry.oracle.com/os/oraclelinux:8-slim` as the final base

The Fn Project images on `docker.io` are public. The Oracle images on `container-registry.oracle.com` are also public, but you must accept Oracle Container Registry terms and perform a `docker login` to `container-registry.oracle.com` once (or use an environment such as OCI Cloud Shell that already has access) before builds can pull them.
