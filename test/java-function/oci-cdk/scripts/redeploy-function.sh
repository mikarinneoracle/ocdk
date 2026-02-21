#!/bin/bash
# Redeploy only the function: rebuild JAR, rebuild/push image (local-exec), replace function.
# Does not destroy or recreate the rest of the stack (VCN, gateway, app, etc.).
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OCDK_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
STACK_NAME="${OCI_STACK_NAME:-test-function-stack}"

echo "Step 1: Building OCI Java function JAR..."
"${OCDK_DIR}/../scripts/build-function.sh" oci

echo ""
echo "Step 2: Compiling CDK and synthesizing..."
cd "${OCDK_DIR}"
npm run build
npx cdktf synth

STACK_DIR="${OCDK_DIR}/cdktf.out/stacks/${STACK_NAME}"
if [ ! -d "${STACK_DIR}" ]; then
  echo "Error: Stack directory not found: ${STACK_DIR}" >&2
  echo "Run 'npx cdktf synth' and check cdktf.out/stacks/." >&2
  exit 1
fi

echo ""
echo "Step 3: Replacing null_resource (build+push) and function..."
cd "${STACK_DIR}"
terraform apply \
  -replace="null_resource.BuildAndPushImage" \
  -replace="oci_functions_function.Function" \
  -auto-approve

echo ""
echo "Redeploy complete: function image rebuilt, pushed, and function recreated."
