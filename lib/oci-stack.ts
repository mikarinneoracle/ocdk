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
import { LoggingLogGroup } from '../.gen/providers/oci/logging-log-group';
import { LoggingLog } from '../.gen/providers/oci/logging-log';
import { IdentityPolicy } from '../.gen/providers/oci/identity-policy';
import { OciBackendConfig, ocirHostKey, getOciImageUrl } from '../config/oci-config';
import * as fs from 'fs';
import * as path from 'path';

const GRAALVM_JAVA_DOCKERFILE = `FROM docker.io/fnproject/fn-java-fdk-build:jdk17-1.0-latest as build-stage
WORKDIR /function
ENV MAVEN_OPTS -Dhttp.proxyHost= -Dhttp.proxyPort= -Dhttps.proxyHost= -Dhttps.proxyPort= -Dhttp.nonProxyHosts= -Dmaven.repo.local=/usr/share/maven/ref/repository
ADD pom.xml /function/pom.xml
RUN ["mvn", "package", "dependency:copy-dependencies", "-DincludeScope=runtime", "-DskipTests=true", "-Dmdep.prependGroupId=true", "-DoutputDirectory=target", "--fail-never"]
ADD src /function/src
RUN ["mvn", "package"]

FROM container-registry.oracle.com/graalvm/native-image:23-ol8 AS native
WORKDIR /app
COPY --from=build-stage /function/target .
ADD reflection.json .

RUN native-image \\
     -H:ReflectionConfigurationFiles=/app/reflection.json \\
     -Ob \\
     -H:Name=Hello \\
     -cp "/app/hello-1.0.0.jar:/app/*"  \\
        com.fnproject.fn.runtime.EntryPoint

FROM docker.io/fnproject/fn-java-fdk:jre17-latest as fdk

FROM container-registry.oracle.com/os/oraclelinux:8-slim
COPY --from=native /app/Hello .
COPY --from=fdk /function/runtime/* ./
ENTRYPOINT [ "./Hello" ]
CMD [ "com.example.fn.HelloFunction::handleRequest", "-Djava.library.path=/lib"]
`;

const GRAALVM_REFLECTION_JSON = `[
    {
      "name": "com.example.fn.HelloFunction",
      "allDeclaredMethods": true,
      "methods": [
        { "name": "<init>", "parameterTypes": [] }
      ]
    }
]`;

const GRAALVM_POM_RUNTIME_DEP = `        <dependency>
            <groupId>com.fnproject.fn</groupId>
            <artifactId>runtime</artifactId>
            <version>\${fdk.version}</version>
        </dependency>
`;

const GRAALVM_POM_BUILD_BLOCK = `    <build>
        <plugins>
            <plugin>
                <!-- Copy dependencies -->
                <artifactId>maven-dependency-plugin</artifactId>
                <executions>
                    <execution>
                        <phase>install</phase>
                        <goals>
                            <goal>copy-dependencies</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>\${project.build.directory}/lib</outputDirectory>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
`;

export interface OciStackConfig {
  compartmentId: string;
  ocirCompartmentId?: string;
  tenancyId: string;
  region: string;
  namespace: string;
  /** When true, create IAM policy so API Gateway can invoke Functions. */
  createApigwPolicy?: boolean;
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
  /** Function memory in MB (e.g. '256'). From func.yaml or OCI_FUNCTION_MEMORY_MB. */
  functionMemoryMb?: string;
  /** Function timeout in seconds. From func.yaml or OCI_FUNCTION_TIMEOUT_SECONDS. */
  functionTimeoutSeconds?: number;
  /** Function config/env key-value. From func.yaml config or OCI_FUNCTION_CONFIG. */
  functionConfig?: Record<string, string>;
  /** Path to API Gateway deployment spec JSON (routes). Default oci_apigateway_deployment.json in project root. */
  apiGwDeploymentJsonPath?: string;
  /** Runtime from func.yaml (e.g. 'java', 'python'); controls Dockerfile generation. */
  runtime?: string;
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

    // OCI_STACK_ACTION: "function-only" (or legacy "function") => no API Gateway; "full-stack" or unset => full stack including API Gateway.
    const stackActionRaw = (process.env.OCI_STACK_ACTION || '').trim().toLowerCase();
    const stackAction = stackActionRaw === 'function-only' || stackActionRaw === 'function' ? 'function-only' : 'full-stack';

    // OCIR Container Repository (root compartment allowed if explicitly set).
    const ocirCompartmentId = config.ocirCompartmentId || config.compartmentId;
    const ocirRepoName = config.ocirRepositoryName || config.functionName || 'oci-function';
    const ocirRepository = new ArtifactsContainerRepository(this, 'OcirRepository', {
      compartmentId: ocirCompartmentId,
      displayName: ocirRepoName,
      isPublic: false,
      isImmutable: false,
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
      const resourceName = appName;

      const privateSubnetIdFromEnv = (process.env.OCI_PRIVATE_SUBNET_ID || process.env.OCI_PRIVATE_SUBNET_OCID || process.env.OCI_FUNCTION_SUBNET_ID || '').trim();
      const publicSubnetIdFromEnv = (process.env.OCI_PUBLIC_SUBNET_ID || process.env.OCI_PUBLIC_SUBNET_OCID || process.env.OCI_APIGATEWAY_SUBNET_ID || '').trim();

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
      const runtime = config.runtime?.toLowerCase();
      let dockerfileContent = '';
      if (runtime && runtime.startsWith('python')) {
        dockerfileContent = `FROM docker.io/fnproject/python:3.12-dev as build-stage
WORKDIR /function
ADD requirements.txt /function/

			RUN pip3 install --target /python/  --no-cache --no-cache-dir -r requirements.txt &&\
			    rm -fr ~/.cache/pip /tmp* requirements.txt func.yaml Dockerfile .venv &&\
			    chmod -R o+r /python
ADD . /function/
RUN rm -fr /function/.pip_cache
FROM docker.io/fnproject/python:3.12
WORKDIR /function
COPY --from=build-stage /python /python
COPY --from=build-stage /function /function
RUN chmod -R o+r /function
ENV PYTHONPATH=/function:/python
ENTRYPOINT ["/python/bin/fdk", "/function/func.py", "handler"]
`;
      } else if (runtime && runtime.startsWith('node')) {
        dockerfileContent = `FROM docker.io/fnproject/node:22-dev AS build-stage
WORKDIR /function
ADD package.json package-lock.json* /function/
RUN sed '\\|"@mikarinneoracle/oci-cdk": ".*"|d' /function/package.json > /function/package_cleaned.json
RUN sed 's!\\("@fnproject/fdk": "[^"]*"\\),!\\1!' /function/package_cleaned.json > /function/package.json
# UNCOMMENT NEXT LINE AND COMMENT ABOVE LINE IF BUILD FAILS
#RUN mv /function/package_cleaned.json /function/package.json
RUN npm ci --omit=dev 2>/dev/null || npm install --omit=dev
RUN chown -R $(id -u):$(id -g) node_modules

RUN npm install  && chown -R $(id -u):$(id -g) node_modules
FROM docker.io/fnproject/node:22
WORKDIR /function
ADD . /function/
COPY --from=build-stage /function/node_modules/ /function/node_modules/
RUN chmod -R o+r /function
ENTRYPOINT ["node", "func.js"]
`;
      } else {
        const useGraalVm = (process.env.OCI_USE_GRAALVM_JAVA || '').trim() === '1';
        if (useGraalVm) {
          try {
            // Use baked-in GraalVM Dockerfile template
            dockerfileContent = GRAALVM_JAVA_DOCKERFILE;

            // Ensure reflection.json exists in project root
            const reflectionTargetPath = path.join(functionCodePath, 'reflection.json');
            if (!fs.existsSync(reflectionTargetPath)) {
              fs.writeFileSync(reflectionTargetPath, GRAALVM_REFLECTION_JSON, 'utf8');
            }

            // Ensure pom.xml has runtime dependency for GraalVM native image
            const projectPomPath = path.join(functionCodePath, 'pom.xml');
            if (fs.existsSync(projectPomPath)) {
              let pomContent = fs.readFileSync(projectPomPath, 'utf8');

              if (!pomContent.includes('<artifactId>runtime</artifactId>') && pomContent.includes('</dependencies>')) {
                pomContent = pomContent.replace('</dependencies>', `${GRAALVM_POM_RUNTIME_DEP}    </dependencies>`);
              }
              fs.writeFileSync(projectPomPath, pomContent, 'utf8');
            }
          } catch {
            // Ignore and fall back to standard Java Dockerfile
          }
        }
        if (!dockerfileContent) {
          dockerfileContent = `FROM docker.io/fnproject/fn-java-fdk-build:jdk17-1.1.7 as build-stage
WORKDIR /function
ENV MAVEN_OPTS -Dhttp.proxyHost= -Dhttp.proxyPort= -Dhttps.proxyHost= -Dhttps.proxyPort= -Dhttp.nonProxyHosts= -Dmaven.repo.local=/usr/share/maven/ref/repository
ADD pom.xml /function/pom.xml
RUN ["mvn", "package", "dependency:copy-dependencies", "-DincludeScope=runtime", "-DskipTests=true", "-Dmdep.prependGroupId=true", "-DoutputDirectory=target", "--fail-never"]
ADD src /function/src
RUN ["mvn", "package"]
FROM docker.io/fnproject/fn-java-fdk:jre17-1.1.7
WORKDIR /function
COPY --from=build-stage /function/target/*.jar /function/app/
CMD ["${handler.replace(/"/g, '\\"')}"]`;
        }
      }
      const dockerignoreContent = `node_modules
.git
*.md
.env
.idea
.vscode
*.log
oci_apigateway_deployment.json
.ocdk-outputs.json
tail-function-logs.js
`;
      const dockerfileB64 = Buffer.from(dockerfileContent, 'utf8').toString('base64');
      const dockerignoreB64 = Buffer.from(dockerignoreContent, 'utf8').toString('base64');
      // Generate Dockerfile and .dockerignore in local-exec only if missing; if they exist use as-is. Then login, build, push.
      this.addOverride(`resource.null_resource.${buildAndPushImageId}.provisioner`, [
        {
          'local-exec': {
            command: 'cd "$FUNCTION_CODE_PATH" && ([ -f Dockerfile ] || (echo "$DOCKERFILE_B64" | base64 -d > Dockerfile)) && ([ -f .dockerignore ] || (echo "$DOCKERIGNORE_B64" | base64 -d > .dockerignore))',
            environment: {
              FUNCTION_CODE_PATH: functionCodePath,
              DOCKERFILE_B64: dockerfileB64,
              DOCKERIGNORE_B64: dockerignoreB64,
            },
          },
        },
        { 'local-exec': { command: loginScript, on_failure: 'continue' } },
        { 'local-exec': { command: `cd "${functionCodePath.replace(/"/g, '\\"')}" && docker build --platform linux/amd64 -t ${imageUrl} .` } },
        { 'local-exec': { command: `docker push ${imageUrl}` } },
      ]);

      let publicSubnet: CoreSubnet | undefined;
      let privateSubnet: CoreSubnet | undefined;
      // Function-only: create VCN only when we need to create the private subnet. Full-stack: create when we need either subnet.
      const createNetworking =
        stackAction === 'function-only'
          ? !privateSubnetIdFromEnv
          : !privateSubnetIdFromEnv || !publicSubnetIdFromEnv;
      if (createNetworking) {
        const vcn = new CoreVcn(this, 'Vcn', {
          compartmentId: config.compartmentId,
          displayName: `${resourceName}-vcn`,
          cidrBlocks: ['10.0.0.0/16'],
          dnsLabel: 'appfn',
        });
        if (stackAction === 'full-stack' && !publicSubnetIdFromEnv) {
          publicSubnet = new CoreSubnet(this, 'PublicSubnet', {
            compartmentId: config.compartmentId,
            vcnId: vcn.id,
            displayName: `${resourceName}-public`,
            cidrBlock: '10.0.1.0/24',
            dnsLabel: 'public',
            prohibitPublicIpOnVnic: false,
          });
          const publicSl = new CoreSecurityList(this, 'PublicSecurityList', {
            compartmentId: config.compartmentId,
            vcnId: vcn.id,
            displayName: `${resourceName}-public-sl`,
            ingressSecurityRules: [
              { protocol: '6', source: '0.0.0.0/0', description: 'HTTP', tcpOptions: { min: 80, max: 80 } },
              { protocol: '6', source: '0.0.0.0/0', description: 'HTTPS', tcpOptions: { min: 443, max: 443 } },
            ],
            egressSecurityRules: [{ protocol: 'all', destination: '0.0.0.0/0', description: 'All' }],
          });
          publicSubnet.addOverride('security_list_ids', [publicSl.id]);
          const igw = new CoreInternetGateway(this, 'InternetGateway', {
            compartmentId: config.compartmentId,
            vcnId: vcn.id,
            displayName: `${resourceName}-igw`,
            enabled: true,
          });
          const pubRt = new CoreRouteTable(this, 'PublicRouteTable', {
            compartmentId: config.compartmentId,
            vcnId: vcn.id,
            displayName: `${resourceName}-public-rt`,
            routeRules: [
              { networkEntityId: igw.id, destination: '0.0.0.0/0', destinationType: 'CIDR_BLOCK', description: 'Internet' },
            ],
          });
          publicSubnet.addOverride('route_table_id', pubRt.id);
        }
        if (!privateSubnetIdFromEnv) {
          privateSubnet = new CoreSubnet(this, 'PrivateSubnet', {
            compartmentId: config.compartmentId,
            vcnId: vcn.id,
            displayName: `${resourceName}-private`,
            cidrBlock: '10.0.2.0/24',
            dnsLabel: 'private',
            prohibitPublicIpOnVnic: true,
          });
          const privateSl = new CoreSecurityList(this, 'PrivateSecurityList', {
            compartmentId: config.compartmentId,
            vcnId: vcn.id,
            displayName: `${resourceName}-private-sl`,
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
            displayName: `${resourceName}-sgw`,
            services: [{ serviceId: allServices.services.get(0).id }],
          });
          const privRt = new CoreRouteTable(this, 'PrivateRouteTable', {
            compartmentId: config.compartmentId,
            vcnId: vcn.id,
            displayName: `${resourceName}-private-rt`,
            routeRules: [
              { networkEntityId: svcGw.id, destination: allServices.services.get(0).cidrBlock, destinationType: 'SERVICE_CIDR_BLOCK', description: 'OCIR' },
            ],
          });
          privateSubnet.addOverride('route_table_id', privRt.id);
        }
      }

      const functionAppSubnetId = privateSubnetIdFromEnv || (privateSubnet?.id ?? '');
      const publicSubnetIdForApiGw = publicSubnetIdFromEnv || (publicSubnet?.id ?? '');

      let apiGateway: ApigatewayGateway | undefined;
      if (stackAction === 'full-stack' && publicSubnetIdForApiGw) {
        apiGateway = new ApigatewayGateway(this, 'ApiGateway', {
          compartmentId: config.compartmentId,
          subnetId: publicSubnetIdForApiGw,
          endpointType: 'PUBLIC',
          displayName: `${resourceName}-api-gateway`,
        });
      }

      // Optional IAM: allow API Gateway to invoke Functions in this compartment.
      // OCI docs: ALLOW any-user to use functions-family in compartment <functions-compartment>
      //   where ALL {request.principal.type='ApiGateway', request.resource.compartment.id='<apigw-compartment-ocid>'}
      const createApigwPolicy = !!config.createApigwPolicy || (process.env.OCI_CREATE_APIGW_POLICY || '').trim() === '1';
      if (createApigwPolicy && stackAction === 'full-stack') {
        const apigwPolicyName = `${resourceName}-apigw-functions-access`;
        new IdentityPolicy(this, 'ApiGatewayFunctionsPolicy', {
          compartmentId: config.tenancyId,
          name: apigwPolicyName,
          description: `Allow API Gateways in ${config.compartmentId} to invoke Functions in ${config.compartmentId}`,
          statements: [
            `ALLOW any-user to use functions-family in compartment id ${config.compartmentId} where ALL {request.principal.type= 'ApiGateway', request.resource.compartment.id = '${config.compartmentId}'}`,
          ],
        });
      }
      const logGroup = new LoggingLogGroup(this, 'LogGroup', {
        compartmentId: config.compartmentId,
        displayName: appName,
        description: `Log group for ${appName}`,
      });
      const functionApp = new FunctionsApplication(this, 'FunctionApp', {
        compartmentId: config.compartmentId,
        displayName: appName,
        subnetIds: [functionAppSubnetId],
      });
      const ociFunction = new FunctionsFunction(this, 'Function', {
        applicationId: functionApp.id,
        displayName: config.functionName!,
        image: imageUrl,
        memoryInMbs: config.functionMemoryMb ?? '256',
        timeoutInSeconds: config.functionTimeoutSeconds ?? 30,
        ...(config.functionConfig && Object.keys(config.functionConfig).length > 0 ? { config: config.functionConfig } : {}),
      });
      ociFunction.addOverride('depends_on', [`null_resource.${buildAndPushImageId}`]);
      if (stackAction === 'full-stack' && apiGateway) {
        const pathPrefix = config.apiGwPathPrefix ?? '/';
        let routes: Array<{ path: string; methods: string[]; backend: { type: string; functionId: typeof ociFunction.id; readTimeoutInSeconds?: number } }>;
        if (config.apiGwDeploymentJsonPath && fs.existsSync(config.apiGwDeploymentJsonPath)) {
          const raw = fs.readFileSync(config.apiGwDeploymentJsonPath, 'utf8');
          const spec = JSON.parse(raw) as { routes?: Array<{ path?: string; methods?: string[]; backend?: Record<string, unknown> }> };
          const routeList = spec?.routes ?? [];
          routes = routeList.map((r) => {
            const b = r.backend ?? {};
            const functionIdRaw = (b.functionId ?? b.function_id) as string | undefined;
            const functionId = typeof functionIdRaw === 'string' && functionIdRaw.includes('${function_id}')
              ? ociFunction.id
              : (functionIdRaw ?? ociFunction.id);
            const readTimeout = (b.readTimeoutInSeconds ?? b.read_timeout_in_seconds) as number | undefined;
            return {
              path: r.path ?? '/{path*}',
              methods: Array.isArray(r.methods) ? r.methods : ['GET', 'POST', 'OPTIONS'],
              backend: {
                type: (b.type as string) ?? 'ORACLE_FUNCTIONS_BACKEND',
                functionId,
                ...(readTimeout != null ? { readTimeoutInSeconds: readTimeout } : {}),
              },
            };
          });
        } else {
          const routePath = config.apiGwRoutePath ?? '/{path*}';
          const methods = config.apiGwMethods?.length ? config.apiGwMethods : ['GET', 'POST', 'OPTIONS'];
          routes = [
            {
              path: routePath,
              methods,
              backend: {
                type: 'ORACLE_FUNCTIONS_BACKEND',
                functionId: ociFunction.id,
                readTimeoutInSeconds: config.functionTimeoutSeconds ?? 30,
              },
            },
          ];
        }
        const apiDeployment = new ApigatewayDeployment(this, 'ApiDeployment', {
          compartmentId: config.compartmentId,
          gatewayId: apiGateway.id,
          pathPrefix,
          displayName: `${resourceName}-deployment`,
          specification: {
            routes,
          },
        });
        apiDeployment.node.addDependency(ociFunction);
      }

      // Functions execution log: SERVICE log for the Functions application (category invoke)
      const executionLog = new LoggingLog(this, 'ExecutionLog', {
        displayName: `${appName}-invoke`,
        logGroupId: logGroup.id,
        logType: 'SERVICE',
        configuration: {
          compartmentId: config.compartmentId,
          source: {
            category: 'invoke',
            // Associate this service log with the Functions application
            resource: functionApp.id,
            service: 'functions',
            sourceType: 'OCISERVICE',
          },
        },
      });
      executionLog.node.addDependency(functionApp);

      // tail-function-logs.js is written by: npx ocdk write-log-config (run after deploy).

      new TerraformOutput(this, 'ocir_repository_name', { value: ocirRepository.displayName, description: 'OCIR repository name' });
      if (apiGateway) {
        new TerraformOutput(this, 'api_gateway_host', { value: apiGateway.hostname, description: 'API Gateway hostname' });
        new TerraformOutput(this, 'function_invoke_url', { value: `https://${apiGateway.hostname}`, description: 'Base URL to invoke the function' });
      }
      new TerraformOutput(this, 'function_id', { value: ociFunction.id, description: 'OCI Function OCID' });
      new TerraformOutput(this, 'log_group_id', { value: logGroup.id, description: 'OCI Log Group OCID for the application' });
      new TerraformOutput(this, 'execution_log_id', { value: executionLog.id, description: 'OCI Functions execution log OCID' });
    }

    // Force oracle/oci (Terraform Registry) so terraform init uses it on OL8 and elsewhere; must run after provider is added
    this.addOverride('terraform.required_providers.oci', {
      source: 'oracle/oci',
      // Pin to < 5.47.0: 5.47.0 crashes on darwin_arm64; 5.46.x and Linux (OL8) work
      version: '>= 5.0.0, < 5.47.0',
    });
  }
}
