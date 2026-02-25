// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseMigrationAssessmentAssessorActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#assessment_id DatabaseMigrationAssessmentAssessorAction#assessment_id}
  */
  readonly assessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#assessor_action DatabaseMigrationAssessmentAssessorAction#assessor_action}
  */
  readonly assessorAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#assessor_name DatabaseMigrationAssessmentAssessorAction#assessor_name}
  */
  readonly assessorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#id DatabaseMigrationAssessmentAssessorAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#items DatabaseMigrationAssessmentAssessorAction#items}
  */
  readonly items: DatabaseMigrationAssessmentAssessorActionItems[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#timeouts DatabaseMigrationAssessmentAssessorAction#timeouts}
  */
  readonly timeouts?: DatabaseMigrationAssessmentAssessorActionTimeouts;
}
export interface DatabaseMigrationAssessmentAssessorActionItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#name DatabaseMigrationAssessmentAssessorAction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#value DatabaseMigrationAssessmentAssessorAction#value}
  */
  readonly value: string;
}

export function databaseMigrationAssessmentAssessorActionItemsToTerraform(struct?: DatabaseMigrationAssessmentAssessorActionItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function databaseMigrationAssessmentAssessorActionItemsToHclTerraform(struct?: DatabaseMigrationAssessmentAssessorActionItems | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationAssessmentAssessorActionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationAssessmentAssessorActionItems | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationAssessmentAssessorActionItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

export class DatabaseMigrationAssessmentAssessorActionItemsList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationAssessmentAssessorActionItems[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationAssessmentAssessorActionItemsOutputReference {
    return new DatabaseMigrationAssessmentAssessorActionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationAssessmentAssessorActionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#create DatabaseMigrationAssessmentAssessorAction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#delete DatabaseMigrationAssessmentAssessorAction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#update DatabaseMigrationAssessmentAssessorAction#update}
  */
  readonly update?: string;
}

export function databaseMigrationAssessmentAssessorActionTimeoutsToTerraform(struct?: DatabaseMigrationAssessmentAssessorActionTimeouts | cdktf.IResolvable): any {
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


export function databaseMigrationAssessmentAssessorActionTimeoutsToHclTerraform(struct?: DatabaseMigrationAssessmentAssessorActionTimeouts | cdktf.IResolvable): any {
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

export class DatabaseMigrationAssessmentAssessorActionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMigrationAssessmentAssessorActionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMigrationAssessmentAssessorActionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action oci_database_migration_assessment_assessor_action}
*/
export class DatabaseMigrationAssessmentAssessorAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_assessment_assessor_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseMigrationAssessmentAssessorAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseMigrationAssessmentAssessorAction to import
  * @param importFromId The id of the existing DatabaseMigrationAssessmentAssessorAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseMigrationAssessmentAssessorAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_assessment_assessor_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment_assessor_action oci_database_migration_assessment_assessor_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMigrationAssessmentAssessorActionConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseMigrationAssessmentAssessorActionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_assessment_assessor_action',
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
    this._assessmentId = config.assessmentId;
    this._assessorAction = config.assessorAction;
    this._assessorName = config.assessorName;
    this._id = config.id;
    this._items.internalValue = config.items;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assessment_id - computed: false, optional: false, required: true
  private _assessmentId?: string; 
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }
  public set assessmentId(value: string) {
    this._assessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentIdInput() {
    return this._assessmentId;
  }

  // assessor_action - computed: false, optional: false, required: true
  private _assessorAction?: string; 
  public get assessorAction() {
    return this.getStringAttribute('assessor_action');
  }
  public set assessorAction(value: string) {
    this._assessorAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assessorActionInput() {
    return this._assessorAction;
  }

  // assessor_name - computed: false, optional: false, required: true
  private _assessorName?: string; 
  public get assessorName() {
    return this.getStringAttribute('assessor_name');
  }
  public set assessorName(value: string) {
    this._assessorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assessorNameInput() {
    return this._assessorName;
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

  // items - computed: false, optional: false, required: true
  private _items = new DatabaseMigrationAssessmentAssessorActionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DatabaseMigrationAssessmentAssessorActionItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseMigrationAssessmentAssessorActionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseMigrationAssessmentAssessorActionTimeouts) {
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
      assessment_id: cdktf.stringToTerraform(this._assessmentId),
      assessor_action: cdktf.stringToTerraform(this._assessorAction),
      assessor_name: cdktf.stringToTerraform(this._assessorName),
      id: cdktf.stringToTerraform(this._id),
      items: cdktf.listMapper(databaseMigrationAssessmentAssessorActionItemsToTerraform, true)(this._items.internalValue),
      timeouts: databaseMigrationAssessmentAssessorActionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assessment_id: {
        value: cdktf.stringToHclTerraform(this._assessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assessor_action: {
        value: cdktf.stringToHclTerraform(this._assessorAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assessor_name: {
        value: cdktf.stringToHclTerraform(this._assessorName),
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
      items: {
        value: cdktf.listMapperHcl(databaseMigrationAssessmentAssessorActionItemsToHclTerraform, true)(this._items.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationAssessmentAssessorActionItemsList",
      },
      timeouts: {
        value: databaseMigrationAssessmentAssessorActionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseMigrationAssessmentAssessorActionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
