// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementCloudExadataStorageConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_connector#cloud_exadata_storage_connector_id DataOciDatabaseManagementCloudExadataStorageConnector#cloud_exadata_storage_connector_id}
  */
  readonly cloudExadataStorageConnectorId: string;
}
export interface DataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfo {
}

export function dataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfoToTerraform(struct?: DataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfoToHclTerraform(struct?: DataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // ssl_trust_store_location - computed: true, optional: false, required: false
  public get sslTrustStoreLocation() {
    return this.getStringAttribute('ssl_trust_store_location');
  }

  // ssl_trust_store_password - computed: true, optional: false, required: false
  public get sslTrustStorePassword() {
    return this.getStringAttribute('ssl_trust_store_password');
  }

  // ssl_trust_store_type - computed: true, optional: false, required: false
  public get sslTrustStoreType() {
    return this.getStringAttribute('ssl_trust_store_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfoOutputReference {
    return new DataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_connector oci_database_management_cloud_exadata_storage_connector}
*/
export class DataOciDatabaseManagementCloudExadataStorageConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_cloud_exadata_storage_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementCloudExadataStorageConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementCloudExadataStorageConnector to import
  * @param importFromId The id of the existing DataOciDatabaseManagementCloudExadataStorageConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementCloudExadataStorageConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_cloud_exadata_storage_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_connector oci_database_management_cloud_exadata_storage_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementCloudExadataStorageConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementCloudExadataStorageConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_cloud_exadata_storage_connector',
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
    this._cloudExadataStorageConnectorId = config.cloudExadataStorageConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_details - computed: true, optional: false, required: false
  private _additionalDetails = new cdktf.StringMap(this, "additional_details");
  public get additionalDetails() {
    return this._additionalDetails;
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // cloud_exadata_storage_connector_id - computed: false, optional: false, required: true
  private _cloudExadataStorageConnectorId?: string; 
  public get cloudExadataStorageConnectorId() {
    return this.getStringAttribute('cloud_exadata_storage_connector_id');
  }
  public set cloudExadataStorageConnectorId(value: string) {
    this._cloudExadataStorageConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudExadataStorageConnectorIdInput() {
    return this._cloudExadataStorageConnectorId;
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // credential_info - computed: true, optional: false, required: false
  private _credentialInfo = new DataOciDatabaseManagementCloudExadataStorageConnectorCredentialInfoList(this, "credential_info", false);
  public get credentialInfo() {
    return this._credentialInfo;
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

  // exadata_infrastructure_id - computed: true, optional: false, required: false
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_server_id - computed: true, optional: false, required: false
  public get storageServerId() {
    return this.getStringAttribute('storage_server_id');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_exadata_storage_connector_id: cdktf.stringToTerraform(this._cloudExadataStorageConnectorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_exadata_storage_connector_id: {
        value: cdktf.stringToHclTerraform(this._cloudExadataStorageConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
