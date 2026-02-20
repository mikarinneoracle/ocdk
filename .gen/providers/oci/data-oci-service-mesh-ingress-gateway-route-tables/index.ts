// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciServiceMeshIngressGatewayRouteTablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}
  */
  readonly ingressGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#filter DataOciServiceMeshIngressGatewayRouteTables#filter}
  */
  readonly filter?: DataOciServiceMeshIngressGatewayRouteTablesFilter[] | cdktf.IResolvable;
}
export interface DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations {
}

export function dataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsToTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsToHclTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations | undefined) {
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

export class DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference {
    return new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost {
}

export function dataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostToTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostToHclTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost | undefined) {
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

export class DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference {
    return new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules {
}

export function dataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesToTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesToHclTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // ingress_gateway_host - computed: true, optional: false, required: false
  private _ingressGatewayHost = new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList(this, "ingress_gateway_host", false);
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

export class DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference {
    return new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems {
}

export function dataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsToTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsToHclTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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
  private _routeRules = new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList(this, "route_rules", false);
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
}

export class DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference {
    return new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection {
}

export function dataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionToTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionToHclTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference {
    return new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewayRouteTablesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#regex DataOciServiceMeshIngressGatewayRouteTables#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#values DataOciServiceMeshIngressGatewayRouteTables#values}
  */
  readonly values: string[];
}

export function dataOciServiceMeshIngressGatewayRouteTablesFilterToTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciServiceMeshIngressGatewayRouteTablesFilterToHclTerraform(struct?: DataOciServiceMeshIngressGatewayRouteTablesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceMeshIngressGatewayRouteTablesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewayRouteTablesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciServiceMeshIngressGatewayRouteTablesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciServiceMeshIngressGatewayRouteTablesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference {
    return new DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables oci_service_mesh_ingress_gateway_route_tables}
*/
export class DataOciServiceMeshIngressGatewayRouteTables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_mesh_ingress_gateway_route_tables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciServiceMeshIngressGatewayRouteTables to import
  * @param importFromId The id of the existing DataOciServiceMeshIngressGatewayRouteTables that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciServiceMeshIngressGatewayRouteTables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_mesh_ingress_gateway_route_tables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/service_mesh_ingress_gateway_route_tables oci_service_mesh_ingress_gateway_route_tables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciServiceMeshIngressGatewayRouteTablesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciServiceMeshIngressGatewayRouteTablesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_mesh_ingress_gateway_route_tables',
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
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._ingressGatewayId = config.ingressGatewayId;
    this._name = config.name;
    this._state = config.state;
    this._filter.internalValue = config.filter;
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

  // id - computed: false, optional: true, required: false
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

  // ingress_gateway_id - computed: false, optional: true, required: false
  private _ingressGatewayId?: string; 
  public get ingressGatewayId() {
    return this.getStringAttribute('ingress_gateway_id');
  }
  public set ingressGatewayId(value: string) {
    this._ingressGatewayId = value;
  }
  public resetIngressGatewayId() {
    this._ingressGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGatewayIdInput() {
    return this._ingressGatewayId;
  }

  // ingress_gateway_route_table_collection - computed: true, optional: false, required: false
  private _ingressGatewayRouteTableCollection = new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList(this, "ingress_gateway_route_table_collection", false);
  public get ingressGatewayRouteTableCollection() {
    return this._ingressGatewayRouteTableCollection;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciServiceMeshIngressGatewayRouteTablesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciServiceMeshIngressGatewayRouteTablesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      ingress_gateway_id: cdktf.stringToTerraform(this._ingressGatewayId),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciServiceMeshIngressGatewayRouteTablesFilterToTerraform, true)(this._filter.internalValue),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciServiceMeshIngressGatewayRouteTablesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciServiceMeshIngressGatewayRouteTablesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
