// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceMeshVirtualDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}
  */
  readonly virtualServiceId: string;
  /**
  * access_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#access_logging ServiceMeshVirtualDeployment#access_logging}
  */
  readonly accessLogging?: ServiceMeshVirtualDeploymentAccessLogging;
  /**
  * listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#listeners ServiceMeshVirtualDeployment#listeners}
  */
  readonly listeners?: ServiceMeshVirtualDeploymentListeners[] | cdktf.IResolvable;
  /**
  * service_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#service_discovery ServiceMeshVirtualDeployment#service_discovery}
  */
  readonly serviceDiscovery?: ServiceMeshVirtualDeploymentServiceDiscovery;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#timeouts ServiceMeshVirtualDeployment#timeouts}
  */
  readonly timeouts?: ServiceMeshVirtualDeploymentTimeouts;
}
export interface ServiceMeshVirtualDeploymentAccessLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#is_enabled ServiceMeshVirtualDeployment#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function serviceMeshVirtualDeploymentAccessLoggingToTerraform(struct?: ServiceMeshVirtualDeploymentAccessLoggingOutputReference | ServiceMeshVirtualDeploymentAccessLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function serviceMeshVirtualDeploymentAccessLoggingToHclTerraform(struct?: ServiceMeshVirtualDeploymentAccessLoggingOutputReference | ServiceMeshVirtualDeploymentAccessLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshVirtualDeploymentAccessLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshVirtualDeploymentAccessLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshVirtualDeploymentAccessLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface ServiceMeshVirtualDeploymentListeners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#idle_timeout_in_ms ServiceMeshVirtualDeployment#idle_timeout_in_ms}
  */
  readonly idleTimeoutInMs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#port ServiceMeshVirtualDeployment#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#protocol ServiceMeshVirtualDeployment#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#request_timeout_in_ms ServiceMeshVirtualDeployment#request_timeout_in_ms}
  */
  readonly requestTimeoutInMs?: string;
}

export function serviceMeshVirtualDeploymentListenersToTerraform(struct?: ServiceMeshVirtualDeploymentListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_ms: cdktf.stringToTerraform(struct!.idleTimeoutInMs),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    request_timeout_in_ms: cdktf.stringToTerraform(struct!.requestTimeoutInMs),
  }
}


export function serviceMeshVirtualDeploymentListenersToHclTerraform(struct?: ServiceMeshVirtualDeploymentListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_ms: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeoutInMs),
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
    request_timeout_in_ms: {
      value: cdktf.stringToHclTerraform(struct!.requestTimeoutInMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshVirtualDeploymentListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMeshVirtualDeploymentListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMs = this._idleTimeoutInMs;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._requestTimeoutInMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeoutInMs = this._requestTimeoutInMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshVirtualDeploymentListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTimeoutInMs = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._requestTimeoutInMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTimeoutInMs = value.idleTimeoutInMs;
      this._port = value.port;
      this._protocol = value.protocol;
      this._requestTimeoutInMs = value.requestTimeoutInMs;
    }
  }

  // idle_timeout_in_ms - computed: true, optional: true, required: false
  private _idleTimeoutInMs?: string; 
  public get idleTimeoutInMs() {
    return this.getStringAttribute('idle_timeout_in_ms');
  }
  public set idleTimeoutInMs(value: string) {
    this._idleTimeoutInMs = value;
  }
  public resetIdleTimeoutInMs() {
    this._idleTimeoutInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMsInput() {
    return this._idleTimeoutInMs;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // request_timeout_in_ms - computed: true, optional: true, required: false
  private _requestTimeoutInMs?: string; 
  public get requestTimeoutInMs() {
    return this.getStringAttribute('request_timeout_in_ms');
  }
  public set requestTimeoutInMs(value: string) {
    this._requestTimeoutInMs = value;
  }
  public resetRequestTimeoutInMs() {
    this._requestTimeoutInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInMsInput() {
    return this._requestTimeoutInMs;
  }
}

export class ServiceMeshVirtualDeploymentListenersList extends cdktf.ComplexList {
  public internalValue? : ServiceMeshVirtualDeploymentListeners[] | cdktf.IResolvable

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
  public get(index: number): ServiceMeshVirtualDeploymentListenersOutputReference {
    return new ServiceMeshVirtualDeploymentListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMeshVirtualDeploymentServiceDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#hostname ServiceMeshVirtualDeployment#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#type ServiceMeshVirtualDeployment#type}
  */
  readonly type: string;
}

export function serviceMeshVirtualDeploymentServiceDiscoveryToTerraform(struct?: ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference | ServiceMeshVirtualDeploymentServiceDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceMeshVirtualDeploymentServiceDiscoveryToHclTerraform(struct?: ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference | ServiceMeshVirtualDeploymentServiceDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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

export class ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshVirtualDeploymentServiceDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshVirtualDeploymentServiceDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._type = value.type;
    }
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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
export interface ServiceMeshVirtualDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#create ServiceMeshVirtualDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#delete ServiceMeshVirtualDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#update ServiceMeshVirtualDeployment#update}
  */
  readonly update?: string;
}

export function serviceMeshVirtualDeploymentTimeoutsToTerraform(struct?: ServiceMeshVirtualDeploymentTimeouts | cdktf.IResolvable): any {
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


export function serviceMeshVirtualDeploymentTimeoutsToHclTerraform(struct?: ServiceMeshVirtualDeploymentTimeouts | cdktf.IResolvable): any {
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

export class ServiceMeshVirtualDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceMeshVirtualDeploymentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceMeshVirtualDeploymentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment oci_service_mesh_virtual_deployment}
*/
export class ServiceMeshVirtualDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_mesh_virtual_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceMeshVirtualDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceMeshVirtualDeployment to import
  * @param importFromId The id of the existing ServiceMeshVirtualDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceMeshVirtualDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_mesh_virtual_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_virtual_deployment oci_service_mesh_virtual_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceMeshVirtualDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceMeshVirtualDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_mesh_virtual_deployment',
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
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._name = config.name;
    this._virtualServiceId = config.virtualServiceId;
    this._accessLogging.internalValue = config.accessLogging;
    this._listeners.internalValue = config.listeners;
    this._serviceDiscovery.internalValue = config.serviceDiscovery;
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // virtual_service_id - computed: false, optional: false, required: true
  private _virtualServiceId?: string; 
  public get virtualServiceId() {
    return this.getStringAttribute('virtual_service_id');
  }
  public set virtualServiceId(value: string) {
    this._virtualServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceIdInput() {
    return this._virtualServiceId;
  }

  // access_logging - computed: false, optional: true, required: false
  private _accessLogging = new ServiceMeshVirtualDeploymentAccessLoggingOutputReference(this, "access_logging");
  public get accessLogging() {
    return this._accessLogging;
  }
  public putAccessLogging(value: ServiceMeshVirtualDeploymentAccessLogging) {
    this._accessLogging.internalValue = value;
  }
  public resetAccessLogging() {
    this._accessLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLoggingInput() {
    return this._accessLogging.internalValue;
  }

  // listeners - computed: false, optional: true, required: false
  private _listeners = new ServiceMeshVirtualDeploymentListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: ServiceMeshVirtualDeploymentListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  public resetListeners() {
    this._listeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery = new ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference(this, "service_discovery");
  public get serviceDiscovery() {
    return this._serviceDiscovery;
  }
  public putServiceDiscovery(value: ServiceMeshVirtualDeploymentServiceDiscovery) {
    this._serviceDiscovery.internalValue = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceMeshVirtualDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceMeshVirtualDeploymentTimeouts) {
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
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      virtual_service_id: cdktf.stringToTerraform(this._virtualServiceId),
      access_logging: serviceMeshVirtualDeploymentAccessLoggingToTerraform(this._accessLogging.internalValue),
      listeners: cdktf.listMapper(serviceMeshVirtualDeploymentListenersToTerraform, true)(this._listeners.internalValue),
      service_discovery: serviceMeshVirtualDeploymentServiceDiscoveryToTerraform(this._serviceDiscovery.internalValue),
      timeouts: serviceMeshVirtualDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_service_id: {
        value: cdktf.stringToHclTerraform(this._virtualServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_logging: {
        value: serviceMeshVirtualDeploymentAccessLoggingToHclTerraform(this._accessLogging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshVirtualDeploymentAccessLoggingList",
      },
      listeners: {
        value: cdktf.listMapperHcl(serviceMeshVirtualDeploymentListenersToHclTerraform, true)(this._listeners.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshVirtualDeploymentListenersList",
      },
      service_discovery: {
        value: serviceMeshVirtualDeploymentServiceDiscoveryToHclTerraform(this._serviceDiscovery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshVirtualDeploymentServiceDiscoveryList",
      },
      timeouts: {
        value: serviceMeshVirtualDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceMeshVirtualDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
