// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeAuditProfileManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#change_retention_trigger DataSafeAuditProfileManagement#change_retention_trigger}
  */
  readonly changeRetentionTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#compartment_id DataSafeAuditProfileManagement#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#defined_tags DataSafeAuditProfileManagement#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#description DataSafeAuditProfileManagement#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#display_name DataSafeAuditProfileManagement#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#freeform_tags DataSafeAuditProfileManagement#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#id DataSafeAuditProfileManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#is_override_global_retention_setting DataSafeAuditProfileManagement#is_override_global_retention_setting}
  */
  readonly isOverrideGlobalRetentionSetting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#is_paid_usage_enabled DataSafeAuditProfileManagement#is_paid_usage_enabled}
  */
  readonly isPaidUsageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#offline_months DataSafeAuditProfileManagement#offline_months}
  */
  readonly offlineMonths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#online_months DataSafeAuditProfileManagement#online_months}
  */
  readonly onlineMonths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#target_id DataSafeAuditProfileManagement#target_id}
  */
  readonly targetId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#timeouts DataSafeAuditProfileManagement#timeouts}
  */
  readonly timeouts?: DataSafeAuditProfileManagementTimeouts;
}
export interface DataSafeAuditProfileManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#create DataSafeAuditProfileManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#delete DataSafeAuditProfileManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#update DataSafeAuditProfileManagement#update}
  */
  readonly update?: string;
}

export function dataSafeAuditProfileManagementTimeoutsToTerraform(struct?: DataSafeAuditProfileManagementTimeouts | cdktf.IResolvable): any {
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


export function dataSafeAuditProfileManagementTimeoutsToHclTerraform(struct?: DataSafeAuditProfileManagementTimeouts | cdktf.IResolvable): any {
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

export class DataSafeAuditProfileManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeAuditProfileManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeAuditProfileManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management oci_data_safe_audit_profile_management}
*/
export class DataSafeAuditProfileManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_profile_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeAuditProfileManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeAuditProfileManagement to import
  * @param importFromId The id of the existing DataSafeAuditProfileManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeAuditProfileManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_audit_profile_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/data_safe_audit_profile_management oci_data_safe_audit_profile_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeAuditProfileManagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSafeAuditProfileManagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_profile_management',
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
    this._changeRetentionTrigger = config.changeRetentionTrigger;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isOverrideGlobalRetentionSetting = config.isOverrideGlobalRetentionSetting;
    this._isPaidUsageEnabled = config.isPaidUsageEnabled;
    this._offlineMonths = config.offlineMonths;
    this._onlineMonths = config.onlineMonths;
    this._targetId = config.targetId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_collected_volume - computed: true, optional: false, required: false
  public get auditCollectedVolume() {
    return this.getStringAttribute('audit_collected_volume');
  }

  // change_retention_trigger - computed: false, optional: true, required: false
  private _changeRetentionTrigger?: boolean | cdktf.IResolvable; 
  public get changeRetentionTrigger() {
    return this.getBooleanAttribute('change_retention_trigger');
  }
  public set changeRetentionTrigger(value: boolean | cdktf.IResolvable) {
    this._changeRetentionTrigger = value;
  }
  public resetChangeRetentionTrigger() {
    this._changeRetentionTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeRetentionTriggerInput() {
    return this._changeRetentionTrigger;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // is_override_global_retention_setting - computed: false, optional: true, required: false
  private _isOverrideGlobalRetentionSetting?: boolean | cdktf.IResolvable; 
  public get isOverrideGlobalRetentionSetting() {
    return this.getBooleanAttribute('is_override_global_retention_setting');
  }
  public set isOverrideGlobalRetentionSetting(value: boolean | cdktf.IResolvable) {
    this._isOverrideGlobalRetentionSetting = value;
  }
  public resetIsOverrideGlobalRetentionSetting() {
    this._isOverrideGlobalRetentionSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOverrideGlobalRetentionSettingInput() {
    return this._isOverrideGlobalRetentionSetting;
  }

  // is_paid_usage_enabled - computed: false, optional: true, required: false
  private _isPaidUsageEnabled?: boolean | cdktf.IResolvable; 
  public get isPaidUsageEnabled() {
    return this.getBooleanAttribute('is_paid_usage_enabled');
  }
  public set isPaidUsageEnabled(value: boolean | cdktf.IResolvable) {
    this._isPaidUsageEnabled = value;
  }
  public resetIsPaidUsageEnabled() {
    this._isPaidUsageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPaidUsageEnabledInput() {
    return this._isPaidUsageEnabled;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // offline_months - computed: false, optional: true, required: false
  private _offlineMonths?: number; 
  public get offlineMonths() {
    return this.getNumberAttribute('offline_months');
  }
  public set offlineMonths(value: number) {
    this._offlineMonths = value;
  }
  public resetOfflineMonths() {
    this._offlineMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineMonthsInput() {
    return this._offlineMonths;
  }

  // online_months - computed: false, optional: true, required: false
  private _onlineMonths?: number; 
  public get onlineMonths() {
    return this.getNumberAttribute('online_months');
  }
  public set onlineMonths(value: number) {
    this._onlineMonths = value;
  }
  public resetOnlineMonths() {
    this._onlineMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineMonthsInput() {
    return this._onlineMonths;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
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
  private _timeouts = new DataSafeAuditProfileManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeAuditProfileManagementTimeouts) {
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
      change_retention_trigger: cdktf.booleanToTerraform(this._changeRetentionTrigger),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_override_global_retention_setting: cdktf.booleanToTerraform(this._isOverrideGlobalRetentionSetting),
      is_paid_usage_enabled: cdktf.booleanToTerraform(this._isPaidUsageEnabled),
      offline_months: cdktf.numberToTerraform(this._offlineMonths),
      online_months: cdktf.numberToTerraform(this._onlineMonths),
      target_id: cdktf.stringToTerraform(this._targetId),
      timeouts: dataSafeAuditProfileManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_retention_trigger: {
        value: cdktf.booleanToHclTerraform(this._changeRetentionTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      is_override_global_retention_setting: {
        value: cdktf.booleanToHclTerraform(this._isOverrideGlobalRetentionSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_paid_usage_enabled: {
        value: cdktf.booleanToHclTerraform(this._isPaidUsageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      offline_months: {
        value: cdktf.numberToHclTerraform(this._offlineMonths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      online_months: {
        value: cdktf.numberToHclTerraform(this._onlineMonths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSafeAuditProfileManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeAuditProfileManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
