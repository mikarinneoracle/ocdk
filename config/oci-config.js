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
 * - OCI_FUNCTION_MEMORY_MB (function memory in MB; from func.yaml memory if unset)
 * - OCI_FUNCTION_TIMEOUT_SECONDS (function timeout in seconds; from func.yaml timeout if unset)
 * - OCI_FUNCTION_CONFIG (JSON object string for function config/env; merged with func.yaml config)
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
const VALID_MEMORY_MB = new Set([128, 256, 512, 1024, 2048, 3072]);
/**
 * Try to read memory (MB) from func.yaml. OCI allows 128, 256, 512, 1024, 2048, 3072.
 * Returns the number if present and valid; otherwise undefined.
 */
function getFuncYamlMemory(projectDir) {
    const p = path.join(projectDir, 'func.yaml');
    try {
        if (fs.existsSync(p)) {
            const content = fs.readFileSync(p, 'utf8');
            const m = content.match(/^\s*memory:\s*(\d+)\s*$/m);
            if (m) {
                const n = parseInt(m[1], 10);
                if (VALID_MEMORY_MB.has(n))
                    return n;
            }
        }
    }
    catch {
        // ignore
    }
    return undefined;
}
/**
 * Try to read timeout (seconds) from func.yaml. OCI max is 300.
 * Returns the number if present and in range 1–300; otherwise undefined.
 */
function getFuncYamlTimeout(projectDir) {
    const p = path.join(projectDir, 'func.yaml');
    try {
        if (fs.existsSync(p)) {
            const content = fs.readFileSync(p, 'utf8');
            const m = content.match(/^\s*timeout:\s*(\d+)\s*$/m);
            if (m) {
                const n = parseInt(m[1], 10);
                if (n >= 1 && n <= 300)
                    return n;
            }
        }
    }
    catch {
        // ignore
    }
    return undefined;
}
/**
 * Try to read config (key-value env) from func.yaml. Expects a top-level "config:" block with key: value lines.
 * Returns a record of string keys and string values; empty if none or parse error.
 */
function getFuncYamlConfig(projectDir) {
    const p = path.join(projectDir, 'func.yaml');
    try {
        if (!fs.existsSync(p))
            return undefined;
        const content = fs.readFileSync(p, 'utf8');
        const lines = content.split(/\r?\n/);
        let inConfig = false;
        const config = {};
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed === 'config:' || /^config\s*:\s*$/.test(trimmed)) {
                inConfig = true;
                continue;
            }
            if (inConfig) {
                if (trimmed !== '' && !line.startsWith(' ') && !line.startsWith('\t'))
                    break;
                const kv = line.match(/^\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*(.*)$/);
                if (kv) {
                    const key = kv[1].trim();
                    let val = kv[2].trim();
                    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                        val = val.slice(1, -1);
                    }
                    config[key] = val;
                }
            }
        }
        return Object.keys(config).length ? config : undefined;
    }
    catch {
        return undefined;
    }
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
    const memoryMb = getFuncYamlMemory(projectDir);
    const timeoutSeconds = getFuncYamlTimeout(projectDir);
    const config = getFuncYamlConfig(projectDir);
    return {
        functionName,
        functionAppName: process.env.OCI_FUNCTION_APP_NAME?.trim() || functionName,
        dockerContextPath: path.resolve(projectDir),
        imageTag: imageTag || undefined,
        handler: handler || undefined,
        useThinDockerfile,
        memoryMb,
        timeoutSeconds,
        config,
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
    const memoryEnv = process.env.OCI_FUNCTION_MEMORY_MB?.trim();
    const functionMemoryMb = memoryEnv
        ? String(parseInt(memoryEnv, 10))
        : (discovered.memoryMb != null ? String(discovered.memoryMb) : undefined);
    const timeoutEnv = process.env.OCI_FUNCTION_TIMEOUT_SECONDS?.trim();
    const functionTimeoutSeconds = timeoutEnv
        ? parseInt(timeoutEnv, 10)
        : discovered.timeoutSeconds;
    let functionConfig = discovered.config;
    const configEnv = process.env.OCI_FUNCTION_CONFIG?.trim();
    if (configEnv) {
        try {
            const parsed = JSON.parse(configEnv);
            functionConfig = { ...functionConfig, ...parsed };
        }
        catch {
            // ignore invalid JSON
        }
    }
    if (functionConfig && Object.keys(functionConfig).length === 0)
        functionConfig = undefined;
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
        functionMemoryMb: functionMemoryMb || undefined,
        functionTimeoutSeconds: functionTimeoutSeconds ?? undefined,
        functionConfig,
        backend: backendConfig,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NpLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZy9vY2ktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REgsa0NBRUM7QUFHRCx3Q0FLQztBQXdTRCxvQ0E2RUM7QUF0YkQsdUNBQXlCO0FBQ3pCLDJDQUE2QjtBQUM3Qix1Q0FBeUI7QUFDekIsbURBQXFDO0FBQ3JDLGlFQUFtRDtBQXdDbkQscUlBQXFJO0FBQ3hILFFBQUEsbUJBQW1CLEdBQTJCO0lBQ3pELGdCQUFnQixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUs7SUFDM0YsWUFBWSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUs7SUFDckYsZUFBZSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUs7SUFDdkYsWUFBWSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUs7SUFDOUYsWUFBWSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLO0lBQzdGLGFBQWEsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLO0lBQ2xHLGdCQUFnQixFQUFFLEtBQUs7Q0FDeEIsQ0FBQztBQUVGLFNBQWdCLFdBQVcsQ0FBQyxNQUFjO0lBQ3hDLE9BQU8s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dGVudCI6WyIvKipcbiAqIE9DSSBDb25maWd1cmF0aW9uXG4gKlxuICogU2V0IHRoZXNlIHZpYSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgb3IgdXBkYXRlIGRlZmF1bHRzOlxuICogLSBPQ0lfQ09NUEFSVE1FTlRfSURcbiAqIC0gT0NJX1RFTkFOQ1lfSURcbiAqIC0gT0NJX1JFR0lPTlxuICogLSBPQ0lfTkFNRVNQQUNFIChpZiB1bnNldCwgb2J0YWluZWQgdmlhIE9DSSBTREsgZ2V0TmFtZXNwYWNlKVxuICogLSBPQ0lfT0NJUl9DT01QQVJUTUVOVF9JRCAoZm9yIE9DSVI7IG11c3QgYmUgbm9uLXJvb3QgZm9yIGZ1bGwgc3RhY2spXG4gKiAtIE9DSV9GVU5DVElPTl9BUFBfTkFNRSAoRnVuY3Rpb25zIGFwcGxpY2F0aW9uIG5hbWU7IGRlZmF1bHQgZW1wdHkpXG4gKiAtIE9DSV9GVU5DVElPTl9OQU1FIChGdW5jdGlvbiBuYW1lOyBkZWZhdWx0IGVtcHR5KVxuICogLSBPQ0lfRlVOQ1RJT05fSEFORExFUiAoSmF2YSBGREsgQ01EIGhhbmRsZXIsIGUuZy4gY29tLmV4YW1wbGUuSGFuZGxlcjo6aGFuZGxlUmVxdWVzdDsgZnJvbSBmdW5jLnlhbWwgY21kL2hhbmRsZXIgaWYgdW5zZXQpXG4gKiAtIE9DSV9GVU5DVElPTl9KQVJfUEFUSCAoUGF0aCB0byBKQVIgb3IgcHJvamVjdCBkaXIgZm9yIGZ1bmN0aW9uIGltYWdlOyBkZWZhdWx0IGVtcHR5KVxuICogLSBPQ0lfRlVOQ1RJT05fTUVNT1JZX01CIChmdW5jdGlvbiBtZW1vcnkgaW4gTUI7IGZyb20gZnVuYy55YW1sIG1lbW9yeSBpZiB1bnNldClcbiAqIC0gT0NJX0ZVTkNUSU9OX1RJTUVPVVRfU0VDT05EUyAoZnVuY3Rpb24gdGltZW91dCBpbiBzZWNvbmRzOyBmcm9tIGZ1bmMueWFtbCB0aW1lb3V0IGlmIHVuc2V0KVxuICogLSBPQ0lfRlVOQ1RJT05fQ09ORklHIChKU09OIG9iamVjdCBzdHJpbmcgZm9yIGZ1bmN0aW9uIGNvbmZpZy9lbnY7IG1lcmdlZCB3aXRoIGZ1bmMueWFtbCBjb25maWcpXG4gKiAtIE9DREtfUFJPSkVDVF9ESVIgKHNldCBieSBvY2RrIENMSSB0byBjYWxsZXIgY3dkOyB1c2VkIHRvIGRpc2NvdmVyIGZ1bmMueWFtbCBhbmQgdGFyZ2V0LylcbiAqIC0gT0NJX1NUQVRFX0JVQ0tFVCAoZm9yIHJlbW90ZSBzdGF0ZSlcbiAqIC0gT0NJX1NUQVRFX0JBQ0tFTkRfVFlQRSAob2NpfGh0dHB8bG9jYWwpXG4gKlxuICogV2hlbiBPQ0RLX1BST0pFQ1RfRElSIGlzIHNldCAoZS5nLiBydW5uaW5nIGBucHggb2NkayBkZXBsb3lgIGZyb20gYSBKYXZhIHByb2plY3QpLCBjb25maWdcbiAqIGRpc2NvdmVycyBlaXRoZXIgdGFyZ2V0LyouamFyIG9yIHBvbS54bWwrc3JjLyAoYW5kIG9wdGlvbmFsbHkgZnVuYy55YW1sIG5hbWUsIHZlcnNpb24sIGNtZC9oYW5kbGVyKS5cbiAqIE5vIERvY2tlcmZpbGUgaXMgcmVxdWlyZWTigJR0aGUgc3RhY2sgZ2VuZXJhdGVzIG9uZSBpbiBsb2NhbC1leGVjIChleGNsdWRpbmcgbm9kZV9tb2R1bGVzIHZpYSAuZG9ja2VyaWdub3JlKSxcbiAqIHRoZW4gYnVpbGRzLCB0YWdzIChmcm9tIGZ1bmMueWFtbCB2ZXJzaW9uKSwgYW5kIHB1c2hlcyB0byBPQ0lSLlxuICovXG5cbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XG5pbXBvcnQgKiBhcyBjb21tb24gZnJvbSAnb2NpLWNvbW1vbic7XG5pbXBvcnQgKiBhcyBvYmplY3RzdG9yYWdlIGZyb20gJ29jaS1vYmplY3RzdG9yYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBPY2lCYWNrZW5kQ29uZmlnIHtcbiAgdHlwZTogJ29jaScgfCAnaHR0cCcgfCAnbG9jYWwnO1xuICBidWNrZXQ/OiBzdHJpbmc7XG4gIGtleT86IHN0cmluZztcbiAgYWRkcmVzcz86IHN0cmluZztcbiAgdXBkYXRlTWV0aG9kPzogc3RyaW5nO1xuICBsb2NrQWRkcmVzcz86IHN0cmluZztcbiAgdW5sb2NrQWRkcmVzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPY2lDb25maWcge1xuICBjb21wYXJ0bWVudElkOiBzdHJpbmc7XG4gIG9jaXJDb21wYXJ0bWVudElkPzogc3RyaW5nO1xuICB0ZW5hbmN5SWQ6IHN0cmluZztcbiAgcmVnaW9uOiBzdHJpbmc7XG4gIG5hbWVzcGFjZTogc3RyaW5nO1xuICBmdW5jdGlvbkFwcE5hbWU6IHN0cmluZztcbiAgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG4gIC8qKiBQYXRoIHRvIEpBUiBvciBEb2NrZXJmaWxlIGNvbnRleHQgZm9yIGZ1bmN0aW9uIGltYWdlOyBlbXB0eSA9IG5vIGJ1aWxkL2RlcGxveS4gKi9cbiAgZnVuY3Rpb25KYXJQYXRoPzogc3RyaW5nO1xuICAvKiogUGF0aCB0byBkaXJlY3RvcnkgY29udGFpbmluZyB0YXJnZXQvIChkaXNjb3ZlcmVkOyBEb2NrZXJmaWxlIGlzIGdlbmVyYXRlZCBpbiBsb2NhbC1leGVjKS4gKi9cbiAgZG9ja2VyQ29udGV4dFBhdGg/OiBzdHJpbmc7XG4gIC8qKiBJbWFnZSB0YWcgZm9yIE9DSVIgKGZyb20gZnVuYy55YW1sIHZlcnNpb24gb3IgT0NJX0lNQUdFX1RBRzsgZGVmYXVsdCAnbGF0ZXN0JykuICovXG4gIGltYWdlVGFnPzogc3RyaW5nO1xuICAvKiogSmF2YSBGREsgQ01EIGhhbmRsZXIgKGZyb20gZnVuYy55YW1sIGNtZC9oYW5kbGVyIG9yIE9DSV9GVU5DVElPTl9IQU5ETEVSOyBkZWZhdWx0IGJlbG93KS4gKi9cbiAgaGFuZGxlcj86IHN0cmluZztcbiAgLyoqIFdoZW4gdHJ1ZSwgZGVwbG95IHVzZXMgYSB0aGluIERvY2tlcmZpbGUgKENPUFkgdGFyZ2V0LyouamFyIG9ubHkpOyBmdWxsIE1hdmVuIGJ1aWxkIG9ubHkgaW4gcmVkZXBsb3k6ZnVuY3Rpb24uICovXG4gIHVzZVRoaW5Eb2NrZXJmaWxlPzogYm9vbGVhbjtcbiAgb2NpclJlcG9zaXRvcnlOYW1lPzogc3RyaW5nO1xuICAvKiogRnVuY3Rpb24gbWVtb3J5IGluIE1CICgxMjgsIDI1NiwgNTEyLCAxMDI0LCAyMDQ4LCAzMDcyKS4gRnJvbSBmdW5jLnlhbWwgbWVtb3J5IG9yIE9DSV9GVU5DVElPTl9NRU1PUllfTUIuICovXG4gIGZ1bmN0aW9uTWVtb3J5TWI/OiBzdHJpbmc7XG4gIC8qKiBGdW5jdGlvbiB0aW1lb3V0IGluIHNlY29uZHMgKDHigJMzMDApLiBGcm9tIGZ1bmMueWFtbCB0aW1lb3V0IG9yIE9DSV9GVU5DVElPTl9USU1FT1VUX1NFQ09ORFMuICovXG4gIGZ1bmN0aW9uVGltZW91dFNlY29uZHM/OiBudW1iZXI7XG4gIC8qKiBGdW5jdGlvbiBjb25maWcvZW52IGtleS12YWx1ZS4gRnJvbSBmdW5jLnlhbWwgY29uZmlnIG9yIE9DSV9GVU5DVElPTl9DT05GSUcgKEpTT04gb2JqZWN0IHN0cmluZykuICovXG4gIGZ1bmN0aW9uQ29uZmlnPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgYmFja2VuZD86IE9jaUJhY2tlbmRDb25maWc7XG59XG5cbi8qKiBPQ0lSIHNob3J0IHJlZ2lvbiBrZXlzIChlLmcuIGV1LWZyYW5rZnVydC0xIC0+IGZyYSkuIFVzZWQgc28gbG9naW4sIGJ1aWxkLCBwdXNoIGFuZCBmdW5jdGlvbiBpbWFnZSBhbGwgdXNlIHNhbWUgcmVnaXN0cnkgaG9zdC4gKi9cbmV4cG9ydCBjb25zdCBSRUdJT05fVE9fT0NJUl9IT1NUOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnZXUtZnJhbmtmdXJ0LTEnOiAnZnJhJywgJ3VzLXBob2VuaXgtMSc6ICdwaHgnLCAndXMtYXNoYnVybi0xJzogJ2lhZCcsICd1ay1sb25kb24tMSc6ICdsaHInLFxuICAnYXAtdG9reW8tMSc6ICducnQnLCAnYXAtbXVtYmFpLTEnOiAnYm9tJywgJ2FwLXNlb3VsLTEnOiAnaWNuJywgJ2NhLXRvcm9udG8tMSc6ICd5eXonLFxuICAnc2Etc2FvcGF1bG8tMSc6ICdncnUnLCAnYXAtc3lkbmV5LTEnOiAnc3lkJywgJ2V1LXp1cmljaC0xJzogJ3pyaCcsICdtZS1kdWJhaS0xJzogJ2R4YicsXG4gICdhcC1vc2FrYS0xJzogJ2tpeCcsICdldS1hbXN0ZXJkYW0tMSc6ICdhbXMnLCAnYXAtc2luZ2Fwb3JlLTEnOiAnc2luJywgJ2FwLWh5ZGVyYWJhZC0xJzogJ2h5ZCcsXG4gICdldS1taWxhbi0xJzogJ214cCcsICdzYS1zYW50aWFnby0xJzogJ3NjbCcsICdhcC1tZWxib3VybmUtMSc6ICdtZWwnLCAnZXUtc3RvY2tob2xtLTEnOiAnYXJuJyxcbiAgJ21lLWplZGRhaC0xJzogJ2plZCcsICdhZi1qb2hhbm5lc2J1cmctMSc6ICdqbmInLCAnaWwtamVydXNhbGVtLTEnOiAndGx2JywgJ214LXF1ZXJldGFyby0xJzogJ3FybycsXG4gICdldS1tYXJzZWlsbGUtMSc6ICdtcnMnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9jaXJIb3N0S2V5KHJlZ2lvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIFJFR0lPTl9UT19PQ0lSX0hPU1RbcmVnaW9uXSA/PyByZWdpb247XG59XG5cbi8qKiBGdWxsIE9DSVIgaW1hZ2UgVVJMIGZvciB0aGUgZnVuY3Rpb24gKHJlZ2lzdHJ5L25hbWVzcGFjZS9yZXBvOnRhZykuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2NpSW1hZ2VVcmwoY29uZmlnOiBPY2lDb25maWcpOiBzdHJpbmcge1xuICBjb25zdCByZWdpc3RyeSA9IGAke29jaXJIb3N0S2V5KGNvbmZpZy5yZWdpb24pfS5vY2lyLmlvYDtcbiAgY29uc3QgcmVwbyA9IGNvbmZpZy5vY2lyUmVwb3NpdG9yeU5hbWUgfHwgY29uZmlnLmZ1bmN0aW9uTmFtZSB8fCAnb2NpLWZ1bmN0aW9uJztcbiAgY29uc3QgdGFnID0gY29uZmlnLmltYWdlVGFnIHx8ICdsYXRlc3QnO1xuICByZXR1cm4gYCR7cmVnaXN0cnl9LyR7Y29uZmlnLm5hbWVzcGFjZX0vJHtyZXBvfToke3RhZ31gO1xufVxuXG4vKipcbiAqIFRyeSB0byByZWFkIGZ1bmN0aW9uIG5hbWUgZnJvbSBmdW5jLnlhbWwgKE9DSSBGdW5jdGlvbnMgZm9ybWF0KS5cbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBcIm5hbWU6XCIgbGluZSwgdHJpbW1lZC5cbiAqL1xuZnVuY3Rpb24gZ2V0RnVuY1lhbWxOYW1lKHByb2plY3REaXI6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHAgPSBwYXRoLmpvaW4ocHJvamVjdERpciwgJ2Z1bmMueWFtbCcpO1xuICB0cnkge1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHAsICd1dGY4Jyk7XG4gICAgICBjb25zdCBtID0gY29udGVudC5tYXRjaCgvXlxccypuYW1lOlxccypbXCInXT8oW15cIidcXHNcXG5dKylbXCInXT8vbSk7XG4gICAgICBpZiAobSkgcmV0dXJuIG1bMV0udHJpbSgpO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBUcnkgdG8gcmVhZCBjbWQvaGFuZGxlciBmcm9tIGZ1bmMueWFtbCAoT0NJL0ZuIGZvcm1hdCkuXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBcImNtZDpcIiBvciBcImhhbmRsZXI6XCIgbGluZSwgdHJpbW1lZDsgdXNlZCBhcyBEb2NrZXIgQ01EIGZvciBKYXZhIEZESy5cbiAqL1xuZnVuY3Rpb24gZ2V0RnVuY1lhbWxIYW5kbGVyKHByb2plY3REaXI6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHAgPSBwYXRoLmpvaW4ocHJvamVjdERpciwgJ2Z1bmMueWFtbCcpO1xuICB0cnkge1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHAsICd1dGY4Jyk7XG4gICAgICBjb25zdCBjbWRNYXRjaCA9IGNvbnRlbnQubWF0Y2goL15cXHMqY21kOlxccypbXCInXT8oW15cIidcXG5dKylbXCInXT8vbSk7XG4gICAgICBpZiAoY21kTWF0Y2gpIHJldHVybiBjbWRNYXRjaFsxXS50cmltKCk7XG4gICAgICBjb25zdCBoYW5kbGVyTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9eXFxzKmhhbmRsZXI6XFxzKltcIiddPyhbXlwiJ1xcbl0rKVtcIiddPy9tKTtcbiAgICAgIGlmIChoYW5kbGVyTWF0Y2gpIHJldHVybiBoYW5kbGVyTWF0Y2hbMV0udHJpbSgpO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBUcnkgdG8gcmVhZCB2ZXJzaW9uIGZyb20gZnVuYy55YW1sICh1c2VkIGFzIE9DSVIgaW1hZ2UgdGFnKS5cbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBcInZlcnNpb246XCIgbGluZSwgdHJpbW1lZDsgc2FuaXRpemVkIGZvciBEb2NrZXIgdGFnIChhLXpBLVowLTlfLi0pLlxuICovXG5mdW5jdGlvbiBnZXRGdW5jWWFtbFZlcnNpb24ocHJvamVjdERpcjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgcCA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAnZnVuYy55YW1sJyk7XG4gIHRyeSB7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocCkpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocCwgJ3V0ZjgnKTtcbiAgICAgIGNvbnN0IG0gPSBjb250ZW50Lm1hdGNoKC9eXFxzKnZlcnNpb246XFxzKltcIiddPyhbXlwiJ1xcc1xcbl0rKVtcIiddPy9tKTtcbiAgICAgIGlmIChtKSB7XG4gICAgICAgIGNvbnN0IHJhdyA9IG1bMV0udHJpbSgpO1xuICAgICAgICBjb25zdCBzYW5pdGl6ZWQgPSByYXcucmVwbGFjZSgvW15hLXpBLVowLTlfLi1dL2csICctJykucmVwbGFjZSgvLSsvZywgJy0nKS5yZXBsYWNlKC9eLXwtJC9nLCAnJyk7XG4gICAgICAgIHJldHVybiBzYW5pdGl6ZWQgfHwgdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgVkFMSURfTUVNT1JZX01CID0gbmV3IFNldChbMTI4LCAyNTYsIDUxMiwgMTAyNCwgMjA0OCwgMzA3Ml0pO1xuXG4vKipcbiAqIFRyeSB0byByZWFkIG1lbW9yeSAoTUIpIGZyb20gZnVuYy55YW1sLiBPQ0kgYWxsb3dzIDEyOCwgMjU2LCA1MTIsIDEwMjQsIDIwNDgsIDMwNzIuXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgaWYgcHJlc2VudCBhbmQgdmFsaWQ7IG90aGVyd2lzZSB1bmRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmNZYW1sTWVtb3J5KHByb2plY3REaXI6IHN0cmluZyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHAgPSBwYXRoLmpvaW4ocHJvamVjdERpciwgJ2Z1bmMueWFtbCcpO1xuICB0cnkge1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHAsICd1dGY4Jyk7XG4gICAgICBjb25zdCBtID0gY29udGVudC5tYXRjaCgvXlxccyptZW1vcnk6XFxzKihcXGQrKVxccyokL20pO1xuICAgICAgaWYgKG0pIHtcbiAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KG1bMV0sIDEwKTtcbiAgICAgICAgaWYgKFZBTElEX01FTU9SWV9NQi5oYXMobikpIHJldHVybiBuO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBUcnkgdG8gcmVhZCB0aW1lb3V0IChzZWNvbmRzKSBmcm9tIGZ1bmMueWFtbC4gT0NJIG1heCBpcyAzMDAuXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgaWYgcHJlc2VudCBhbmQgaW4gcmFuZ2UgMeKAkzMwMDsgb3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAqL1xuZnVuY3Rpb24gZ2V0RnVuY1lhbWxUaW1lb3V0KHByb2plY3REaXI6IHN0cmluZyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHAgPSBwYXRoLmpvaW4ocHJvamVjdERpciwgJ2Z1bmMueWFtbCcpO1xuICB0cnkge1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHAsICd1dGY4Jyk7XG4gICAgICBjb25zdCBtID0gY29udGVudC5tYXRjaCgvXlxccyp0aW1lb3V0OlxccyooXFxkKylcXHMqJC9tKTtcbiAgICAgIGlmIChtKSB7XG4gICAgICAgIGNvbnN0IG4gPSBwYXJzZUludChtWzFdLCAxMCk7XG4gICAgICAgIGlmIChuID49IDEgJiYgbiA8PSAzMDApIHJldHVybiBuO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBUcnkgdG8gcmVhZCBjb25maWcgKGtleS12YWx1ZSBlbnYpIGZyb20gZnVuYy55YW1sLiBFeHBlY3RzIGEgdG9wLWxldmVsIFwiY29uZmlnOlwiIGJsb2NrIHdpdGgga2V5OiB2YWx1ZSBsaW5lcy5cbiAqIFJldHVybnMgYSByZWNvcmQgb2Ygc3RyaW5nIGtleXMgYW5kIHN0cmluZyB2YWx1ZXM7IGVtcHR5IGlmIG5vbmUgb3IgcGFyc2UgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmNZYW1sQ29uZmlnKHByb2plY3REaXI6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCB1bmRlZmluZWQge1xuICBjb25zdCBwID0gcGF0aC5qb2luKHByb2plY3REaXIsICdmdW5jLnlhbWwnKTtcbiAgdHJ5IHtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMocCkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwLCAndXRmOCcpO1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgvXFxyP1xcbi8pO1xuICAgIGxldCBpbkNvbmZpZyA9IGZhbHNlO1xuICAgIGNvbnN0IGNvbmZpZzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xuICAgICAgaWYgKHRyaW1tZWQgPT09ICdjb25maWc6JyB8fCAvXmNvbmZpZ1xccyo6XFxzKiQvLnRlc3QodHJpbW1lZCkpIHtcbiAgICAgICAgaW5Db25maWcgPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbkNvbmZpZykge1xuICAgICAgICBpZiAodHJpbW1lZCAhPT0gJycgJiYgIWxpbmUuc3RhcnRzV2l0aCgnICcpICYmICFsaW5lLnN0YXJ0c1dpdGgoJ1xcdCcpKSBicmVhaztcbiAgICAgICAgY29uc3Qga3YgPSBsaW5lLm1hdGNoKC9eXFxzKyhbYS16QS1aX11bYS16QS1aMC05X10qKVxccyo6XFxzKiguKikkLyk7XG4gICAgICAgIGlmIChrdikge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGt2WzFdLnRyaW0oKTtcbiAgICAgICAgICBsZXQgdmFsID0ga3ZbMl0udHJpbSgpO1xuICAgICAgICAgIGlmICgodmFsLnN0YXJ0c1dpdGgoJ1wiJykgJiYgdmFsLmVuZHNXaXRoKCdcIicpKSB8fCAodmFsLnN0YXJ0c1dpdGgoXCInXCIpICYmIHZhbC5lbmRzV2l0aChcIidcIikpKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25maWdba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGggPyBjb25maWcgOiB1bmRlZmluZWQ7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqIFJlYWQgdGVuYW5jeSBhbmQgcmVnaW9uIGZyb20gT0NJIENMSSBjb25maWcuIERlZmF1bHQgZmlsZTogfi8ub2NpL2NvbmZpZywgZGVmYXVsdCBwcm9maWxlOiBERUZBVUxULiAqL1xuZnVuY3Rpb24gcmVhZFRlbmFuY3lBbmRSZWdpb25Gcm9tQ2xpQ29uZmlnKCk6IHsgdGVuYW5jeT86IHN0cmluZzsgcmVnaW9uPzogc3RyaW5nIH0ge1xuICBjb25zdCBjb25maWdQYXRoID0gcHJvY2Vzcy5lbnYuT0NJX0NPTkZJR19GSUxFIHx8IHBhdGguam9pbihvcy5ob21lZGlyKCksICcub2NpJywgJ2NvbmZpZycpO1xuICBjb25zdCBwcm9maWxlID0gcHJvY2Vzcy5lbnYuT0NJX0NMSV9QUk9GSUxFIHx8ICdERUZBVUxUJztcbiAgdHJ5IHtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoY29uZmlnUGF0aCkpIHJldHVybiB7fTtcbiAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZ1BhdGgsICd1dGYtOCcpO1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgvXFxyP1xcbi8pO1xuICAgIGxldCBpblByb2ZpbGUgPSBmYWxzZTtcbiAgICBjb25zdCByZXN1bHQ6IHsgdGVuYW5jeT86IHN0cmluZzsgcmVnaW9uPzogc3RyaW5nIH0gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lLnRyaW0oKTtcbiAgICAgIGlmICh0cmltbWVkLnN0YXJ0c1dpdGgoJ1snKSAmJiB0cmltbWVkLmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgaW5Qcm9maWxlID0gdHJpbW1lZC5zbGljZSgxLCAtMSkgPT09IHByb2ZpbGU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFpblByb2ZpbGUpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZXEgPSB0cmltbWVkLmluZGV4T2YoJz0nKTtcbiAgICAgIGlmIChlcSA8PSAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGtleSA9IHRyaW1tZWQuc2xpY2UoMCwgZXEpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgdmFsdWUgPSB0cmltbWVkLnNsaWNlKGVxICsgMSkudHJpbSgpO1xuICAgICAgaWYgKGtleSA9PT0gJ3RlbmFuY3knKSByZXN1bHQudGVuYW5jeSA9IHZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ3JlZ2lvbicpIHJlc3VsdC5yZWdpb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbi8qKiBHZXQgb2JqZWN0IHN0b3JhZ2UgbmFtZXNwYWNlIHZpYSBPQ0kgU0RLIChzYW1lIGFzIFwib2NpIG9zIG5zIGdldFwiKS4gVXNlcyB+Ly5vY2kvY29uZmlnLCBERUZBVUxUIHByb2ZpbGUuICovXG5hc3luYyBmdW5jdGlvbiBnZXROYW1lc3BhY2VGcm9tT2NpU2RrKGNvbXBhcnRtZW50SWQ6IHN0cmluZywgcmVnaW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCBjb25maWdQYXRoID0gcHJvY2Vzcy5lbnYuT0NJX0NPTkZJR19GSUxFIHx8IHBhdGguam9pbihvcy5ob21lZGlyKCksICcub2NpJywgJ2NvbmZpZycpO1xuICBjb25zdCBwcm9maWxlID0gcHJvY2Vzcy5lbnYuT0NJX0NMSV9QUk9GSUxFIHx8ICdERUZBVUxUJztcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBjb21tb24uQ29uZmlnRmlsZUF1dGhlbnRpY2F0aW9uRGV0YWlsc1Byb3ZpZGVyKGNvbmZpZ1BhdGgsIHByb2ZpbGUpO1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBvYmplY3RzdG9yYWdlLk9iamVjdFN0b3JhZ2VDbGllbnQoeyBhdXRoZW50aWNhdGlvbkRldGFpbHNQcm92aWRlcjogcHJvdmlkZXIgfSk7XG4gICAgY2xpZW50LnJlZ2lvbklkID0gcmVnaW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LmdldE5hbWVzcGFjZSh7XG4gICAgICBjb21wYXJ0bWVudElkLFxuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZS52YWx1ZT8udHJpbSgpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogRmluZCBhIEpBUiB1bmRlciB0YXJnZXQvIChwcmVmZXIgb25lIG1hdGNoaW5nIG5hbWUsIGVsc2UgZmlyc3QgLmphcikuXG4gKi9cbmZ1bmN0aW9uIGZpbmRKYXJJblRhcmdldChwcm9qZWN0RGlyOiBzdHJpbmcsIGZ1bmN0aW9uTmFtZT86IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAndGFyZ2V0Jyk7XG4gIGlmICghZnMuZXhpc3RzU3luYyh0YXJnZXREaXIpKSByZXR1cm4gdW5kZWZpbmVkO1xuICB0cnkge1xuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmModGFyZ2V0RGlyKTtcbiAgICBjb25zdCBqYXJzID0gZmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuamFyJykgJiYgIWYuZW5kc1dpdGgoJy1zb3VyY2VzLmphcicpKTtcbiAgICBpZiAoamFycy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKGZ1bmN0aW9uTmFtZSkge1xuICAgICAgY29uc3QgbWF0Y2ggPSBqYXJzLmZpbmQoKGopID0+IGoudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgaWYgKG1hdGNoKSByZXR1cm4gcGF0aC5qb2luKHRhcmdldERpciwgbWF0Y2gpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5qb2luKHRhcmdldERpciwgamFyc1swXSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqIFRydWUgaWYgcHJvamVjdCBoYXMgcG9tLnhtbCBhbmQgc3JjLyAoTWF2ZW4gc291cmNlIGxheW91dCBmb3IgYnVpbGQtZnJvbS1zb3VyY2UgRG9ja2VyZmlsZSkuICovXG5mdW5jdGlvbiBoYXNQb21BbmRTcmMocHJvamVjdERpcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHBvbSA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAncG9tLnhtbCcpO1xuICBjb25zdCBzcmMgPSBwYXRoLmpvaW4ocHJvamVjdERpciwgJ3NyYycpO1xuICB0cnkge1xuICAgIHJldHVybiBmcy5leGlzdHNTeW5jKHBvbSkgJiYgZnMuZXhpc3RzU3luYyhzcmMpICYmIGZzLnN0YXRTeW5jKHNyYykuaXNEaXJlY3RvcnkoKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc2NvdmVyRnJvbUZ1bmNZYW1sQW5kVGFyZ2V0KCk6IHtcbiAgZnVuY3Rpb25OYW1lPzogc3RyaW5nO1xuICBmdW5jdGlvbkFwcE5hbWU/OiBzdHJpbmc7XG4gIGRvY2tlckNvbnRleHRQYXRoPzogc3RyaW5nO1xuICBpbWFnZVRhZz86IHN0cmluZztcbiAgaGFuZGxlcj86IHN0cmluZztcbiAgdXNlVGhpbkRvY2tlcmZpbGU/OiBib29sZWFuO1xuICBtZW1vcnlNYj86IG51bWJlcjtcbiAgdGltZW91dFNlY29uZHM/OiBudW1iZXI7XG4gIGNvbmZpZz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG59IHtcbiAgbGV0IHByb2plY3REaXIgPSBwcm9jZXNzLmVudi5PQ0RLX1BST0pFQ1RfRElSPy50cmltKCk7XG4gIGlmICghcHJvamVjdERpcikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcub2Nkay1wcm9qZWN0LWRpcicpO1xuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocCkpIHByb2plY3REaXIgPSBmcy5yZWFkRmlsZVN5bmMocCwgJ3V0ZjgnKS50cmltKCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBpZ25vcmVcbiAgICB9XG4gIH1cbiAgaWYgKCFwcm9qZWN0RGlyICYmIHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9KQVJfUEFUSD8udHJpbSgpKSB7XG4gICAgY29uc3QgcCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fSkFSX1BBVEgudHJpbSgpKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkgcHJvamVjdERpciA9IGZzLnN0YXRTeW5jKHApLmlzRGlyZWN0b3J5KCkgPyBwIDogcGF0aC5kaXJuYW1lKHApO1xuICB9XG4gIGlmICghcHJvamVjdERpcikgcHJvamVjdERpciA9IHByb2Nlc3MuY3dkKCk7XG4gIHByb2plY3REaXIgPSBwcm9qZWN0RGlyID8gcGF0aC5yZXNvbHZlKHByb2plY3REaXIpIDogJyc7XG4gIGlmICghcHJvamVjdERpciB8fCAhZnMuZXhpc3RzU3luYyhwcm9qZWN0RGlyKSkgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IG5hbWVGcm9tWWFtbCA9IGdldEZ1bmNZYW1sTmFtZShwcm9qZWN0RGlyKTtcbiAgY29uc3QgamFyUGF0aCA9IGZpbmRKYXJJblRhcmdldChwcm9qZWN0RGlyLCBuYW1lRnJvbVlhbWwgfHwgdW5kZWZpbmVkKTtcbiAgY29uc3QgaGFzU291cmNlID0gaGFzUG9tQW5kU3JjKHByb2plY3REaXIpO1xuICBpZiAoIWphclBhdGggJiYgIWhhc1NvdXJjZSkgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IGZ1bmN0aW9uTmFtZSA9IHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9OQU1FPy50cmltKCkgfHwgbmFtZUZyb21ZYW1sIHx8IHBhdGguYmFzZW5hbWUocHJvamVjdERpcikgfHwgJ29jaS1mdW5jdGlvbic7XG4gIGNvbnN0IGltYWdlVGFnID0gcHJvY2Vzcy5lbnYuT0NJX0lNQUdFX1RBRz8udHJpbSgpIHx8IGdldEZ1bmNZYW1sVmVyc2lvbihwcm9qZWN0RGlyKTtcbiAgY29uc3QgaGFuZGxlciA9IHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9IQU5ETEVSPy50cmltKCkgfHwgZ2V0RnVuY1lhbWxIYW5kbGVyKHByb2plY3REaXIpO1xuICBjb25zdCB1c2VUaGluRG9ja2VyZmlsZSA9ICEhamFyUGF0aDtcbiAgY29uc3QgbWVtb3J5TWIgPSBnZXRGdW5jWWFtbE1lbW9yeShwcm9qZWN0RGlyKTtcbiAgY29uc3QgdGltZW91dFNlY29uZHMgPSBnZXRGdW5jWWFtbFRpbWVvdXQocHJvamVjdERpcik7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEZ1bmNZYW1sQ29uZmlnKHByb2plY3REaXIpO1xuXG4gIHJldHVybiB7XG4gICAgZnVuY3Rpb25OYW1lLFxuICAgIGZ1bmN0aW9uQXBwTmFtZTogcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0FQUF9OQU1FPy50cmltKCkgfHwgZnVuY3Rpb25OYW1lLFxuICAgIGRvY2tlckNvbnRleHRQYXRoOiBwYXRoLnJlc29sdmUocHJvamVjdERpciksXG4gICAgaW1hZ2VUYWc6IGltYWdlVGFnIHx8IHVuZGVmaW5lZCxcbiAgICBoYW5kbGVyOiBoYW5kbGVyIHx8IHVuZGVmaW5lZCxcbiAgICB1c2VUaGluRG9ja2VyZmlsZSxcbiAgICBtZW1vcnlNYixcbiAgICB0aW1lb3V0U2Vjb25kcyxcbiAgICBjb25maWcsXG4gIH07XG59XG5cbmNvbnN0IGJhY2tlbmRUeXBlID0gKHByb2Nlc3MuZW52Lk9DSV9TVEFURV9CQUNLRU5EX1RZUEUgfHwgJ2xvY2FsJykgYXMgJ29jaScgfCAnaHR0cCcgfCAnbG9jYWwnO1xuXG5jb25zdCBiYWNrZW5kQ29uZmlnOiBPY2lCYWNrZW5kQ29uZmlnIHwgdW5kZWZpbmVkID0gYmFja2VuZFR5cGUgPT09ICdsb2NhbCdcbiAgPyB1bmRlZmluZWRcbiAgOiBiYWNrZW5kVHlwZSA9PT0gJ29jaSdcbiAgICA/IHtcbiAgICAgICAgdHlwZTogJ29jaScsXG4gICAgICAgIGJ1Y2tldDogcHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0JVQ0tFVCB8fCAndGYtc3RhdGUnLFxuICAgICAgICBrZXk6IHByb2Nlc3MuZW52Lk9DSV9TVEFURV9LRVkgfHwgJ2Z1bmN0aW9uLXN0YWNrL3RlcnJhZm9ybS50ZnN0YXRlJyxcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgdHlwZTogJ2h0dHAnLFxuICAgICAgICBhZGRyZXNzOiBwcm9jZXNzLmVudi5PQ0lfU1RBVEVfSFRUUF9BRERSRVNTIHx8ICcnLFxuICAgICAgICB1cGRhdGVNZXRob2Q6IHByb2Nlc3MuZW52Lk9DSV9TVEFURV9IVFRQX1VQREFURV9NRVRIT0QgfHwgJ1BVVCcsXG4gICAgICAgIGxvY2tBZGRyZXNzOiBwcm9jZXNzLmVudi5PQ0lfU1RBVEVfSFRUUF9MT0NLX0FERFJFU1MsXG4gICAgICAgIHVubG9ja0FkZHJlc3M6IHByb2Nlc3MuZW52Lk9DSV9TVEFURV9IVFRQX1VOTE9DS19BRERSRVNTLFxuICAgICAgfTtcblxuLyoqXG4gKiBMb2FkIE9DSSBjb25maWcgZnJvbSBlbnYgYW5kIENMSSBjb25maWcuIFdoZW4gT0NJX05BTUVTUEFDRSBpcyB1bnNldCwgZmV0Y2hlcyBpdCB2aWEgT0NJIFNESyAoZ2V0TmFtZXNwYWNlKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9jaUNvbmZpZygpOiBQcm9taXNlPE9jaUNvbmZpZz4ge1xuICBjb25zdCBjbGlDb25maWcgPSByZWFkVGVuYW5jeUFuZFJlZ2lvbkZyb21DbGlDb25maWcoKTtcbiAgY29uc3QgY29tcGFydG1lbnRJZCA9IHByb2Nlc3MuZW52Lk9DSV9DT01QQVJUTUVOVF9JRD8udHJpbSgpIHx8ICdvY2lkMS5jb21wYXJ0bWVudC5vYzEuLmFhYWFhYWEuLi4nO1xuICBjb25zdCBvY2lyQ29tcGFydG1lbnRJZCA9IHByb2Nlc3MuZW52Lk9DSV9PQ0lSX0NPTVBBUlRNRU5UX0lEPy50cmltKCkgfHwgcHJvY2Vzcy5lbnYuT0NJX0NPTVBBUlRNRU5UX0lEPy50cmltKCkgfHwgY29tcGFydG1lbnRJZDtcbiAgY29uc3QgdGVuYW5jeUlkID0gcHJvY2Vzcy5lbnYuT0NJX1RFTkFOQ1lfSUQ/LnRyaW0oKSB8fCBjbGlDb25maWcudGVuYW5jeT8udHJpbSgpIHx8ICdvY2lkMS50ZW5hbmN5Lm9jMS4uYWFhYWFhYS4uLic7XG4gIGNvbnN0IHJlZ2lvbiA9IHByb2Nlc3MuZW52Lk9DSV9SRUdJT04/LnRyaW0oKSB8fCBjbGlDb25maWcucmVnaW9uPy50cmltKCkgfHwgJ2V1LWZyYW5rZnVydC0xJztcblxuICBpZiAoIW9jaXJDb21wYXJ0bWVudElkIHx8IG9jaXJDb21wYXJ0bWVudElkLmluY2x1ZGVzKCdyb290JykpIHtcbiAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyAgV0FSTklORzogT0NJX09DSVJfQ09NUEFSVE1FTlRfSUQgbm90IHNldCBvciBzZXQgdG8gcm9vdCBjb21wYXJ0bWVudC4nKTtcbiAgICBjb25zb2xlLndhcm4oJyAgIFBsZWFzZSBzZXQgT0NJX09DSVJfQ09NUEFSVE1FTlRfSUQgdG8geW91ciBob21lIGNvbXBhcnRtZW50IE9DSUQuJyk7XG4gICAgY29uc29sZS53YXJuKCcgICBFeGFtcGxlOiBleHBvcnQgT0NJX09DSVJfQ09NUEFSVE1FTlRfSUQ9XCJvY2lkMS5jb21wYXJ0bWVudC5vYzEuLmFhYWFhYWEuLi5cIicpO1xuICB9XG5cbiAgbGV0IG5hbWVzcGFjZSA9IHByb2Nlc3MuZW52Lk9DSV9OQU1FU1BBQ0U/LnRyaW0oKTtcbiAgaWYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSAneW91ci1uYW1lc3BhY2UnKSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSBhd2FpdCBnZXROYW1lc3BhY2VGcm9tT2NpU2RrKGNvbXBhcnRtZW50SWQsIHJlZ2lvbik7XG4gICAgaWYgKHJlc29sdmVkKSBuYW1lc3BhY2UgPSByZXNvbHZlZDtcbiAgICBlbHNlIGlmICghbmFtZXNwYWNlKSBuYW1lc3BhY2UgPSAneW91ci1uYW1lc3BhY2UnO1xuICAgIGlmIChuYW1lc3BhY2UgPT09ICd5b3VyLW5hbWVzcGFjZScpIHtcbiAgICAgIGNvbnNvbGUud2Fybign4pqg77iPICBPQ0lfTkFNRVNQQUNFIG5vdCBzZXQgYW5kIFNESyBjb3VsZCBub3QgcmVzb2x2ZSBpdC4gU2V0IE9DSV9OQU1FU1BBQ0Ugb3IgcnVuIFwib2NpIHNldHVwIGNvbmZpZ1wiLicpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRpc2NvdmVyZWQgPSBkaXNjb3ZlckZyb21GdW5jWWFtbEFuZFRhcmdldCgpO1xuXG4gIGNvbnN0IGltYWdlVGFnID0gcHJvY2Vzcy5lbnYuT0NJX0lNQUdFX1RBRz8udHJpbSgpIHx8IGRpc2NvdmVyZWQuaW1hZ2VUYWcgfHwgJ2xhdGVzdCc7XG5cbiAgbGV0IGRvY2tlckNvbnRleHRQYXRoID0gZGlzY292ZXJlZC5kb2NrZXJDb250ZXh0UGF0aDtcbiAgaWYgKCFkb2NrZXJDb250ZXh0UGF0aCAmJiBwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fSkFSX1BBVEg/LnRyaW0oKSkge1xuICAgIGNvbnN0IHAgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0pBUl9QQVRILnRyaW0oKSk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocCkpIGRvY2tlckNvbnRleHRQYXRoID0gZnMuc3RhdFN5bmMocCkuaXNEaXJlY3RvcnkoKSA/IHAgOiBwYXRoLmRpcm5hbWUocCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVyID0gcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0hBTkRMRVI/LnRyaW0oKSB8fCBkaXNjb3ZlcmVkLmhhbmRsZXI7XG4gIGNvbnN0IHVzZVRoaW5Eb2NrZXJmaWxlID0gZGlzY292ZXJlZC51c2VUaGluRG9ja2VyZmlsZSA/PyBmYWxzZTtcblxuICBjb25zdCBtZW1vcnlFbnYgPSBwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fTUVNT1JZX01CPy50cmltKCk7XG4gIGNvbnN0IGZ1bmN0aW9uTWVtb3J5TWIgPSBtZW1vcnlFbnZcbiAgICA/IFN0cmluZyhwYXJzZUludChtZW1vcnlFbnYsIDEwKSlcbiAgICA6IChkaXNjb3ZlcmVkLm1lbW9yeU1iICE9IG51bGwgPyBTdHJpbmcoZGlzY292ZXJlZC5tZW1vcnlNYikgOiB1bmRlZmluZWQpO1xuXG4gIGNvbnN0IHRpbWVvdXRFbnYgPSBwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fVElNRU9VVF9TRUNPTkRTPy50cmltKCk7XG4gIGNvbnN0IGZ1bmN0aW9uVGltZW91dFNlY29uZHMgPSB0aW1lb3V0RW52XG4gICAgPyBwYXJzZUludCh0aW1lb3V0RW52LCAxMClcbiAgICA6IGRpc2NvdmVyZWQudGltZW91dFNlY29uZHM7XG5cbiAgbGV0IGZ1bmN0aW9uQ29uZmlnID0gZGlzY292ZXJlZC5jb25maWc7XG4gIGNvbnN0IGNvbmZpZ0VudiA9IHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9DT05GSUc/LnRyaW0oKTtcbiAgaWYgKGNvbmZpZ0Vudikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGNvbmZpZ0VudikgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgICAgIGZ1bmN0aW9uQ29uZmlnID0geyAuLi5mdW5jdGlvbkNvbmZpZywgLi4ucGFyc2VkIH07XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBpZ25vcmUgaW52YWxpZCBKU09OXG4gICAgfVxuICB9XG4gIGlmIChmdW5jdGlvbkNvbmZpZyAmJiBPYmplY3Qua2V5cyhmdW5jdGlvbkNvbmZpZykubGVuZ3RoID09PSAwKSBmdW5jdGlvbkNvbmZpZyA9IHVuZGVmaW5lZDtcblxuICByZXR1cm4ge1xuICAgIGNvbXBhcnRtZW50SWQsXG4gICAgb2NpckNvbXBhcnRtZW50SWQ6IG9jaXJDb21wYXJ0bWVudElkIHx8IHVuZGVmaW5lZCxcbiAgICB0ZW5hbmN5SWQsXG4gICAgcmVnaW9uLFxuICAgIG5hbWVzcGFjZSxcbiAgICBmdW5jdGlvbkFwcE5hbWU6IHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9BUFBfTkFNRSA/PyBkaXNjb3ZlcmVkLmZ1bmN0aW9uQXBwTmFtZSA/PyAnJyxcbiAgICBmdW5jdGlvbk5hbWU6IHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9OQU1FID8/IGRpc2NvdmVyZWQuZnVuY3Rpb25OYW1lID8/ICcnLFxuICAgIGZ1bmN0aW9uSmFyUGF0aDogcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0pBUl9QQVRIPy50cmltKCkgfHwgdW5kZWZpbmVkLFxuICAgIGRvY2tlckNvbnRleHRQYXRoOiBkb2NrZXJDb250ZXh0UGF0aCB8fCB1bmRlZmluZWQsXG4gICAgaW1hZ2VUYWcsXG4gICAgaGFuZGxlcjogaGFuZGxlciB8fCB1bmRlZmluZWQsXG4gICAgdXNlVGhpbkRvY2tlcmZpbGUsXG4gICAgb2NpclJlcG9zaXRvcnlOYW1lOiBwcm9jZXNzLmVudi5PQ0lfT0NJUl9SRVBPU0lUT1JZX05BTUUgfHwgdW5kZWZpbmVkLFxuICAgIGZ1bmN0aW9uTWVtb3J5TWI6IGZ1bmN0aW9uTWVtb3J5TWIgfHwgdW5kZWZpbmVkLFxuICAgIGZ1bmN0aW9uVGltZW91dFNlY29uZHM6IGZ1bmN0aW9uVGltZW91dFNlY29uZHMgPz8gdW5kZWZpbmVkLFxuICAgIGZ1bmN0aW9uQ29uZmlnLFxuICAgIGJhY2tlbmQ6IGJhY2tlbmRDb25maWcsXG4gIH07XG59XG4iXX0=