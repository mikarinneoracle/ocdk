package com.example.function.aws;

import com.example.function.FunctionBusinessLogic;
import com.example.function.FunctionResponse;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;

import java.util.Map;

/**
 * AWS Lambda handler implementation
 * Entry point for AWS Lambda deployments
 */
public class AwsFunctionHandler implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {
    
    private final FunctionBusinessLogic businessLogic;
    
    public AwsFunctionHandler() {
        this.businessLogic = new FunctionBusinessLogic();
    }
    
    @Override
    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
        // Extract action from query parameters
        Map<String, String> queryParams = request.getQueryStringParameters();
        String action = queryParams != null && queryParams.containsKey("action") 
            ? queryParams.get("action") 
            : "";
        
        // Route request using business logic
        FunctionResponse response = businessLogic.routeRequest(action, request.getBody());
        
        // Convert to AWS Lambda response format
        APIGatewayProxyResponseEvent apiResponse = new APIGatewayProxyResponseEvent();
        apiResponse.setStatusCode(response.getStatusCode());
        apiResponse.setBody(response.getBody());
        apiResponse.setHeaders(response.getHeaders());
        
        return apiResponse;
    }
}
