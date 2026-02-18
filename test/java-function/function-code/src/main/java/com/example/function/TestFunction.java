package com.example.function;

/**
 * Unified entry point that delegates to platform-specific handlers
 * 
 * Build-time selection:
 * - For AWS: Use AwsFunctionHandler directly
 * - For OCI: Use OciFunctionHandler directly
 * 
 * This class exists for backward compatibility and can be used
 * when building for both platforms (profile: all)
 */
public class TestFunction {
    
    // This class can be used as a wrapper or you can use the platform-specific
    // handlers directly:
    // 
    // AWS Lambda: com.example.function.aws.AwsFunctionHandler
    // OCI Function: com.example.function.oci.OciFunctionHandler
    
    // For backward compatibility, we can keep simple handlers here
    // but the recommended approach is to use the platform-specific handlers
    
    /**
     * AWS Lambda handler (for backward compatibility)
     * In production, use AwsFunctionHandler directly
     */
    public static class Request {
        private java.util.Map<String, String> queryStringParameters;
        private String body;
        private java.util.Map<String, String> headers;
        
        public java.util.Map<String, String> getQueryStringParameters() {
            return queryStringParameters;
        }
        
        public void setQueryStringParameters(java.util.Map<String, String> queryStringParameters) {
            this.queryStringParameters = queryStringParameters;
        }
        
        public String getBody() {
            return body;
        }
        
        public void setBody(String body) {
            this.body = body;
        }
        
        public java.util.Map<String, String> getHeaders() {
            return headers;
        }
        
        public void setHeaders(java.util.Map<String, String> headers) {
            this.headers = headers;
        }
    }
    
    public static class Response {
        private int statusCode;
        private String body;
        private java.util.Map<String, String> headers;
        
        public Response(int statusCode, String body) {
            this.statusCode = statusCode;
            this.body = body;
            this.headers = new java.util.HashMap<>();
            this.headers.put("Content-Type", "application/json");
        }
        
        public int getStatusCode() {
            return statusCode;
        }
        
        public String getBody() {
            return body;
        }
        
        public java.util.Map<String, String> getHeaders() {
            return headers;
        }
    }
    
    private final FunctionBusinessLogic businessLogic;
    
    public TestFunction() {
        this.businessLogic = new FunctionBusinessLogic();
    }
    
    /**
     * AWS Lambda handler (backward compatibility)
     * For new code, use AwsFunctionHandler
     */
    public Response handleRequest(Request request, Object context) {
        java.util.Map<String, String> queryParams = request.getQueryStringParameters();
        String action = queryParams != null && queryParams.containsKey("action") 
            ? queryParams.get("action") 
            : "";
        
        FunctionResponse response = businessLogic.routeRequest(action, request.getBody());
        
        return new Response(response.getStatusCode(), response.getBody());
    }
}
