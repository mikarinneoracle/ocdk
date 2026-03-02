# @mikarinneoracle/oci-cdk

OCI Functions, API Gateway, and related infrastructure via Terraform CDK. Run from your project root with `npx ocdk`.

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
| `OCI_FUNCTION_HANDLER` | Handler (e.g. Java FDK CMD) | func.yaml |
| `OCI_FUNCTION_MEMORY_MB` | Memory in MB | func.yaml |
| `OCI_FUNCTION_TIMEOUT_SECONDS` | Timeout in seconds | func.yaml |
| `OCI_FUNCTION_CONFIG` | JSON object string for function config/env | — |
| `OCI_IMAGE_TAG` | Image tag for OCIR | func.yaml version or `latest` |
| **API Gateway** | | |
| `OCI_APIGATEWAY_DEPLOYMENT_JSON` | Path to deployment spec JSON | `oci_apigateway_deployment.json` in project root |
| **Stack / networking** | | |
| `OCI_STACK_NAME` | Stack name | `oci-stack` |
| `STACK_ACTION` | `function` = no API Gateway; `api-gateway` = full stack | `api-gateway` |
| `PRIVATE_SUBNET_ID` or `PRIVATE_SUBNET_OCID` | Use existing private subnet for Function App | — |
| `PUBLIC_SUBNET_ID` or `PUBLIC_SUBNET_OCID` | Use existing public subnet for API Gateway | — |
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
| `OCI_LOG_GROUP_ID` | Log group OCID | `.ocdk-logs.json` after deploy |
| `OCI_EXECUTION_LOG_ID` | Execution log OCID | `.ocdk-logs.json` after deploy |
| `OCI_CONFIG_FILE` | OCI CLI config path | `~/.oci/config` |
| `OCI_CLI_PROFILE` | OCI CLI profile | `DEFAULT` |
| **Internal** | | |
| `OCDK_PROJECT_DIR` | Set by `ocdk` CLI to caller cwd | — |

## npx commands

Run from your project root (where your `func.yaml` / function code and `node_modules/@mikarinneoracle/oci-cdk` live):

```bash
npx ocdk deploy
npx ocdk diff
npx ocdk synth
npx ocdk destroy
npx ocdk list
npx ocdk get
npx ocdk tail:execution-log
```

- **`npx ocdk get`** – Generate provider bindings (use this, not `npx cdktf get`).
- **`npx ocdk tail:execution-log`** – Tail function execution logs. Resolves log IDs from terraform output, `.ocdk-logs.json`, or `OCI_LOG_GROUP_ID` / `OCI_EXECUTION_LOG_ID`. Set **`OCI_TAIL_DEBUG=1`** to print debug info to stderr if you get no output. Requires **`OCI_COMPARTMENT_ID`** when run without a project `tail-function-logs.js`.
- **`npx ocdk write-log-config`** – Optional: write `.ocdk-logs.json` and `tail-function-logs.js` to project root from terraform output.

Options (e.g. `--auto-approve`) are passed through: `npx ocdk deploy --auto-approve`.
