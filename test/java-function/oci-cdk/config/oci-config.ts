/**
 * OCI Configuration for Test Function
 *
 * Required env vars (no defaults; throws if missing):
 * - OCI_COMPARTMENT_OCID (or OCI_COMPARTMENT_ID)
 * - OCI_OCIR_COMPARTMENT_OCID (or same as compartment; root allowed if explicitly set)
 * - OCI_TENANCY_OCID (or OCI_TENANCY_ID) – if unset, read from OCI CLI config (see below)
 * - OCI_REGION – if unset, read from OCI CLI config (see below)
 *
 * OCI CLI config: default file is ~/.oci/config, default profile is DEFAULT.
 * - OCI_NAMESPACE – if unset, obtained via OCI SDK (Object Storage getNamespace, same as "oci os ns get")
 * - OCI_FUNCTION_APP_NAME
 * - OCI_FUNCTION_NAME
 * - OCI_OCIR_REPOSITORY_NAME (if unset, uses OCI_FUNCTION_APP_NAME)
 *
 * Optional (OCI CLI config): config file default is ~/.oci/config, profile default is DEFAULT.
 * - OCI_CONFIG_FILE – override config file path
 * - OCI_CLI_PROFILE – override profile name
 * - PG_URL – PostgreSQL connection string. If set with OCI_VAULT_OCID, stack creates Vault secret (OCI_KEY_OCID required). Otherwise passed to function as config (clear-text; warning emitted).
 * - OCI_VAULT_OCID, OCI_KEY_OCID – when set with PG_URL, stack creates secret in Vault.
 * - PG_SECRET_OCID – existing OCI Vault secret OCID for PG (when PG_URL is not set).
 *
 * The Functions resource requires the container image to already exist in OCIR
 * (e.g. build and push with scripts/build-docker.sh and scripts/deploy-oci-function.sh).
 */

import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as common from 'oci-common';
import * as objectstorage from 'oci-objectstorage';

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
  ocirRepositoryName?: string;
  /** When set, stack creates Vault secret "test-pg-url" from this value (requires vaultOcid and keyOcid when using Vault). */
  pgUrl?: string;
  /** Vault OCID for creating test-pg-url secret (required when pgUrl is set and using Vault). */
  vaultOcid?: string;
  /** KMS Key OCID for encrypting test-pg-url secret (required when vaultOcid is set). */
  keyOcid?: string;
  /** When pgUrl is not set: use this existing OCI Vault secret OCID for PG (set PG_SECRET_OCID env var). */
  pgSecretOcid?: string;
  backend?: OciBackendConfig;
}

const backendType = (process.env.OCI_STATE_BACKEND_TYPE || 'local') as 'oci' | 'http' | 'local';

const backendConfig: OciBackendConfig | undefined = backendType === 'local'
  ? undefined
  : backendType === 'oci'
    ? {
        type: 'oci',
        bucket: process.env.OCI_STATE_BUCKET || 'tf-state',
        key: process.env.OCI_STATE_KEY || 'test-function-stack/terraform.tfstate',
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
  const compartmentId = process.env.OCI_COMPARTMENT_OCID?.trim() || process.env.OCI_COMPARTMENT_ID?.trim();
  if (!compartmentId) {
    throw new Error(
      'OCI_COMPARTMENT_OCID is required (or OCI_COMPARTMENT_ID). Example: export OCI_COMPARTMENT_OCID="ocid1.compartment.oc1..aaaaaaa..."'
    );
  }

  const ocirCompartmentOcid = process.env.OCI_OCIR_COMPARTMENT_OCID?.trim() || process.env.OCI_OCIR_COMPARTMENT_ID?.trim() || compartmentId;
  if (!ocirCompartmentOcid) {
    throw new Error(
      'OCI_OCIR_COMPARTMENT_OCID is required (or set OCI_COMPARTMENT_OCID to use the same compartment). ' +
      'Example: export OCI_OCIR_COMPARTMENT_OCID="ocid1.compartment.oc1..aaaaaaa..."'
    );
  }

  const cliConfig = readTenancyAndRegionFromCliConfig();
  const tenancyId = process.env.OCI_TENANCY_OCID?.trim() || process.env.OCI_TENANCY_ID?.trim() || cliConfig.tenancy?.trim();
  if (!tenancyId) {
    throw new Error(
      'OCI_TENANCY_OCID is required (or OCI_TENANCY_ID), or run "oci setup config" so it can be read from ~/.oci/config'
    );
  }

  const region = process.env.OCI_REGION?.trim() || cliConfig.region?.trim();
  if (!region) {
    throw new Error(
      'OCI_REGION is required (or set in ~/.oci/config). Example: export OCI_REGION="eu-frankfurt-1"'
    );
  }

  let namespace = process.env.OCI_NAMESPACE?.trim();
  if (!namespace || namespace === 'your-namespace') {
    namespace = (await getNamespaceFromOciSdk(compartmentId, region)) ?? '';
  }
  if (!namespace) {
    throw new Error(
      'OCI_NAMESPACE is required. Set it, or ensure OCI SDK can read it (oci setup config and same credentials for Object Storage). ' +
      'Example: export OCI_NAMESPACE="your-actual-namespace"'
    );
  }

  const functionAppName = process.env.OCI_FUNCTION_APP_NAME?.trim();
  if (!functionAppName) {
    throw new Error(
      'OCI_FUNCTION_APP_NAME is required. Example: export OCI_FUNCTION_APP_NAME="my-function-app"'
    );
  }

  const functionName = process.env.OCI_FUNCTION_NAME?.trim();
  if (!functionName) {
    throw new Error(
      'OCI_FUNCTION_NAME is required. Example: export OCI_FUNCTION_NAME="my-function"'
    );
  }

  const ocirRepositoryName = process.env.OCI_OCIR_REPOSITORY_NAME?.trim() || functionAppName;

  return {
    compartmentId,
    ocirCompartmentId: ocirCompartmentOcid,
    tenancyId,
    region,
    namespace,
    functionAppName,
    functionName,
    ocirRepositoryName,
    pgUrl: process.env.PG_URL?.trim() || undefined,
    vaultOcid: process.env.OCI_VAULT_OCID?.trim() || undefined,
    keyOcid: process.env.OCI_KEY_OCID?.trim() || undefined,
    pgSecretOcid: process.env.PG_SECRET_OCID?.trim() || undefined,
    backend: backendConfig,
  };
}
