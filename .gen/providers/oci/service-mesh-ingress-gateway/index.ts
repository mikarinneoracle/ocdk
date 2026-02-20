// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceMeshIngressGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}
  */
  readonly meshId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}
  */
  readonly name: string;
  /**
  * access_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#access_logging ServiceMeshIngressGateway#access_logging}
  */
  readonly accessLogging?: ServiceMeshIngressGatewayAccessLogging;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#hosts ServiceMeshIngressGateway#hosts}
  */
  readonly hosts: ServiceMeshIngressGatewayHosts[] | cdktf.IResolvable;
  /**
  * mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#mtls ServiceMeshIngressGateway#mtls}
  */
  readonly mtls?: ServiceMeshIngressGatewayMtls;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#timeouts ServiceMeshIngressGateway#timeouts}
  */
  readonly timeouts?: ServiceMeshIngressGatewayTimeouts;
}
export interface ServiceMeshIngressGatewayAccessLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#is_enabled ServiceMeshIngressGateway#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function serviceMeshIngressGatewayAccessLoggingToTerraform(struct?: ServiceMeshIngressGatewayAccessLoggingOutputReference | ServiceMeshIngressGatewayAccessLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function serviceMeshIngressGatewayAccessLoggingToHclTerraform(struct?: ServiceMeshIngressGatewayAccessLoggingOutputReference | ServiceMeshIngressGatewayAccessLogging): any {
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

export class ServiceMeshIngressGatewayAccessLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshIngressGatewayAccessLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayAccessLogging | undefined) {
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
export interface ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#ca_bundle_id ServiceMeshIngressGateway#ca_bundle_id}
  */
  readonly caBundleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}
  */
  readonly secretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}
  */
  readonly type: string;
}

export function serviceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleToTerraform(struct?: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference | ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle_id: cdktf.stringToTerraform(struct!.caBundleId),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleToHclTerraform(struct?: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference | ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_bundle_id: {
      value: cdktf.stringToHclTerraform(struct!.caBundleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
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

export class ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundleId = this._caBundleId;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caBundleId = undefined;
      this._secretName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caBundleId = value.caBundleId;
      this._secretName = value.secretName;
      this._type = value.type;
    }
  }

  // ca_bundle_id - computed: true, optional: true, required: false
  private _caBundleId?: string; 
  public get caBundleId() {
    return this.getStringAttribute('ca_bundle_id');
  }
  public set caBundleId(value: string) {
    this._caBundleId = value;
  }
  public resetCaBundleId() {
    this._caBundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleIdInput() {
    return this._caBundleId;
  }

  // secret_name - computed: true, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
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
export interface ServiceMeshIngressGatewayHostsListenersTlsClientValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#subject_alternate_names ServiceMeshIngressGateway#subject_alternate_names}
  */
  readonly subjectAlternateNames?: string[];
  /**
  * trusted_ca_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#trusted_ca_bundle ServiceMeshIngressGateway#trusted_ca_bundle}
  */
  readonly trustedCaBundle?: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle;
}

export function serviceMeshIngressGatewayHostsListenersTlsClientValidationToTerraform(struct?: ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference | ServiceMeshIngressGatewayHostsListenersTlsClientValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternate_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAlternateNames),
    trusted_ca_bundle: serviceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleToTerraform(struct!.trustedCaBundle),
  }
}


export function serviceMeshIngressGatewayHostsListenersTlsClientValidationToHclTerraform(struct?: ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference | ServiceMeshIngressGatewayHostsListenersTlsClientValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject_alternate_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAlternateNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_ca_bundle: {
      value: serviceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleToHclTerraform(struct!.trustedCaBundle),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshIngressGatewayHostsListenersTlsClientValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternateNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternateNames = this._subjectAlternateNames;
    }
    if (this._trustedCaBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaBundle = this._trustedCaBundle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayHostsListenersTlsClientValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subjectAlternateNames = undefined;
      this._trustedCaBundle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subjectAlternateNames = value.subjectAlternateNames;
      this._trustedCaBundle.internalValue = value.trustedCaBundle;
    }
  }

  // subject_alternate_names - computed: true, optional: true, required: false
  private _subjectAlternateNames?: string[]; 
  public get subjectAlternateNames() {
    return this.getListAttribute('subject_alternate_names');
  }
  public set subjectAlternateNames(value: string[]) {
    this._subjectAlternateNames = value;
  }
  public resetSubjectAlternateNames() {
    this._subjectAlternateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternateNamesInput() {
    return this._subjectAlternateNames;
  }

  // trusted_ca_bundle - computed: false, optional: true, required: false
  private _trustedCaBundle = new ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference(this, "trusted_ca_bundle");
  public get trustedCaBundle() {
    return this._trustedCaBundle;
  }
  public putTrustedCaBundle(value: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle) {
    this._trustedCaBundle.internalValue = value;
  }
  public resetTrustedCaBundle() {
    this._trustedCaBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaBundleInput() {
    return this._trustedCaBundle.internalValue;
  }
}
export interface ServiceMeshIngressGatewayHostsListenersTlsServerCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#certificate_id ServiceMeshIngressGateway#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}
  */
  readonly secretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}
  */
  readonly type: string;
}

export function serviceMeshIngressGatewayHostsListenersTlsServerCertificateToTerraform(struct?: ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference | ServiceMeshIngressGatewayHostsListenersTlsServerCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceMeshIngressGatewayHostsListenersTlsServerCertificateToHclTerraform(struct?: ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference | ServiceMeshIngressGatewayHostsListenersTlsServerCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
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

export class ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshIngressGatewayHostsListenersTlsServerCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayHostsListenersTlsServerCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateId = undefined;
      this._secretName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateId = value.certificateId;
      this._secretName = value.secretName;
      this._type = value.type;
    }
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // secret_name - computed: true, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
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
export interface ServiceMeshIngressGatewayHostsListenersTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#mode ServiceMeshIngressGateway#mode}
  */
  readonly mode: string;
  /**
  * client_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#client_validation ServiceMeshIngressGateway#client_validation}
  */
  readonly clientValidation?: ServiceMeshIngressGatewayHostsListenersTlsClientValidation;
  /**
  * server_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#server_certificate ServiceMeshIngressGateway#server_certificate}
  */
  readonly serverCertificate?: ServiceMeshIngressGatewayHostsListenersTlsServerCertificate;
}

export function serviceMeshIngressGatewayHostsListenersTlsToTerraform(struct?: ServiceMeshIngressGatewayHostsListenersTlsOutputReference | ServiceMeshIngressGatewayHostsListenersTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    client_validation: serviceMeshIngressGatewayHostsListenersTlsClientValidationToTerraform(struct!.clientValidation),
    server_certificate: serviceMeshIngressGatewayHostsListenersTlsServerCertificateToTerraform(struct!.serverCertificate),
  }
}


export function serviceMeshIngressGatewayHostsListenersTlsToHclTerraform(struct?: ServiceMeshIngressGatewayHostsListenersTlsOutputReference | ServiceMeshIngressGatewayHostsListenersTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_validation: {
      value: serviceMeshIngressGatewayHostsListenersTlsClientValidationToHclTerraform(struct!.clientValidation),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshIngressGatewayHostsListenersTlsClientValidationList",
    },
    server_certificate: {
      value: serviceMeshIngressGatewayHostsListenersTlsServerCertificateToHclTerraform(struct!.serverCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshIngressGatewayHostsListenersTlsServerCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshIngressGatewayHostsListenersTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshIngressGatewayHostsListenersTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._clientValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientValidation = this._clientValidation?.internalValue;
    }
    if (this._serverCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificate = this._serverCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayHostsListenersTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._clientValidation.internalValue = undefined;
      this._serverCertificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._clientValidation.internalValue = value.clientValidation;
      this._serverCertificate.internalValue = value.serverCertificate;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // client_validation - computed: false, optional: true, required: false
  private _clientValidation = new ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference(this, "client_validation");
  public get clientValidation() {
    return this._clientValidation;
  }
  public putClientValidation(value: ServiceMeshIngressGatewayHostsListenersTlsClientValidation) {
    this._clientValidation.internalValue = value;
  }
  public resetClientValidation() {
    this._clientValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientValidationInput() {
    return this._clientValidation.internalValue;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate = new ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference(this, "server_certificate");
  public get serverCertificate() {
    return this._serverCertificate;
  }
  public putServerCertificate(value: ServiceMeshIngressGatewayHostsListenersTlsServerCertificate) {
    this._serverCertificate.internalValue = value;
  }
  public resetServerCertificate() {
    this._serverCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate.internalValue;
  }
}
export interface ServiceMeshIngressGatewayHostsListeners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#port ServiceMeshIngressGateway#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#protocol ServiceMeshIngressGateway#protocol}
  */
  readonly protocol: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#tls ServiceMeshIngressGateway#tls}
  */
  readonly tls?: ServiceMeshIngressGatewayHostsListenersTls;
}

export function serviceMeshIngressGatewayHostsListenersToTerraform(struct?: ServiceMeshIngressGatewayHostsListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    tls: serviceMeshIngressGatewayHostsListenersTlsToTerraform(struct!.tls),
  }
}


export function serviceMeshIngressGatewayHostsListenersToHclTerraform(struct?: ServiceMeshIngressGatewayHostsListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    tls: {
      value: serviceMeshIngressGatewayHostsListenersTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshIngressGatewayHostsListenersTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshIngressGatewayHostsListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMeshIngressGatewayHostsListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayHostsListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
      this._tls.internalValue = value.tls;
    }
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

  // tls - computed: false, optional: true, required: false
  private _tls = new ServiceMeshIngressGatewayHostsListenersTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ServiceMeshIngressGatewayHostsListenersTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ServiceMeshIngressGatewayHostsListenersList extends cdktf.ComplexList {
  public internalValue? : ServiceMeshIngressGatewayHostsListeners[] | cdktf.IResolvable

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
  public get(index: number): ServiceMeshIngressGatewayHostsListenersOutputReference {
    return new ServiceMeshIngressGatewayHostsListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMeshIngressGatewayHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#hostnames ServiceMeshIngressGateway#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}
  */
  readonly name: string;
  /**
  * listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#listeners ServiceMeshIngressGateway#listeners}
  */
  readonly listeners: ServiceMeshIngressGatewayHostsListeners[] | cdktf.IResolvable;
}

export function serviceMeshIngressGatewayHostsToTerraform(struct?: ServiceMeshIngressGatewayHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    name: cdktf.stringToTerraform(struct!.name),
    listeners: cdktf.listMapper(serviceMeshIngressGatewayHostsListenersToTerraform, true)(struct!.listeners),
  }
}


export function serviceMeshIngressGatewayHostsToHclTerraform(struct?: ServiceMeshIngressGatewayHosts | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listeners: {
      value: cdktf.listMapperHcl(serviceMeshIngressGatewayHostsListenersToHclTerraform, true)(struct!.listeners),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMeshIngressGatewayHostsListenersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshIngressGatewayHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMeshIngressGatewayHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._listeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeners = this._listeners?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._name = undefined;
      this._listeners.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._name = value.name;
      this._listeners.internalValue = value.listeners;
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

  // listeners - computed: false, optional: false, required: true
  private _listeners = new ServiceMeshIngressGatewayHostsListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: ServiceMeshIngressGatewayHostsListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }
}

export class ServiceMeshIngressGatewayHostsList extends cdktf.ComplexList {
  public internalValue? : ServiceMeshIngressGatewayHosts[] | cdktf.IResolvable

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
  public get(index: number): ServiceMeshIngressGatewayHostsOutputReference {
    return new ServiceMeshIngressGatewayHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMeshIngressGatewayMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#maximum_validity ServiceMeshIngressGateway#maximum_validity}
  */
  readonly maximumValidity?: number;
}

export function serviceMeshIngressGatewayMtlsToTerraform(struct?: ServiceMeshIngressGatewayMtlsOutputReference | ServiceMeshIngressGatewayMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_validity: cdktf.numberToTerraform(struct!.maximumValidity),
  }
}


export function serviceMeshIngressGatewayMtlsToHclTerraform(struct?: ServiceMeshIngressGatewayMtlsOutputReference | ServiceMeshIngressGatewayMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_validity: {
      value: cdktf.numberToHclTerraform(struct!.maximumValidity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshIngressGatewayMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceMeshIngressGatewayMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumValidity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumValidity = this._maximumValidity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshIngressGatewayMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumValidity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumValidity = value.maximumValidity;
    }
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // maximum_validity - computed: true, optional: true, required: false
  private _maximumValidity?: number; 
  public get maximumValidity() {
    return this.getNumberAttribute('maximum_validity');
  }
  public set maximumValidity(value: number) {
    this._maximumValidity = value;
  }
  public resetMaximumValidity() {
    this._maximumValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumValidityInput() {
    return this._maximumValidity;
  }
}
export interface ServiceMeshIngressGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#create ServiceMeshIngressGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#delete ServiceMeshIngressGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#update ServiceMeshIngressGateway#update}
  */
  readonly update?: string;
}

export function serviceMeshIngressGatewayTimeoutsToTerraform(struct?: ServiceMeshIngressGatewayTimeouts | cdktf.IResolvable): any {
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


export function serviceMeshIngressGatewayTimeoutsToHclTerraform(struct?: ServiceMeshIngressGatewayTimeouts | cdktf.IResolvable): any {
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

export class ServiceMeshIngressGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceMeshIngressGatewayTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceMeshIngressGatewayTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway oci_service_mesh_ingress_gateway}
*/
export class ServiceMeshIngressGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_mesh_ingress_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceMeshIngressGateway to import
  * @param importFromId The id of the existing ServiceMeshIngressGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceMeshIngressGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_mesh_ingress_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/service_mesh_ingress_gateway oci_service_mesh_ingress_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceMeshIngressGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceMeshIngressGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_mesh_ingress_gateway',
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
    this._meshId = config.meshId;
    this._name = config.name;
    this._accessLogging.internalValue = config.accessLogging;
    this._hosts.internalValue = config.hosts;
    this._mtls.internalValue = config.mtls;
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

  // access_logging - computed: false, optional: true, required: false
  private _accessLogging = new ServiceMeshIngressGatewayAccessLoggingOutputReference(this, "access_logging");
  public get accessLogging() {
    return this._accessLogging;
  }
  public putAccessLogging(value: ServiceMeshIngressGatewayAccessLogging) {
    this._accessLogging.internalValue = value;
  }
  public resetAccessLogging() {
    this._accessLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLoggingInput() {
    return this._accessLogging.internalValue;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts = new ServiceMeshIngressGatewayHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ServiceMeshIngressGatewayHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // mtls - computed: false, optional: true, required: false
  private _mtls = new ServiceMeshIngressGatewayMtlsOutputReference(this, "mtls");
  public get mtls() {
    return this._mtls;
  }
  public putMtls(value: ServiceMeshIngressGatewayMtls) {
    this._mtls.internalValue = value;
  }
  public resetMtls() {
    this._mtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsInput() {
    return this._mtls.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceMeshIngressGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceMeshIngressGatewayTimeouts) {
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
      access_logging: serviceMeshIngressGatewayAccessLoggingToTerraform(this._accessLogging.internalValue),
      hosts: cdktf.listMapper(serviceMeshIngressGatewayHostsToTerraform, true)(this._hosts.internalValue),
      mtls: serviceMeshIngressGatewayMtlsToTerraform(this._mtls.internalValue),
      timeouts: serviceMeshIngressGatewayTimeoutsToTerraform(this._timeouts.internalValue),
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
      access_logging: {
        value: serviceMeshIngressGatewayAccessLoggingToHclTerraform(this._accessLogging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshIngressGatewayAccessLoggingList",
      },
      hosts: {
        value: cdktf.listMapperHcl(serviceMeshIngressGatewayHostsToHclTerraform, true)(this._hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshIngressGatewayHostsList",
      },
      mtls: {
        value: serviceMeshIngressGatewayMtlsToHclTerraform(this._mtls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshIngressGatewayMtlsList",
      },
      timeouts: {
        value: serviceMeshIngressGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceMeshIngressGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
