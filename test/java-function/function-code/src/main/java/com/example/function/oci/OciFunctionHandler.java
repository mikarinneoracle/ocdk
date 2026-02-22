package com.example.function.oci;

import com.example.function.FunctionBusinessLogic;
import com.example.function.FunctionResponse;
import com.example.function.base.BaseFunctionHandler;
import com.fnproject.fn.api.FnConfiguration;
import com.fnproject.fn.api.RuntimeContext;
import com.fnproject.fn.api.httpgateway.HTTPGatewayContext;
import com.oracle.bmc.auth.ResourcePrincipalAuthenticationDetailsProvider;
import com.oracle.bmc.secrets.SecretsClient;
import com.oracle.bmc.secrets.model.Base64SecretBundleContentDetails;
import com.oracle.bmc.secrets.requests.GetSecretBundleRequest;
import com.oracle.bmc.secrets.responses.GetSecretBundleResponse;
import com.oracle.bmc.model.BmcException;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

/**
 * OCI Function handler implementation.
 * Entry point for OCI Functions deployments (HTTP Gateway).
 * Uses FDK api 1.0.209: context for status/headers, String param for body, return value for response body.
 * Connection pool for PostgreSQL is created in @FnConfiguration setUp using secret from OCI Vault.
 */
public class OciFunctionHandler extends BaseFunctionHandler {

    private final FunctionBusinessLogic businessLogic;
    /** Vault Secret OCID for PG connection string (must be ocid1.secret..., not a Key OCID). */
    private volatile String pgSecretOcid;
    /** PG connection string from config (when PG_URL is set and no Vault secret is used). */
    private volatile String pgConnectionString;

    public OciFunctionHandler() {
        this.businessLogic = new FunctionBusinessLogic();
    }

    @FnConfiguration
    public void setUp(RuntimeContext ctx) throws Exception {
        // PG_URL from function config or env (used when OCI_VAULT_ID is not set)
        pgConnectionString = ctx.getConfigurationByKey("PG_URL")
            .orElse(System.getenv("PG_URL"));
        // Secret OCID from function config or env (used when stack creates Vault secret from PG_URL)
        pgSecretOcid = ctx.getConfigurationByKey("PG_SECRET_OCID")
            .orElse(System.getenv("PG_SECRET_OCID"));
        initPool();
        if (getDataSource() != null) {
            businessLogic.setSysdateDataSource(getDataSource());
        }
    }

    @FnConfiguration
    public void config(RuntimeContext ctx) {
        // Configuration hook if needed
    }

    @Override
    protected String getConnectionString() throws Exception {
        // Prefer direct PG_URL from config (when OCI_VAULT_OCID was not set)
        if (pgConnectionString != null && !pgConnectionString.isBlank()) {
            System.err.println("[DEBUG] PG connection string (from config): " + pgConnectionString + " (remove this log in production)");
            return pgConnectionString;
        }
        if (pgSecretOcid == null || pgSecretOcid.isBlank()) {
            return null;
        }

        ResourcePrincipalAuthenticationDetailsProvider provider =
            ResourcePrincipalAuthenticationDetailsProvider.builder().build();
        try (SecretsClient client = SecretsClient.builder().build(provider)) {
            // Use Current stage for the active secret version
            GetSecretBundleRequest req = GetSecretBundleRequest.builder()
                .secretId(pgSecretOcid)
                .stage(GetSecretBundleRequest.Stage.Current)
                .build();
            GetSecretBundleResponse resp = client.getSecretBundle(req);
            if (resp.getSecretBundle().getSecretBundleContent() instanceof Base64SecretBundleContentDetails) {
                String base64 = ((Base64SecretBundleContentDetails) resp.getSecretBundle().getSecretBundleContent()).getContent();
                String decoded = new String(Base64.getDecoder().decode(base64), StandardCharsets.UTF_8);
                System.err.println("[DEBUG] PG connection string (from Vault): " + decoded + " (remove this log in production)");
                return decoded;
            }
            return null;
        } catch (BmcException e) {
            String hint = "";
            if (e.getStatusCode() == -1 || (e.getMessage() != null && e.getMessage().contains("Unknown error"))) {
                hint = " Check: (1) Dynamic group has policy to read secrets, e.g. 'allow dynamic-group <name> to read secret-family in compartment <id>'; "
                    + "(2) Function subnet can reach OCI APIs (e.g. NAT or service gateway); "
                    + "(3) Secret exists and is ACTIVE.";
            }
            throw new IllegalStateException(
                "GetSecretBundle failed: status=" + e.getStatusCode()
                    + ", message=" + e.getMessage()
                    + (e.getOpcRequestId() != null ? ", opc-request-id=" + e.getOpcRequestId() : "")
                    + hint,
                e);
        }
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
