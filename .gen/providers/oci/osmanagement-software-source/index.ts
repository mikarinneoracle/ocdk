// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsmanagementSoftwareSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#arch_type OsmanagementSoftwareSource#arch_type}
  */
  readonly archType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#checksum_type OsmanagementSoftwareSource#checksum_type}
  */
  readonly checksumType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#compartment_id OsmanagementSoftwareSource#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#defined_tags OsmanagementSoftwareSource#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#description OsmanagementSoftwareSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#display_name OsmanagementSoftwareSource#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#freeform_tags OsmanagementSoftwareSource#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#id OsmanagementSoftwareSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#maintainer_email OsmanagementSoftwareSource#maintainer_email}
  */
  readonly maintainerEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#maintainer_name OsmanagementSoftwareSource#maintainer_name}
  */
  readonly maintainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#maintainer_phone OsmanagementSoftwareSource#maintainer_phone}
  */
  readonly maintainerPhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#parent_id OsmanagementSoftwareSource#parent_id}
  */
  readonly parentId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#timeouts OsmanagementSoftwareSource#timeouts}
  */
  readonly timeouts?: OsmanagementSoftwareSourceTimeouts;
}
export interface OsmanagementSoftwareSourceAssociatedManagedInstances {
}

export function osmanagementSoftwareSourceAssociatedManagedInstancesToTerraform(struct?: OsmanagementSoftwareSourceAssociatedManagedInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osmanagementSoftwareSourceAssociatedManagedInstancesToHclTerraform(struct?: OsmanagementSoftwareSourceAssociatedManagedInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsmanagementSoftwareSourceAssociatedManagedInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsmanagementSoftwareSourceAssociatedManagedInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class OsmanagementSoftwareSourceAssociatedManagedInstancesList extends cdktf.ComplexList {

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
  public get(index: number): OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference {
    return new OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsmanagementSoftwareSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#create OsmanagementSoftwareSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#delete OsmanagementSoftwareSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#update OsmanagementSoftwareSource#update}
  */
  readonly update?: string;
}

export function osmanagementSoftwareSourceTimeoutsToTerraform(struct?: OsmanagementSoftwareSourceTimeouts | cdktf.IResolvable): any {
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


export function osmanagementSoftwareSourceTimeoutsToHclTerraform(struct?: OsmanagementSoftwareSourceTimeouts | cdktf.IResolvable): any {
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

export class OsmanagementSoftwareSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsmanagementSoftwareSourceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsmanagementSoftwareSourceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source oci_osmanagement_software_source}
*/
export class OsmanagementSoftwareSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osmanagement_software_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsmanagementSoftwareSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsmanagementSoftwareSource to import
  * @param importFromId The id of the existing OsmanagementSoftwareSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsmanagementSoftwareSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osmanagement_software_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/osmanagement_software_source oci_osmanagement_software_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsmanagementSoftwareSourceConfig
  */
  public constructor(scope: Construct, id: string, config: OsmanagementSoftwareSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_software_source',
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
    this._archType = config.archType;
    this._checksumType = config.checksumType;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._maintainerEmail = config.maintainerEmail;
    this._maintainerName = config.maintainerName;
    this._maintainerPhone = config.maintainerPhone;
    this._parentId = config.parentId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch_type - computed: false, optional: false, required: true
  private _archType?: string; 
  public get archType() {
    return this.getStringAttribute('arch_type');
  }
  public set archType(value: string) {
    this._archType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archTypeInput() {
    return this._archType;
  }

  // associated_managed_instances - computed: true, optional: false, required: false
  private _associatedManagedInstances = new OsmanagementSoftwareSourceAssociatedManagedInstancesList(this, "associated_managed_instances", false);
  public get associatedManagedInstances() {
    return this._associatedManagedInstances;
  }

  // checksum_type - computed: true, optional: true, required: false
  private _checksumType?: string; 
  public get checksumType() {
    return this.getStringAttribute('checksum_type');
  }
  public set checksumType(value: string) {
    this._checksumType = value;
  }
  public resetChecksumType() {
    this._checksumType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumTypeInput() {
    return this._checksumType;
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

  // gpg_key_fingerprint - computed: true, optional: false, required: false
  public get gpgKeyFingerprint() {
    return this.getStringAttribute('gpg_key_fingerprint');
  }

  // gpg_key_id - computed: true, optional: false, required: false
  public get gpgKeyId() {
    return this.getStringAttribute('gpg_key_id');
  }

  // gpg_key_url - computed: true, optional: false, required: false
  public get gpgKeyUrl() {
    return this.getStringAttribute('gpg_key_url');
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

  // maintainer_email - computed: true, optional: true, required: false
  private _maintainerEmail?: string; 
  public get maintainerEmail() {
    return this.getStringAttribute('maintainer_email');
  }
  public set maintainerEmail(value: string) {
    this._maintainerEmail = value;
  }
  public resetMaintainerEmail() {
    this._maintainerEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainerEmailInput() {
    return this._maintainerEmail;
  }

  // maintainer_name - computed: true, optional: true, required: false
  private _maintainerName?: string; 
  public get maintainerName() {
    return this.getStringAttribute('maintainer_name');
  }
  public set maintainerName(value: string) {
    this._maintainerName = value;
  }
  public resetMaintainerName() {
    this._maintainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainerNameInput() {
    return this._maintainerName;
  }

  // maintainer_phone - computed: true, optional: true, required: false
  private _maintainerPhone?: string; 
  public get maintainerPhone() {
    return this.getStringAttribute('maintainer_phone');
  }
  public set maintainerPhone(value: string) {
    this._maintainerPhone = value;
  }
  public resetMaintainerPhone() {
    this._maintainerPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainerPhoneInput() {
    return this._maintainerPhone;
  }

  // packages - computed: true, optional: false, required: false
  public get packages() {
    return this.getNumberAttribute('packages');
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // parent_name - computed: true, optional: false, required: false
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }

  // repo_type - computed: true, optional: false, required: false
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsmanagementSoftwareSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsmanagementSoftwareSourceTimeouts) {
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
      arch_type: cdktf.stringToTerraform(this._archType),
      checksum_type: cdktf.stringToTerraform(this._checksumType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      maintainer_email: cdktf.stringToTerraform(this._maintainerEmail),
      maintainer_name: cdktf.stringToTerraform(this._maintainerName),
      maintainer_phone: cdktf.stringToTerraform(this._maintainerPhone),
      parent_id: cdktf.stringToTerraform(this._parentId),
      timeouts: osmanagementSoftwareSourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch_type: {
        value: cdktf.stringToHclTerraform(this._archType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checksum_type: {
        value: cdktf.stringToHclTerraform(this._checksumType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      maintainer_email: {
        value: cdktf.stringToHclTerraform(this._maintainerEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintainer_name: {
        value: cdktf.stringToHclTerraform(this._maintainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintainer_phone: {
        value: cdktf.stringToHclTerraform(this._maintainerPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: osmanagementSoftwareSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsmanagementSoftwareSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
