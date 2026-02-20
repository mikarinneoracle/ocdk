// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsmanagementManagedInstanceManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * child_software_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#child_software_sources OsmanagementManagedInstanceManagement#child_software_sources}
  */
  readonly childSoftwareSources?: OsmanagementManagedInstanceManagementChildSoftwareSources[] | cdktf.IResolvable;
  /**
  * managed_instance_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#managed_instance_groups OsmanagementManagedInstanceManagement#managed_instance_groups}
  */
  readonly managedInstanceGroups?: OsmanagementManagedInstanceManagementManagedInstanceGroups[] | cdktf.IResolvable;
  /**
  * parent_software_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#parent_software_source OsmanagementManagedInstanceManagement#parent_software_source}
  */
  readonly parentSoftwareSource?: OsmanagementManagedInstanceManagementParentSoftwareSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#timeouts OsmanagementManagedInstanceManagement#timeouts}
  */
  readonly timeouts?: OsmanagementManagedInstanceManagementTimeouts;
}
export interface OsmanagementManagedInstanceManagementChildSoftwareSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}
  */
  readonly name?: string;
}

export function osmanagementManagedInstanceManagementChildSoftwareSourcesToTerraform(struct?: OsmanagementManagedInstanceManagementChildSoftwareSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function osmanagementManagedInstanceManagementChildSoftwareSourcesToHclTerraform(struct?: OsmanagementManagedInstanceManagementChildSoftwareSources | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsmanagementManagedInstanceManagementChildSoftwareSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsmanagementManagedInstanceManagementChildSoftwareSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class OsmanagementManagedInstanceManagementChildSoftwareSourcesList extends cdktf.ComplexList {
  public internalValue? : OsmanagementManagedInstanceManagementChildSoftwareSources[] | cdktf.IResolvable

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
  public get(index: number): OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference {
    return new OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsmanagementManagedInstanceManagementManagedInstanceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#display_name OsmanagementManagedInstanceManagement#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function osmanagementManagedInstanceManagementManagedInstanceGroupsToTerraform(struct?: OsmanagementManagedInstanceManagementManagedInstanceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function osmanagementManagedInstanceManagementManagedInstanceGroupsToHclTerraform(struct?: OsmanagementManagedInstanceManagementManagedInstanceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsmanagementManagedInstanceManagementManagedInstanceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsmanagementManagedInstanceManagementManagedInstanceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
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
}

export class OsmanagementManagedInstanceManagementManagedInstanceGroupsList extends cdktf.ComplexList {
  public internalValue? : OsmanagementManagedInstanceManagementManagedInstanceGroups[] | cdktf.IResolvable

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
  public get(index: number): OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference {
    return new OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsmanagementManagedInstanceManagementParentSoftwareSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}
  */
  readonly name?: string;
}

export function osmanagementManagedInstanceManagementParentSoftwareSourceToTerraform(struct?: OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference | OsmanagementManagedInstanceManagementParentSoftwareSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function osmanagementManagedInstanceManagementParentSoftwareSourceToHclTerraform(struct?: OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference | OsmanagementManagedInstanceManagementParentSoftwareSource): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsmanagementManagedInstanceManagementParentSoftwareSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsmanagementManagedInstanceManagementParentSoftwareSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface OsmanagementManagedInstanceManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#create OsmanagementManagedInstanceManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#delete OsmanagementManagedInstanceManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#update OsmanagementManagedInstanceManagement#update}
  */
  readonly update?: string;
}

export function osmanagementManagedInstanceManagementTimeoutsToTerraform(struct?: OsmanagementManagedInstanceManagementTimeouts | cdktf.IResolvable): any {
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


export function osmanagementManagedInstanceManagementTimeoutsToHclTerraform(struct?: OsmanagementManagedInstanceManagementTimeouts | cdktf.IResolvable): any {
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

export class OsmanagementManagedInstanceManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsmanagementManagedInstanceManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsmanagementManagedInstanceManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management oci_osmanagement_managed_instance_management}
*/
export class OsmanagementManagedInstanceManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osmanagement_managed_instance_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsmanagementManagedInstanceManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsmanagementManagedInstanceManagement to import
  * @param importFromId The id of the existing OsmanagementManagedInstanceManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsmanagementManagedInstanceManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osmanagement_managed_instance_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_managed_instance_management oci_osmanagement_managed_instance_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsmanagementManagedInstanceManagementConfig
  */
  public constructor(scope: Construct, id: string, config: OsmanagementManagedInstanceManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_managed_instance_management',
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
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._childSoftwareSources.internalValue = config.childSoftwareSources;
    this._managedInstanceGroups.internalValue = config.managedInstanceGroups;
    this._parentSoftwareSource.internalValue = config.parentSoftwareSource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // last_boot - computed: true, optional: false, required: false
  public get lastBoot() {
    return this.getStringAttribute('last_boot');
  }

  // last_checkin - computed: true, optional: false, required: false
  public get lastCheckin() {
    return this.getStringAttribute('last_checkin');
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

  // os_kernel_version - computed: true, optional: false, required: false
  public get osKernelVersion() {
    return this.getStringAttribute('os_kernel_version');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updates_available - computed: true, optional: false, required: false
  public get updatesAvailable() {
    return this.getNumberAttribute('updates_available');
  }

  // child_software_sources - computed: false, optional: true, required: false
  private _childSoftwareSources = new OsmanagementManagedInstanceManagementChildSoftwareSourcesList(this, "child_software_sources", true);
  public get childSoftwareSources() {
    return this._childSoftwareSources;
  }
  public putChildSoftwareSources(value: OsmanagementManagedInstanceManagementChildSoftwareSources[] | cdktf.IResolvable) {
    this._childSoftwareSources.internalValue = value;
  }
  public resetChildSoftwareSources() {
    this._childSoftwareSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childSoftwareSourcesInput() {
    return this._childSoftwareSources.internalValue;
  }

  // managed_instance_groups - computed: false, optional: true, required: false
  private _managedInstanceGroups = new OsmanagementManagedInstanceManagementManagedInstanceGroupsList(this, "managed_instance_groups", true);
  public get managedInstanceGroups() {
    return this._managedInstanceGroups;
  }
  public putManagedInstanceGroups(value: OsmanagementManagedInstanceManagementManagedInstanceGroups[] | cdktf.IResolvable) {
    this._managedInstanceGroups.internalValue = value;
  }
  public resetManagedInstanceGroups() {
    this._managedInstanceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceGroupsInput() {
    return this._managedInstanceGroups.internalValue;
  }

  // parent_software_source - computed: false, optional: true, required: false
  private _parentSoftwareSource = new OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference(this, "parent_software_source");
  public get parentSoftwareSource() {
    return this._parentSoftwareSource;
  }
  public putParentSoftwareSource(value: OsmanagementManagedInstanceManagementParentSoftwareSource) {
    this._parentSoftwareSource.internalValue = value;
  }
  public resetParentSoftwareSource() {
    this._parentSoftwareSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentSoftwareSourceInput() {
    return this._parentSoftwareSource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsmanagementManagedInstanceManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsmanagementManagedInstanceManagementTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      child_software_sources: cdktf.listMapper(osmanagementManagedInstanceManagementChildSoftwareSourcesToTerraform, true)(this._childSoftwareSources.internalValue),
      managed_instance_groups: cdktf.listMapper(osmanagementManagedInstanceManagementManagedInstanceGroupsToTerraform, true)(this._managedInstanceGroups.internalValue),
      parent_software_source: osmanagementManagedInstanceManagementParentSoftwareSourceToTerraform(this._parentSoftwareSource.internalValue),
      timeouts: osmanagementManagedInstanceManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      child_software_sources: {
        value: cdktf.listMapperHcl(osmanagementManagedInstanceManagementChildSoftwareSourcesToHclTerraform, true)(this._childSoftwareSources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OsmanagementManagedInstanceManagementChildSoftwareSourcesList",
      },
      managed_instance_groups: {
        value: cdktf.listMapperHcl(osmanagementManagedInstanceManagementManagedInstanceGroupsToHclTerraform, true)(this._managedInstanceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OsmanagementManagedInstanceManagementManagedInstanceGroupsList",
      },
      parent_software_source: {
        value: osmanagementManagedInstanceManagementParentSoftwareSourceToHclTerraform(this._parentSoftwareSource.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OsmanagementManagedInstanceManagementParentSoftwareSourceList",
      },
      timeouts: {
        value: osmanagementManagedInstanceManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsmanagementManagedInstanceManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
