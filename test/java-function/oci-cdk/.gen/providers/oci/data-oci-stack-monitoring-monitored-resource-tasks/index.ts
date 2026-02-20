// https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStackMonitoringMonitoredResourceTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#compartment_id DataOciStackMonitoringMonitoredResourceTasks#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#id DataOciStackMonitoringMonitoredResourceTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#status DataOciStackMonitoringMonitoredResourceTasks#status}
  */
  readonly status?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#filter DataOciStackMonitoringMonitoredResourceTasks#filter}
  */
  readonly filter?: DataOciStackMonitoringMonitoredResourceTasksFilter[] | cdktf.IResolvable;
}
export interface DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails {
}

export function dataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_proxy_metric_collection_interval - computed: true, optional: false, required: false
  public get availabilityProxyMetricCollectionInterval() {
    return this.getNumberAttribute('availability_proxy_metric_collection_interval');
  }

  // availability_proxy_metrics - computed: true, optional: false, required: false
  public get availabilityProxyMetrics() {
    return this.getListAttribute('availability_proxy_metrics');
  }

  // console_path_prefix - computed: true, optional: false, required: false
  public get consolePathPrefix() {
    return this.getStringAttribute('console_path_prefix');
  }

  // external_id_mapping - computed: true, optional: false, required: false
  public get externalIdMapping() {
    return this.getStringAttribute('external_id_mapping');
  }

  // lifecycle_status_mappings_for_up_status - computed: true, optional: false, required: false
  public get lifecycleStatusMappingsForUpStatus() {
    return this.getListAttribute('lifecycle_status_mappings_for_up_status');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // resource_name_filter - computed: true, optional: false, required: false
  public get resourceNameFilter() {
    return this.getStringAttribute('resource_name_filter');
  }

  // resource_name_mapping - computed: true, optional: false, required: false
  public get resourceNameMapping() {
    return this.getStringAttribute('resource_name_mapping');
  }

  // resource_type_filter - computed: true, optional: false, required: false
  public get resourceTypeFilter() {
    return this.getStringAttribute('resource_type_filter');
  }

  // resource_type_mapping - computed: true, optional: false, required: false
  public get resourceTypeMapping() {
    return this.getStringAttribute('resource_type_mapping');
  }

  // service_base_url - computed: true, optional: false, required: false
  public get serviceBaseUrl() {
    return this.getStringAttribute('service_base_url');
  }

  // should_use_metrics_flow_for_status - computed: true, optional: false, required: false
  public get shouldUseMetricsFlowForStatus() {
    return this.getBooleanAttribute('should_use_metrics_flow_for_status');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems {
}

export function dataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems | undefined) {
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // task_details - computed: true, optional: false, required: false
  private _taskDetails = new DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList(this, "task_details", false);
  public get taskDetails() {
    return this._taskDetails;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // work_request_ids - computed: true, optional: false, required: false
  public get workRequestIds() {
    return this.getListAttribute('work_request_ids');
  }
}

export class DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection {
}

export function dataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTasksFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#name DataOciStackMonitoringMonitoredResourceTasks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#regex DataOciStackMonitoringMonitoredResourceTasks#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#values DataOciStackMonitoringMonitoredResourceTasks#values}
  */
  readonly values: string[];
}

export function dataOciStackMonitoringMonitoredResourceTasksFilterToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTasksFilter | cdktf.IResolvable): any {
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


export function dataOciStackMonitoringMonitoredResourceTasksFilterToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTasksFilter | cdktf.IResolvable): any {
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

export class DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTasksFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTasksFilter | cdktf.IResolvable | undefined) {
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

export class DataOciStackMonitoringMonitoredResourceTasksFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciStackMonitoringMonitoredResourceTasksFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks oci_stack_monitoring_monitored_resource_tasks}
*/
export class DataOciStackMonitoringMonitoredResourceTasks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitored_resource_tasks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTasks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceTasks to import
  * @param importFromId The id of the existing DataOciStackMonitoringMonitoredResourceTasks that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceTasks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitored_resource_tasks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_tasks oci_stack_monitoring_monitored_resource_tasks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStackMonitoringMonitoredResourceTasksConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStackMonitoringMonitoredResourceTasksConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitored_resource_tasks',
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
    this._status = config.status;
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

  // monitored_resource_tasks_collection - computed: true, optional: false, required: false
  private _monitoredResourceTasksCollection = new DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList(this, "monitored_resource_tasks_collection", false);
  public get monitoredResourceTasksCollection() {
    return this._monitoredResourceTasksCollection;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciStackMonitoringMonitoredResourceTasksFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciStackMonitoringMonitoredResourceTasksFilter[] | cdktf.IResolvable) {
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
      status: cdktf.stringToTerraform(this._status),
      filter: cdktf.listMapper(dataOciStackMonitoringMonitoredResourceTasksFilterToTerraform, true)(this._filter.internalValue),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciStackMonitoringMonitoredResourceTasksFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciStackMonitoringMonitoredResourceTasksFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
