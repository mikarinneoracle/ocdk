// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementCloudExadataStorageConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#agent_id DatabaseManagementCloudExadataStorageConnector#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#connection_uri DatabaseManagementCloudExadataStorageConnector#connection_uri}
  */
  readonly connectionUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#defined_tags DatabaseManagementCloudExadataStorageConnector#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#display_name DatabaseManagementCloudExadataStorageConnector#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#freeform_tags DatabaseManagementCloudExadataStorageConnector#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#id DatabaseManagementCloudExadataStorageConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#storage_server_id DatabaseManagementCloudExadataStorageConnector#storage_server_id}
  */
  readonly storageServerId: string;
  /**
  * credential_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#credential_info DatabaseManagementCloudExadataStorageConnector#credential_info}
  */
  readonly credentialInfo: DatabaseManagementCloudExadataStorageConnectorCredentialInfo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#timeouts DatabaseManagementCloudExadataStorageConnector#timeouts}
  */
  readonly timeouts?: DatabaseManagementCloudExadataStorageConnectorTimeouts;
}
export interface DatabaseManagementCloudExadataStorageConnectorCredentialInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#password DatabaseManagementCloudExadataStorageConnector#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#ssl_trust_store_location DatabaseManagementCloudExadataStorageConnector#ssl_trust_store_location}
  */
  readonly sslTrustStoreLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#ssl_trust_store_password DatabaseManagementCloudExadataStorageConnector#ssl_trust_store_password}
  */
  readonly sslTrustStorePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#ssl_trust_store_type DatabaseManagementCloudExadataStorageConnector#ssl_trust_store_type}
  */
  readonly sslTrustStoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#username DatabaseManagementCloudExadataStorageConnector#username}
  */
  readonly username: string;
}

export function databaseManagementCloudExadataStorageConnectorCredentialInfoToTerraform(struct?: DatabaseManagementCloudExadataStorageConnectorCredentialInfoOutputReference | DatabaseManagementCloudExadataStorageConnectorCredentialInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssl_trust_store_location: cdktf.stringToTerraform(struct!.sslTrustStoreLocation),
    ssl_trust_store_password: cdktf.stringToTerraform(struct!.sslTrustStorePassword),
    ssl_trust_store_type: cdktf.stringToTerraform(struct!.sslTrustStoreType),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseManagementCloudExadataStorageConnectorCredentialInfoToHclTerraform(struct?: DatabaseManagementCloudExadataStorageConnectorCredentialInfoOutputReference | DatabaseManagementCloudExadataStorageConnectorCredentialInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_trust_store_location: {
      value: cdktf.stringToHclTerraform(struct!.sslTrustStoreLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_trust_store_password: {
      value: cdktf.stringToHclTerraform(struct!.sslTrustStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_trust_store_type: {
      value: cdktf.stringToHclTerraform(struct!.sslTrustStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementCloudExadataStorageConnectorCredentialInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementCloudExadataStorageConnectorCredentialInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sslTrustStoreLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTrustStoreLocation = this._sslTrustStoreLocation;
    }
    if (this._sslTrustStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTrustStorePassword = this._sslTrustStorePassword;
    }
    if (this._sslTrustStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTrustStoreType = this._sslTrustStoreType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementCloudExadataStorageConnectorCredentialInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sslTrustStoreLocation = undefined;
      this._sslTrustStorePassword = undefined;
      this._sslTrustStoreType = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sslTrustStoreLocation = value.sslTrustStoreLocation;
      this._sslTrustStorePassword = value.sslTrustStorePassword;
      this._sslTrustStoreType = value.sslTrustStoreType;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssl_trust_store_location - computed: true, optional: true, required: false
  private _sslTrustStoreLocation?: string; 
  public get sslTrustStoreLocation() {
    return this.getStringAttribute('ssl_trust_store_location');
  }
  public set sslTrustStoreLocation(value: string) {
    this._sslTrustStoreLocation = value;
  }
  public resetSslTrustStoreLocation() {
    this._sslTrustStoreLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTrustStoreLocationInput() {
    return this._sslTrustStoreLocation;
  }

  // ssl_trust_store_password - computed: true, optional: true, required: false
  private _sslTrustStorePassword?: string; 
  public get sslTrustStorePassword() {
    return this.getStringAttribute('ssl_trust_store_password');
  }
  public set sslTrustStorePassword(value: string) {
    this._sslTrustStorePassword = value;
  }
  public resetSslTrustStorePassword() {
    this._sslTrustStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTrustStorePasswordInput() {
    return this._sslTrustStorePassword;
  }

  // ssl_trust_store_type - computed: true, optional: true, required: false
  private _sslTrustStoreType?: string; 
  public get sslTrustStoreType() {
    return this.getStringAttribute('ssl_trust_store_type');
  }
  public set sslTrustStoreType(value: string) {
    this._sslTrustStoreType = value;
  }
  public resetSslTrustStoreType() {
    this._sslTrustStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTrustStoreTypeInput() {
    return this._sslTrustStoreType;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseManagementCloudExadataStorageConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#create DatabaseManagementCloudExadataStorageConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#delete DatabaseManagementCloudExadataStorageConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#update DatabaseManagementCloudExadataStorageConnector#update}
  */
  readonly update?: string;
}

export function databaseManagementCloudExadataStorageConnectorTimeoutsToTerraform(struct?: DatabaseManagementCloudExadataStorageConnectorTimeouts | cdktf.IResolvable): any {
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


export function databaseManagementCloudExadataStorageConnectorTimeoutsToHclTerraform(struct?: DatabaseManagementCloudExadataStorageConnectorTimeouts | cdktf.IResolvable): any {
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

export class DatabaseManagementCloudExadataStorageConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementCloudExadataStorageConnectorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseManagementCloudExadataStorageConnectorTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector oci_database_management_cloud_exadata_storage_connector}
*/
export class DatabaseManagementCloudExadataStorageConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_cloud_exadata_storage_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementCloudExadataStorageConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementCloudExadataStorageConnector to import
  * @param importFromId The id of the existing DatabaseManagementCloudExadataStorageConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementCloudExadataStorageConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_cloud_exadata_storage_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_storage_connector oci_database_management_cloud_exadata_storage_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementCloudExadataStorageConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementCloudExadataStorageConnectorConfig) {
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
    this._agentId = config.agentId;
    this._connectionUri = config.connectionUri;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._storageServerId = config.storageServerId;
    this._credentialInfo.internalValue = config.credentialInfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_details - computed: true, optional: false, required: false
  private _additionalDetails = new cdktf.StringMap(this, "additional_details");
  public get additionalDetails() {
    return this._additionalDetails;
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // connection_uri - computed: false, optional: false, required: true
  private _connectionUri?: string; 
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }
  public set connectionUri(value: string) {
    this._connectionUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUriInput() {
    return this._connectionUri;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // exadata_infrastructure_id - computed: true, optional: false, required: false
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
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

  // storage_server_id - computed: false, optional: false, required: true
  private _storageServerId?: string; 
  public get storageServerId() {
    return this.getStringAttribute('storage_server_id');
  }
  public set storageServerId(value: string) {
    this._storageServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageServerIdInput() {
    return this._storageServerId;
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

  // credential_info - computed: false, optional: false, required: true
  private _credentialInfo = new DatabaseManagementCloudExadataStorageConnectorCredentialInfoOutputReference(this, "credential_info");
  public get credentialInfo() {
    return this._credentialInfo;
  }
  public putCredentialInfo(value: DatabaseManagementCloudExadataStorageConnectorCredentialInfo) {
    this._credentialInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInfoInput() {
    return this._credentialInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementCloudExadataStorageConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementCloudExadataStorageConnectorTimeouts) {
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
      agent_id: cdktf.stringToTerraform(this._agentId),
      connection_uri: cdktf.stringToTerraform(this._connectionUri),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      storage_server_id: cdktf.stringToTerraform(this._storageServerId),
      credential_info: databaseManagementCloudExadataStorageConnectorCredentialInfoToTerraform(this._credentialInfo.internalValue),
      timeouts: databaseManagementCloudExadataStorageConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_uri: {
        value: cdktf.stringToHclTerraform(this._connectionUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      storage_server_id: {
        value: cdktf.stringToHclTerraform(this._storageServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_info: {
        value: databaseManagementCloudExadataStorageConnectorCredentialInfoToHclTerraform(this._credentialInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementCloudExadataStorageConnectorCredentialInfoList",
      },
      timeouts: {
        value: databaseManagementCloudExadataStorageConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementCloudExadataStorageConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
