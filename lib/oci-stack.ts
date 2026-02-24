import { Construct } from 'constructs';
import { TerraformStack, TerraformOutput } from 'cdktf';
import { OciProvider } from '../.gen/providers/oci/provider';
import { ArtifactsContainerRepository } from '../.gen/providers/oci/artifacts-container-repository';
import { CoreVcn } from '../.gen/providers/oci/core-vcn';
import { CoreSubnet } from '../.gen/providers/oci/core-subnet';
import { CoreSecurityList } from '../.gen/providers/oci/core-security-list';
import { CoreServiceGateway } from '../.gen/providers/oci/core-service-gateway';
import { DataOciCoreServices } from '../.gen/providers/oci/data-oci-core-services';
import { CoreRouteTable } from '../.gen/providers/oci/core-route-table';
import { CoreInternetGateway } from '../.gen/providers/oci/core-internet-gateway';
import { ApigatewayGateway } from '../.gen/providers/oci/apigateway-gateway';
import { ApigatewayDeployment } from '../.gen/providers/oci/apigateway-deployment';
import { FunctionsApplication } from '../.gen/providers/oci/functions-application';
import { FunctionsFunction } from '../.gen/providers/oci/functions-function';
import { OciBackendConfig, ocirHostKey, getOciImageUrl } from '../config/oci-config';
import * as path from 'path';

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
  /** Directory containing target/ (Dockerfile is generated in local-exec). When set with functionName, creates VCN, Function, API Gateway. */
  dockerContextPath?: string;
  /** Image tag for OCIR (from func.yaml version or OCI_IMAGE_TAG; default 'latest'). */
  imageTag?: string;
  /** Java FDK CMD handler (from func.yaml or OCI_FUNCTION_HANDLER). */
  handler?: string;
  ocirRepositoryName?: string;
  /** API Gateway deployment path prefix. Default '/'. */
  apiGwPathPrefix?: string;
  /** API Gateway route path. Default '/{path*}'. */
  apiGwRoutePath?: string;
  /** API Gateway route methods. Default ['GET', 'POST', 'OPTIONS']. */
  apiGwMethods?: string[];
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

    const dockerContextPath = (config.dockerContextPath || config.functionJarPath)?.trim();
    const createFullStack = config.functionName && dockerContextPath;

    if (createFullStack) {
      if (ocirCompartmentId.includes('root')) {
        throw new Error(
          'Full stack (Function + API Gateway) requires a non-root compartment for OCIR. Set OCI_OCIR_COMPARTMENT_ID to your home compartment OCID.'
        );
      }
      const functionCodePath = path.resolve(dockerContextPath!);
      const imageTag = config.imageTag || 'latest';
      const ocirRegistry = `${ocirHostKey(config.region)}.ocir.io`;
      const imageUrl = getOciImageUrl(config);
      const appName = config.functionAppName || config.functionName!;

      this.addOverride('terraform.required_providers.null', {
        source: 'hashicorp/null',
        version: '~> 3.0',
      });
      const buildAndPushImageId = 'BuildAndPushImage';
      this.addOverride(`resource.null_resource.${buildAndPushImageId}.depends_on`, [
        'oci_artifacts_container_repository.OcirRepository',
      ]);
      this.addOverride(`resource.null_resource.${buildAndPushImageId}.triggers`, {
        repo_name: ocirRepoName,
        image_url: imageUrl,
        image_tag: imageTag,
        handler: config.handler || '',
        namespace: config.namespace,
        region: config.region,
      });
      const regionP = config.region;
      const namespaceP = config.namespace;
      const ocirUser = process.env.OCI_OCIR_USERNAME || 'AUTO_DETECT';
      const loginScript = process.env.OCI_AUTH_TOKEN
        ? `export OCIR_AUTH_TOKEN="${process.env.OCI_AUTH_TOKEN}"; OCIR_USER="${ocirUser}"; [ "$OCIR_USER" = "AUTO_DETECT" ] && OCIR_USER="${namespaceP}/user"; echo "$OCIR_AUTH_TOKEN" | docker login ${ocirRegistry} -u "$OCIR_USER" --password-stdin || exit 1`
        : `oci raw-request --region ${regionP} --http-method GET --target-uri "https://${ocirRegistry}/20180419/docker/token" 2>/dev/null | (command -v jq >/dev/null && jq -r .data.token || grep -o '"token":"[^"]*"' | cut -d'"' -f4) | docker login -u BEARER_TOKEN --password-stdin ${ocirRegistry} || (echo "Set OCI_AUTH_TOKEN or configure OCI CLI" >&2; exit 1)`;
      const handler = config.handler || 'com.example.fn.HelloFunction::handleRequest';
      const dockerfileContent = `FROM fnproject/fn-java-fdk-build:jdk17-1.1.5 as build-stage
WORKDIR /function
ENV MAVEN_OPTS -Dhttp.proxyHost= -Dhttp.proxyPort= -Dhttps.proxyHost= -Dhttps.proxyPort= -Dhttp.nonProxyHosts= -Dmaven.repo.local=/usr/share/maven/ref/repository
ADD pom.xml /function/pom.xml
RUN ["mvn", "package", "dependency:copy-dependencies", "-DincludeScope=runtime", "-DskipTests=true", "-Dmdep.prependGroupId=true", "-DoutputDirectory=target", "--fail-never"]
ADD src /function/src
RUN ["mvn", "package"]
FROM fnproject/fn-java-fdk:jre17-1.1.5
WORKDIR /function
COPY --from=build-stage /function/target/*.jar /function/app/
CMD ["${handler.replace(/"/g, '\\"')}"]
`;
      const dockerignoreContent = `node_modules
.git
*.md
.env
.idea
.vscode
*.log
`;
      const dockerfileB64 = Buffer.from(dockerfileContent, 'utf8').toString('base64');
      const dockerignoreB64 = Buffer.from(dockerignoreContent, 'utf8').toString('base64');
      // Generate Dockerfile and .dockerignore in local-exec (excludes node_modules), then login, build (tag from func.yaml/OCI_IMAGE_TAG), push
      this.addOverride(`resource.null_resource.${buildAndPushImageId}.provisioner`, [
        {
          'local-exec': {
            command: 'cd "$FUNCTION_CODE_PATH" && echo "$DOCKERFILE_B64" | base64 -d > Dockerfile && echo "$DOCKERIGNORE_B64" | base64 -d > .dockerignore',
            environment: {
              FUNCTION_CODE_PATH: functionCodePath,
              DOCKERFILE_B64: dockerfileB64,
              DOCKERIGNORE_B64: dockerignoreB64,
            },
          },
        },
        { 'local-exec': { command: loginScript, on_failure: 'continue' } },
        { 'local-exec': { command: `cd "${functionCodePath.replace(/"/g, '\\"')}" && docker build --no-cache --platform linux/amd64 -t ${imageUrl} .` } },
        { 'local-exec': { command: `docker push ${imageUrl}` } },
      ]);

      const vcn = new CoreVcn(this, 'Vcn', {
        compartmentId: config.compartmentId,
        displayName: `${id}-vcn`,
        cidrBlocks: ['10.0.0.0/16'],
        dnsLabel: 'appfn',
      });
      const publicSubnet = new CoreSubnet(this, 'PublicSubnet', {
        compartmentId: config.compartmentId,
        vcnId: vcn.id,
        displayName: `${id}-public`,
        cidrBlock: '10.0.1.0/24',
        dnsLabel: 'public',
        prohibitPublicIpOnVnic: false,
      });
      const privateSubnet = new CoreSubnet(this, 'PrivateSubnet', {
        compartmentId: config.compartmentId,
        vcnId: vcn.id,
        displayName: `${id}-private`,
        cidrBlock: '10.0.2.0/24',
        dnsLabel: 'private',
        prohibitPublicIpOnVnic: true,
      });

      const publicSl = new CoreSecurityList(this, 'PublicSecurityList', {
        compartmentId: config.compartmentId,
        vcnId: vcn.id,
        displayName: `${id}-public-sl`,
        ingressSecurityRules: [
          { protocol: '6', source: '0.0.0.0/0', description: 'HTTP', tcpOptions: { min: 80, max: 80 } },
          { protocol: '6', source: '0.0.0.0/0', description: 'HTTPS', tcpOptions: { min: 443, max: 443 } },
        ],
        egressSecurityRules: [{ protocol: 'all', destination: '0.0.0.0/0', description: 'All' }],
      });
      publicSubnet.addOverride('security_list_ids', [publicSl.id]);
      const privateSl = new CoreSecurityList(this, 'PrivateSecurityList', {
        compartmentId: config.compartmentId,
        vcnId: vcn.id,
        displayName: `${id}-private-sl`,
        ingressSecurityRules: [
          { protocol: '6', source: '10.0.2.0/24', description: 'PG', tcpOptions: { min: 5432, max: 5432 } },
        ],
        egressSecurityRules: [{ protocol: 'all', destination: '0.0.0.0/0', description: 'All' }],
      });
      privateSubnet.addOverride('security_list_ids', [privateSl.id]);

      const allServices = new DataOciCoreServices(this, 'AllServices', {});
      const svcGw = new CoreServiceGateway(this, 'ServiceGateway', {
        compartmentId: config.compartmentId,
        vcnId: vcn.id,
        displayName: `${id}-sgw`,
        services: [{ serviceId: allServices.services.get(0).id }],
      });
      const privRt = new CoreRouteTable(this, 'PrivateRouteTable', {
        compartmentId: config.compartmentId,
        vcnId: vcn.id,
        displayName: `${id}-private-rt`,
        routeRules: [
          { networkEntityId: svcGw.id, destination: allServices.services.get(0).cidrBlock, destinationType: 'SERVICE_CIDR_BLOCK', description: 'OCIR' },
        ],
      });
      privateSubnet.addOverride('route_table_id', privRt.id);
      const igw = new CoreInternetGateway(this, 'InternetGateway', {
        compartmentId: config.compartmentId,
        vcnId: vcn.id,
        displayName: `${id}-igw`,
        enabled: true,
      });
      const pubRt = new CoreRouteTable(this, 'PublicRouteTable', {
        compartmentId: config.compartmentId,
        vcnId: vcn.id,
        displayName: `${id}-public-rt`,
        routeRules: [
          { networkEntityId: igw.id, destination: '0.0.0.0/0', destinationType: 'CIDR_BLOCK', description: 'Internet' },
        ],
      });
      publicSubnet.addOverride('route_table_id', pubRt.id);

      const apiGateway = new ApigatewayGateway(this, 'ApiGateway', {
        compartmentId: config.compartmentId,
        subnetId: publicSubnet.id,
        endpointType: 'PUBLIC',
        displayName: `${id}-api-gateway`,
      });
      const functionApp = new FunctionsApplication(this, 'FunctionApp', {
        compartmentId: config.compartmentId,
        displayName: appName,
        subnetIds: [privateSubnet.id],
      });
      const ociFunction = new FunctionsFunction(this, 'Function', {
        applicationId: functionApp.id,
        displayName: config.functionName!,
        image: imageUrl,
        memoryInMbs: '256',
        timeoutInSeconds: 30,
      });
      ociFunction.addOverride('depends_on', [`null_resource.${buildAndPushImageId}`]);
      const pathPrefix = config.apiGwPathPrefix ?? '/';
      const routePath = config.apiGwRoutePath ?? '/{path*}';
      const methods = config.apiGwMethods?.length ? config.apiGwMethods : ['GET', 'POST', 'OPTIONS'];
      const apiDeployment = new ApigatewayDeployment(this, 'ApiDeployment', {
        compartmentId: config.compartmentId,
        gatewayId: apiGateway.id,
        pathPrefix,
        displayName: `${id}-deployment`,
        specification: {
          routes: [{ path: routePath, methods, backend: { type: 'ORACLE_FUNCTIONS_BACKEND', functionId: ociFunction.id } }],
        },
      });
      apiDeployment.node.addDependency(ociFunction);

      new TerraformOutput(this, 'ocir_repository_name', { value: ocirRepository.displayName, description: 'OCIR repository name' });
      new TerraformOutput(this, 'api_gateway_host', { value: apiGateway.hostname, description: 'API Gateway hostname' });
      new TerraformOutput(this, 'function_invoke_url', { value: `https://${apiGateway.hostname}`, description: 'Base URL to invoke the function' });
      new TerraformOutput(this, 'function_id', { value: ociFunction.id, description: 'OCI Function OCID' });
    }
  }
}
