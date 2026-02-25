// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/opensearch_opensearch_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpensearchOpensearchClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}
  */
  readonly opensearchClusterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}
*/
export class DataOciOpensearchOpensearchCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opensearch_opensearch_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpensearchOpensearchCluster to import
  * @param importFromId The id of the existing DataOciOpensearchOpensearchCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpensearchOpensearchCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opensearch_opensearch_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpensearchOpensearchClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpensearchOpensearchClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opensearch_opensearch_cluster',
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
    this._opensearchClusterId = config.opensearchClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domains - computed: true, optional: false, required: false
  public get availabilityDomains() {
    return this.getListAttribute('availability_domains');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_node_count - computed: true, optional: false, required: false
  public get dataNodeCount() {
    return this.getNumberAttribute('data_node_count');
  }

  // data_node_host_bare_metal_shape - computed: true, optional: false, required: false
  public get dataNodeHostBareMetalShape() {
    return this.getStringAttribute('data_node_host_bare_metal_shape');
  }

  // data_node_host_memory_gb - computed: true, optional: false, required: false
  public get dataNodeHostMemoryGb() {
    return this.getNumberAttribute('data_node_host_memory_gb');
  }

  // data_node_host_ocpu_count - computed: true, optional: false, required: false
  public get dataNodeHostOcpuCount() {
    return this.getNumberAttribute('data_node_host_ocpu_count');
  }

  // data_node_host_type - computed: true, optional: false, required: false
  public get dataNodeHostType() {
    return this.getStringAttribute('data_node_host_type');
  }

  // data_node_storage_gb - computed: true, optional: false, required: false
  public get dataNodeStorageGb() {
    return this.getNumberAttribute('data_node_storage_gb');
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // master_node_count - computed: true, optional: false, required: false
  public get masterNodeCount() {
    return this.getNumberAttribute('master_node_count');
  }

  // master_node_host_bare_metal_shape - computed: true, optional: false, required: false
  public get masterNodeHostBareMetalShape() {
    return this.getStringAttribute('master_node_host_bare_metal_shape');
  }

  // master_node_host_memory_gb - computed: true, optional: false, required: false
  public get masterNodeHostMemoryGb() {
    return this.getNumberAttribute('master_node_host_memory_gb');
  }

  // master_node_host_ocpu_count - computed: true, optional: false, required: false
  public get masterNodeHostOcpuCount() {
    return this.getNumberAttribute('master_node_host_ocpu_count');
  }

  // master_node_host_type - computed: true, optional: false, required: false
  public get masterNodeHostType() {
    return this.getStringAttribute('master_node_host_type');
  }

  // opendashboard_fqdn - computed: true, optional: false, required: false
  public get opendashboardFqdn() {
    return this.getStringAttribute('opendashboard_fqdn');
  }

  // opendashboard_node_count - computed: true, optional: false, required: false
  public get opendashboardNodeCount() {
    return this.getNumberAttribute('opendashboard_node_count');
  }

  // opendashboard_node_host_memory_gb - computed: true, optional: false, required: false
  public get opendashboardNodeHostMemoryGb() {
    return this.getNumberAttribute('opendashboard_node_host_memory_gb');
  }

  // opendashboard_node_host_ocpu_count - computed: true, optional: false, required: false
  public get opendashboardNodeHostOcpuCount() {
    return this.getNumberAttribute('opendashboard_node_host_ocpu_count');
  }

  // opendashboard_private_ip - computed: true, optional: false, required: false
  public get opendashboardPrivateIp() {
    return this.getStringAttribute('opendashboard_private_ip');
  }

  // opensearch_cluster_id - computed: false, optional: false, required: true
  private _opensearchClusterId?: string; 
  public get opensearchClusterId() {
    return this.getStringAttribute('opensearch_cluster_id');
  }
  public set opensearchClusterId(value: string) {
    this._opensearchClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchClusterIdInput() {
    return this._opensearchClusterId;
  }

  // opensearch_fqdn - computed: true, optional: false, required: false
  public get opensearchFqdn() {
    return this.getStringAttribute('opensearch_fqdn');
  }

  // opensearch_private_ip - computed: true, optional: false, required: false
  public get opensearchPrivateIp() {
    return this.getStringAttribute('opensearch_private_ip');
  }

  // security_master_user_name - computed: true, optional: false, required: false
  public get securityMasterUserName() {
    return this.getStringAttribute('security_master_user_name');
  }

  // security_master_user_password_hash - computed: true, optional: false, required: false
  public get securityMasterUserPasswordHash() {
    return this.getStringAttribute('security_master_user_password_hash');
  }

  // security_mode - computed: true, optional: false, required: false
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_compartment_id - computed: true, optional: false, required: false
  public get subnetCompartmentId() {
    return this.getStringAttribute('subnet_compartment_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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

  // time_deleted - computed: true, optional: false, required: false
  public get timeDeleted() {
    return this.getStringAttribute('time_deleted');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_storage_gb - computed: true, optional: false, required: false
  public get totalStorageGb() {
    return this.getNumberAttribute('total_storage_gb');
  }

  // vcn_compartment_id - computed: true, optional: false, required: false
  public get vcnCompartmentId() {
    return this.getStringAttribute('vcn_compartment_id');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      opensearch_cluster_id: cdktf.stringToTerraform(this._opensearchClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      opensearch_cluster_id: {
        value: cdktf.stringToHclTerraform(this._opensearchClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
