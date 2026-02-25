// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/email_email_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciEmailEmailDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/email_email_domain#email_domain_id DataOciEmailEmailDomain#email_domain_id}
  */
  readonly emailDomainId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/email_email_domain oci_email_email_domain}
*/
export class DataOciEmailEmailDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_email_email_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciEmailEmailDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciEmailEmailDomain to import
  * @param importFromId The id of the existing DataOciEmailEmailDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/email_email_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciEmailEmailDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_email_email_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/email_email_domain oci_email_email_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciEmailEmailDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciEmailEmailDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_email_email_domain',
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
    this._emailDomainId = config.emailDomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_dkim_id - computed: true, optional: false, required: false
  public get activeDkimId() {
    return this.getStringAttribute('active_dkim_id');
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

  // domain_verification_id - computed: true, optional: false, required: false
  public get domainVerificationId() {
    return this.getStringAttribute('domain_verification_id');
  }

  // domain_verification_status - computed: true, optional: false, required: false
  public get domainVerificationStatus() {
    return this.getStringAttribute('domain_verification_status');
  }

  // email_domain_id - computed: false, optional: false, required: true
  private _emailDomainId?: string; 
  public get emailDomainId() {
    return this.getStringAttribute('email_domain_id');
  }
  public set emailDomainId(value: string) {
    this._emailDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainIdInput() {
    return this._emailDomainId;
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

  // is_spf - computed: true, optional: false, required: false
  public get isSpf() {
    return this.getBooleanAttribute('is_spf');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_domain_id: cdktf.stringToTerraform(this._emailDomainId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_domain_id: {
        value: cdktf.stringToHclTerraform(this._emailDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
