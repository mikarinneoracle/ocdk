// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciEmWarehouseEmWarehouseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse#em_warehouse_id DataOciEmWarehouseEmWarehouse#em_warehouse_id}
  */
  readonly emWarehouseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse oci_em_warehouse_em_warehouse}
*/
export class DataOciEmWarehouseEmWarehouse extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_em_warehouse_em_warehouse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciEmWarehouseEmWarehouse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciEmWarehouseEmWarehouse to import
  * @param importFromId The id of the existing DataOciEmWarehouseEmWarehouse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciEmWarehouseEmWarehouse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_em_warehouse_em_warehouse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse oci_em_warehouse_em_warehouse} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciEmWarehouseEmWarehouseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciEmWarehouseEmWarehouseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_em_warehouse_em_warehouse',
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
    this._emWarehouseId = config.emWarehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // em_bridge_id - computed: true, optional: false, required: false
  public get emBridgeId() {
    return this.getStringAttribute('em_bridge_id');
  }

  // em_warehouse_id - computed: false, optional: false, required: true
  private _emWarehouseId?: string; 
  public get emWarehouseId() {
    return this.getStringAttribute('em_warehouse_id');
  }
  public set emWarehouseId(value: string) {
    this._emWarehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emWarehouseIdInput() {
    return this._emWarehouseId;
  }

  // em_warehouse_type - computed: true, optional: false, required: false
  public get emWarehouseType() {
    return this.getStringAttribute('em_warehouse_type');
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

  // latest_etl_run_message - computed: true, optional: false, required: false
  public get latestEtlRunMessage() {
    return this.getStringAttribute('latest_etl_run_message');
  }

  // latest_etl_run_status - computed: true, optional: false, required: false
  public get latestEtlRunStatus() {
    return this.getStringAttribute('latest_etl_run_status');
  }

  // latest_etl_run_time - computed: true, optional: false, required: false
  public get latestEtlRunTime() {
    return this.getStringAttribute('latest_etl_run_time');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // operations_insights_warehouse_id - computed: true, optional: false, required: false
  public get operationsInsightsWarehouseId() {
    return this.getStringAttribute('operations_insights_warehouse_id');
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
      em_warehouse_id: cdktf.stringToTerraform(this._emWarehouseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      em_warehouse_id: {
        value: cdktf.stringToHclTerraform(this._emWarehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
