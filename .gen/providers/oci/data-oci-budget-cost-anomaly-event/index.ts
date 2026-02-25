// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBudgetCostAnomalyEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event#cost_anomaly_event_id DataOciBudgetCostAnomalyEvent#cost_anomaly_event_id}
  */
  readonly costAnomalyEventId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event oci_budget_cost_anomaly_event}
*/
export class DataOciBudgetCostAnomalyEvent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_budget_cost_anomaly_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBudgetCostAnomalyEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBudgetCostAnomalyEvent to import
  * @param importFromId The id of the existing DataOciBudgetCostAnomalyEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBudgetCostAnomalyEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_budget_cost_anomaly_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event oci_budget_cost_anomaly_event} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBudgetCostAnomalyEventConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBudgetCostAnomalyEventConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_budget_cost_anomaly_event',
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
    this._costAnomalyEventId = config.costAnomalyEventId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cost_anomaly_event_id - computed: false, optional: false, required: true
  private _costAnomalyEventId?: string; 
  public get costAnomalyEventId() {
    return this.getStringAttribute('cost_anomaly_event_id');
  }
  public set costAnomalyEventId(value: string) {
    this._costAnomalyEventId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAnomalyEventIdInput() {
    return this._costAnomalyEventId;
  }

  // cost_anomaly_name - computed: true, optional: false, required: false
  public get costAnomalyName() {
    return this.getStringAttribute('cost_anomaly_name');
  }

  // cost_impact - computed: true, optional: false, required: false
  public get costImpact() {
    return this.getNumberAttribute('cost_impact');
  }

  // cost_monitor_id - computed: true, optional: false, required: false
  public get costMonitorId() {
    return this.getStringAttribute('cost_monitor_id');
  }

  // cost_monitor_name - computed: true, optional: false, required: false
  public get costMonitorName() {
    return this.getStringAttribute('cost_monitor_name');
  }

  // cost_monitor_type - computed: true, optional: false, required: false
  public get costMonitorType() {
    return this.getStringAttribute('cost_monitor_type');
  }

  // cost_variance_percentage - computed: true, optional: false, required: false
  public get costVariancePercentage() {
    return this.getNumberAttribute('cost_variance_percentage');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // feedback_response - computed: true, optional: false, required: false
  public get feedbackResponse() {
    return this.getStringAttribute('feedback_response');
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

  // root_cause_detail - computed: true, optional: false, required: false
  public get rootCauseDetail() {
    return this.getStringAttribute('root_cause_detail');
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

  // time_anomaly_event_date - computed: true, optional: false, required: false
  public get timeAnomalyEventDate() {
    return this.getStringAttribute('time_anomaly_event_date');
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
      cost_anomaly_event_id: cdktf.stringToTerraform(this._costAnomalyEventId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cost_anomaly_event_id: {
        value: cdktf.stringToHclTerraform(this._costAnomalyEventId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
