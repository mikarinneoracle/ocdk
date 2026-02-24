/**
 * OCI Configuration
 *
 * Set these via environment variables or update defaults:
 * - OCI_COMPARTMENT_ID
 * - OCI_TENANCY_ID
 * - OCI_REGION
 * - OCI_NAMESPACE (if unset, obtained via OCI SDK getNamespace)
 * - OCI_OCIR_COMPARTMENT_ID (for OCIR; must be non-root for full stack)
 * - OCI_FUNCTION_APP_NAME (Functions application name; default empty)
 * - OCI_FUNCTION_NAME (Function name; default empty)
 * - OCI_FUNCTION_HANDLER (Java FDK CMD handler, e.g. com.example.Handler::handleRequest; from func.yaml cmd/handler if unset)
 * - OCI_FUNCTION_JAR_PATH (Path to JAR or project dir for function image; default empty)
 * - OCDK_PROJECT_DIR (set by ocdk CLI to caller cwd; used to discover func.yaml and target/)
 * - OCI_STATE_BUCKET (for remote state)
 * - OCI_STATE_BACKEND_TYPE (oci|http|local)
 *
 * When OCDK_PROJECT_DIR is set (e.g. running `npx ocdk deploy` from a Java project), config
 * discovers either target/*.jar or pom.xml+src/ (and optionally func.yaml name, version, cmd/handler).
 * No Dockerfile is required—the stack generates one in local-exec (excluding node_modules via .dockerignore),
 * then builds, tags (from func.yaml version), and pushes to OCIR.
 */
export interface OciBackendConfig {
    type: 'oci' | 'http' | 'local';
    bucket?: string;
    key?: string;
    address?: string;
    updateMethod?: string;
    lockAddress?: string;
    unlockAddress?: string;
}
export interface OciConfig {
    compartmentId: string;
    ocirCompartmentId?: string;
    tenancyId: string;
    region: string;
    namespace: string;
    functionAppName: string;
    functionName: string;
    /** Path to JAR or Dockerfile context for function image; empty = no build/deploy. */
    functionJarPath?: string;
    /** Path to directory containing target/ (discovered; Dockerfile is generated in local-exec). */
    dockerContextPath?: string;
    /** Image tag for OCIR (from func.yaml version or OCI_IMAGE_TAG; default 'latest'). */
    imageTag?: string;
    /** Java FDK CMD handler (from func.yaml cmd/handler or OCI_FUNCTION_HANDLER; default below). */
    handler?: string;
    ocirRepositoryName?: string;
    backend?: OciBackendConfig;
}
/** OCIR short region keys (e.g. eu-frankfurt-1 -> fra). Used so login, build, push and function image all use same registry host. */
export declare const REGION_TO_OCIR_HOST: Record<string, string>;
export declare function ocirHostKey(region: string): string;
/** Full OCIR image URL for the function (registry/namespace/repo:tag). */
export declare function getOciImageUrl(config: OciConfig): string;
/**
 * Load OCI config from env and CLI config. When OCI_NAMESPACE is unset, fetches it via OCI SDK (getNamespace).
 */
export declare function getOciConfig(): Promise<OciConfig>;
