# @mikarinneoracle/oci-cdk-code-only-preview

OCI Functions (Java, Python, Node.js), API Gateway, and related infrastructure via Terraform CDK. Run from your project root with `npx ocdk`.

Quick example (Python function + API Gateway):

```bash
mkdir my-python-function && cd my-python-function
fn init --runtime python
npm i --ignore-scripts @mikarinneoracle/oci-cdk-code-only-preview
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
| `OCI_CLI_PATH` | OCI CLI executable to use for CLI-backed operations | `oci` from `PATH` |
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
| `OCI_CODE_ONLY` | When `1`, use the Code-only Functions ZIP deploy path | `0` |
| `OCI_CODE_ONLY_SOURCE_DIR` | Source directory to archive for code-only deploy | current directory |
| `OCI_CODE_ONLY_RUNTIME_NAME` | Required OCI Functions runtime name for code-only deploy (for example `python312.ol9`) | — |
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
| **Log tail (.ocdk/tail-function-logs.js / tail:execution-log)** | | |
| `OCI_COMPARTMENT_ID` or `OCI_COMPARTMENT_OCID` | Required for tail | — |
| `OCI_LOG_GROUP_ID` | Log group OCID | terraform output / `write-log-config` |
| `OCI_EXECUTION_LOG_ID` | Execution log OCID | terraform output / `write-log-config` |
| `OCI_CONFIG_FILE` | OCI CLI config path | `~/.oci/config` |
| `OCI_CLI_PROFILE` | OCI CLI profile | `DEFAULT` |
| **Internal** | | |
| `OCI_PROJECT_DIR` | Set by `ocdk` CLI to caller cwd | — |

## npx commands

### Using an OCI CLI preview installation

Choose a non-default CLI executable without changing your shell `PATH`. `OCI_CLI_PATH` must be the absolute path to the preview binary, not merely the directory containing it:

```bash
export OCI_CLI_PATH="/absolute/path/to/oci-preview-bin/oci"
"$OCI_CLI_PATH" --version
```

For the repository-local preview installation used in this checkout:

```bash
export OCI_CLI_PATH="/Users/MRINNE/projects/ocdk/.tools/oci-preview-bin/oci"
```

The repository-local preview installation is required only for preview-only features such as Code-only Functions. Regular deployments continue to use `oci` from `PATH` unless `OCI_CLI_PATH` is set.

### Code-only Functions preview

Code-only deployment first uses Terraform to create or manage the Function Application and its networking/logging resources. It then uploads a ZIP archive directly to OCI Functions with OCI CLI preview. OCI builds and manages the execution image: no Docker build, OCIR repository, or image push occurs.

Activate the path with either `-code-only`, `--code-only`, or `OCI_CODE_ONLY=1`. The compatibility environment key `code-only=1` is also recognized when a process launcher can set a hyphenated environment name.

```bash
# Required: OCI CLI preview binary
export OCI_CLI_PATH="/Users/MRINNE/projects/ocdk/.tools/oci-preview-bin/oci"
"$OCI_CLI_PATH" --version

# Required: OCI target
export OCI_COMPARTMENT_ID='ocid1.compartment.oc1...'

# Required: code-only runtime and handler
export OCI_CODE_ONLY_RUNTIME_NAME='python312.ol9'
export OCI_FUNCTION_HANDLER='func.handler'

# Required in func.yaml: name: my-function
# Terraform creates the Function App; OCI CLI preview uploads the ZIP function
npx ocdk deploy --auto-approve --code-only
```

For a Node.js function, use the JavaScript file as the handler (not `fdk.handle` or `node func.js`):

```bash
export OCI_CODE_ONLY_RUNTIME_NAME='node24.ol9'
export OCI_FUNCTION_HANDLER='func.js'
```

The equivalent conventional `func.yaml` configuration is supported too. OCDK converts `entrypoint: node func.js` to the required code-only handler `func.js`:

```yaml
schema_version: 20180708
name: my-node-function
runtime: node
entrypoint: node func.js
```

Keep `@fnproject/fdk` in `package.json` dependencies. The function source file uses `fdk.handle(...)`; it is not the OCI handler value.

For Java, the code-only archive must contain exactly one fat/uber JAR at the ZIP root. Build it first and point OCDK to it when necessary:

```bash
export OCI_CODE_ONLY_RUNTIME_NAME='java21.ol9'
export OCI_FUNCTION_HANDLER='com.example.fn.HelloFunction::handleRequest'
export OCI_FUNCTION_JAR_PATH='target/my-function.jar'
```

Before the first deploy, build the function JAR:

```bash
mvn -DskipTests package
# or: gradle build -x test
```

OCDK also runs this build automatically when no artifact exists yet, and searches the project root, Maven `target/`, and Gradle `build/libs/`. The OCI service validates the JAR contents; if several non-source JARs exist, set `OCI_FUNCTION_JAR_PATH` to the one to deploy explicitly. Java archives do not contain the project source tree or a `function/` directory.

#### Find the available code-only runtimes

The exact `OCI_CODE_ONLY_RUNTIME_NAME` values are enabled per tenancy and region during this Limited Availability preview. Query the Preview CLI instead of copying a runtime name from another environment:

```bash
# List every runtime available to the active OCI profile
"$OCI_CLI_PATH" fn runtime list --all --output table

# Narrow the list by runtime-name prefix, for example Python, Node.js, or Java
"$OCI_CLI_PATH" fn runtime list --all --name-starts-with python --output table
"$OCI_CLI_PATH" fn runtime list --all --name-starts-with node --output table
"$OCI_CLI_PATH" fn runtime list --all --name-starts-with java --output table
```

OCI Functions supports Java, Python, Node.js, Go, Ruby, and C# FDKs in general; code-only availability is limited to the runtimes returned by the command above. See Oracle's [supported language versions](https://docs.oracle.com/en-us/iaas/Content/Functions/Tasks/languagessupportedbyfunctions.htm).

By default, the function name and Function App name both come from `func.yaml`'s `name`. Set these only to override that default or to use a differently named existing Function App:

```bash
export OCI_FUNCTION_NAME='my-function'
export OCI_FUNCTION_APP_NAME='my-existing-function-app'
```

These settings are optional: `OCI_CODE_ONLY_SOURCE_DIR` (defaults to the current directory), `OCI_FUNCTION_MEMORY_MB` (from `func.yaml`, otherwise `256`), and `OCI_FUNCTION_TIMEOUT_SECONDS` (from `func.yaml`, otherwise `30`). `OCI_TENANCY_ID`, `OCI_REGION`, and `OCI_NAMESPACE` are also optional when they can be resolved from the active OCI CLI profile.

Each deploy re-builds `<function-name>.zip` in the project root and uploads that file. The ZIP has the required `function/` directory at its root, includes source files, and excludes `node_modules`, `package-lock.json`, `.git`, `.tools`, `.terraform`, `cdktf.out`, and the generated `.ocdk/` directory. For Node.js functions, a sanitized `package.json` remains so OCI can install the FDK and other dependencies; OCDK removes its own package dependency (`@mikarinneoracle/oci-cdk-code-only-preview`, and the legacy package name) from that copied manifest. For Python and Java code-only functions, `package.json` is excluded entirely. A successful code-only destroy removes this ZIP after Terraform has destroyed the Function App and infrastructure. With the default `OCI_STACK_ACTION=full-stack`, OCDK creates the API Gateway and uses a Terraform data source to resolve the CLI-managed function OCID for its route. The first code-only deploy therefore runs Terraform once to create the Function App, uploads the function, then runs Terraform again to create the Gateway deployment. Set `OCI_STACK_ACTION=function-only` to omit API Gateway.

After a successful code-only deploy, OCDK writes the log IDs for `npx ocdk tail:execution-log` automatically.

Use the same flag or environment variable for deletion. OCDK deletes the CLI-managed function first, then lets Terraform destroy the Function App and its infrastructure:

```bash
npx ocdk destroy --code-only --auto-approve
```

Run from your project root (where your `func.yaml` / function code and `node_modules/@mikarinneoracle/oci-cdk-code-only-preview` live):

```bash
npx ocdk deploy --auto-approve --code-only
npx ocdk tail:execution-log
npx ocdk destroy --auto-approve --code-only
```

- **`npx ocdk deploy`** – Deploy the stack. Options (e.g. `--auto-approve`) are passed through.
- **`npx ocdk tail:execution-log`** – Tail function execution logs. Resolves log IDs from Terraform output or `OCI_LOG_GROUP_ID` / `OCI_EXECUTION_LOG_ID`. Its generated helper is stored under `.ocdk/` and ignored by Git. Set **`OCI_TAIL_DEBUG=1`** to print debug info to stderr if you get no output. Requires **`OCI_COMPARTMENT_ID`** (or `OCI_COMPARTMENT_OCID`) when run without generated log configuration.
- **`npx ocdk destroy`** – Destroy the stack (Terraform destroy) using the same state/backend configuration as deploy. Options (e.g. `--auto-approve`) are passed through.

## Security notes

- Installing this package adds tooling dependencies under your project `node_modules`.
- These dependencies are used by the local CLI workflow (`npx ocdk ...`) on developer/CI machines.
- Function runtime images generated by this tool exclude `node_modules` by default via `.dockerignore`, so tooling dependencies are not part of the deployed function container.
- Residual risk remains in local/CI environments; keep dependencies up to date and run `npm audit` periodically.

If you only need the utility temporarily, remove it after use:

```bash
npm uninstall --ignore-scripts @mikarinneoracle/oci-cdk-code-only-preview
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
