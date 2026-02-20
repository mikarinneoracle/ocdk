// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStackMonitoringMonitoredResourceTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_task#monitored_resource_task_id DataOciStackMonitoringMonitoredResourceTask#monitored_resource_task_id}
  */
  readonly monitoredResourceTaskId: string;
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetails {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetails | undefined) {
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

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task}
*/
export class DataOciStackMonitoringMonitoredResourceTask extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitored_resource_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceTask to import
  * @param importFromId The id of the existing DataOciStackMonitoringMonitoredResourceTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitored_resource_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStackMonitoringMonitoredResourceTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStackMonitoringMonitoredResourceTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitored_resource_task',
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
    this._monitoredResourceTaskId = config.monitoredResourceTaskId;
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitored_resource_task_id - computed: false, optional: false, required: true
  private _monitoredResourceTaskId?: string; 
  public get monitoredResourceTaskId() {
    return this.getStringAttribute('monitored_resource_task_id');
  }
  public set monitoredResourceTaskId(value: string) {
    this._monitoredResourceTaskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredResourceTaskIdInput() {
    return this._monitoredResourceTaskId;
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
  private _taskDetails = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList(this, "task_details", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      monitored_resource_task_id: cdktf.stringToTerraform(this._monitoredResourceTaskId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      monitored_resource_task_id: {
        value: cdktf.stringToHclTerraform(this._monitoredResourceTaskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
