// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/core_dedicated_vm_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreDedicatedVmHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/core_dedicated_vm_host#dedicated_vm_host_id DataOciCoreDedicatedVmHost#dedicated_vm_host_id}
  */
  readonly dedicatedVmHostId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/core_dedicated_vm_host oci_core_dedicated_vm_host}
*/
export class DataOciCoreDedicatedVmHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_dedicated_vm_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreDedicatedVmHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreDedicatedVmHost to import
  * @param importFromId The id of the existing DataOciCoreDedicatedVmHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/core_dedicated_vm_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreDedicatedVmHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_dedicated_vm_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/core_dedicated_vm_host oci_core_dedicated_vm_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreDedicatedVmHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreDedicatedVmHostConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_dedicated_vm_host',
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
    this._dedicatedVmHostId = config.dedicatedVmHostId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // dedicated_vm_host_id - computed: false, optional: false, required: true
  private _dedicatedVmHostId?: string; 
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }
  public set dedicatedVmHostId(value: string) {
    this._dedicatedVmHostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedVmHostIdInput() {
    return this._dedicatedVmHostId;
  }

  // dedicated_vm_host_shape - computed: true, optional: false, required: false
  public get dedicatedVmHostShape() {
    return this.getStringAttribute('dedicated_vm_host_shape');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
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

  // remaining_memory_in_gbs - computed: true, optional: false, required: false
  public get remainingMemoryInGbs() {
    return this.getNumberAttribute('remaining_memory_in_gbs');
  }

  // remaining_ocpus - computed: true, optional: false, required: false
  public get remainingOcpus() {
    return this.getNumberAttribute('remaining_ocpus');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // total_memory_in_gbs - computed: true, optional: false, required: false
  public get totalMemoryInGbs() {
    return this.getNumberAttribute('total_memory_in_gbs');
  }

  // total_ocpus - computed: true, optional: false, required: false
  public get totalOcpus() {
    return this.getNumberAttribute('total_ocpus');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_vm_host_id: cdktf.stringToTerraform(this._dedicatedVmHostId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_vm_host_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedVmHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
