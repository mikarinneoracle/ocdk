/**
 * OCI Configuration for Test Function
 * 
 * Set these via environment variables or update defaults:
 * - OCI_COMPARTMENT_ID
 * - OCI_TENANCY_ID
 * - OCI_REGION
 * - OCI_NAMESPACE
 * - OCI_OCIR_COMPARTMENT_ID (for OCIR repository)
 * - OCI_OCIR_REPOSITORY_NAME (for OCIR repository name)
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

if (!ocirCompartmentId || ocirCompartmentId.includes('root')) {
  console.warn('⚠️  WARNING: OCI_OCIR_COMPARTMENT_ID not set or set to root compartment.');
  console.warn('   Please set OCI_OCIR_COMPARTMENT_ID to your home compartment OCID.');
}

export const ociConfig: OciConfig = {
  compartmentId: process.env.OCI_COMPARTMENT_ID || 'ocid1.compartment.oc1..aaaaaaa...',
  ocirCompartmentId: ocirCompartmentId,
  tenancyId: process.env.OCI_TENANCY_ID || 'ocid1.tenancy.oc1..aaaaaaa...',
  region: process.env.OCI_REGION || 'eu-frankfurt-1',
  namespace: process.env.OCI_NAMESPACE || 'your-namespace',
  functionAppName: 'test-function-app',
  functionName: 'test-java-function',
  ocirRepositoryName: process.env.OCI_OCIR_REPOSITORY_NAME || 'test-java-function',
  backend: backendConfig,
};
