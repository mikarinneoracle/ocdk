package com.example.function.oci;

import com.example.function.FunctionBusinessLogic;
import com.example.function.FunctionResponse;
import com.fnproject.fn.api.FnConfiguration;
import com.fnproject.fn.api.RuntimeContext;
import com.fnproject.fn.api.httpgateway.HTTPGatewayContext;
import com.fnproject.fn.api.httpgateway.HTTPGatewayResponse;

import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Optional;

/**
 * OCI Function handler implementation
 * Entry point for OCI Functions deployments
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
     * OCI Function HTTP handler
     */
    public HTTPGatewayResponse handleRequest(HTTPGatewayContext hctx, OutputStream outputStream) {
        // Extract action from query parameters
        String action = hctx.getQueryParameters().get("action").orElse("");
        
        // Route request using business logic
        FunctionResponse response = businessLogic.routeRequest(action, hctx.getRequestBody());
        
        // Convert to OCI Function response format
        HTTPGatewayResponse httpResponse = HTTPGatewayResponse.builder()
            .withStatusCode(response.getStatusCode())
            .withHeader("Content-Type", "application/json")
            .withBody(response.getBody().getBytes(StandardCharsets.UTF_8))
            .build();
        
        return httpResponse;
    }
}
