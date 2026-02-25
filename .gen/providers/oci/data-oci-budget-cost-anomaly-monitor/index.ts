// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBudgetCostAnomalyMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_monitor#cost_anomaly_monitor_id DataOciBudgetCostAnomalyMonitor#cost_anomaly_monitor_id}
  */
  readonly costAnomalyMonitorId: string;
}
export interface DataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMap {
}

export function dataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMapToTerraform(struct?: DataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMapToHclTerraform(struct?: DataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost_alert_subscription_id - computed: true, optional: false, required: false
  public get costAlertSubscriptionId() {
    return this.getStringAttribute('cost_alert_subscription_id');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // threshold_absolute_value - computed: true, optional: false, required: false
  public get thresholdAbsoluteValue() {
    return this.getNumberAttribute('threshold_absolute_value');
  }

  // threshold_relative_percent - computed: true, optional: false, required: false
  public get thresholdRelativePercent() {
    return this.getNumberAttribute('threshold_relative_percent');
  }
}

export class DataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMapList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMapOutputReference {
    return new DataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_monitor oci_budget_cost_anomaly_monitor}
*/
export class DataOciBudgetCostAnomalyMonitor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_budget_cost_anomaly_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBudgetCostAnomalyMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBudgetCostAnomalyMonitor to import
  * @param importFromId The id of the existing DataOciBudgetCostAnomalyMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBudgetCostAnomalyMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_budget_cost_anomaly_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_monitor oci_budget_cost_anomaly_monitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBudgetCostAnomalyMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBudgetCostAnomalyMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_budget_cost_anomaly_monitor',
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
    this._costAnomalyMonitorId = config.costAnomalyMonitorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cost_alert_subscription_map - computed: true, optional: false, required: false
  private _costAlertSubscriptionMap = new DataOciBudgetCostAnomalyMonitorCostAlertSubscriptionMapList(this, "cost_alert_subscription_map", false);
  public get costAlertSubscriptionMap() {
    return this._costAlertSubscriptionMap;
  }

  // cost_anomaly_monitor_id - computed: false, optional: false, required: true
  private _costAnomalyMonitorId?: string; 
  public get costAnomalyMonitorId() {
    return this.getStringAttribute('cost_anomaly_monitor_id');
  }
  public set costAnomalyMonitorId(value: string) {
    this._costAnomalyMonitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAnomalyMonitorIdInput() {
    return this._costAnomalyMonitorId;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // target_resource_filter - computed: true, optional: false, required: false
  public get targetResourceFilter() {
    return this.getStringAttribute('target_resource_filter');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cost_anomaly_monitor_id: cdktf.stringToTerraform(this._costAnomalyMonitorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cost_anomaly_monitor_id: {
        value: cdktf.stringToHclTerraform(this._costAnomalyMonitorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
