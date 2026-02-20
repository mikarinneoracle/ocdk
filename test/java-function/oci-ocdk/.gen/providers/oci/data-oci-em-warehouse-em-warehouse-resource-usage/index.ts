// https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse_resource_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciEmWarehouseEmWarehouseResourceUsageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse_resource_usage#em_warehouse_id DataOciEmWarehouseEmWarehouseResourceUsage#em_warehouse_id}
  */
  readonly emWarehouseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse_resource_usage#id DataOciEmWarehouseEmWarehouseResourceUsage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciEmWarehouseEmWarehouseResourceUsageEmInstances {
}

export function dataOciEmWarehouseEmWarehouseResourceUsageEmInstancesToTerraform(struct?: DataOciEmWarehouseEmWarehouseResourceUsageEmInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciEmWarehouseEmWarehouseResourceUsageEmInstancesToHclTerraform(struct?: DataOciEmWarehouseEmWarehouseResourceUsageEmInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciEmWarehouseEmWarehouseResourceUsageEmInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciEmWarehouseEmWarehouseResourceUsageEmInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciEmWarehouseEmWarehouseResourceUsageEmInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // em_discoverer_url - computed: true, optional: false, required: false
  public get emDiscovererUrl() {
    return this.getStringAttribute('em_discoverer_url');
  }

  // em_host - computed: true, optional: false, required: false
  public get emHost() {
    return this.getStringAttribute('em_host');
  }

  // em_id - computed: true, optional: false, required: false
  public get emId() {
    return this.getStringAttribute('em_id');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }
}

export class DataOciEmWarehouseEmWarehouseResourceUsageEmInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciEmWarehouseEmWarehouseResourceUsageEmInstancesOutputReference {
    return new DataOciEmWarehouseEmWarehouseResourceUsageEmInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse_resource_usage oci_em_warehouse_em_warehouse_resource_usage}
*/
export class DataOciEmWarehouseEmWarehouseResourceUsage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_em_warehouse_em_warehouse_resource_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciEmWarehouseEmWarehouseResourceUsage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciEmWarehouseEmWarehouseResourceUsage to import
  * @param importFromId The id of the existing DataOciEmWarehouseEmWarehouseResourceUsage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse_resource_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciEmWarehouseEmWarehouseResourceUsage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_em_warehouse_em_warehouse_resource_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/em_warehouse_em_warehouse_resource_usage oci_em_warehouse_em_warehouse_resource_usage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciEmWarehouseEmWarehouseResourceUsageConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciEmWarehouseEmWarehouseResourceUsageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_em_warehouse_em_warehouse_resource_usage',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // em_instance_count - computed: true, optional: false, required: false
  public get emInstanceCount() {
    return this.getNumberAttribute('em_instance_count');
  }

  // em_instances - computed: true, optional: false, required: false
  private _emInstances = new DataOciEmWarehouseEmWarehouseResourceUsageEmInstancesList(this, "em_instances", false);
  public get emInstances() {
    return this._emInstances;
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

  // operations_insights_warehouse_id - computed: true, optional: false, required: false
  public get operationsInsightsWarehouseId() {
    return this.getStringAttribute('operations_insights_warehouse_id');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // targets_count - computed: true, optional: false, required: false
  public get targetsCount() {
    return this.getNumberAttribute('targets_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      em_warehouse_id: cdktf.stringToTerraform(this._emWarehouseId),
      id: cdktf.stringToTerraform(this._id),
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
