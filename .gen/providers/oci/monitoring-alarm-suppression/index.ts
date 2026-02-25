// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringAlarmSuppressionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}
  */
  readonly dimensions: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}
  */
  readonly timeSuppressFrom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}
  */
  readonly timeSuppressUntil: string;
  /**
  * alarm_suppression_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#alarm_suppression_target MonitoringAlarmSuppressionA#alarm_suppression_target}
  */
  readonly alarmSuppressionTarget: MonitoringAlarmSuppressionAlarmSuppressionTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#timeouts MonitoringAlarmSuppressionA#timeouts}
  */
  readonly timeouts?: MonitoringAlarmSuppressionTimeouts;
}
export interface MonitoringAlarmSuppressionAlarmSuppressionTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#alarm_id MonitoringAlarmSuppressionA#alarm_id}
  */
  readonly alarmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#target_type MonitoringAlarmSuppressionA#target_type}
  */
  readonly targetType: string;
}

export function monitoringAlarmSuppressionAlarmSuppressionTargetToTerraform(struct?: MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference | MonitoringAlarmSuppressionAlarmSuppressionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_id: cdktf.stringToTerraform(struct!.alarmId),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function monitoringAlarmSuppressionAlarmSuppressionTargetToHclTerraform(struct?: MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference | MonitoringAlarmSuppressionAlarmSuppressionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_id: {
      value: cdktf.stringToHclTerraform(struct!.alarmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringAlarmSuppressionAlarmSuppressionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmId = this._alarmId;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringAlarmSuppressionAlarmSuppressionTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarmId = undefined;
      this._targetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarmId = value.alarmId;
      this._targetType = value.targetType;
    }
  }

  // alarm_id - computed: false, optional: false, required: true
  private _alarmId?: string; 
  public get alarmId() {
    return this.getStringAttribute('alarm_id');
  }
  public set alarmId(value: string) {
    this._alarmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmIdInput() {
    return this._alarmId;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface MonitoringAlarmSuppressionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#create MonitoringAlarmSuppressionA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#delete MonitoringAlarmSuppressionA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#update MonitoringAlarmSuppressionA#update}
  */
  readonly update?: string;
}

export function monitoringAlarmSuppressionTimeoutsToTerraform(struct?: MonitoringAlarmSuppressionTimeouts | cdktf.IResolvable): any {
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


export function monitoringAlarmSuppressionTimeoutsToHclTerraform(struct?: MonitoringAlarmSuppressionTimeouts | cdktf.IResolvable): any {
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

export class MonitoringAlarmSuppressionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitoringAlarmSuppressionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitoringAlarmSuppressionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression oci_monitoring_alarm_suppression}
*/
export class MonitoringAlarmSuppressionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_monitoring_alarm_suppression";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitoringAlarmSuppressionA to import
  * @param importFromId The id of the existing MonitoringAlarmSuppressionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitoringAlarmSuppressionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_monitoring_alarm_suppression", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/monitoring_alarm_suppression oci_monitoring_alarm_suppression} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringAlarmSuppressionAConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringAlarmSuppressionAConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_monitoring_alarm_suppression',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '5.47.0',
        providerVersionConstraint: '>= 5.0.0, < 6.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._dimensions = config.dimensions;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._timeSuppressFrom = config.timeSuppressFrom;
    this._timeSuppressUntil = config.timeSuppressUntil;
    this._alarmSuppressionTarget.internalValue = config.alarmSuppressionTarget;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dimensions - computed: false, optional: false, required: true
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_suppress_from - computed: false, optional: false, required: true
  private _timeSuppressFrom?: string; 
  public get timeSuppressFrom() {
    return this.getStringAttribute('time_suppress_from');
  }
  public set timeSuppressFrom(value: string) {
    this._timeSuppressFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSuppressFromInput() {
    return this._timeSuppressFrom;
  }

  // time_suppress_until - computed: false, optional: false, required: true
  private _timeSuppressUntil?: string; 
  public get timeSuppressUntil() {
    return this.getStringAttribute('time_suppress_until');
  }
  public set timeSuppressUntil(value: string) {
    this._timeSuppressUntil = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSuppressUntilInput() {
    return this._timeSuppressUntil;
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // alarm_suppression_target - computed: false, optional: false, required: true
  private _alarmSuppressionTarget = new MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference(this, "alarm_suppression_target");
  public get alarmSuppressionTarget() {
    return this._alarmSuppressionTarget;
  }
  public putAlarmSuppressionTarget(value: MonitoringAlarmSuppressionAlarmSuppressionTarget) {
    this._alarmSuppressionTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmSuppressionTargetInput() {
    return this._alarmSuppressionTarget.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitoringAlarmSuppressionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitoringAlarmSuppressionTimeouts) {
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
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(this._dimensions),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      time_suppress_from: cdktf.stringToTerraform(this._timeSuppressFrom),
      time_suppress_until: cdktf.stringToTerraform(this._timeSuppressUntil),
      alarm_suppression_target: monitoringAlarmSuppressionAlarmSuppressionTargetToTerraform(this._alarmSuppressionTarget.internalValue),
      timeouts: monitoringAlarmSuppressionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimensions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dimensions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      time_suppress_from: {
        value: cdktf.stringToHclTerraform(this._timeSuppressFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_suppress_until: {
        value: cdktf.stringToHclTerraform(this._timeSuppressUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_suppression_target: {
        value: monitoringAlarmSuppressionAlarmSuppressionTargetToHclTerraform(this._alarmSuppressionTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitoringAlarmSuppressionAlarmSuppressionTargetList",
      },
      timeouts: {
        value: monitoringAlarmSuppressionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitoringAlarmSuppressionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
