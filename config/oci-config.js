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
    const useThinDockerfile = !!jarPath;
    return {
        functionName,
        functionAppName: process.env.OCI_FUNCTION_APP_NAME?.trim() || functionName,
        dockerContextPath: path.resolve(projectDir),
        imageTag: imageTag || undefined,
        handler: handler || undefined,
        useThinDockerfile,
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
    const useThinDockerfile = discovered.useThinDockerfile ?? false;
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
        useThinDockerfile,
        ocirRepositoryName: process.env.OCI_OCIR_REPOSITORY_NAME || undefined,
        backend: backendConfig,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NpLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZy9vY2ktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREgsa0NBRUM7QUFHRCx3Q0FLQztBQXVNRCxvQ0FvREM7QUF0VEQsdUNBQXlCO0FBQ3pCLDJDQUE2QjtBQUM3Qix1Q0FBeUI7QUFDekIsbURBQXFDO0FBQ3JDLGlFQUFtRDtBQWtDbkQscUlBQXFJO0FBQ3hILFFBQUEsbUJBQW1CLEdBQTJCO0lBQ3pELGdCQUFnQixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUs7SUFDM0YsWUFBWSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUs7SUFDckYsZUFBZSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUs7SUFDdkYsWUFBWSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUs7SUFDOUYsWUFBWSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLO0lBQzdGLGFBQWEsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLO0lBQ2xHLGdCQUFnQixFQUFFLEtBQUs7Q0FDeEIsQ0FBQztBQUVGLFNBQWdCLFdBQVcsQ0FBQyxNQUFjO0lBQ3hDLE9BQU8sMkJB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LEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRSxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDL0UsTUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsaUJBQWlCLElBQUksS0FBSyxDQUFDO0lBRWhFLE9BQU87UUFDTCxhQUFhO1FBQ2IsaUJBQWlCLEVBQUUsaUJBQWlCLElBQUksU0FBUztRQUNqRCxTQUFTO1FBQ1QsTUFBTTtRQUNOLFNBQVM7UUFDVCxlQUFlLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxVQUFVLENBQUMsZUFBZSxJQUFJLEVBQUU7UUFDdEYsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLElBQUksVUFBVSxDQUFDLFlBQVksSUFBSSxFQUFFO1FBQzVFLGVBQWUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksRUFBRSxJQUFJLFNBQVM7UUFDdkUsaUJBQWlCLEVBQUUsaUJBQWlCLElBQUksU0FBUztRQUNqRCxRQUFRO1FBQ1IsT0FBTyxFQUFFLE9BQU8sSUFBSSxTQUFTO1FBQzdCLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixJQUFJLFNBQVM7UUFDckUsT0FBTyxFQUFFLGFBQWE7S0FDdkIsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE9DSSBDb25maWd1cmF0aW9uXG4gKlxuICogU2V0IHRoZXNlIHZpYSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgb3IgdXBkYXRlIGRlZmF1bHRzOlxuICogLSBPQ0lfQ09NUEFSVE1FTlRfSURcbiAqIC0gT0NJX1RFTkFOQ1lfSURcbiAqIC0gT0NJX1JFR0lPTlxuICogLSBPQ0lfTkFNRVNQQUNFIChpZiB1bnNldCwgb2J0YWluZWQgdmlhIE9DSSBTREsgZ2V0TmFtZXNwYWNlKVxuICogLSBPQ0lfT0NJUl9DT01QQVJUTUVOVF9JRCAoZm9yIE9DSVI7IG11c3QgYmUgbm9uLXJvb3QgZm9yIGZ1bGwgc3RhY2spXG4gKiAtIE9DSV9GVU5DVElPTl9BUFBfTkFNRSAoRnVuY3Rpb25zIGFwcGxpY2F0aW9uIG5hbWU7IGRlZmF1bHQgZW1wdHkpXG4gKiAtIE9DSV9GVU5DVElPTl9OQU1FIChGdW5jdGlvbiBuYW1lOyBkZWZhdWx0IGVtcHR5KVxuICogLSBPQ0lfRlVOQ1RJT05fSEFORExFUiAoSmF2YSBGREsgQ01EIGhhbmRsZXIsIGUuZy4gY29tLmV4YW1wbGUuSGFuZGxlcjo6aGFuZGxlUmVxdWVzdDsgZnJvbSBmdW5jLnlhbWwgY21kL2hhbmRsZXIgaWYgdW5zZXQpXG4gKiAtIE9DSV9GVU5DVElPTl9KQVJfUEFUSCAoUGF0aCB0byBKQVIgb3IgcHJvamVjdCBkaXIgZm9yIGZ1bmN0aW9uIGltYWdlOyBkZWZhdWx0IGVtcHR5KVxuICogLSBPQ0RLX1BST0pFQ1RfRElSIChzZXQgYnkgb2NkayBDTEkgdG8gY2FsbGVyIGN3ZDsgdXNlZCB0byBkaXNjb3ZlciBmdW5jLnlhbWwgYW5kIHRhcmdldC8pXG4gKiAtIE9DSV9TVEFURV9CVUNLRVQgKGZvciByZW1vdGUgc3RhdGUpXG4gKiAtIE9DSV9TVEFURV9CQUNLRU5EX1RZUEUgKG9jaXxodHRwfGxvY2FsKVxuICpcbiAqIFdoZW4gT0NES19QUk9KRUNUX0RJUiBpcyBzZXQgKGUuZy4gcnVubmluZyBgbnB4IG9jZGsgZGVwbG95YCBmcm9tIGEgSmF2YSBwcm9qZWN0KSwgY29uZmlnXG4gKiBkaXNjb3ZlcnMgZWl0aGVyIHRhcmdldC8qLmphciBvciBwb20ueG1sK3NyYy8gKGFuZCBvcHRpb25hbGx5IGZ1bmMueWFtbCBuYW1lLCB2ZXJzaW9uLCBjbWQvaGFuZGxlcikuXG4gKiBObyBEb2NrZXJmaWxlIGlzIHJlcXVpcmVk4oCUdGhlIHN0YWNrIGdlbmVyYXRlcyBvbmUgaW4gbG9jYWwtZXhlYyAoZXhjbHVkaW5nIG5vZGVfbW9kdWxlcyB2aWEgLmRvY2tlcmlnbm9yZSksXG4gKiB0aGVuIGJ1aWxkcywgdGFncyAoZnJvbSBmdW5jLnlhbWwgdmVyc2lvbiksIGFuZCBwdXNoZXMgdG8gT0NJUi5cbiAqL1xuXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgb3MgZnJvbSAnb3MnO1xuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gJ29jaS1jb21tb24nO1xuaW1wb3J0ICogYXMgb2JqZWN0c3RvcmFnZSBmcm9tICdvY2ktb2JqZWN0c3RvcmFnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2NpQmFja2VuZENvbmZpZyB7XG4gIHR5cGU6ICdvY2knIHwgJ2h0dHAnIHwgJ2xvY2FsJztcbiAgYnVja2V0Pzogc3RyaW5nO1xuICBrZXk/OiBzdHJpbmc7XG4gIGFkZHJlc3M/OiBzdHJpbmc7XG4gIHVwZGF0ZU1ldGhvZD86IHN0cmluZztcbiAgbG9ja0FkZHJlc3M/OiBzdHJpbmc7XG4gIHVubG9ja0FkZHJlc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2NpQ29uZmlnIHtcbiAgY29tcGFydG1lbnRJZDogc3RyaW5nO1xuICBvY2lyQ29tcGFydG1lbnRJZD86IHN0cmluZztcbiAgdGVuYW5jeUlkOiBzdHJpbmc7XG4gIHJlZ2lvbjogc3RyaW5nO1xuICBuYW1lc3BhY2U6IHN0cmluZztcbiAgZnVuY3Rpb25BcHBOYW1lOiBzdHJpbmc7XG4gIGZ1bmN0aW9uTmFtZTogc3RyaW5nO1xuICAvKiogUGF0aCB0byBKQVIgb3IgRG9ja2VyZmlsZSBjb250ZXh0IGZvciBmdW5jdGlvbiBpbWFnZTsgZW1wdHkgPSBubyBidWlsZC9kZXBsb3kuICovXG4gIGZ1bmN0aW9uSmFyUGF0aD86IHN0cmluZztcbiAgLyoqIFBhdGggdG8gZGlyZWN0b3J5IGNvbnRhaW5pbmcgdGFyZ2V0LyAoZGlzY292ZXJlZDsgRG9ja2VyZmlsZSBpcyBnZW5lcmF0ZWQgaW4gbG9jYWwtZXhlYykuICovXG4gIGRvY2tlckNvbnRleHRQYXRoPzogc3RyaW5nO1xuICAvKiogSW1hZ2UgdGFnIGZvciBPQ0lSIChmcm9tIGZ1bmMueWFtbCB2ZXJzaW9uIG9yIE9DSV9JTUFHRV9UQUc7IGRlZmF1bHQgJ2xhdGVzdCcpLiAqL1xuICBpbWFnZVRhZz86IHN0cmluZztcbiAgLyoqIEphdmEgRkRLIENNRCBoYW5kbGVyIChmcm9tIGZ1bmMueWFtbCBjbWQvaGFuZGxlciBvciBPQ0lfRlVOQ1RJT05fSEFORExFUjsgZGVmYXVsdCBiZWxvdykuICovXG4gIGhhbmRsZXI/OiBzdHJpbmc7XG4gIC8qKiBXaGVuIHRydWUsIGRlcGxveSB1c2VzIGEgdGhpbiBEb2NrZXJmaWxlIChDT1BZIHRhcmdldC8qLmphciBvbmx5KTsgZnVsbCBNYXZlbiBidWlsZCBvbmx5IGluIHJlZGVwbG95OmZ1bmN0aW9uLiAqL1xuICB1c2VUaGluRG9ja2VyZmlsZT86IGJvb2xlYW47XG4gIG9jaXJSZXBvc2l0b3J5TmFtZT86IHN0cmluZztcbiAgYmFja2VuZD86IE9jaUJhY2tlbmRDb25maWc7XG59XG5cbi8qKiBPQ0lSIHNob3J0IHJlZ2lvbiBrZXlzIChlLmcuIGV1LWZyYW5rZnVydC0xIC0+IGZyYSkuIFVzZWQgc28gbG9naW4sIGJ1aWxkLCBwdXNoIGFuZCBmdW5jdGlvbiBpbWFnZSBhbGwgdXNlIHNhbWUgcmVnaXN0cnkgaG9zdC4gKi9cbmV4cG9ydCBjb25zdCBSRUdJT05fVE9fT0NJUl9IT1NUOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnZXUtZnJhbmtmdXJ0LTEnOiAnZnJhJywgJ3VzLXBob2VuaXgtMSc6ICdwaHgnLCAndXMtYXNoYnVybi0xJzogJ2lhZCcsICd1ay1sb25kb24tMSc6ICdsaHInLFxuICAnYXAtdG9reW8tMSc6ICducnQnLCAnYXAtbXVtYmFpLTEnOiAnYm9tJywgJ2FwLXNlb3VsLTEnOiAnaWNuJywgJ2NhLXRvcm9udG8tMSc6ICd5eXonLFxuICAnc2Etc2FvcGF1bG8tMSc6ICdncnUnLCAnYXAtc3lkbmV5LTEnOiAnc3lkJywgJ2V1LXp1cmljaC0xJzogJ3pyaCcsICdtZS1kdWJhaS0xJzogJ2R4YicsXG4gICdhcC1vc2FrYS0xJzogJ2tpeCcsICdldS1hbXN0ZXJkYW0tMSc6ICdhbXMnLCAnYXAtc2luZ2Fwb3JlLTEnOiAnc2luJywgJ2FwLWh5ZGVyYWJhZC0xJzogJ2h5ZCcsXG4gICdldS1taWxhbi0xJzogJ214cCcsICdzYS1zYW50aWFnby0xJzogJ3NjbCcsICdhcC1tZWxib3VybmUtMSc6ICdtZWwnLCAnZXUtc3RvY2tob2xtLTEnOiAnYXJuJyxcbiAgJ21lLWplZGRhaC0xJzogJ2plZCcsICdhZi1qb2hhbm5lc2J1cmctMSc6ICdqbmInLCAnaWwtamVydXNhbGVtLTEnOiAndGx2JywgJ214LXF1ZXJldGFyby0xJzogJ3FybycsXG4gICdldS1tYXJzZWlsbGUtMSc6ICdtcnMnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9jaXJIb3N0S2V5KHJlZ2lvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIFJFR0lPTl9UT19PQ0lSX0hPU1RbcmVnaW9uXSA/PyByZWdpb247XG59XG5cbi8qKiBGdWxsIE9DSVIgaW1hZ2UgVVJMIGZvciB0aGUgZnVuY3Rpb24gKHJlZ2lzdHJ5L25hbWVzcGFjZS9yZXBvOnRhZykuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2NpSW1hZ2VVcmwoY29uZmlnOiBPY2lDb25maWcpOiBzdHJpbmcge1xuICBjb25zdCByZWdpc3RyeSA9IGAke29jaXJIb3N0S2V5KGNvbmZpZy5yZWdpb24pfS5vY2lyLmlvYDtcbiAgY29uc3QgcmVwbyA9IGNvbmZpZy5vY2lyUmVwb3NpdG9yeU5hbWUgfHwgY29uZmlnLmZ1bmN0aW9uTmFtZSB8fCAnb2NpLWZ1bmN0aW9uJztcbiAgY29uc3QgdGFnID0gY29uZmlnLmltYWdlVGFnIHx8ICdsYXRlc3QnO1xuICByZXR1cm4gYCR7cmVnaXN0cnl9LyR7Y29uZmlnLm5hbWVzcGFjZX0vJHtyZXBvfToke3RhZ31gO1xufVxuXG4vKipcbiAqIFRyeSB0byByZWFkIGZ1bmN0aW9uIG5hbWUgZnJvbSBmdW5jLnlhbWwgKE9DSSBGdW5jdGlvbnMgZm9ybWF0KS5cbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBcIm5hbWU6XCIgbGluZSwgdHJpbW1lZC5cbiAqL1xuZnVuY3Rpb24gZ2V0RnVuY1lhbWxOYW1lKHByb2plY3REaXI6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHAgPSBwYXRoLmpvaW4ocHJvamVjdERpciwgJ2Z1bmMueWFtbCcpO1xuICB0cnkge1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHAsICd1dGY4Jyk7XG4gICAgICBjb25zdCBtID0gY29udGVudC5tYXRjaCgvXlxccypuYW1lOlxccypbXCInXT8oW15cIidcXHNcXG5dKylbXCInXT8vbSk7XG4gICAgICBpZiAobSkgcmV0dXJuIG1bMV0udHJpbSgpO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBUcnkgdG8gcmVhZCBjbWQvaGFuZGxlciBmcm9tIGZ1bmMueWFtbCAoT0NJL0ZuIGZvcm1hdCkuXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBcImNtZDpcIiBvciBcImhhbmRsZXI6XCIgbGluZSwgdHJpbW1lZDsgdXNlZCBhcyBEb2NrZXIgQ01EIGZvciBKYXZhIEZESy5cbiAqL1xuZnVuY3Rpb24gZ2V0RnVuY1lhbWxIYW5kbGVyKHByb2plY3REaXI6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHAgPSBwYXRoLmpvaW4ocHJvamVjdERpciwgJ2Z1bmMueWFtbCcpO1xuICB0cnkge1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHAsICd1dGY4Jyk7XG4gICAgICBjb25zdCBjbWRNYXRjaCA9IGNvbnRlbnQubWF0Y2goL15cXHMqY21kOlxccypbXCInXT8oW15cIidcXG5dKylbXCInXT8vbSk7XG4gICAgICBpZiAoY21kTWF0Y2gpIHJldHVybiBjbWRNYXRjaFsxXS50cmltKCk7XG4gICAgICBjb25zdCBoYW5kbGVyTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9eXFxzKmhhbmRsZXI6XFxzKltcIiddPyhbXlwiJ1xcbl0rKVtcIiddPy9tKTtcbiAgICAgIGlmIChoYW5kbGVyTWF0Y2gpIHJldHVybiBoYW5kbGVyTWF0Y2hbMV0udHJpbSgpO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBUcnkgdG8gcmVhZCB2ZXJzaW9uIGZyb20gZnVuYy55YW1sICh1c2VkIGFzIE9DSVIgaW1hZ2UgdGFnKS5cbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBcInZlcnNpb246XCIgbGluZSwgdHJpbW1lZDsgc2FuaXRpemVkIGZvciBEb2NrZXIgdGFnIChhLXpBLVowLTlfLi0pLlxuICovXG5mdW5jdGlvbiBnZXRGdW5jWWFtbFZlcnNpb24ocHJvamVjdERpcjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgcCA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAnZnVuYy55YW1sJyk7XG4gIHRyeSB7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocCkpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocCwgJ3V0ZjgnKTtcbiAgICAgIGNvbnN0IG0gPSBjb250ZW50Lm1hdGNoKC9eXFxzKnZlcnNpb246XFxzKltcIiddPyhbXlwiJ1xcc1xcbl0rKVtcIiddPy9tKTtcbiAgICAgIGlmIChtKSB7XG4gICAgICAgIGNvbnN0IHJhdyA9IG1bMV0udHJpbSgpO1xuICAgICAgICBjb25zdCBzYW5pdGl6ZWQgPSByYXcucmVwbGFjZSgvW15hLXpBLVowLTlfLi1dL2csICctJykucmVwbGFjZSgvLSsvZywgJy0nKS5yZXBsYWNlKC9eLXwtJC9nLCAnJyk7XG4gICAgICAgIHJldHVybiBzYW5pdGl6ZWQgfHwgdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqIFJlYWQgdGVuYW5jeSBhbmQgcmVnaW9uIGZyb20gT0NJIENMSSBjb25maWcuIERlZmF1bHQgZmlsZTogfi8ub2NpL2NvbmZpZywgZGVmYXVsdCBwcm9maWxlOiBERUZBVUxULiAqL1xuZnVuY3Rpb24gcmVhZFRlbmFuY3lBbmRSZWdpb25Gcm9tQ2xpQ29uZmlnKCk6IHsgdGVuYW5jeT86IHN0cmluZzsgcmVnaW9uPzogc3RyaW5nIH0ge1xuICBjb25zdCBjb25maWdQYXRoID0gcHJvY2Vzcy5lbnYuT0NJX0NPTkZJR19GSUxFIHx8IHBhdGguam9pbihvcy5ob21lZGlyKCksICcub2NpJywgJ2NvbmZpZycpO1xuICBjb25zdCBwcm9maWxlID0gcHJvY2Vzcy5lbnYuT0NJX0NMSV9QUk9GSUxFIHx8ICdERUZBVUxUJztcbiAgdHJ5IHtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoY29uZmlnUGF0aCkpIHJldHVybiB7fTtcbiAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgvXFxyP1xcbi8pO1xuICAgIGxldCBpblByb2ZpbGUgPSBmYWxzZTtcbiAgICBjb25zdCByZXN1bHQ6IHsgdGVuYW5jeT86IHN0cmluZzsgcmVnaW9uPzogc3RyaW5nIH0gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lLnRyaW0oKTtcbiAgICAgIGlmICh0cmltbWVkLnN0YXJ0c1dpdGgoJ1snKSAmJiB0cmltbWVkLmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgaW5Qcm9maWxlID0gdHJpbW1lZC5zbGljZSgxLCAtMSkgPT09IHByb2ZpbGU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFpblByb2ZpbGUpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZXEgPSB0cmltbWVkLmluZGV4T2YoJz0nKTtcbiAgICAgIGlmIChlcSA8PSAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGtleSA9IHRyaW1tZWQuc2xpY2UoMCwgZXEpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgdmFsdWUgPSB0cmltbWVkLnNsaWNlKGVxICsgMSkudHJpbSgpO1xuICAgICAgaWYgKGtleSA9PT0gJ3RlbmFuY3knKSByZXN1bHQudGVuYW5jeSA9IHZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ3JlZ2lvbicpIHJlc3VsdC5yZWdpb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbi8qKiBHZXQgb2JqZWN0IHN0b3JhZ2UgbmFtZXNwYWNlIHZpYSBPQ0kgU0RLIChzYW1lIGFzIFwib2NpIG9zIG5zIGdldFwiKS4gVXNlcyB+Ly5vY2kvY29uZmlnLCBERUZBVUxUIHByb2ZpbGUuICovXG5hc3luYyBmdW5jdGlvbiBnZXROYW1lc3BhY2VGcm9tT2NpU2RrKGNvbXBhcnRtZW50SWQ6IHN0cmluZywgcmVnaW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCBjb25maWdQYXRoID0gcHJvY2Vzcy5lbnYuT0NJX0NPTkZJR19GSUxFIHx8IHBhdGguam9pbihvcy5ob21lZGlyKCksICcub2NpJywgJ2NvbmZpZycpO1xuICBjb25zdCBwcm9maWxlID0gcHJvY2Vzcy5lbnYuT0NJX0NMSV9QUk9GSUxFIHx8ICdERUZBVUxUJztcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBjb21tb24uQ29uZmlnRmlsZUF1dGhlbnRpY2F0aW9uRGV0YWlsc1Byb3ZpZGVyKGNvbmZpZ1BhdGgsIHByb2ZpbGUpO1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBvYmplY3RzdG9yYWdlLk9iamVjdFN0b3JhZ2VDbGllbnQoeyBhdXRoZW50aWNhdGlvbkRldGFpbHNQcm92aWRlcjogcHJvdmlkZXIgfSk7XG4gICAgY2xpZW50LnJlZ2lvbklkID0gcmVnaW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LmdldE5hbWVzcGFjZSh7XG4gICAgICBjb21wYXJ0bWVudElkLFxuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZS52YWx1ZT8udHJpbSgpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogRmluZCBhIEpBUiB1bmRlciB0YXJnZXQvIChwcmVmZXIgb25lIG1hdGNoaW5nIG5hbWUsIGVsc2UgZmlyc3QgLmphcikuXG4gKi9cbmZ1bmN0aW9uIGZpbmRKYXJJblRhcmdldChwcm9qZWN0RGlyOiBzdHJpbmcsIGZ1bmN0aW9uTmFtZT86IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAndGFyZ2V0Jyk7XG4gIGlmICghZnMuZXhpc3RzU3luYyh0YXJnZXREaXIpKSByZXR1cm4gdW5kZWZpbmVkO1xuICB0cnkge1xuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmModGFyZ2V0RGlyKTtcbiAgICBjb25zdCBqYXJzID0gZmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuamFyJykgJiYgIWYuZW5kc1dpdGgoJy1zb3VyY2VzLmphcicpKTtcbiAgICBpZiAoamFycy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKGZ1bmN0aW9uTmFtZSkge1xuICAgICAgY29uc3QgbWF0Y2ggPSBqYXJzLmZpbmQoKGopID0+IGoudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgaWYgKG1hdGNoKSByZXR1cm4gcGF0aC5qb2luKHRhcmdldERpciwgbWF0Y2gpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5qb2luKHRhcmdldERpciwgamFyc1swXSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqIFRydWUgaWYgcHJvamVjdCBoYXMgcG9tLnhtbCBhbmQgc3JjLyAoTWF2ZW4gc291cmNlIGxheW91dCBmb3IgYnVpbGQtZnJvbS1zb3VyY2UgRG9ja2VyZmlsZSkuICovXG5mdW5jdGlvbiBoYXNQb21BbmRTcmMocHJvamVjdERpcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHBvbSA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAncG9tLnhtbCcpO1xuICBjb25zdCBzcmMgPSBwYXRoLmpvaW4ocHJvamVjdERpciwgJ3NyYycpO1xuICB0cnkge1xuICAgIHJldHVybiBmcy5leGlzdHNTeW5jKHBvbSkgJiYgZnMuZXhpc3RzU3luYyhzcmMpICYmIGZzLnN0YXRTeW5jKHNyYykuaXNEaXJlY3RvcnkoKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc2NvdmVyRnJvbUZ1bmNZYW1sQW5kVGFyZ2V0KCk6IHsgZnVuY3Rpb25OYW1lPzogc3RyaW5nOyBmdW5jdGlvbkFwcE5hbWU/OiBzdHJpbmc7IGRvY2tlckNvbnRleHRQYXRoPzogc3RyaW5nOyBpbWFnZVRhZz86IHN0cmluZzsgaGFuZGxlcj86IHN0cmluZzsgdXNlVGhpbkRvY2tlcmZpbGU/OiBib29sZWFuIH0ge1xuICBsZXQgcHJvamVjdERpciA9IHByb2Nlc3MuZW52Lk9DREtfUFJPSkVDVF9ESVI/LnRyaW0oKTtcbiAgaWYgKCFwcm9qZWN0RGlyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHAgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy5vY2RrLXByb2plY3QtZGlyJyk7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkgcHJvamVjdERpciA9IGZzLnJlYWRGaWxlU3luYyhwLCAndXRmOCcpLnRyaW0oKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yZVxuICAgIH1cbiAgfVxuICBpZiAoIXByb2plY3REaXIgJiYgcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0pBUl9QQVRIPy50cmltKCkpIHtcbiAgICBjb25zdCBwID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9KQVJfUEFUSC50cmltKCkpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSBwcm9qZWN0RGlyID0gZnMuc3RhdFN5bmMocCkuaXNEaXJlY3RvcnkoKSA/IHAgOiBwYXRoLmRpcm5hbWUocCk7XG4gIH1cbiAgaWYgKCFwcm9qZWN0RGlyKSBwcm9qZWN0RGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgcHJvamVjdERpciA9IHByb2plY3REaXIgPyBwYXRoLnJlc29sdmUocHJvamVjdERpcikgOiAnJztcbiAgaWYgKCFwcm9qZWN0RGlyIHx8ICFmcy5leGlzdHNTeW5jKHByb2plY3REaXIpKSByZXR1cm4ge307XG5cbiAgY29uc3QgbmFtZUZyb21ZYW1sID0gZ2V0RnVuY1lhbWxOYW1lKHByb2plY3REaXIpO1xuICBjb25zdCBqYXJQYXRoID0gZmluZEphckluVGFyZ2V0KHByb2plY3REaXIsIG5hbWVGcm9tWWFtbCB8fCB1bmRlZmluZWQpO1xuICBjb25zdCBoYXNTb3VyY2UgPSBoYXNQb21BbmRTcmMocHJvamVjdERpcik7XG4gIGlmICghamFyUGF0aCAmJiAhaGFzU291cmNlKSByZXR1cm4ge307XG5cbiAgY29uc3QgZnVuY3Rpb25OYW1lID0gcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX05BTUU/LnRyaW0oKSB8fCBuYW1lRnJvbVlhbWwgfHwgcGF0aC5iYXNlbmFtZShwcm9qZWN0RGlyKSB8fCAnb2NpLWZ1bmN0aW9uJztcbiAgY29uc3QgaW1hZ2VUYWcgPSBwcm9jZXNzLmVudi5PQ0lfSU1BR0VfVEFHPy50cmltKCkgfHwgZ2V0RnVuY1lhbWxWZXJzaW9uKHByb2plY3REaXIpO1xuICBjb25zdCBoYW5kbGVyID0gcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0hBTkRMRVI/LnRyaW0oKSB8fCBnZXRGdW5jWWFtbEhhbmRsZXIocHJvamVjdERpcik7XG4gIGNvbnN0IHVzZVRoaW5Eb2NrZXJmaWxlID0gISFqYXJQYXRoO1xuXG4gIHJldHVybiB7XG4gICAgZnVuY3Rpb25OYW1lLFxuICAgIGZ1bmN0aW9uQXBwTmFtZTogcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0FQUF9OQU1FPy50cmltKCkgfHwgZnVuY3Rpb25OYW1lLFxuICAgIGRvY2tlckNvbnRleHRQYXRoOiBwYXRoLnJlc29sdmUocHJvamVjdERpciksXG4gICAgaW1hZ2VUYWc6IGltYWdlVGFnIHx8IHVuZGVmaW5lZCxcbiAgICBoYW5kbGVyOiBoYW5kbGVyIHx8IHVuZGVmaW5lZCxcbiAgICB1c2VUaGluRG9ja2VyZmlsZSxcbiAgfTtcbn1cblxuY29uc3QgYmFja2VuZFR5cGUgPSAocHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0JBQ0tFTkRfVFlQRSB8fCAnbG9jYWwnKSBhcyAnb2NpJyB8ICdodHRwJyB8ICdsb2NhbCc7XG5cbmNvbnN0IGJhY2tlbmRDb25maWc6IE9jaUJhY2tlbmRDb25maWcgfCB1bmRlZmluZWQgPSBiYWNrZW5kVHlwZSA9PT0gJ2xvY2FsJ1xuICA/IHVuZGVmaW5lZFxuICA6IGJhY2tlbmRUeXBlID09PSAnb2NpJ1xuICAgID8ge1xuICAgICAgICB0eXBlOiAnb2NpJyxcbiAgICAgICAgYnVja2V0OiBwcm9jZXNzLmVudi5PQ0lfU1RBVEVfQlVDS0VUIHx8ICd0Zi1zdGF0ZScsXG4gICAgICAgIGtleTogcHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0tFWSB8fCAnZnVuY3Rpb24tc3RhY2svdGVycmFmb3JtLnRmc3RhdGUnLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICB0eXBlOiAnaHR0cCcsXG4gICAgICAgIGFkZHJlc3M6IHByb2Nlc3MuZW52Lk9DSV9TVEFURV9IVFRQX0FERFJFU1MgfHwgJycsXG4gICAgICAgIHVwZGF0ZU1ldGhvZDogcHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0hUVFBfVVBEQVRFX01FVEhPRCB8fCAnUFVUJyxcbiAgICAgICAgbG9ja0FkZHJlc3M6IHByb2Nlc3MuZW52Lk9DSV9TVEFURV9IVFRQX0xPQ0tfQUREUkVTUyxcbiAgICAgICAgdW5sb2NrQWRkcmVzczogcHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0hUVFBfVU5MT0NLX0FERFJFU1MsXG4gICAgICB9O1xuXG4vKipcbiAqIExvYWQgT0NJIGNvbmZpZyBmcm9tIGVudiBhbmQgQ0xJIGNvbmZpZy4gV2hlbiBPQ0lfTkFNRVNQQUNFIGlzIHVuc2V0LCBmZXRjaGVzIGl0IHZpYSBPQ0kgU0RLIChnZXROYW1lc3BhY2UpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T2NpQ29uZmlnKCk6IFByb21pc2U8T2NpQ29uZmlnPiB7XG4gIGNvbnN0IGNsaUNvbmZpZyA9IHJlYWRUZW5hbmN5QW5kUmVnaW9uRnJvbUNsaUNvbmZpZygpO1xuICBjb25zdCBjb21wYXJ0bWVudElkID0gcHJvY2Vzcy5lbnYuT0NJX0NPTVBBUlRNRU5UX0lEPy50cmltKCkgfHwgJ29jaWQxLmNvbXBhcnRtZW50Lm9jMS4uYWFhYWFhYS4uLic7XG4gIGNvbnN0IG9jaXJDb21wYXJ0bWVudElkID0gcHJvY2Vzcy5lbnYuT0NJX09DSVJfQ09NUEFSVE1FTlRfSUQ/LnRyaW0oKSB8fCBwcm9jZXNzLmVudi5PQ0lfQ09NUEFSVE1FTlRfSUQ/LnRyaW0oKSB8fCBjb21wYXJ0bWVudElkO1xuICBjb25zdCB0ZW5hbmN5SWQgPSBwcm9jZXNzLmVudi5PQ0lfVEVOQU5DWV9JRD8udHJpbSgpIHx8IGNsaUNvbmZpZy50ZW5hbmN5Py50cmltKCkgfHwgJ29jaWQxLnRlbmFuY3kub2MxLi5hYWFhYWFhLi4uJztcbiAgY29uc3QgcmVnaW9uID0gcHJvY2Vzcy5lbnYuT0NJX1JFR0lPTj8udHJpbSgpIHx8IGNsaUNvbmZpZy5yZWdpb24/LnRyaW0oKSB8fCAnZXUtZnJhbmtmdXJ0LTEnO1xuXG4gIGlmICghb2NpckNvbXBhcnRtZW50SWQgfHwgb2NpckNvbXBhcnRtZW50SWQuaW5jbHVkZXMoJ3Jvb3QnKSkge1xuICAgIGNvbnNvbGUud2Fybign4pqg77iPICBXQVJOSU5HOiBPQ0lfT0NJUl9DT01QQVJUTUVOVF9JRCBub3Qgc2V0IG9yIHNldCB0byByb290IGNvbXBhcnRtZW50LicpO1xuICAgIGNvbnNvbGUud2FybignICAgUGxlYXNlIHNldCBPQ0lfT0NJUl9DT01QQVJUTUVOVF9JRCB0byB5b3VyIGhvbWUgY29tcGFydG1lbnQgT0NJRC4nKTtcbiAgICBjb25zb2xlLndhcm4oJyAgIEV4YW1wbGU6IGV4cG9ydCBPQ0lfT0NJUl9DT01QQVJUTUVOVF9JRD1cIm9jaWQxLmNvbXBhcnRtZW50Lm9jMS4uYWFhYWFhYS4uLlwiJyk7XG4gIH1cblxuICBsZXQgbmFtZXNwYWNlID0gcHJvY2Vzcy5lbnYuT0NJX05BTUVTUEFDRT8udHJpbSgpO1xuICBpZiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09ICd5b3VyLW5hbWVzcGFjZScpIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IGF3YWl0IGdldE5hbWVzcGFjZUZyb21PY2lTZGsoY29tcGFydG1lbnRJZCwgcmVnaW9uKTtcbiAgICBpZiAocmVzb2x2ZWQpIG5hbWVzcGFjZSA9IHJlc29sdmVkO1xuICAgIGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9ICd5b3VyLW5hbWVzcGFjZSc7XG4gICAgaWYgKG5hbWVzcGFjZSA9PT0gJ3lvdXItbmFtZXNwYWNlJykge1xuICAgICAgY29uc29sZS53YXJuKCfimqDvuI8gIE9DSV9OQU1FU1BBQ0Ugbm90IHNldCBhbmQgU0RLIGNvdWxkIG5vdCByZXNvbHZlIGl0LiBTZXQgT0NJX05BTUVTUEFDRSBvciBydW4gXCJvY2kgc2V0dXAgY29uZmlnXCIuJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzY292ZXJlZCA9IGRpc2NvdmVyRnJvbUZ1bmNZYW1sQW5kVGFyZ2V0KCk7XG5cbiAgY29uc3QgaW1hZ2VUYWcgPSBwcm9jZXNzLmVudi5PQ0lfSU1BR0VfVEFHPy50cmltKCkgfHwgZGlzY292ZXJlZC5pbWFnZVRhZyB8fCAnbGF0ZXN0JztcblxuICBsZXQgZG9ja2VyQ29udGV4dFBhdGggPSBkaXNjb3ZlcmVkLmRvY2tlckNvbnRleHRQYXRoO1xuICBpZiAoIWRvY2tlckNvbnRleHRQYXRoICYmIHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9KQVJfUEFUSD8udHJpbSgpKSB7XG4gICAgY29uc3QgcCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fSkFSX1BBVEgudHJpbSgpKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkgZG9ja2VyQ29udGV4dFBhdGggPSBmcy5zdGF0U3luYyhwKS5pc0RpcmVjdG9yeSgpID8gcCA6IHBhdGguZGlybmFtZShwKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXIgPSBwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fSEFORExFUj8udHJpbSgpIHx8IGRpc2NvdmVyZWQuaGFuZGxlcjtcbiAgY29uc3QgdXNlVGhpbkRvY2tlcmZpbGUgPSBkaXNjb3ZlcmVkLnVzZVRoaW5Eb2NrZXJmaWxlID8/IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgY29tcGFydG1lbnRJZCxcbiAgICBvY2lyQ29tcGFydG1lbnRJZDogb2NpckNvbXBhcnRtZW50SWQgfHwgdW5kZWZpbmVkLFxuICAgIHRlbmFuY3lJZCxcbiAgICByZWdpb24sXG4gICAgbmFtZXNwYWNlLFxuICAgIGZ1bmN0aW9uQXBwTmFtZTogcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0FQUF9OQU1FID8/IGRpc2NvdmVyZWQuZnVuY3Rpb25BcHBOYW1lID8/ICcnLFxuICAgIGZ1bmN0aW9uTmFtZTogcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX05BTUUgPz8gZGlzY292ZXJlZC5mdW5jdGlvbk5hbWUgPz8gJycsXG4gICAgZnVuY3Rpb25KYXJQYXRoOiBwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fSkFSX1BBVEg/LnRyaW0oKSB8fCB1bmRlZmluZWQsXG4gICAgZG9ja2VyQ29udGV4dFBhdGg6IGRvY2tlckNvbnRleHRQYXRoIHx8IHVuZGVmaW5lZCxcbiAgICBpbWFnZVRhZyxcbiAgICBoYW5kbGVyOiBoYW5kbGVyIHx8IHVuZGVmaW5lZCxcbiAgICB1c2VUaGluRG9ja2VyZmlsZSxcbiAgICBvY2lyUmVwb3NpdG9yeU5hbWU6IHByb2Nlc3MuZW52Lk9DSV9PQ0lSX1JFUE9TSVRPUllfTkFNRSB8fCB1bmRlZmluZWQsXG4gICAgYmFja2VuZDogYmFja2VuZENvbmZpZyxcbiAgfTtcbn1cbiJdfQ==