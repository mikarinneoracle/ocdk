/**
 * OCI Configuration for Test Function
 *
 * Required env vars:
 * - OCI_NAMESPACE – tenancy object storage namespace (oci os ns get). Required for OCIR image URL.
 *
 * Required (or use OCI_COMPARTMENT_ID for both):
 * - OCI_OCIR_COMPARTMENT_ID – compartment for the OCIR repository (cannot be root).
 *
 * Optional / defaults:
 * - OCI_COMPARTMENT_ID, OCI_TENANCY_ID, OCI_REGION, OCI_OCIR_REPOSITORY_NAME
 * - PG_SECRET_OCID – OCI Vault secret OCID for PostgreSQL connection string (injected as function config PG_SECRET_OCID)
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
  /** OCI Vault secret OCID for PG connection string (set PG_SECRET_OCID env var). */
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

const ocirCompartmentId = process.env.OCI_OCIR_COMPARTMENT_ID || process.env.OCI_COMPARTMENT_ID;

if (!ocirCompartmentId) {
  throw new Error(
    'OCI_OCIR_COMPARTMENT_ID is required (or set OCI_COMPARTMENT_ID to use the same compartment for everything). ' +
    'OCIR repositories cannot be created in the root compartment.'
  );
}
if (ocirCompartmentId.includes('root')) {
  throw new Error(
    'OCI_OCIR_COMPARTMENT_ID cannot be the root compartment. ' +
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
  compartmentId: process.env.OCI_COMPARTMENT_ID || 'ocid1.compartment.oc1..aaaaaaa...',
  ocirCompartmentId: ocirCompartmentId || undefined,
  tenancyId: process.env.OCI_TENANCY_ID || 'ocid1.tenancy.oc1..aaaaaaa...',
  region: process.env.OCI_REGION || 'eu-frankfurt-1',
  namespace,
  functionAppName: 'test-function-app',
  functionName: 'test-java-function',
  ocirRepositoryName: process.env.OCI_OCIR_REPOSITORY_NAME || 'test-java-function',
  pgSecretOcid: process.env.PG_SECRET_OCID || 'ocid1.vaultsecret.oc1.eu-frankfurt-1.amaaaaaauevftmqarqp5s4l5hm3lbvwuiiidv4x3wejp62p2lshnono25nwq',
  backend: backendConfig,
};
