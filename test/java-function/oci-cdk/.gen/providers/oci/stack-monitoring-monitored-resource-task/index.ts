// https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackMonitoringMonitoredResourceTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}
  */
  readonly name?: string;
  /**
  * task_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#task_details StackMonitoringMonitoredResourceTask#task_details}
  */
  readonly taskDetails: StackMonitoringMonitoredResourceTaskTaskDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#timeouts StackMonitoringMonitoredResourceTask#timeouts}
  */
  readonly timeouts?: StackMonitoringMonitoredResourceTaskTimeouts;
}
export interface StackMonitoringMonitoredResourceTaskTaskDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metric_collection_interval StackMonitoringMonitoredResourceTask#availability_proxy_metric_collection_interval}
  */
  readonly availabilityProxyMetricCollectionInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metrics StackMonitoringMonitoredResourceTask#availability_proxy_metrics}
  */
  readonly availabilityProxyMetrics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#console_path_prefix StackMonitoringMonitoredResourceTask#console_path_prefix}
  */
  readonly consolePathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#external_id_mapping StackMonitoringMonitoredResourceTask#external_id_mapping}
  */
  readonly externalIdMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#lifecycle_status_mappings_for_up_status StackMonitoringMonitoredResourceTask#lifecycle_status_mappings_for_up_status}
  */
  readonly lifecycleStatusMappingsForUpStatus?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#namespace StackMonitoringMonitoredResourceTask#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#resource_group StackMonitoringMonitoredResourceTask#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_filter StackMonitoringMonitoredResourceTask#resource_name_filter}
  */
  readonly resourceNameFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_mapping StackMonitoringMonitoredResourceTask#resource_name_mapping}
  */
  readonly resourceNameMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_filter StackMonitoringMonitoredResourceTask#resource_type_filter}
  */
  readonly resourceTypeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_mapping StackMonitoringMonitoredResourceTask#resource_type_mapping}
  */
  readonly resourceTypeMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#service_base_url StackMonitoringMonitoredResourceTask#service_base_url}
  */
  readonly serviceBaseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#should_use_metrics_flow_for_status StackMonitoringMonitoredResourceTask#should_use_metrics_flow_for_status}
  */
  readonly shouldUseMetricsFlowForStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#source StackMonitoringMonitoredResourceTask#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#type StackMonitoringMonitoredResourceTask#type}
  */
  readonly type: string;
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference | StackMonitoringMonitoredResourceTaskTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_proxy_metric_collection_interval: cdktf.numberToTerraform(struct!.availabilityProxyMetricCollectionInterval),
    availability_proxy_metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityProxyMetrics),
    console_path_prefix: cdktf.stringToTerraform(struct!.consolePathPrefix),
    external_id_mapping: cdktf.stringToTerraform(struct!.externalIdMapping),
    lifecycle_status_mappings_for_up_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleStatusMappingsForUpStatus),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_name_filter: cdktf.stringToTerraform(struct!.resourceNameFilter),
    resource_name_mapping: cdktf.stringToTerraform(struct!.resourceNameMapping),
    resource_type_filter: cdktf.stringToTerraform(struct!.resourceTypeFilter),
    resource_type_mapping: cdktf.stringToTerraform(struct!.resourceTypeMapping),
    service_base_url: cdktf.stringToTerraform(struct!.serviceBaseUrl),
    should_use_metrics_flow_for_status: cdktf.booleanToTerraform(struct!.shouldUseMetricsFlowForStatus),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference | StackMonitoringMonitoredResourceTaskTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_proxy_metric_collection_interval: {
      value: cdktf.numberToHclTerraform(struct!.availabilityProxyMetricCollectionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    availability_proxy_metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityProxyMetrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    console_path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.consolePathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id_mapping: {
      value: cdktf.stringToHclTerraform(struct!.externalIdMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_status_mappings_for_up_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleStatusMappingsForUpStatus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name_filter: {
      value: cdktf.stringToHclTerraform(struct!.resourceNameFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name_mapping: {
      value: cdktf.stringToHclTerraform(struct!.resourceNameMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type_filter: {
      value: cdktf.stringToHclTerraform(struct!.resourceTypeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type_mapping: {
      value: cdktf.stringToHclTerraform(struct!.resourceTypeMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_base_url: {
      value: cdktf.stringToHclTerraform(struct!.serviceBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_use_metrics_flow_for_status: {
      value: cdktf.booleanToHclTerraform(struct!.shouldUseMetricsFlowForStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityProxyMetricCollectionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityProxyMetricCollectionInterval = this._availabilityProxyMetricCollectionInterval;
    }
    if (this._availabilityProxyMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityProxyMetrics = this._availabilityProxyMetrics;
    }
    if (this._consolePathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolePathPrefix = this._consolePathPrefix;
    }
    if (this._externalIdMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIdMapping = this._externalIdMapping;
    }
    if (this._lifecycleStatusMappingsForUpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleStatusMappingsForUpStatus = this._lifecycleStatusMappingsForUpStatus;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._resourceNameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNameFilter = this._resourceNameFilter;
    }
    if (this._resourceNameMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNameMapping = this._resourceNameMapping;
    }
    if (this._resourceTypeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeFilter = this._resourceTypeFilter;
    }
    if (this._resourceTypeMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeMapping = this._resourceTypeMapping;
    }
    if (this._serviceBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceBaseUrl = this._serviceBaseUrl;
    }
    if (this._shouldUseMetricsFlowForStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldUseMetricsFlowForStatus = this._shouldUseMetricsFlowForStatus;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityProxyMetricCollectionInterval = undefined;
      this._availabilityProxyMetrics = undefined;
      this._consolePathPrefix = undefined;
      this._externalIdMapping = undefined;
      this._lifecycleStatusMappingsForUpStatus = undefined;
      this._namespace = undefined;
      this._resourceGroup = undefined;
      this._resourceNameFilter = undefined;
      this._resourceNameMapping = undefined;
      this._resourceTypeFilter = undefined;
      this._resourceTypeMapping = undefined;
      this._serviceBaseUrl = undefined;
      this._shouldUseMetricsFlowForStatus = undefined;
      this._source = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityProxyMetricCollectionInterval = value.availabilityProxyMetricCollectionInterval;
      this._availabilityProxyMetrics = value.availabilityProxyMetrics;
      this._consolePathPrefix = value.consolePathPrefix;
      this._externalIdMapping = value.externalIdMapping;
      this._lifecycleStatusMappingsForUpStatus = value.lifecycleStatusMappingsForUpStatus;
      this._namespace = value.namespace;
      this._resourceGroup = value.resourceGroup;
      this._resourceNameFilter = value.resourceNameFilter;
      this._resourceNameMapping = value.resourceNameMapping;
      this._resourceTypeFilter = value.resourceTypeFilter;
      this._resourceTypeMapping = value.resourceTypeMapping;
      this._serviceBaseUrl = value.serviceBaseUrl;
      this._shouldUseMetricsFlowForStatus = value.shouldUseMetricsFlowForStatus;
      this._source = value.source;
      this._type = value.type;
    }
  }

  // availability_proxy_metric_collection_interval - computed: true, optional: true, required: false
  private _availabilityProxyMetricCollectionInterval?: number; 
  public get availabilityProxyMetricCollectionInterval() {
    return this.getNumberAttribute('availability_proxy_metric_collection_interval');
  }
  public set availabilityProxyMetricCollectionInterval(value: number) {
    this._availabilityProxyMetricCollectionInterval = value;
  }
  public resetAvailabilityProxyMetricCollectionInterval() {
    this._availabilityProxyMetricCollectionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityProxyMetricCollectionIntervalInput() {
    return this._availabilityProxyMetricCollectionInterval;
  }

  // availability_proxy_metrics - computed: true, optional: true, required: false
  private _availabilityProxyMetrics?: string[]; 
  public get availabilityProxyMetrics() {
    return this.getListAttribute('availability_proxy_metrics');
  }
  public set availabilityProxyMetrics(value: string[]) {
    this._availabilityProxyMetrics = value;
  }
  public resetAvailabilityProxyMetrics() {
    this._availabilityProxyMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityProxyMetricsInput() {
    return this._availabilityProxyMetrics;
  }

  // console_path_prefix - computed: false, optional: true, required: false
  private _consolePathPrefix?: string; 
  public get consolePathPrefix() {
    return this.getStringAttribute('console_path_prefix');
  }
  public set consolePathPrefix(value: string) {
    this._consolePathPrefix = value;
  }
  public resetConsolePathPrefix() {
    this._consolePathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolePathPrefixInput() {
    return this._consolePathPrefix;
  }

  // external_id_mapping - computed: false, optional: true, required: false
  private _externalIdMapping?: string; 
  public get externalIdMapping() {
    return this.getStringAttribute('external_id_mapping');
  }
  public set externalIdMapping(value: string) {
    this._externalIdMapping = value;
  }
  public resetExternalIdMapping() {
    this._externalIdMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdMappingInput() {
    return this._externalIdMapping;
  }

  // lifecycle_status_mappings_for_up_status - computed: false, optional: true, required: false
  private _lifecycleStatusMappingsForUpStatus?: string[]; 
  public get lifecycleStatusMappingsForUpStatus() {
    return this.getListAttribute('lifecycle_status_mappings_for_up_status');
  }
  public set lifecycleStatusMappingsForUpStatus(value: string[]) {
    this._lifecycleStatusMappingsForUpStatus = value;
  }
  public resetLifecycleStatusMappingsForUpStatus() {
    this._lifecycleStatusMappingsForUpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStatusMappingsForUpStatusInput() {
    return this._lifecycleStatusMappingsForUpStatus;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_name_filter - computed: false, optional: true, required: false
  private _resourceNameFilter?: string; 
  public get resourceNameFilter() {
    return this.getStringAttribute('resource_name_filter');
  }
  public set resourceNameFilter(value: string) {
    this._resourceNameFilter = value;
  }
  public resetResourceNameFilter() {
    this._resourceNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameFilterInput() {
    return this._resourceNameFilter;
  }

  // resource_name_mapping - computed: false, optional: true, required: false
  private _resourceNameMapping?: string; 
  public get resourceNameMapping() {
    return this.getStringAttribute('resource_name_mapping');
  }
  public set resourceNameMapping(value: string) {
    this._resourceNameMapping = value;
  }
  public resetResourceNameMapping() {
    this._resourceNameMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameMappingInput() {
    return this._resourceNameMapping;
  }

  // resource_type_filter - computed: false, optional: true, required: false
  private _resourceTypeFilter?: string; 
  public get resourceTypeFilter() {
    return this.getStringAttribute('resource_type_filter');
  }
  public set resourceTypeFilter(value: string) {
    this._resourceTypeFilter = value;
  }
  public resetResourceTypeFilter() {
    this._resourceTypeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeFilterInput() {
    return this._resourceTypeFilter;
  }

  // resource_type_mapping - computed: false, optional: true, required: false
  private _resourceTypeMapping?: string; 
  public get resourceTypeMapping() {
    return this.getStringAttribute('resource_type_mapping');
  }
  public set resourceTypeMapping(value: string) {
    this._resourceTypeMapping = value;
  }
  public resetResourceTypeMapping() {
    this._resourceTypeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeMappingInput() {
    return this._resourceTypeMapping;
  }

  // service_base_url - computed: false, optional: true, required: false
  private _serviceBaseUrl?: string; 
  public get serviceBaseUrl() {
    return this.getStringAttribute('service_base_url');
  }
  public set serviceBaseUrl(value: string) {
    this._serviceBaseUrl = value;
  }
  public resetServiceBaseUrl() {
    this._serviceBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBaseUrlInput() {
    return this._serviceBaseUrl;
  }

  // should_use_metrics_flow_for_status - computed: true, optional: true, required: false
  private _shouldUseMetricsFlowForStatus?: boolean | cdktf.IResolvable; 
  public get shouldUseMetricsFlowForStatus() {
    return this.getBooleanAttribute('should_use_metrics_flow_for_status');
  }
  public set shouldUseMetricsFlowForStatus(value: boolean | cdktf.IResolvable) {
    this._shouldUseMetricsFlowForStatus = value;
  }
  public resetShouldUseMetricsFlowForStatus() {
    this._shouldUseMetricsFlowForStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldUseMetricsFlowForStatusInput() {
    return this._shouldUseMetricsFlowForStatus;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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
}
export interface StackMonitoringMonitoredResourceTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#create StackMonitoringMonitoredResourceTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#delete StackMonitoringMonitoredResourceTask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#update StackMonitoringMonitoredResourceTask#update}
  */
  readonly update?: string;
}

export function stackMonitoringMonitoredResourceTaskTimeoutsToTerraform(struct?: StackMonitoringMonitoredResourceTaskTimeouts | cdktf.IResolvable): any {
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


export function stackMonitoringMonitoredResourceTaskTimeoutsToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTimeouts | cdktf.IResolvable): any {
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

export class StackMonitoringMonitoredResourceTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTaskTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task}
*/
export class StackMonitoringMonitoredResourceTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitored_resource_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackMonitoringMonitoredResourceTask to import
  * @param importFromId The id of the existing StackMonitoringMonitoredResourceTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackMonitoringMonitoredResourceTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitored_resource_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackMonitoringMonitoredResourceTaskConfig
  */
  public constructor(scope: Construct, id: string, config: StackMonitoringMonitoredResourceTaskConfig) {
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._name = config.name;
    this._taskDetails.internalValue = config.taskDetails;
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

  // name - computed: true, optional: true, required: false
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
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

  // task_details - computed: false, optional: false, required: true
  private _taskDetails = new StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference(this, "task_details");
  public get taskDetails() {
    return this._taskDetails;
  }
  public putTaskDetails(value: StackMonitoringMonitoredResourceTaskTaskDetails) {
    this._taskDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDetailsInput() {
    return this._taskDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackMonitoringMonitoredResourceTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackMonitoringMonitoredResourceTaskTimeouts) {
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
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      task_details: stackMonitoringMonitoredResourceTaskTaskDetailsToTerraform(this._taskDetails.internalValue),
      timeouts: stackMonitoringMonitoredResourceTaskTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_details: {
        value: stackMonitoringMonitoredResourceTaskTaskDetailsToHclTerraform(this._taskDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsList",
      },
      timeouts: {
        value: stackMonitoringMonitoredResourceTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackMonitoringMonitoredResourceTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
