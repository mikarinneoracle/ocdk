// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStackMonitoringMonitoredResourceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_type#monitored_resource_type_id DataOciStackMonitoringMonitoredResourceType#monitored_resource_type_id}
  */
  readonly monitoredResourceTypeId: string;
}
export interface DataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySets {
}

export function dataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getListAttribute('properties');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypeMetadata {
}

export function dataOciStackMonitoringMonitoredResourceTypeMetadataToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypeMetadataToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypeMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypeMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypeMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_properties - computed: true, optional: false, required: false
  public get agentProperties() {
    return this.getListAttribute('agent_properties');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // required_properties - computed: true, optional: false, required: false
  public get requiredProperties() {
    return this.getListAttribute('required_properties');
  }

  // unique_property_sets - computed: true, optional: false, required: false
  private _uniquePropertySets = new DataOciStackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList(this, "unique_property_sets", false);
  public get uniquePropertySets() {
    return this._uniquePropertySets;
  }

  // valid_properties_for_create - computed: true, optional: false, required: false
  public get validPropertiesForCreate() {
    return this.getListAttribute('valid_properties_for_create');
  }

  // valid_properties_for_update - computed: true, optional: false, required: false
  public get validPropertiesForUpdate() {
    return this.getListAttribute('valid_properties_for_update');
  }

  // valid_property_values - computed: true, optional: false, required: false
  private _validPropertyValues = new cdktf.StringMap(this, "valid_property_values");
  public get validPropertyValues() {
    return this._validPropertyValues;
  }
}

export class DataOciStackMonitoringMonitoredResourceTypeMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypeMetadataOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypeMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_type oci_stack_monitoring_monitored_resource_type}
*/
export class DataOciStackMonitoringMonitoredResourceType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitored_resource_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceType to import
  * @param importFromId The id of the existing DataOciStackMonitoringMonitoredResourceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitored_resource_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_type oci_stack_monitoring_monitored_resource_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStackMonitoringMonitoredResourceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStackMonitoringMonitoredResourceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitored_resource_type',
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
    this._monitoredResourceTypeId = config.monitoredResourceTypeId;
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciStackMonitoringMonitoredResourceTypeMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // metric_namespace - computed: true, optional: false, required: false
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }

  // monitored_resource_type_id - computed: false, optional: false, required: true
  private _monitoredResourceTypeId?: string; 
  public get monitoredResourceTypeId() {
    return this.getStringAttribute('monitored_resource_type_id');
  }
  public set monitoredResourceTypeId(value: string) {
    this._monitoredResourceTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredResourceTypeIdInput() {
    return this._monitoredResourceTypeId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_category - computed: true, optional: false, required: false
  public get resourceCategory() {
    return this.getStringAttribute('resource_category');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
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
      monitored_resource_type_id: cdktf.stringToTerraform(this._monitoredResourceTypeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      monitored_resource_type_id: {
        value: cdktf.stringToHclTerraform(this._monitoredResourceTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
