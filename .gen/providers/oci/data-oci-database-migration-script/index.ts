// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMigrationScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_script#id DataOciDatabaseMigrationScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_script#script_id DataOciDatabaseMigrationScript#script_id}
  */
  readonly scriptId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_script oci_database_migration_script}
*/
export class DataOciDatabaseMigrationScript extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMigrationScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMigrationScript to import
  * @param importFromId The id of the existing DataOciDatabaseMigrationScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMigrationScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_script oci_database_migration_script} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMigrationScriptConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMigrationScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_script',
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
    this._id = config.id;
    this._scriptId = config.scriptId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // script_id - computed: false, optional: false, required: true
  private _scriptId?: string; 
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      script_id: cdktf.stringToTerraform(this._scriptId),
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
      script_id: {
        value: cdktf.stringToHclTerraform(this._scriptId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
