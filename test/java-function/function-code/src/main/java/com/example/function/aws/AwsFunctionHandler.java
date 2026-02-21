package com.example.function.aws;

import com.example.function.FunctionBusinessLogic;
import com.example.function.FunctionResponse;
import com.example.function.base.BaseFunctionHandler;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.secretsmanager.SecretsManagerClient;
import software.amazon.awssdk.services.secretsmanager.model.GetSecretValueRequest;
import software.amazon.awssdk.services.secretsmanager.model.GetSecretValueResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * AWS Lambda handler implementation.
 * Entry point for AWS Lambda deployments.
 * Connection pool for PostgreSQL is created on first request using secret from AWS Secrets Manager (e.g. RDS secret).
 */
public class AwsFunctionHandler extends BaseFunctionHandler implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {

    private final FunctionBusinessLogic businessLogic;
    /** Secret ARN for PG (e.g. RDS secret); read from env/config (e.g. PG_SECRET_ARN). */
    private static volatile String pgSecretArn;
    private static final Object POOL_LOCK = new Object();

    public AwsFunctionHandler() {
        this.businessLogic = new FunctionBusinessLogic();
    }

    @Override
    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
        pgSecretArn = pgSecretArn != null ? pgSecretArn : System.getenv("PG_SECRET_ARN");
        boolean hasPgSecret = pgSecretArn != null && !pgSecretArn.isBlank();
        String action = request.getQueryStringParameters() != null && request.getQueryStringParameters().containsKey("action")
            ? request.getQueryStringParameters().get("action") : "";
        context.getLogger().log("[TestFunction] action=" + action + " PG_SECRET_ARN=" + (hasPgSecret ? "set" : "not set"));
        if (getDataSource() == null && !hasPgSecret) {
            context.getLogger().log("PG_SECRET_ARN not set in Lambda environment; sysdate will return 503");
        }
        synchronized (POOL_LOCK) {
            if (getDataSource() == null && pgSecretArn != null && !pgSecretArn.isBlank()) {
                try {
                    initPool();
                    if (getDataSource() != null) {
                        businessLogic.setSysdateDataSource(getDataSource());
                    }
                } catch (Exception e) {
                    Throwable cause = e.getCause();
                    String detail = cause != null ? cause.getMessage() : e.getMessage();
                    context.getLogger().log("PG pool init failed: " + e.getMessage() + (cause != null ? " cause: " + detail : ""));
                    e.printStackTrace();
                }
            }
        }
        FunctionResponse response = businessLogic.routeRequest(action, request.getBody());
        APIGatewayProxyResponseEvent apiResponse = new APIGatewayProxyResponseEvent();
        apiResponse.setStatusCode(response.getStatusCode());
        apiResponse.setBody(response.getBody());
        apiResponse.setHeaders(response.getHeaders());
        return apiResponse;
    }

    @Override
    protected String getConnectionString() throws Exception {
        if (pgSecretArn == null || pgSecretArn.isBlank()) {
            return null;
        }
        String region = System.getenv("AWS_REGION");
        if (region == null || region.isBlank()) region = "eu-central-1";
        try (SecretsManagerClient client = SecretsManagerClient.builder()
            .region(Region.of(region))
            .build()) {
            GetSecretValueResponse resp = client.getSecretValue(
                GetSecretValueRequest.builder().secretId(pgSecretArn).build());
            String raw = resp.secretString();
            if (raw == null || raw.isBlank()) return null;
            raw = raw.trim();
            // Same format as OCI: raw postgresql:// URL (from PG_URL) or RDS secret JSON
            if (raw.startsWith("postgresql://")) {
                return raw;
            }
            // RDS secret is JSON: username, password, host, port, dbname, engine, ...
            ObjectMapper mapper = new ObjectMapper();
            JsonNode o = mapper.readTree(raw);
            String host = o.has("host") ? o.get("host").asText() : null;
            int port = o.has("port") ? o.get("port").asInt() : 5432;
            String username = o.has("username") ? o.get("username").asText() : null;
            String password = o.has("password") ? o.get("password").asText() : null;
            String dbname = o.has("dbname") ? o.get("dbname").asText() : "postgres";
            if (host == null || host.isBlank() || username == null || password == null) return null;
            // URL-encode user/password to handle special characters
            String encUser = java.net.URLEncoder.encode(username, java.nio.charset.StandardCharsets.UTF_8);
            String encPass = java.net.URLEncoder.encode(password, java.nio.charset.StandardCharsets.UTF_8);
            return String.format("postgresql://%s:%s@%s:%d/%s", encUser, encPass, host, port, dbname);
        }
    }
}
