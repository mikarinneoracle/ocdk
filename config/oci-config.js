"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGION_TO_OCIR_HOST = void 0;
exports.ocirHostKey = ocirHostKey;
exports.getOciImageUrl = getOciImageUrl;
exports.getOciConfig = getOciConfig;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const common = __importStar(require("oci-common"));
const objectstorage = __importStar(require("oci-objectstorage"));
/** OCIR short region keys (e.g. eu-frankfurt-1 -> fra). Used so login, build, push and function image all use same registry host. */
exports.REGION_TO_OCIR_HOST = {
    'eu-frankfurt-1': 'fra', 'us-phoenix-1': 'phx', 'us-ashburn-1': 'iad', 'uk-london-1': 'lhr',
    'ap-tokyo-1': 'nrt', 'ap-mumbai-1': 'bom', 'ap-seoul-1': 'icn', 'ca-toronto-1': 'yyz',
    'sa-saopaulo-1': 'gru', 'ap-sydney-1': 'syd', 'eu-zurich-1': 'zrh', 'me-dubai-1': 'dxb',
    'ap-osaka-1': 'kix', 'eu-amsterdam-1': 'ams', 'ap-singapore-1': 'sin', 'ap-hyderabad-1': 'hyd',
    'eu-milan-1': 'mxp', 'sa-santiago-1': 'scl', 'ap-melbourne-1': 'mel', 'eu-stockholm-1': 'arn',
    'me-jeddah-1': 'jed', 'af-johannesburg-1': 'jnb', 'il-jerusalem-1': 'tlv', 'mx-queretaro-1': 'qro',
    'eu-marseille-1': 'mrs',
};
function ocirHostKey(region) {
    return exports.REGION_TO_OCIR_HOST[region] ?? region;
}
/** Full OCIR image URL for the function (registry/namespace/repo:tag). */
function getOciImageUrl(config) {
    const registry = `${ocirHostKey(config.region)}.ocir.io`;
    const repo = config.ocirRepositoryName || config.functionName || 'oci-function';
    const tag = config.imageTag || 'latest';
    return `${registry}/${config.namespace}/${repo}:${tag}`;
}
/**
 * Try to read function name from func.yaml (OCI Functions format).
 * Returns the value of the first "name:" line, trimmed.
 */
function getFuncYamlName(projectDir) {
    const p = path.join(projectDir, 'func.yaml');
    try {
        if (fs.existsSync(p)) {
            const content = fs.readFileSync(p, 'utf8');
            const m = content.match(/^\s*name:\s*["']?([^"'\s\n]+)["']?/m);
            if (m)
                return m[1].trim();
        }
    }
    catch {
        // ignore
    }
    return undefined;
}
/**
 * Try to read cmd/handler from func.yaml (OCI/Fn format).
 * Returns the value of "cmd:" or "handler:" line, trimmed; used as Docker CMD for Java FDK.
 */
function getFuncYamlHandler(projectDir) {
    const p = path.join(projectDir, 'func.yaml');
    try {
        if (fs.existsSync(p)) {
            const content = fs.readFileSync(p, 'utf8');
            const cmdMatch = content.match(/^\s*cmd:\s*["']?([^"'\n]+)["']?/m);
            if (cmdMatch)
                return cmdMatch[1].trim();
            const handlerMatch = content.match(/^\s*handler:\s*["']?([^"'\n]+)["']?/m);
            if (handlerMatch)
                return handlerMatch[1].trim();
        }
    }
    catch {
        // ignore
    }
    return undefined;
}
/**
 * Try to read version from func.yaml (used as OCIR image tag).
 * Returns the value of the first "version:" line, trimmed; sanitized for Docker tag (a-zA-Z0-9_.-).
 */
function getFuncYamlVersion(projectDir) {
    const p = path.join(projectDir, 'func.yaml');
    try {
        if (fs.existsSync(p)) {
            const content = fs.readFileSync(p, 'utf8');
            const m = content.match(/^\s*version:\s*["']?([^"'\s\n]+)["']?/m);
            if (m) {
                const raw = m[1].trim();
                const sanitized = raw.replace(/[^a-zA-Z0-9_.-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
                return sanitized || undefined;
            }
        }
    }
    catch {
        // ignore
    }
    return undefined;
}
/** Read tenancy and region from OCI CLI config. Default file: ~/.oci/config, default profile: DEFAULT. */
function readTenancyAndRegionFromCliConfig() {
    const configPath = process.env.OCI_CONFIG_FILE || path.join(os.homedir(), '.oci', 'config');
    const profile = process.env.OCI_CLI_PROFILE || 'DEFAULT';
    try {
        if (!fs.existsSync(configPath))
            return {};
        const content = fs.readFileSync(configPath, 'utf-8');
        const lines = content.split(/\r?\n/);
        let inProfile = false;
        const result = {};
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
                inProfile = trimmed.slice(1, -1) === profile;
                continue;
            }
            if (!inProfile)
                continue;
            const eq = trimmed.indexOf('=');
            if (eq <= 0)
                continue;
            const key = trimmed.slice(0, eq).trim().toLowerCase();
            const value = trimmed.slice(eq + 1).trim();
            if (key === 'tenancy')
                result.tenancy = value;
            if (key === 'region')
                result.region = value;
        }
        return result;
    }
    catch {
        return {};
    }
}
/** Get object storage namespace via OCI SDK (same as "oci os ns get"). Uses ~/.oci/config, DEFAULT profile. */
async function getNamespaceFromOciSdk(compartmentId, region) {
    const configPath = process.env.OCI_CONFIG_FILE || path.join(os.homedir(), '.oci', 'config');
    const profile = process.env.OCI_CLI_PROFILE || 'DEFAULT';
    try {
        const provider = new common.ConfigFileAuthenticationDetailsProvider(configPath, profile);
        const client = new objectstorage.ObjectStorageClient({ authenticationDetailsProvider: provider });
        client.regionId = region;
        const response = await client.getNamespace({
            compartmentId,
        });
        return response.value?.trim();
    }
    catch {
        return undefined;
    }
}
/**
 * Find a JAR under target/ (prefer one matching name, else first .jar).
 */
function findJarInTarget(projectDir, functionName) {
    const targetDir = path.join(projectDir, 'target');
    if (!fs.existsSync(targetDir))
        return undefined;
    try {
        const files = fs.readdirSync(targetDir);
        const jars = files.filter((f) => f.endsWith('.jar') && !f.endsWith('-sources.jar'));
        if (jars.length === 0)
            return undefined;
        if (functionName) {
            const match = jars.find((j) => j.toLowerCase().includes(functionName.toLowerCase()));
            if (match)
                return path.join(targetDir, match);
        }
        return path.join(targetDir, jars[0]);
    }
    catch {
        return undefined;
    }
}
/** True if project has pom.xml and src/ (Maven source layout for build-from-source Dockerfile). */
function hasPomAndSrc(projectDir) {
    const pom = path.join(projectDir, 'pom.xml');
    const src = path.join(projectDir, 'src');
    try {
        return fs.existsSync(pom) && fs.existsSync(src) && fs.statSync(src).isDirectory();
    }
    catch {
        return false;
    }
}
function discoverFromFuncYamlAndTarget() {
    let projectDir = process.env.OCDK_PROJECT_DIR?.trim();
    if (!projectDir) {
        try {
            const p = path.join(process.cwd(), '.ocdk-project-dir');
            if (fs.existsSync(p))
                projectDir = fs.readFileSync(p, 'utf8').trim();
        }
        catch {
            // ignore
        }
    }
    if (!projectDir && process.env.OCI_FUNCTION_JAR_PATH?.trim()) {
        const p = path.resolve(process.env.OCI_FUNCTION_JAR_PATH.trim());
        if (fs.existsSync(p))
            projectDir = fs.statSync(p).isDirectory() ? p : path.dirname(p);
    }
    if (!projectDir)
        projectDir = process.cwd();
    projectDir = projectDir ? path.resolve(projectDir) : '';
    if (!projectDir || !fs.existsSync(projectDir))
        return {};
    const nameFromYaml = getFuncYamlName(projectDir);
    const jarPath = findJarInTarget(projectDir, nameFromYaml || undefined);
    const hasSource = hasPomAndSrc(projectDir);
    if (!jarPath && !hasSource)
        return {};
    const functionName = process.env.OCI_FUNCTION_NAME?.trim() || nameFromYaml || path.basename(projectDir) || 'oci-function';
    const imageTag = process.env.OCI_IMAGE_TAG?.trim() || getFuncYamlVersion(projectDir);
    const handler = process.env.OCI_FUNCTION_HANDLER?.trim() || getFuncYamlHandler(projectDir);
    return {
        functionName,
        functionAppName: process.env.OCI_FUNCTION_APP_NAME?.trim() || functionName,
        dockerContextPath: path.resolve(projectDir),
        imageTag: imageTag || undefined,
        handler: handler || undefined,
    };
}
const backendType = (process.env.OCI_STATE_BACKEND_TYPE || 'local');
const backendConfig = backendType === 'local'
    ? undefined
    : backendType === 'oci'
        ? {
            type: 'oci',
            bucket: process.env.OCI_STATE_BUCKET || 'tf-state',
            key: process.env.OCI_STATE_KEY || 'function-stack/terraform.tfstate',
        }
        : {
            type: 'http',
            address: process.env.OCI_STATE_HTTP_ADDRESS || '',
            updateMethod: process.env.OCI_STATE_HTTP_UPDATE_METHOD || 'PUT',
            lockAddress: process.env.OCI_STATE_HTTP_LOCK_ADDRESS,
            unlockAddress: process.env.OCI_STATE_HTTP_UNLOCK_ADDRESS,
        };
/**
 * Load OCI config from env and CLI config. When OCI_NAMESPACE is unset, fetches it via OCI SDK (getNamespace).
 */
async function getOciConfig() {
    const cliConfig = readTenancyAndRegionFromCliConfig();
    const compartmentId = process.env.OCI_COMPARTMENT_ID?.trim() || 'ocid1.compartment.oc1..aaaaaaa...';
    const ocirCompartmentId = process.env.OCI_OCIR_COMPARTMENT_ID?.trim() || process.env.OCI_COMPARTMENT_ID?.trim() || compartmentId;
    const tenancyId = process.env.OCI_TENANCY_ID?.trim() || cliConfig.tenancy?.trim() || 'ocid1.tenancy.oc1..aaaaaaa...';
    const region = process.env.OCI_REGION?.trim() || cliConfig.region?.trim() || 'eu-frankfurt-1';
    if (!ocirCompartmentId || ocirCompartmentId.includes('root')) {
        console.warn('⚠️  WARNING: OCI_OCIR_COMPARTMENT_ID not set or set to root compartment.');
        console.warn('   Please set OCI_OCIR_COMPARTMENT_ID to your home compartment OCID.');
        console.warn('   Example: export OCI_OCIR_COMPARTMENT_ID="ocid1.compartment.oc1..aaaaaaa..."');
    }
    let namespace = process.env.OCI_NAMESPACE?.trim();
    if (!namespace || namespace === 'your-namespace') {
        const resolved = await getNamespaceFromOciSdk(compartmentId, region);
        if (resolved)
            namespace = resolved;
        else if (!namespace)
            namespace = 'your-namespace';
        if (namespace === 'your-namespace') {
            console.warn('⚠️  OCI_NAMESPACE not set and SDK could not resolve it. Set OCI_NAMESPACE or run "oci setup config".');
        }
    }
    const discovered = discoverFromFuncYamlAndTarget();
    const imageTag = process.env.OCI_IMAGE_TAG?.trim() || discovered.imageTag || 'latest';
    let dockerContextPath = discovered.dockerContextPath;
    if (!dockerContextPath && process.env.OCI_FUNCTION_JAR_PATH?.trim()) {
        const p = path.resolve(process.env.OCI_FUNCTION_JAR_PATH.trim());
        if (fs.existsSync(p))
            dockerContextPath = fs.statSync(p).isDirectory() ? p : path.dirname(p);
    }
    const handler = process.env.OCI_FUNCTION_HANDLER?.trim() || discovered.handler;
    return {
        compartmentId,
        ocirCompartmentId: ocirCompartmentId || undefined,
        tenancyId,
        region,
        namespace,
        functionAppName: process.env.OCI_FUNCTION_APP_NAME ?? discovered.functionAppName ?? '',
        functionName: process.env.OCI_FUNCTION_NAME ?? discovered.functionName ?? '',
        functionJarPath: process.env.OCI_FUNCTION_JAR_PATH?.trim() || undefined,
        dockerContextPath: dockerContextPath || undefined,
        imageTag,
        handler: handler || undefined,
        ocirRepositoryName: process.env.OCI_OCIR_REPOSITORY_NAME || undefined,
        backend: backendConfig,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NpLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZy9vY2ktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREgsa0NBRUM7QUFHRCx3Q0FLQztBQXFNRCxvQ0FrREM7QUFoVEQsdUNBQXlCO0FBQ3pCLDJDQUE2QjtBQUM3Qix1Q0FBeUI7QUFDekIsbURBQXFDO0FBQ3JDLGlFQUFtRDtBQWdDbkQscUlBQXFJO0FBQ3hILFFBQUEsbUJBQW1CLEdBQTJCO0lBQ3pELGdCQUFnQixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUs7SUFDM0YsWUFBWSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUs7SUFDckYsZUFBZSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUs7SUFDdkYsWUFBWSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUs7SUFDOUYsWUFBWSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLO0lBQzdGLGFBQWEsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLO0lBQ2xHLGdCQUFnQixFQUFFLEtBQUs7Q0FDeEIsQ0FBQztBQUVGLFNBQWdCLFdBQVcsQ0FBQyxNQUFjO0lBQ3hDLE9BQU8sMkJB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Q0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDO0lBRS9FLE9BQU87UUFDTCxhQUFhO1FBQ2IsaUJBQWlCLEVBQUUsaUJBQWlCLElBQUksU0FBUztRQUNqRCxTQUFTO1FBQ1QsTUFBTTtRQUNOLFNBQVM7UUFDVCxlQUFlLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxVQUFVLENBQUMsZUFBZSxJQUFJLEVBQUU7UUFDdEYsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLElBQUksVUFBVSxDQUFDLFlBQVksSUFBSSxFQUFFO1FBQzVFLGVBQWUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksRUFBRSxJQUFJLFNBQVM7UUFDdkUsaUJBQWlCLEVBQUUsaUJBQWlCLElBQUksU0FBUztRQUNqRCxRQUFRO1FBQ1IsT0FBTyxFQUFFLE9BQU8sSUFBSSxTQUFTO1FBQzdCLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLElBQUksU0FBUztRQUNyRSxPQUFPLEVBQUUsYUFBYTtLQUN2QixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogT0NJIENvbmZpZ3VyYXRpb25cbiAqXG4gKiBTZXQgdGhlc2UgdmlhIGVudmlyb25tZW50IHZhcmlhYmxlcyBvciB1cGRhdGUgZGVmYXVsdHM6XG4gKiAtIE9DSV9DT01QQVJUTUVOVF9JRFxuICogLSBPQ0lfVEVOQU5DWV9JRFxuICogLSBPQ0lfUkVHSU9OXG4gKiAtIE9DSV9OQU1FU1BBQ0UgKGlmIHVuc2V0LCBvYnRhaW5lZCB2aWEgT0NJIFNESyBnZXROYW1lc3BhY2UpXG4gKiAtIE9DSV9PQ0lSX0NPTVBBUlRNRU5UX0lEIChmb3IgT0NJUjsgbXVzdCBiZSBub24tcm9vdCBmb3IgZnVsbCBzdGFjaylcbiAqIC0gT0NJX0ZVTkNUSU9OX0FQUF9OQU1FIChGdW5jdGlvbnMgYXBwbGljYXRpb24gbmFtZTsgZGVmYXVsdCBlbXB0eSlcbiAqIC0gT0NJX0ZVTkNUSU9OX05BTUUgKEZ1bmN0aW9uIG5hbWU7IGRlZmF1bHQgZW1wdHkpXG4gKiAtIE9DSV9GVU5DVElPTl9IQU5ETEVSIChKYXZhIEZESyBDTUQgaGFuZGxlciwgZS5nLiBjb20uZXhhbXBsZS5IYW5kbGVyOjpoYW5kbGVSZXF1ZXN0OyBmcm9tIGZ1bmMueWFtbCBjbWQvaGFuZGxlciBpZiB1bnNldClcbiAqIC0gT0NJX0ZVTkNUSU9OX0pBUl9QQVRIIChQYXRoIHRvIEpBUiBvciBwcm9qZWN0IGRpciBmb3IgZnVuY3Rpb24gaW1hZ2U7IGRlZmF1bHQgZW1wdHkpXG4gKiAtIE9DREtfUFJPSkVDVF9ESVIgKHNldCBieSBvY2RrIENMSSB0byBjYWxsZXIgY3dkOyB1c2VkIHRvIGRpc2NvdmVyIGZ1bmMueWFtbCBhbmQgdGFyZ2V0LylcbiAqIC0gT0NJX1NUQVRFX0JVQ0tFVCAoZm9yIHJlbW90ZSBzdGF0ZSlcbiAqIC0gT0NJX1NUQVRFX0JBQ0tFTkRfVFlQRSAob2NpfGh0dHB8bG9jYWwpXG4gKlxuICogV2hlbiBPQ0RLX1BST0pFQ1RfRElSIGlzIHNldCAoZS5nLiBydW5uaW5nIGBucHggb2NkayBkZXBsb3lgIGZyb20gYSBKYXZhIHByb2plY3QpLCBjb25maWdcbiAqIGRpc2NvdmVycyBlaXRoZXIgdGFyZ2V0LyouamFyIG9yIHBvbS54bWwrc3JjLyAoYW5kIG9wdGlvbmFsbHkgZnVuYy55YW1sIG5hbWUsIHZlcnNpb24sIGNtZC9oYW5kbGVyKS5cbiAqIE5vIERvY2tlcmZpbGUgaXMgcmVxdWlyZWTigJR0aGUgc3RhY2sgZ2VuZXJhdGVzIG9uZSBpbiBsb2NhbC1leGVjIChleGNsdWRpbmcgbm9kZV9tb2R1bGVzIHZpYSAuZG9ja2VyaWdub3JlKSxcbiAqIHRoZW4gYnVpbGRzLCB0YWdzIChmcm9tIGZ1bmMueWFtbCB2ZXJzaW9uKSwgYW5kIHB1c2hlcyB0byBPQ0lSLlxuICovXG5cbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XG5pbXBvcnQgKiBhcyBjb21tb24gZnJvbSAnb2NpLWNvbW1vbic7XG5pbXBvcnQgKiBhcyBvYmplY3RzdG9yYWdlIGZyb20gJ29jaS1vYmplY3RzdG9yYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBPY2lCYWNrZW5kQ29uZmlnIHtcbiAgdHlwZTogJ29jaScgfCAnaHR0cCcgfCAnbG9jYWwnO1xuICBidWNrZXQ/OiBzdHJpbmc7XG4gIGtleT86IHN0cmluZztcbiAgYWRkcmVzcz86IHN0cmluZztcbiAgdXBkYXRlTWV0aG9kPzogc3RyaW5nO1xuICBsb2NrQWRkcmVzcz86IHN0cmluZztcbiAgdW5sb2NrQWRkcmVzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPY2lDb25maWcge1xuICBjb21wYXJ0bWVudElkOiBzdHJpbmc7XG4gIG9jaXJDb21wYXJ0bWVudElkPzogc3RyaW5nO1xuICB0ZW5hbmN5SWQ6IHN0cmluZztcbiAgcmVnaW9uOiBzdHJpbmc7XG4gIG5hbWVzcGFjZTogc3RyaW5nO1xuICBmdW5jdGlvbkFwcE5hbWU6IHN0cmluZztcbiAgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG4gIC8qKiBQYXRoIHRvIEpBUiBvciBEb2NrZXJmaWxlIGNvbnRleHQgZm9yIGZ1bmN0aW9uIGltYWdlOyBlbXB0eSA9IG5vIGJ1aWxkL2RlcGxveS4gKi9cbiAgZnVuY3Rpb25KYXJQYXRoPzogc3RyaW5nO1xuICAvKiogUGF0aCB0byBkaXJlY3RvcnkgY29udGFpbmluZyB0YXJnZXQvIChkaXNjb3ZlcmVkOyBEb2NrZXJmaWxlIGlzIGdlbmVyYXRlZCBpbiBsb2NhbC1leGVjKS4gKi9cbiAgZG9ja2VyQ29udGV4dFBhdGg/OiBzdHJpbmc7XG4gIC8qKiBJbWFnZSB0YWcgZm9yIE9DSVIgKGZyb20gZnVuYy55YW1sIHZlcnNpb24gb3IgT0NJX0lNQUdFX1RBRzsgZGVmYXVsdCAnbGF0ZXN0JykuICovXG4gIGltYWdlVGFnPzogc3RyaW5nO1xuICAvKiogSmF2YSBGREsgQ01EIGhhbmRsZXIgKGZyb20gZnVuYy55YW1sIGNtZC9oYW5kbGVyIG9yIE9DSV9GVU5DVElPTl9IQU5ETEVSOyBkZWZhdWx0IGJlbG93KS4gKi9cbiAgaGFuZGxlcj86IHN0cmluZztcbiAgb2NpclJlcG9zaXRvcnlOYW1lPzogc3RyaW5nO1xuICBiYWNrZW5kPzogT2NpQmFja2VuZENvbmZpZztcbn1cblxuLyoqIE9DSVIgc2hvcnQgcmVnaW9uIGtleXMgKGUuZy4gZXUtZnJhbmtmdXJ0LTEgLT4gZnJhKS4gVXNlZCBzbyBsb2dpbiwgYnVpbGQsIHB1c2ggYW5kIGZ1bmN0aW9uIGltYWdlIGFsbCB1c2Ugc2FtZSByZWdpc3RyeSBob3N0LiAqL1xuZXhwb3J0IGNvbnN0IFJFR0lPTl9UT19PQ0lSX0hPU1Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICdldS1mcmFua2Z1cnQtMSc6ICdmcmEnLCAndXMtcGhvZW5peC0xJzogJ3BoeCcsICd1cy1hc2hidXJuLTEnOiAnaWFkJywgJ3VrLWxvbmRvbi0xJzogJ2xocicsXG4gICdhcC10b2t5by0xJzogJ25ydCcsICdhcC1tdW1iYWktMSc6ICdib20nLCAnYXAtc2VvdWwtMSc6ICdpY24nLCAnY2EtdG9yb250by0xJzogJ3l5eicsXG4gICdzYS1zYW9wYXVsby0xJzogJ2dydScsICdhcC1zeWRuZXktMSc6ICdzeWQnLCAnZXUtenVyaWNoLTEnOiAnenJoJywgJ21lLWR1YmFpLTEnOiAnZHhiJyxcbiAgJ2FwLW9zYWthLTEnOiAna2l4JywgJ2V1LWFtc3RlcmRhbS0xJzogJ2FtcycsICdhcC1zaW5nYXBvcmUtMSc6ICdzaW4nLCAnYXAtaHlkZXJhYmFkLTEnOiAnaHlkJyxcbiAgJ2V1LW1pbGFuLTEnOiAnbXhwJywgJ3NhLXNhbnRpYWdvLTEnOiAnc2NsJywgJ2FwLW1lbGJvdXJuZS0xJzogJ21lbCcsICdldS1zdG9ja2hvbG0tMSc6ICdhcm4nLFxuICAnbWUtamVkZGFoLTEnOiAnamVkJywgJ2FmLWpvaGFubmVzYnVyZy0xJzogJ2puYicsICdpbC1qZXJ1c2FsZW0tMSc6ICd0bHYnLCAnbXgtcXVlcmV0YXJvLTEnOiAncXJvJyxcbiAgJ2V1LW1hcnNlaWxsZS0xJzogJ21ycycsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gb2Npckhvc3RLZXkocmVnaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gUkVHSU9OX1RPX09DSVJfSE9TVFtyZWdpb25dID8/IHJlZ2lvbjtcbn1cblxuLyoqIEZ1bGwgT0NJUiBpbWFnZSBVUkwgZm9yIHRoZSBmdW5jdGlvbiAocmVnaXN0cnkvbmFtZXNwYWNlL3JlcG86dGFnKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPY2lJbWFnZVVybChjb25maWc6IE9jaUNvbmZpZyk6IHN0cmluZyB7XG4gIGNvbnN0IHJlZ2lzdHJ5ID0gYCR7b2Npckhvc3RLZXkoY29uZmlnLnJlZ2lvbil9Lm9jaXIuaW9gO1xuICBjb25zdCByZXBvID0gY29uZmlnLm9jaXJSZXBvc2l0b3J5TmFtZSB8fCBjb25maWcuZnVuY3Rpb25OYW1lIHx8ICdvY2ktZnVuY3Rpb24nO1xuICBjb25zdCB0YWcgPSBjb25maWcuaW1hZ2VUYWcgfHwgJ2xhdGVzdCc7XG4gIHJldHVybiBgJHtyZWdpc3RyeX0vJHtjb25maWcubmFtZXNwYWNlfS8ke3JlcG99OiR7dGFnfWA7XG59XG5cbi8qKlxuICogVHJ5IHRvIHJlYWQgZnVuY3Rpb24gbmFtZSBmcm9tIGZ1bmMueWFtbCAoT0NJIEZ1bmN0aW9ucyBmb3JtYXQpLlxuICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IFwibmFtZTpcIiBsaW5lLCB0cmltbWVkLlxuICovXG5mdW5jdGlvbiBnZXRGdW5jWWFtbE5hbWUocHJvamVjdERpcjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgcCA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAnZnVuYy55YW1sJyk7XG4gIHRyeSB7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocCkpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocCwgJ3V0ZjgnKTtcbiAgICAgIGNvbnN0IG0gPSBjb250ZW50Lm1hdGNoKC9eXFxzKm5hbWU6XFxzKltcIiddPyhbXlwiJ1xcc1xcbl0rKVtcIiddPy9tKTtcbiAgICAgIGlmIChtKSByZXR1cm4gbVsxXS50cmltKCk7XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICAvLyBpZ25vcmVcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRyeSB0byByZWFkIGNtZC9oYW5kbGVyIGZyb20gZnVuYy55YW1sIChPQ0kvRm4gZm9ybWF0KS5cbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIFwiY21kOlwiIG9yIFwiaGFuZGxlcjpcIiBsaW5lLCB0cmltbWVkOyB1c2VkIGFzIERvY2tlciBDTUQgZm9yIEphdmEgRkRLLlxuICovXG5mdW5jdGlvbiBnZXRGdW5jWWFtbEhhbmRsZXIocHJvamVjdERpcjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgcCA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAnZnVuYy55YW1sJyk7XG4gIHRyeSB7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocCkpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocCwgJ3V0ZjgnKTtcbiAgICAgIGNvbnN0IGNtZE1hdGNoID0gY29udGVudC5tYXRjaCgvXlxccypjbWQ6XFxzKltcIiddPyhbXlwiJ1xcbl0rKVtcIiddPy9tKTtcbiAgICAgIGlmIChjbWRNYXRjaCkgcmV0dXJuIGNtZE1hdGNoWzFdLnRyaW0oKTtcbiAgICAgIGNvbnN0IGhhbmRsZXJNYXRjaCA9IGNvbnRlbnQubWF0Y2goL15cXHMqaGFuZGxlcjpcXHMqW1wiJ10/KFteXCInXFxuXSspW1wiJ10/L20pO1xuICAgICAgaWYgKGhhbmRsZXJNYXRjaCkgcmV0dXJuIGhhbmRsZXJNYXRjaFsxXS50cmltKCk7XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICAvLyBpZ25vcmVcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRyeSB0byByZWFkIHZlcnNpb24gZnJvbSBmdW5jLnlhbWwgKHVzZWQgYXMgT0NJUiBpbWFnZSB0YWcpLlxuICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IFwidmVyc2lvbjpcIiBsaW5lLCB0cmltbWVkOyBzYW5pdGl6ZWQgZm9yIERvY2tlciB0YWcgKGEtekEtWjAtOV8uLSkuXG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmNZYW1sVmVyc2lvbihwcm9qZWN0RGlyOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBwID0gcGF0aC5qb2luKHByb2plY3REaXIsICdmdW5jLnlhbWwnKTtcbiAgdHJ5IHtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwLCAndXRmOCcpO1xuICAgICAgY29uc3QgbSA9IGNvbnRlbnQubWF0Y2goL15cXHMqdmVyc2lvbjpcXHMqW1wiJ10/KFteXCInXFxzXFxuXSspW1wiJ10/L20pO1xuICAgICAgaWYgKG0pIHtcbiAgICAgICAgY29uc3QgcmF3ID0gbVsxXS50cmltKCk7XG4gICAgICAgIGNvbnN0IHNhbml0aXplZCA9IHJhdy5yZXBsYWNlKC9bXmEtekEtWjAtOV8uLV0vZywgJy0nKS5yZXBsYWNlKC8tKy9nLCAnLScpLnJlcGxhY2UoL14tfC0kL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHNhbml0aXplZCB8fCB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICAvLyBpZ25vcmVcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKiogUmVhZCB0ZW5hbmN5IGFuZCByZWdpb24gZnJvbSBPQ0kgQ0xJIGNvbmZpZy4gRGVmYXVsdCBmaWxlOiB+Ly5vY2kvY29uZmlnLCBkZWZhdWx0IHByb2ZpbGU6IERFRkFVTFQuICovXG5mdW5jdGlvbiByZWFkVGVuYW5jeUFuZFJlZ2lvbkZyb21DbGlDb25maWcoKTogeyB0ZW5hbmN5Pzogc3RyaW5nOyByZWdpb24/OiBzdHJpbmcgfSB7XG4gIGNvbnN0IGNvbmZpZ1BhdGggPSBwcm9jZXNzLmVudi5PQ0lfQ09ORklHX0ZJTEUgfHwgcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJy5vY2knLCAnY29uZmlnJyk7XG4gIGNvbnN0IHByb2ZpbGUgPSBwcm9jZXNzLmVudi5PQ0lfQ0xJX1BST0ZJTEUgfHwgJ0RFRkFVTFQnO1xuICB0cnkge1xuICAgIGlmICghZnMuZXhpc3RzU3luYyhjb25maWdQYXRoKSkgcmV0dXJuIHt9O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgbGV0IGluUHJvZmlsZSA9IGZhbHNlO1xuICAgIGNvbnN0IHJlc3VsdDogeyB0ZW5hbmN5Pzogc3RyaW5nOyByZWdpb24/OiBzdHJpbmcgfSA9IHt9O1xuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xuICAgICAgaWYgKHRyaW1tZWQuc3RhcnRzV2l0aCgnWycpICYmIHRyaW1tZWQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBpblByb2ZpbGUgPSB0cmltbWVkLnNsaWNlKDEsIC0xKSA9PT0gcHJvZmlsZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIWluUHJvZmlsZSkgY29udGludWU7XG4gICAgICBjb25zdCBlcSA9IHRyaW1tZWQuaW5kZXhPZignPScpO1xuICAgICAgaWYgKGVxIDw9IDApIGNvbnRpbnVlO1xuICAgICAgY29uc3Qga2V5ID0gdHJpbW1lZC5zbGljZSgwLCBlcSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRyaW1tZWQuc2xpY2UoZXEgKyAxKS50cmltKCk7XG4gICAgICBpZiAoa2V5ID09PSAndGVuYW5jeScpIHJlc3VsdC50ZW5hbmN5ID0gdmFsdWU7XG4gICAgICBpZiAoa2V5ID09PSAncmVnaW9uJykgcmVzdWx0LnJlZ2lvbiA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuLyoqIEdldCBvYmplY3Qgc3RvcmFnZSBuYW1lc3BhY2UgdmlhIE9DSSBTREsgKHNhbWUgYXMgXCJvY2kgb3MgbnMgZ2V0XCIpLiBVc2VzIH4vLm9jaS9jb25maWcsIERFRkFVTFQgcHJvZmlsZS4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldE5hbWVzcGFjZUZyb21PY2lTZGsoY29tcGFydG1lbnRJZDogc3RyaW5nLCByZWdpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IGNvbmZpZ1BhdGggPSBwcm9jZXNzLmVudi5PQ0lfQ09ORklHX0ZJTEUgfHwgcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJy5vY2knLCAnY29uZmlnJyk7XG4gIGNvbnN0IHByb2ZpbGUgPSBwcm9jZXNzLmVudi5PQ0lfQ0xJX1BST0ZJTEUgfHwgJ0RFRkFVTFQnO1xuICB0cnkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGNvbW1vbi5Db25maWdGaWxlQXV0aGVudGljYXRpb25EZXRhaWxzUHJvdmlkZXIoY29uZmlnUGF0aCwgcHJvZmlsZSk7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IG9iamVjdHN0b3JhZ2UuT2JqZWN0U3RvcmFnZUNsaWVudCh7IGF1dGhlbnRpY2F0aW9uRGV0YWlsc1Byb3ZpZGVyOiBwcm92aWRlciB9KTtcbiAgICBjbGllbnQucmVnaW9uSWQgPSByZWdpb247XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQuZ2V0TmFtZXNwYWNlKHtcbiAgICAgIGNvbXBhcnRtZW50SWQsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnZhbHVlPy50cmltKCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBGaW5kIGEgSkFSIHVuZGVyIHRhcmdldC8gKHByZWZlciBvbmUgbWF0Y2hpbmcgbmFtZSwgZWxzZSBmaXJzdCAuamFyKS5cbiAqL1xuZnVuY3Rpb24gZmluZEphckluVGFyZ2V0KHByb2plY3REaXI6IHN0cmluZywgZnVuY3Rpb25OYW1lPzogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgdGFyZ2V0RGlyID0gcGF0aC5qb2luKHByb2plY3REaXIsICd0YXJnZXQnKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHRhcmdldERpcikpIHJldHVybiB1bmRlZmluZWQ7XG4gIHRyeSB7XG4gICAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyh0YXJnZXREaXIpO1xuICAgIGNvbnN0IGphcnMgPSBmaWxlcy5maWx0ZXIoKGYpID0+IGYuZW5kc1dpdGgoJy5qYXInKSAmJiAhZi5lbmRzV2l0aCgnLXNvdXJjZXMuamFyJykpO1xuICAgIGlmIChqYXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAoZnVuY3Rpb25OYW1lKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGphcnMuZmluZCgoaikgPT4gai50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICBpZiAobWF0Y2gpIHJldHVybiBwYXRoLmpvaW4odGFyZ2V0RGlyLCBtYXRjaCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4odGFyZ2V0RGlyLCBqYXJzWzBdKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKiogVHJ1ZSBpZiBwcm9qZWN0IGhhcyBwb20ueG1sIGFuZCBzcmMvIChNYXZlbiBzb3VyY2UgbGF5b3V0IGZvciBidWlsZC1mcm9tLXNvdXJjZSBEb2NrZXJmaWxlKS4gKi9cbmZ1bmN0aW9uIGhhc1BvbUFuZFNyYyhwcm9qZWN0RGlyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgcG9tID0gcGF0aC5qb2luKHByb2plY3REaXIsICdwb20ueG1sJyk7XG4gIGNvbnN0IHNyYyA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAnc3JjJyk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZzLmV4aXN0c1N5bmMocG9tKSAmJiBmcy5leGlzdHNTeW5jKHNyYykgJiYgZnMuc3RhdFN5bmMoc3JjKS5pc0RpcmVjdG9yeSgpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzY292ZXJGcm9tRnVuY1lhbWxBbmRUYXJnZXQoKTogeyBmdW5jdGlvbk5hbWU/OiBzdHJpbmc7IGZ1bmN0aW9uQXBwTmFtZT86IHN0cmluZzsgZG9ja2VyQ29udGV4dFBhdGg/OiBzdHJpbmc7IGltYWdlVGFnPzogc3RyaW5nOyBoYW5kbGVyPzogc3RyaW5nIH0ge1xuICBsZXQgcHJvamVjdERpciA9IHByb2Nlc3MuZW52Lk9DREtfUFJPSkVDVF9ESVI/LnRyaW0oKTtcbiAgaWYgKCFwcm9qZWN0RGlyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHAgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy5vY2RrLXByb2plY3QtZGlyJyk7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkgcHJvamVjdERpciA9IGZzLnJlYWRGaWxlU3luYyhwLCAndXRmOCcpLnRyaW0oKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yZVxuICAgIH1cbiAgfVxuICBpZiAoIXByb2plY3REaXIgJiYgcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0pBUl9QQVRIPy50cmltKCkpIHtcbiAgICBjb25zdCBwID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9KQVJfUEFUSC50cmltKCkpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSBwcm9qZWN0RGlyID0gZnMuc3RhdFN5bmMocCkuaXNEaXJlY3RvcnkoKSA/IHAgOiBwYXRoLmRpcm5hbWUocCk7XG4gIH1cbiAgaWYgKCFwcm9qZWN0RGlyKSBwcm9qZWN0RGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgcHJvamVjdERpciA9IHByb2plY3REaXIgPyBwYXRoLnJlc29sdmUocHJvamVjdERpcikgOiAnJztcbiAgaWYgKCFwcm9qZWN0RGlyIHx8ICFmcy5leGlzdHNTeW5jKHByb2plY3REaXIpKSByZXR1cm4ge307XG5cbiAgY29uc3QgbmFtZUZyb21ZYW1sID0gZ2V0RnVuY1lhbWxOYW1lKHByb2plY3REaXIpO1xuICBjb25zdCBqYXJQYXRoID0gZmluZEphckluVGFyZ2V0KHByb2plY3REaXIsIG5hbWVGcm9tWWFtbCB8fCB1bmRlZmluZWQpO1xuICBjb25zdCBoYXNTb3VyY2UgPSBoYXNQb21BbmRTcmMocHJvamVjdERpcik7XG4gIGlmICghamFyUGF0aCAmJiAhaGFzU291cmNlKSByZXR1cm4ge307XG5cbiAgY29uc3QgZnVuY3Rpb25OYW1lID0gcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX05BTUU/LnRyaW0oKSB8fCBuYW1lRnJvbVlhbWwgfHwgcGF0aC5iYXNlbmFtZShwcm9qZWN0RGlyKSB8fCAnb2NpLWZ1bmN0aW9uJztcbiAgY29uc3QgaW1hZ2VUYWcgPSBwcm9jZXNzLmVudi5PQ0lfSU1BR0VfVEFHPy50cmltKCkgfHwgZ2V0RnVuY1lhbWxWZXJzaW9uKHByb2plY3REaXIpO1xuICBjb25zdCBoYW5kbGVyID0gcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0hBTkRMRVI/LnRyaW0oKSB8fCBnZXRGdW5jWWFtbEhhbmRsZXIocHJvamVjdERpcik7XG5cbiAgcmV0dXJuIHtcbiAgICBmdW5jdGlvbk5hbWUsXG4gICAgZnVuY3Rpb25BcHBOYW1lOiBwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fQVBQX05BTUU/LnRyaW0oKSB8fCBmdW5jdGlvbk5hbWUsXG4gICAgZG9ja2VyQ29udGV4dFBhdGg6IHBhdGgucmVzb2x2ZShwcm9qZWN0RGlyKSxcbiAgICBpbWFnZVRhZzogaW1hZ2VUYWcgfHwgdW5kZWZpbmVkLFxuICAgIGhhbmRsZXI6IGhhbmRsZXIgfHwgdW5kZWZpbmVkLFxuICB9O1xufVxuXG5jb25zdCBiYWNrZW5kVHlwZSA9IChwcm9jZXNzLmVudi5PQ0lfU1RBVEVfQkFDS0VORF9UWVBFIHx8ICdsb2NhbCcpIGFzICdvY2knIHwgJ2h0dHAnIHwgJ2xvY2FsJztcblxuY29uc3QgYmFja2VuZENvbmZpZzogT2NpQmFja2VuZENvbmZpZyB8IHVuZGVmaW5lZCA9IGJhY2tlbmRUeXBlID09PSAnbG9jYWwnXG4gID8gdW5kZWZpbmVkXG4gIDogYmFja2VuZFR5cGUgPT09ICdvY2knXG4gICAgPyB7XG4gICAgICAgIHR5cGU6ICdvY2knLFxuICAgICAgICBidWNrZXQ6IHByb2Nlc3MuZW52Lk9DSV9TVEFURV9CVUNLRVQgfHwgJ3RmLXN0YXRlJyxcbiAgICAgICAga2V5OiBwcm9jZXNzLmVudi5PQ0lfU1RBVEVfS0VZIHx8ICdmdW5jdGlvbi1zdGFjay90ZXJyYWZvcm0udGZzdGF0ZScsXG4gICAgICB9XG4gICAgOiB7XG4gICAgICAgIHR5cGU6ICdodHRwJyxcbiAgICAgICAgYWRkcmVzczogcHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0hUVFBfQUREUkVTUyB8fCAnJyxcbiAgICAgICAgdXBkYXRlTWV0aG9kOiBwcm9jZXNzLmVudi5PQ0lfU1RBVEVfSFRUUF9VUERBVEVfTUVUSE9EIHx8ICdQVVQnLFxuICAgICAgICBsb2NrQWRkcmVzczogcHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0hUVFBfTE9DS19BRERSRVNTLFxuICAgICAgICB1bmxvY2tBZGRyZXNzOiBwcm9jZXNzLmVudi5PQ0lfU1RBVEVfSFRUUF9VTkxPQ0tfQUREUkVTUyxcbiAgICAgIH07XG5cbi8qKlxuICogTG9hZCBPQ0kgY29uZmlnIGZyb20gZW52IGFuZCBDTEkgY29uZmlnLiBXaGVuIE9DSV9OQU1FU1BBQ0UgaXMgdW5zZXQsIGZldGNoZXMgaXQgdmlhIE9DSSBTREsgKGdldE5hbWVzcGFjZSkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPY2lDb25maWcoKTogUHJvbWlzZTxPY2lDb25maWc+IHtcbiAgY29uc3QgY2xpQ29uZmlnID0gcmVhZFRlbmFuY3lBbmRSZWdpb25Gcm9tQ2xpQ29uZmlnKCk7XG4gIGNvbnN0IGNvbXBhcnRtZW50SWQgPSBwcm9jZXNzLmVudi5PQ0lfQ09NUEFSVE1FTlRfSUQ/LnRyaW0oKSB8fCAnb2NpZDEuY29tcGFydG1lbnQub2MxLi5hYWFhYWFhLi4uJztcbiAgY29uc3Qgb2NpckNvbXBhcnRtZW50SWQgPSBwcm9jZXNzLmVudi5PQ0lfT0NJUl9DT01QQVJUTUVOVF9JRD8udHJpbSgpIHx8IHByb2Nlc3MuZW52Lk9DSV9DT01QQVJUTUVOVF9JRD8udHJpbSgpIHx8IGNvbXBhcnRtZW50SWQ7XG4gIGNvbnN0IHRlbmFuY3lJZCA9IHByb2Nlc3MuZW52Lk9DSV9URU5BTkNZX0lEPy50cmltKCkgfHwgY2xpQ29uZmlnLnRlbmFuY3k/LnRyaW0oKSB8fCAnb2NpZDEudGVuYW5jeS5vYzEuLmFhYWFhYWEuLi4nO1xuICBjb25zdCByZWdpb24gPSBwcm9jZXNzLmVudi5PQ0lfUkVHSU9OPy50cmltKCkgfHwgY2xpQ29uZmlnLnJlZ2lvbj8udHJpbSgpIHx8ICdldS1mcmFua2Z1cnQtMSc7XG5cbiAgaWYgKCFvY2lyQ29tcGFydG1lbnRJZCB8fCBvY2lyQ29tcGFydG1lbnRJZC5pbmNsdWRlcygncm9vdCcpKSB7XG4gICAgY29uc29sZS53YXJuKCfimqDvuI8gIFdBUk5JTkc6IE9DSV9PQ0lSX0NPTVBBUlRNRU5UX0lEIG5vdCBzZXQgb3Igc2V0IHRvIHJvb3QgY29tcGFydG1lbnQuJyk7XG4gICAgY29uc29sZS53YXJuKCcgICBQbGVhc2Ugc2V0IE9DSV9PQ0lSX0NPTVBBUlRNRU5UX0lEIHRvIHlvdXIgaG9tZSBjb21wYXJ0bWVudCBPQ0lELicpO1xuICAgIGNvbnNvbGUud2FybignICAgRXhhbXBsZTogZXhwb3J0IE9DSV9PQ0lSX0NPTVBBUlRNRU5UX0lEPVwib2NpZDEuY29tcGFydG1lbnQub2MxLi5hYWFhYWFhLi4uXCInKTtcbiAgfVxuXG4gIGxldCBuYW1lc3BhY2UgPSBwcm9jZXNzLmVudi5PQ0lfTkFNRVNQQUNFPy50cmltKCk7XG4gIGlmICghbmFtZXNwYWNlIHx8IG5hbWVzcGFjZSA9PT0gJ3lvdXItbmFtZXNwYWNlJykge1xuICAgIGNvbnN0IHJlc29sdmVkID0gYXdhaXQgZ2V0TmFtZXNwYWNlRnJvbU9jaVNkayhjb21wYXJ0bWVudElkLCByZWdpb24pO1xuICAgIGlmIChyZXNvbHZlZCkgbmFtZXNwYWNlID0gcmVzb2x2ZWQ7XG4gICAgZWxzZSBpZiAoIW5hbWVzcGFjZSkgbmFtZXNwYWNlID0gJ3lvdXItbmFtZXNwYWNlJztcbiAgICBpZiAobmFtZXNwYWNlID09PSAneW91ci1uYW1lc3BhY2UnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyAgT0NJX05BTUVTUEFDRSBub3Qgc2V0IGFuZCBTREsgY291bGQgbm90IHJlc29sdmUgaXQuIFNldCBPQ0lfTkFNRVNQQUNFIG9yIHJ1biBcIm9jaSBzZXR1cCBjb25maWdcIi4nKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkaXNjb3ZlcmVkID0gZGlzY292ZXJGcm9tRnVuY1lhbWxBbmRUYXJnZXQoKTtcblxuICBjb25zdCBpbWFnZVRhZyA9IHByb2Nlc3MuZW52Lk9DSV9JTUFHRV9UQUc/LnRyaW0oKSB8fCBkaXNjb3ZlcmVkLmltYWdlVGFnIHx8ICdsYXRlc3QnO1xuXG4gIGxldCBkb2NrZXJDb250ZXh0UGF0aCA9IGRpc2NvdmVyZWQuZG9ja2VyQ29udGV4dFBhdGg7XG4gIGlmICghZG9ja2VyQ29udGV4dFBhdGggJiYgcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0pBUl9QQVRIPy50cmltKCkpIHtcbiAgICBjb25zdCBwID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9KQVJfUEFUSC50cmltKCkpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSBkb2NrZXJDb250ZXh0UGF0aCA9IGZzLnN0YXRTeW5jKHApLmlzRGlyZWN0b3J5KCkgPyBwIDogcGF0aC5kaXJuYW1lKHApO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlciA9IHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9IQU5ETEVSPy50cmltKCkgfHwgZGlzY292ZXJlZC5oYW5kbGVyO1xuXG4gIHJldHVybiB7XG4gICAgY29tcGFydG1lbnRJZCxcbiAgICBvY2lyQ29tcGFydG1lbnRJZDogb2NpckNvbXBhcnRtZW50SWQgfHwgdW5kZWZpbmVkLFxuICAgIHRlbmFuY3lJZCxcbiAgICByZWdpb24sXG4gICAgbmFtZXNwYWNlLFxuICAgIGZ1bmN0aW9uQXBwTmFtZTogcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0FQUF9OQU1FID8/IGRpc2NvdmVyZWQuZnVuY3Rpb25BcHBOYW1lID8/ICcnLFxuICAgIGZ1bmN0aW9uTmFtZTogcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX05BTUUgPz8gZGlzY292ZXJlZC5mdW5jdGlvbk5hbWUgPz8gJycsXG4gICAgZnVuY3Rpb25KYXJQYXRoOiBwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fSkFSX1BBVEg/LnRyaW0oKSB8fCB1bmRlZmluZWQsXG4gICAgZG9ja2VyQ29udGV4dFBhdGg6IGRvY2tlckNvbnRleHRQYXRoIHx8IHVuZGVmaW5lZCxcbiAgICBpbWFnZVRhZyxcbiAgICBoYW5kbGVyOiBoYW5kbGVyIHx8IHVuZGVmaW5lZCxcbiAgICBvY2lyUmVwb3NpdG9yeU5hbWU6IHByb2Nlc3MuZW52Lk9DSV9PQ0lSX1JFUE9TSVRPUllfTkFNRSB8fCB1bmRlZmluZWQsXG4gICAgYmFja2VuZDogYmFja2VuZENvbmZpZyxcbiAgfTtcbn1cbiJdfQ==