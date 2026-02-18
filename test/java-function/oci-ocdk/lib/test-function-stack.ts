import { Construct } from 'constructs';
import { TerraformStack } from 'cdktf';
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

export class TestFunctionStack extends TerraformStack {
  constructor(scope: Construct, id: string, config: OciStackConfig) {
    super(scope, id);

    // Configure Terraform backend (if not local)
    if (config.backend && config.backend.type !== 'local') {
      if (config.backend.type === 'oci') {
        this.addOverride('terraform.backend', {
          oci: {
            bucket: config.backend.bucket,
            namespace: config.namespace,
            key: config.backend.key || `${id}/terraform.tfstate`,
            region: config.region,
          },
        });
      } else if (config.backend.type === 'http') {
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
      isPublic: false,
      isImmutable: false,
    });

    // Note: OCI Function and API Gateway resources would be added here
    // These require additional provider resources that may need to be configured
    // after running `cdktf get` to generate the provider types
    
    // Example structure (commented out until provider types are generated):
    /*
    // OCI Function Application
    const functionApp = new FunctionsApplication(this, 'FunctionApp', {
      compartmentId: config.compartmentId,
      displayName: config.functionAppName,
    });

    // OCI Function
    const ociFunction = new Function(this, 'Function', {
      applicationId: functionApp.id,
      displayName: config.functionName,
      image: `${config.region}.ocir.io/${config.namespace}/${ocirRepoName}:latest`,
      memoryInMbs: 1024,
      timeoutInSeconds: 30,
    });

    // API Gateway
    const apiGateway = new ApigatewayGateway(this, 'ApiGateway', {
      compartmentId: config.compartmentId,
      endpointType: 'PUBLIC',
      displayName: 'test-function-api-gateway',
    });

    // API Gateway Deployment
    const apiDeployment = new ApigatewayDeployment(this, 'ApiDeployment', {
      compartmentId: config.compartmentId,
      gatewayId: apiGateway.id,
      pathPrefix: '/test',
      displayName: 'test-function-deployment',
      // Route configuration would go here
    });
    */

    // Output OCIR repository URL
    // This will be used to push Docker images
    // Format: <region>.ocir.io/<namespace>/<repository-name>
  }
}
