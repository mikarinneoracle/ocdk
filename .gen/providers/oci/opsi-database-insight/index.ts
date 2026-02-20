// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsiDatabaseInsightConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}
  */
  readonly databaseConnectionStatusDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}
  */
  readonly databaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}
  */
  readonly databaseResourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}
  */
  readonly dbmPrivateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}
  */
  readonly enterpriseManagerBridgeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}
  */
  readonly enterpriseManagerEntityIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}
  */
  readonly enterpriseManagerIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}
  */
  readonly entitySource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}
  */
  readonly exadataInsightId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}
  */
  readonly opsiPrivateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}
  */
  readonly status?: string;
  /**
  * connection_credential_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#connection_credential_details OpsiDatabaseInsight#connection_credential_details}
  */
  readonly connectionCredentialDetails?: OpsiDatabaseInsightConnectionCredentialDetails;
  /**
  * connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#connection_details OpsiDatabaseInsight#connection_details}
  */
  readonly connectionDetails?: OpsiDatabaseInsightConnectionDetails;
  /**
  * credential_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#credential_details OpsiDatabaseInsight#credential_details}
  */
  readonly credentialDetails?: OpsiDatabaseInsightCredentialDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#timeouts OpsiDatabaseInsight#timeouts}
  */
  readonly timeouts?: OpsiDatabaseInsightTimeouts;
}
export interface OpsiDatabaseInsightConnectionCredentialDetails {
}

export function opsiDatabaseInsightConnectionCredentialDetailsToTerraform(struct?: OpsiDatabaseInsightConnectionCredentialDetailsOutputReference | OpsiDatabaseInsightConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function opsiDatabaseInsightConnectionCredentialDetailsToHclTerraform(struct?: OpsiDatabaseInsightConnectionCredentialDetailsOutputReference | OpsiDatabaseInsightConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OpsiDatabaseInsightConnectionCredentialDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsiDatabaseInsightConnectionCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiDatabaseInsightConnectionCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_source_name - computed: true, optional: false, required: false
  public get credentialSourceName() {
    return this.getStringAttribute('credential_source_name');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // wallet_secret_id - computed: true, optional: false, required: false
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
}
export interface OpsiDatabaseInsightConnectionDetailsHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#host_ip OpsiDatabaseInsight#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}
  */
  readonly port?: number;
}

export function opsiDatabaseInsightConnectionDetailsHostsToTerraform(struct?: OpsiDatabaseInsightConnectionDetailsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function opsiDatabaseInsightConnectionDetailsHostsToHclTerraform(struct?: OpsiDatabaseInsightConnectionDetailsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
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

export class OpsiDatabaseInsightConnectionDetailsHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OpsiDatabaseInsightConnectionDetailsHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiDatabaseInsightConnectionDetailsHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostIp = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostIp = value.hostIp;
      this._port = value.port;
    }
  }

  // host_ip - computed: true, optional: true, required: false
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  public resetHostIp() {
    this._hostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
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

export class OpsiDatabaseInsightConnectionDetailsHostsList extends cdktf.ComplexList {
  public internalValue? : OpsiDatabaseInsightConnectionDetailsHosts[] | cdktf.IResolvable

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
  public get(index: number): OpsiDatabaseInsightConnectionDetailsHostsOutputReference {
    return new OpsiDatabaseInsightConnectionDetailsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsiDatabaseInsightConnectionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#host_name OpsiDatabaseInsight#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#protocol OpsiDatabaseInsight#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}
  */
  readonly serviceName?: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#hosts OpsiDatabaseInsight#hosts}
  */
  readonly hosts?: OpsiDatabaseInsightConnectionDetailsHosts[] | cdktf.IResolvable;
}

export function opsiDatabaseInsightConnectionDetailsToTerraform(struct?: OpsiDatabaseInsightConnectionDetailsOutputReference | OpsiDatabaseInsightConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    hosts: cdktf.listMapper(opsiDatabaseInsightConnectionDetailsHostsToTerraform, true)(struct!.hosts),
  }
}


export function opsiDatabaseInsightConnectionDetailsToHclTerraform(struct?: OpsiDatabaseInsightConnectionDetailsOutputReference | OpsiDatabaseInsightConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(opsiDatabaseInsightConnectionDetailsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "OpsiDatabaseInsightConnectionDetailsHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiDatabaseInsightConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsiDatabaseInsightConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiDatabaseInsightConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostName = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._serviceName = undefined;
      this._hosts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostName = value.hostName;
      this._port = value.port;
      this._protocol = value.protocol;
      this._serviceName = value.serviceName;
      this._hosts.internalValue = value.hosts;
    }
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new OpsiDatabaseInsightConnectionDetailsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: OpsiDatabaseInsightConnectionDetailsHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}
export interface OpsiDatabaseInsightCredentialDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}
  */
  readonly credentialSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}
  */
  readonly credentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#wallet_secret_id OpsiDatabaseInsight#wallet_secret_id}
  */
  readonly walletSecretId?: string;
}

export function opsiDatabaseInsightCredentialDetailsToTerraform(struct?: OpsiDatabaseInsightCredentialDetailsOutputReference | OpsiDatabaseInsightCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_source_name: cdktf.stringToTerraform(struct!.credentialSourceName),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    role: cdktf.stringToTerraform(struct!.role),
    user_name: cdktf.stringToTerraform(struct!.userName),
    wallet_secret_id: cdktf.stringToTerraform(struct!.walletSecretId),
  }
}


export function opsiDatabaseInsightCredentialDetailsToHclTerraform(struct?: OpsiDatabaseInsightCredentialDetailsOutputReference | OpsiDatabaseInsightCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_source_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.walletSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiDatabaseInsightCredentialDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsiDatabaseInsightCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialSourceName = this._credentialSourceName;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._walletSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletSecretId = this._walletSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiDatabaseInsightCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialSourceName = undefined;
      this._credentialType = undefined;
      this._passwordSecretId = undefined;
      this._role = undefined;
      this._userName = undefined;
      this._walletSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialSourceName = value.credentialSourceName;
      this._credentialType = value.credentialType;
      this._passwordSecretId = value.passwordSecretId;
      this._role = value.role;
      this._userName = value.userName;
      this._walletSecretId = value.walletSecretId;
    }
  }

  // credential_source_name - computed: false, optional: true, required: false
  private _credentialSourceName?: string; 
  public get credentialSourceName() {
    return this.getStringAttribute('credential_source_name');
  }
  public set credentialSourceName(value: string) {
    this._credentialSourceName = value;
  }
  public resetCredentialSourceName() {
    this._credentialSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialSourceNameInput() {
    return this._credentialSourceName;
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // password_secret_id - computed: false, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // wallet_secret_id - computed: false, optional: true, required: false
  private _walletSecretId?: string; 
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
  public set walletSecretId(value: string) {
    this._walletSecretId = value;
  }
  public resetWalletSecretId() {
    this._walletSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletSecretIdInput() {
    return this._walletSecretId;
  }
}
export interface OpsiDatabaseInsightTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#create OpsiDatabaseInsight#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#delete OpsiDatabaseInsight#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#update OpsiDatabaseInsight#update}
  */
  readonly update?: string;
}

export function opsiDatabaseInsightTimeoutsToTerraform(struct?: OpsiDatabaseInsightTimeouts | cdktf.IResolvable): any {
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


export function opsiDatabaseInsightTimeoutsToHclTerraform(struct?: OpsiDatabaseInsightTimeouts | cdktf.IResolvable): any {
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

export class OpsiDatabaseInsightTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpsiDatabaseInsightTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpsiDatabaseInsightTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight oci_opsi_database_insight}
*/
export class OpsiDatabaseInsight extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_database_insight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpsiDatabaseInsight resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpsiDatabaseInsight to import
  * @param importFromId The id of the existing OpsiDatabaseInsight that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpsiDatabaseInsight to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_database_insight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/opsi_database_insight oci_opsi_database_insight} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsiDatabaseInsightConfig
  */
  public constructor(scope: Construct, id: string, config: OpsiDatabaseInsightConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_database_insight',
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
    this._databaseConnectionStatusDetails = config.databaseConnectionStatusDetails;
    this._databaseId = config.databaseId;
    this._databaseResourceType = config.databaseResourceType;
    this._dbmPrivateEndpointId = config.dbmPrivateEndpointId;
    this._definedTags = config.definedTags;
    this._deploymentType = config.deploymentType;
    this._enterpriseManagerBridgeId = config.enterpriseManagerBridgeId;
    this._enterpriseManagerEntityIdentifier = config.enterpriseManagerEntityIdentifier;
    this._enterpriseManagerIdentifier = config.enterpriseManagerIdentifier;
    this._entitySource = config.entitySource;
    this._exadataInsightId = config.exadataInsightId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._opsiPrivateEndpointId = config.opsiPrivateEndpointId;
    this._serviceName = config.serviceName;
    this._status = config.status;
    this._connectionCredentialDetails.internalValue = config.connectionCredentialDetails;
    this._connectionDetails.internalValue = config.connectionDetails;
    this._credentialDetails.internalValue = config.credentialDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // database_connection_status_details - computed: true, optional: true, required: false
  private _databaseConnectionStatusDetails?: string; 
  public get databaseConnectionStatusDetails() {
    return this.getStringAttribute('database_connection_status_details');
  }
  public set databaseConnectionStatusDetails(value: string) {
    this._databaseConnectionStatusDetails = value;
  }
  public resetDatabaseConnectionStatusDetails() {
    this._databaseConnectionStatusDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConnectionStatusDetailsInput() {
    return this._databaseConnectionStatusDetails;
  }

  // database_display_name - computed: true, optional: false, required: false
  public get databaseDisplayName() {
    return this.getStringAttribute('database_display_name');
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

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_resource_type - computed: true, optional: true, required: false
  private _databaseResourceType?: string; 
  public get databaseResourceType() {
    return this.getStringAttribute('database_resource_type');
  }
  public set databaseResourceType(value: string) {
    this._databaseResourceType = value;
  }
  public resetDatabaseResourceType() {
    this._databaseResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourceTypeInput() {
    return this._databaseResourceType;
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // dbm_private_endpoint_id - computed: true, optional: true, required: false
  private _dbmPrivateEndpointId?: string; 
  public get dbmPrivateEndpointId() {
    return this.getStringAttribute('dbm_private_endpoint_id');
  }
  public set dbmPrivateEndpointId(value: string) {
    this._dbmPrivateEndpointId = value;
  }
  public resetDbmPrivateEndpointId() {
    this._dbmPrivateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbmPrivateEndpointIdInput() {
    return this._dbmPrivateEndpointId;
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

  // deployment_type - computed: true, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // enterprise_manager_bridge_id - computed: true, optional: true, required: false
  private _enterpriseManagerBridgeId?: string; 
  public get enterpriseManagerBridgeId() {
    return this.getStringAttribute('enterprise_manager_bridge_id');
  }
  public set enterpriseManagerBridgeId(value: string) {
    this._enterpriseManagerBridgeId = value;
  }
  public resetEnterpriseManagerBridgeId() {
    this._enterpriseManagerBridgeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseManagerBridgeIdInput() {
    return this._enterpriseManagerBridgeId;
  }

  // enterprise_manager_entity_display_name - computed: true, optional: false, required: false
  public get enterpriseManagerEntityDisplayName() {
    return this.getStringAttribute('enterprise_manager_entity_display_name');
  }

  // enterprise_manager_entity_identifier - computed: true, optional: true, required: false
  private _enterpriseManagerEntityIdentifier?: string; 
  public get enterpriseManagerEntityIdentifier() {
    return this.getStringAttribute('enterprise_manager_entity_identifier');
  }
  public set enterpriseManagerEntityIdentifier(value: string) {
    this._enterpriseManagerEntityIdentifier = value;
  }
  public resetEnterpriseManagerEntityIdentifier() {
    this._enterpriseManagerEntityIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseManagerEntityIdentifierInput() {
    return this._enterpriseManagerEntityIdentifier;
  }

  // enterprise_manager_entity_name - computed: true, optional: false, required: false
  public get enterpriseManagerEntityName() {
    return this.getStringAttribute('enterprise_manager_entity_name');
  }

  // enterprise_manager_entity_type - computed: true, optional: false, required: false
  public get enterpriseManagerEntityType() {
    return this.getStringAttribute('enterprise_manager_entity_type');
  }

  // enterprise_manager_identifier - computed: true, optional: true, required: false
  private _enterpriseManagerIdentifier?: string; 
  public get enterpriseManagerIdentifier() {
    return this.getStringAttribute('enterprise_manager_identifier');
  }
  public set enterpriseManagerIdentifier(value: string) {
    this._enterpriseManagerIdentifier = value;
  }
  public resetEnterpriseManagerIdentifier() {
    this._enterpriseManagerIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseManagerIdentifierInput() {
    return this._enterpriseManagerIdentifier;
  }

  // entity_source - computed: false, optional: false, required: true
  private _entitySource?: string; 
  public get entitySource() {
    return this.getStringAttribute('entity_source');
  }
  public set entitySource(value: string) {
    this._entitySource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySourceInput() {
    return this._entitySource;
  }

  // exadata_insight_id - computed: true, optional: true, required: false
  private _exadataInsightId?: string; 
  public get exadataInsightId() {
    return this.getStringAttribute('exadata_insight_id');
  }
  public set exadataInsightId(value: string) {
    this._exadataInsightId = value;
  }
  public resetExadataInsightId() {
    this._exadataInsightId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInsightIdInput() {
    return this._exadataInsightId;
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

  // opsi_private_endpoint_id - computed: true, optional: true, required: false
  private _opsiPrivateEndpointId?: string; 
  public get opsiPrivateEndpointId() {
    return this.getStringAttribute('opsi_private_endpoint_id');
  }
  public set opsiPrivateEndpointId(value: string) {
    this._opsiPrivateEndpointId = value;
  }
  public resetOpsiPrivateEndpointId() {
    this._opsiPrivateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsiPrivateEndpointIdInput() {
    return this._opsiPrivateEndpointId;
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // processor_count - computed: true, optional: false, required: false
  public get processorCount() {
    return this.getNumberAttribute('processor_count');
  }

  // root_id - computed: true, optional: false, required: false
  public get rootId() {
    return this.getStringAttribute('root_id');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // connection_credential_details - computed: false, optional: true, required: false
  private _connectionCredentialDetails = new OpsiDatabaseInsightConnectionCredentialDetailsOutputReference(this, "connection_credential_details");
  public get connectionCredentialDetails() {
    return this._connectionCredentialDetails;
  }
  public putConnectionCredentialDetails(value: OpsiDatabaseInsightConnectionCredentialDetails) {
    this._connectionCredentialDetails.internalValue = value;
  }
  public resetConnectionCredentialDetails() {
    this._connectionCredentialDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialDetailsInput() {
    return this._connectionCredentialDetails.internalValue;
  }

  // connection_details - computed: false, optional: true, required: false
  private _connectionDetails = new OpsiDatabaseInsightConnectionDetailsOutputReference(this, "connection_details");
  public get connectionDetails() {
    return this._connectionDetails;
  }
  public putConnectionDetails(value: OpsiDatabaseInsightConnectionDetails) {
    this._connectionDetails.internalValue = value;
  }
  public resetConnectionDetails() {
    this._connectionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDetailsInput() {
    return this._connectionDetails.internalValue;
  }

  // credential_details - computed: false, optional: true, required: false
  private _credentialDetails = new OpsiDatabaseInsightCredentialDetailsOutputReference(this, "credential_details");
  public get credentialDetails() {
    return this._credentialDetails;
  }
  public putCredentialDetails(value: OpsiDatabaseInsightCredentialDetails) {
    this._credentialDetails.internalValue = value;
  }
  public resetCredentialDetails() {
    this._credentialDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialDetailsInput() {
    return this._credentialDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpsiDatabaseInsightTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpsiDatabaseInsightTimeouts) {
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
      database_connection_status_details: cdktf.stringToTerraform(this._databaseConnectionStatusDetails),
      database_id: cdktf.stringToTerraform(this._databaseId),
      database_resource_type: cdktf.stringToTerraform(this._databaseResourceType),
      dbm_private_endpoint_id: cdktf.stringToTerraform(this._dbmPrivateEndpointId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      enterprise_manager_bridge_id: cdktf.stringToTerraform(this._enterpriseManagerBridgeId),
      enterprise_manager_entity_identifier: cdktf.stringToTerraform(this._enterpriseManagerEntityIdentifier),
      enterprise_manager_identifier: cdktf.stringToTerraform(this._enterpriseManagerIdentifier),
      entity_source: cdktf.stringToTerraform(this._entitySource),
      exadata_insight_id: cdktf.stringToTerraform(this._exadataInsightId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      opsi_private_endpoint_id: cdktf.stringToTerraform(this._opsiPrivateEndpointId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      status: cdktf.stringToTerraform(this._status),
      connection_credential_details: opsiDatabaseInsightConnectionCredentialDetailsToTerraform(this._connectionCredentialDetails.internalValue),
      connection_details: opsiDatabaseInsightConnectionDetailsToTerraform(this._connectionDetails.internalValue),
      credential_details: opsiDatabaseInsightCredentialDetailsToTerraform(this._credentialDetails.internalValue),
      timeouts: opsiDatabaseInsightTimeoutsToTerraform(this._timeouts.internalValue),
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
      database_connection_status_details: {
        value: cdktf.stringToHclTerraform(this._databaseConnectionStatusDetails),
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
      database_resource_type: {
        value: cdktf.stringToHclTerraform(this._databaseResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbm_private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._dbmPrivateEndpointId),
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
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_manager_bridge_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseManagerBridgeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_manager_entity_identifier: {
        value: cdktf.stringToHclTerraform(this._enterpriseManagerEntityIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_manager_identifier: {
        value: cdktf.stringToHclTerraform(this._enterpriseManagerIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_source: {
        value: cdktf.stringToHclTerraform(this._entitySource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exadata_insight_id: {
        value: cdktf.stringToHclTerraform(this._exadataInsightId),
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
      opsi_private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._opsiPrivateEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_credential_details: {
        value: opsiDatabaseInsightConnectionCredentialDetailsToHclTerraform(this._connectionCredentialDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpsiDatabaseInsightConnectionCredentialDetailsList",
      },
      connection_details: {
        value: opsiDatabaseInsightConnectionDetailsToHclTerraform(this._connectionDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpsiDatabaseInsightConnectionDetailsList",
      },
      credential_details: {
        value: opsiDatabaseInsightCredentialDetailsToHclTerraform(this._credentialDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpsiDatabaseInsightCredentialDetailsList",
      },
      timeouts: {
        value: opsiDatabaseInsightTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpsiDatabaseInsightTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
