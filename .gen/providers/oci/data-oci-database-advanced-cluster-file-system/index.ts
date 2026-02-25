// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_advanced_cluster_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAdvancedClusterFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_advanced_cluster_file_system#advanced_cluster_file_system_id DataOciDatabaseAdvancedClusterFileSystem#advanced_cluster_file_system_id}
  */
  readonly advancedClusterFileSystemId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_advanced_cluster_file_system oci_database_advanced_cluster_file_system}
*/
export class DataOciDatabaseAdvancedClusterFileSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_advanced_cluster_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseAdvancedClusterFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseAdvancedClusterFileSystem to import
  * @param importFromId The id of the existing DataOciDatabaseAdvancedClusterFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_advanced_cluster_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseAdvancedClusterFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_advanced_cluster_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_advanced_cluster_file_system oci_database_advanced_cluster_file_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAdvancedClusterFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAdvancedClusterFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_advanced_cluster_file_system',
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
    this._advancedClusterFileSystemId = config.advancedClusterFileSystemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_cluster_file_system_id - computed: false, optional: false, required: true
  private _advancedClusterFileSystemId?: string; 
  public get advancedClusterFileSystemId() {
    return this.getStringAttribute('advanced_cluster_file_system_id');
  }
  public set advancedClusterFileSystemId(value: string) {
    this._advancedClusterFileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedClusterFileSystemIdInput() {
    return this._advancedClusterFileSystemId;
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_mounted - computed: true, optional: false, required: false
  public get isMounted() {
    return this.getBooleanAttribute('is_mounted');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_in_gbs - computed: true, optional: false, required: false
  public get storageInGbs() {
    return this.getNumberAttribute('storage_in_gbs');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // vm_cluster_id - computed: true, optional: false, required: false
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_cluster_file_system_id: cdktf.stringToTerraform(this._advancedClusterFileSystemId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_cluster_file_system_id: {
        value: cdktf.stringToHclTerraform(this._advancedClusterFileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
