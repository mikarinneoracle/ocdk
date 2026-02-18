/**
 * OCI Configuration
 * 
 * Set these via environment variables or update defaults:
 * - OCI_COMPARTMENT_ID
 * - OCI_TENANCY_ID
 * - OCI_REGION
 * - OCI_NAMESPACE
 * - OCI_STATE_BUCKET (for remote state)
 * - OCI_STATE_BACKEND_TYPE (oci|http|local)
 */

export interface OciBackendConfig {
  type: 'oci' | 'http' | 'local';
  // For OCI backend
  bucket?: string;
  key?: string;
  // For HTTP backend
  address?: string;
  updateMethod?: string;
  lockAddress?: string;
  unlockAddress?: string;
}

export interface OciConfig {
  compartmentId: string;
  ocirCompartmentId?: string; // Home compartment for OCIR (defaults to compartmentId if not set)
  tenancyId: string;
  region: string;
  namespace: string;
  functionAppName: string;
  functionName: string;
  ocirRepositoryName?: string; // OCIR repository name (defaults to functionName)
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

// OCIR compartment - use home compartment (not root)
// If not set, will prompt user to set it (should be a non-root compartment)
const ocirCompartmentId = process.env.OCI_OCIR_COMPARTMENT_ID || process.env.OCI_COMPARTMENT_ID;

if (!ocirCompartmentId || ocirCompartmentId.includes('root')) {
  console.warn('⚠️  WARNING: OCI_OCIR_COMPARTMENT_ID not set or set to root compartment.');
  console.warn('   Please set OCI_OCIR_COMPARTMENT_ID to your home compartment OCID.');
  console.warn('   Example: export OCI_OCIR_COMPARTMENT_ID="ocid1.compartment.oc1..aaaaaaa..."');
}

export const ociConfig: OciConfig = {
  compartmentId: process.env.OCI_COMPARTMENT_ID || 'ocid1.compartment.oc1..aaaaaaa...',
  ocirCompartmentId: ocirCompartmentId,
  tenancyId: process.env.OCI_TENANCY_ID || 'ocid1.tenancy.oc1..aaaaaaa...',
  region: process.env.OCI_REGION || 'eu-frankfurt-1',
  namespace: process.env.OCI_NAMESPACE || 'your-namespace',
  functionAppName: 'hello-arm',
  functionName: 'testimonials-main',
  ocirRepositoryName: process.env.OCI_OCIR_REPOSITORY_NAME || 'testimonials-main',
  backend: backendConfig,
};
