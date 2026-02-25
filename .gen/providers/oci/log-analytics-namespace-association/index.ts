// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsNamespaceAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#compartment_id LogAnalyticsNamespaceAssociation#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#entity_id LogAnalyticsNamespaceAssociation#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#id LogAnalyticsNamespaceAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#is_from_republish LogAnalyticsNamespaceAssociation#is_from_republish}
  */
  readonly isFromRepublish?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#log_group_id LogAnalyticsNamespaceAssociation#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#namespace LogAnalyticsNamespaceAssociation#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#source_name LogAnalyticsNamespaceAssociation#source_name}
  */
  readonly sourceName: string;
  /**
  * association_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#association_properties LogAnalyticsNamespaceAssociation#association_properties}
  */
  readonly associationProperties?: LogAnalyticsNamespaceAssociationAssociationProperties[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#timeouts LogAnalyticsNamespaceAssociation#timeouts}
  */
  readonly timeouts?: LogAnalyticsNamespaceAssociationTimeouts;
}
export interface LogAnalyticsNamespaceAssociationAssociationPropertiesPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#id LogAnalyticsNamespaceAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#value LogAnalyticsNamespaceAssociation#value}
  */
  readonly value: string;
}

export function logAnalyticsNamespaceAssociationAssociationPropertiesPatternsToTerraform(struct?: LogAnalyticsNamespaceAssociationAssociationPropertiesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function logAnalyticsNamespaceAssociationAssociationPropertiesPatternsToHclTerraform(struct?: LogAnalyticsNamespaceAssociationAssociationPropertiesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceAssociationAssociationPropertiesPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAnalyticsNamespaceAssociationAssociationPropertiesPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceAssociationAssociationPropertiesPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._value = value.value;
    }
  }

  // effective_level - computed: true, optional: false, required: false
  public get effectiveLevel() {
    return this.getStringAttribute('effective_level');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LogAnalyticsNamespaceAssociationAssociationPropertiesPatternsList extends cdktf.ComplexList {
  public internalValue? : LogAnalyticsNamespaceAssociationAssociationPropertiesPatterns[] | cdktf.IResolvable

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
  public get(index: number): LogAnalyticsNamespaceAssociationAssociationPropertiesPatternsOutputReference {
    return new LogAnalyticsNamespaceAssociationAssociationPropertiesPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAnalyticsNamespaceAssociationAssociationProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#name LogAnalyticsNamespaceAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#value LogAnalyticsNamespaceAssociation#value}
  */
  readonly value?: string;
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#patterns LogAnalyticsNamespaceAssociation#patterns}
  */
  readonly patterns?: LogAnalyticsNamespaceAssociationAssociationPropertiesPatterns[] | cdktf.IResolvable;
}

export function logAnalyticsNamespaceAssociationAssociationPropertiesToTerraform(struct?: LogAnalyticsNamespaceAssociationAssociationProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    patterns: cdktf.listMapper(logAnalyticsNamespaceAssociationAssociationPropertiesPatternsToTerraform, true)(struct!.patterns),
  }
}


export function logAnalyticsNamespaceAssociationAssociationPropertiesToHclTerraform(struct?: LogAnalyticsNamespaceAssociationAssociationProperties | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patterns: {
      value: cdktf.listMapperHcl(logAnalyticsNamespaceAssociationAssociationPropertiesPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "LogAnalyticsNamespaceAssociationAssociationPropertiesPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceAssociationAssociationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAnalyticsNamespaceAssociationAssociationProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceAssociationAssociationProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._patterns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._patterns.internalValue = value.patterns;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new LogAnalyticsNamespaceAssociationAssociationPropertiesPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: LogAnalyticsNamespaceAssociationAssociationPropertiesPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}

export class LogAnalyticsNamespaceAssociationAssociationPropertiesList extends cdktf.ComplexList {
  public internalValue? : LogAnalyticsNamespaceAssociationAssociationProperties[] | cdktf.IResolvable

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
  public get(index: number): LogAnalyticsNamespaceAssociationAssociationPropertiesOutputReference {
    return new LogAnalyticsNamespaceAssociationAssociationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAnalyticsNamespaceAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#create LogAnalyticsNamespaceAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#delete LogAnalyticsNamespaceAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#update LogAnalyticsNamespaceAssociation#update}
  */
  readonly update?: string;
}

export function logAnalyticsNamespaceAssociationTimeoutsToTerraform(struct?: LogAnalyticsNamespaceAssociationTimeouts | cdktf.IResolvable): any {
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


export function logAnalyticsNamespaceAssociationTimeoutsToHclTerraform(struct?: LogAnalyticsNamespaceAssociationTimeouts | cdktf.IResolvable): any {
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

export class LogAnalyticsNamespaceAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsNamespaceAssociationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogAnalyticsNamespaceAssociationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association oci_log_analytics_namespace_association}
*/
export class LogAnalyticsNamespaceAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAnalyticsNamespaceAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAnalyticsNamespaceAssociation to import
  * @param importFromId The id of the existing LogAnalyticsNamespaceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAnalyticsNamespaceAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_namespace_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/log_analytics_namespace_association oci_log_analytics_namespace_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsNamespaceAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsNamespaceAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_association',
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
    this._compartmentId = config.compartmentId;
    this._entityId = config.entityId;
    this._id = config.id;
    this._isFromRepublish = config.isFromRepublish;
    this._logGroupId = config.logGroupId;
    this._namespace = config.namespace;
    this._sourceName = config.sourceName;
    this._associationProperties.internalValue = config.associationProperties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_entity_name - computed: true, optional: false, required: false
  public get agentEntityName() {
    return this.getStringAttribute('agent_entity_name');
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

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

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_name - computed: true, optional: false, required: false
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }

  // entity_type_display_name - computed: true, optional: false, required: false
  public get entityTypeDisplayName() {
    return this.getStringAttribute('entity_type_display_name');
  }

  // entity_type_name - computed: true, optional: false, required: false
  public get entityTypeName() {
    return this.getStringAttribute('entity_type_name');
  }

  // failure_message - computed: true, optional: false, required: false
  public get failureMessage() {
    return this.getStringAttribute('failure_message');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // is_from_republish - computed: false, optional: true, required: false
  private _isFromRepublish?: boolean | cdktf.IResolvable; 
  public get isFromRepublish() {
    return this.getBooleanAttribute('is_from_republish');
  }
  public set isFromRepublish(value: boolean | cdktf.IResolvable) {
    this._isFromRepublish = value;
  }
  public resetIsFromRepublish() {
    this._isFromRepublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFromRepublishInput() {
    return this._isFromRepublish;
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // log_group_compartment - computed: true, optional: false, required: false
  public get logGroupCompartment() {
    return this.getStringAttribute('log_group_compartment');
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
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

  // retry_count - computed: true, optional: false, required: false
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }

  // source_display_name - computed: true, optional: false, required: false
  public get sourceDisplayName() {
    return this.getStringAttribute('source_display_name');
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_type_name - computed: true, optional: false, required: false
  public get sourceTypeName() {
    return this.getStringAttribute('source_type_name');
  }

  // time_last_attempted - computed: true, optional: false, required: false
  public get timeLastAttempted() {
    return this.getStringAttribute('time_last_attempted');
  }

  // association_properties - computed: false, optional: true, required: false
  private _associationProperties = new LogAnalyticsNamespaceAssociationAssociationPropertiesList(this, "association_properties", false);
  public get associationProperties() {
    return this._associationProperties;
  }
  public putAssociationProperties(value: LogAnalyticsNamespaceAssociationAssociationProperties[] | cdktf.IResolvable) {
    this._associationProperties.internalValue = value;
  }
  public resetAssociationProperties() {
    this._associationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationPropertiesInput() {
    return this._associationProperties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsNamespaceAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsNamespaceAssociationTimeouts) {
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
      entity_id: cdktf.stringToTerraform(this._entityId),
      id: cdktf.stringToTerraform(this._id),
      is_from_republish: cdktf.booleanToTerraform(this._isFromRepublish),
      log_group_id: cdktf.stringToTerraform(this._logGroupId),
      namespace: cdktf.stringToTerraform(this._namespace),
      source_name: cdktf.stringToTerraform(this._sourceName),
      association_properties: cdktf.listMapper(logAnalyticsNamespaceAssociationAssociationPropertiesToTerraform, true)(this._associationProperties.internalValue),
      timeouts: logAnalyticsNamespaceAssociationTimeoutsToTerraform(this._timeouts.internalValue),
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
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
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
      is_from_republish: {
        value: cdktf.booleanToHclTerraform(this._isFromRepublish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_group_id: {
        value: cdktf.stringToHclTerraform(this._logGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      association_properties: {
        value: cdktf.listMapperHcl(logAnalyticsNamespaceAssociationAssociationPropertiesToHclTerraform, true)(this._associationProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAnalyticsNamespaceAssociationAssociationPropertiesList",
      },
      timeouts: {
        value: logAnalyticsNamespaceAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogAnalyticsNamespaceAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
