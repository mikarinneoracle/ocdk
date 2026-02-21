#!/bin/bash
# Redeploy the Lambda function: rebuild JAR and run cdk deploy.
# CDK will update only the Lambda code asset when the JAR changes; rest of stack unchanged.
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ACDK_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

echo "Step 1: Building AWS Lambda JAR..."
"${ACDK_DIR}/../scripts/build-function.sh" aws

echo ""
echo "Step 2: Deploying stack (Lambda code will be updated)..."
cd "${ACDK_DIR}"
npx cdk deploy --require-approval never

echo ""
echo "Redeploy complete: Lambda function updated."
