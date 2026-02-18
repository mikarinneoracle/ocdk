package com.example.function;

import java.util.HashMap;
import java.util.Map;

/**
 * Platform-agnostic response object
 */
public class FunctionResponse {
    private int statusCode;
    private String body;
    private Map<String, String> headers;
    
    public FunctionResponse(int statusCode, String body) {
        this.statusCode = statusCode;
        this.body = body;
        this.headers = new HashMap<>();
        this.headers.put("Content-Type", "application/json");
    }
    
    public int getStatusCode() {
        return statusCode;
    }
    
    public String getBody() {
        return body;
    }
    
    public Map<String, String> getHeaders() {
        return headers;
    }
    
    public void setHeader(String key, String value) {
        this.headers.put(key, value);
    }
}
