# @mikarinneoracle/oci-cdk

OCI Functions (Java, Python, Node.js), API Gateway, and related infrastructure via Terraform CDK. **From 2.0 onward, code-only is the default deployment type:** Terraform creates, updates, and deletes the archive-backed Function directly. Use `OCI_DEPLOYMENT_TYPE=container-image` only when you explicitly need the legacy Docker/OCIR workflow. Run from your project root with `npx ocdk`.

Quick example (Python function + API Gateway):

```bash
mkdir my-python-function && cd my-python-function
fn init --runtime python
npm i --loglevel=error --no-fund @mikarinneoracle/oci-cdk
export OCI_COMPARTMENT_ID='ocid1.compartment.oc1...gq'
export OCI_FUNCTION_HANDLER='func.handler'

# Deploy the function and API Gateway
npx ocdk deploy --auto-approve

# Call the generated API Gateway REST endpoint (from deploy outputs)
curl https://<your-api-gateway-endpoint>

# Tail recent execution logs
npx ocdk tail:execution-log
```

## Required

- **Node.js + npm** – `npx ocdk ...` runs via Node. Install a recent LTS (e.g. 20.x+), which includes npm.
- **OCI CLI** – Configured (e.g. `oci setup config`). Used for auth and `tail:execution-log`. Code-only deployment does not invoke the OCI CLI.
- **Terraform** – Used under the hood by CDKTF for apply/destroy; must be on `PATH` when running `npx ocdk deploy` / `destroy`.
- **Fn CLI (optional but handy)** – For creating boilerplate functions (`fn init --runtime java|python|node`) and bumping your function version/tag in `func.yaml` with `fn bump`.

## Environment variables

Only **`OCI_COMPARTMENT_ID`** (or `OCI_COMPARTMENT_OCID`) is required for deploy; all others are optional. If not set, **tenancy**, **region**, and **namespace** default from OCI CLI config (`~/.oci/config`, profile from `OCI_CLI_PROFILE`). **Namespace** can also be resolved via OCI SDK when missing.

| Env | Applies to | Description | Default |
|-----|------------|-------------|---------|
| **OCI** | | | |
| `OCI_COMPARTMENT_ID` | Both | Compartment OCID (or `OCI_COMPARTMENT_OCID`). **Required.** | — |
| `OCI_TENANCY_ID` | Both | Tenancy OCID | OCI CLI config |
| `OCI_REGION` | Both | Region (e.g. `eu-frankfurt-1`) | OCI CLI config |
| `OCI_NAMESPACE` | Both | Object Storage namespace | OCI CLI config or SDK |
| `deployment-type` | Both | Deployment type: `code-only` or `container-image` | `code-only` |
| `OCI_DEPLOYMENT_TYPE` | Both | Shell-friendly alias for `deployment-type` | — |
| `OCI_CREATE_APIGW_POLICY` | Both | When `1`, also create the IAM policy so **API Gateway can invoke Functions** | `0` |
| **OCIR** | container-image | | |
| `OCI_OCIR_COMPARTMENT_ID` | container-image | Compartment for the OCIR repository (non-root for full stack) | same as `OCI_COMPARTMENT_ID` |
| `OCI_OCIR_REPOSITORY_NAME` | container-image | OCIR repository name | function name (func.yaml) |
| `OCI_AUTH_TOKEN` | container-image | Auth token for `docker login` to OCIR | OCI CLI token |
| `OCI_OCIR_USERNAME` | container-image | OCIR login user | `AUTO_DETECT` → `namespace/user` |
| **Function / stack** | | | |
| `OCI_FUNCTION_APP_NAME` | Both | Functions application name | func.yaml |
| `OCI_FUNCTION_NAME` | Both | Function name | func.yaml |
| `OCI_FUNCTION_JAR_PATH` | Java code-only; Java container-image | Code-only: fat/uber JAR to archive, relative to the project root or absolute. Container-image: JAR or Docker build-context path. | matching or first non-sources JAR in `target/` |
| `OCI_USE_GRAALVM_JAVA` | Java container-image | When `1`, use the GraalVM native-image Dockerfile and update `pom.xml`/`reflection.json` accordingly. It does not apply to code-only. | `0` |
| `OCI_FUNCTION_HANDLER` | Code-only; Java container-image | **Required for code-only unless resolvable from `func.yaml`.** Python: `module.function` (for example `func.handler`); Node.js: JavaScript filename (for example `func.js`); Java: FDK method (for example `com.example.fn.HelloFunction::handleRequest`). | `cmd`, `handler`, or `entrypoint` in `func.yaml` |
| `OCI_FUNCTION_MEMORY_MB` | Both | Memory in MB | func.yaml |
| `OCI_FUNCTION_TIMEOUT_SECONDS` | Both | Timeout in seconds | func.yaml |
| `OCI_FUNCTION_CONFIG` | Both | JSON object string for function config/env | — |
| `OCI_IMAGE_TAG` | container-image | Image tag for OCIR | func.yaml version or `latest` |
| `OCI_CODE_ONLY_RUNTIME_NAME` | code-only | OCI managed runtime, for example `python312.ol9`, `node24.ol9`, or `java21.ol9`. Pin this when the derived runtime is unavailable in the target tenancy/region. | Derived from `func.yaml`; fallback: Python 3.12, Node.js 24, Java 17 |
| **API Gateway** | | | |
| `OCI_APIGATEWAY_DEPLOYMENT_JSON` | Both | Path to deployment spec JSON | `oci_apigateway_deployment.json` in project root |
| **Stack / networking** | | | |
| `OCI_STACK_NAME` | Both | Stack name | `oci-stack` |
| `OCI_STACK_ACTION` | Both | `function-only` = no API Gateway; `full-stack` = Function + API Gateway | `full-stack` |
| `OCI_PRIVATE_SUBNET_ID`, `OCI_PRIVATE_SUBNET_OCID`, or `OCI_FUNCTION_SUBNET_ID` | Both | Use existing private subnet for Function App | — |
| `OCI_PUBLIC_SUBNET_ID`, `OCI_PUBLIC_SUBNET_OCID`, or `OCI_APIGATEWAY_SUBNET_ID` | Both | Use existing public subnet for API Gateway | — |
| **Terraform state** | | | |
| `OCI_STATE_BACKEND_TYPE` | Both | Backend type | `local` |
| `OCI_STATE_LOCAL_PATH` | Both | Local state file path, relative to the project unless absolute | `.ocdk/terraform.tfstate` |
| `OCI_STATE_BUCKET` | Both | Bucket name (for `oci` backend) | — |
| `OCI_STATE_KEY` | Both | State file key (for `oci` backend) | — |
| `OCI_STATE_HTTP_ADDRESS` | Both | State URL (for `http` backend; e.g. PAR URL) | — |
| `OCI_STATE_HTTP_UPDATE_METHOD` | Both | Update method (for `http` backend) | `PUT` |
| `OCI_STATE_HTTP_LOCK_ADDRESS` | Both | Lock endpoint URL | — |
| `OCI_STATE_HTTP_UNLOCK_ADDRESS` | Both | Unlock endpoint URL | — |
| **Log tail (tail-function-logs.js / tail:execution-log)** | | |

With the default local backend, OCDK stores Terraform state in your project at `.ocdk/terraform.tfstate` (which is gitignored), not under `node_modules`. Removing and reinstalling dependencies therefore preserves the state. Use an OCI or HTTP backend for shared or durable remote state.

## Deployment types

`code-only` is the default from version 2.0 onward. OCDK packages the Function as a ZIP/JAR and passes it to the native `oci_functions_function` Terraform resource with an `ARCHIVE` source. Terraform creates, updates, and deletes the Function; no OCI CLI upload step, Docker build, OCIR repository, or image push is used.

The direct-archive limit is 25 MiB. The Base64 archive is stored in Terraform state, so keep state local and ignored or use an appropriately protected remote backend. An archive larger than 25 MiB fails during synthesis with an explicit error. OCI also supports Object Storage archive sources, but OCDK does not yet implement that path: reduce the deployment archive or use `container-image` until it does.

### Code-only handler and runtime

Code-only needs both a managed runtime and a handler. OCDK reads `cmd`, `handler`, or `entrypoint` from `func.yaml`; set `OCI_FUNCTION_HANDLER` when that value is absent or you want an explicit, portable configuration.

| Language | Handler value | Typical runtime |
|----------|---------------|-----------------|
| Python | `func.handler` | `python312.ol9` |
| Node.js | `func.js` | `node24.ol9` |
| Java | `com.example.fn.HelloFunction::handleRequest` | `java21.ol9` |

For a standard Python Fn project, the usual `func.yaml` entrypoint (`/python/bin/fdk /function/func.py handler`) is converted to `func.handler`. The quick-start declares it explicitly so that the deployment does not depend on entrypoint discovery.

For Node.js, use the JavaScript filename as the handler, not `fdk.handle` and not `node func.js`. Keep `@fnproject/fdk` and all application runtime dependencies in `package.json` under `dependencies` (not `devDependencies`). OCDK copies only that production dependency graph into the archive and deliberately excludes `@mikarinneoracle/oci-cdk`, CDKTF, and other tooling dependencies.

For Java, build a single fat/uber JAR before deployment and set the handler to the FDK method. If the JAR is not the only suitable artifact in `target/`, set `OCI_FUNCTION_JAR_PATH` explicitly:

```bash
mvn -DskipTests package
export OCI_CODE_ONLY_RUNTIME_NAME='java21.ol9'
export OCI_FUNCTION_HANDLER='com.example.fn.HelloFunction::handleRequest'
export OCI_FUNCTION_JAR_PATH='target/my-function.jar'
```

The exact managed runtime names available can differ by region and tenancy. List them with the OCI CLI when a derived runtime is rejected:

```bash
oci fn runtime list --all --output table
oci fn runtime list --all --name-starts-with python --output table
oci fn runtime list --all --name-starts-with node --output table
oci fn runtime list --all --name-starts-with java --output table
```

In particular, set `OCI_CODE_ONLY_RUNTIME_NAME=java21.ol9` for Java where `java17.ol9` is not accepted by the target region.

### Code-only archive contents

Python and Node.js source is archived below the required `function/` directory. OCI does not install application dependencies during archive deployment. Put Python dependencies in the project `python/` directory (for example, `pip install -r requirements.txt -t python`) before deploying. For Node.js, OCDK copies production dependencies automatically as described above. Java archives contain the selected JAR at the ZIP root and do not include the project source tree.

Use `container-image` only when the Function needs a custom image, operating-system packages, or other container-specific behavior:

```bash
export OCI_DEPLOYMENT_TYPE=container-image
npx ocdk deploy --auto-approve
```

| **Log tail (`tail:execution-log`)** | Both | | |
| `OCI_COMPARTMENT_ID` or `OCI_COMPARTMENT_OCID` | Both | Required for tail | — |
| `OCI_LOG_GROUP_ID` | Both | Log group OCID | Terraform output |
| `OCI_EXECUTION_LOG_ID` | Both | Execution log OCID | Terraform output |
| `OCI_CONFIG_FILE` | Both | OCI CLI config path | `~/.oci/config` |
| `OCI_CLI_PROFILE` | Both | OCI CLI profile | `DEFAULT` |
| `OCI_CONFIG_PROFILE` | Both | Alias for `OCI_CLI_PROFILE` in the generated log-tail helper | `DEFAULT` |
| `OCI_LOG_TAIL` | Both | Number of initial log entries for the generated `tail-function-logs.js` helper; it can also be supplied as that helper's first argument | `20` |
| `OCI_LOG_INTERVAL_MS` | Both | Polling interval for `tail:execution-log` and the generated log-tail helper, in milliseconds | `5000` |
| `OCI_TAIL_DEBUG` | Both | When `1` or `true`, print log-tail diagnostics to stderr | `0` |
| **Internal** | | | |
| `OCI_PROJECT_DIR` | Both | Set by `ocdk` CLI to caller cwd | — |

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

## Security notes

- Installing this package adds tooling dependencies under your project `node_modules`.
- These dependencies are used by the local CLI workflow (`npx ocdk ...`) on developer/CI machines.
- In code-only mode, only the Node.js application's production dependency graph is added to the archive; OCDK/CDKTF tooling is excluded. In container-image mode, the generated `.dockerignore` excludes the local `node_modules` tree before the image build.
- Residual risk remains in local/CI environments; keep dependencies up to date and run `npm audit` periodically.

If you only need the utility temporarily, remove it after use:

```bash
npm uninstall --ignore-scripts @mikarinneoracle/oci-cdk
```

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
