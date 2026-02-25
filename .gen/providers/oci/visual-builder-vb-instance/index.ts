// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisualBuilderVbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#compartment_id VisualBuilderVbInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#consumption_model VisualBuilderVbInstance#consumption_model}
  */
  readonly consumptionModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#defined_tags VisualBuilderVbInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#display_name VisualBuilderVbInstance#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#freeform_tags VisualBuilderVbInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#id VisualBuilderVbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#idcs_open_id VisualBuilderVbInstance#idcs_open_id}
  */
  readonly idcsOpenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#is_visual_builder_enabled VisualBuilderVbInstance#is_visual_builder_enabled}
  */
  readonly isVisualBuilderEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#node_count VisualBuilderVbInstance#node_count}
  */
  readonly nodeCount: number;
  /**
  * alternate_custom_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#alternate_custom_endpoints VisualBuilderVbInstance#alternate_custom_endpoints}
  */
  readonly alternateCustomEndpoints?: VisualBuilderVbInstanceAlternateCustomEndpoints[] | cdktf.IResolvable;
  /**
  * custom_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#custom_endpoint VisualBuilderVbInstance#custom_endpoint}
  */
  readonly customEndpoint?: VisualBuilderVbInstanceCustomEndpoint;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#timeouts VisualBuilderVbInstance#timeouts}
  */
  readonly timeouts?: VisualBuilderVbInstanceTimeouts;
}
export interface VisualBuilderVbInstanceAttachments {
}

export function visualBuilderVbInstanceAttachmentsToTerraform(struct?: VisualBuilderVbInstanceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function visualBuilderVbInstanceAttachmentsToHclTerraform(struct?: VisualBuilderVbInstanceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VisualBuilderVbInstanceAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualBuilderVbInstanceAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualBuilderVbInstanceAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_implicit - computed: true, optional: false, required: false
  public get isImplicit() {
    return this.getBooleanAttribute('is_implicit');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_instance_url - computed: true, optional: false, required: false
  public get targetInstanceUrl() {
    return this.getStringAttribute('target_instance_url');
  }

  // target_role - computed: true, optional: false, required: false
  public get targetRole() {
    return this.getStringAttribute('target_role');
  }

  // target_service_type - computed: true, optional: false, required: false
  public get targetServiceType() {
    return this.getStringAttribute('target_service_type');
  }
}

export class VisualBuilderVbInstanceAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): VisualBuilderVbInstanceAttachmentsOutputReference {
    return new VisualBuilderVbInstanceAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualBuilderVbInstanceIdcsInfo {
}

export function visualBuilderVbInstanceIdcsInfoToTerraform(struct?: VisualBuilderVbInstanceIdcsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function visualBuilderVbInstanceIdcsInfoToHclTerraform(struct?: VisualBuilderVbInstanceIdcsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VisualBuilderVbInstanceIdcsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualBuilderVbInstanceIdcsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualBuilderVbInstanceIdcsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idcs_app_display_name - computed: true, optional: false, required: false
  public get idcsAppDisplayName() {
    return this.getStringAttribute('idcs_app_display_name');
  }

  // idcs_app_id - computed: true, optional: false, required: false
  public get idcsAppId() {
    return this.getStringAttribute('idcs_app_id');
  }

  // idcs_app_location_url - computed: true, optional: false, required: false
  public get idcsAppLocationUrl() {
    return this.getStringAttribute('idcs_app_location_url');
  }

  // idcs_app_name - computed: true, optional: false, required: false
  public get idcsAppName() {
    return this.getStringAttribute('idcs_app_name');
  }

  // instance_primary_audience_url - computed: true, optional: false, required: false
  public get instancePrimaryAudienceUrl() {
    return this.getStringAttribute('instance_primary_audience_url');
  }
}

export class VisualBuilderVbInstanceIdcsInfoList extends cdktf.ComplexList {

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
  public get(index: number): VisualBuilderVbInstanceIdcsInfoOutputReference {
    return new VisualBuilderVbInstanceIdcsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualBuilderVbInstanceAlternateCustomEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}
  */
  readonly certificateSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}
  */
  readonly hostname: string;
}

export function visualBuilderVbInstanceAlternateCustomEndpointsToTerraform(struct?: VisualBuilderVbInstanceAlternateCustomEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_secret_id: cdktf.stringToTerraform(struct!.certificateSecretId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function visualBuilderVbInstanceAlternateCustomEndpointsToHclTerraform(struct?: VisualBuilderVbInstanceAlternateCustomEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualBuilderVbInstanceAlternateCustomEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecretId = this._certificateSecretId;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualBuilderVbInstanceAlternateCustomEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSecretId = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSecretId = value.certificateSecretId;
      this._hostname = value.hostname;
    }
  }

  // certificate_secret_id - computed: true, optional: true, required: false
  private _certificateSecretId?: string; 
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }
  public set certificateSecretId(value: string) {
    this._certificateSecretId = value;
  }
  public resetCertificateSecretId() {
    this._certificateSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretIdInput() {
    return this._certificateSecretId;
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class VisualBuilderVbInstanceAlternateCustomEndpointsList extends cdktf.ComplexList {
  public internalValue? : VisualBuilderVbInstanceAlternateCustomEndpoints[] | cdktf.IResolvable

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
  public get(index: number): VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference {
    return new VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualBuilderVbInstanceCustomEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}
  */
  readonly certificateSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}
  */
  readonly hostname: string;
}

export function visualBuilderVbInstanceCustomEndpointToTerraform(struct?: VisualBuilderVbInstanceCustomEndpointOutputReference | VisualBuilderVbInstanceCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_secret_id: cdktf.stringToTerraform(struct!.certificateSecretId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function visualBuilderVbInstanceCustomEndpointToHclTerraform(struct?: VisualBuilderVbInstanceCustomEndpointOutputReference | VisualBuilderVbInstanceCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualBuilderVbInstanceCustomEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisualBuilderVbInstanceCustomEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecretId = this._certificateSecretId;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualBuilderVbInstanceCustomEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateSecretId = undefined;
      this._hostname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateSecretId = value.certificateSecretId;
      this._hostname = value.hostname;
    }
  }

  // certificate_secret_id - computed: true, optional: true, required: false
  private _certificateSecretId?: string; 
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }
  public set certificateSecretId(value: string) {
    this._certificateSecretId = value;
  }
  public resetCertificateSecretId() {
    this._certificateSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretIdInput() {
    return this._certificateSecretId;
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}
export interface VisualBuilderVbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#create VisualBuilderVbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#delete VisualBuilderVbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#update VisualBuilderVbInstance#update}
  */
  readonly update?: string;
}

export function visualBuilderVbInstanceTimeoutsToTerraform(struct?: VisualBuilderVbInstanceTimeouts | cdktf.IResolvable): any {
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


export function visualBuilderVbInstanceTimeoutsToHclTerraform(struct?: VisualBuilderVbInstanceTimeouts | cdktf.IResolvable): any {
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

export class VisualBuilderVbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VisualBuilderVbInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VisualBuilderVbInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance oci_visual_builder_vb_instance}
*/
export class VisualBuilderVbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_visual_builder_vb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisualBuilderVbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisualBuilderVbInstance to import
  * @param importFromId The id of the existing VisualBuilderVbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisualBuilderVbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_visual_builder_vb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/visual_builder_vb_instance oci_visual_builder_vb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisualBuilderVbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: VisualBuilderVbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_visual_builder_vb_instance',
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
    this._consumptionModel = config.consumptionModel;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._idcsOpenId = config.idcsOpenId;
    this._isVisualBuilderEnabled = config.isVisualBuilderEnabled;
    this._nodeCount = config.nodeCount;
    this._alternateCustomEndpoints.internalValue = config.alternateCustomEndpoints;
    this._customEndpoint.internalValue = config.customEndpoint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachments - computed: true, optional: false, required: false
  private _attachments = new VisualBuilderVbInstanceAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
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

  // consumption_model - computed: true, optional: true, required: false
  private _consumptionModel?: string; 
  public get consumptionModel() {
    return this.getStringAttribute('consumption_model');
  }
  public set consumptionModel(value: string) {
    this._consumptionModel = value;
  }
  public resetConsumptionModel() {
    this._consumptionModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumptionModelInput() {
    return this._consumptionModel;
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

  // idcs_info - computed: true, optional: false, required: false
  private _idcsInfo = new VisualBuilderVbInstanceIdcsInfoList(this, "idcs_info", false);
  public get idcsInfo() {
    return this._idcsInfo;
  }

  // idcs_open_id - computed: false, optional: true, required: false
  private _idcsOpenId?: string; 
  public get idcsOpenId() {
    return this.getStringAttribute('idcs_open_id');
  }
  public set idcsOpenId(value: string) {
    this._idcsOpenId = value;
  }
  public resetIdcsOpenId() {
    this._idcsOpenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsOpenIdInput() {
    return this._idcsOpenId;
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // is_visual_builder_enabled - computed: true, optional: true, required: false
  private _isVisualBuilderEnabled?: boolean | cdktf.IResolvable; 
  public get isVisualBuilderEnabled() {
    return this.getBooleanAttribute('is_visual_builder_enabled');
  }
  public set isVisualBuilderEnabled(value: boolean | cdktf.IResolvable) {
    this._isVisualBuilderEnabled = value;
  }
  public resetIsVisualBuilderEnabled() {
    this._isVisualBuilderEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVisualBuilderEnabledInput() {
    return this._isVisualBuilderEnabled;
  }

  // management_nat_gateway_ip - computed: true, optional: false, required: false
  public get managementNatGatewayIp() {
    return this.getStringAttribute('management_nat_gateway_ip');
  }

  // management_vcn_id - computed: true, optional: false, required: false
  public get managementVcnId() {
    return this.getStringAttribute('management_vcn_id');
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // service_nat_gateway_ip - computed: true, optional: false, required: false
  public get serviceNatGatewayIp() {
    return this.getStringAttribute('service_nat_gateway_ip');
  }

  // service_vcn_id - computed: true, optional: false, required: false
  public get serviceVcnId() {
    return this.getStringAttribute('service_vcn_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
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

  // alternate_custom_endpoints - computed: false, optional: true, required: false
  private _alternateCustomEndpoints = new VisualBuilderVbInstanceAlternateCustomEndpointsList(this, "alternate_custom_endpoints", false);
  public get alternateCustomEndpoints() {
    return this._alternateCustomEndpoints;
  }
  public putAlternateCustomEndpoints(value: VisualBuilderVbInstanceAlternateCustomEndpoints[] | cdktf.IResolvable) {
    this._alternateCustomEndpoints.internalValue = value;
  }
  public resetAlternateCustomEndpoints() {
    this._alternateCustomEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateCustomEndpointsInput() {
    return this._alternateCustomEndpoints.internalValue;
  }

  // custom_endpoint - computed: false, optional: true, required: false
  private _customEndpoint = new VisualBuilderVbInstanceCustomEndpointOutputReference(this, "custom_endpoint");
  public get customEndpoint() {
    return this._customEndpoint;
  }
  public putCustomEndpoint(value: VisualBuilderVbInstanceCustomEndpoint) {
    this._customEndpoint.internalValue = value;
  }
  public resetCustomEndpoint() {
    this._customEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointInput() {
    return this._customEndpoint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VisualBuilderVbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VisualBuilderVbInstanceTimeouts) {
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
      consumption_model: cdktf.stringToTerraform(this._consumptionModel),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      idcs_open_id: cdktf.stringToTerraform(this._idcsOpenId),
      is_visual_builder_enabled: cdktf.booleanToTerraform(this._isVisualBuilderEnabled),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      alternate_custom_endpoints: cdktf.listMapper(visualBuilderVbInstanceAlternateCustomEndpointsToTerraform, true)(this._alternateCustomEndpoints.internalValue),
      custom_endpoint: visualBuilderVbInstanceCustomEndpointToTerraform(this._customEndpoint.internalValue),
      timeouts: visualBuilderVbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      consumption_model: {
        value: cdktf.stringToHclTerraform(this._consumptionModel),
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
      idcs_open_id: {
        value: cdktf.stringToHclTerraform(this._idcsOpenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_visual_builder_enabled: {
        value: cdktf.booleanToHclTerraform(this._isVisualBuilderEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alternate_custom_endpoints: {
        value: cdktf.listMapperHcl(visualBuilderVbInstanceAlternateCustomEndpointsToHclTerraform, true)(this._alternateCustomEndpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisualBuilderVbInstanceAlternateCustomEndpointsList",
      },
      custom_endpoint: {
        value: visualBuilderVbInstanceCustomEndpointToHclTerraform(this._customEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisualBuilderVbInstanceCustomEndpointList",
      },
      timeouts: {
        value: visualBuilderVbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VisualBuilderVbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
