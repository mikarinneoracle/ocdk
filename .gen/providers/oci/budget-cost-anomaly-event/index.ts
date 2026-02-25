// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetCostAnomalyEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event#cost_anomaly_event_id BudgetCostAnomalyEvent#cost_anomaly_event_id}
  */
  readonly costAnomalyEventId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event#defined_tags BudgetCostAnomalyEvent#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event#feedback_response BudgetCostAnomalyEvent#feedback_response}
  */
  readonly feedbackResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event#freeform_tags BudgetCostAnomalyEvent#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event#id BudgetCostAnomalyEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event#timeouts BudgetCostAnomalyEvent#timeouts}
  */
  readonly timeouts?: BudgetCostAnomalyEventTimeouts;
}
export interface BudgetCostAnomalyEventTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event#create BudgetCostAnomalyEvent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event#delete BudgetCostAnomalyEvent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event#update BudgetCostAnomalyEvent#update}
  */
  readonly update?: string;
}

export function budgetCostAnomalyEventTimeoutsToTerraform(struct?: BudgetCostAnomalyEventTimeouts | cdktf.IResolvable): any {
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


export function budgetCostAnomalyEventTimeoutsToHclTerraform(struct?: BudgetCostAnomalyEventTimeouts | cdktf.IResolvable): any {
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

export class BudgetCostAnomalyEventTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BudgetCostAnomalyEventTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BudgetCostAnomalyEventTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event oci_budget_cost_anomaly_event}
*/
export class BudgetCostAnomalyEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_budget_cost_anomaly_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BudgetCostAnomalyEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BudgetCostAnomalyEvent to import
  * @param importFromId The id of the existing BudgetCostAnomalyEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BudgetCostAnomalyEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_budget_cost_anomaly_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/budget_cost_anomaly_event oci_budget_cost_anomaly_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetCostAnomalyEventConfig
  */
  public constructor(scope: Construct, id: string, config: BudgetCostAnomalyEventConfig) {
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
    this._definedTags = config.definedTags;
    this._feedbackResponse = config.feedbackResponse;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
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

  // feedback_response - computed: true, optional: true, required: false
  private _feedbackResponse?: string; 
  public get feedbackResponse() {
    return this.getStringAttribute('feedback_response');
  }
  public set feedbackResponse(value: string) {
    this._feedbackResponse = value;
  }
  public resetFeedbackResponse() {
    this._feedbackResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedbackResponseInput() {
    return this._feedbackResponse;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BudgetCostAnomalyEventTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BudgetCostAnomalyEventTimeouts) {
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
      cost_anomaly_event_id: cdktf.stringToTerraform(this._costAnomalyEventId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      feedback_response: cdktf.stringToTerraform(this._feedbackResponse),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      timeouts: budgetCostAnomalyEventTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      feedback_response: {
        value: cdktf.stringToHclTerraform(this._feedbackResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      timeouts: {
        value: budgetCostAnomalyEventTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BudgetCostAnomalyEventTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
