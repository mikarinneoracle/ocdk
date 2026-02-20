// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/visual_builder_vb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciVisualBuilderVbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/visual_builder_vb_instance#vb_instance_id DataOciVisualBuilderVbInstance#vb_instance_id}
  */
  readonly vbInstanceId: string;
}
export interface DataOciVisualBuilderVbInstanceAlternateCustomEndpoints {
}

export function dataOciVisualBuilderVbInstanceAlternateCustomEndpointsToTerraform(struct?: DataOciVisualBuilderVbInstanceAlternateCustomEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciVisualBuilderVbInstanceAlternateCustomEndpointsToHclTerraform(struct?: DataOciVisualBuilderVbInstanceAlternateCustomEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstanceAlternateCustomEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstanceAlternateCustomEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_secret_id - computed: true, optional: false, required: false
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
}

export class DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference {
    return new DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciVisualBuilderVbInstanceAttachments {
}

export function dataOciVisualBuilderVbInstanceAttachmentsToTerraform(struct?: DataOciVisualBuilderVbInstanceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciVisualBuilderVbInstanceAttachmentsToHclTerraform(struct?: DataOciVisualBuilderVbInstanceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciVisualBuilderVbInstanceAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstanceAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstanceAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_implicit - computed: true, optional: false, required: false
  public get isImplicit() {
    return this.getBooleanAttribute('is_implicit');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_instance_url - computed: true, optional: false, required: false
  public get targetInstanceUrl() {
    return this.getStringAttribute('target_instance_url');
  }

  // target_role - computed: true, optional: false, required: false
  public get targetRole() {
    return this.getStringAttribute('target_role');
  }

  // target_service_type - computed: true, optional: false, required: false
  public get targetServiceType() {
    return this.getStringAttribute('target_service_type');
  }
}

export class DataOciVisualBuilderVbInstanceAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstanceAttachmentsOutputReference {
    return new DataOciVisualBuilderVbInstanceAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciVisualBuilderVbInstanceCustomEndpoint {
}

export function dataOciVisualBuilderVbInstanceCustomEndpointToTerraform(struct?: DataOciVisualBuilderVbInstanceCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciVisualBuilderVbInstanceCustomEndpointToHclTerraform(struct?: DataOciVisualBuilderVbInstanceCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciVisualBuilderVbInstanceCustomEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstanceCustomEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstanceCustomEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_secret_id - computed: true, optional: false, required: false
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
}

export class DataOciVisualBuilderVbInstanceCustomEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstanceCustomEndpointOutputReference {
    return new DataOciVisualBuilderVbInstanceCustomEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciVisualBuilderVbInstanceIdcsInfo {
}

export function dataOciVisualBuilderVbInstanceIdcsInfoToTerraform(struct?: DataOciVisualBuilderVbInstanceIdcsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciVisualBuilderVbInstanceIdcsInfoToHclTerraform(struct?: DataOciVisualBuilderVbInstanceIdcsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciVisualBuilderVbInstanceIdcsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstanceIdcsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstanceIdcsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idcs_app_display_name - computed: true, optional: false, required: false
  public get idcsAppDisplayName() {
    return this.getStringAttribute('idcs_app_display_name');
  }

  // idcs_app_id - computed: true, optional: false, required: false
  public get idcsAppId() {
    return this.getStringAttribute('idcs_app_id');
  }

  // idcs_app_location_url - computed: true, optional: false, required: false
  public get idcsAppLocationUrl() {
    return this.getStringAttribute('idcs_app_location_url');
  }

  // idcs_app_name - computed: true, optional: false, required: false
  public get idcsAppName() {
    return this.getStringAttribute('idcs_app_name');
  }

  // instance_primary_audience_url - computed: true, optional: false, required: false
  public get instancePrimaryAudienceUrl() {
    return this.getStringAttribute('instance_primary_audience_url');
  }
}

export class DataOciVisualBuilderVbInstanceIdcsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstanceIdcsInfoOutputReference {
    return new DataOciVisualBuilderVbInstanceIdcsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/visual_builder_vb_instance oci_visual_builder_vb_instance}
*/
export class DataOciVisualBuilderVbInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_visual_builder_vb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciVisualBuilderVbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciVisualBuilderVbInstance to import
  * @param importFromId The id of the existing DataOciVisualBuilderVbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/visual_builder_vb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciVisualBuilderVbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_visual_builder_vb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/visual_builder_vb_instance oci_visual_builder_vb_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciVisualBuilderVbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciVisualBuilderVbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_visual_builder_vb_instance',
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
    this._vbInstanceId = config.vbInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_custom_endpoints - computed: true, optional: false, required: false
  private _alternateCustomEndpoints = new DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList(this, "alternate_custom_endpoints", false);
  public get alternateCustomEndpoints() {
    return this._alternateCustomEndpoints;
  }

  // attachments - computed: true, optional: false, required: false
  private _attachments = new DataOciVisualBuilderVbInstanceAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // consumption_model - computed: true, optional: false, required: false
  public get consumptionModel() {
    return this.getStringAttribute('consumption_model');
  }

  // custom_endpoint - computed: true, optional: false, required: false
  private _customEndpoint = new DataOciVisualBuilderVbInstanceCustomEndpointList(this, "custom_endpoint", false);
  public get customEndpoint() {
    return this._customEndpoint;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // idcs_info - computed: true, optional: false, required: false
  private _idcsInfo = new DataOciVisualBuilderVbInstanceIdcsInfoList(this, "idcs_info", false);
  public get idcsInfo() {
    return this._idcsInfo;
  }

  // idcs_open_id - computed: true, optional: false, required: false
  public get idcsOpenId() {
    return this.getStringAttribute('idcs_open_id');
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // is_visual_builder_enabled - computed: true, optional: false, required: false
  public get isVisualBuilderEnabled() {
    return this.getBooleanAttribute('is_visual_builder_enabled');
  }

  // management_nat_gateway_ip - computed: true, optional: false, required: false
  public get managementNatGatewayIp() {
    return this.getStringAttribute('management_nat_gateway_ip');
  }

  // management_vcn_id - computed: true, optional: false, required: false
  public get managementVcnId() {
    return this.getStringAttribute('management_vcn_id');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // service_nat_gateway_ip - computed: true, optional: false, required: false
  public get serviceNatGatewayIp() {
    return this.getStringAttribute('service_nat_gateway_ip');
  }

  // service_vcn_id - computed: true, optional: false, required: false
  public get serviceVcnId() {
    return this.getStringAttribute('service_vcn_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
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

  // vb_instance_id - computed: false, optional: false, required: true
  private _vbInstanceId?: string; 
  public get vbInstanceId() {
    return this.getStringAttribute('vb_instance_id');
  }
  public set vbInstanceId(value: string) {
    this._vbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vbInstanceIdInput() {
    return this._vbInstanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      vb_instance_id: cdktf.stringToTerraform(this._vbInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      vb_instance_id: {
        value: cdktf.stringToHclTerraform(this._vbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
