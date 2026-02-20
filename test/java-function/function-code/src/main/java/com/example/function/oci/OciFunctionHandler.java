package com.example.function.oci;

import com.example.function.FunctionBusinessLogic;
import com.example.function.FunctionResponse;
import com.fnproject.fn.api.FnConfiguration;
import com.fnproject.fn.api.RuntimeContext;
import com.fnproject.fn.api.httpgateway.HTTPGatewayContext;

/**
 * OCI Function handler implementation.
 * Entry point for OCI Functions deployments (HTTP Gateway).
 * Uses FDK api 1.0.209: context for status/headers, String param for body, return value for response body.
 */
public class OciFunctionHandler {

    private final FunctionBusinessLogic businessLogic;

    public OciFunctionHandler() {
        this.businessLogic = new FunctionBusinessLogic();
    }

    @FnConfiguration
    public void config(RuntimeContext ctx) {
        // Configuration hook if needed
    }

    /**
     * OCI Function HTTP handler.
     * Request body is bound to the second parameter; status and headers are set on the context; response body is the return value.
     */
    public String handleRequest(HTTPGatewayContext hctx, String requestBody) {
        String action = hctx.getQueryParameters().get("action").orElse("");
        FunctionResponse response = businessLogic.routeRequest(action, requestBody);

        hctx.setStatusCode(response.getStatusCode());
        hctx.setResponseHeader("Content-Type", "application/json");
        return response.getBody();
    }
}
