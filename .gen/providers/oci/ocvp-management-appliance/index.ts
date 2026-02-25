// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OcvpManagementApplianceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#defined_tags OcvpManagementAppliance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#display_name OcvpManagementAppliance#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#freeform_tags OcvpManagementAppliance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#id OcvpManagementAppliance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#public_ssh_keys OcvpManagementAppliance#public_ssh_keys}
  */
  readonly publicSshKeys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#sddc_id OcvpManagementAppliance#sddc_id}
  */
  readonly sddcId: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#configuration OcvpManagementAppliance#configuration}
  */
  readonly configuration: OcvpManagementApplianceConfiguration;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#connections OcvpManagementAppliance#connections}
  */
  readonly connections: OcvpManagementApplianceConnections[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#timeouts OcvpManagementAppliance#timeouts}
  */
  readonly timeouts?: OcvpManagementApplianceTimeouts;
}
export interface OcvpManagementApplianceHeartbeatConnectionStates {
}

export function ocvpManagementApplianceHeartbeatConnectionStatesToTerraform(struct?: OcvpManagementApplianceHeartbeatConnectionStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ocvpManagementApplianceHeartbeatConnectionStatesToHclTerraform(struct?: OcvpManagementApplianceHeartbeatConnectionStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OcvpManagementApplianceHeartbeatConnectionStatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpManagementApplianceHeartbeatConnectionStates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpManagementApplianceHeartbeatConnectionStates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class OcvpManagementApplianceHeartbeatConnectionStatesList extends cdktf.ComplexList {

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
  public get(index: number): OcvpManagementApplianceHeartbeatConnectionStatesOutputReference {
    return new OcvpManagementApplianceHeartbeatConnectionStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpManagementApplianceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#is_log_ingestion_enabled OcvpManagementAppliance#is_log_ingestion_enabled}
  */
  readonly isLogIngestionEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#is_metrics_collection_enabled OcvpManagementAppliance#is_metrics_collection_enabled}
  */
  readonly isMetricsCollectionEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#metrics OcvpManagementAppliance#metrics}
  */
  readonly metrics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#support_bundle_bucket_id OcvpManagementAppliance#support_bundle_bucket_id}
  */
  readonly supportBundleBucketId?: string;
}

export function ocvpManagementApplianceConfigurationToTerraform(struct?: OcvpManagementApplianceConfigurationOutputReference | OcvpManagementApplianceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_log_ingestion_enabled: cdktf.booleanToTerraform(struct!.isLogIngestionEnabled),
    is_metrics_collection_enabled: cdktf.booleanToTerraform(struct!.isMetricsCollectionEnabled),
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
    support_bundle_bucket_id: cdktf.stringToTerraform(struct!.supportBundleBucketId),
  }
}


export function ocvpManagementApplianceConfigurationToHclTerraform(struct?: OcvpManagementApplianceConfigurationOutputReference | OcvpManagementApplianceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_log_ingestion_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isLogIngestionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_metrics_collection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMetricsCollectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    support_bundle_bucket_id: {
      value: cdktf.stringToHclTerraform(struct!.supportBundleBucketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OcvpManagementApplianceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OcvpManagementApplianceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLogIngestionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLogIngestionEnabled = this._isLogIngestionEnabled;
    }
    if (this._isMetricsCollectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMetricsCollectionEnabled = this._isMetricsCollectionEnabled;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._supportBundleBucketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportBundleBucketId = this._supportBundleBucketId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpManagementApplianceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isLogIngestionEnabled = undefined;
      this._isMetricsCollectionEnabled = undefined;
      this._metrics = undefined;
      this._supportBundleBucketId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isLogIngestionEnabled = value.isLogIngestionEnabled;
      this._isMetricsCollectionEnabled = value.isMetricsCollectionEnabled;
      this._metrics = value.metrics;
      this._supportBundleBucketId = value.supportBundleBucketId;
    }
  }

  // is_log_ingestion_enabled - computed: false, optional: false, required: true
  private _isLogIngestionEnabled?: boolean | cdktf.IResolvable; 
  public get isLogIngestionEnabled() {
    return this.getBooleanAttribute('is_log_ingestion_enabled');
  }
  public set isLogIngestionEnabled(value: boolean | cdktf.IResolvable) {
    this._isLogIngestionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isLogIngestionEnabledInput() {
    return this._isLogIngestionEnabled;
  }

  // is_metrics_collection_enabled - computed: false, optional: false, required: true
  private _isMetricsCollectionEnabled?: boolean | cdktf.IResolvable; 
  public get isMetricsCollectionEnabled() {
    return this.getBooleanAttribute('is_metrics_collection_enabled');
  }
  public set isMetricsCollectionEnabled(value: boolean | cdktf.IResolvable) {
    this._isMetricsCollectionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetricsCollectionEnabledInput() {
    return this._isMetricsCollectionEnabled;
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // support_bundle_bucket_id - computed: true, optional: true, required: false
  private _supportBundleBucketId?: string; 
  public get supportBundleBucketId() {
    return this.getStringAttribute('support_bundle_bucket_id');
  }
  public set supportBundleBucketId(value: string) {
    this._supportBundleBucketId = value;
  }
  public resetSupportBundleBucketId() {
    this._supportBundleBucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportBundleBucketIdInput() {
    return this._supportBundleBucketId;
  }
}
export interface OcvpManagementApplianceConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#credentials_secret_id OcvpManagementAppliance#credentials_secret_id}
  */
  readonly credentialsSecretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#type OcvpManagementAppliance#type}
  */
  readonly type: string;
}

export function ocvpManagementApplianceConnectionsToTerraform(struct?: OcvpManagementApplianceConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_id: cdktf.stringToTerraform(struct!.credentialsSecretId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ocvpManagementApplianceConnectionsToHclTerraform(struct?: OcvpManagementApplianceConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OcvpManagementApplianceConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpManagementApplianceConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretId = this._credentialsSecretId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpManagementApplianceConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretId = value.credentialsSecretId;
      this._type = value.type;
    }
  }

  // credentials_secret_id - computed: false, optional: false, required: true
  private _credentialsSecretId?: string; 
  public get credentialsSecretId() {
    return this.getStringAttribute('credentials_secret_id');
  }
  public set credentialsSecretId(value: string) {
    this._credentialsSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretIdInput() {
    return this._credentialsSecretId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OcvpManagementApplianceConnectionsList extends cdktf.ComplexList {
  public internalValue? : OcvpManagementApplianceConnections[] | cdktf.IResolvable

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
  public get(index: number): OcvpManagementApplianceConnectionsOutputReference {
    return new OcvpManagementApplianceConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpManagementApplianceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#create OcvpManagementAppliance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#delete OcvpManagementAppliance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#update OcvpManagementAppliance#update}
  */
  readonly update?: string;
}

export function ocvpManagementApplianceTimeoutsToTerraform(struct?: OcvpManagementApplianceTimeouts | cdktf.IResolvable): any {
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


export function ocvpManagementApplianceTimeoutsToHclTerraform(struct?: OcvpManagementApplianceTimeouts | cdktf.IResolvable): any {
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

export class OcvpManagementApplianceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OcvpManagementApplianceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OcvpManagementApplianceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance oci_ocvp_management_appliance}
*/
export class OcvpManagementAppliance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_management_appliance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OcvpManagementAppliance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OcvpManagementAppliance to import
  * @param importFromId The id of the existing OcvpManagementAppliance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OcvpManagementAppliance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_management_appliance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/ocvp_management_appliance oci_ocvp_management_appliance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OcvpManagementApplianceConfig
  */
  public constructor(scope: Construct, id: string, config: OcvpManagementApplianceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_management_appliance',
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
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._publicSshKeys = config.publicSshKeys;
    this._sddcId = config.sddcId;
    this._configuration.internalValue = config.configuration;
    this._connections.internalValue = config.connections;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_instance_id - computed: true, optional: false, required: false
  public get computeInstanceId() {
    return this.getStringAttribute('compute_instance_id');
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

  // heartbeat_connection_states - computed: true, optional: false, required: false
  private _heartbeatConnectionStates = new OcvpManagementApplianceHeartbeatConnectionStatesList(this, "heartbeat_connection_states", false);
  public get heartbeatConnectionStates() {
    return this._heartbeatConnectionStates;
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

  // management_agent_id - computed: true, optional: false, required: false
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }

  // public_ssh_keys - computed: true, optional: true, required: false
  private _publicSshKeys?: string; 
  public get publicSshKeys() {
    return this.getStringAttribute('public_ssh_keys');
  }
  public set publicSshKeys(value: string) {
    this._publicSshKeys = value;
  }
  public resetPublicSshKeys() {
    this._publicSshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSshKeysInput() {
    return this._publicSshKeys;
  }

  // sddc_id - computed: false, optional: false, required: true
  private _sddcId?: string; 
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
  }
  public set sddcId(value: string) {
    this._sddcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcIdInput() {
    return this._sddcId;
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

  // time_configuration_updated - computed: true, optional: false, required: false
  public get timeConfigurationUpdated() {
    return this.getStringAttribute('time_configuration_updated');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_heartbeat - computed: true, optional: false, required: false
  public get timeLastHeartbeat() {
    return this.getStringAttribute('time_last_heartbeat');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new OcvpManagementApplianceConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: OcvpManagementApplianceConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // connections - computed: false, optional: false, required: true
  private _connections = new OcvpManagementApplianceConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: OcvpManagementApplianceConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OcvpManagementApplianceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OcvpManagementApplianceTimeouts) {
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
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      public_ssh_keys: cdktf.stringToTerraform(this._publicSshKeys),
      sddc_id: cdktf.stringToTerraform(this._sddcId),
      configuration: ocvpManagementApplianceConfigurationToTerraform(this._configuration.internalValue),
      connections: cdktf.listMapper(ocvpManagementApplianceConnectionsToTerraform, true)(this._connections.internalValue),
      timeouts: ocvpManagementApplianceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      public_ssh_keys: {
        value: cdktf.stringToHclTerraform(this._publicSshKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_id: {
        value: cdktf.stringToHclTerraform(this._sddcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: ocvpManagementApplianceConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OcvpManagementApplianceConfigurationList",
      },
      connections: {
        value: cdktf.listMapperHcl(ocvpManagementApplianceConnectionsToHclTerraform, true)(this._connections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OcvpManagementApplianceConnectionsList",
      },
      timeouts: {
        value: ocvpManagementApplianceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OcvpManagementApplianceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
