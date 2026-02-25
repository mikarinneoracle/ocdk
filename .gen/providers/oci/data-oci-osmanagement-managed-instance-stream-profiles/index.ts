// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsmanagementManagedInstanceStreamProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}
  */
  readonly moduleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}
  */
  readonly profileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}
  */
  readonly profileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}
  */
  readonly streamName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#filter DataOciOsmanagementManagedInstanceStreamProfiles#filter}
  */
  readonly filter?: DataOciOsmanagementManagedInstanceStreamProfilesFilter[] | cdktf.IResolvable;
}
export interface DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances {
}

export function dataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesToTerraform(struct?: DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesToHclTerraform(struct?: DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // module_name - computed: true, optional: false, required: false
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }

  // time_modified - computed: true, optional: false, required: false
  public get timeModified() {
    return this.getStringAttribute('time_modified');
  }
}

export class DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference {
    return new DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsmanagementManagedInstanceStreamProfilesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#name DataOciOsmanagementManagedInstanceStreamProfiles#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#regex DataOciOsmanagementManagedInstanceStreamProfiles#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#values DataOciOsmanagementManagedInstanceStreamProfiles#values}
  */
  readonly values: string[];
}

export function dataOciOsmanagementManagedInstanceStreamProfilesFilterToTerraform(struct?: DataOciOsmanagementManagedInstanceStreamProfilesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciOsmanagementManagedInstanceStreamProfilesFilterToHclTerraform(struct?: DataOciOsmanagementManagedInstanceStreamProfilesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsmanagementManagedInstanceStreamProfilesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsmanagementManagedInstanceStreamProfilesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciOsmanagementManagedInstanceStreamProfilesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOsmanagementManagedInstanceStreamProfilesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference {
    return new DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles oci_osmanagement_managed_instance_stream_profiles}
*/
export class DataOciOsmanagementManagedInstanceStreamProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osmanagement_managed_instance_stream_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceStreamProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsmanagementManagedInstanceStreamProfiles to import
  * @param importFromId The id of the existing DataOciOsmanagementManagedInstanceStreamProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsmanagementManagedInstanceStreamProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osmanagement_managed_instance_stream_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_stream_profiles oci_osmanagement_managed_instance_stream_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsmanagementManagedInstanceStreamProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsmanagementManagedInstanceStreamProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_managed_instance_stream_profiles',
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
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._moduleName = config.moduleName;
    this._profileName = config.profileName;
    this._profileStatus = config.profileStatus;
    this._streamName = config.streamName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
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

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // module_name - computed: false, optional: true, required: false
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  public resetModuleName() {
    this._moduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // module_stream_profile_on_managed_instances - computed: true, optional: false, required: false
  private _moduleStreamProfileOnManagedInstances = new DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList(this, "module_stream_profile_on_managed_instances", false);
  public get moduleStreamProfileOnManagedInstances() {
    return this._moduleStreamProfileOnManagedInstances;
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // profile_status - computed: false, optional: true, required: false
  private _profileStatus?: string; 
  public get profileStatus() {
    return this.getStringAttribute('profile_status');
  }
  public set profileStatus(value: string) {
    this._profileStatus = value;
  }
  public resetProfileStatus() {
    this._profileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileStatusInput() {
    return this._profileStatus;
  }

  // stream_name - computed: false, optional: true, required: false
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  public resetStreamName() {
    this._streamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOsmanagementManagedInstanceStreamProfilesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOsmanagementManagedInstanceStreamProfilesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      module_name: cdktf.stringToTerraform(this._moduleName),
      profile_name: cdktf.stringToTerraform(this._profileName),
      profile_status: cdktf.stringToTerraform(this._profileStatus),
      stream_name: cdktf.stringToTerraform(this._streamName),
      filter: cdktf.listMapper(dataOciOsmanagementManagedInstanceStreamProfilesFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_name: {
        value: cdktf.stringToHclTerraform(this._moduleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_status: {
        value: cdktf.stringToHclTerraform(this._profileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_name: {
        value: cdktf.stringToHclTerraform(this._streamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOsmanagementManagedInstanceStreamProfilesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOsmanagementManagedInstanceStreamProfilesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
