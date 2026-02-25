// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseDataPatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#action DatabaseDataPatch#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#database_id DatabaseDataPatch#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#id DatabaseDataPatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#pluggable_databases DatabaseDataPatch#pluggable_databases}
  */
  readonly pluggableDatabases?: string[];
  /**
  * data_patch_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#data_patch_options DatabaseDataPatch#data_patch_options}
  */
  readonly dataPatchOptions?: DatabaseDataPatchDataPatchOptions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#timeouts DatabaseDataPatch#timeouts}
  */
  readonly timeouts?: DatabaseDataPatchTimeouts;
}
export interface DatabaseDataPatchDataPatchOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#should_skip_closed_pdbs DatabaseDataPatch#should_skip_closed_pdbs}
  */
  readonly shouldSkipClosedPdbs?: boolean | cdktf.IResolvable;
}

export function databaseDataPatchDataPatchOptionsToTerraform(struct?: DatabaseDataPatchDataPatchOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_skip_closed_pdbs: cdktf.booleanToTerraform(struct!.shouldSkipClosedPdbs),
  }
}


export function databaseDataPatchDataPatchOptionsToHclTerraform(struct?: DatabaseDataPatchDataPatchOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_skip_closed_pdbs: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipClosedPdbs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDataPatchDataPatchOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseDataPatchDataPatchOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldSkipClosedPdbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipClosedPdbs = this._shouldSkipClosedPdbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDataPatchDataPatchOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldSkipClosedPdbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldSkipClosedPdbs = value.shouldSkipClosedPdbs;
    }
  }

  // should_skip_closed_pdbs - computed: false, optional: true, required: false
  private _shouldSkipClosedPdbs?: boolean | cdktf.IResolvable; 
  public get shouldSkipClosedPdbs() {
    return this.getBooleanAttribute('should_skip_closed_pdbs');
  }
  public set shouldSkipClosedPdbs(value: boolean | cdktf.IResolvable) {
    this._shouldSkipClosedPdbs = value;
  }
  public resetShouldSkipClosedPdbs() {
    this._shouldSkipClosedPdbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipClosedPdbsInput() {
    return this._shouldSkipClosedPdbs;
  }
}

export class DatabaseDataPatchDataPatchOptionsList extends cdktf.ComplexList {
  public internalValue? : DatabaseDataPatchDataPatchOptions[] | cdktf.IResolvable

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
  public get(index: number): DatabaseDataPatchDataPatchOptionsOutputReference {
    return new DatabaseDataPatchDataPatchOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseDataPatchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#create DatabaseDataPatch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#delete DatabaseDataPatch#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#update DatabaseDataPatch#update}
  */
  readonly update?: string;
}

export function databaseDataPatchTimeoutsToTerraform(struct?: DatabaseDataPatchTimeouts | cdktf.IResolvable): any {
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


export function databaseDataPatchTimeoutsToHclTerraform(struct?: DatabaseDataPatchTimeouts | cdktf.IResolvable): any {
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

export class DatabaseDataPatchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseDataPatchTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseDataPatchTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch oci_database_data_patch}
*/
export class DatabaseDataPatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_data_patch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseDataPatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseDataPatch to import
  * @param importFromId The id of the existing DatabaseDataPatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseDataPatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_data_patch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_data_patch oci_database_data_patch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseDataPatchConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseDataPatchConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_data_patch',
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
    this._action = config.action;
    this._databaseId = config.databaseId;
    this._id = config.id;
    this._pluggableDatabases = config.pluggableDatabases;
    this._dataPatchOptions.internalValue = config.dataPatchOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
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

  // pluggable_databases - computed: false, optional: true, required: false
  private _pluggableDatabases?: string[]; 
  public get pluggableDatabases() {
    return this.getListAttribute('pluggable_databases');
  }
  public set pluggableDatabases(value: string[]) {
    this._pluggableDatabases = value;
  }
  public resetPluggableDatabases() {
    this._pluggableDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabasesInput() {
    return this._pluggableDatabases;
  }

  // data_patch_options - computed: false, optional: true, required: false
  private _dataPatchOptions = new DatabaseDataPatchDataPatchOptionsList(this, "data_patch_options", false);
  public get dataPatchOptions() {
    return this._dataPatchOptions;
  }
  public putDataPatchOptions(value: DatabaseDataPatchDataPatchOptions[] | cdktf.IResolvable) {
    this._dataPatchOptions.internalValue = value;
  }
  public resetDataPatchOptions() {
    this._dataPatchOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPatchOptionsInput() {
    return this._dataPatchOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseDataPatchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseDataPatchTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      database_id: cdktf.stringToTerraform(this._databaseId),
      id: cdktf.stringToTerraform(this._id),
      pluggable_databases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pluggableDatabases),
      data_patch_options: cdktf.listMapper(databaseDataPatchDataPatchOptionsToTerraform, true)(this._dataPatchOptions.internalValue),
      timeouts: databaseDataPatchTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
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
      pluggable_databases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pluggableDatabases),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_patch_options: {
        value: cdktf.listMapperHcl(databaseDataPatchDataPatchOptionsToHclTerraform, true)(this._dataPatchOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseDataPatchDataPatchOptionsList",
      },
      timeouts: {
        value: databaseDataPatchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseDataPatchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
