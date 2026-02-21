package com.example.function;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 * Platform-agnostic business logic for the function
 * Contains all the routing and action handling logic
 */
public class FunctionBusinessLogic {

    private DataSource sysdateDataSource;

    /**
     * Set the DataSource used for the sysdate action (PostgreSQL current_timestamp).
     * Called by OCI/AWS handlers after they create the connection pool.
     */
    public void setSysdateDataSource(DataSource dataSource) {
        this.sysdateDataSource = dataSource;
    }
    
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
        if ("sysdate".equals(action)) {
            return runSysdateQuery();
        }
        
        // Default response
        return new FunctionResponse(400, 
            String.format("{\"error\":\"Unknown action: %s\",\"availableActions\":[\"hello\",\"echo\",\"info\",\"sysdate\"]}", action));
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

    /**
     * Run SELECT current_timestamp on PostgreSQL. Uses the DataSource set by the platform handler.
     */
    private FunctionResponse runSysdateQuery() {
        if (sysdateDataSource == null) {
            return new FunctionResponse(503, "{\"error\":\"DataSource not configured for sysdate\"}");
        }
        try (Connection conn = sysdateDataSource.getConnection();
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery("SELECT current_timestamp AS sysdate")) {
            if (rs.next()) {
                String ts = rs.getTimestamp(1).toString();
                return new FunctionResponse(200, "{\"sysdate\":\"" + ts + "\"}");
            }
            return new FunctionResponse(500, "{\"error\":\"No row from current_timestamp\"}");
        } catch (Exception e) {
            return new FunctionResponse(500, "{\"error\":\"" + escapeJson(e.getMessage()) + "\"}");
        }
    }

    private static String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n").replace("\r", "\\r");
    }
}
