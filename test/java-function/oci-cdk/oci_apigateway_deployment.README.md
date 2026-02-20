# API Gateway deployment spec (CLI reference)

**When using this CDK stack:** You do **not** need to run `oci api-gateway deployment create` or `update` manually. `npm run deploy` (cdktf) creates and updates the API Gateway deployment with the same logical spec:

- **Route:** path `/`, methods GET, POST, OPTIONS → backend `ORACLE_FUNCTIONS_BACKEND` with the function created by this stack (`functionId` is set from the Terraform resource).

So the route setup is fully done by the stack; the function OCID is wired automatically.

**When this JSON is useful:**

- **CLI-only workflow:** If you create the gateway and function outside Terraform, you can create the deployment with:
  - Replace `<FUNCTION_OCID>` in `oci_apigateway_deployment.json` with the real function OCID.
  - `oci api-gateway deployment create --compartment-id $compartment_ocid --gateway-id $gateway_ocid --specification file://./oci_apigateway_deployment.json`
- **Reference:** The JSON mirrors the deployment specification defined in `lib/test-function-stack.ts`.
