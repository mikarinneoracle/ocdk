// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceMeshAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#compartment_id ServiceMeshAccessPolicy#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#defined_tags ServiceMeshAccessPolicy#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#description ServiceMeshAccessPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#freeform_tags ServiceMeshAccessPolicy#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#id ServiceMeshAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#mesh_id ServiceMeshAccessPolicy#mesh_id}
  */
  readonly meshId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#name ServiceMeshAccessPolicy#name}
  */
  readonly name: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#rules ServiceMeshAccessPolicy#rules}
  */
  readonly rules: ServiceMeshAccessPolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#timeouts ServiceMeshAccessPolicy#timeouts}
  */
  readonly timeouts?: ServiceMeshAccessPolicyTimeouts;
}
export interface ServiceMeshAccessPolicyRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}
  */
  readonly ingressGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}
  */
  readonly virtualServiceId?: string;
}

export function serviceMeshAccessPolicyRulesDestinationToTerraform(struct?: ServiceMeshAccessPolicyRulesDestinationOutputReference | ServiceMeshAccessPolicyRulesDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ingress_gateway_id: cdktf.stringToTerraform(struct!.ingressGatewayId),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    type: cdktf.stringToTerraform(struct!.type),
    virtual_service_id: cdktf.stringToTerraform(struct!.virtualServiceId),
  }
}


export function serviceMeshAccessPolicyRulesDestinationToHclTerraform(struct?: ServiceMeshAccessPolicyRulesDestinationOutputReference | ServiceMeshAccessPolicyRulesDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ingress_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.ingressGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
    virtual_service_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshAccessPolicyRulesDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshAccessPolicyRulesDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ingressGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressGatewayId = this._ingressGatewayId;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._virtualServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceId = this._virtualServiceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshAccessPolicyRulesDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostnames = undefined;
      this._ingressGatewayId = undefined;
      this._ipAddresses = undefined;
      this._ports = undefined;
      this._protocol = undefined;
      this._type = undefined;
      this._virtualServiceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostnames = value.hostnames;
      this._ingressGatewayId = value.ingressGatewayId;
      this._ipAddresses = value.ipAddresses;
      this._ports = value.ports;
      this._protocol = value.protocol;
      this._type = value.type;
      this._virtualServiceId = value.virtualServiceId;
    }
  }

  // hostnames - computed: true, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ingress_gateway_id - computed: true, optional: true, required: false
  private _ingressGatewayId?: string; 
  public get ingressGatewayId() {
    return this.getStringAttribute('ingress_gateway_id');
  }
  public set ingressGatewayId(value: string) {
    this._ingressGatewayId = value;
  }
  public resetIngressGatewayId() {
    this._ingressGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGatewayIdInput() {
    return this._ingressGatewayId;
  }

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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

  // virtual_service_id - computed: true, optional: true, required: false
  private _virtualServiceId?: string; 
  public get virtualServiceId() {
    return this.getStringAttribute('virtual_service_id');
  }
  public set virtualServiceId(value: string) {
    this._virtualServiceId = value;
  }
  public resetVirtualServiceId() {
    this._virtualServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceIdInput() {
    return this._virtualServiceId;
  }
}
export interface ServiceMeshAccessPolicyRulesSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}
  */
  readonly ingressGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}
  */
  readonly virtualServiceId?: string;
}

export function serviceMeshAccessPolicyRulesSourceToTerraform(struct?: ServiceMeshAccessPolicyRulesSourceOutputReference | ServiceMeshAccessPolicyRulesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ingress_gateway_id: cdktf.stringToTerraform(struct!.ingressGatewayId),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    type: cdktf.stringToTerraform(struct!.type),
    virtual_service_id: cdktf.stringToTerraform(struct!.virtualServiceId),
  }
}


export function serviceMeshAccessPolicyRulesSourceToHclTerraform(struct?: ServiceMeshAccessPolicyRulesSourceOutputReference | ServiceMeshAccessPolicyRulesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ingress_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.ingressGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
    virtual_service_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshAccessPolicyRulesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshAccessPolicyRulesSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ingressGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressGatewayId = this._ingressGatewayId;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._virtualServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceId = this._virtualServiceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshAccessPolicyRulesSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostnames = undefined;
      this._ingressGatewayId = undefined;
      this._ipAddresses = undefined;
      this._ports = undefined;
      this._protocol = undefined;
      this._type = undefined;
      this._virtualServiceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostnames = value.hostnames;
      this._ingressGatewayId = value.ingressGatewayId;
      this._ipAddresses = value.ipAddresses;
      this._ports = value.ports;
      this._protocol = value.protocol;
      this._type = value.type;
      this._virtualServiceId = value.virtualServiceId;
    }
  }

  // hostnames - computed: true, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ingress_gateway_id - computed: true, optional: true, required: false
  private _ingressGatewayId?: string; 
  public get ingressGatewayId() {
    return this.getStringAttribute('ingress_gateway_id');
  }
  public set ingressGatewayId(value: string) {
    this._ingressGatewayId = value;
  }
  public resetIngressGatewayId() {
    this._ingressGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGatewayIdInput() {
    return this._ingressGatewayId;
  }

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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

  // virtual_service_id - computed: true, optional: true, required: false
  private _virtualServiceId?: string; 
  public get virtualServiceId() {
    return this.getStringAttribute('virtual_service_id');
  }
  public set virtualServiceId(value: string) {
    this._virtualServiceId = value;
  }
  public resetVirtualServiceId() {
    this._virtualServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceIdInput() {
    return this._virtualServiceId;
  }
}
export interface ServiceMeshAccessPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#action ServiceMeshAccessPolicy#action}
  */
  readonly action: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#destination ServiceMeshAccessPolicy#destination}
  */
  readonly destination: ServiceMeshAccessPolicyRulesDestination;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#source ServiceMeshAccessPolicy#source}
  */
  readonly source: ServiceMeshAccessPolicyRulesSource;
}

export function serviceMeshAccessPolicyRulesToTerraform(struct?: ServiceMeshAccessPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    destination: serviceMeshAccessPolicyRulesDestinationToTerraform(struct!.destination),
    source: serviceMeshAccessPolicyRulesSourceToTerraform(struct!.source),
  }
}


export function serviceMeshAccessPolicyRulesToHclTerraform(struct?: ServiceMeshAccessPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: serviceMeshAccessPolicyRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshAccessPolicyRulesDestinationList",
    },
    source: {
      value: serviceMeshAccessPolicyRulesSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshAccessPolicyRulesSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshAccessPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMeshAccessPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshAccessPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new ServiceMeshAccessPolicyRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ServiceMeshAccessPolicyRulesDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new ServiceMeshAccessPolicyRulesSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: ServiceMeshAccessPolicyRulesSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class ServiceMeshAccessPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : ServiceMeshAccessPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): ServiceMeshAccessPolicyRulesOutputReference {
    return new ServiceMeshAccessPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMeshAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#create ServiceMeshAccessPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#delete ServiceMeshAccessPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#update ServiceMeshAccessPolicy#update}
  */
  readonly update?: string;
}

export function serviceMeshAccessPolicyTimeoutsToTerraform(struct?: ServiceMeshAccessPolicyTimeouts | cdktf.IResolvable): any {
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


export function serviceMeshAccessPolicyTimeoutsToHclTerraform(struct?: ServiceMeshAccessPolicyTimeouts | cdktf.IResolvable): any {
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

export class ServiceMeshAccessPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceMeshAccessPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceMeshAccessPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy oci_service_mesh_access_policy}
*/
export class ServiceMeshAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_mesh_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceMeshAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceMeshAccessPolicy to import
  * @param importFromId The id of the existing ServiceMeshAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceMeshAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_mesh_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_access_policy oci_service_mesh_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceMeshAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceMeshAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_mesh_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '5.47.0',
        providerVersionConstraint: '>= 5.0.0, < 6.0.0'
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
    this._meshId = config.meshId;
    this._name = config.name;
    this._rules.internalValue = config.rules;
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

  // mesh_id - computed: false, optional: false, required: true
  private _meshId?: string; 
  public get meshId() {
    return this.getStringAttribute('mesh_id');
  }
  public set meshId(value: string) {
    this._meshId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshIdInput() {
    return this._meshId;
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

  // rules - computed: false, optional: false, required: true
  private _rules = new ServiceMeshAccessPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ServiceMeshAccessPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceMeshAccessPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceMeshAccessPolicyTimeouts) {
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
      mesh_id: cdktf.stringToTerraform(this._meshId),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(serviceMeshAccessPolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: serviceMeshAccessPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      mesh_id: {
        value: cdktf.stringToHclTerraform(this._meshId),
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
      rules: {
        value: cdktf.listMapperHcl(serviceMeshAccessPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshAccessPolicyRulesList",
      },
      timeouts: {
        value: serviceMeshAccessPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceMeshAccessPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
