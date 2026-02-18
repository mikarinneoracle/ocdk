# Dockerfile for OCI Function (Java)
FROM fnproject/fn-java-fdk:jdk11-latest

WORKDIR /function

# Copy Maven files
COPY pom.xml .
COPY src ./src

# Build the function for OCI platform
RUN mvn clean package -Poci -Dplatform=oci -DskipTests

# Copy the built JAR (OCI-specific build)
COPY target/test-function-oci-1.0.0.jar /function/app.jar

# Set the handler class (OCI-specific handler)
ENV FN_FUNCTION_NAME=com.example.function.oci.OciFunctionHandler::handleRequest

# OCI Functions runtime expects the function code at /function
CMD ["/function/func.yaml"]
