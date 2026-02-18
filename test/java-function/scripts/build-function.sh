#!/bin/bash
# Build Java function for AWS Lambda, OCI Functions, or both
# Usage: ./build-function.sh [aws|oci|all]
set -e

PLATFORM="${1:-all}"  # Default to 'all' if not specified

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FUNCTION_DIR="${SCRIPT_DIR}/../function-code"

echo "Building Java function for platform: ${PLATFORM}"

cd "${FUNCTION_DIR}"

# Build with Maven using platform-specific profile
if [ "${PLATFORM}" == "aws" ]; then
    echo "Building AWS Lambda version..."
    mvn clean package -Paws -Dplatform=aws
    echo "Build complete!"
    echo "JAR location: ${FUNCTION_DIR}/target/test-function-aws-1.0.0.jar"
elif [ "${PLATFORM}" == "oci" ]; then
    echo "Building OCI Functions version..."
    mvn clean package -Poci -Dplatform=oci
    echo "Build complete!"
    echo "JAR location: ${FUNCTION_DIR}/target/test-function-oci-1.0.0.jar"
else
    echo "Building both platforms..."
    mvn clean package -Pall
    echo "Build complete!"
    echo "JAR locations:"
    echo "  AWS: ${FUNCTION_DIR}/target/test-function-aws-1.0.0.jar"
    echo "  OCI: ${FUNCTION_DIR}/target/test-function-oci-1.0.0.jar"
fi
