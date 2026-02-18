#!/bin/bash
# Build Docker image for OCI Function
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FUNCTION_DIR="${SCRIPT_DIR}/../function-code"

# Configuration from environment
REGION="${OCI_REGION:-eu-frankfurt-1}"
NAMESPACE="${OCI_NAMESPACE}"
REPO_NAME="${OCI_OCIR_REPOSITORY_NAME:-test-java-function}"
IMAGE_TAG="${REGION}.ocir.io/${NAMESPACE}/${REPO_NAME}:latest"

if [ -z "${NAMESPACE}" ]; then
    echo "Error: OCI_NAMESPACE environment variable is required"
    exit 1
fi

echo "Building Docker image for OCI Function..."
echo "Image: ${IMAGE_TAG}"

cd "${FUNCTION_DIR}"

# Build Docker image
docker build -t "${IMAGE_TAG}" .

echo "Docker image built: ${IMAGE_TAG}"
echo ""
echo "To push the image:"
echo "  docker push ${IMAGE_TAG}"
