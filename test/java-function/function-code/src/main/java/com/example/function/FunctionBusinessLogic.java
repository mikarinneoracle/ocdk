package com.example.function;

/**
 * Platform-agnostic business logic for the function
 * Contains all the routing and action handling logic
 */
public class FunctionBusinessLogic {
    
    /**
     * Route request based on action parameter
     */
    public FunctionResponse routeRequest(String action, String body) {
        if ("hello".equals(action)) {
            return handleHello();
        }
        if ("echo".equals(action)) {
            return handleEcho(body);
        }
        if ("info".equals(action)) {
            return handleInfo();
        }
        
        // Default response
        return new FunctionResponse(400, 
            String.format("{\"error\":\"Unknown action: %s\",\"availableActions\":[\"hello\",\"echo\",\"info\"]}", action));
    }
    
    private FunctionResponse handleHello() {
        return new FunctionResponse(200, "{\"message\":\"Hello from Java Function!\"}");
    }
    
    private FunctionResponse handleEcho(String body) {
        String echoBody = body != null ? body : "{}";
        return new FunctionResponse(200, String.format("{\"echo\":%s}", echoBody));
    }
    
    private FunctionResponse handleInfo() {
        return new FunctionResponse(200, 
            "{\"platform\":\"Java Function\",\"runtime\":\"Java\",\"version\":\"1.0\"}");
    }
}
