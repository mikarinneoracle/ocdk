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
 * - OCDK_PROJECT_DIR (set by ocdk CLI to caller cwd; used to discover func.yaml and target/)
 * - OCI_STATE_BUCKET (for remote state)
 * - OCI_STATE_BACKEND_TYPE (oci|http|local)
 *
 * When OCDK_PROJECT_DIR is set (e.g. running `npx ocdk deploy` from a Java project), config
 * discovers either target/*.jar or pom.xml+src/ (and optionally func.yaml name, version, cmd/handler).
 * No Dockerfile is required—the stack generates one in local-exec (excluding node_modules via .dockerignore),
 * then builds, tags (from func.yaml version), and pushes to OCIR.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as common from 'oci-common';
import * as objectstorage from 'oci-objectstorage';

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
  /** Runtime from func.yaml (e.g. 'java', 'python'); controls Dockerfile generation. */
  runtime?: string;
  /** Image tag for OCIR (from func.yaml version or OCI_IMAGE_TAG; default 'latest'). */
  imageTag?: string;
  /** Java FDK CMD handler (from func.yaml cmd/handler or OCI_FUNCTION_HANDLER; default below). */
  handler?: string;
  /** When true, deploy uses a thin Dockerfile (COPY target/*.jar only); full Maven build only in redeploy:function. */
  useThinDockerfile?: boolean;
  ocirRepositoryName?: string;
  /** Function memory in MB (128, 256, 512, 1024, 2048, 3072). From func.yaml memory or OCI_FUNCTION_MEMORY_MB. */
  functionMemoryMb?: string;
  /** Function timeout in seconds (1–300). From func.yaml timeout or OCI_FUNCTION_TIMEOUT_SECONDS. */
  functionTimeoutSeconds?: number;
  /** Function config/env key-value. From func.yaml config or OCI_FUNCTION_CONFIG (JSON object string). */
  functionConfig?: Record<string, string>;
  /** Path to API Gateway deployment spec JSON (routes). Use OCI_APIGATEWAY_DEPLOYMENT_JSON or default oci_apigateway_deployment.json in project root. */
  apiGwDeploymentJsonPath?: string;
  backend?: OciBackendConfig;
}

const DEFAULT_APIGW_DEPLOYMENT_JSON = JSON.stringify(
  {
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
  },
  null,
  2
);

/** OCIR short region keys (e.g. eu-frankfurt-1 -> fra). Used so login, build, push and function image all use same registry host. */
export const REGION_TO_OCIR_HOST: Record<string, string> = {
  'eu-frankfurt-1': 'fra', 'us-phoenix-1': 'phx', 'us-ashburn-1': 'iad', 'uk-london-1': 'lhr',
  'ap-tokyo-1': 'nrt', 'ap-mumbai-1': 'bom', 'ap-seoul-1': 'icn', 'ca-toronto-1': 'yyz',
  'sa-saopaulo-1': 'gru', 'ap-sydney-1': 'syd', 'eu-zurich-1': 'zrh', 'me-dubai-1': 'dxb',
  'ap-osaka-1': 'kix', 'eu-amsterdam-1': 'ams', 'ap-singapore-1': 'sin', 'ap-hyderabad-1': 'hyd',
  'eu-milan-1': 'mxp', 'sa-santiago-1': 'scl', 'ap-melbourne-1': 'mel', 'eu-stockholm-1': 'arn',
  'me-jeddah-1': 'jed', 'af-johannesburg-1': 'jnb', 'il-jerusalem-1': 'tlv', 'mx-queretaro-1': 'qro',
  'eu-marseille-1': 'mrs',
};

export function ocirHostKey(region: string): string {
  return REGION_TO_OCIR_HOST[region] ?? region;
}

/** Full OCIR image URL for the function (registry/namespace/repo:tag). */
export function getOciImageUrl(config: OciConfig): string {
  const registry = `${ocirHostKey(config.region)}.ocir.io`;
  const repo = config.ocirRepositoryName || config.functionName || 'oci-function';
  const tag = config.imageTag || 'latest';
  return `${registry}/${config.namespace}/${repo}:${tag}`;
}

/**
 * Try to read function name from func.yaml (OCI Functions format).
 * Returns the value of the first "name:" line, trimmed.
 */
function getFuncYamlName(projectDir: string): string | undefined {
  const p = path.join(projectDir, 'func.yaml');
  try {
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf8');
      const m = content.match(/^\s*name:\s*["']?([^"'\s\n]+)["']?/m);
      if (m) return m[1].trim();
    }
  } catch {
    // ignore
  }
  return undefined;
}

/**
 * Try to read runtime from func.yaml (OCI Functions format), e.g. 'java', 'python'.
 * Returns the value of the first "runtime:" line, trimmed.
 */
function getFuncYamlRuntime(projectDir: string): string | undefined {
  const p = path.join(projectDir, 'func.yaml');
  try {
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf8');
      const m = content.match(/^\s*runtime:\s*["']?([^"'\s\n]+)["']?/m);
      if (m) return m[1].trim();
    }
  } catch {
    // ignore
  }
  return undefined;
}

/**
 * Try to read cmd/handler from func.yaml (OCI/Fn format).
 * Returns the value of "cmd:" or "handler:" line, trimmed; used as Docker CMD for Java FDK.
 */
function getFuncYamlHandler(projectDir: string): string | undefined {
  const p = path.join(projectDir, 'func.yaml');
  try {
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf8');
      const cmdMatch = content.match(/^\s*cmd:\s*["']?([^"'\n]+)["']?/m);
      if (cmdMatch) return cmdMatch[1].trim();
      const handlerMatch = content.match(/^\s*handler:\s*["']?([^"'\n]+)["']?/m);
      if (handlerMatch) return handlerMatch[1].trim();
    }
  } catch {
    // ignore
  }
  return undefined;
}

/**
 * Try to read version from func.yaml (used as OCIR image tag).
 * Returns the value of the first "version:" line, trimmed; sanitized for Docker tag (a-zA-Z0-9_.-).
 */
function getFuncYamlVersion(projectDir: string): string | undefined {
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
  } catch {
    // ignore
  }
  return undefined;
}

const VALID_MEMORY_MB = new Set([128, 256, 512, 1024, 2048, 3072]);

/**
 * Try to read memory (MB) from func.yaml. OCI allows 128, 256, 512, 1024, 2048, 3072.
 * Returns the number if present and valid; otherwise undefined.
 */
function getFuncYamlMemory(projectDir: string): number | undefined {
  const p = path.join(projectDir, 'func.yaml');
  try {
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf8');
      const m = content.match(/^\s*memory:\s*(\d+)\s*$/m);
      if (m) {
        const n = parseInt(m[1], 10);
        if (VALID_MEMORY_MB.has(n)) return n;
      }
    }
  } catch {
    // ignore
  }
  return undefined;
}

/**
 * Try to read timeout (seconds) from func.yaml. OCI max is 300.
 * Returns the number if present and in range 1–300; otherwise undefined.
 */
function getFuncYamlTimeout(projectDir: string): number | undefined {
  const p = path.join(projectDir, 'func.yaml');
  try {
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf8');
      const m = content.match(/^\s*timeout:\s*(\d+)\s*$/m);
      if (m) {
        const n = parseInt(m[1], 10);
        if (n >= 1 && n <= 300) return n;
      }
    }
  } catch {
    // ignore
  }
  return undefined;
}

/**
 * Try to read config (key-value env) from func.yaml. Expects a top-level "config:" block with key: value lines.
 * Returns a record of string keys and string values; empty if none or parse error.
 */
function getFuncYamlConfig(projectDir: string): Record<string, string> | undefined {
  const p = path.join(projectDir, 'func.yaml');
  try {
    if (!fs.existsSync(p)) return undefined;
    const content = fs.readFileSync(p, 'utf8');
    const lines = content.split(/\r?\n/);
    let inConfig = false;
    const config: Record<string, string> = {};
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed === 'config:' || /^config\s*:\s*$/.test(trimmed)) {
        inConfig = true;
        continue;
      }
      if (inConfig) {
        if (trimmed !== '' && !line.startsWith(' ') && !line.startsWith('\t')) break;
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
  } catch {
    return undefined;
  }
}

/** Ensure oci_apigateway_deployment.json exists in projectDir; write default if missing. Skip when STACK_ACTION=function. Returns path. */
function ensureDefaultApiGwDeploymentJson(projectDir: string): string {
  if (process.env.STACK_ACTION?.trim().toLowerCase() === 'function') {
    return path.join(projectDir, 'oci_apigateway_deployment.json'); // return path but do not create file
  }
  const p = path.join(projectDir, 'oci_apigateway_deployment.json');
  if (!fs.existsSync(p)) {
    fs.writeFileSync(p, DEFAULT_APIGW_DEPLOYMENT_JSON, 'utf8');
  }
  return p;
}

/** Ensure tail-function-logs.js exists in projectDir (copy from package scripts). If .ocdk-logs.json exists, inject its IDs as in-code defaults. */
function ensureTailFunctionLogsScript(projectDir: string): string {
  const dest = path.join(projectDir, 'tail-function-logs.js');
  const src = path.join(__dirname, '..', 'scripts', 'tail-function-log.js');
  if (fs.existsSync(src)) {
    let content = fs.readFileSync(src, 'utf8');
    const logsJsonPath = path.join(projectDir, '.ocdk-logs.json');
    if (fs.existsSync(logsJsonPath)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(logsJsonPath, 'utf8'));
        if (parsed && typeof parsed.execution_log_id === 'string') {
          content = content.replace(/__EXECUTION_LOG_ID__/g, parsed.execution_log_id);
        }
        if (parsed && typeof parsed.log_group_id === 'string') {
          content = content.replace(/__LOG_GROUP_ID__/g, parsed.log_group_id);
        }
      } catch {
        // leave placeholders if .ocdk-logs.json is invalid
      }
    }
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

const dir = process.env.OCDK_PROJECT_DIR || __dirname;
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
function readTenancyAndRegionFromCliConfig(): { tenancy?: string; region?: string } {
  const configPath = process.env.OCI_CONFIG_FILE || path.join(os.homedir(), '.oci', 'config');
  const profile = process.env.OCI_CLI_PROFILE || 'DEFAULT';
  try {
    if (!fs.existsSync(configPath)) return {};
    const content = fs.readFileSync(configPath, 'utf-8');
    const lines = content.split(/\r?\n/);
    let inProfile = false;
    const result: { tenancy?: string; region?: string } = {};
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        inProfile = trimmed.slice(1, -1) === profile;
        continue;
      }
      if (!inProfile) continue;
      const eq = trimmed.indexOf('=');
      if (eq <= 0) continue;
      const key = trimmed.slice(0, eq).trim().toLowerCase();
      const value = trimmed.slice(eq + 1).trim();
      if (key === 'tenancy') result.tenancy = value;
      if (key === 'region') result.region = value;
    }
    return result;
  } catch {
    return {};
  }
}

/** Get object storage namespace via OCI SDK (same as "oci os ns get"). Uses ~/.oci/config, DEFAULT profile. */
async function getNamespaceFromOciSdk(compartmentId: string, region: string): Promise<string | undefined> {
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
  } catch {
    return undefined;
  }
}

/**
 * Find a JAR under target/ (prefer one matching name, else first .jar).
 */
function findJarInTarget(projectDir: string, functionName?: string): string | undefined {
  const targetDir = path.join(projectDir, 'target');
  if (!fs.existsSync(targetDir)) return undefined;
  try {
    const files = fs.readdirSync(targetDir);
    const jars = files.filter((f) => f.endsWith('.jar') && !f.endsWith('-sources.jar'));
    if (jars.length === 0) return undefined;
    if (functionName) {
      const match = jars.find((j) => j.toLowerCase().includes(functionName.toLowerCase()));
      if (match) return path.join(targetDir, match);
    }
    return path.join(targetDir, jars[0]);
  } catch {
    return undefined;
  }
}

/** True if project has pom.xml and src/ (Maven source layout for build-from-source Dockerfile). */
function hasPomAndSrc(projectDir: string): boolean {
  const pom = path.join(projectDir, 'pom.xml');
  const src = path.join(projectDir, 'src');
  try {
    return fs.existsSync(pom) && fs.existsSync(src) && fs.statSync(src).isDirectory();
  } catch {
    return false;
  }
}

function discoverFromFuncYamlAndTarget(): {
  functionName?: string;
  functionAppName?: string;
  dockerContextPath?: string;
  runtime?: string;
  imageTag?: string;
  handler?: string;
  useThinDockerfile?: boolean;
  memoryMb?: number;
  timeoutSeconds?: number;
  config?: Record<string, string>;
} {
  let projectDir = process.env.OCDK_PROJECT_DIR?.trim();
  if (!projectDir) {
    try {
      const p = path.join(process.cwd(), '.ocdk-project-dir');
      if (fs.existsSync(p)) projectDir = fs.readFileSync(p, 'utf8').trim();
    } catch {
      // ignore
    }
  }
  if (!projectDir && process.env.OCI_FUNCTION_JAR_PATH?.trim()) {
    const p = path.resolve(process.env.OCI_FUNCTION_JAR_PATH.trim());
    if (fs.existsSync(p)) projectDir = fs.statSync(p).isDirectory() ? p : path.dirname(p);
  }
  if (!projectDir) projectDir = process.cwd();
  projectDir = projectDir ? path.resolve(projectDir) : '';
  if (!projectDir || !fs.existsSync(projectDir)) return {};

  const nameFromYaml = getFuncYamlName(projectDir);
  const runtime = getFuncYamlRuntime(projectDir);
  const isPython = runtime?.toLowerCase().startsWith('python') ?? false;
  const jarPath = findJarInTarget(projectDir, nameFromYaml || undefined);
  const hasSource = hasPomAndSrc(projectDir);
  if (!isPython && !jarPath && !hasSource) return {};

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

const backendType = (process.env.OCI_STATE_BACKEND_TYPE || 'local') as 'oci' | 'http' | 'local';

const backendConfig: OciBackendConfig | undefined = backendType === 'local'
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
export async function getOciConfig(): Promise<OciConfig> {
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
    if (resolved) namespace = resolved;
    else if (!namespace) namespace = 'your-namespace';
    if (namespace === 'your-namespace') {
      console.warn('⚠️  OCI_NAMESPACE not set and SDK could not resolve it. Set OCI_NAMESPACE or run "oci setup config".');
    }
  }

  const discovered = discoverFromFuncYamlAndTarget();

  const imageTag = process.env.OCI_IMAGE_TAG?.trim() || discovered.imageTag || 'latest';

  let dockerContextPath = discovered.dockerContextPath;
  if (!dockerContextPath && process.env.OCI_FUNCTION_JAR_PATH?.trim()) {
    const p = path.resolve(process.env.OCI_FUNCTION_JAR_PATH.trim());
    if (fs.existsSync(p)) dockerContextPath = fs.statSync(p).isDirectory() ? p : path.dirname(p);
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
      const parsed = JSON.parse(configEnv) as Record<string, string>;
      functionConfig = { ...functionConfig, ...parsed };
    } catch {
      // ignore invalid JSON
    }
  }
  if (functionConfig && Object.keys(functionConfig).length === 0) functionConfig = undefined;

  const apiGwDeploymentJsonEnv = process.env.OCI_APIGATEWAY_DEPLOYMENT_JSON?.trim();
  const stackAction = process.env.STACK_ACTION?.trim().toLowerCase();
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
