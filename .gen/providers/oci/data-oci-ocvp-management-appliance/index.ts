// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/ocvp_management_appliance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOcvpManagementApplianceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/ocvp_management_appliance#management_appliance_id DataOciOcvpManagementAppliance#management_appliance_id}
  */
  readonly managementApplianceId: string;
}
export interface DataOciOcvpManagementApplianceConfiguration {
}

export function dataOciOcvpManagementApplianceConfigurationToTerraform(struct?: DataOciOcvpManagementApplianceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpManagementApplianceConfigurationToHclTerraform(struct?: DataOciOcvpManagementApplianceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpManagementApplianceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpManagementApplianceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpManagementApplianceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_log_ingestion_enabled - computed: true, optional: false, required: false
  public get isLogIngestionEnabled() {
    return this.getBooleanAttribute('is_log_ingestion_enabled');
  }

  // is_metrics_collection_enabled - computed: true, optional: false, required: false
  public get isMetricsCollectionEnabled() {
    return this.getBooleanAttribute('is_metrics_collection_enabled');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getListAttribute('metrics');
  }

  // support_bundle_bucket_id - computed: true, optional: false, required: false
  public get supportBundleBucketId() {
    return this.getStringAttribute('support_bundle_bucket_id');
  }
}

export class DataOciOcvpManagementApplianceConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpManagementApplianceConfigurationOutputReference {
    return new DataOciOcvpManagementApplianceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpManagementApplianceConnections {
}

export function dataOciOcvpManagementApplianceConnectionsToTerraform(struct?: DataOciOcvpManagementApplianceConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpManagementApplianceConnectionsToHclTerraform(struct?: DataOciOcvpManagementApplianceConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpManagementApplianceConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpManagementApplianceConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpManagementApplianceConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials_secret_id - computed: true, optional: false, required: false
  public get credentialsSecretId() {
    return this.getStringAttribute('credentials_secret_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciOcvpManagementApplianceConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpManagementApplianceConnectionsOutputReference {
    return new DataOciOcvpManagementApplianceConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpManagementApplianceHeartbeatConnectionStates {
}

export function dataOciOcvpManagementApplianceHeartbeatConnectionStatesToTerraform(struct?: DataOciOcvpManagementApplianceHeartbeatConnectionStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpManagementApplianceHeartbeatConnectionStatesToHclTerraform(struct?: DataOciOcvpManagementApplianceHeartbeatConnectionStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpManagementApplianceHeartbeatConnectionStatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpManagementApplianceHeartbeatConnectionStates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpManagementApplianceHeartbeatConnectionStates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciOcvpManagementApplianceHeartbeatConnectionStatesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpManagementApplianceHeartbeatConnectionStatesOutputReference {
    return new DataOciOcvpManagementApplianceHeartbeatConnectionStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/ocvp_management_appliance oci_ocvp_management_appliance}
*/
export class DataOciOcvpManagementAppliance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_management_appliance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOcvpManagementAppliance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOcvpManagementAppliance to import
  * @param importFromId The id of the existing DataOciOcvpManagementAppliance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/ocvp_management_appliance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOcvpManagementAppliance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_management_appliance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/ocvp_management_appliance oci_ocvp_management_appliance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOcvpManagementApplianceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOcvpManagementApplianceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_management_appliance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '8.2.0',
        providerVersionConstraint: '>= 5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._managementApplianceId = config.managementApplianceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_instance_id - computed: true, optional: false, required: false
  public get computeInstanceId() {
    return this.getStringAttribute('compute_instance_id');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataOciOcvpManagementApplianceConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataOciOcvpManagementApplianceConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
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

  // heartbeat_connection_states - computed: true, optional: false, required: false
  private _heartbeatConnectionStates = new DataOciOcvpManagementApplianceHeartbeatConnectionStatesList(this, "heartbeat_connection_states", false);
  public get heartbeatConnectionStates() {
    return this._heartbeatConnectionStates;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // management_agent_id - computed: true, optional: false, required: false
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }

  // management_appliance_id - computed: false, optional: false, required: true
  private _managementApplianceId?: string; 
  public get managementApplianceId() {
    return this.getStringAttribute('management_appliance_id');
  }
  public set managementApplianceId(value: string) {
    this._managementApplianceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementApplianceIdInput() {
    return this._managementApplianceId;
  }

  // public_ssh_keys - computed: true, optional: false, required: false
  public get publicSshKeys() {
    return this.getStringAttribute('public_ssh_keys');
  }

  // sddc_id - computed: true, optional: false, required: false
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
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

  // time_configuration_updated - computed: true, optional: false, required: false
  public get timeConfigurationUpdated() {
    return this.getStringAttribute('time_configuration_updated');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_heartbeat - computed: true, optional: false, required: false
  public get timeLastHeartbeat() {
    return this.getStringAttribute('time_last_heartbeat');
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
      management_appliance_id: cdktf.stringToTerraform(this._managementApplianceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      management_appliance_id: {
        value: cdktf.stringToHclTerraform(this._managementApplianceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
