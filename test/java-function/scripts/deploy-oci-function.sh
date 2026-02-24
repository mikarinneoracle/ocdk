#!/bin/bash
# Deploy Java function to OCI Functions
set -e

# Configuration
COMPARTMENT_ID="${OCI_COMPARTMENT_ID}"
APP_NAME="${OCI_FUNCTION_APP_NAME:-function-app}"
FUNCTION_NAME="${OCI_FUNCTION_NAME:-java-function}"
REGION="${OCI_REGION:-eu-frankfurt-1}"
NAMESPACE="${OCI_NAMESPACE}"
REPO_NAME="${OCI_OCIR_REPOSITORY_NAME:-java-function}"
IMAGE_TAG="${REGION}.ocir.io/${NAMESPACE}/${REPO_NAME}:latest"

if [ -z "${COMPARTMENT_ID}" ] || [ -z "${NAMESPACE}" ]; then
    echo "Error: OCI_COMPARTMENT_ID and OCI_NAMESPACE environment variables are required"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FUNCTION_DIR="${SCRIPT_DIR}/../function-code"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Building function Docker image...${NC}"
cd "${FUNCTION_DIR}"
docker build -t ${IMAGE_TAG} .

echo -e "${GREEN}Pushing image to OCI Registry...${NC}"
docker push ${IMAGE_TAG}

echo -e "${GREEN}Getting function OCID...${NC}"
# Get application OCID
APP_OCID=$(oci fn application list \
  --compartment-id ${COMPARTMENT_ID} \
  --display-name ${APP_NAME} \
  --query 'data[0].id' \
  --raw-output)

if [ -z "${APP_OCID}" ] || [ "${APP_OCID}" == "null" ]; then
  echo -e "${YELLOW}Application not found. Please create it first using OCDK.${NC}"
  exit 1
fi

# Get function OCID
FUNCTION_OCID=$(oci fn function list \
  --application-id ${APP_OCID} \
  --display-name ${FUNCTION_NAME} \
  --query 'data[0].id' \
  --raw-output)

if [ -z "${FUNCTION_OCID}" ] || [ "${FUNCTION_OCID}" == "null" ]; then
  echo -e "${YELLOW}Function not found. Please create it first using OCDK.${NC}"
  exit 1
fi

echo -e "${GREEN}Updating function ${FUNCTION_OCID}...${NC}"
oci fn function update \
  --function-id ${FUNCTION_OCID} \
  --image ${IMAGE_TAG}

echo -e "${GREEN}Function deployment complete!${NC}"
