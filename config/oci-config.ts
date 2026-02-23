/**
 * OCI Configuration
 *
 * Set these via environment variables or update defaults:
 * - OCI_COMPARTMENT_ID
 * - OCI_TENANCY_ID
 * - OCI_REGION
 * - OCI_NAMESPACE
 * - OCI_OCIR_COMPARTMENT_ID (for OCIR; must be non-root)
 * - OCI_FUNCTION_APP_NAME (Functions application name; default empty)
 * - OCI_FUNCTION_NAME (Function name; default empty)
 * - OCI_FUNCTION_JAR_PATH (Path to JAR or Dockerfile context for function image; default empty)
 * - OCI_STATE_BUCKET (for remote state)
 * - OCI_STATE_BACKEND_TYPE (oci|http|local)
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
  ocirRepositoryName?: string;
  backend?: OciBackendConfig;
}

const backendType = (process.env.OCI_STATE_BACKEND_TYPE || 'local') as 'oci' | 'http' | 'local';

const backendConfig: OciBackendConfig | undefined = backendType === 'local'
  ? undefined
  : backendType === 'oci'
    ? {
        type: 'oci',
        bucket: process.env.OCI_STATE_BUCKET || 'tf-state',
        key: process.env.OCI_STATE_KEY || 'testimonials-stack/terraform.tfstate',
      }
    : {
        type: 'http',
        address: process.env.OCI_STATE_HTTP_ADDRESS || '',
        updateMethod: process.env.OCI_STATE_HTTP_UPDATE_METHOD || 'PUT',
        lockAddress: process.env.OCI_STATE_HTTP_LOCK_ADDRESS,
        unlockAddress: process.env.OCI_STATE_HTTP_UNLOCK_ADDRESS,
      };

const ocirCompartmentId = process.env.OCI_OCIR_COMPARTMENT_ID || process.env.OCI_COMPARTMENT_ID;

if (!ocirCompartmentId || ocirCompartmentId.includes('root')) {
  console.warn('⚠️  WARNING: OCI_OCIR_COMPARTMENT_ID not set or set to root compartment.');
  console.warn('   Please set OCI_OCIR_COMPARTMENT_ID to your home compartment OCID.');
  console.warn('   Example: export OCI_OCIR_COMPARTMENT_ID="ocid1.compartment.oc1..aaaaaaa..."');
}

export const ociConfig: OciConfig = {
  compartmentId: process.env.OCI_COMPARTMENT_ID || 'ocid1.compartment.oc1..aaaaaaa...',
  ocirCompartmentId: ocirCompartmentId || undefined,
  tenancyId: process.env.OCI_TENANCY_ID || 'ocid1.tenancy.oc1..aaaaaaa...',
  region: process.env.OCI_REGION || 'eu-frankfurt-1',
  namespace: process.env.OCI_NAMESPACE || 'your-namespace',
  functionAppName: process.env.OCI_FUNCTION_APP_NAME ?? '',
  functionName: process.env.OCI_FUNCTION_NAME ?? '',
  functionJarPath: process.env.OCI_FUNCTION_JAR_PATH?.trim() || undefined,
  ocirRepositoryName: process.env.OCI_OCIR_REPOSITORY_NAME || undefined,
  backend: backendConfig,
};
