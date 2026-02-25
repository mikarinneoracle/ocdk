// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/email_email_return_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciEmailEmailReturnPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/email_email_return_path#email_return_path_id DataOciEmailEmailReturnPath#email_return_path_id}
  */
  readonly emailReturnPathId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/email_email_return_path oci_email_email_return_path}
*/
export class DataOciEmailEmailReturnPath extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_email_email_return_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciEmailEmailReturnPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciEmailEmailReturnPath to import
  * @param importFromId The id of the existing DataOciEmailEmailReturnPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/email_email_return_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciEmailEmailReturnPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_email_email_return_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/email_email_return_path oci_email_email_return_path} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciEmailEmailReturnPathConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciEmailEmailReturnPathConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_email_email_return_path',
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
    this._emailReturnPathId = config.emailReturnPathId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cname_record_value - computed: true, optional: false, required: false
  public get cnameRecordValue() {
    return this.getStringAttribute('cname_record_value');
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

  // dns_subdomain_name - computed: true, optional: false, required: false
  public get dnsSubdomainName() {
    return this.getStringAttribute('dns_subdomain_name');
  }

  // email_return_path_id - computed: false, optional: false, required: true
  private _emailReturnPathId?: string; 
  public get emailReturnPathId() {
    return this.getStringAttribute('email_return_path_id');
  }
  public set emailReturnPathId(value: string) {
    this._emailReturnPathId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailReturnPathIdInput() {
    return this._emailReturnPathId;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_resource_id - computed: true, optional: false, required: false
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_return_path_id: cdktf.stringToTerraform(this._emailReturnPathId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_return_path_id: {
        value: cdktf.stringToHclTerraform(this._emailReturnPathId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
