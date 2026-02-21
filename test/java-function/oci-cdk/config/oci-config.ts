/**
 * OCI Configuration for Test Function
 *
 * Required env vars:
 * - OCI_NAMESPACE – tenancy object storage namespace (oci os ns get). Required for OCIR image URL.
 *
 * Required (or use OCI_COMPARTMENT_OCID for both):
 * - OCI_OCIR_COMPARTMENT_OCID – compartment OCID for the OCIR repository (cannot be root). (OCI_OCIR_COMPARTMENT_ID also accepted.)
 *
 * Optional / defaults:
 * - OCI_COMPARTMENT_OCID, OCI_TENANCY_OCID, OCI_REGION, OCI_OCIR_REPOSITORY_NAME (OCI_*_ID env vars also accepted for compartment/tenancy.)
 * - PG_URL – PostgreSQL connection string. If set: when OCI_VAULT_OCID is not set, passed to function as config (clear-text; a warning is emitted—prefer Vault for production). When OCI_VAULT_OCID is set, stack creates Vault secret "test-pg-url" (OCI_KEY_OCID required).
 * - OCI_VAULT_OCID – when set with PG_URL, stack creates secret in this Vault (OCI_KEY_OCID required). Use this to avoid storing credentials in function config.
 * - OCI_KEY_OCID – required when OCI_VAULT_OCID is set (KMS Key OCID for encrypting the secret).
 * - PG_SECRET_OCID – alternative: existing OCI Vault secret OCID for PG (used when PG_URL is not set).
 *
 * The Functions resource requires the container image to already exist in OCIR
 * (e.g. build and push with scripts/build-docker.sh and scripts/deploy-oci-function.sh).
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

const ocirCompartmentOcid = process.env.OCI_OCIR_COMPARTMENT_OCID || process.env.OCI_OCIR_COMPARTMENT_ID || process.env.OCI_COMPARTMENT_OCID || process.env.OCI_COMPARTMENT_ID;

if (!ocirCompartmentOcid) {
  throw new Error(
    'OCI_OCIR_COMPARTMENT_OCID is required (or set OCI_COMPARTMENT_OCID to use the same compartment for everything). ' +
    'OCIR repositories cannot be created in the root compartment.'
  );
}
if (ocirCompartmentOcid.includes('root')) {
  throw new Error(
    'OCI_OCIR_COMPARTMENT_OCID cannot be the root compartment. ' +
    'Set it to a non-root compartment OCID (e.g. your home compartment).'
  );
}

const namespace = process.env.OCI_NAMESPACE || '';
if (!namespace || namespace === 'your-namespace') {
  throw new Error(
    'OCI_NAMESPACE is required. Set it to your tenancy object storage namespace (e.g. run: oci os ns get). ' +
    'Example: export OCI_NAMESPACE="your-actual-namespace"'
  );
}

export const ociConfig: OciConfig = {
  compartmentId: process.env.OCI_COMPARTMENT_OCID || process.env.OCI_COMPARTMENT_ID || 'ocid1.compartment.oc1..aaaaaaa...',
  ocirCompartmentId: ocirCompartmentOcid || undefined,
  tenancyId: process.env.OCI_TENANCY_OCID || process.env.OCI_TENANCY_ID || 'ocid1.tenancy.oc1..aaaaaaa...',
  region: process.env.OCI_REGION || 'eu-frankfurt-1',
  namespace,
  functionAppName: 'test-function-app',
  functionName: 'test-java-function',
  ocirRepositoryName: process.env.OCI_OCIR_REPOSITORY_NAME || 'test-java-function',
  pgUrl: process.env.PG_URL,
  vaultOcid: process.env.OCI_VAULT_OCID,
  keyOcid: process.env.OCI_KEY_OCID,
  pgSecretOcid: process.env.PG_SECRET_OCID,
  backend: backendConfig,
};
