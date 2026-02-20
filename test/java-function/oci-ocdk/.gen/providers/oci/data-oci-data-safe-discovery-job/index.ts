// https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/data_safe_discovery_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeDiscoveryJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/data_safe_discovery_job#discovery_job_id DataOciDataSafeDiscoveryJob#discovery_job_id}
  */
  readonly discoveryJobId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/data_safe_discovery_job oci_data_safe_discovery_job}
*/
export class DataOciDataSafeDiscoveryJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_discovery_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeDiscoveryJob to import
  * @param importFromId The id of the existing DataOciDataSafeDiscoveryJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/data_safe_discovery_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeDiscoveryJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_discovery_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/data_safe_discovery_job oci_data_safe_discovery_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeDiscoveryJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeDiscoveryJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_discovery_job',
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
    this._discoveryJobId = config.discoveryJobId;
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

  // discovery_job_id - computed: false, optional: false, required: true
  private _discoveryJobId?: string; 
  public get discoveryJobId() {
    return this.getStringAttribute('discovery_job_id');
  }
  public set discoveryJobId(value: string) {
    this._discoveryJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryJobIdInput() {
    return this._discoveryJobId;
  }

  // discovery_type - computed: true, optional: false, required: false
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_app_defined_relation_discovery_enabled - computed: true, optional: false, required: false
  public get isAppDefinedRelationDiscoveryEnabled() {
    return this.getBooleanAttribute('is_app_defined_relation_discovery_enabled');
  }

  // is_include_all_schemas - computed: true, optional: false, required: false
  public get isIncludeAllSchemas() {
    return this.getBooleanAttribute('is_include_all_schemas');
  }

  // is_include_all_sensitive_types - computed: true, optional: false, required: false
  public get isIncludeAllSensitiveTypes() {
    return this.getBooleanAttribute('is_include_all_sensitive_types');
  }

  // is_sample_data_collection_enabled - computed: true, optional: false, required: false
  public get isSampleDataCollectionEnabled() {
    return this.getBooleanAttribute('is_sample_data_collection_enabled');
  }

  // schemas_for_discovery - computed: true, optional: false, required: false
  public get schemasForDiscovery() {
    return this.getListAttribute('schemas_for_discovery');
  }

  // sensitive_data_model_id - computed: true, optional: false, required: false
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }

  // sensitive_type_ids_for_discovery - computed: true, optional: false, required: false
  public get sensitiveTypeIdsForDiscovery() {
    return this.getListAttribute('sensitive_type_ids_for_discovery');
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

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // total_columns_scanned - computed: true, optional: false, required: false
  public get totalColumnsScanned() {
    return this.getStringAttribute('total_columns_scanned');
  }

  // total_deleted_sensitive_columns - computed: true, optional: false, required: false
  public get totalDeletedSensitiveColumns() {
    return this.getStringAttribute('total_deleted_sensitive_columns');
  }

  // total_modified_sensitive_columns - computed: true, optional: false, required: false
  public get totalModifiedSensitiveColumns() {
    return this.getStringAttribute('total_modified_sensitive_columns');
  }

  // total_new_sensitive_columns - computed: true, optional: false, required: false
  public get totalNewSensitiveColumns() {
    return this.getStringAttribute('total_new_sensitive_columns');
  }

  // total_objects_scanned - computed: true, optional: false, required: false
  public get totalObjectsScanned() {
    return this.getStringAttribute('total_objects_scanned');
  }

  // total_schemas_scanned - computed: true, optional: false, required: false
  public get totalSchemasScanned() {
    return this.getStringAttribute('total_schemas_scanned');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      discovery_job_id: cdktf.stringToTerraform(this._discoveryJobId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      discovery_job_id: {
        value: cdktf.stringToHclTerraform(this._discoveryJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
