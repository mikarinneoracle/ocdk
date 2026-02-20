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
import { OciBackendConfig } from '../config/oci-config';
import * as path from 'path';

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

    // -------------------------------------------------------------------------
    // Backend & Provider
    // -------------------------------------------------------------------------
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
        const httpBackend: Record<string, unknown> = {
          address: config.backend.address,
          update_method: config.backend.updateMethod || 'PUT',
        };
        if (config.backend.lockAddress) httpBackend.lock_address = config.backend.lockAddress;
        if (config.backend.unlockAddress) httpBackend.unlock_address = config.backend.unlockAddress;
        this.addOverride('terraform.backend', { http: httpBackend });
      }
    }

    new OciProvider(this, 'oci', {
      region: config.region,
      tenancyOcid: config.tenancyId,
    });

    // Add null provider using addOverride (avoids needing to generate types)
    this.addOverride('terraform.required_providers.null', {
      source: 'hashicorp/null',
      version: '~> 3.0',
    });

    const ocirCompartmentId = config.ocirCompartmentId || config.compartmentId;
    const ocirRepoName = config.ocirRepositoryName || config.functionName;

    if (ocirCompartmentId.includes('root')) {
      throw new Error(
        'OCIR repository cannot be created in root compartment. ' +
          'Please set OCI_OCIR_COMPARTMENT_ID to your home compartment OCID.'
      );
    }

    // -------------------------------------------------------------------------
    // OCIR Container Repository
    // -------------------------------------------------------------------------
    const ocirRepository = new ArtifactsContainerRepository(this, 'OcirRepository', {
      compartmentId: ocirCompartmentId,
      displayName: ocirRepoName,
      isPublic: false,
      isImmutable: false,
    });

    // -------------------------------------------------------------------------
    // Build and Push Docker Image to OCIR (after repository is created)
    // -------------------------------------------------------------------------
    const imageUrl = `${config.region}.ocir.io/${config.namespace}/${ocirRepoName}:latest`;
    
    // Get OCIR login username from env or try to get from OCI CLI
    // Format: <tenancy-namespace>/<username> (e.g., frsxwtjslf35/oracleidentitycloudservice/user@example.com)
    // Default will be constructed in the script if not provided
    const ocirUsername = process.env.OCI_OCIR_USERNAME || 'AUTO_DETECT';
    
    // function-code is at test/java-function/function-code (sibling of oci-cdk)
    // Resolve path relative to this file's location
    // Compiled JS is at lib/lib/test-function-stack.js, so __dirname is lib/lib/
    // From lib/lib/: ../ goes to lib/, ../ goes to oci-cdk/, ../ goes to test/java-function/, then function-code/
    const functionCodePath = path.resolve(__dirname, '..', '..', '..', 'function-code');
    
    // Create null_resource using addOverride (since we can't generate types due to network issues)
    // This creates a Terraform null_resource that builds and pushes the Docker image
    const buildAndPushImageId = 'BuildAndPushImage';
    // Use the Terraform resource reference directly (not interpolated string)
    // depends_on expects resource references, not attribute references
    this.addOverride(`resource.null_resource.${buildAndPushImageId}.depends_on`, [
      'oci_artifacts_container_repository.OcirRepository',
    ]);
    this.addOverride(`resource.null_resource.${buildAndPushImageId}.triggers`, {
      repo_name: ocirRepoName,
      image_url: imageUrl,
      namespace: config.namespace,
      region: config.region,
    });
    
    // Generate auth token and login script
    // If OCI_AUTH_TOKEN is set, use it; otherwise generate one via OCI CLI
    const regionPlaceholder = config.region;
    const namespacePlaceholder = config.namespace;
    const ocirUsernameValue = ocirUsername; // Capture value for template string
    // Use string concatenation to avoid TypeScript parsing issues with ${} in shell scripts
    const dollarSign = '$';
    const dollarDollar = '$$';
    // Use backticks for command substitution to avoid complex $() escaping
    // In TypeScript template strings, backticks need to be escaped as \`
    const cmdSubStart = '\`';
    const cmdSubEnd = '\`';
    const loginScript = process.env.OCI_AUTH_TOKEN 
      ? `# Using provided OCI_AUTH_TOKEN
export OCIR_AUTH_TOKEN="${process.env.OCI_AUTH_TOKEN}"
if [ -z "${dollarDollar}OCIR_AUTH_TOKEN" ]; then
  echo "Error: OCI_AUTH_TOKEN is empty. Please set a valid token."
  exit 1
fi
# Use provided username or auto-detect
OCIR_USERNAME="${ocirUsernameValue}"
if [ "${dollarDollar}OCIR_USERNAME" == "AUTO_DETECT" ]; then
  USER_OCID=${cmdSubStart}oci iam user list --query "data[0].id" --raw-output 2>/dev/null${cmdSubEnd}
  if [ -n "${dollarDollar}USER_OCID" ] && [ "${dollarDollar}USER_OCID" != "null" ]; then
    USER_NAME=${cmdSubStart}oci iam user get --user-id "${dollarDollar}USER_OCID" --query 'data.name' --raw-output 2>/dev/null || echo ""${cmdSubEnd}
    if [ -n "${dollarDollar}USER_NAME" ]; then
      OCIR_USERNAME="${namespacePlaceholder}/${dollarDollar}USER_NAME"
    else
      echo "Warning: Could not auto-detect username. Using default format."
      OCIR_USERNAME="${namespacePlaceholder}/user"
    fi
  else
    OCIR_USERNAME="${namespacePlaceholder}/user"
  fi
fi
echo "${dollarDollar}OCIR_AUTH_TOKEN" | docker login ${regionPlaceholder}.ocir.io -u "${dollarDollar}OCIR_USERNAME" --password-stdin >/dev/null 2>&1 || {
  echo "Error: Docker login failed. Check your OCI_AUTH_TOKEN and username format." >&2
  echo "Username used: ${dollarDollar}OCIR_USERNAME" >&2
  echo "Username format should be: <tenancy-namespace>/<username>" >&2
  echo "Set manually: export OCI_OCIR_USERNAME=\\"${namespacePlaceholder}/your-actual-username\\"" >&2
  exit 1
}`
      : `# Generate OCIR auth token via OCI CLI and login to OCIR
# Try raw-request method first (uses default OCI CLI auth from config)
OCIR_HOST="${regionPlaceholder}.ocir.io"
if oci raw-request --region ${regionPlaceholder} --http-method GET --target-uri "https://${regionPlaceholder}.ocir.io/20180419/docker/token" >/dev/null 2>&1; then
  if command -v jq >/dev/null 2>&1; then
    oci raw-request --region ${regionPlaceholder} --http-method GET --target-uri "https://${regionPlaceholder}.ocir.io/20180419/docker/token" 2>/dev/null | jq -r .data.token 2>/dev/null | docker login -u BEARER_TOKEN --password-stdin ${regionPlaceholder}.ocir.io >/dev/null 2>&1 || {
      echo "Error: Docker login with raw-request failed." >&2
      exit 1
    }
  else
    oci raw-request --region ${regionPlaceholder} --http-method GET --target-uri "https://${regionPlaceholder}.ocir.io/20180419/docker/token" 2>/dev/null | grep -o '"token":"[^"]*"' | cut -d'"' -f4 | docker login -u BEARER_TOKEN --password-stdin ${regionPlaceholder}.ocir.io >/dev/null 2>&1 || {
      echo "Error: Docker login with raw-request failed." >&2
      exit 1
    }
  fi
else
  # Fallback to auth token method (for localhost)
  # Get user OCID from CLI config (same approach as reference script)
  OCI_CONFIG="${dollarDollar}{OCI_CLI_CONFIG_FILE:-${dollarDollar}HOME/.oci/config}"
  OCI_PROFILE="${dollarDollar}{OCI_CLI_PROFILE:-DEFAULT}"
  USER_OCID=""
  if [ -f "${dollarDollar}OCI_CONFIG" ]; then
    USER_OCID=${cmdSubStart}awk -v prof="[${dollarDollar}OCI_PROFILE]" '${dollarDollar}0 == prof { in_profile=1; next } /^\\[/ { in_profile=0 } in_profile && ${dollarDollar}0 ~ /^[[:space:]]*user[[:space:]]*=/ { split(${dollarDollar}0, a, "="); gsub(/^[[:space:]]+|[[:space:]]+${dollarDollar}/, "", a[2]); print a[2]; exit }' "${dollarDollar}OCI_CONFIG" 2>/dev/null || echo ""${cmdSubEnd}
  fi

  # Fallback to user list if not in config
  if [ -z "${dollarDollar}USER_OCID" ] || [ "${dollarDollar}USER_OCID" != ocid1.* ]; then
    USER_OCID=${cmdSubStart}oci iam user list --query "data[0].id" --raw-output 2>/dev/null || echo ""${cmdSubEnd}
  fi

  if [ -z "${dollarDollar}USER_OCID" ] || [ "${dollarDollar}USER_OCID" == "null" ] || [ "${dollarDollar}USER_OCID" != ocid1.* ]; then
    echo "Error: Could not get user OCID. Set OCI_AUTH_TOKEN manually or ensure OCI CLI is configured." >&2
    echo "Run: oci iam user list" >&2
    echo "Or check your OCI config: ${dollarDollar}OCI_CONFIG" >&2
    exit 1
  fi

  # Verify user exists before trying to create token
  if ! oci iam user get --user-id "${dollarDollar}USER_OCID" >/dev/null 2>&1; then
    echo "Error: User OCID '${dollarDollar}USER_OCID' not found or not accessible." >&2
    echo "Please verify your OCI CLI configuration or set OCI_AUTH_TOKEN manually." >&2
    exit 1
  fi

  # Get username for OCIR login
  OCIR_USERNAME_VAR="${ocirUsernameValue}"
  if [ "${dollarDollar}OCIR_USERNAME_VAR" == "AUTO_DETECT" ]; then
    USER_NAME=${cmdSubStart}oci iam user get --user-id "${dollarDollar}USER_OCID" --query 'data.name' --raw-output 2>/dev/null || echo ""${cmdSubEnd}
    if [ -z "${dollarDollar}USER_NAME" ] || [ "${dollarDollar}USER_NAME" == "null" ]; then
      echo "Error: Could not get username for user ${dollarDollar}USER_OCID." >&2
      echo "Please set OCI_OCIR_USERNAME manually." >&2
      echo "Format: export OCI_OCIR_USERNAME=\\"${namespacePlaceholder}/your-username\\"" >&2
      exit 1
    fi
    # Extract username part if it contains domain (e.g., "oracleidentitycloudservice/user@example.com" -> "user@example.com")
    USER_NAME="${dollarDollar}{USER_NAME##*/}"
    OCIR_USERNAME="${namespacePlaceholder}/oracleidentitycloudservice/${dollarDollar}USER_NAME"
  else
    OCIR_USERNAME="${dollarDollar}OCIR_USERNAME_VAR"
  fi

  DESC="OCIR Docker login token - ${cmdSubStart}date +%Y%m%d-%H%M%S${cmdSubEnd}"
  TOKEN=${cmdSubStart}oci iam auth-token create --user-id "${dollarDollar}USER_OCID" --description "${dollarDollar}DESC" --query 'data.token' --raw-output 2>/dev/null || true${cmdSubEnd}

  if [ -z "${dollarDollar}TOKEN" ] || [ "${dollarDollar}TOKEN" == "null" ]; then
    echo "Error: Failed to create auth token via OCI CLI." >&2
    echo "This might be due to:" >&2
    echo "  - Missing IAM permissions (need: manage auth-tokens)" >&2
    echo "  - User OCID '${dollarDollar}USER_OCID' is incorrect or user doesn't exist" >&2
    echo "  - OCI CLI not properly configured" >&2
    echo "" >&2
    echo "Solution: Set OCI_AUTH_TOKEN manually:" >&2
    echo "  1. Get token from: https://cloud.oracle.com/identity/tokens" >&2
    echo "  2. Export: export OCI_AUTH_TOKEN=\\"your-token\\"" >&2
    echo "  3. Also set: export OCI_OCIR_USERNAME=\\"${dollarDollar}OCIR_USERNAME\\"" >&2
    echo "  4. Then re-run: npm run deploy" >&2
    exit 1
  fi

  export OCIR_AUTH_TOKEN="${dollarDollar}TOKEN"
  echo "${dollarDollar}OCIR_AUTH_TOKEN" | docker login ${regionPlaceholder}.ocir.io -u "${dollarDollar}OCIR_USERNAME" --password-stdin >/dev/null 2>&1 || {
    echo "Error: Docker login failed with generated token." >&2
    echo "Username used: ${dollarDollar}OCIR_USERNAME" >&2
    echo "Check that the username format is correct: <tenancy-namespace>/<domain>/<username>" >&2
    echo "If incorrect, set: export OCI_OCIR_USERNAME=\\"${namespacePlaceholder}/oracleidentitycloudservice/your-username\\"" >&2
    exit 1
  }
fi`;
    
    this.addOverride(`resource.null_resource.${buildAndPushImageId}.provisioner`, [
      {
        'local-exec': {
          command: `cd ${functionCodePath} && docker build --platform linux/amd64 -t ${imageUrl} .`,
        },
      },
      {
        'local-exec': {
          command: loginScript,
          on_failure: 'continue',
        },
      },
      {
        'local-exec': {
          command: `docker push ${imageUrl}`,
        },
      },
    ]);
    
    // Create a reference to the null_resource for dependency tracking
    // We'll use a TerraformData source as a proxy to reference it
    const buildAndPushImageRef = `\${null_resource.${buildAndPushImageId}.id}`;

    // -------------------------------------------------------------------------
    // VCN and Subnets
    // -------------------------------------------------------------------------
    const vcn = new CoreVcn(this, 'Vcn', {
      compartmentId: config.compartmentId,
      displayName: `${id}-vcn`,
      cidrBlocks: ['10.0.0.0/16'],
      dnsLabel: 'testfn',
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

    // -------------------------------------------------------------------------
    // Security List for Public Subnet (API Gateway)
    // -------------------------------------------------------------------------
    const publicSecurityList = new CoreSecurityList(this, 'PublicSecurityList', {
      compartmentId: config.compartmentId,
      vcnId: vcn.id,
      displayName: `${id}-public-sl`,
      ingressSecurityRules: [
        {
          protocol: '6', // TCP
          source: '0.0.0.0/0',
          description: 'Allow HTTP (80) from internet',
          tcpOptions: {
            min: 80,
            max: 80,
          },
        },
        {
          protocol: '6', // TCP
          source: '0.0.0.0/0',
          description: 'Allow HTTPS (443) from internet',
          tcpOptions: {
            min: 443,
            max: 443,
          },
        },
      ],
      egressSecurityRules: [
        {
          protocol: 'all',
          destination: '0.0.0.0/0',
          description: 'Allow all outbound traffic',
        },
      ],
    });

    // Associate security list with public subnet
    publicSubnet.addOverride('security_list_ids', [publicSecurityList.id]);

    // -------------------------------------------------------------------------
    // Service Gateway (for OCIR access from private subnet)
    // -------------------------------------------------------------------------
    // Get Object Storage service ID (OCIR uses Object Storage)
    // Get all services - the first service is typically "All <region> Services in Oracle Services Network"
    // This service includes Object Storage and other OCI services
    const allServices = new DataOciCoreServices(this, 'AllServices', {});

    const serviceGateway = new CoreServiceGateway(this, 'ServiceGateway', {
      compartmentId: config.compartmentId,
      vcnId: vcn.id,
      displayName: `${id}-service-gateway`,
      services: [
        {
          serviceId: allServices.services.get(0).id,
        },
      ],
    });

    // Route table for private subnet to route Object Storage traffic via Service Gateway
    const privateRouteTable = new CoreRouteTable(this, 'PrivateRouteTable', {
      compartmentId: config.compartmentId,
      vcnId: vcn.id,
      displayName: `${id}-private-rt`,
      routeRules: [
        {
          networkEntityId: serviceGateway.id,
          destination: allServices.services.get(0).cidrBlock,
          destinationType: 'SERVICE_CIDR_BLOCK',
          description: 'Route Object Storage/OCIR traffic via Service Gateway',
        },
      ],
    });

    // Associate route table with private subnet
    privateSubnet.addOverride('route_table_id', privateRouteTable.id);

    // -------------------------------------------------------------------------
    // Internet Gateway (for public subnet internet access)
    // -------------------------------------------------------------------------
    const internetGateway = new CoreInternetGateway(this, 'InternetGateway', {
      compartmentId: config.compartmentId,
      vcnId: vcn.id,
      displayName: `${id}-igw`,
      enabled: true,
    });

    // Route table for public subnet to route internet traffic via Internet Gateway
    const publicRouteTable = new CoreRouteTable(this, 'PublicRouteTable', {
      compartmentId: config.compartmentId,
      vcnId: vcn.id,
      displayName: `${id}-public-rt`,
      routeRules: [
        {
          networkEntityId: internetGateway.id,
          destination: '0.0.0.0/0',
          destinationType: 'CIDR_BLOCK',
          description: 'Route all internet traffic via Internet Gateway',
        },
      ],
    });

    // Associate route table with public subnet
    publicSubnet.addOverride('route_table_id', publicRouteTable.id);

    // -------------------------------------------------------------------------
    // API Gateway (public subnet)
    // -------------------------------------------------------------------------
    const apiGateway = new ApigatewayGateway(this, 'ApiGateway', {
      compartmentId: config.compartmentId,
      subnetId: publicSubnet.id,
      endpointType: 'PUBLIC',
      displayName: `${id}-api-gateway`,
    });

    // -------------------------------------------------------------------------
    // Functions Application (private subnet) and Function
    // -------------------------------------------------------------------------
    const functionApp = new FunctionsApplication(this, 'FunctionApp', {
      compartmentId: config.compartmentId,
      displayName: config.functionAppName,
      subnetIds: [privateSubnet.id],
    });

    // Function depends on image being pushed to OCIR
    const ociFunction = new FunctionsFunction(this, 'Function', {
      applicationId: functionApp.id,
      displayName: config.functionName,
      image: imageUrl,
      memoryInMbs: '256',
      timeoutInSeconds: 30,
    });
    // Add dependency on null_resource using addOverride
    // This ensures the image is built and pushed before the Function is created
    ociFunction.addOverride('depends_on', [`null_resource.${buildAndPushImageId}`]);

    // -------------------------------------------------------------------------
    // API Gateway Deployment – route to function (only after function exists)
    // -------------------------------------------------------------------------
    const apiDeployment = new ApigatewayDeployment(this, 'ApiDeployment', {
      compartmentId: config.compartmentId,
      gatewayId: apiGateway.id,
      pathPrefix: '/test',
      displayName: `${id}-deployment`,
      specification: {
        routes: [
          {
            path: '/',
            methods: ['GET', 'POST', 'OPTIONS'],
            backend: {
              type: 'ORACLE_FUNCTIONS_BACKEND',
              functionId: ociFunction.id,
            },
          },
        ],
      },
    });
    apiDeployment.node.addDependency(ociFunction);

    // -------------------------------------------------------------------------
    // Outputs
    // -------------------------------------------------------------------------
    new TerraformOutput(this, 'ocir_repository_name', {
      value: ocirRepository.displayName,
      description: 'OCIR repository display name',
    });

    new TerraformOutput(this, 'api_gateway_host', {
      value: apiGateway.hostname,
      description: 'API Gateway hostname for invoking the function',
    });

    new TerraformOutput(this, 'function_invoke_url', {
      value: `https://${apiGateway.hostname}/test`,
      description: 'Base URL to invoke the test function (use ?action=hello|echo|info)',
    });

    new TerraformOutput(this, 'function_id', {
      value: ociFunction.id,
      description: 'OCI Function OCID (for deploy-function.sh or oci fn function update)',
    });
  }
}
