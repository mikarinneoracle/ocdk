#!/bin/bash
# Build and push Docker image to OCIR after Terraform creates the repository
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FUNCTION_DIR="${SCRIPT_DIR}/../function-code"
OCDK_DIR="${SCRIPT_DIR}/../oci-ocdk"

# Configuration from environment
REGION="${OCI_REGION:-eu-frankfurt-1}"
NAMESPACE="${OCI_NAMESPACE}"
OCIR_COMPARTMENT_ID="${OCI_OCIR_COMPARTMENT_ID:-${OCI_COMPARTMENT_ID}}"

if [ -z "${NAMESPACE}" ]; then
    echo "Error: OCI_NAMESPACE environment variable is required"
    exit 1
fi

if [ -z "${OCIR_COMPARTMENT_ID}" ]; then
    echo "Error: OCI_OCIR_COMPARTMENT_ID or OCI_COMPARTMENT_ID environment variable is required"
    exit 1
fi

# Get OCIR repository name from Terraform output
echo "Getting OCIR repository name from Terraform output..."
cd "${OCDK_DIR}"

# Try to get repository name from Terraform output
# cdktf output format: "ocir_repository_name = \"test-java-function\""
REPO_NAME=$(cdktf output ocir_repository_name 2>/dev/null | grep -E '^\s*ocir_repository_name\s*=' | sed -E 's/.*=\s*"([^"]+)".*/\1/' || echo "")

if [ -z "${REPO_NAME}" ]; then
    echo "Warning: Could not get repository name from Terraform output. Using default."
    REPO_NAME="${OCI_OCIR_REPOSITORY_NAME:-test-java-function}"
else
    echo "Found repository name: ${REPO_NAME}"
fi

IMAGE_TAG="${REGION}.ocir.io/${NAMESPACE}/${REPO_NAME}:latest"

echo "Building Docker image for OCI Function..."
echo "Repository: ${REPO_NAME}"
echo "Image: ${IMAGE_TAG}"

cd "${FUNCTION_DIR}"

# Build Docker image
docker build -t "${IMAGE_TAG}" .

echo ""
echo "Docker image built successfully: ${IMAGE_TAG}"
echo ""

# Check if already logged in to OCIR
if ! docker info 2>/dev/null | grep -q "${REGION}.ocir.io"; then
    echo "Logging into OCIR..."
    echo "You need to provide your OCI auth token (not your password)."
    echo "Get it from: https://cloud.oracle.com/identity/tokens"
    echo ""
    read -p "Enter your OCI auth token: " -s AUTH_TOKEN
    echo ""
    
    # Login format: username is <tenancy-namespace>/<username>
    # For example: frsxwtjslf35/oracleidentitycloudservice/user@example.com
    echo "Enter your OCI username (format: <tenancy-namespace>/<username>):"
    echo "  Example: frsxwtjslf35/oracleidentitycloudservice/user@example.com"
    read -p "Username: " OCIR_USERNAME
    
    echo "${AUTH_TOKEN}" | docker login "${REGION}.ocir.io" -u "${OCIR_USERNAME}" --password-stdin
else
    echo "Already logged into OCIR."
fi

echo ""
echo "Pushing image to OCIR..."
docker push "${IMAGE_TAG}"

echo ""
echo "✅ Image pushed successfully: ${IMAGE_TAG}"
echo ""
echo "The Function resource should now be able to use this image."
echo "If the Function creation failed earlier, run 'npm run deploy' again to retry."
