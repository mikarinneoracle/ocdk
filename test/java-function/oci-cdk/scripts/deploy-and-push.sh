#!/bin/bash
# Deploy infrastructure and then build/push function image
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OCDK_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
SCRIPTS_DIR="${SCRIPT_DIR}/../../scripts"

echo "Step 1: Deploying infrastructure with Terraform..."
cd "${OCDK_DIR}"
npm run deploy

echo ""
echo "Step 2: Building and pushing function image to OCIR..."
"${SCRIPTS_DIR}/push-function-image.sh"

echo ""
echo "✅ Deployment complete!"
echo ""
echo "If the Function resource failed to create (image didn't exist), run 'npm run deploy' again now that the image is pushed."
