// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchOpensearchClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}
  */
  readonly dataNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}
  */
  readonly dataNodeHostBareMetalShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}
  */
  readonly dataNodeHostMemoryGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}
  */
  readonly dataNodeHostOcpuCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}
  */
  readonly dataNodeHostType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}
  */
  readonly dataNodeStorageGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}
  */
  readonly masterNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}
  */
  readonly masterNodeHostBareMetalShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}
  */
  readonly masterNodeHostMemoryGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}
  */
  readonly masterNodeHostOcpuCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}
  */
  readonly masterNodeHostType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}
  */
  readonly opendashboardNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}
  */
  readonly opendashboardNodeHostMemoryGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}
  */
  readonly opendashboardNodeHostOcpuCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}
  */
  readonly securityMasterUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}
  */
  readonly securityMasterUserPasswordHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}
  */
  readonly softwareVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}
  */
  readonly subnetCompartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}
  */
  readonly vcnCompartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}
  */
  readonly vcnId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#timeouts OpensearchOpensearchCluster#timeouts}
  */
  readonly timeouts?: OpensearchOpensearchClusterTimeouts;
}
export interface OpensearchOpensearchClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}
  */
  readonly update?: string;
}

export function opensearchOpensearchClusterTimeoutsToTerraform(struct?: OpensearchOpensearchClusterTimeouts | cdktf.IResolvable): any {
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


export function opensearchOpensearchClusterTimeoutsToHclTerraform(struct?: OpensearchOpensearchClusterTimeouts | cdktf.IResolvable): any {
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

export class OpensearchOpensearchClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchOpensearchClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpensearchOpensearchClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}
*/
export class OpensearchOpensearchCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opensearch_opensearch_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchOpensearchCluster to import
  * @param importFromId The id of the existing OpensearchOpensearchCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchOpensearchCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opensearch_opensearch_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchOpensearchClusterConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchOpensearchClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opensearch_opensearch_cluster',
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
    this._compartmentId = config.compartmentId;
    this._dataNodeCount = config.dataNodeCount;
    this._dataNodeHostBareMetalShape = config.dataNodeHostBareMetalShape;
    this._dataNodeHostMemoryGb = config.dataNodeHostMemoryGb;
    this._dataNodeHostOcpuCount = config.dataNodeHostOcpuCount;
    this._dataNodeHostType = config.dataNodeHostType;
    this._dataNodeStorageGb = config.dataNodeStorageGb;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._masterNodeCount = config.masterNodeCount;
    this._masterNodeHostBareMetalShape = config.masterNodeHostBareMetalShape;
    this._masterNodeHostMemoryGb = config.masterNodeHostMemoryGb;
    this._masterNodeHostOcpuCount = config.masterNodeHostOcpuCount;
    this._masterNodeHostType = config.masterNodeHostType;
    this._opendashboardNodeCount = config.opendashboardNodeCount;
    this._opendashboardNodeHostMemoryGb = config.opendashboardNodeHostMemoryGb;
    this._opendashboardNodeHostOcpuCount = config.opendashboardNodeHostOcpuCount;
    this._securityMasterUserName = config.securityMasterUserName;
    this._securityMasterUserPasswordHash = config.securityMasterUserPasswordHash;
    this._securityMode = config.securityMode;
    this._softwareVersion = config.softwareVersion;
    this._subnetCompartmentId = config.subnetCompartmentId;
    this._subnetId = config.subnetId;
    this._systemTags = config.systemTags;
    this._vcnCompartmentId = config.vcnCompartmentId;
    this._vcnId = config.vcnId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domains - computed: true, optional: false, required: false
  public get availabilityDomains() {
    return this.getListAttribute('availability_domains');
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

  // data_node_count - computed: false, optional: false, required: true
  private _dataNodeCount?: number; 
  public get dataNodeCount() {
    return this.getNumberAttribute('data_node_count');
  }
  public set dataNodeCount(value: number) {
    this._dataNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeCountInput() {
    return this._dataNodeCount;
  }

  // data_node_host_bare_metal_shape - computed: true, optional: true, required: false
  private _dataNodeHostBareMetalShape?: string; 
  public get dataNodeHostBareMetalShape() {
    return this.getStringAttribute('data_node_host_bare_metal_shape');
  }
  public set dataNodeHostBareMetalShape(value: string) {
    this._dataNodeHostBareMetalShape = value;
  }
  public resetDataNodeHostBareMetalShape() {
    this._dataNodeHostBareMetalShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeHostBareMetalShapeInput() {
    return this._dataNodeHostBareMetalShape;
  }

  // data_node_host_memory_gb - computed: false, optional: false, required: true
  private _dataNodeHostMemoryGb?: number; 
  public get dataNodeHostMemoryGb() {
    return this.getNumberAttribute('data_node_host_memory_gb');
  }
  public set dataNodeHostMemoryGb(value: number) {
    this._dataNodeHostMemoryGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeHostMemoryGbInput() {
    return this._dataNodeHostMemoryGb;
  }

  // data_node_host_ocpu_count - computed: false, optional: false, required: true
  private _dataNodeHostOcpuCount?: number; 
  public get dataNodeHostOcpuCount() {
    return this.getNumberAttribute('data_node_host_ocpu_count');
  }
  public set dataNodeHostOcpuCount(value: number) {
    this._dataNodeHostOcpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeHostOcpuCountInput() {
    return this._dataNodeHostOcpuCount;
  }

  // data_node_host_type - computed: false, optional: false, required: true
  private _dataNodeHostType?: string; 
  public get dataNodeHostType() {
    return this.getStringAttribute('data_node_host_type');
  }
  public set dataNodeHostType(value: string) {
    this._dataNodeHostType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeHostTypeInput() {
    return this._dataNodeHostType;
  }

  // data_node_storage_gb - computed: false, optional: false, required: true
  private _dataNodeStorageGb?: number; 
  public get dataNodeStorageGb() {
    return this.getNumberAttribute('data_node_storage_gb');
  }
  public set dataNodeStorageGb(value: number) {
    this._dataNodeStorageGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeStorageGbInput() {
    return this._dataNodeStorageGb;
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // master_node_count - computed: false, optional: false, required: true
  private _masterNodeCount?: number; 
  public get masterNodeCount() {
    return this.getNumberAttribute('master_node_count');
  }
  public set masterNodeCount(value: number) {
    this._masterNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeCountInput() {
    return this._masterNodeCount;
  }

  // master_node_host_bare_metal_shape - computed: true, optional: true, required: false
  private _masterNodeHostBareMetalShape?: string; 
  public get masterNodeHostBareMetalShape() {
    return this.getStringAttribute('master_node_host_bare_metal_shape');
  }
  public set masterNodeHostBareMetalShape(value: string) {
    this._masterNodeHostBareMetalShape = value;
  }
  public resetMasterNodeHostBareMetalShape() {
    this._masterNodeHostBareMetalShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeHostBareMetalShapeInput() {
    return this._masterNodeHostBareMetalShape;
  }

  // master_node_host_memory_gb - computed: false, optional: false, required: true
  private _masterNodeHostMemoryGb?: number; 
  public get masterNodeHostMemoryGb() {
    return this.getNumberAttribute('master_node_host_memory_gb');
  }
  public set masterNodeHostMemoryGb(value: number) {
    this._masterNodeHostMemoryGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeHostMemoryGbInput() {
    return this._masterNodeHostMemoryGb;
  }

  // master_node_host_ocpu_count - computed: false, optional: false, required: true
  private _masterNodeHostOcpuCount?: number; 
  public get masterNodeHostOcpuCount() {
    return this.getNumberAttribute('master_node_host_ocpu_count');
  }
  public set masterNodeHostOcpuCount(value: number) {
    this._masterNodeHostOcpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeHostOcpuCountInput() {
    return this._masterNodeHostOcpuCount;
  }

  // master_node_host_type - computed: false, optional: false, required: true
  private _masterNodeHostType?: string; 
  public get masterNodeHostType() {
    return this.getStringAttribute('master_node_host_type');
  }
  public set masterNodeHostType(value: string) {
    this._masterNodeHostType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeHostTypeInput() {
    return this._masterNodeHostType;
  }

  // opendashboard_fqdn - computed: true, optional: false, required: false
  public get opendashboardFqdn() {
    return this.getStringAttribute('opendashboard_fqdn');
  }

  // opendashboard_node_count - computed: false, optional: false, required: true
  private _opendashboardNodeCount?: number; 
  public get opendashboardNodeCount() {
    return this.getNumberAttribute('opendashboard_node_count');
  }
  public set opendashboardNodeCount(value: number) {
    this._opendashboardNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opendashboardNodeCountInput() {
    return this._opendashboardNodeCount;
  }

  // opendashboard_node_host_memory_gb - computed: false, optional: false, required: true
  private _opendashboardNodeHostMemoryGb?: number; 
  public get opendashboardNodeHostMemoryGb() {
    return this.getNumberAttribute('opendashboard_node_host_memory_gb');
  }
  public set opendashboardNodeHostMemoryGb(value: number) {
    this._opendashboardNodeHostMemoryGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opendashboardNodeHostMemoryGbInput() {
    return this._opendashboardNodeHostMemoryGb;
  }

  // opendashboard_node_host_ocpu_count - computed: false, optional: false, required: true
  private _opendashboardNodeHostOcpuCount?: number; 
  public get opendashboardNodeHostOcpuCount() {
    return this.getNumberAttribute('opendashboard_node_host_ocpu_count');
  }
  public set opendashboardNodeHostOcpuCount(value: number) {
    this._opendashboardNodeHostOcpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opendashboardNodeHostOcpuCountInput() {
    return this._opendashboardNodeHostOcpuCount;
  }

  // opendashboard_private_ip - computed: true, optional: false, required: false
  public get opendashboardPrivateIp() {
    return this.getStringAttribute('opendashboard_private_ip');
  }

  // opensearch_fqdn - computed: true, optional: false, required: false
  public get opensearchFqdn() {
    return this.getStringAttribute('opensearch_fqdn');
  }

  // opensearch_private_ip - computed: true, optional: false, required: false
  public get opensearchPrivateIp() {
    return this.getStringAttribute('opensearch_private_ip');
  }

  // security_master_user_name - computed: true, optional: true, required: false
  private _securityMasterUserName?: string; 
  public get securityMasterUserName() {
    return this.getStringAttribute('security_master_user_name');
  }
  public set securityMasterUserName(value: string) {
    this._securityMasterUserName = value;
  }
  public resetSecurityMasterUserName() {
    this._securityMasterUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityMasterUserNameInput() {
    return this._securityMasterUserName;
  }

  // security_master_user_password_hash - computed: true, optional: true, required: false
  private _securityMasterUserPasswordHash?: string; 
  public get securityMasterUserPasswordHash() {
    return this.getStringAttribute('security_master_user_password_hash');
  }
  public set securityMasterUserPasswordHash(value: string) {
    this._securityMasterUserPasswordHash = value;
  }
  public resetSecurityMasterUserPasswordHash() {
    this._securityMasterUserPasswordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityMasterUserPasswordHashInput() {
    return this._securityMasterUserPasswordHash;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // software_version - computed: false, optional: false, required: true
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_compartment_id - computed: false, optional: false, required: true
  private _subnetCompartmentId?: string; 
  public get subnetCompartmentId() {
    return this.getStringAttribute('subnet_compartment_id');
  }
  public set subnetCompartmentId(value: string) {
    this._subnetCompartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCompartmentIdInput() {
    return this._subnetCompartmentId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
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

  // vcn_compartment_id - computed: false, optional: false, required: true
  private _vcnCompartmentId?: string; 
  public get vcnCompartmentId() {
    return this.getStringAttribute('vcn_compartment_id');
  }
  public set vcnCompartmentId(value: string) {
    this._vcnCompartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnCompartmentIdInput() {
    return this._vcnCompartmentId;
  }

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpensearchOpensearchClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpensearchOpensearchClusterTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      data_node_count: cdktf.numberToTerraform(this._dataNodeCount),
      data_node_host_bare_metal_shape: cdktf.stringToTerraform(this._dataNodeHostBareMetalShape),
      data_node_host_memory_gb: cdktf.numberToTerraform(this._dataNodeHostMemoryGb),
      data_node_host_ocpu_count: cdktf.numberToTerraform(this._dataNodeHostOcpuCount),
      data_node_host_type: cdktf.stringToTerraform(this._dataNodeHostType),
      data_node_storage_gb: cdktf.numberToTerraform(this._dataNodeStorageGb),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      master_node_count: cdktf.numberToTerraform(this._masterNodeCount),
      master_node_host_bare_metal_shape: cdktf.stringToTerraform(this._masterNodeHostBareMetalShape),
      master_node_host_memory_gb: cdktf.numberToTerraform(this._masterNodeHostMemoryGb),
      master_node_host_ocpu_count: cdktf.numberToTerraform(this._masterNodeHostOcpuCount),
      master_node_host_type: cdktf.stringToTerraform(this._masterNodeHostType),
      opendashboard_node_count: cdktf.numberToTerraform(this._opendashboardNodeCount),
      opendashboard_node_host_memory_gb: cdktf.numberToTerraform(this._opendashboardNodeHostMemoryGb),
      opendashboard_node_host_ocpu_count: cdktf.numberToTerraform(this._opendashboardNodeHostOcpuCount),
      security_master_user_name: cdktf.stringToTerraform(this._securityMasterUserName),
      security_master_user_password_hash: cdktf.stringToTerraform(this._securityMasterUserPasswordHash),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      subnet_compartment_id: cdktf.stringToTerraform(this._subnetCompartmentId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemTags),
      vcn_compartment_id: cdktf.stringToTerraform(this._vcnCompartmentId),
      vcn_id: cdktf.stringToTerraform(this._vcnId),
      timeouts: opensearchOpensearchClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_count: {
        value: cdktf.numberToHclTerraform(this._dataNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_host_bare_metal_shape: {
        value: cdktf.stringToHclTerraform(this._dataNodeHostBareMetalShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_host_memory_gb: {
        value: cdktf.numberToHclTerraform(this._dataNodeHostMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_host_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._dataNodeHostOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_host_type: {
        value: cdktf.stringToHclTerraform(this._dataNodeHostType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_storage_gb: {
        value: cdktf.numberToHclTerraform(this._dataNodeStorageGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      master_node_count: {
        value: cdktf.numberToHclTerraform(this._masterNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_host_bare_metal_shape: {
        value: cdktf.stringToHclTerraform(this._masterNodeHostBareMetalShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_node_host_memory_gb: {
        value: cdktf.numberToHclTerraform(this._masterNodeHostMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_host_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._masterNodeHostOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_host_type: {
        value: cdktf.stringToHclTerraform(this._masterNodeHostType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opendashboard_node_count: {
        value: cdktf.numberToHclTerraform(this._opendashboardNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      opendashboard_node_host_memory_gb: {
        value: cdktf.numberToHclTerraform(this._opendashboardNodeHostMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      opendashboard_node_host_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._opendashboardNodeHostOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_master_user_name: {
        value: cdktf.stringToHclTerraform(this._securityMasterUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_master_user_password_hash: {
        value: cdktf.stringToHclTerraform(this._securityMasterUserPasswordHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_compartment_id: {
        value: cdktf.stringToHclTerraform(this._subnetCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vcn_compartment_id: {
        value: cdktf.stringToHclTerraform(this._vcnCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcn_id: {
        value: cdktf.stringToHclTerraform(this._vcnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: opensearchOpensearchClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchOpensearchClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
