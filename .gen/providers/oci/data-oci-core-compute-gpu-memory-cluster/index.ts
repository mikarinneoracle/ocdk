// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/core_compute_gpu_memory_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreComputeGpuMemoryClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/core_compute_gpu_memory_cluster#compute_gpu_memory_cluster_id DataOciCoreComputeGpuMemoryCluster#compute_gpu_memory_cluster_id}
  */
  readonly computeGpuMemoryClusterId: string;
}
export interface DataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfig {
}

export function dataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfigToTerraform(struct?: DataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfigToHclTerraform(struct?: DataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_downsize_enabled - computed: true, optional: false, required: false
  public get isDownsizeEnabled() {
    return this.getBooleanAttribute('is_downsize_enabled');
  }

  // is_upsize_enabled - computed: true, optional: false, required: false
  public get isUpsizeEnabled() {
    return this.getBooleanAttribute('is_upsize_enabled');
  }

  // target_size - computed: true, optional: false, required: false
  public get targetSize() {
    return this.getStringAttribute('target_size');
  }
}

export class DataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfigOutputReference {
    return new DataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/core_compute_gpu_memory_cluster oci_core_compute_gpu_memory_cluster}
*/
export class DataOciCoreComputeGpuMemoryCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_gpu_memory_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreComputeGpuMemoryCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreComputeGpuMemoryCluster to import
  * @param importFromId The id of the existing DataOciCoreComputeGpuMemoryCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/core_compute_gpu_memory_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreComputeGpuMemoryCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_compute_gpu_memory_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/core_compute_gpu_memory_cluster oci_core_compute_gpu_memory_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreComputeGpuMemoryClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreComputeGpuMemoryClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_gpu_memory_cluster',
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
    this._computeGpuMemoryClusterId = config.computeGpuMemoryClusterId;
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

  // compute_cluster_id - computed: true, optional: false, required: false
  public get computeClusterId() {
    return this.getStringAttribute('compute_cluster_id');
  }

  // compute_gpu_memory_cluster_id - computed: false, optional: false, required: true
  private _computeGpuMemoryClusterId?: string; 
  public get computeGpuMemoryClusterId() {
    return this.getStringAttribute('compute_gpu_memory_cluster_id');
  }
  public set computeGpuMemoryClusterId(value: string) {
    this._computeGpuMemoryClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGpuMemoryClusterIdInput() {
    return this._computeGpuMemoryClusterId;
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gpu_memory_cluster_scale_config - computed: true, optional: false, required: false
  private _gpuMemoryClusterScaleConfig = new DataOciCoreComputeGpuMemoryClusterGpuMemoryClusterScaleConfigList(this, "gpu_memory_cluster_scale_config", false);
  public get gpuMemoryClusterScaleConfig() {
    return this._gpuMemoryClusterScaleConfig;
  }

  // gpu_memory_fabric_id - computed: true, optional: false, required: false
  public get gpuMemoryFabricId() {
    return this.getStringAttribute('gpu_memory_fabric_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_configuration_id - computed: true, optional: false, required: false
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
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
      compute_gpu_memory_cluster_id: cdktf.stringToTerraform(this._computeGpuMemoryClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_gpu_memory_cluster_id: {
        value: cdktf.stringToHclTerraform(this._computeGpuMemoryClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
