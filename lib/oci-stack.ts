import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { OciProvider } from '../.gen/providers/oci/provider';
import { ArtifactsContainerRepository } from '../.gen/providers/oci/artifacts-container-repository';
import { OciBackendConfig } from '../config/oci-config';

export interface OciStackConfig {
  compartmentId: string;
  ocirCompartmentId?: string;
  tenancyId: string;
  region: string;
  namespace: string;
  /** OCI Functions application name (e.g. my-app). Set via OCI_FUNCTION_APP_NAME or pass in config. */
  functionAppName: string;
  /** OCI Function name (e.g. my-function). Set via OCI_FUNCTION_NAME or pass in config. */
  functionName: string;
  /** Optional path to JAR (or Dockerfile context) to build and deploy as the function image. Set via OCI_FUNCTION_JAR_PATH. Empty = no function/image build. */
  functionJarPath?: string;
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

    // OCIR Container Repository (root compartment allowed if explicitly set)
    const ocirCompartmentId = config.ocirCompartmentId || config.compartmentId;
    const ocirRepoName = config.ocirRepositoryName || config.functionName || 'oci-function';

    const ocirRepository = new ArtifactsContainerRepository(this, 'OcirRepository', {
      compartmentId: ocirCompartmentId,
      displayName: ocirRepoName,
      isPublic: false, // Private repository by default
      isImmutable: false, // Allow image updates
    });

    // When config.functionJarPath is set, a future version can add:
    // - VCN / subnet (if needed), Function Application, Function (image from build), API Gateway
    // For now, functionName and functionJarPath are stored in config for use by callers or extensions.
    if (config.functionJarPath && config.functionJarPath.trim()) {
      // TODO: add null_resource build/push, FunctionsApplication, FunctionsFunction, API Gateway
    }
  }
}
