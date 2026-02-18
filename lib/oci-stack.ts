import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { OciProvider } from '@cdktf/provider-oci/lib/provider';
import { ArtifactsContainerRepository } from '@cdktf/provider-oci/lib/artifacts-container-repository';
import { OciBackendConfig } from '../config/oci-config';

export interface OciStackConfig {
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

export class OciStack extends TerraformStack {
  constructor(scope: Construct, id: string, config: OciStackConfig) {
    super(scope, id);

    // Configure Terraform backend (if not local)
    if (config.backend && config.backend.type !== 'local') {
      if (config.backend.type === 'oci') {
        // OCI native backend
        this.addOverride('terraform.backend', {
          oci: {
            bucket: config.backend.bucket,
            namespace: config.namespace,
            key: config.backend.key || `${id}/terraform.tfstate`,
            region: config.region,
          },
        });
      } else if (config.backend.type === 'http') {
        // HTTP backend (for OCI Object Storage via REST API)
        const httpBackend: any = {
          address: config.backend.address,
          update_method: config.backend.updateMethod || 'PUT',
        };
        if (config.backend.lockAddress) {
          httpBackend.lock_address = config.backend.lockAddress;
        }
        if (config.backend.unlockAddress) {
          httpBackend.unlock_address = config.backend.unlockAddress;
        }
        this.addOverride('terraform.backend', {
          http: httpBackend,
        });
      }
    }

    // OCI Provider
    new OciProvider(this, 'oci', {
      region: config.region,
      tenancyOcid: config.tenancyId,
    });

    // OCIR Container Repository
    // Use home compartment (not root) - should be set via OCI_OCIR_COMPARTMENT_ID
    const ocirCompartmentId = config.ocirCompartmentId || config.compartmentId;
    const ocirRepoName = config.ocirRepositoryName || config.functionName;
    
    // Validate that we're not using root compartment
    if (ocirCompartmentId.includes('root')) {
      throw new Error(
        'OCIR repository cannot be created in root compartment. ' +
        'Please set OCI_OCIR_COMPARTMENT_ID to your home compartment OCID.'
      );
    }

    const ocirRepository = new ArtifactsContainerRepository(this, 'OcirRepository', {
      compartmentId: ocirCompartmentId,
      displayName: ocirRepoName,
      isPublic: false, // Private repository by default
      isImmutable: false, // Allow image updates
    });

    // TODO: Add resources
    // - Object Storage buckets
    // - OCI Vault
    // - Dynamic Groups & Policies
    // - OCI Function Application
    // - OCI Function (will reference OCIR repository)
    // - API Gateway
    // - API Gateway Deployment
  }
}
