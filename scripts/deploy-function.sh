#!/bin/bash
# Deploy OCI Function code using OCI CLI
# This script builds the Docker image and updates the function
set -e

# Configuration
COMPARTMENT_ID="${OCI_COMPARTMENT_ID}"
APP_NAME="hello-arm"
FUNCTION_NAME="testimonials-main"
REGISTRY="${OCI_REGISTRY:-fra.ocir.io}"
NAMESPACE="${OCI_NAMESPACE}"
IMAGE_TAG="${REGISTRY}/${NAMESPACE}/${FUNCTION_NAME}:latest"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Building function Docker image...${NC}"
cd "$(dirname "$0")/../../testimonials_oci"
docker build -t ${IMAGE_TAG} -f Dockerfile .

echo -e "${GREEN}Pushing image to OCI Registry...${NC}"
docker push ${IMAGE_TAG}

echo -e "${GREEN}Getting function OCID...${NC}"
# Get application OCID
APP_OCID=$(oci fn application list \
  --compartment-id ${COMPARTMENT_ID} \
  --display-name ${APP_NAME} \
  --query 'data[0].id' \
  --raw-output)

# Get function OCID
FUNCTION_OCID=$(oci fn function list \
  --application-id ${APP_OCID} \
  --display-name ${FUNCTION_NAME} \
  --query 'data[0].id' \
  --raw-output)

if [ -z "${FUNCTION_OCID}" ] || [ "${FUNCTION_OCID}" == "null" ]; then
  echo -e "${YELLOW}Function not found. Creating new function...${NC}"
  oci fn function create \
    --application-id ${APP_OCID} \
    --display-name ${FUNCTION_NAME} \
    --image ${IMAGE_TAG} \
    --memory-in-mbs 1024 \
    --timeout-in-seconds 30
else
  echo -e "${GREEN}Updating function ${FUNCTION_OCID}...${NC}"
  oci fn function update \
    --function-id ${FUNCTION_OCID} \
    --image ${IMAGE_TAG}
fi

echo -e "${GREEN}Function deployment complete!${NC}"
