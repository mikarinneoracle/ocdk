// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DisasterRecoveryDrProtectionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#compartment_id DisasterRecoveryDrProtectionGroup#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#defined_tags DisasterRecoveryDrProtectionGroup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#disassociate_trigger DisasterRecoveryDrProtectionGroup#disassociate_trigger}
  */
  readonly disassociateTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#display_name DisasterRecoveryDrProtectionGroup#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#freeform_tags DisasterRecoveryDrProtectionGroup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#id DisasterRecoveryDrProtectionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#association DisasterRecoveryDrProtectionGroup#association}
  */
  readonly association?: DisasterRecoveryDrProtectionGroupAssociation;
  /**
  * log_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#log_location DisasterRecoveryDrProtectionGroup#log_location}
  */
  readonly logLocation: DisasterRecoveryDrProtectionGroupLogLocation;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#members DisasterRecoveryDrProtectionGroup#members}
  */
  readonly members?: DisasterRecoveryDrProtectionGroupMembers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#timeouts DisasterRecoveryDrProtectionGroup#timeouts}
  */
  readonly timeouts?: DisasterRecoveryDrProtectionGroupTimeouts;
}
export interface DisasterRecoveryDrProtectionGroupAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#peer_id DisasterRecoveryDrProtectionGroup#peer_id}
  */
  readonly peerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#peer_region DisasterRecoveryDrProtectionGroup#peer_region}
  */
  readonly peerRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#role DisasterRecoveryDrProtectionGroup#role}
  */
  readonly role: string;
}

export function disasterRecoveryDrProtectionGroupAssociationToTerraform(struct?: DisasterRecoveryDrProtectionGroupAssociationOutputReference | DisasterRecoveryDrProtectionGroupAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_id: cdktf.stringToTerraform(struct!.peerId),
    peer_region: cdktf.stringToTerraform(struct!.peerRegion),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function disasterRecoveryDrProtectionGroupAssociationToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupAssociationOutputReference | DisasterRecoveryDrProtectionGroupAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_id: {
      value: cdktf.stringToHclTerraform(struct!.peerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_region: {
      value: cdktf.stringToHclTerraform(struct!.peerRegion),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupAssociationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerId = this._peerId;
    }
    if (this._peerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerRegion = this._peerRegion;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._peerId = undefined;
      this._peerRegion = undefined;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._peerId = value.peerId;
      this._peerRegion = value.peerRegion;
      this._role = value.role;
    }
  }

  // peer_id - computed: true, optional: true, required: false
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  public resetPeerId() {
    this._peerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // peer_region - computed: true, optional: true, required: false
  private _peerRegion?: string; 
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }
  public resetPeerRegion() {
    this._peerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionInput() {
    return this._peerRegion;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface DisasterRecoveryDrProtectionGroupLogLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}
  */
  readonly namespace: string;
}

export function disasterRecoveryDrProtectionGroupLogLocationToTerraform(struct?: DisasterRecoveryDrProtectionGroupLogLocationOutputReference | DisasterRecoveryDrProtectionGroupLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function disasterRecoveryDrProtectionGroupLogLocationToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupLogLocationOutputReference | DisasterRecoveryDrProtectionGroupLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupLogLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupLogLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupLogLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBackendSetMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_backend_set_name DisasterRecoveryDrProtectionGroup#destination_backend_set_name}
  */
  readonly destinationBackendSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#is_backend_set_for_non_movable DisasterRecoveryDrProtectionGroup#is_backend_set_for_non_movable}
  */
  readonly isBackendSetForNonMovable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#source_backend_set_name DisasterRecoveryDrProtectionGroup#source_backend_set_name}
  */
  readonly sourceBackendSetName?: string;
}

export function disasterRecoveryDrProtectionGroupMembersBackendSetMappingsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBackendSetMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_backend_set_name: cdktf.stringToTerraform(struct!.destinationBackendSetName),
    is_backend_set_for_non_movable: cdktf.booleanToTerraform(struct!.isBackendSetForNonMovable),
    source_backend_set_name: cdktf.stringToTerraform(struct!.sourceBackendSetName),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBackendSetMappingsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBackendSetMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_backend_set_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationBackendSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_backend_set_for_non_movable: {
      value: cdktf.booleanToHclTerraform(struct!.isBackendSetForNonMovable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_backend_set_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceBackendSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBackendSetMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationBackendSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBackendSetName = this._destinationBackendSetName;
    }
    if (this._isBackendSetForNonMovable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBackendSetForNonMovable = this._isBackendSetForNonMovable;
    }
    if (this._sourceBackendSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBackendSetName = this._sourceBackendSetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBackendSetMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationBackendSetName = undefined;
      this._isBackendSetForNonMovable = undefined;
      this._sourceBackendSetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationBackendSetName = value.destinationBackendSetName;
      this._isBackendSetForNonMovable = value.isBackendSetForNonMovable;
      this._sourceBackendSetName = value.sourceBackendSetName;
    }
  }

  // destination_backend_set_name - computed: true, optional: true, required: false
  private _destinationBackendSetName?: string; 
  public get destinationBackendSetName() {
    return this.getStringAttribute('destination_backend_set_name');
  }
  public set destinationBackendSetName(value: string) {
    this._destinationBackendSetName = value;
  }
  public resetDestinationBackendSetName() {
    this._destinationBackendSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBackendSetNameInput() {
    return this._destinationBackendSetName;
  }

  // is_backend_set_for_non_movable - computed: true, optional: true, required: false
  private _isBackendSetForNonMovable?: boolean | cdktf.IResolvable; 
  public get isBackendSetForNonMovable() {
    return this.getBooleanAttribute('is_backend_set_for_non_movable');
  }
  public set isBackendSetForNonMovable(value: boolean | cdktf.IResolvable) {
    this._isBackendSetForNonMovable = value;
  }
  public resetIsBackendSetForNonMovable() {
    this._isBackendSetForNonMovable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackendSetForNonMovableInput() {
    return this._isBackendSetForNonMovable;
  }

  // source_backend_set_name - computed: true, optional: true, required: false
  private _sourceBackendSetName?: string; 
  public get sourceBackendSetName() {
    return this.getStringAttribute('source_backend_set_name');
  }
  public set sourceBackendSetName(value: string) {
    this._sourceBackendSetName = value;
  }
  public resetSourceBackendSetName() {
    this._sourceBackendSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBackendSetNameInput() {
    return this._sourceBackendSetName;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersBackendSetMappings[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#volume_attachment_reference_instance_id DisasterRecoveryDrProtectionGroup#volume_attachment_reference_instance_id}
  */
  readonly volumeAttachmentReferenceInstanceId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_attachment_reference_instance_id: cdktf.stringToTerraform(struct!.volumeAttachmentReferenceInstanceId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_attachment_reference_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttachmentReferenceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeAttachmentReferenceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttachmentReferenceInstanceId = this._volumeAttachmentReferenceInstanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._volumeAttachmentReferenceInstanceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._volumeAttachmentReferenceInstanceId = value.volumeAttachmentReferenceInstanceId;
    }
  }

  // volume_attachment_reference_instance_id - computed: true, optional: true, required: false
  private _volumeAttachmentReferenceInstanceId?: string; 
  public get volumeAttachmentReferenceInstanceId() {
    return this.getStringAttribute('volume_attachment_reference_instance_id');
  }
  public set volumeAttachmentReferenceInstanceId(value: string) {
    this._volumeAttachmentReferenceInstanceId = value;
  }
  public resetVolumeAttachmentReferenceInstanceId() {
    this._volumeAttachmentReferenceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttachmentReferenceInstanceIdInput() {
    return this._volumeAttachmentReferenceInstanceId;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}
  */
  readonly mountPoint?: string;
}

export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountPoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountPoint = value.mountPoint;
    }
  }

  // mount_point - computed: true, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#block_volume_id DisasterRecoveryDrProtectionGroup#block_volume_id}
  */
  readonly blockVolumeId?: string;
  /**
  * attachment_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#attachment_details DisasterRecoveryDrProtectionGroup#attachment_details}
  */
  readonly attachmentDetails?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails;
  /**
  * mount_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#mount_details DisasterRecoveryDrProtectionGroup#mount_details}
  */
  readonly mountDetails?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails;
}

export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_id: cdktf.stringToTerraform(struct!.blockVolumeId),
    attachment_details: disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsToTerraform(struct!.attachmentDetails),
    mount_details: disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsToTerraform(struct!.mountDetails),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_id: {
      value: cdktf.stringToHclTerraform(struct!.blockVolumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attachment_details: {
      value: disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsToHclTerraform(struct!.attachmentDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList",
    },
    mount_details: {
      value: disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsToHclTerraform(struct!.mountDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeId = this._blockVolumeId;
    }
    if (this._attachmentDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentDetails = this._attachmentDetails?.internalValue;
    }
    if (this._mountDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountDetails = this._mountDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockVolumeId = undefined;
      this._attachmentDetails.internalValue = undefined;
      this._mountDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockVolumeId = value.blockVolumeId;
      this._attachmentDetails.internalValue = value.attachmentDetails;
      this._mountDetails.internalValue = value.mountDetails;
    }
  }

  // block_volume_id - computed: true, optional: true, required: false
  private _blockVolumeId?: string; 
  public get blockVolumeId() {
    return this.getStringAttribute('block_volume_id');
  }
  public set blockVolumeId(value: string) {
    this._blockVolumeId = value;
  }
  public resetBlockVolumeId() {
    this._blockVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeIdInput() {
    return this._blockVolumeId;
  }

  // attachment_details - computed: false, optional: true, required: false
  private _attachmentDetails = new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference(this, "attachment_details");
  public get attachmentDetails() {
    return this._attachmentDetails;
  }
  public putAttachmentDetails(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails) {
    this._attachmentDetails.internalValue = value;
  }
  public resetAttachmentDetails() {
    this._attachmentDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentDetailsInput() {
    return this._attachmentDetails.internalValue;
  }

  // mount_details - computed: false, optional: true, required: false
  private _mountDetails = new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference(this, "mount_details");
  public get mountDetails() {
    return this._mountDetails;
  }
  public putMountDetails(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails) {
    this._mountDetails.internalValue = value;
  }
  public resetMountDetails() {
    this._mountDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDetailsInput() {
    return this._mountDetails.internalValue;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersExportMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_mount_target_id DisasterRecoveryDrProtectionGroup#destination_mount_target_id}
  */
  readonly destinationMountTargetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#export_id DisasterRecoveryDrProtectionGroup#export_id}
  */
  readonly exportId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersExportMappingsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersExportMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_mount_target_id: cdktf.stringToTerraform(struct!.destinationMountTargetId),
    export_id: cdktf.stringToTerraform(struct!.exportId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersExportMappingsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersExportMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationMountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_id: {
      value: cdktf.stringToHclTerraform(struct!.exportId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersExportMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationMountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMountTargetId = this._destinationMountTargetId;
    }
    if (this._exportId !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportId = this._exportId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersExportMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationMountTargetId = undefined;
      this._exportId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationMountTargetId = value.destinationMountTargetId;
      this._exportId = value.exportId;
    }
  }

  // destination_mount_target_id - computed: true, optional: true, required: false
  private _destinationMountTargetId?: string; 
  public get destinationMountTargetId() {
    return this.getStringAttribute('destination_mount_target_id');
  }
  public set destinationMountTargetId(value: string) {
    this._destinationMountTargetId = value;
  }
  public resetDestinationMountTargetId() {
    this._destinationMountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMountTargetIdInput() {
    return this._destinationMountTargetId;
  }

  // export_id - computed: true, optional: true, required: false
  private _exportId?: string; 
  public get exportId() {
    return this.getStringAttribute('export_id');
  }
  public set exportId(value: string) {
    this._exportId = value;
  }
  public resetExportId() {
    this._exportId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportIdInput() {
    return this._exportId;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersExportMappingsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersExportMappings[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}
  */
  readonly mountTargetId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_target_id: cdktf.stringToTerraform(struct!.mountTargetId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetId = this._mountTargetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountTargetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountTargetId = value.mountTargetId;
    }
  }

  // mount_target_id - computed: true, optional: true, required: false
  private _mountTargetId?: string; 
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
  public set mountTargetId(value: string) {
    this._mountTargetId = value;
  }
  public resetMountTargetId() {
    this._mountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetIdInput() {
    return this._mountTargetId;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}
  */
  readonly mountTargetId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_target_id: cdktf.stringToTerraform(struct!.mountTargetId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetId = this._mountTargetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountTargetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountTargetId = value.mountTargetId;
    }
  }

  // mount_target_id - computed: true, optional: true, required: false
  private _mountTargetId?: string; 
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
  public set mountTargetId(value: string) {
    this._mountTargetId = value;
  }
  public resetMountTargetId() {
    this._mountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetIdInput() {
    return this._mountTargetId;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersFileSystemOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#export_path DisasterRecoveryDrProtectionGroup#export_path}
  */
  readonly exportPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}
  */
  readonly mountPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}
  */
  readonly mountTargetId?: string;
  /**
  * mount_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#mount_details DisasterRecoveryDrProtectionGroup#mount_details}
  */
  readonly mountDetails?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails;
  /**
  * unmount_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#unmount_details DisasterRecoveryDrProtectionGroup#unmount_details}
  */
  readonly unmountDetails?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails;
}

export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_path: cdktf.stringToTerraform(struct!.exportPath),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    mount_target_id: cdktf.stringToTerraform(struct!.mountTargetId),
    mount_details: disasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsToTerraform(struct!.mountDetails),
    unmount_details: disasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsToTerraform(struct!.unmountDetails),
  }
}


export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_path: {
      value: cdktf.stringToHclTerraform(struct!.exportPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_details: {
      value: disasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsToHclTerraform(struct!.mountDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList",
    },
    unmount_details: {
      value: disasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsToHclTerraform(struct!.unmountDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersFileSystemOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPath = this._exportPath;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._mountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetId = this._mountTargetId;
    }
    if (this._mountDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountDetails = this._mountDetails?.internalValue;
    }
    if (this._unmountDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmountDetails = this._unmountDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportPath = undefined;
      this._mountPoint = undefined;
      this._mountTargetId = undefined;
      this._mountDetails.internalValue = undefined;
      this._unmountDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportPath = value.exportPath;
      this._mountPoint = value.mountPoint;
      this._mountTargetId = value.mountTargetId;
      this._mountDetails.internalValue = value.mountDetails;
      this._unmountDetails.internalValue = value.unmountDetails;
    }
  }

  // export_path - computed: true, optional: true, required: false
  private _exportPath?: string; 
  public get exportPath() {
    return this.getStringAttribute('export_path');
  }
  public set exportPath(value: string) {
    this._exportPath = value;
  }
  public resetExportPath() {
    this._exportPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPathInput() {
    return this._exportPath;
  }

  // mount_point - computed: true, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // mount_target_id - computed: true, optional: true, required: false
  private _mountTargetId?: string; 
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
  public set mountTargetId(value: string) {
    this._mountTargetId = value;
  }
  public resetMountTargetId() {
    this._mountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetIdInput() {
    return this._mountTargetId;
  }

  // mount_details - computed: false, optional: true, required: false
  private _mountDetails = new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference(this, "mount_details");
  public get mountDetails() {
    return this._mountDetails;
  }
  public putMountDetails(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails) {
    this._mountDetails.internalValue = value;
  }
  public resetMountDetails() {
    this._mountDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDetailsInput() {
    return this._mountDetails.internalValue;
  }

  // unmount_details - computed: false, optional: true, required: false
  private _unmountDetails = new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference(this, "unmount_details");
  public get unmountDetails() {
    return this._unmountDetails;
  }
  public putUnmountDetails(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails) {
    this._unmountDetails.internalValue = value;
  }
  public resetUnmountDetails() {
    this._unmountDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmountDetailsInput() {
    return this._unmountDetails.internalValue;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersFileSystemOperations[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersVnicMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}
  */
  readonly destinationNsgIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}
  */
  readonly destinationSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}
  */
  readonly sourceVnicId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersVnicMappingToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVnicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_nsg_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationNsgIdList),
    destination_subnet_id: cdktf.stringToTerraform(struct!.destinationSubnetId),
    source_vnic_id: cdktf.stringToTerraform(struct!.sourceVnicId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersVnicMappingToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVnicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_nsg_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationNsgIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vnic_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVnicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersVnicMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationNsgIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNsgIdList = this._destinationNsgIdList;
    }
    if (this._destinationSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSubnetId = this._destinationSubnetId;
    }
    if (this._sourceVnicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVnicId = this._sourceVnicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersVnicMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationNsgIdList = undefined;
      this._destinationSubnetId = undefined;
      this._sourceVnicId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationNsgIdList = value.destinationNsgIdList;
      this._destinationSubnetId = value.destinationSubnetId;
      this._sourceVnicId = value.sourceVnicId;
    }
  }

  // destination_nsg_id_list - computed: true, optional: true, required: false
  private _destinationNsgIdList?: string[]; 
  public get destinationNsgIdList() {
    return this.getListAttribute('destination_nsg_id_list');
  }
  public set destinationNsgIdList(value: string[]) {
    this._destinationNsgIdList = value;
  }
  public resetDestinationNsgIdList() {
    this._destinationNsgIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNsgIdListInput() {
    return this._destinationNsgIdList;
  }

  // destination_subnet_id - computed: true, optional: true, required: false
  private _destinationSubnetId?: string; 
  public get destinationSubnetId() {
    return this.getStringAttribute('destination_subnet_id');
  }
  public set destinationSubnetId(value: string) {
    this._destinationSubnetId = value;
  }
  public resetDestinationSubnetId() {
    this._destinationSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSubnetIdInput() {
    return this._destinationSubnetId;
  }

  // source_vnic_id - computed: true, optional: true, required: false
  private _sourceVnicId?: string; 
  public get sourceVnicId() {
    return this.getStringAttribute('source_vnic_id');
  }
  public set sourceVnicId(value: string) {
    this._sourceVnicId = value;
  }
  public resetSourceVnicId() {
    this._sourceVnicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVnicIdInput() {
    return this._sourceVnicId;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersVnicMappingList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersVnicMapping[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersVnicMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}
  */
  readonly destinationNsgIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_address DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_address}
  */
  readonly destinationPrimaryPrivateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_hostname_label DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_hostname_label}
  */
  readonly destinationPrimaryPrivateIpHostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}
  */
  readonly destinationSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}
  */
  readonly sourceVnicId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersVnicMappingsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVnicMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_nsg_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationNsgIdList),
    destination_primary_private_ip_address: cdktf.stringToTerraform(struct!.destinationPrimaryPrivateIpAddress),
    destination_primary_private_ip_hostname_label: cdktf.stringToTerraform(struct!.destinationPrimaryPrivateIpHostnameLabel),
    destination_subnet_id: cdktf.stringToTerraform(struct!.destinationSubnetId),
    source_vnic_id: cdktf.stringToTerraform(struct!.sourceVnicId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersVnicMappingsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVnicMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_nsg_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationNsgIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_primary_private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.destinationPrimaryPrivateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_primary_private_ip_hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.destinationPrimaryPrivateIpHostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vnic_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVnicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersVnicMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationNsgIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNsgIdList = this._destinationNsgIdList;
    }
    if (this._destinationPrimaryPrivateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrimaryPrivateIpAddress = this._destinationPrimaryPrivateIpAddress;
    }
    if (this._destinationPrimaryPrivateIpHostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrimaryPrivateIpHostnameLabel = this._destinationPrimaryPrivateIpHostnameLabel;
    }
    if (this._destinationSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSubnetId = this._destinationSubnetId;
    }
    if (this._sourceVnicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVnicId = this._sourceVnicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersVnicMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationNsgIdList = undefined;
      this._destinationPrimaryPrivateIpAddress = undefined;
      this._destinationPrimaryPrivateIpHostnameLabel = undefined;
      this._destinationSubnetId = undefined;
      this._sourceVnicId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationNsgIdList = value.destinationNsgIdList;
      this._destinationPrimaryPrivateIpAddress = value.destinationPrimaryPrivateIpAddress;
      this._destinationPrimaryPrivateIpHostnameLabel = value.destinationPrimaryPrivateIpHostnameLabel;
      this._destinationSubnetId = value.destinationSubnetId;
      this._sourceVnicId = value.sourceVnicId;
    }
  }

  // destination_nsg_id_list - computed: true, optional: true, required: false
  private _destinationNsgIdList?: string[]; 
  public get destinationNsgIdList() {
    return this.getListAttribute('destination_nsg_id_list');
  }
  public set destinationNsgIdList(value: string[]) {
    this._destinationNsgIdList = value;
  }
  public resetDestinationNsgIdList() {
    this._destinationNsgIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNsgIdListInput() {
    return this._destinationNsgIdList;
  }

  // destination_primary_private_ip_address - computed: true, optional: true, required: false
  private _destinationPrimaryPrivateIpAddress?: string; 
  public get destinationPrimaryPrivateIpAddress() {
    return this.getStringAttribute('destination_primary_private_ip_address');
  }
  public set destinationPrimaryPrivateIpAddress(value: string) {
    this._destinationPrimaryPrivateIpAddress = value;
  }
  public resetDestinationPrimaryPrivateIpAddress() {
    this._destinationPrimaryPrivateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrimaryPrivateIpAddressInput() {
    return this._destinationPrimaryPrivateIpAddress;
  }

  // destination_primary_private_ip_hostname_label - computed: true, optional: true, required: false
  private _destinationPrimaryPrivateIpHostnameLabel?: string; 
  public get destinationPrimaryPrivateIpHostnameLabel() {
    return this.getStringAttribute('destination_primary_private_ip_hostname_label');
  }
  public set destinationPrimaryPrivateIpHostnameLabel(value: string) {
    this._destinationPrimaryPrivateIpHostnameLabel = value;
  }
  public resetDestinationPrimaryPrivateIpHostnameLabel() {
    this._destinationPrimaryPrivateIpHostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrimaryPrivateIpHostnameLabelInput() {
    return this._destinationPrimaryPrivateIpHostnameLabel;
  }

  // destination_subnet_id - computed: true, optional: true, required: false
  private _destinationSubnetId?: string; 
  public get destinationSubnetId() {
    return this.getStringAttribute('destination_subnet_id');
  }
  public set destinationSubnetId(value: string) {
    this._destinationSubnetId = value;
  }
  public resetDestinationSubnetId() {
    this._destinationSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSubnetIdInput() {
    return this._destinationSubnetId;
  }

  // source_vnic_id - computed: true, optional: true, required: false
  private _sourceVnicId?: string; 
  public get sourceVnicId() {
    return this.getStringAttribute('source_vnic_id');
  }
  public set sourceVnicId(value: string) {
    this._sourceVnicId = value;
  }
  public resetSourceVnicId() {
    this._sourceVnicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVnicIdInput() {
    return this._sourceVnicId;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersVnicMappingsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersVnicMappings[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_availability_domain DisasterRecoveryDrProtectionGroup#destination_availability_domain}
  */
  readonly destinationAvailabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_capacity_reservation_id DisasterRecoveryDrProtectionGroup#destination_capacity_reservation_id}
  */
  readonly destinationCapacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_compartment_id DisasterRecoveryDrProtectionGroup#destination_compartment_id}
  */
  readonly destinationCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_dedicated_vm_host_id DisasterRecoveryDrProtectionGroup#destination_dedicated_vm_host_id}
  */
  readonly destinationDedicatedVmHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_load_balancer_id}
  */
  readonly destinationLoadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#destination_network_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_network_load_balancer_id}
  */
  readonly destinationNetworkLoadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#is_movable DisasterRecoveryDrProtectionGroup#is_movable}
  */
  readonly isMovable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#is_retain_fault_domain DisasterRecoveryDrProtectionGroup#is_retain_fault_domain}
  */
  readonly isRetainFaultDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#is_start_stop_enabled DisasterRecoveryDrProtectionGroup#is_start_stop_enabled}
  */
  readonly isStartStopEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#member_id DisasterRecoveryDrProtectionGroup#member_id}
  */
  readonly memberId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#member_type DisasterRecoveryDrProtectionGroup#member_type}
  */
  readonly memberType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#password_vault_secret_id DisasterRecoveryDrProtectionGroup#password_vault_secret_id}
  */
  readonly passwordVaultSecretId?: string;
  /**
  * backend_set_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#backend_set_mappings DisasterRecoveryDrProtectionGroup#backend_set_mappings}
  */
  readonly backendSetMappings?: DisasterRecoveryDrProtectionGroupMembersBackendSetMappings[] | cdktf.IResolvable;
  /**
  * block_volume_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#block_volume_operations DisasterRecoveryDrProtectionGroup#block_volume_operations}
  */
  readonly blockVolumeOperations?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations[] | cdktf.IResolvable;
  /**
  * export_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#export_mappings DisasterRecoveryDrProtectionGroup#export_mappings}
  */
  readonly exportMappings?: DisasterRecoveryDrProtectionGroupMembersExportMappings[] | cdktf.IResolvable;
  /**
  * file_system_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#file_system_operations DisasterRecoveryDrProtectionGroup#file_system_operations}
  */
  readonly fileSystemOperations?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperations[] | cdktf.IResolvable;
  /**
  * vnic_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#vnic_mapping DisasterRecoveryDrProtectionGroup#vnic_mapping}
  */
  readonly vnicMapping?: DisasterRecoveryDrProtectionGroupMembersVnicMapping[] | cdktf.IResolvable;
  /**
  * vnic_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#vnic_mappings DisasterRecoveryDrProtectionGroup#vnic_mappings}
  */
  readonly vnicMappings?: DisasterRecoveryDrProtectionGroupMembersVnicMappings[] | cdktf.IResolvable;
}

export function disasterRecoveryDrProtectionGroupMembersToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_availability_domain: cdktf.stringToTerraform(struct!.destinationAvailabilityDomain),
    destination_capacity_reservation_id: cdktf.stringToTerraform(struct!.destinationCapacityReservationId),
    destination_compartment_id: cdktf.stringToTerraform(struct!.destinationCompartmentId),
    destination_dedicated_vm_host_id: cdktf.stringToTerraform(struct!.destinationDedicatedVmHostId),
    destination_load_balancer_id: cdktf.stringToTerraform(struct!.destinationLoadBalancerId),
    destination_network_load_balancer_id: cdktf.stringToTerraform(struct!.destinationNetworkLoadBalancerId),
    is_movable: cdktf.booleanToTerraform(struct!.isMovable),
    is_retain_fault_domain: cdktf.booleanToTerraform(struct!.isRetainFaultDomain),
    is_start_stop_enabled: cdktf.booleanToTerraform(struct!.isStartStopEnabled),
    member_id: cdktf.stringToTerraform(struct!.memberId),
    member_type: cdktf.stringToTerraform(struct!.memberType),
    password_vault_secret_id: cdktf.stringToTerraform(struct!.passwordVaultSecretId),
    backend_set_mappings: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersBackendSetMappingsToTerraform, true)(struct!.backendSetMappings),
    block_volume_operations: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsToTerraform, true)(struct!.blockVolumeOperations),
    export_mappings: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersExportMappingsToTerraform, true)(struct!.exportMappings),
    file_system_operations: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersFileSystemOperationsToTerraform, true)(struct!.fileSystemOperations),
    vnic_mapping: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersVnicMappingToTerraform, true)(struct!.vnicMapping),
    vnic_mappings: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersVnicMappingsToTerraform, true)(struct!.vnicMappings),
  }
}


export function disasterRecoveryDrProtectionGroupMembersToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.destinationAvailabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_capacity_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationCapacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_dedicated_vm_host_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDedicatedVmHostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationLoadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_network_load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationNetworkLoadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_movable: {
      value: cdktf.booleanToHclTerraform(struct!.isMovable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_retain_fault_domain: {
      value: cdktf.booleanToHclTerraform(struct!.isRetainFaultDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_start_stop_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isStartStopEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    member_id: {
      value: cdktf.stringToHclTerraform(struct!.memberId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_type: {
      value: cdktf.stringToHclTerraform(struct!.memberType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordVaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_set_mappings: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersBackendSetMappingsToHclTerraform, true)(struct!.backendSetMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList",
    },
    block_volume_operations: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsToHclTerraform, true)(struct!.blockVolumeOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList",
    },
    export_mappings: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersExportMappingsToHclTerraform, true)(struct!.exportMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersExportMappingsList",
    },
    file_system_operations: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersFileSystemOperationsToHclTerraform, true)(struct!.fileSystemOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList",
    },
    vnic_mapping: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersVnicMappingToHclTerraform, true)(struct!.vnicMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersVnicMappingList",
    },
    vnic_mappings: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersVnicMappingsToHclTerraform, true)(struct!.vnicMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersVnicMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAvailabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAvailabilityDomain = this._destinationAvailabilityDomain;
    }
    if (this._destinationCapacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCapacityReservationId = this._destinationCapacityReservationId;
    }
    if (this._destinationCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCompartmentId = this._destinationCompartmentId;
    }
    if (this._destinationDedicatedVmHostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDedicatedVmHostId = this._destinationDedicatedVmHostId;
    }
    if (this._destinationLoadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationLoadBalancerId = this._destinationLoadBalancerId;
    }
    if (this._destinationNetworkLoadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNetworkLoadBalancerId = this._destinationNetworkLoadBalancerId;
    }
    if (this._isMovable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMovable = this._isMovable;
    }
    if (this._isRetainFaultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRetainFaultDomain = this._isRetainFaultDomain;
    }
    if (this._isStartStopEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isStartStopEnabled = this._isStartStopEnabled;
    }
    if (this._memberId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberId = this._memberId;
    }
    if (this._memberType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberType = this._memberType;
    }
    if (this._passwordVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVaultSecretId = this._passwordVaultSecretId;
    }
    if (this._backendSetMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendSetMappings = this._backendSetMappings?.internalValue;
    }
    if (this._blockVolumeOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeOperations = this._blockVolumeOperations?.internalValue;
    }
    if (this._exportMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportMappings = this._exportMappings?.internalValue;
    }
    if (this._fileSystemOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemOperations = this._fileSystemOperations?.internalValue;
    }
    if (this._vnicMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicMapping = this._vnicMapping?.internalValue;
    }
    if (this._vnicMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicMappings = this._vnicMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAvailabilityDomain = undefined;
      this._destinationCapacityReservationId = undefined;
      this._destinationCompartmentId = undefined;
      this._destinationDedicatedVmHostId = undefined;
      this._destinationLoadBalancerId = undefined;
      this._destinationNetworkLoadBalancerId = undefined;
      this._isMovable = undefined;
      this._isRetainFaultDomain = undefined;
      this._isStartStopEnabled = undefined;
      this._memberId = undefined;
      this._memberType = undefined;
      this._passwordVaultSecretId = undefined;
      this._backendSetMappings.internalValue = undefined;
      this._blockVolumeOperations.internalValue = undefined;
      this._exportMappings.internalValue = undefined;
      this._fileSystemOperations.internalValue = undefined;
      this._vnicMapping.internalValue = undefined;
      this._vnicMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAvailabilityDomain = value.destinationAvailabilityDomain;
      this._destinationCapacityReservationId = value.destinationCapacityReservationId;
      this._destinationCompartmentId = value.destinationCompartmentId;
      this._destinationDedicatedVmHostId = value.destinationDedicatedVmHostId;
      this._destinationLoadBalancerId = value.destinationLoadBalancerId;
      this._destinationNetworkLoadBalancerId = value.destinationNetworkLoadBalancerId;
      this._isMovable = value.isMovable;
      this._isRetainFaultDomain = value.isRetainFaultDomain;
      this._isStartStopEnabled = value.isStartStopEnabled;
      this._memberId = value.memberId;
      this._memberType = value.memberType;
      this._passwordVaultSecretId = value.passwordVaultSecretId;
      this._backendSetMappings.internalValue = value.backendSetMappings;
      this._blockVolumeOperations.internalValue = value.blockVolumeOperations;
      this._exportMappings.internalValue = value.exportMappings;
      this._fileSystemOperations.internalValue = value.fileSystemOperations;
      this._vnicMapping.internalValue = value.vnicMapping;
      this._vnicMappings.internalValue = value.vnicMappings;
    }
  }

  // destination_availability_domain - computed: true, optional: true, required: false
  private _destinationAvailabilityDomain?: string; 
  public get destinationAvailabilityDomain() {
    return this.getStringAttribute('destination_availability_domain');
  }
  public set destinationAvailabilityDomain(value: string) {
    this._destinationAvailabilityDomain = value;
  }
  public resetDestinationAvailabilityDomain() {
    this._destinationAvailabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAvailabilityDomainInput() {
    return this._destinationAvailabilityDomain;
  }

  // destination_capacity_reservation_id - computed: true, optional: true, required: false
  private _destinationCapacityReservationId?: string; 
  public get destinationCapacityReservationId() {
    return this.getStringAttribute('destination_capacity_reservation_id');
  }
  public set destinationCapacityReservationId(value: string) {
    this._destinationCapacityReservationId = value;
  }
  public resetDestinationCapacityReservationId() {
    this._destinationCapacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCapacityReservationIdInput() {
    return this._destinationCapacityReservationId;
  }

  // destination_compartment_id - computed: true, optional: true, required: false
  private _destinationCompartmentId?: string; 
  public get destinationCompartmentId() {
    return this.getStringAttribute('destination_compartment_id');
  }
  public set destinationCompartmentId(value: string) {
    this._destinationCompartmentId = value;
  }
  public resetDestinationCompartmentId() {
    this._destinationCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCompartmentIdInput() {
    return this._destinationCompartmentId;
  }

  // destination_dedicated_vm_host_id - computed: true, optional: true, required: false
  private _destinationDedicatedVmHostId?: string; 
  public get destinationDedicatedVmHostId() {
    return this.getStringAttribute('destination_dedicated_vm_host_id');
  }
  public set destinationDedicatedVmHostId(value: string) {
    this._destinationDedicatedVmHostId = value;
  }
  public resetDestinationDedicatedVmHostId() {
    this._destinationDedicatedVmHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDedicatedVmHostIdInput() {
    return this._destinationDedicatedVmHostId;
  }

  // destination_load_balancer_id - computed: true, optional: true, required: false
  private _destinationLoadBalancerId?: string; 
  public get destinationLoadBalancerId() {
    return this.getStringAttribute('destination_load_balancer_id');
  }
  public set destinationLoadBalancerId(value: string) {
    this._destinationLoadBalancerId = value;
  }
  public resetDestinationLoadBalancerId() {
    this._destinationLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLoadBalancerIdInput() {
    return this._destinationLoadBalancerId;
  }

  // destination_network_load_balancer_id - computed: true, optional: true, required: false
  private _destinationNetworkLoadBalancerId?: string; 
  public get destinationNetworkLoadBalancerId() {
    return this.getStringAttribute('destination_network_load_balancer_id');
  }
  public set destinationNetworkLoadBalancerId(value: string) {
    this._destinationNetworkLoadBalancerId = value;
  }
  public resetDestinationNetworkLoadBalancerId() {
    this._destinationNetworkLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkLoadBalancerIdInput() {
    return this._destinationNetworkLoadBalancerId;
  }

  // is_movable - computed: true, optional: true, required: false
  private _isMovable?: boolean | cdktf.IResolvable; 
  public get isMovable() {
    return this.getBooleanAttribute('is_movable');
  }
  public set isMovable(value: boolean | cdktf.IResolvable) {
    this._isMovable = value;
  }
  public resetIsMovable() {
    this._isMovable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMovableInput() {
    return this._isMovable;
  }

  // is_retain_fault_domain - computed: true, optional: true, required: false
  private _isRetainFaultDomain?: boolean | cdktf.IResolvable; 
  public get isRetainFaultDomain() {
    return this.getBooleanAttribute('is_retain_fault_domain');
  }
  public set isRetainFaultDomain(value: boolean | cdktf.IResolvable) {
    this._isRetainFaultDomain = value;
  }
  public resetIsRetainFaultDomain() {
    this._isRetainFaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRetainFaultDomainInput() {
    return this._isRetainFaultDomain;
  }

  // is_start_stop_enabled - computed: true, optional: true, required: false
  private _isStartStopEnabled?: boolean | cdktf.IResolvable; 
  public get isStartStopEnabled() {
    return this.getBooleanAttribute('is_start_stop_enabled');
  }
  public set isStartStopEnabled(value: boolean | cdktf.IResolvable) {
    this._isStartStopEnabled = value;
  }
  public resetIsStartStopEnabled() {
    this._isStartStopEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStartStopEnabledInput() {
    return this._isStartStopEnabled;
  }

  // member_id - computed: false, optional: false, required: true
  private _memberId?: string; 
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId;
  }

  // member_type - computed: false, optional: false, required: true
  private _memberType?: string; 
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
  public set memberType(value: string) {
    this._memberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTypeInput() {
    return this._memberType;
  }

  // password_vault_secret_id - computed: true, optional: true, required: false
  private _passwordVaultSecretId?: string; 
  public get passwordVaultSecretId() {
    return this.getStringAttribute('password_vault_secret_id');
  }
  public set passwordVaultSecretId(value: string) {
    this._passwordVaultSecretId = value;
  }
  public resetPasswordVaultSecretId() {
    this._passwordVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVaultSecretIdInput() {
    return this._passwordVaultSecretId;
  }

  // backend_set_mappings - computed: false, optional: true, required: false
  private _backendSetMappings = new DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList(this, "backend_set_mappings", false);
  public get backendSetMappings() {
    return this._backendSetMappings;
  }
  public putBackendSetMappings(value: DisasterRecoveryDrProtectionGroupMembersBackendSetMappings[] | cdktf.IResolvable) {
    this._backendSetMappings.internalValue = value;
  }
  public resetBackendSetMappings() {
    this._backendSetMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSetMappingsInput() {
    return this._backendSetMappings.internalValue;
  }

  // block_volume_operations - computed: false, optional: true, required: false
  private _blockVolumeOperations = new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList(this, "block_volume_operations", false);
  public get blockVolumeOperations() {
    return this._blockVolumeOperations;
  }
  public putBlockVolumeOperations(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations[] | cdktf.IResolvable) {
    this._blockVolumeOperations.internalValue = value;
  }
  public resetBlockVolumeOperations() {
    this._blockVolumeOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeOperationsInput() {
    return this._blockVolumeOperations.internalValue;
  }

  // export_mappings - computed: false, optional: true, required: false
  private _exportMappings = new DisasterRecoveryDrProtectionGroupMembersExportMappingsList(this, "export_mappings", false);
  public get exportMappings() {
    return this._exportMappings;
  }
  public putExportMappings(value: DisasterRecoveryDrProtectionGroupMembersExportMappings[] | cdktf.IResolvable) {
    this._exportMappings.internalValue = value;
  }
  public resetExportMappings() {
    this._exportMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportMappingsInput() {
    return this._exportMappings.internalValue;
  }

  // file_system_operations - computed: false, optional: true, required: false
  private _fileSystemOperations = new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList(this, "file_system_operations", false);
  public get fileSystemOperations() {
    return this._fileSystemOperations;
  }
  public putFileSystemOperations(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperations[] | cdktf.IResolvable) {
    this._fileSystemOperations.internalValue = value;
  }
  public resetFileSystemOperations() {
    this._fileSystemOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemOperationsInput() {
    return this._fileSystemOperations.internalValue;
  }

  // vnic_mapping - computed: false, optional: true, required: false
  private _vnicMapping = new DisasterRecoveryDrProtectionGroupMembersVnicMappingList(this, "vnic_mapping", false);
  public get vnicMapping() {
    return this._vnicMapping;
  }
  public putVnicMapping(value: DisasterRecoveryDrProtectionGroupMembersVnicMapping[] | cdktf.IResolvable) {
    this._vnicMapping.internalValue = value;
  }
  public resetVnicMapping() {
    this._vnicMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicMappingInput() {
    return this._vnicMapping.internalValue;
  }

  // vnic_mappings - computed: false, optional: true, required: false
  private _vnicMappings = new DisasterRecoveryDrProtectionGroupMembersVnicMappingsList(this, "vnic_mappings", false);
  public get vnicMappings() {
    return this._vnicMappings;
  }
  public putVnicMappings(value: DisasterRecoveryDrProtectionGroupMembersVnicMappings[] | cdktf.IResolvable) {
    this._vnicMappings.internalValue = value;
  }
  public resetVnicMappings() {
    this._vnicMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicMappingsInput() {
    return this._vnicMappings.internalValue;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembers[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#create DisasterRecoveryDrProtectionGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#delete DisasterRecoveryDrProtectionGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#update DisasterRecoveryDrProtectionGroup#update}
  */
  readonly update?: string;
}

export function disasterRecoveryDrProtectionGroupTimeoutsToTerraform(struct?: DisasterRecoveryDrProtectionGroupTimeouts | cdktf.IResolvable): any {
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


export function disasterRecoveryDrProtectionGroupTimeoutsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupTimeouts | cdktf.IResolvable): any {
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

export class DisasterRecoveryDrProtectionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DisasterRecoveryDrProtectionGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group oci_disaster_recovery_dr_protection_group}
*/
export class DisasterRecoveryDrProtectionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_disaster_recovery_dr_protection_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DisasterRecoveryDrProtectionGroup to import
  * @param importFromId The id of the existing DisasterRecoveryDrProtectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DisasterRecoveryDrProtectionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_disaster_recovery_dr_protection_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/disaster_recovery_dr_protection_group oci_disaster_recovery_dr_protection_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DisasterRecoveryDrProtectionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DisasterRecoveryDrProtectionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_disaster_recovery_dr_protection_group',
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
    this._disassociateTrigger = config.disassociateTrigger;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._association.internalValue = config.association;
    this._logLocation.internalValue = config.logLocation;
    this._members.internalValue = config.members;
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

  // disassociate_trigger - computed: false, optional: true, required: false
  private _disassociateTrigger?: number; 
  public get disassociateTrigger() {
    return this.getNumberAttribute('disassociate_trigger');
  }
  public set disassociateTrigger(value: number) {
    this._disassociateTrigger = value;
  }
  public resetDisassociateTrigger() {
    this._disassociateTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disassociateTriggerInput() {
    return this._disassociateTrigger;
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

  // life_cycle_details - computed: true, optional: false, required: false
  public get lifeCycleDetails() {
    return this.getStringAttribute('life_cycle_details');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: false
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // peer_id - computed: true, optional: false, required: false
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // peer_region - computed: true, optional: false, required: false
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
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

  // association - computed: false, optional: true, required: false
  private _association = new DisasterRecoveryDrProtectionGroupAssociationOutputReference(this, "association");
  public get association() {
    return this._association;
  }
  public putAssociation(value: DisasterRecoveryDrProtectionGroupAssociation) {
    this._association.internalValue = value;
  }
  public resetAssociation() {
    this._association.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationInput() {
    return this._association.internalValue;
  }

  // log_location - computed: false, optional: false, required: true
  private _logLocation = new DisasterRecoveryDrProtectionGroupLogLocationOutputReference(this, "log_location");
  public get logLocation() {
    return this._logLocation;
  }
  public putLogLocation(value: DisasterRecoveryDrProtectionGroupLogLocation) {
    this._logLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLocationInput() {
    return this._logLocation.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new DisasterRecoveryDrProtectionGroupMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DisasterRecoveryDrProtectionGroupMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DisasterRecoveryDrProtectionGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DisasterRecoveryDrProtectionGroupTimeouts) {
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
      disassociate_trigger: cdktf.numberToTerraform(this._disassociateTrigger),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      association: disasterRecoveryDrProtectionGroupAssociationToTerraform(this._association.internalValue),
      log_location: disasterRecoveryDrProtectionGroupLogLocationToTerraform(this._logLocation.internalValue),
      members: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersToTerraform, true)(this._members.internalValue),
      timeouts: disasterRecoveryDrProtectionGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      disassociate_trigger: {
        value: cdktf.numberToHclTerraform(this._disassociateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      association: {
        value: disasterRecoveryDrProtectionGroupAssociationToHclTerraform(this._association.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisasterRecoveryDrProtectionGroupAssociationList",
      },
      log_location: {
        value: disasterRecoveryDrProtectionGroupLogLocationToHclTerraform(this._logLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisasterRecoveryDrProtectionGroupLogLocationList",
      },
      members: {
        value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisasterRecoveryDrProtectionGroupMembersList",
      },
      timeouts: {
        value: disasterRecoveryDrProtectionGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DisasterRecoveryDrProtectionGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
