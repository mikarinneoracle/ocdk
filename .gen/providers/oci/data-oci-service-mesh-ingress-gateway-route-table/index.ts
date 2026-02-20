// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciServiceMeshIngressGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_table#ingress_gateway_route_table_id DataOciServiceMeshIngressGatewayRouteTable#ingress_gateway_route_table_id}
  */
  readonly ingressGatewayRouteTableId: string;
}
export interface DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations {
}

export function dataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsToTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsToHclTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // virtual_service_id - computed: true, optional: false, required: false
  public get virtualServiceId() {
    return this.getStringAttribute('virtual_service_id');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference {
    return new DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost {
}

export function dataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostToTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostToHclTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference {
    return new DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewayRouteTableRouteRules {
}

export function dataOciServiceMeshIngressGatewayRouteTableRouteRulesToTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTableRouteRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceMeshIngressGatewayRouteTableRouteRulesToHclTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTableRouteRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewayRouteTableRouteRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewayRouteTableRouteRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataOciServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // ingress_gateway_host - computed: true, optional: false, required: false
  private _ingressGatewayHost = new DataOciServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostList(this, "ingress_gateway_host", false);
  public get ingressGatewayHost() {
    return this._ingressGatewayHost;
  }

  // is_grpc - computed: true, optional: false, required: false
  public get isGrpc() {
    return this.getBooleanAttribute('is_grpc');
  }

  // is_host_rewrite_enabled - computed: true, optional: false, required: false
  public get isHostRewriteEnabled() {
    return this.getBooleanAttribute('is_host_rewrite_enabled');
  }

  // is_path_rewrite_enabled - computed: true, optional: false, required: false
  public get isPathRewriteEnabled() {
    return this.getBooleanAttribute('is_path_rewrite_enabled');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_type - computed: true, optional: false, required: false
  public get pathType() {
    return this.getStringAttribute('path_type');
  }

  // request_timeout_in_ms - computed: true, optional: false, required: false
  public get requestTimeoutInMs() {
    return this.getStringAttribute('request_timeout_in_ms');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciServiceMeshIngressGatewayRouteTableRouteRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference {
    return new DataOciServiceMeshIngressGatewayRouteTableRouteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_table oci_service_mesh_ingress_gateway_route_table}
*/
export class DataOciServiceMeshIngressGatewayRouteTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_mesh_ingress_gateway_route_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciServiceMeshIngressGatewayRouteTable to import
  * @param importFromId The id of the existing DataOciServiceMeshIngressGatewayRouteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciServiceMeshIngressGatewayRouteTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_mesh_ingress_gateway_route_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_table oci_service_mesh_ingress_gateway_route_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciServiceMeshIngressGatewayRouteTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciServiceMeshIngressGatewayRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_mesh_ingress_gateway_route_table',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '5.47.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ingressGatewayRouteTableId = config.ingressGatewayRouteTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_gateway_id - computed: true, optional: false, required: false
  public get ingressGatewayId() {
    return this.getStringAttribute('ingress_gateway_id');
  }

  // ingress_gateway_route_table_id - computed: false, optional: false, required: true
  private _ingressGatewayRouteTableId?: string; 
  public get ingressGatewayRouteTableId() {
    return this.getStringAttribute('ingress_gateway_route_table_id');
  }
  public set ingressGatewayRouteTableId(value: string) {
    this._ingressGatewayRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGatewayRouteTableIdInput() {
    return this._ingressGatewayRouteTableId;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // route_rules - computed: true, optional: false, required: false
  private _routeRules = new DataOciServiceMeshIngressGatewayRouteTableRouteRulesList(this, "route_rules", false);
  public get routeRules() {
    return this._routeRules;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ingress_gateway_route_table_id: cdktf.stringToTerraform(this._ingressGatewayRouteTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ingress_gateway_route_table_id: {
        value: cdktf.stringToHclTerraform(this._ingressGatewayRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
