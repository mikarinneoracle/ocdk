// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseMigrationConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#certificate_tdn DatabaseMigrationConnection#certificate_tdn}
  */
  readonly certificateTdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#database_id DatabaseMigrationConnection#database_id}
  */
  readonly databaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#database_type DatabaseMigrationConnection#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#defined_tags DatabaseMigrationConnection#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#display_name DatabaseMigrationConnection#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#freeform_tags DatabaseMigrationConnection#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#id DatabaseMigrationConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#manual_database_sub_type DatabaseMigrationConnection#manual_database_sub_type}
  */
  readonly manualDatabaseSubType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#nsg_ids DatabaseMigrationConnection#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#tls_keystore DatabaseMigrationConnection#tls_keystore}
  */
  readonly tlsKeystore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#tls_wallet DatabaseMigrationConnection#tls_wallet}
  */
  readonly tlsWallet?: string;
  /**
  * admin_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#admin_credentials DatabaseMigrationConnection#admin_credentials}
  */
  readonly adminCredentials: DatabaseMigrationConnectionAdminCredentials;
  /**
  * connect_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#connect_descriptor DatabaseMigrationConnection#connect_descriptor}
  */
  readonly connectDescriptor?: DatabaseMigrationConnectionConnectDescriptor;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#private_endpoint DatabaseMigrationConnection#private_endpoint}
  */
  readonly privateEndpoint?: DatabaseMigrationConnectionPrivateEndpoint;
  /**
  * replication_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#replication_credentials DatabaseMigrationConnection#replication_credentials}
  */
  readonly replicationCredentials?: DatabaseMigrationConnectionReplicationCredentials;
  /**
  * ssh_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#ssh_details DatabaseMigrationConnection#ssh_details}
  */
  readonly sshDetails?: DatabaseMigrationConnectionSshDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#timeouts DatabaseMigrationConnection#timeouts}
  */
  readonly timeouts?: DatabaseMigrationConnectionTimeouts;
  /**
  * vault_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#vault_details DatabaseMigrationConnection#vault_details}
  */
  readonly vaultDetails: DatabaseMigrationConnectionVaultDetails;
}
export interface DatabaseMigrationConnectionAdminCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}
  */
  readonly username: string;
}

export function databaseMigrationConnectionAdminCredentialsToTerraform(struct?: DatabaseMigrationConnectionAdminCredentialsOutputReference | DatabaseMigrationConnectionAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseMigrationConnectionAdminCredentialsToHclTerraform(struct?: DatabaseMigrationConnectionAdminCredentialsOutputReference | DatabaseMigrationConnectionAdminCredentials): any {
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

export class DatabaseMigrationConnectionAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationConnectionAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationConnectionAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
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
export interface DatabaseMigrationConnectionConnectDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#connect_string DatabaseMigrationConnection#connect_string}
  */
  readonly connectString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#database_service_name DatabaseMigrationConnection#database_service_name}
  */
  readonly databaseServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#port DatabaseMigrationConnection#port}
  */
  readonly port?: number;
}

export function databaseMigrationConnectionConnectDescriptorToTerraform(struct?: DatabaseMigrationConnectionConnectDescriptorOutputReference | DatabaseMigrationConnectionConnectDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_string: cdktf.stringToTerraform(struct!.connectString),
    database_service_name: cdktf.stringToTerraform(struct!.databaseServiceName),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function databaseMigrationConnectionConnectDescriptorToHclTerraform(struct?: DatabaseMigrationConnectionConnectDescriptorOutputReference | DatabaseMigrationConnectionConnectDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_string: {
      value: cdktf.stringToHclTerraform(struct!.connectString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_service_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationConnectionConnectDescriptorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationConnectionConnectDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectString = this._connectString;
    }
    if (this._databaseServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseServiceName = this._databaseServiceName;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationConnectionConnectDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectString = undefined;
      this._databaseServiceName = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectString = value.connectString;
      this._databaseServiceName = value.databaseServiceName;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // connect_string - computed: true, optional: true, required: false
  private _connectString?: string; 
  public get connectString() {
    return this.getStringAttribute('connect_string');
  }
  public set connectString(value: string) {
    this._connectString = value;
  }
  public resetConnectString() {
    this._connectString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectStringInput() {
    return this._connectString;
  }

  // database_service_name - computed: true, optional: true, required: false
  private _databaseServiceName?: string; 
  public get databaseServiceName() {
    return this.getStringAttribute('database_service_name');
  }
  public set databaseServiceName(value: string) {
    this._databaseServiceName = value;
  }
  public resetDatabaseServiceName() {
    this._databaseServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseServiceNameInput() {
    return this._databaseServiceName;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DatabaseMigrationConnectionPrivateEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#subnet_id DatabaseMigrationConnection#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#vcn_id DatabaseMigrationConnection#vcn_id}
  */
  readonly vcnId: string;
}

export function databaseMigrationConnectionPrivateEndpointToTerraform(struct?: DatabaseMigrationConnectionPrivateEndpointOutputReference | DatabaseMigrationConnectionPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vcn_id: cdktf.stringToTerraform(struct!.vcnId),
  }
}


export function databaseMigrationConnectionPrivateEndpointToHclTerraform(struct?: DatabaseMigrationConnectionPrivateEndpointOutputReference | DatabaseMigrationConnectionPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcn_id: {
      value: cdktf.stringToHclTerraform(struct!.vcnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationConnectionPrivateEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationConnectionPrivateEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vcnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcnId = this._vcnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationConnectionPrivateEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._subnetId = undefined;
      this._vcnId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._subnetId = value.subnetId;
      this._vcnId = value.vcnId;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}
export interface DatabaseMigrationConnectionReplicationCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#password DatabaseMigrationConnection#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#username DatabaseMigrationConnection#username}
  */
  readonly username: string;
}

export function databaseMigrationConnectionReplicationCredentialsToTerraform(struct?: DatabaseMigrationConnectionReplicationCredentialsOutputReference | DatabaseMigrationConnectionReplicationCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseMigrationConnectionReplicationCredentialsToHclTerraform(struct?: DatabaseMigrationConnectionReplicationCredentialsOutputReference | DatabaseMigrationConnectionReplicationCredentials): any {
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

export class DatabaseMigrationConnectionReplicationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationConnectionReplicationCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationConnectionReplicationCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
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
export interface DatabaseMigrationConnectionSshDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#host DatabaseMigrationConnection#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#sshkey DatabaseMigrationConnection#sshkey}
  */
  readonly sshkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#sudo_location DatabaseMigrationConnection#sudo_location}
  */
  readonly sudoLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#user DatabaseMigrationConnection#user}
  */
  readonly user: string;
}

export function databaseMigrationConnectionSshDetailsToTerraform(struct?: DatabaseMigrationConnectionSshDetailsOutputReference | DatabaseMigrationConnectionSshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    sshkey: cdktf.stringToTerraform(struct!.sshkey),
    sudo_location: cdktf.stringToTerraform(struct!.sudoLocation),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function databaseMigrationConnectionSshDetailsToHclTerraform(struct?: DatabaseMigrationConnectionSshDetailsOutputReference | DatabaseMigrationConnectionSshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sshkey: {
      value: cdktf.stringToHclTerraform(struct!.sshkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sudo_location: {
      value: cdktf.stringToHclTerraform(struct!.sudoLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationConnectionSshDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationConnectionSshDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._sshkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshkey = this._sshkey;
    }
    if (this._sudoLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sudoLocation = this._sudoLocation;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationConnectionSshDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._sshkey = undefined;
      this._sudoLocation = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._sshkey = value.sshkey;
      this._sudoLocation = value.sudoLocation;
      this._user = value.user;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // sshkey - computed: false, optional: false, required: true
  private _sshkey?: string; 
  public get sshkey() {
    return this.getStringAttribute('sshkey');
  }
  public set sshkey(value: string) {
    this._sshkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshkeyInput() {
    return this._sshkey;
  }

  // sudo_location - computed: true, optional: true, required: false
  private _sudoLocation?: string; 
  public get sudoLocation() {
    return this.getStringAttribute('sudo_location');
  }
  public set sudoLocation(value: string) {
    this._sudoLocation = value;
  }
  public resetSudoLocation() {
    this._sudoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudoLocationInput() {
    return this._sudoLocation;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DatabaseMigrationConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#create DatabaseMigrationConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#delete DatabaseMigrationConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#update DatabaseMigrationConnection#update}
  */
  readonly update?: string;
}

export function databaseMigrationConnectionTimeoutsToTerraform(struct?: DatabaseMigrationConnectionTimeouts | cdktf.IResolvable): any {
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


export function databaseMigrationConnectionTimeoutsToHclTerraform(struct?: DatabaseMigrationConnectionTimeouts | cdktf.IResolvable): any {
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

export class DatabaseMigrationConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMigrationConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMigrationConnectionTimeouts | cdktf.IResolvable | undefined) {
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
export interface DatabaseMigrationConnectionVaultDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#compartment_id DatabaseMigrationConnection#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#key_id DatabaseMigrationConnection#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#vault_id DatabaseMigrationConnection#vault_id}
  */
  readonly vaultId: string;
}

export function databaseMigrationConnectionVaultDetailsToTerraform(struct?: DatabaseMigrationConnectionVaultDetailsOutputReference | DatabaseMigrationConnectionVaultDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function databaseMigrationConnectionVaultDetailsToHclTerraform(struct?: DatabaseMigrationConnectionVaultDetailsOutputReference | DatabaseMigrationConnectionVaultDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationConnectionVaultDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationConnectionVaultDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationConnectionVaultDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._keyId = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._keyId = value.keyId;
      this._vaultId = value.vaultId;
    }
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

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection oci_database_migration_connection}
*/
export class DatabaseMigrationConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseMigrationConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseMigrationConnection to import
  * @param importFromId The id of the existing DatabaseMigrationConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseMigrationConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/database_migration_connection oci_database_migration_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMigrationConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseMigrationConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_connection',
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
    this._certificateTdn = config.certificateTdn;
    this._compartmentId = config.compartmentId;
    this._databaseId = config.databaseId;
    this._databaseType = config.databaseType;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._manualDatabaseSubType = config.manualDatabaseSubType;
    this._nsgIds = config.nsgIds;
    this._tlsKeystore = config.tlsKeystore;
    this._tlsWallet = config.tlsWallet;
    this._adminCredentials.internalValue = config.adminCredentials;
    this._connectDescriptor.internalValue = config.connectDescriptor;
    this._privateEndpoint.internalValue = config.privateEndpoint;
    this._replicationCredentials.internalValue = config.replicationCredentials;
    this._sshDetails.internalValue = config.sshDetails;
    this._timeouts.internalValue = config.timeouts;
    this._vaultDetails.internalValue = config.vaultDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_tdn - computed: true, optional: true, required: false
  private _certificateTdn?: string; 
  public get certificateTdn() {
    return this.getStringAttribute('certificate_tdn');
  }
  public set certificateTdn(value: string) {
    this._certificateTdn = value;
  }
  public resetCertificateTdn() {
    this._certificateTdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTdnInput() {
    return this._certificateTdn;
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

  // credentials_secret_id - computed: true, optional: false, required: false
  public get credentialsSecretId() {
    return this.getStringAttribute('credentials_secret_id');
  }

  // database_id - computed: true, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
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

  // manual_database_sub_type - computed: true, optional: true, required: false
  private _manualDatabaseSubType?: string; 
  public get manualDatabaseSubType() {
    return this.getStringAttribute('manual_database_sub_type');
  }
  public set manualDatabaseSubType(value: string) {
    this._manualDatabaseSubType = value;
  }
  public resetManualDatabaseSubType() {
    this._manualDatabaseSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualDatabaseSubTypeInput() {
    return this._manualDatabaseSubType;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
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

  // tls_keystore - computed: true, optional: true, required: false
  private _tlsKeystore?: string; 
  public get tlsKeystore() {
    return this.getStringAttribute('tls_keystore');
  }
  public set tlsKeystore(value: string) {
    this._tlsKeystore = value;
  }
  public resetTlsKeystore() {
    this._tlsKeystore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeystoreInput() {
    return this._tlsKeystore;
  }

  // tls_wallet - computed: true, optional: true, required: false
  private _tlsWallet?: string; 
  public get tlsWallet() {
    return this.getStringAttribute('tls_wallet');
  }
  public set tlsWallet(value: string) {
    this._tlsWallet = value;
  }
  public resetTlsWallet() {
    this._tlsWallet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsWalletInput() {
    return this._tlsWallet;
  }

  // admin_credentials - computed: false, optional: false, required: true
  private _adminCredentials = new DatabaseMigrationConnectionAdminCredentialsOutputReference(this, "admin_credentials");
  public get adminCredentials() {
    return this._adminCredentials;
  }
  public putAdminCredentials(value: DatabaseMigrationConnectionAdminCredentials) {
    this._adminCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCredentialsInput() {
    return this._adminCredentials.internalValue;
  }

  // connect_descriptor - computed: false, optional: true, required: false
  private _connectDescriptor = new DatabaseMigrationConnectionConnectDescriptorOutputReference(this, "connect_descriptor");
  public get connectDescriptor() {
    return this._connectDescriptor;
  }
  public putConnectDescriptor(value: DatabaseMigrationConnectionConnectDescriptor) {
    this._connectDescriptor.internalValue = value;
  }
  public resetConnectDescriptor() {
    this._connectDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectDescriptorInput() {
    return this._connectDescriptor.internalValue;
  }

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint = new DatabaseMigrationConnectionPrivateEndpointOutputReference(this, "private_endpoint");
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: DatabaseMigrationConnectionPrivateEndpoint) {
    this._privateEndpoint.internalValue = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint.internalValue;
  }

  // replication_credentials - computed: false, optional: true, required: false
  private _replicationCredentials = new DatabaseMigrationConnectionReplicationCredentialsOutputReference(this, "replication_credentials");
  public get replicationCredentials() {
    return this._replicationCredentials;
  }
  public putReplicationCredentials(value: DatabaseMigrationConnectionReplicationCredentials) {
    this._replicationCredentials.internalValue = value;
  }
  public resetReplicationCredentials() {
    this._replicationCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationCredentialsInput() {
    return this._replicationCredentials.internalValue;
  }

  // ssh_details - computed: false, optional: true, required: false
  private _sshDetails = new DatabaseMigrationConnectionSshDetailsOutputReference(this, "ssh_details");
  public get sshDetails() {
    return this._sshDetails;
  }
  public putSshDetails(value: DatabaseMigrationConnectionSshDetails) {
    this._sshDetails.internalValue = value;
  }
  public resetSshDetails() {
    this._sshDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshDetailsInput() {
    return this._sshDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseMigrationConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseMigrationConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vault_details - computed: false, optional: false, required: true
  private _vaultDetails = new DatabaseMigrationConnectionVaultDetailsOutputReference(this, "vault_details");
  public get vaultDetails() {
    return this._vaultDetails;
  }
  public putVaultDetails(value: DatabaseMigrationConnectionVaultDetails) {
    this._vaultDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultDetailsInput() {
    return this._vaultDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_tdn: cdktf.stringToTerraform(this._certificateTdn),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      database_id: cdktf.stringToTerraform(this._databaseId),
      database_type: cdktf.stringToTerraform(this._databaseType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      manual_database_sub_type: cdktf.stringToTerraform(this._manualDatabaseSubType),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      tls_keystore: cdktf.stringToTerraform(this._tlsKeystore),
      tls_wallet: cdktf.stringToTerraform(this._tlsWallet),
      admin_credentials: databaseMigrationConnectionAdminCredentialsToTerraform(this._adminCredentials.internalValue),
      connect_descriptor: databaseMigrationConnectionConnectDescriptorToTerraform(this._connectDescriptor.internalValue),
      private_endpoint: databaseMigrationConnectionPrivateEndpointToTerraform(this._privateEndpoint.internalValue),
      replication_credentials: databaseMigrationConnectionReplicationCredentialsToTerraform(this._replicationCredentials.internalValue),
      ssh_details: databaseMigrationConnectionSshDetailsToTerraform(this._sshDetails.internalValue),
      timeouts: databaseMigrationConnectionTimeoutsToTerraform(this._timeouts.internalValue),
      vault_details: databaseMigrationConnectionVaultDetailsToTerraform(this._vaultDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_tdn: {
        value: cdktf.stringToHclTerraform(this._certificateTdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
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
      manual_database_sub_type: {
        value: cdktf.stringToHclTerraform(this._manualDatabaseSubType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tls_keystore: {
        value: cdktf.stringToHclTerraform(this._tlsKeystore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_wallet: {
        value: cdktf.stringToHclTerraform(this._tlsWallet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_credentials: {
        value: databaseMigrationConnectionAdminCredentialsToHclTerraform(this._adminCredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationConnectionAdminCredentialsList",
      },
      connect_descriptor: {
        value: databaseMigrationConnectionConnectDescriptorToHclTerraform(this._connectDescriptor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationConnectionConnectDescriptorList",
      },
      private_endpoint: {
        value: databaseMigrationConnectionPrivateEndpointToHclTerraform(this._privateEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationConnectionPrivateEndpointList",
      },
      replication_credentials: {
        value: databaseMigrationConnectionReplicationCredentialsToHclTerraform(this._replicationCredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationConnectionReplicationCredentialsList",
      },
      ssh_details: {
        value: databaseMigrationConnectionSshDetailsToHclTerraform(this._sshDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationConnectionSshDetailsList",
      },
      timeouts: {
        value: databaseMigrationConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseMigrationConnectionTimeouts",
      },
      vault_details: {
        value: databaseMigrationConnectionVaultDetailsToHclTerraform(this._vaultDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationConnectionVaultDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
