// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceMeshIngressGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#compartment_id ServiceMeshIngressGatewayRouteTable#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#defined_tags ServiceMeshIngressGatewayRouteTable#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#description ServiceMeshIngressGatewayRouteTable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#freeform_tags ServiceMeshIngressGatewayRouteTable#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#id ServiceMeshIngressGatewayRouteTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_id ServiceMeshIngressGatewayRouteTable#ingress_gateway_id}
  */
  readonly ingressGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#priority ServiceMeshIngressGatewayRouteTable#priority}
  */
  readonly priority?: number;
  /**
  * route_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#route_rules ServiceMeshIngressGatewayRouteTable#route_rules}
  */
  readonly routeRules: ServiceMeshIngressGatewayRouteTableRouteRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#timeouts ServiceMeshIngressGatewayRouteTable#timeouts}
  */
  readonly timeouts?: ServiceMeshIngressGatewayRouteTableTimeouts;
}
export interface ServiceMeshIngressGatewayRouteTableRouteRulesDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#virtual_service_id ServiceMeshIngressGatewayRouteTable#virtual_service_id}
  */
  readonly virtualServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#weight ServiceMeshIngressGatewayRouteTable#weight}
  */
  readonly weight?: number;
}

export function serviceMeshIngressGatewayRouteTableRouteRulesDestinationsToTerraform(struct?: ServiceMeshIngressGatewayRouteTableRouteRulesDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_service_id: cdktf.stringToTerraform(struct!.virtualServiceId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function serviceMeshIngressGatewayRouteTableRouteRulesDestinationsToHclTerraform(struct?: ServiceMeshIngressGatewayRouteTableRouteRulesDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_service_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServiceMeshIngressGatewayRouteTableRouteRulesDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceId = this._virtualServiceId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayRouteTableRouteRulesDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualServiceId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualServiceId = value.virtualServiceId;
      this._weight = value.weight;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_service_id - computed: false, optional: false, required: true
  private _virtualServiceId?: string; 
  public get virtualServiceId() {
    return this.getStringAttribute('virtual_service_id');
  }
  public set virtualServiceId(value: string) {
    this._virtualServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceIdInput() {
    return this._virtualServiceId;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList extends cdktf.ComplexList {
  public internalValue? : ServiceMeshIngressGatewayRouteTableRouteRulesDestinations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference {
    return new ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}
  */
  readonly port?: number;
}

export function serviceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostToTerraform(struct?: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference | ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function serviceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostToHclTerraform(struct?: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference | ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._port = value.port;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ServiceMeshIngressGatewayRouteTableRouteRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#is_grpc ServiceMeshIngressGatewayRouteTable#is_grpc}
  */
  readonly isGrpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#is_host_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_host_rewrite_enabled}
  */
  readonly isHostRewriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#is_path_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_path_rewrite_enabled}
  */
  readonly isPathRewriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#path ServiceMeshIngressGatewayRouteTable#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#path_type ServiceMeshIngressGatewayRouteTable#path_type}
  */
  readonly pathType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#request_timeout_in_ms ServiceMeshIngressGatewayRouteTable#request_timeout_in_ms}
  */
  readonly requestTimeoutInMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#type ServiceMeshIngressGatewayRouteTable#type}
  */
  readonly type: string;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#destinations ServiceMeshIngressGatewayRouteTable#destinations}
  */
  readonly destinations: ServiceMeshIngressGatewayRouteTableRouteRulesDestinations[] | cdktf.IResolvable;
  /**
  * ingress_gateway_host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_host ServiceMeshIngressGatewayRouteTable#ingress_gateway_host}
  */
  readonly ingressGatewayHost?: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost;
}

export function serviceMeshIngressGatewayRouteTableRouteRulesToTerraform(struct?: ServiceMeshIngressGatewayRouteTableRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_grpc: cdktf.booleanToTerraform(struct!.isGrpc),
    is_host_rewrite_enabled: cdktf.booleanToTerraform(struct!.isHostRewriteEnabled),
    is_path_rewrite_enabled: cdktf.booleanToTerraform(struct!.isPathRewriteEnabled),
    path: cdktf.stringToTerraform(struct!.path),
    path_type: cdktf.stringToTerraform(struct!.pathType),
    request_timeout_in_ms: cdktf.stringToTerraform(struct!.requestTimeoutInMs),
    type: cdktf.stringToTerraform(struct!.type),
    destinations: cdktf.listMapper(serviceMeshIngressGatewayRouteTableRouteRulesDestinationsToTerraform, true)(struct!.destinations),
    ingress_gateway_host: serviceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostToTerraform(struct!.ingressGatewayHost),
  }
}


export function serviceMeshIngressGatewayRouteTableRouteRulesToHclTerraform(struct?: ServiceMeshIngressGatewayRouteTableRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_grpc: {
      value: cdktf.booleanToHclTerraform(struct!.isGrpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_host_rewrite_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isHostRewriteEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_path_rewrite_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPathRewriteEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_type: {
      value: cdktf.stringToHclTerraform(struct!.pathType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_timeout_in_ms: {
      value: cdktf.stringToHclTerraform(struct!.requestTimeoutInMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destinations: {
      value: cdktf.listMapperHcl(serviceMeshIngressGatewayRouteTableRouteRulesDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList",
    },
    ingress_gateway_host: {
      value: serviceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostToHclTerraform(struct!.ingressGatewayHost),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServiceMeshIngressGatewayRouteTableRouteRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isGrpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGrpc = this._isGrpc;
    }
    if (this._isHostRewriteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHostRewriteEnabled = this._isHostRewriteEnabled;
    }
    if (this._isPathRewriteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPathRewriteEnabled = this._isPathRewriteEnabled;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathType = this._pathType;
    }
    if (this._requestTimeoutInMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeoutInMs = this._requestTimeoutInMs;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._ingressGatewayHost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressGatewayHost = this._ingressGatewayHost?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayRouteTableRouteRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isGrpc = undefined;
      this._isHostRewriteEnabled = undefined;
      this._isPathRewriteEnabled = undefined;
      this._path = undefined;
      this._pathType = undefined;
      this._requestTimeoutInMs = undefined;
      this._type = undefined;
      this._destinations.internalValue = undefined;
      this._ingressGatewayHost.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isGrpc = value.isGrpc;
      this._isHostRewriteEnabled = value.isHostRewriteEnabled;
      this._isPathRewriteEnabled = value.isPathRewriteEnabled;
      this._path = value.path;
      this._pathType = value.pathType;
      this._requestTimeoutInMs = value.requestTimeoutInMs;
      this._type = value.type;
      this._destinations.internalValue = value.destinations;
      this._ingressGatewayHost.internalValue = value.ingressGatewayHost;
    }
  }

  // is_grpc - computed: true, optional: true, required: false
  private _isGrpc?: boolean | cdktf.IResolvable; 
  public get isGrpc() {
    return this.getBooleanAttribute('is_grpc');
  }
  public set isGrpc(value: boolean | cdktf.IResolvable) {
    this._isGrpc = value;
  }
  public resetIsGrpc() {
    this._isGrpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGrpcInput() {
    return this._isGrpc;
  }

  // is_host_rewrite_enabled - computed: true, optional: true, required: false
  private _isHostRewriteEnabled?: boolean | cdktf.IResolvable; 
  public get isHostRewriteEnabled() {
    return this.getBooleanAttribute('is_host_rewrite_enabled');
  }
  public set isHostRewriteEnabled(value: boolean | cdktf.IResolvable) {
    this._isHostRewriteEnabled = value;
  }
  public resetIsHostRewriteEnabled() {
    this._isHostRewriteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHostRewriteEnabledInput() {
    return this._isHostRewriteEnabled;
  }

  // is_path_rewrite_enabled - computed: true, optional: true, required: false
  private _isPathRewriteEnabled?: boolean | cdktf.IResolvable; 
  public get isPathRewriteEnabled() {
    return this.getBooleanAttribute('is_path_rewrite_enabled');
  }
  public set isPathRewriteEnabled(value: boolean | cdktf.IResolvable) {
    this._isPathRewriteEnabled = value;
  }
  public resetIsPathRewriteEnabled() {
    this._isPathRewriteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPathRewriteEnabledInput() {
    return this._isPathRewriteEnabled;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_type - computed: true, optional: true, required: false
  private _pathType?: string; 
  public get pathType() {
    return this.getStringAttribute('path_type');
  }
  public set pathType(value: string) {
    this._pathType = value;
  }
  public resetPathType() {
    this._pathType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }

  // request_timeout_in_ms - computed: true, optional: true, required: false
  private _requestTimeoutInMs?: string; 
  public get requestTimeoutInMs() {
    return this.getStringAttribute('request_timeout_in_ms');
  }
  public set requestTimeoutInMs(value: string) {
    this._requestTimeoutInMs = value;
  }
  public resetRequestTimeoutInMs() {
    this._requestTimeoutInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInMsInput() {
    return this._requestTimeoutInMs;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: ServiceMeshIngressGatewayRouteTableRouteRulesDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // ingress_gateway_host - computed: false, optional: true, required: false
  private _ingressGatewayHost = new ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference(this, "ingress_gateway_host");
  public get ingressGatewayHost() {
    return this._ingressGatewayHost;
  }
  public putIngressGatewayHost(value: ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost) {
    this._ingressGatewayHost.internalValue = value;
  }
  public resetIngressGatewayHost() {
    this._ingressGatewayHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGatewayHostInput() {
    return this._ingressGatewayHost.internalValue;
  }
}

export class ServiceMeshIngressGatewayRouteTableRouteRulesList extends cdktf.ComplexList {
  public internalValue? : ServiceMeshIngressGatewayRouteTableRouteRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference {
    return new ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMeshIngressGatewayRouteTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#create ServiceMeshIngressGatewayRouteTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#delete ServiceMeshIngressGatewayRouteTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#update ServiceMeshIngressGatewayRouteTable#update}
  */
  readonly update?: string;
}

export function serviceMeshIngressGatewayRouteTableTimeoutsToTerraform(struct?: ServiceMeshIngressGatewayRouteTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serviceMeshIngressGatewayRouteTableTimeoutsToHclTerraform(struct?: ServiceMeshIngressGatewayRouteTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceMeshIngressGatewayRouteTableTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayRouteTableTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table oci_service_mesh_ingress_gateway_route_table}
*/
export class ServiceMeshIngressGatewayRouteTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_mesh_ingress_gateway_route_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceMeshIngressGatewayRouteTable to import
  * @param importFromId The id of the existing ServiceMeshIngressGatewayRouteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceMeshIngressGatewayRouteTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_mesh_ingress_gateway_route_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway_route_table oci_service_mesh_ingress_gateway_route_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceMeshIngressGatewayRouteTableConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceMeshIngressGatewayRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_mesh_ingress_gateway_route_table',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '5.47.0',
        providerVersionConstraint: '>= 5.0.0, < 6.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._ingressGatewayId = config.ingressGatewayId;
    this._name = config.name;
    this._priority = config.priority;
    this._routeRules.internalValue = config.routeRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ingress_gateway_id - computed: false, optional: false, required: true
  private _ingressGatewayId?: string; 
  public get ingressGatewayId() {
    return this.getStringAttribute('ingress_gateway_id');
  }
  public set ingressGatewayId(value: string) {
    this._ingressGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGatewayIdInput() {
    return this._ingressGatewayId;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // route_rules - computed: false, optional: false, required: true
  private _routeRules = new ServiceMeshIngressGatewayRouteTableRouteRulesList(this, "route_rules", true);
  public get routeRules() {
    return this._routeRules;
  }
  public putRouteRules(value: ServiceMeshIngressGatewayRouteTableRouteRules[] | cdktf.IResolvable) {
    this._routeRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRulesInput() {
    return this._routeRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceMeshIngressGatewayRouteTableTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      ingress_gateway_id: cdktf.stringToTerraform(this._ingressGatewayId),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      route_rules: cdktf.listMapper(serviceMeshIngressGatewayRouteTableRouteRulesToTerraform, true)(this._routeRules.internalValue),
      timeouts: serviceMeshIngressGatewayRouteTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_gateway_id: {
        value: cdktf.stringToHclTerraform(this._ingressGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_rules: {
        value: cdktf.listMapperHcl(serviceMeshIngressGatewayRouteTableRouteRulesToHclTerraform, true)(this._routeRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceMeshIngressGatewayRouteTableRouteRulesList",
      },
      timeouts: {
        value: serviceMeshIngressGatewayRouteTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceMeshIngressGatewayRouteTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
