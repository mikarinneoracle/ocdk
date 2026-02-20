// https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_software_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsmanagementSoftwareSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_software_source#software_source_id DataOciOsmanagementSoftwareSource#software_source_id}
  */
  readonly softwareSourceId: string;
}
export interface DataOciOsmanagementSoftwareSourceAssociatedManagedInstances {
}

export function dataOciOsmanagementSoftwareSourceAssociatedManagedInstancesToTerraform(struct?: DataOciOsmanagementSoftwareSourceAssociatedManagedInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsmanagementSoftwareSourceAssociatedManagedInstancesToHclTerraform(struct?: DataOciOsmanagementSoftwareSourceAssociatedManagedInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsmanagementSoftwareSourceAssociatedManagedInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsmanagementSoftwareSourceAssociatedManagedInstances | undefined) {
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

export class DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference {
    return new DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_software_source oci_osmanagement_software_source}
*/
export class DataOciOsmanagementSoftwareSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osmanagement_software_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsmanagementSoftwareSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsmanagementSoftwareSource to import
  * @param importFromId The id of the existing DataOciOsmanagementSoftwareSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_software_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsmanagementSoftwareSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osmanagement_software_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_software_source oci_osmanagement_software_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsmanagementSoftwareSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsmanagementSoftwareSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_software_source',
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
    this._softwareSourceId = config.softwareSourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch_type - computed: true, optional: false, required: false
  public get archType() {
    return this.getStringAttribute('arch_type');
  }

  // associated_managed_instances - computed: true, optional: false, required: false
  private _associatedManagedInstances = new DataOciOsmanagementSoftwareSourceAssociatedManagedInstancesList(this, "associated_managed_instances", false);
  public get associatedManagedInstances() {
    return this._associatedManagedInstances;
  }

  // checksum_type - computed: true, optional: false, required: false
  public get checksumType() {
    return this.getStringAttribute('checksum_type');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintainer_email - computed: true, optional: false, required: false
  public get maintainerEmail() {
    return this.getStringAttribute('maintainer_email');
  }

  // maintainer_name - computed: true, optional: false, required: false
  public get maintainerName() {
    return this.getStringAttribute('maintainer_name');
  }

  // maintainer_phone - computed: true, optional: false, required: false
  public get maintainerPhone() {
    return this.getStringAttribute('maintainer_phone');
  }

  // packages - computed: true, optional: false, required: false
  public get packages() {
    return this.getNumberAttribute('packages');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // parent_name - computed: true, optional: false, required: false
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }

  // repo_type - computed: true, optional: false, required: false
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }

  // software_source_id - computed: false, optional: false, required: true
  private _softwareSourceId?: string; 
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }
  public set softwareSourceId(value: string) {
    this._softwareSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceIdInput() {
    return this._softwareSourceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      software_source_id: cdktf.stringToTerraform(this._softwareSourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      software_source_id: {
        value: cdktf.stringToHclTerraform(this._softwareSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
