// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/containerengine_cluster_public_api_endpoint_decommission_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciContainerengineClusterPublicApiEndpointDecommissionStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/containerengine_cluster_public_api_endpoint_decommission_status#cluster_id DataOciContainerengineClusterPublicApiEndpointDecommissionStatus#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/containerengine_cluster_public_api_endpoint_decommission_status#id DataOciContainerengineClusterPublicApiEndpointDecommissionStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/containerengine_cluster_public_api_endpoint_decommission_status oci_containerengine_cluster_public_api_endpoint_decommission_status}
*/
export class DataOciContainerengineClusterPublicApiEndpointDecommissionStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_containerengine_cluster_public_api_endpoint_decommission_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciContainerengineClusterPublicApiEndpointDecommissionStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciContainerengineClusterPublicApiEndpointDecommissionStatus to import
  * @param importFromId The id of the existing DataOciContainerengineClusterPublicApiEndpointDecommissionStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/containerengine_cluster_public_api_endpoint_decommission_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciContainerengineClusterPublicApiEndpointDecommissionStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_containerengine_cluster_public_api_endpoint_decommission_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/containerengine_cluster_public_api_endpoint_decommission_status oci_containerengine_cluster_public_api_endpoint_decommission_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciContainerengineClusterPublicApiEndpointDecommissionStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciContainerengineClusterPublicApiEndpointDecommissionStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_cluster_public_api_endpoint_decommission_status',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_decommission_rollback_deadline - computed: true, optional: false, required: false
  public get timeDecommissionRollbackDeadline() {
    return this.getStringAttribute('time_decommission_rollback_deadline');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
