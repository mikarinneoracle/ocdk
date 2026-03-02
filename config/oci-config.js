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
 * - OCI_APIGATEWAY_DEPLOYMENT_JSON (path to API Gateway deployment spec JSON; default project root oci_apigateway_deployment.json)
 * - OCI_PROJECT_DIR (set by ocdk CLI to caller cwd; used to discover func.yaml and target/)
 * - OCI_STATE_BUCKET (for remote state)
 * - OCI_STATE_BACKEND_TYPE (oci|http|local)
 *
 * When OCI_PROJECT_DIR is set (e.g. running `npx ocdk deploy` from a Java project), config
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
const DEFAULT_APIGW_DEPLOYMENT_JSON = JSON.stringify({
    routes: [
        {
            path: '/{path*}',
            methods: ['GET', 'POST', 'OPTIONS'],
            backend: {
                type: 'ORACLE_FUNCTIONS_BACKEND',
                functionId: '${function_id}',
                readTimeoutInSeconds: 30,
            },
        },
    ],
}, null, 2);
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
 * Try to read runtime from func.yaml (OCI Functions format), e.g. 'java', 'python'.
 * Returns the value of the first "runtime:" line, trimmed.
 */
function getFuncYamlRuntime(projectDir) {
    const p = path.join(projectDir, 'func.yaml');
    try {
        if (fs.existsSync(p)) {
            const content = fs.readFileSync(p, 'utf8');
            const m = content.match(/^\s*runtime:\s*["']?([^"'\s\n]+)["']?/m);
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
                const kv = line.match(/^\s+([a-zA-Z_][a-zA-Z0-9_-]*)\s*:\s*(.*)$/);
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
/** Ensure oci_apigateway_deployment.json exists in projectDir; write default if missing. Skip when OCI_STACK_ACTION=function. Returns path. */
function ensureDefaultApiGwDeploymentJson(projectDir) {
    if ((process.env.OCI_STACK_ACTION || '').trim().toLowerCase() === 'function') {
        return path.join(projectDir, 'oci_apigateway_deployment.json');
    }
    const p = path.join(projectDir, 'oci_apigateway_deployment.json');
    if (!fs.existsSync(p)) {
        fs.writeFileSync(p, DEFAULT_APIGW_DEPLOYMENT_JSON, 'utf8');
    }
    return p;
}
/** Ensure tail-function-logs.js exists in projectDir (copy from package scripts). IDs are placeholders until npx ocdk write-log-config is run. */
function ensureTailFunctionLogsScript(projectDir) {
    const dest = path.join(projectDir, 'tail-function-logs.js');
    const src = path.join(__dirname, '..', 'scripts', 'tail-function-log.js');
    if (fs.existsSync(src)) {
        const content = fs.readFileSync(src, 'utf8');
        fs.writeFileSync(dest, content, 'utf8');
    }
    return dest;
}
const TAIL_FUNCTION_LOGS_SCRIPT = `#!/usr/bin/env node
/**
 * Tail OCI Functions execution logs. Generated by OCDK.
 * Run from project root after deploy. Requires: OCI CLI, OCI_COMPARTMENT_ID.
 * Log IDs: from .ocdk-outputs.json (created on deploy), or pass for testing:
 *   OCI_LOG_GROUP_ID=ocid1... OCI_EXECUTION_LOG_ID=ocid1... node tail-function-logs.js
 */
const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

const dir = process.env.OCI_PROJECT_DIR || __dirname;
const outputsPath = path.join(dir, '.ocdk-outputs.json');
const compId = process.env.OCI_COMPARTMENT_ID || process.env.OCI_COMPARTMENT_OCID;
if (!compId) {
  console.error('Set OCI_COMPARTMENT_ID (or OCI_COMPARTMENT_OCID).');
  process.exit(1);
}
let logGroupId = (process.env.OCI_LOG_GROUP_ID || '').trim();
let executionLogId = (process.env.OCI_EXECUTION_LOG_ID || '').trim();
if (!logGroupId || !executionLogId) {
  if (!fs.existsSync(outputsPath)) {
    console.error('Run deploy first to create .ocdk-outputs.json, or set OCI_LOG_GROUP_ID and OCI_EXECUTION_LOG_ID for testing.');
    process.exit(1);
  }
  let out;
  try {
    const raw = fs.readFileSync(outputsPath, 'utf8').replace(/^\uFEFF/, '').trim();
    const first = raw.indexOf('{');
    const last = raw.lastIndexOf('}');
    if (first === -1 || last <= first) throw new Error('No JSON');
    out = JSON.parse(raw.slice(first, last + 1));
  } catch (e) {
    console.error('Invalid or missing .ocdk-outputs.json. Run deploy first.');
    process.exit(1);
  }
  function findOutputs(obj) {
    if (!obj || typeof obj !== 'object') return null;
    if (obj.log_group_id != null || obj.execution_log_id != null || obj.logGroupId != null || obj.executionLogId != null) return obj;
    if (obj.outputs && typeof obj.outputs === 'object') return findOutputs(obj.outputs) || obj.outputs;
    for (const v of Object.values(obj)) {
      const found = findOutputs(v);
      if (found) return found;
    }
    return null;
  }
  function val(o, k) {
    let v = o[k];
    if (v == null) v = o[k.replace(/_([a-z])/g, (_, c) => c.toUpperCase())];
    if (v == null) return undefined;
    if (typeof v === 'string') return v.trim();
    if (typeof v === 'object' && v != null && 'value' in v) return String(v.value).trim();
    return undefined;
  }
  function findBySubstring(o, sub) {
    const key = Object.keys(o).find(function(k) { return k.toLowerCase().includes(sub); });
    return key ? val(o, key) : undefined;
  }
  const outputs = findOutputs(out) || out;
  logGroupId = val(outputs, 'log_group_id') || val(outputs, 'logGroupId') || findBySubstring(outputs, 'log_group');
  executionLogId = val(outputs, 'execution_log_id') || val(outputs, 'executionLogId') || findBySubstring(outputs, 'execution_log');
  if (!logGroupId || !executionLogId) {
    console.error('log_group_id or execution_log_id missing in .ocdk-outputs.json');
    console.error('Top-level keys: ' + Object.keys(out).join(', '));
    console.error('Outputs keys: ' + Object.keys(outputs).join(', '));
    console.error('Sample: ' + JSON.stringify(out).slice(0, 400));
    process.exit(1);
  }
}
const now = new Date();
const start = new Date(now.getTime() - 10 * 60 * 1000);
const timeStart = start.toISOString();
const timeEnd = now.toISOString();
const scope = compId + '/' + logGroupId + '/' + executionLogId;
const query = 'search "' + scope + '" | sort by datetime desc | limit 50';
const r = spawnSync('oci', ['logging-search', 'search-logs', '--search-query', query, '--time-start', timeStart, '--time-end', timeEnd], { stdio: 'inherit' });
process.exit(r.status ?? 1);
`;
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
    let projectDir = process.env.OCI_PROJECT_DIR?.trim();
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
    const runtime = getFuncYamlRuntime(projectDir);
    const isPython = runtime?.toLowerCase().startsWith('python') ?? false;
    const jarPath = findJarInTarget(projectDir, nameFromYaml || undefined);
    const hasSource = hasPomAndSrc(projectDir);
    if (!isPython && !jarPath && !hasSource)
        return {};
    const functionName = process.env.OCI_FUNCTION_NAME?.trim() || nameFromYaml || path.basename(projectDir) || 'oci-function';
    const imageTag = process.env.OCI_IMAGE_TAG?.trim() || getFuncYamlVersion(projectDir);
    const handler = process.env.OCI_FUNCTION_HANDLER?.trim() || getFuncYamlHandler(projectDir);
    const useThinDockerfile = isPython ? false : !!jarPath;
    const memoryMb = getFuncYamlMemory(projectDir);
    const timeoutSeconds = getFuncYamlTimeout(projectDir);
    const config = getFuncYamlConfig(projectDir);
    return {
        functionName,
        functionAppName: process.env.OCI_FUNCTION_APP_NAME?.trim() || functionName,
        dockerContextPath: path.resolve(projectDir),
        runtime,
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
    const apiGwDeploymentJsonEnv = process.env.OCI_APIGATEWAY_DEPLOYMENT_JSON?.trim();
    const stackAction = (process.env.OCI_STACK_ACTION || '').trim().toLowerCase();
    const apiGwDeploymentJsonPath = apiGwDeploymentJsonEnv
        ? path.resolve(apiGwDeploymentJsonEnv)
        : stackAction === 'function'
            ? undefined
            : dockerContextPath
                ? ensureDefaultApiGwDeploymentJson(dockerContextPath)
                : undefined;
    if (dockerContextPath) {
        ensureTailFunctionLogsScript(dockerContextPath);
    }
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
        runtime: discovered.runtime,
        imageTag,
        handler: handler || undefined,
        useThinDockerfile,
        ocirRepositoryName: process.env.OCI_OCIR_REPOSITORY_NAME || undefined,
        functionMemoryMb: functionMemoryMb || undefined,
        functionTimeoutSeconds: functionTimeoutSeconds ?? undefined,
        functionConfig,
        apiGwDeploymentJsonPath: apiGwDeploymentJsonPath || undefined,
        backend: backendConfig,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NpLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZy9vY2ktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VILGtDQUVDO0FBR0Qsd0NBS0M7QUE2YUQsb0NBeUZDO0FBN2xCRCx1Q0FBeUI7QUFDekIsMkNBQTZCO0FBQzdCLHVDQUF5QjtBQUN6QixtREFBcUM7QUFDckMsaUVBQW1EO0FBNENuRCxNQUFNLDZCQUE2QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQ2xEO0lBQ0UsTUFBTSxFQUFFO1FBQ047WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztZQUNuQyxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLDBCQUEwQjtnQkFDaEMsVUFBVSxFQUFFLGdCQUFnQjtnQkFDNUIsb0JBQW9CLEVBQUUsRUFBRTthQUN6QjtTQUNGO0tBQ0Y7Q0FDRixFQUNELElBQUksRUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLHFJQUFxSTtBQUN4SCxRQUFBLG1CQUFtQixHQUEyQjtJQUN6RCxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLO0lBQzNGLFlBQVksRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLO0lBQ3JGLGVBQWUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLO0lBQ3ZGLFlBQVksRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixF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Q04sU0FBUztRQUNULGVBQWUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixJQUFJLFVBQVUsQ0FBQyxlQUFlLElBQUksRUFBRTtRQUN0RixZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsSUFBSSxVQUFVLENBQUMsWUFBWSxJQUFJLEVBQUU7UUFDNUUsZUFBZSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFLElBQUksU0FBUztRQUN2RSxpQkFBaUIsRUFBRSxpQkFBaUIsSUFBSSxTQUFTO1FBQ2pELE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTztRQUMzQixRQUFRO1FBQ1IsT0FBTyxFQUFFLE9BQU8sSUFBSSxTQUFTO1FBQzdCLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixJQUFJLFNBQVM7UUFDckUsZ0JBQWdCLEVBQUUsZ0JBQWdCLElBQUksU0FBUztRQUMvQyxzQkFBc0IsRUFBRSxzQkFBc0IsSUFBSSxTQUFTO1FBQzNELGNBQWM7UUFDZCx1QkFBdUIsRUFBRSx1QkFBdUIsSUFBSSxTQUFTO1FBQzdELE9BQU8sRUFBRSxhQUFhO0tBQ3ZCLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPQ0kgQ29uZmlndXJhdGlvblxuICpcbiAqIFNldCB0aGVzZSB2aWEgZW52aXJvbm1lbnQgdmFyaWFibGVzIG9yIHVwZGF0ZSBkZWZhdWx0czpcbiAqIC0gT0NJX0NPTVBBUlRNRU5UX0lEXG4gKiAtIE9DSV9URU5BTkNZX0lEXG4gKiAtIE9DSV9SRUdJT05cbiAqIC0gT0NJX05BTUVTUEFDRSAoaWYgdW5zZXQsIG9idGFpbmVkIHZpYSBPQ0kgU0RLIGdldE5hbWVzcGFjZSlcbiAqIC0gT0NJX09DSVJfQ09NUEFSVE1FTlRfSUQgKGZvciBPQ0lSOyBtdXN0IGJlIG5vbi1yb290IGZvciBmdWxsIHN0YWNrKVxuICogLSBPQ0lfRlVOQ1RJT05fQVBQX05BTUUgKEZ1bmN0aW9ucyBhcHBsaWNhdGlvbiBuYW1lOyBkZWZhdWx0IGVtcHR5KVxuICogLSBPQ0lfRlVOQ1RJT05fTkFNRSAoRnVuY3Rpb24gbmFtZTsgZGVmYXVsdCBlbXB0eSlcbiAqIC0gT0NJX0ZVTkNUSU9OX0hBTkRMRVIgKEphdmEgRkRLIENNRCBoYW5kbGVyLCBlLmcuIGNvbS5leGFtcGxlLkhhbmRsZXI6OmhhbmRsZVJlcXVlc3Q7IGZyb20gZnVuYy55YW1sIGNtZC9oYW5kbGVyIGlmIHVuc2V0KVxuICogLSBPQ0lfRlVOQ1RJT05fSkFSX1BBVEggKFBhdGggdG8gSkFSIG9yIHByb2plY3QgZGlyIGZvciBmdW5jdGlvbiBpbWFnZTsgZGVmYXVsdCBlbXB0eSlcbiAqIC0gT0NJX0ZVTkNUSU9OX01FTU9SWV9NQiAoZnVuY3Rpb24gbWVtb3J5IGluIE1COyBmcm9tIGZ1bmMueWFtbCBtZW1vcnkgaWYgdW5zZXQpXG4gKiAtIE9DSV9GVU5DVElPTl9USU1FT1VUX1NFQ09ORFMgKGZ1bmN0aW9uIHRpbWVvdXQgaW4gc2Vjb25kczsgZnJvbSBmdW5jLnlhbWwgdGltZW91dCBpZiB1bnNldClcbiAqIC0gT0NJX0ZVTkNUSU9OX0NPTkZJRyAoSlNPTiBvYmplY3Qgc3RyaW5nIGZvciBmdW5jdGlvbiBjb25maWcvZW52OyBtZXJnZWQgd2l0aCBmdW5jLnlhbWwgY29uZmlnKVxuICogLSBPQ0lfQVBJR0FURVdBWV9ERVBMT1lNRU5UX0pTT04gKHBhdGggdG8gQVBJIEdhdGV3YXkgZGVwbG95bWVudCBzcGVjIEpTT047IGRlZmF1bHQgcHJvamVjdCByb290IG9jaV9hcGlnYXRld2F5X2RlcGxveW1lbnQuanNvbilcbiAqIC0gT0NES19QUk9KRUNUX0RJUiAoc2V0IGJ5IG9jZGsgQ0xJIHRvIGNhbGxlciBjd2Q7IHVzZWQgdG8gZGlzY292ZXIgZnVuYy55YW1sIGFuZCB0YXJnZXQvKVxuICogLSBPQ0lfU1RBVEVfQlVDS0VUIChmb3IgcmVtb3RlIHN0YXRlKVxuICogLSBPQ0lfU1RBVEVfQkFDS0VORF9UWVBFIChvY2l8aHR0cHxsb2NhbClcbiAqXG4gKiBXaGVuIE9DREtfUFJPSkVDVF9ESVIgaXMgc2V0IChlLmcuIHJ1bm5pbmcgYG5weCBvY2RrIGRlcGxveWAgZnJvbSBhIEphdmEgcHJvamVjdCksIGNvbmZpZ1xuICogZGlzY292ZXJzIGVpdGhlciB0YXJnZXQvKi5qYXIgb3IgcG9tLnhtbCtzcmMvIChhbmQgb3B0aW9uYWxseSBmdW5jLnlhbWwgbmFtZSwgdmVyc2lvbiwgY21kL2hhbmRsZXIpLlxuICogTm8gRG9ja2VyZmlsZSBpcyByZXF1aXJlZOKAlHRoZSBzdGFjayBnZW5lcmF0ZXMgb25lIGluIGxvY2FsLWV4ZWMgKGV4Y2x1ZGluZyBub2RlX21vZHVsZXMgdmlhIC5kb2NrZXJpZ25vcmUpLFxuICogdGhlbiBidWlsZHMsIHRhZ3MgKGZyb20gZnVuYy55YW1sIHZlcnNpb24pLCBhbmQgcHVzaGVzIHRvIE9DSVIuXG4gKi9cblxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIG9zIGZyb20gJ29zJztcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICdvY2ktY29tbW9uJztcbmltcG9ydCAqIGFzIG9iamVjdHN0b3JhZ2UgZnJvbSAnb2NpLW9iamVjdHN0b3JhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9jaUJhY2tlbmRDb25maWcge1xuICB0eXBlOiAnb2NpJyB8ICdodHRwJyB8ICdsb2NhbCc7XG4gIGJ1Y2tldD86IHN0cmluZztcbiAga2V5Pzogc3RyaW5nO1xuICBhZGRyZXNzPzogc3RyaW5nO1xuICB1cGRhdGVNZXRob2Q/OiBzdHJpbmc7XG4gIGxvY2tBZGRyZXNzPzogc3RyaW5nO1xuICB1bmxvY2tBZGRyZXNzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9jaUNvbmZpZyB7XG4gIGNvbXBhcnRtZW50SWQ6IHN0cmluZztcbiAgb2NpckNvbXBhcnRtZW50SWQ/OiBzdHJpbmc7XG4gIHRlbmFuY3lJZDogc3RyaW5nO1xuICByZWdpb246IHN0cmluZztcbiAgbmFtZXNwYWNlOiBzdHJpbmc7XG4gIGZ1bmN0aW9uQXBwTmFtZTogc3RyaW5nO1xuICBmdW5jdGlvbk5hbWU6IHN0cmluZztcbiAgLyoqIFBhdGggdG8gSkFSIG9yIERvY2tlcmZpbGUgY29udGV4dCBmb3IgZnVuY3Rpb24gaW1hZ2U7IGVtcHR5ID0gbm8gYnVpbGQvZGVwbG95LiAqL1xuICBmdW5jdGlvbkphclBhdGg/OiBzdHJpbmc7XG4gIC8qKiBQYXRoIHRvIGRpcmVjdG9yeSBjb250YWluaW5nIHRhcmdldC8gKGRpc2NvdmVyZWQ7IERvY2tlcmZpbGUgaXMgZ2VuZXJhdGVkIGluIGxvY2FsLWV4ZWMpLiAqL1xuICBkb2NrZXJDb250ZXh0UGF0aD86IHN0cmluZztcbiAgLyoqIFJ1bnRpbWUgZnJvbSBmdW5jLnlhbWwgKGUuZy4gJ2phdmEnLCAncHl0aG9uJyk7IGNvbnRyb2xzIERvY2tlcmZpbGUgZ2VuZXJhdGlvbi4gKi9cbiAgcnVudGltZT86IHN0cmluZztcbiAgLyoqIEltYWdlIHRhZyBmb3IgT0NJUiAoZnJvbSBmdW5jLnlhbWwgdmVyc2lvbiBvciBPQ0lfSU1BR0VfVEFHOyBkZWZhdWx0ICdsYXRlc3QnKS4gKi9cbiAgaW1hZ2VUYWc/OiBzdHJpbmc7XG4gIC8qKiBKYXZhIEZESyBDTUQgaGFuZGxlciAoZnJvbSBmdW5jLnlhbWwgY21kL2hhbmRsZXIgb3IgT0NJX0ZVTkNUSU9OX0hBTkRMRVI7IGRlZmF1bHQgYmVsb3cpLiAqL1xuICBoYW5kbGVyPzogc3RyaW5nO1xuICAvKiogV2hlbiB0cnVlLCBkZXBsb3kgdXNlcyBhIHRoaW4gRG9ja2VyZmlsZSAoQ09QWSB0YXJnZXQvKi5qYXIgb25seSk7IGZ1bGwgTWF2ZW4gYnVpbGQgb25seSBpbiByZWRlcGxveTpmdW5jdGlvbi4gKi9cbiAgdXNlVGhpbkRvY2tlcmZpbGU/OiBib29sZWFuO1xuICBvY2lyUmVwb3NpdG9yeU5hbWU/OiBzdHJpbmc7XG4gIC8qKiBGdW5jdGlvbiBtZW1vcnkgaW4gTUIgKDEyOCwgMjU2LCA1MTIsIDEwMjQsIDIwNDgsIDMwNzIpLiBGcm9tIGZ1bmMueWFtbCBtZW1vcnkgb3IgT0NJX0ZVTkNUSU9OX01FTU9SWV9NQi4gKi9cbiAgZnVuY3Rpb25NZW1vcnlNYj86IHN0cmluZztcbiAgLyoqIEZ1bmN0aW9uIHRpbWVvdXQgaW4gc2Vjb25kcyAoMeKAkzMwMCkuIEZyb20gZnVuYy55YW1sIHRpbWVvdXQgb3IgT0NJX0ZVTkNUSU9OX1RJTUVPVVRfU0VDT05EUy4gKi9cbiAgZnVuY3Rpb25UaW1lb3V0U2Vjb25kcz86IG51bWJlcjtcbiAgLyoqIEZ1bmN0aW9uIGNvbmZpZy9lbnYga2V5LXZhbHVlLiBGcm9tIGZ1bmMueWFtbCBjb25maWcgb3IgT0NJX0ZVTkNUSU9OX0NPTkZJRyAoSlNPTiBvYmplY3Qgc3RyaW5nKS4gKi9cbiAgZnVuY3Rpb25Db25maWc/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICAvKiogUGF0aCB0byBBUEkgR2F0ZXdheSBkZXBsb3ltZW50IHNwZWMgSlNPTiAocm91dGVzKS4gVXNlIE9DSV9BUElHQVRFV0FZX0RFUExPWU1FTlRfSlNPTiBvciBkZWZhdWx0IG9jaV9hcGlnYXRld2F5X2RlcGxveW1lbnQuanNvbiBpbiBwcm9qZWN0IHJvb3QuICovXG4gIGFwaUd3RGVwbG95bWVudEpzb25QYXRoPzogc3RyaW5nO1xuICBiYWNrZW5kPzogT2NpQmFja2VuZENvbmZpZztcbn1cblxuY29uc3QgREVGQVVMVF9BUElHV19ERVBMT1lNRU5UX0pTT04gPSBKU09OLnN0cmluZ2lmeShcbiAge1xuICAgIHJvdXRlczogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnL3twYXRoKn0nLFxuICAgICAgICBtZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ09QVElPTlMnXSxcbiAgICAgICAgYmFja2VuZDoge1xuICAgICAgICAgIHR5cGU6ICdPUkFDTEVfRlVOQ1RJT05TX0JBQ0tFTkQnLFxuICAgICAgICAgIGZ1bmN0aW9uSWQ6ICcke2Z1bmN0aW9uX2lkfScsXG4gICAgICAgICAgcmVhZFRpbWVvdXRJblNlY29uZHM6IDMwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBudWxsLFxuICAyXG4pO1xuXG4vKiogT0NJUiBzaG9ydCByZWdpb24ga2V5cyAoZS5nLiBldS1mcmFua2Z1cnQtMSAtPiBmcmEpLiBVc2VkIHNvIGxvZ2luLCBidWlsZCwgcHVzaCBhbmQgZnVuY3Rpb24gaW1hZ2UgYWxsIHVzZSBzYW1lIHJlZ2lzdHJ5IGhvc3QuICovXG5leHBvcnQgY29uc3QgUkVHSU9OX1RPX09DSVJfSE9TVDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgJ2V1LWZyYW5rZnVydC0xJzogJ2ZyYScsICd1cy1waG9lbml4LTEnOiAncGh4JywgJ3VzLWFzaGJ1cm4tMSc6ICdpYWQnLCAndWstbG9uZG9uLTEnOiAnbGhyJyxcbiAgJ2FwLXRva3lvLTEnOiAnbnJ0JywgJ2FwLW11bWJhaS0xJzogJ2JvbScsICdhcC1zZW91bC0xJzogJ2ljbicsICdjYS10b3JvbnRvLTEnOiAneXl6JyxcbiAgJ3NhLXNhb3BhdWxvLTEnOiAnZ3J1JywgJ2FwLXN5ZG5leS0xJzogJ3N5ZCcsICdldS16dXJpY2gtMSc6ICd6cmgnLCAnbWUtZHViYWktMSc6ICdkeGInLFxuICAnYXAtb3Nha2EtMSc6ICdraXgnLCAnZXUtYW1zdGVyZGFtLTEnOiAnYW1zJywgJ2FwLXNpbmdhcG9yZS0xJzogJ3NpbicsICdhcC1oeWRlcmFiYWQtMSc6ICdoeWQnLFxuICAnZXUtbWlsYW4tMSc6ICdteHAnLCAnc2Etc2FudGlhZ28tMSc6ICdzY2wnLCAnYXAtbWVsYm91cm5lLTEnOiAnbWVsJywgJ2V1LXN0b2NraG9sbS0xJzogJ2FybicsXG4gICdtZS1qZWRkYWgtMSc6ICdqZWQnLCAnYWYtam9oYW5uZXNidXJnLTEnOiAnam5iJywgJ2lsLWplcnVzYWxlbS0xJzogJ3RsdicsICdteC1xdWVyZXRhcm8tMSc6ICdxcm8nLFxuICAnZXUtbWFyc2VpbGxlLTEnOiAnbXJzJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvY2lySG9zdEtleShyZWdpb246IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBSRUdJT05fVE9fT0NJUl9IT1NUW3JlZ2lvbl0gPz8gcmVnaW9uO1xufVxuXG4vKiogRnVsbCBPQ0lSIGltYWdlIFVSTCBmb3IgdGhlIGZ1bmN0aW9uIChyZWdpc3RyeS9uYW1lc3BhY2UvcmVwbzp0YWcpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9jaUltYWdlVXJsKGNvbmZpZzogT2NpQ29uZmlnKTogc3RyaW5nIHtcbiAgY29uc3QgcmVnaXN0cnkgPSBgJHtvY2lySG9zdEtleShjb25maWcucmVnaW9uKX0ub2Npci5pb2A7XG4gIGNvbnN0IHJlcG8gPSBjb25maWcub2NpclJlcG9zaXRvcnlOYW1lIHx8IGNvbmZpZy5mdW5jdGlvbk5hbWUgfHwgJ29jaS1mdW5jdGlvbic7XG4gIGNvbnN0IHRhZyA9IGNvbmZpZy5pbWFnZVRhZyB8fCAnbGF0ZXN0JztcbiAgcmV0dXJuIGAke3JlZ2lzdHJ5fS8ke2NvbmZpZy5uYW1lc3BhY2V9LyR7cmVwb306JHt0YWd9YDtcbn1cblxuLyoqXG4gKiBUcnkgdG8gcmVhZCBmdW5jdGlvbiBuYW1lIGZyb20gZnVuYy55YW1sIChPQ0kgRnVuY3Rpb25zIGZvcm1hdCkuXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgXCJuYW1lOlwiIGxpbmUsIHRyaW1tZWQuXG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmNZYW1sTmFtZShwcm9qZWN0RGlyOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBwID0gcGF0aC5qb2luKHByb2plY3REaXIsICdmdW5jLnlhbWwnKTtcbiAgdHJ5IHtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwLCAndXRmOCcpO1xuICAgICAgY29uc3QgbSA9IGNvbnRlbnQubWF0Y2goL15cXHMqbmFtZTpcXHMqW1wiJ10/KFteXCInXFxzXFxuXSspW1wiJ10/L20pO1xuICAgICAgaWYgKG0pIHJldHVybiBtWzFdLnRyaW0oKTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIGlnbm9yZVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVHJ5IHRvIHJlYWQgcnVudGltZSBmcm9tIGZ1bmMueWFtbCAoT0NJIEZ1bmN0aW9ucyBmb3JtYXQpLCBlLmcuICdqYXZhJywgJ3B5dGhvbicuXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgXCJydW50aW1lOlwiIGxpbmUsIHRyaW1tZWQuXG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmNZYW1sUnVudGltZShwcm9qZWN0RGlyOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBwID0gcGF0aC5qb2luKHByb2plY3REaXIsICdmdW5jLnlhbWwnKTtcbiAgdHJ5IHtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwLCAndXRmOCcpO1xuICAgICAgY29uc3QgbSA9IGNvbnRlbnQubWF0Y2goL15cXHMqcnVudGltZTpcXHMqW1wiJ10/KFteXCInXFxzXFxuXSspW1wiJ10/L20pO1xuICAgICAgaWYgKG0pIHJldHVybiBtWzFdLnRyaW0oKTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIGlnbm9yZVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVHJ5IHRvIHJlYWQgY21kL2hhbmRsZXIgZnJvbSBmdW5jLnlhbWwgKE9DSS9GbiBmb3JtYXQpLlxuICogUmV0dXJucyB0aGUgdmFsdWUgb2YgXCJjbWQ6XCIgb3IgXCJoYW5kbGVyOlwiIGxpbmUsIHRyaW1tZWQ7IHVzZWQgYXMgRG9ja2VyIENNRCBmb3IgSmF2YSBGREsuXG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmNZYW1sSGFuZGxlcihwcm9qZWN0RGlyOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBwID0gcGF0aC5qb2luKHByb2plY3REaXIsICdmdW5jLnlhbWwnKTtcbiAgdHJ5IHtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwLCAndXRmOCcpO1xuICAgICAgY29uc3QgY21kTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9eXFxzKmNtZDpcXHMqW1wiJ10/KFteXCInXFxuXSspW1wiJ10/L20pO1xuICAgICAgaWYgKGNtZE1hdGNoKSByZXR1cm4gY21kTWF0Y2hbMV0udHJpbSgpO1xuICAgICAgY29uc3QgaGFuZGxlck1hdGNoID0gY29udGVudC5tYXRjaCgvXlxccypoYW5kbGVyOlxccypbXCInXT8oW15cIidcXG5dKylbXCInXT8vbSk7XG4gICAgICBpZiAoaGFuZGxlck1hdGNoKSByZXR1cm4gaGFuZGxlck1hdGNoWzFdLnRyaW0oKTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIGlnbm9yZVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVHJ5IHRvIHJlYWQgdmVyc2lvbiBmcm9tIGZ1bmMueWFtbCAodXNlZCBhcyBPQ0lSIGltYWdlIHRhZykuXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgXCJ2ZXJzaW9uOlwiIGxpbmUsIHRyaW1tZWQ7IHNhbml0aXplZCBmb3IgRG9ja2VyIHRhZyAoYS16QS1aMC05Xy4tKS5cbiAqL1xuZnVuY3Rpb24gZ2V0RnVuY1lhbWxWZXJzaW9uKHByb2plY3REaXI6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHAgPSBwYXRoLmpvaW4ocHJvamVjdERpciwgJ2Z1bmMueWFtbCcpO1xuICB0cnkge1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHAsICd1dGY4Jyk7XG4gICAgICBjb25zdCBtID0gY29udGVudC5tYXRjaCgvXlxccyp2ZXJzaW9uOlxccypbXCInXT8oW15cIidcXHNcXG5dKylbXCInXT8vbSk7XG4gICAgICBpZiAobSkge1xuICAgICAgICBjb25zdCByYXcgPSBtWzFdLnRyaW0oKTtcbiAgICAgICAgY29uc3Qgc2FuaXRpemVkID0gcmF3LnJlcGxhY2UoL1teYS16QS1aMC05Xy4tXS9nLCAnLScpLnJlcGxhY2UoLy0rL2csICctJykucmVwbGFjZSgvXi18LSQvZywgJycpO1xuICAgICAgICByZXR1cm4gc2FuaXRpemVkIHx8IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIGlnbm9yZVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IFZBTElEX01FTU9SWV9NQiA9IG5ldyBTZXQoWzEyOCwgMjU2LCA1MTIsIDEwMjQsIDIwNDgsIDMwNzJdKTtcblxuLyoqXG4gKiBUcnkgdG8gcmVhZCBtZW1vcnkgKE1CKSBmcm9tIGZ1bmMueWFtbC4gT0NJIGFsbG93cyAxMjgsIDI1NiwgNTEyLCAxMDI0LCAyMDQ4LCAzMDcyLlxuICogUmV0dXJucyB0aGUgbnVtYmVyIGlmIHByZXNlbnQgYW5kIHZhbGlkOyBvdGhlcndpc2UgdW5kZWZpbmVkLlxuICovXG5mdW5jdGlvbiBnZXRGdW5jWWFtbE1lbW9yeShwcm9qZWN0RGlyOiBzdHJpbmcpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBjb25zdCBwID0gcGF0aC5qb2luKHByb2plY3REaXIsICdmdW5jLnlhbWwnKTtcbiAgdHJ5IHtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwLCAndXRmOCcpO1xuICAgICAgY29uc3QgbSA9IGNvbnRlbnQubWF0Y2goL15cXHMqbWVtb3J5OlxccyooXFxkKylcXHMqJC9tKTtcbiAgICAgIGlmIChtKSB7XG4gICAgICAgIGNvbnN0IG4gPSBwYXJzZUludChtWzFdLCAxMCk7XG4gICAgICAgIGlmIChWQUxJRF9NRU1PUllfTUIuaGFzKG4pKSByZXR1cm4gbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIGlnbm9yZVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVHJ5IHRvIHJlYWQgdGltZW91dCAoc2Vjb25kcykgZnJvbSBmdW5jLnlhbWwuIE9DSSBtYXggaXMgMzAwLlxuICogUmV0dXJucyB0aGUgbnVtYmVyIGlmIHByZXNlbnQgYW5kIGluIHJhbmdlIDHigJMzMDA7IG90aGVyd2lzZSB1bmRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmNZYW1sVGltZW91dChwcm9qZWN0RGlyOiBzdHJpbmcpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBjb25zdCBwID0gcGF0aC5qb2luKHByb2plY3REaXIsICdmdW5jLnlhbWwnKTtcbiAgdHJ5IHtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhwLCAndXRmOCcpO1xuICAgICAgY29uc3QgbSA9IGNvbnRlbnQubWF0Y2goL15cXHMqdGltZW91dDpcXHMqKFxcZCspXFxzKiQvbSk7XG4gICAgICBpZiAobSkge1xuICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQobVsxXSwgMTApO1xuICAgICAgICBpZiAobiA+PSAxICYmIG4gPD0gMzAwKSByZXR1cm4gbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIGlnbm9yZVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVHJ5IHRvIHJlYWQgY29uZmlnIChrZXktdmFsdWUgZW52KSBmcm9tIGZ1bmMueWFtbC4gRXhwZWN0cyBhIHRvcC1sZXZlbCBcImNvbmZpZzpcIiBibG9jayB3aXRoIGtleTogdmFsdWUgbGluZXMuXG4gKiBSZXR1cm5zIGEgcmVjb3JkIG9mIHN0cmluZyBrZXlzIGFuZCBzdHJpbmcgdmFsdWVzOyBlbXB0eSBpZiBub25lIG9yIHBhcnNlIGVycm9yLlxuICovXG5mdW5jdGlvbiBnZXRGdW5jWWFtbENvbmZpZyhwcm9qZWN0RGlyOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgcCA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAnZnVuYy55YW1sJyk7XG4gIHRyeSB7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHApKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocCwgJ3V0ZjgnKTtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoL1xccj9cXG4vKTtcbiAgICBsZXQgaW5Db25maWcgPSBmYWxzZTtcbiAgICBjb25zdCBjb25maWc6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lLnRyaW0oKTtcbiAgICAgIGlmICh0cmltbWVkID09PSAnY29uZmlnOicgfHwgL15jb25maWdcXHMqOlxccyokLy50ZXN0KHRyaW1tZWQpKSB7XG4gICAgICAgIGluQ29uZmlnID0gdHJ1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaW5Db25maWcpIHtcbiAgICAgICAgaWYgKHRyaW1tZWQgIT09ICcnICYmICFsaW5lLnN0YXJ0c1dpdGgoJyAnKSAmJiAhbGluZS5zdGFydHNXaXRoKCdcXHQnKSkgYnJlYWs7XG4gICAgICAgIGNvbnN0IGt2ID0gbGluZS5tYXRjaCgvXlxccysoW2EtekEtWl9dW2EtekEtWjAtOV8tXSopXFxzKjpcXHMqKC4qKSQvKTtcbiAgICAgICAgaWYgKGt2KSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0ga3ZbMV0udHJpbSgpO1xuICAgICAgICAgIGxldCB2YWwgPSBrdlsyXS50cmltKCk7XG4gICAgICAgICAgaWYgKCh2YWwuc3RhcnRzV2l0aCgnXCInKSAmJiB2YWwuZW5kc1dpdGgoJ1wiJykpIHx8ICh2YWwuc3RhcnRzV2l0aChcIidcIikgJiYgdmFsLmVuZHNXaXRoKFwiJ1wiKSkpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmZpZ1trZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCA/IGNvbmZpZyA6IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKiogRW5zdXJlIG9jaV9hcGlnYXRld2F5X2RlcGxveW1lbnQuanNvbiBleGlzdHMgaW4gcHJvamVjdERpcjsgd3JpdGUgZGVmYXVsdCBpZiBtaXNzaW5nLiBSZXR1cm5zIHBhdGguICovXG5mdW5jdGlvbiBlbnN1cmVEZWZhdWx0QXBpR3dEZXBsb3ltZW50SnNvbihwcm9qZWN0RGlyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBwID0gcGF0aC5qb2luKHByb2plY3REaXIsICdvY2lfYXBpZ2F0ZXdheV9kZXBsb3ltZW50Lmpzb24nKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHApKSB7XG4gICAgZnMud3JpdGVGaWxlU3luYyhwLCBERUZBVUxUX0FQSUdXX0RFUExPWU1FTlRfSlNPTiwgJ3V0ZjgnKTtcbiAgfVxuICByZXR1cm4gcDtcbn1cblxuY29uc3QgVEFJTF9GVU5DVElPTl9MT0dTX1NDUklQVCA9IGAjIS91c3IvYmluL2VudiBub2RlXG4vKipcbiAqIFRhaWwgT0NJIEZ1bmN0aW9ucyBleGVjdXRpb24gbG9ncy4gR2VuZXJhdGVkIGJ5IE9DREsuXG4gKiBSdW4gZnJvbSBwcm9qZWN0IHJvb3QgYWZ0ZXIgZGVwbG95LiBSZXF1aXJlczogT0NJIENMSSwgT0NJX0NPTVBBUlRNRU5UX0lELlxuICogTG9nIElEczogZnJvbSAub2Nkay1vdXRwdXRzLmpzb24gKGNyZWF0ZWQgb24gZGVwbG95KSwgb3IgcGFzcyBmb3IgdGVzdGluZzpcbiAqICAgT0NJX0xPR19HUk9VUF9JRD1vY2lkMS4uLiBPQ0lfRVhFQ1VUSU9OX0xPR19JRD1vY2lkMS4uLiBub2RlIHRhaWwtZnVuY3Rpb24tbG9ncy5qc1xuICovXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgeyBzcGF3blN5bmMgfSA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcblxuY29uc3QgZGlyID0gcHJvY2Vzcy5lbnYuT0NES19QUk9KRUNUX0RJUiB8fCBfX2Rpcm5hbWU7XG5jb25zdCBvdXRwdXRzUGF0aCA9IHBhdGguam9pbihkaXIsICcub2Nkay1vdXRwdXRzLmpzb24nKTtcbmNvbnN0IGNvbXBJZCA9IHByb2Nlc3MuZW52Lk9DSV9DT01QQVJUTUVOVF9JRCB8fCBwcm9jZXNzLmVudi5PQ0lfQ09NUEFSVE1FTlRfT0NJRDtcbmlmICghY29tcElkKSB7XG4gIGNvbnNvbGUuZXJyb3IoJ1NldCBPQ0lfQ09NUEFSVE1FTlRfSUQgKG9yIE9DSV9DT01QQVJUTUVOVF9PQ0lEKS4nKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufVxubGV0IGxvZ0dyb3VwSWQgPSAocHJvY2Vzcy5lbnYuT0NJX0xPR19HUk9VUF9JRCB8fCAnJykudHJpbSgpO1xubGV0IGV4ZWN1dGlvbkxvZ0lkID0gKHByb2Nlc3MuZW52Lk9DSV9FWEVDVVRJT05fTE9HX0lEIHx8ICcnKS50cmltKCk7XG5pZiAoIWxvZ0dyb3VwSWQgfHwgIWV4ZWN1dGlvbkxvZ0lkKSB7XG4gIGlmICghZnMuZXhpc3RzU3luYyhvdXRwdXRzUGF0aCkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdSdW4gZGVwbG95IGZpcnN0IHRvIGNyZWF0ZSAub2Nkay1vdXRwdXRzLmpzb24sIG9yIHNldCBPQ0lfTE9HX0dST1VQX0lEIGFuZCBPQ0lfRVhFQ1VUSU9OX0xPR19JRCBmb3IgdGVzdGluZy4nKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH1cbiAgbGV0IG91dDtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXcgPSBmcy5yZWFkRmlsZVN5bmMob3V0cHV0c1BhdGgsICd1dGY4JykucmVwbGFjZSgvXlxcdUZFRkYvLCAnJykudHJpbSgpO1xuICAgIGNvbnN0IGZpcnN0ID0gcmF3LmluZGV4T2YoJ3snKTtcbiAgICBjb25zdCBsYXN0ID0gcmF3Lmxhc3RJbmRleE9mKCd9Jyk7XG4gICAgaWYgKGZpcnN0ID09PSAtMSB8fCBsYXN0IDw9IGZpcnN0KSB0aHJvdyBuZXcgRXJyb3IoJ05vIEpTT04nKTtcbiAgICBvdXQgPSBKU09OLnBhcnNlKHJhdy5zbGljZShmaXJzdCwgbGFzdCArIDEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgb3IgbWlzc2luZyAub2Nkay1vdXRwdXRzLmpzb24uIFJ1biBkZXBsb3kgZmlyc3QuJyk7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9XG4gIGZ1bmN0aW9uIGZpbmRPdXRwdXRzKG9iaikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSByZXR1cm4gbnVsbDtcbiAgICBpZiAob2JqLmxvZ19ncm91cF9pZCAhPSBudWxsIHx8IG9iai5leGVjdXRpb25fbG9nX2lkICE9IG51bGwgfHwgb2JqLmxvZ0dyb3VwSWQgIT0gbnVsbCB8fCBvYmouZXhlY3V0aW9uTG9nSWQgIT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICBpZiAob2JqLm91dHB1dHMgJiYgdHlwZW9mIG9iai5vdXRwdXRzID09PSAnb2JqZWN0JykgcmV0dXJuIGZpbmRPdXRwdXRzKG9iai5vdXRwdXRzKSB8fCBvYmoub3V0cHV0cztcbiAgICBmb3IgKGNvbnN0IHYgb2YgT2JqZWN0LnZhbHVlcyhvYmopKSB7XG4gICAgICBjb25zdCBmb3VuZCA9IGZpbmRPdXRwdXRzKHYpO1xuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gZm91bmQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGZ1bmN0aW9uIHZhbChvLCBrKSB7XG4gICAgbGV0IHYgPSBvW2tdO1xuICAgIGlmICh2ID09IG51bGwpIHYgPSBvW2sucmVwbGFjZSgvXyhbYS16XSkvZywgKF8sIGMpID0+IGMudG9VcHBlckNhc2UoKSldO1xuICAgIGlmICh2ID09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJykgcmV0dXJuIHYudHJpbSgpO1xuICAgIGlmICh0eXBlb2YgdiA9PT0gJ29iamVjdCcgJiYgdiAhPSBudWxsICYmICd2YWx1ZScgaW4gdikgcmV0dXJuIFN0cmluZyh2LnZhbHVlKS50cmltKCk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBmaW5kQnlTdWJzdHJpbmcobywgc3ViKSB7XG4gICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMobykuZmluZChmdW5jdGlvbihrKSB7IHJldHVybiBrLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc3ViKTsgfSk7XG4gICAgcmV0dXJuIGtleSA/IHZhbChvLCBrZXkpIDogdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IG91dHB1dHMgPSBmaW5kT3V0cHV0cyhvdXQpIHx8IG91dDtcbiAgbG9nR3JvdXBJZCA9IHZhbChvdXRwdXRzLCAnbG9nX2dyb3VwX2lkJykgfHwgdmFsKG91dHB1dHMsICdsb2dHcm91cElkJykgfHwgZmluZEJ5U3Vic3RyaW5nKG91dHB1dHMsICdsb2dfZ3JvdXAnKTtcbiAgZXhlY3V0aW9uTG9nSWQgPSB2YWwob3V0cHV0cywgJ2V4ZWN1dGlvbl9sb2dfaWQnKSB8fCB2YWwob3V0cHV0cywgJ2V4ZWN1dGlvbkxvZ0lkJykgfHwgZmluZEJ5U3Vic3RyaW5nKG91dHB1dHMsICdleGVjdXRpb25fbG9nJyk7XG4gIGlmICghbG9nR3JvdXBJZCB8fCAhZXhlY3V0aW9uTG9nSWQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdsb2dfZ3JvdXBfaWQgb3IgZXhlY3V0aW9uX2xvZ19pZCBtaXNzaW5nIGluIC5vY2RrLW91dHB1dHMuanNvbicpO1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RvcC1sZXZlbCBrZXlzOiAnICsgT2JqZWN0LmtleXMob3V0KS5qb2luKCcsICcpKTtcbiAgICBjb25zb2xlLmVycm9yKCdPdXRwdXRzIGtleXM6ICcgKyBPYmplY3Qua2V5cyhvdXRwdXRzKS5qb2luKCcsICcpKTtcbiAgICBjb25zb2xlLmVycm9yKCdTYW1wbGU6ICcgKyBKU09OLnN0cmluZ2lmeShvdXQpLnNsaWNlKDAsIDQwMCkpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfVxufVxuY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbmNvbnN0IHN0YXJ0ID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIDEwICogNjAgKiAxMDAwKTtcbmNvbnN0IHRpbWVTdGFydCA9IHN0YXJ0LnRvSVNPU3RyaW5nKCk7XG5jb25zdCB0aW1lRW5kID0gbm93LnRvSVNPU3RyaW5nKCk7XG5jb25zdCBzY29wZSA9IGNvbXBJZCArICcvJyArIGxvZ0dyb3VwSWQgKyAnLycgKyBleGVjdXRpb25Mb2dJZDtcbmNvbnN0IHF1ZXJ5ID0gJ3NlYXJjaCBcIicgKyBzY29wZSArICdcIiB8IHNvcnQgYnkgZGF0ZXRpbWUgZGVzYyB8IGxpbWl0IDUwJztcbmNvbnN0IHIgPSBzcGF3blN5bmMoJ29jaScsIFsnbG9nZ2luZy1zZWFyY2gnLCAnc2VhcmNoLWxvZ3MnLCAnLS1zZWFyY2gtcXVlcnknLCBxdWVyeSwgJy0tdGltZS1zdGFydCcsIHRpbWVTdGFydCwgJy0tdGltZS1lbmQnLCB0aW1lRW5kXSwgeyBzdGRpbzogJ2luaGVyaXQnIH0pO1xucHJvY2Vzcy5leGl0KHIuc3RhdHVzID8/IDEpO1xuYDtcblxuLyoqIEVuc3VyZSB0YWlsLWZ1bmN0aW9uLWxvZ3MuanMgZXhpc3RzIGluIHByb2plY3REaXI7IHJlbW92ZSBsZWdhY3kgSlMgc2NyaXB0IGFuZCB3cml0ZSBmcmVzaCBmaWxlIGJhc2VkIG9uIHNjcmlwdHMvdGFpbC1mdW5jdGlvbi1sb2cuanMuIFJldHVybnMgcGF0aC4gKi9cbmZ1bmN0aW9uIGVuc3VyZVRhaWxGdW5jdGlvbkxvZ3NTY3JpcHQocHJvamVjdERpcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgcCA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAndGFpbC1mdW5jdGlvbi1sb2dzLmpzJyk7XG4gIHRyeSB7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocCkpIHtcbiAgICAgIGZzLnVubGlua1N5bmMocCk7XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICAvLyBpZ25vcmUgY2xlYW51cCBlcnJvcnNcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHRlbXBsYXRlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICdzY3JpcHRzJywgJ3RhaWwtZnVuY3Rpb24tbG9nLmpzJyk7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHRlbXBsYXRlUGF0aCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBzY3JpcHRzL3RhaWwtZnVuY3Rpb24tbG9nLmpzIGluIG9jZGsgcGFja2FnZScpO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHRlbXBsYXRlUGF0aCwgJ3V0ZjgnKTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKHAsIGNvbnRlbnQsICd1dGY4Jyk7XG4gIH0gY2F0Y2gge1xuICAgIC8vIElmIHdlIGNhbm5vdCByZWFkIHRoZSB0ZW1wbGF0ZSBmb3Igc29tZSByZWFzb24sIGxlYXZlIHRoZSBzY3JpcHQgYWJzZW50LlxuICB9XG4gIHJldHVybiBwO1xufVxuXG4vKiogUmVhZCB0ZW5hbmN5IGFuZCByZWdpb24gZnJvbSBPQ0kgQ0xJIGNvbmZpZy4gRGVmYXVsdCBmaWxlOiB+Ly5vY2kvY29uZmlnLCBkZWZhdWx0IHByb2ZpbGU6IERFRkFVTFQuICovXG5mdW5jdGlvbiByZWFkVGVuYW5jeUFuZFJlZ2lvbkZyb21DbGlDb25maWcoKTogeyB0ZW5hbmN5Pzogc3RyaW5nOyByZWdpb24/OiBzdHJpbmcgfSB7XG4gIGNvbnN0IGNvbmZpZ1BhdGggPSBwcm9jZXNzLmVudi5PQ0lfQ09ORklHX0ZJTEUgfHwgcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJy5vY2knLCAnY29uZmlnJyk7XG4gIGNvbnN0IHByb2ZpbGUgPSBwcm9jZXNzLmVudi5PQ0lfQ0xJX1BST0ZJTEUgfHwgJ0RFRkFVTFQnO1xuICB0cnkge1xuICAgIGlmICghZnMuZXhpc3RzU3luYyhjb25maWdQYXRoKSkgcmV0dXJuIHt9O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoY29uZmlnUGF0aCwgJ3V0Zi04Jyk7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgbGV0IGluUHJvZmlsZSA9IGZhbHNlO1xuICAgIGNvbnN0IHJlc3VsdDogeyB0ZW5hbmN5Pzogc3RyaW5nOyByZWdpb24/OiBzdHJpbmcgfSA9IHt9O1xuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xuICAgICAgaWYgKHRyaW1tZWQuc3RhcnRzV2l0aCgnWycpICYmIHRyaW1tZWQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBpblByb2ZpbGUgPSB0cmltbWVkLnNsaWNlKDEsIC0xKSA9PT0gcHJvZmlsZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIWluUHJvZmlsZSkgY29udGludWU7XG4gICAgICBjb25zdCBlcSA9IHRyaW1tZWQuaW5kZXhPZignPScpO1xuICAgICAgaWYgKGVxIDw9IDApIGNvbnRpbnVlO1xuICAgICAgY29uc3Qga2V5ID0gdHJpbW1lZC5zbGljZSgwLCBlcSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRyaW1tZWQuc2xpY2UoZXEgKyAxKS50cmltKCk7XG4gICAgICBpZiAoa2V5ID09PSAndGVuYW5jeScpIHJlc3VsdC50ZW5hbmN5ID0gdmFsdWU7XG4gICAgICBpZiAoa2V5ID09PSAncmVnaW9uJykgcmVzdWx0LnJlZ2lvbiA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuLyoqIEdldCBvYmplY3Qgc3RvcmFnZSBuYW1lc3BhY2UgdmlhIE9DSSBTREsgKHNhbWUgYXMgXCJvY2kgb3MgbnMgZ2V0XCIpLiBVc2VzIH4vLm9jaS9jb25maWcsIERFRkFVTFQgcHJvZmlsZS4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldE5hbWVzcGFjZUZyb21PY2lTZGsoY29tcGFydG1lbnRJZDogc3RyaW5nLCByZWdpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IGNvbmZpZ1BhdGggPSBwcm9jZXNzLmVudi5PQ0lfQ09ORklHX0ZJTEUgfHwgcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJy5vY2knLCAnY29uZmlnJyk7XG4gIGNvbnN0IHByb2ZpbGUgPSBwcm9jZXNzLmVudi5PQ0lfQ0xJX1BST0ZJTEUgfHwgJ0RFRkFVTFQnO1xuICB0cnkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGNvbW1vbi5Db25maWdGaWxlQXV0aGVudGljYXRpb25EZXRhaWxzUHJvdmlkZXIoY29uZmlnUGF0aCwgcHJvZmlsZSk7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IG9iamVjdHN0b3JhZ2UuT2JqZWN0U3RvcmFnZUNsaWVudCh7IGF1dGhlbnRpY2F0aW9uRGV0YWlsc1Byb3ZpZGVyOiBwcm92aWRlciB9KTtcbiAgICBjbGllbnQucmVnaW9uSWQgPSByZWdpb247XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQuZ2V0TmFtZXNwYWNlKHtcbiAgICAgIGNvbXBhcnRtZW50SWQsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnZhbHVlPy50cmltKCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBGaW5kIGEgSkFSIHVuZGVyIHRhcmdldC8gKHByZWZlciBvbmUgbWF0Y2hpbmcgbmFtZSwgZWxzZSBmaXJzdCAuamFyKS5cbiAqL1xuZnVuY3Rpb24gZmluZEphckluVGFyZ2V0KHByb2plY3REaXI6IHN0cmluZywgZnVuY3Rpb25OYW1lPzogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgdGFyZ2V0RGlyID0gcGF0aC5qb2luKHByb2plY3REaXIsICd0YXJnZXQnKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHRhcmdldERpcikpIHJldHVybiB1bmRlZmluZWQ7XG4gIHRyeSB7XG4gICAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyh0YXJnZXREaXIpO1xuICAgIGNvbnN0IGphcnMgPSBmaWxlcy5maWx0ZXIoKGYpID0+IGYuZW5kc1dpdGgoJy5qYXInKSAmJiAhZi5lbmRzV2l0aCgnLXNvdXJjZXMuamFyJykpO1xuICAgIGlmIChqYXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAoZnVuY3Rpb25OYW1lKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGphcnMuZmluZCgoaikgPT4gai50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICBpZiAobWF0Y2gpIHJldHVybiBwYXRoLmpvaW4odGFyZ2V0RGlyLCBtYXRjaCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4odGFyZ2V0RGlyLCBqYXJzWzBdKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKiogVHJ1ZSBpZiBwcm9qZWN0IGhhcyBwb20ueG1sIGFuZCBzcmMvIChNYXZlbiBzb3VyY2UgbGF5b3V0IGZvciBidWlsZC1mcm9tLXNvdXJjZSBEb2NrZXJmaWxlKS4gKi9cbmZ1bmN0aW9uIGhhc1BvbUFuZFNyYyhwcm9qZWN0RGlyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgcG9tID0gcGF0aC5qb2luKHByb2plY3REaXIsICdwb20ueG1sJyk7XG4gIGNvbnN0IHNyYyA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAnc3JjJyk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZzLmV4aXN0c1N5bmMocG9tKSAmJiBmcy5leGlzdHNTeW5jKHNyYykgJiYgZnMuc3RhdFN5bmMoc3JjKS5pc0RpcmVjdG9yeSgpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzY292ZXJGcm9tRnVuY1lhbWxBbmRUYXJnZXQoKToge1xuICBmdW5jdGlvbk5hbWU/OiBzdHJpbmc7XG4gIGZ1bmN0aW9uQXBwTmFtZT86IHN0cmluZztcbiAgZG9ja2VyQ29udGV4dFBhdGg/OiBzdHJpbmc7XG4gIHJ1bnRpbWU/OiBzdHJpbmc7XG4gIGltYWdlVGFnPzogc3RyaW5nO1xuICBoYW5kbGVyPzogc3RyaW5nO1xuICB1c2VUaGluRG9ja2VyZmlsZT86IGJvb2xlYW47XG4gIG1lbW9yeU1iPzogbnVtYmVyO1xuICB0aW1lb3V0U2Vjb25kcz86IG51bWJlcjtcbiAgY29uZmlnPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn0ge1xuICBsZXQgcHJvamVjdERpciA9IHByb2Nlc3MuZW52Lk9DREtfUFJPSkVDVF9ESVI/LnRyaW0oKTtcbiAgaWYgKCFwcm9qZWN0RGlyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHAgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy5vY2RrLXByb2plY3QtZGlyJyk7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkgcHJvamVjdERpciA9IGZzLnJlYWRGaWxlU3luYyhwLCAndXRmOCcpLnRyaW0oKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yZVxuICAgIH1cbiAgfVxuICBpZiAoIXByb2plY3REaXIgJiYgcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0pBUl9QQVRIPy50cmltKCkpIHtcbiAgICBjb25zdCBwID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9KQVJfUEFUSC50cmltKCkpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKHApKSBwcm9qZWN0RGlyID0gZnMuc3RhdFN5bmMocCkuaXNEaXJlY3RvcnkoKSA/IHAgOiBwYXRoLmRpcm5hbWUocCk7XG4gIH1cbiAgaWYgKCFwcm9qZWN0RGlyKSBwcm9qZWN0RGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgcHJvamVjdERpciA9IHByb2plY3REaXIgPyBwYXRoLnJlc29sdmUocHJvamVjdERpcikgOiAnJztcbiAgaWYgKCFwcm9qZWN0RGlyIHx8ICFmcy5leGlzdHNTeW5jKHByb2plY3REaXIpKSByZXR1cm4ge307XG5cbiAgY29uc3QgbmFtZUZyb21ZYW1sID0gZ2V0RnVuY1lhbWxOYW1lKHByb2plY3REaXIpO1xuICBjb25zdCBydW50aW1lID0gZ2V0RnVuY1lhbWxSdW50aW1lKHByb2plY3REaXIpO1xuICBjb25zdCBpc1B5dGhvbiA9IHJ1bnRpbWU/LnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgncHl0aG9uJykgPz8gZmFsc2U7XG4gIGNvbnN0IGphclBhdGggPSBmaW5kSmFySW5UYXJnZXQocHJvamVjdERpciwgbmFtZUZyb21ZYW1sIHx8IHVuZGVmaW5lZCk7XG4gIGNvbnN0IGhhc1NvdXJjZSA9IGhhc1BvbUFuZFNyYyhwcm9qZWN0RGlyKTtcbiAgaWYgKCFpc1B5dGhvbiAmJiAhamFyUGF0aCAmJiAhaGFzU291cmNlKSByZXR1cm4ge307XG5cbiAgY29uc3QgZnVuY3Rpb25OYW1lID0gcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX05BTUU/LnRyaW0oKSB8fCBuYW1lRnJvbVlhbWwgfHwgcGF0aC5iYXNlbmFtZShwcm9qZWN0RGlyKSB8fCAnb2NpLWZ1bmN0aW9uJztcbiAgY29uc3QgaW1hZ2VUYWcgPSBwcm9jZXNzLmVudi5PQ0lfSU1BR0VfVEFHPy50cmltKCkgfHwgZ2V0RnVuY1lhbWxWZXJzaW9uKHByb2plY3REaXIpO1xuICBjb25zdCBoYW5kbGVyID0gcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0hBTkRMRVI/LnRyaW0oKSB8fCBnZXRGdW5jWWFtbEhhbmRsZXIocHJvamVjdERpcik7XG4gIGNvbnN0IHVzZVRoaW5Eb2NrZXJmaWxlID0gaXNQeXRob24gPyBmYWxzZSA6ICEhamFyUGF0aDtcbiAgY29uc3QgbWVtb3J5TWIgPSBnZXRGdW5jWWFtbE1lbW9yeShwcm9qZWN0RGlyKTtcbiAgY29uc3QgdGltZW91dFNlY29uZHMgPSBnZXRGdW5jWWFtbFRpbWVvdXQocHJvamVjdERpcik7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEZ1bmNZYW1sQ29uZmlnKHByb2plY3REaXIpO1xuXG4gIHJldHVybiB7XG4gICAgZnVuY3Rpb25OYW1lLFxuICAgIGZ1bmN0aW9uQXBwTmFtZTogcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0FQUF9OQU1FPy50cmltKCkgfHwgZnVuY3Rpb25OYW1lLFxuICAgIGRvY2tlckNvbnRleHRQYXRoOiBwYXRoLnJlc29sdmUocHJvamVjdERpciksXG4gICAgcnVudGltZSxcbiAgICBpbWFnZVRhZzogaW1hZ2VUYWcgfHwgdW5kZWZpbmVkLFxuICAgIGhhbmRsZXI6IGhhbmRsZXIgfHwgdW5kZWZpbmVkLFxuICAgIHVzZVRoaW5Eb2NrZXJmaWxlLFxuICAgIG1lbW9yeU1iLFxuICAgIHRpbWVvdXRTZWNvbmRzLFxuICAgIGNvbmZpZyxcbiAgfTtcbn1cblxuY29uc3QgYmFja2VuZFR5cGUgPSAocHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0JBQ0tFTkRfVFlQRSB8fCAnbG9jYWwnKSBhcyAnb2NpJyB8ICdodHRwJyB8ICdsb2NhbCc7XG5cbmNvbnN0IGJhY2tlbmRDb25maWc6IE9jaUJhY2tlbmRDb25maWcgfCB1bmRlZmluZWQgPSBiYWNrZW5kVHlwZSA9PT0gJ2xvY2FsJ1xuICA/IHVuZGVmaW5lZFxuICA6IGJhY2tlbmRUeXBlID09PSAnb2NpJ1xuICAgID8ge1xuICAgICAgICB0eXBlOiAnb2NpJyxcbiAgICAgICAgYnVja2V0OiBwcm9jZXNzLmVudi5PQ0lfU1RBVEVfQlVDS0VUIHx8ICd0Zi1zdGF0ZScsXG4gICAgICAgIGtleTogcHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0tFWSB8fCAnZnVuY3Rpb24tc3RhY2svdGVycmFmb3JtLnRmc3RhdGUnLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICB0eXBlOiAnaHR0cCcsXG4gICAgICAgIGFkZHJlc3M6IHByb2Nlc3MuZW52Lk9DSV9TVEFURV9IVFRQX0FERFJFU1MgfHwgJycsXG4gICAgICAgIHVwZGF0ZU1ldGhvZDogcHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0hUVFBfVVBEQVRFX01FVEhPRCB8fCAnUFVUJyxcbiAgICAgICAgbG9ja0FkZHJlc3M6IHByb2Nlc3MuZW52Lk9DSV9TVEFURV9IVFRQX0xPQ0tfQUREUkVTUyxcbiAgICAgICAgdW5sb2NrQWRkcmVzczogcHJvY2Vzcy5lbnYuT0NJX1NUQVRFX0hUVFBfVU5MT0NLX0FERFJFU1MsXG4gICAgICB9O1xuXG4vKipcbiAqIExvYWQgT0NJIGNvbmZpZyBmcm9tIGVudiBhbmQgQ0xJIGNvbmZpZy4gV2hlbiBPQ0lfTkFNRVNQQUNFIGlzIHVuc2V0LCBmZXRjaGVzIGl0IHZpYSBPQ0kgU0RLIChnZXROYW1lc3BhY2UpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T2NpQ29uZmlnKCk6IFByb21pc2U8T2NpQ29uZmlnPiB7XG4gIGNvbnN0IGNsaUNvbmZpZyA9IHJlYWRUZW5hbmN5QW5kUmVnaW9uRnJvbUNsaUNvbmZpZygpO1xuICBjb25zdCBjb21wYXJ0bWVudElkID0gcHJvY2Vzcy5lbnYuT0NJX0NPTVBBUlRNRU5UX0lEPy50cmltKCkgfHwgJ29jaWQxLmNvbXBhcnRtZW50Lm9jMS4uYWFhYWFhYS4uLic7XG4gIGNvbnN0IG9jaXJDb21wYXJ0bWVudElkID0gcHJvY2Vzcy5lbnYuT0NJX09DSVJfQ09NUEFSVE1FTlRfSUQ/LnRyaW0oKSB8fCBwcm9jZXNzLmVudi5PQ0lfQ09NUEFSVE1FTlRfSUQ/LnRyaW0oKSB8fCBjb21wYXJ0bWVudElkO1xuICBjb25zdCB0ZW5hbmN5SWQgPSBwcm9jZXNzLmVudi5PQ0lfVEVOQU5DWV9JRD8udHJpbSgpIHx8IGNsaUNvbmZpZy50ZW5hbmN5Py50cmltKCkgfHwgJ29jaWQxLnRlbmFuY3kub2MxLi5hYWFhYWFhLi4uJztcbiAgY29uc3QgcmVnaW9uID0gcHJvY2Vzcy5lbnYuT0NJX1JFR0lPTj8udHJpbSgpIHx8IGNsaUNvbmZpZy5yZWdpb24/LnRyaW0oKSB8fCAnZXUtZnJhbmtmdXJ0LTEnO1xuXG4gIGlmICghb2NpckNvbXBhcnRtZW50SWQgfHwgb2NpckNvbXBhcnRtZW50SWQuaW5jbHVkZXMoJ3Jvb3QnKSkge1xuICAgIGNvbnNvbGUud2Fybign4pqg77iPICBXQVJOSU5HOiBPQ0lfT0NJUl9DT01QQVJUTUVOVF9JRCBub3Qgc2V0IG9yIHNldCB0byByb290IGNvbXBhcnRtZW50LicpO1xuICAgIGNvbnNvbGUud2FybignICAgUGxlYXNlIHNldCBPQ0lfT0NJUl9DT01QQVJUTUVOVF9JRCB0byB5b3VyIGhvbWUgY29tcGFydG1lbnQgT0NJRC4nKTtcbiAgICBjb25zb2xlLndhcm4oJyAgIEV4YW1wbGU6IGV4cG9ydCBPQ0lfT0NJUl9DT01QQVJUTUVOVF9JRD1cIm9jaWQxLmNvbXBhcnRtZW50Lm9jMS4uYWFhYWFhYS4uLlwiJyk7XG4gIH1cblxuICBsZXQgbmFtZXNwYWNlID0gcHJvY2Vzcy5lbnYuT0NJX05BTUVTUEFDRT8udHJpbSgpO1xuICBpZiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09ICd5b3VyLW5hbWVzcGFjZScpIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IGF3YWl0IGdldE5hbWVzcGFjZUZyb21PY2lTZGsoY29tcGFydG1lbnRJZCwgcmVnaW9uKTtcbiAgICBpZiAocmVzb2x2ZWQpIG5hbWVzcGFjZSA9IHJlc29sdmVkO1xuICAgIGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9ICd5b3VyLW5hbWVzcGFjZSc7XG4gICAgaWYgKG5hbWVzcGFjZSA9PT0gJ3lvdXItbmFtZXNwYWNlJykge1xuICAgICAgY29uc29sZS53YXJuKCfimqDvuI8gIE9DSV9OQU1FU1BBQ0Ugbm90IHNldCBhbmQgU0RLIGNvdWxkIG5vdCByZXNvbHZlIGl0LiBTZXQgT0NJX05BTUVTUEFDRSBvciBydW4gXCJvY2kgc2V0dXAgY29uZmlnXCIuJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzY292ZXJlZCA9IGRpc2NvdmVyRnJvbUZ1bmNZYW1sQW5kVGFyZ2V0KCk7XG5cbiAgY29uc3QgaW1hZ2VUYWcgPSBwcm9jZXNzLmVudi5PQ0lfSU1BR0VfVEFHPy50cmltKCkgfHwgZGlzY292ZXJlZC5pbWFnZVRhZyB8fCAnbGF0ZXN0JztcblxuICBsZXQgZG9ja2VyQ29udGV4dFBhdGggPSBkaXNjb3ZlcmVkLmRvY2tlckNvbnRleHRQYXRoO1xuICBpZiAoIWRvY2tlckNvbnRleHRQYXRoICYmIHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9KQVJfUEFUSD8udHJpbSgpKSB7XG4gICAgY29uc3QgcCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fSkFSX1BBVEgudHJpbSgpKTtcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwKSkgZG9ja2VyQ29udGV4dFBhdGggPSBmcy5zdGF0U3luYyhwKS5pc0RpcmVjdG9yeSgpID8gcCA6IHBhdGguZGlybmFtZShwKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXIgPSBwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fSEFORExFUj8udHJpbSgpIHx8IGRpc2NvdmVyZWQuaGFuZGxlcjtcbiAgY29uc3QgdXNlVGhpbkRvY2tlcmZpbGUgPSBkaXNjb3ZlcmVkLnVzZVRoaW5Eb2NrZXJmaWxlID8/IGZhbHNlO1xuXG4gIGNvbnN0IG1lbW9yeUVudiA9IHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9NRU1PUllfTUI/LnRyaW0oKTtcbiAgY29uc3QgZnVuY3Rpb25NZW1vcnlNYiA9IG1lbW9yeUVudlxuICAgID8gU3RyaW5nKHBhcnNlSW50KG1lbW9yeUVudiwgMTApKVxuICAgIDogKGRpc2NvdmVyZWQubWVtb3J5TWIgIT0gbnVsbCA/IFN0cmluZyhkaXNjb3ZlcmVkLm1lbW9yeU1iKSA6IHVuZGVmaW5lZCk7XG5cbiAgY29uc3QgdGltZW91dEVudiA9IHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9USU1FT1VUX1NFQ09ORFM/LnRyaW0oKTtcbiAgY29uc3QgZnVuY3Rpb25UaW1lb3V0U2Vjb25kcyA9IHRpbWVvdXRFbnZcbiAgICA/IHBhcnNlSW50KHRpbWVvdXRFbnYsIDEwKVxuICAgIDogZGlzY292ZXJlZC50aW1lb3V0U2Vjb25kcztcblxuICBsZXQgZnVuY3Rpb25Db25maWcgPSBkaXNjb3ZlcmVkLmNvbmZpZztcbiAgY29uc3QgY29uZmlnRW52ID0gcHJvY2Vzcy5lbnYuT0NJX0ZVTkNUSU9OX0NPTkZJRz8udHJpbSgpO1xuICBpZiAoY29uZmlnRW52KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoY29uZmlnRW52KSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICAgICAgZnVuY3Rpb25Db25maWcgPSB7IC4uLmZ1bmN0aW9uQ29uZmlnLCAuLi5wYXJzZWQgfTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yZSBpbnZhbGlkIEpTT05cbiAgICB9XG4gIH1cbiAgaWYgKGZ1bmN0aW9uQ29uZmlnICYmIE9iamVjdC5rZXlzKGZ1bmN0aW9uQ29uZmlnKS5sZW5ndGggPT09IDApIGZ1bmN0aW9uQ29uZmlnID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGFwaUd3RGVwbG95bWVudEpzb25FbnYgPSBwcm9jZXNzLmVudi5PQ0lfQVBJR0FURVdBWV9ERVBMT1lNRU5UX0pTT04/LnRyaW0oKTtcbiAgY29uc3QgYXBpR3dEZXBsb3ltZW50SnNvblBhdGggPSBhcGlHd0RlcGxveW1lbnRKc29uRW52XG4gICAgPyBwYXRoLnJlc29sdmUoYXBpR3dEZXBsb3ltZW50SnNvbkVudilcbiAgICA6IGRvY2tlckNvbnRleHRQYXRoXG4gICAgICA/IGVuc3VyZURlZmF1bHRBcGlHd0RlcGxveW1lbnRKc29uKGRvY2tlckNvbnRleHRQYXRoKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIGlmIChkb2NrZXJDb250ZXh0UGF0aCkge1xuICAgIGVuc3VyZVRhaWxGdW5jdGlvbkxvZ3NTY3JpcHQoZG9ja2VyQ29udGV4dFBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJ0bWVudElkLFxuICAgIG9jaXJDb21wYXJ0bWVudElkOiBvY2lyQ29tcGFydG1lbnRJZCB8fCB1bmRlZmluZWQsXG4gICAgdGVuYW5jeUlkLFxuICAgIHJlZ2lvbixcbiAgICBuYW1lc3BhY2UsXG4gICAgZnVuY3Rpb25BcHBOYW1lOiBwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fQVBQX05BTUUgPz8gZGlzY292ZXJlZC5mdW5jdGlvbkFwcE5hbWUgPz8gJycsXG4gICAgZnVuY3Rpb25OYW1lOiBwcm9jZXNzLmVudi5PQ0lfRlVOQ1RJT05fTkFNRSA/PyBkaXNjb3ZlcmVkLmZ1bmN0aW9uTmFtZSA/PyAnJyxcbiAgICBmdW5jdGlvbkphclBhdGg6IHByb2Nlc3MuZW52Lk9DSV9GVU5DVElPTl9KQVJfUEFUSD8udHJpbSgpIHx8IHVuZGVmaW5lZCxcbiAgICBkb2NrZXJDb250ZXh0UGF0aDogZG9ja2VyQ29udGV4dFBhdGggfHwgdW5kZWZpbmVkLFxuICAgIHJ1bnRpbWU6IGRpc2NvdmVyZWQucnVudGltZSxcbiAgICBpbWFnZVRhZyxcbiAgICBoYW5kbGVyOiBoYW5kbGVyIHx8IHVuZGVmaW5lZCxcbiAgICB1c2VUaGluRG9ja2VyZmlsZSxcbiAgICBvY2lyUmVwb3NpdG9yeU5hbWU6IHByb2Nlc3MuZW52Lk9DSV9PQ0lSX1JFUE9TSVRPUllfTkFNRSB8fCB1bmRlZmluZWQsXG4gICAgZnVuY3Rpb25NZW1vcnlNYjogZnVuY3Rpb25NZW1vcnlNYiB8fCB1bmRlZmluZWQsXG4gICAgZnVuY3Rpb25UaW1lb3V0U2Vjb25kczogZnVuY3Rpb25UaW1lb3V0U2Vjb25kcyA/PyB1bmRlZmluZWQsXG4gICAgZnVuY3Rpb25Db25maWcsXG4gICAgYXBpR3dEZXBsb3ltZW50SnNvblBhdGg6IGFwaUd3RGVwbG95bWVudEpzb25QYXRoIHx8IHVuZGVmaW5lZCxcbiAgICBiYWNrZW5kOiBiYWNrZW5kQ29uZmlnLFxuICB9O1xufVxuIl19