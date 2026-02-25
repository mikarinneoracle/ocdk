// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_server_open_alert_history
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_server_open_alert_history#cloud_exadata_storage_server_id DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistory#cloud_exadata_storage_server_id}
  */
  readonly cloudExadataStorageServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_server_open_alert_history#id DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlerts {
}

export function dataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlertsToTerraform(struct?: DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlertsToHclTerraform(struct?: DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // time_start_at - computed: true, optional: false, required: false
  public get timeStartAt() {
    return this.getStringAttribute('time_start_at');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlertsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlertsOutputReference {
    return new DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_server_open_alert_history oci_database_management_cloud_exadata_storage_server_open_alert_history}
*/
export class DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_cloud_exadata_storage_server_open_alert_history";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistory to import
  * @param importFromId The id of the existing DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_server_open_alert_history#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_cloud_exadata_storage_server_open_alert_history", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_cloud_exadata_storage_server_open_alert_history oci_database_management_cloud_exadata_storage_server_open_alert_history} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_cloud_exadata_storage_server_open_alert_history',
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
    this._cloudExadataStorageServerId = config.cloudExadataStorageServerId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts - computed: true, optional: false, required: false
  private _alerts = new DataOciDatabaseManagementCloudExadataStorageServerOpenAlertHistoryAlertsList(this, "alerts", false);
  public get alerts() {
    return this._alerts;
  }

  // cloud_exadata_storage_server_id - computed: false, optional: false, required: true
  private _cloudExadataStorageServerId?: string; 
  public get cloudExadataStorageServerId() {
    return this.getStringAttribute('cloud_exadata_storage_server_id');
  }
  public set cloudExadataStorageServerId(value: string) {
    this._cloudExadataStorageServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudExadataStorageServerIdInput() {
    return this._cloudExadataStorageServerId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_exadata_storage_server_id: cdktf.stringToTerraform(this._cloudExadataStorageServerId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_exadata_storage_server_id: {
        value: cdktf.stringToHclTerraform(this._cloudExadataStorageServerId),
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
