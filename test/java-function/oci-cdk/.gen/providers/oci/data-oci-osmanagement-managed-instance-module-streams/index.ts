// https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsmanagementManagedInstanceModuleStreamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}
  */
  readonly moduleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}
  */
  readonly streamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}
  */
  readonly streamStatus?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#filter DataOciOsmanagementManagedInstanceModuleStreams#filter}
  */
  readonly filter?: DataOciOsmanagementManagedInstanceModuleStreamsFilter[] | cdktf.IResolvable;
}
export interface DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles {
}

export function dataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesToTerraform(struct?: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesToHclTerraform(struct?: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles | undefined) {
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

export class DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference {
    return new DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances {
}

export function dataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesToTerraform(struct?: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesToHclTerraform(struct?: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances | undefined) {
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

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // software_source_id - computed: true, optional: false, required: false
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
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

export class DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference {
    return new DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsmanagementManagedInstanceModuleStreamsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#name DataOciOsmanagementManagedInstanceModuleStreams#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#regex DataOciOsmanagementManagedInstanceModuleStreams#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#values DataOciOsmanagementManagedInstanceModuleStreams#values}
  */
  readonly values: string[];
}

export function dataOciOsmanagementManagedInstanceModuleStreamsFilterToTerraform(struct?: DataOciOsmanagementManagedInstanceModuleStreamsFilter | cdktf.IResolvable): any {
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


export function dataOciOsmanagementManagedInstanceModuleStreamsFilterToHclTerraform(struct?: DataOciOsmanagementManagedInstanceModuleStreamsFilter | cdktf.IResolvable): any {
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

export class DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsmanagementManagedInstanceModuleStreamsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOsmanagementManagedInstanceModuleStreamsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOsmanagementManagedInstanceModuleStreamsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOsmanagementManagedInstanceModuleStreamsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference {
    return new DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams oci_osmanagement_managed_instance_module_streams}
*/
export class DataOciOsmanagementManagedInstanceModuleStreams extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osmanagement_managed_instance_module_streams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceModuleStreams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsmanagementManagedInstanceModuleStreams to import
  * @param importFromId The id of the existing DataOciOsmanagementManagedInstanceModuleStreams that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsmanagementManagedInstanceModuleStreams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osmanagement_managed_instance_module_streams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance_module_streams oci_osmanagement_managed_instance_module_streams} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsmanagementManagedInstanceModuleStreamsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsmanagementManagedInstanceModuleStreamsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_managed_instance_module_streams',
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
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._moduleName = config.moduleName;
    this._streamName = config.streamName;
    this._streamStatus = config.streamStatus;
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

  // module_stream_on_managed_instances - computed: true, optional: false, required: false
  private _moduleStreamOnManagedInstances = new DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList(this, "module_stream_on_managed_instances", false);
  public get moduleStreamOnManagedInstances() {
    return this._moduleStreamOnManagedInstances;
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

  // stream_status - computed: false, optional: true, required: false
  private _streamStatus?: string; 
  public get streamStatus() {
    return this.getStringAttribute('stream_status');
  }
  public set streamStatus(value: string) {
    this._streamStatus = value;
  }
  public resetStreamStatus() {
    this._streamStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamStatusInput() {
    return this._streamStatus;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOsmanagementManagedInstanceModuleStreamsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOsmanagementManagedInstanceModuleStreamsFilter[] | cdktf.IResolvable) {
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
      stream_name: cdktf.stringToTerraform(this._streamName),
      stream_status: cdktf.stringToTerraform(this._streamStatus),
      filter: cdktf.listMapper(dataOciOsmanagementManagedInstanceModuleStreamsFilterToTerraform, true)(this._filter.internalValue),
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
      stream_name: {
        value: cdktf.stringToHclTerraform(this._streamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_status: {
        value: cdktf.stringToHclTerraform(this._streamStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOsmanagementManagedInstanceModuleStreamsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOsmanagementManagedInstanceModuleStreamsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
