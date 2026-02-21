package com.example.function.base;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import javax.sql.DataSource;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

/**
 * Base for OCI and AWS function handlers that need a PostgreSQL connection pool.
 * Subclasses provide the connection string via secrets (OCI Vault / AWS Secrets Manager).
 */
public abstract class BaseFunctionHandler {

    private volatile HikariDataSource dataSource;

    /**
     * Resolve the PostgreSQL connection string (JDBC URL or postgresql://) from platform secrets.
     * Configuration (secret OCID / ARN) is read from function config (env or RuntimeContext).
     */
    protected abstract String getConnectionString() throws Exception;

    /**
     * Initialize the connection pool. Call from OCI @FnConfiguration setUp or AWS static/first-request.
     * Parses postgresql://user:password@host:port/db and sets user/password on HikariConfig so
     * special characters in the password (!, @, :) do not break URL parsing (UnknownHostException).
     */
    protected synchronized void initPool() throws Exception {
        if (dataSource != null) {
            return;
        }
        String url = getConnectionString();
        if (url == null || url.isBlank()) {
            return;
        }
        String normalized = url.startsWith("jdbc:") ? url.substring(5) : url;
        if (!normalized.startsWith("postgresql://")) {
            normalized = "postgresql://" + normalized;
        }
        HikariConfig config = new HikariConfig();
        config.setMaximumPoolSize(5);
        config.setMinimumIdle(1);
        // Parse so password with !, @, : does not break URL (avoid UnknownHostException)
        int at = normalized.indexOf('@');
        if (at > 0 && normalized.startsWith("postgresql://")) {
            String userInfo = normalized.substring("postgresql://".length(), at);
            String hostPortDb = normalized.substring(at + 1);
            int firstColon = userInfo.indexOf(':');
            if (firstColon > 0) {
                String user = decode(userInfo.substring(0, firstColon));
                String password = decode(userInfo.substring(firstColon + 1));
                config.setUsername(user);
                config.setPassword(password);
            }
            config.setJdbcUrl("jdbc:" + "postgresql://" + hostPortDb);
        } else {
            config.setJdbcUrl("jdbc:" + normalized);
        }
        dataSource = new HikariDataSource(config);
    }

    private static String decode(String s) {
        try {
            return URLDecoder.decode(s, StandardCharsets.UTF_8);
        } catch (Exception e) {
            return s;
        }
    }

    /**
     * Returns the shared DataSource, or null if initPool() has not been called or failed.
     */
    public DataSource getDataSource() {
        return dataSource;
    }
}
