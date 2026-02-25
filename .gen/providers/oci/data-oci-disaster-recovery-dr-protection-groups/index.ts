// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDisasterRecoveryDrProtectionGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#compartment_id DataOciDisasterRecoveryDrProtectionGroups#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#display_name DataOciDisasterRecoveryDrProtectionGroups#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroups#dr_protection_group_id}
  */
  readonly drProtectionGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#id DataOciDisasterRecoveryDrProtectionGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#lifecycle_sub_state DataOciDisasterRecoveryDrProtectionGroups#lifecycle_sub_state}
  */
  readonly lifecycleSubState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#role DataOciDisasterRecoveryDrProtectionGroups#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#state DataOciDisasterRecoveryDrProtectionGroups#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#filter DataOciDisasterRecoveryDrProtectionGroups#filter}
  */
  readonly filter?: DataOciDisasterRecoveryDrProtectionGroupsFilter[] | cdktf.IResolvable;
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_backend_set_name - computed: true, optional: false, required: false
  public get destinationBackendSetName() {
    return this.getStringAttribute('destination_backend_set_name');
  }

  // is_backend_set_for_non_movable - computed: true, optional: false, required: false
  public get isBackendSetForNonMovable() {
    return this.getBooleanAttribute('is_backend_set_for_non_movable');
  }

  // source_backend_set_name - computed: true, optional: false, required: false
  public get sourceBackendSetName() {
    return this.getStringAttribute('source_backend_set_name');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // volume_attachment_reference_instance_id - computed: true, optional: false, required: false
  public get volumeAttachmentReferenceInstanceId() {
    return this.getStringAttribute('volume_attachment_reference_instance_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachment_details - computed: true, optional: false, required: false
  private _attachmentDetails = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList(this, "attachment_details", false);
  public get attachmentDetails() {
    return this._attachmentDetails;
  }

  // block_volume_id - computed: true, optional: false, required: false
  public get blockVolumeId() {
    return this.getStringAttribute('block_volume_id');
  }

  // mount_details - computed: true, optional: false, required: false
  private _mountDetails = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList(this, "mount_details", false);
  public get mountDetails() {
    return this._mountDetails;
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_mount_target_id - computed: true, optional: false, required: false
  public get destinationMountTargetId() {
    return this.getStringAttribute('destination_mount_target_id');
  }

  // export_id - computed: true, optional: false, required: false
  public get exportId() {
    return this.getStringAttribute('export_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_target_id - computed: true, optional: false, required: false
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_target_id - computed: true, optional: false, required: false
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_path - computed: true, optional: false, required: false
  public get exportPath() {
    return this.getStringAttribute('export_path');
  }

  // mount_details - computed: true, optional: false, required: false
  private _mountDetails = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList(this, "mount_details", false);
  public get mountDetails() {
    return this._mountDetails;
  }

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }

  // mount_target_id - computed: true, optional: false, required: false
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }

  // unmount_details - computed: true, optional: false, required: false
  private _unmountDetails = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList(this, "unmount_details", false);
  public get unmountDetails() {
    return this._unmountDetails;
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_nsg_id_list - computed: true, optional: false, required: false
  public get destinationNsgIdList() {
    return this.getListAttribute('destination_nsg_id_list');
  }

  // destination_subnet_id - computed: true, optional: false, required: false
  public get destinationSubnetId() {
    return this.getStringAttribute('destination_subnet_id');
  }

  // source_vnic_id - computed: true, optional: false, required: false
  public get sourceVnicId() {
    return this.getStringAttribute('source_vnic_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_nsg_id_list - computed: true, optional: false, required: false
  public get destinationNsgIdList() {
    return this.getListAttribute('destination_nsg_id_list');
  }

  // destination_primary_private_ip_address - computed: true, optional: false, required: false
  public get destinationPrimaryPrivateIpAddress() {
    return this.getStringAttribute('destination_primary_private_ip_address');
  }

  // destination_primary_private_ip_hostname_label - computed: true, optional: false, required: false
  public get destinationPrimaryPrivateIpHostnameLabel() {
    return this.getStringAttribute('destination_primary_private_ip_hostname_label');
  }

  // destination_subnet_id - computed: true, optional: false, required: false
  public get destinationSubnetId() {
    return this.getStringAttribute('destination_subnet_id');
  }

  // source_vnic_id - computed: true, optional: false, required: false
  public get sourceVnicId() {
    return this.getStringAttribute('source_vnic_id');
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_set_mappings - computed: true, optional: false, required: false
  private _backendSetMappings = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList(this, "backend_set_mappings", false);
  public get backendSetMappings() {
    return this._backendSetMappings;
  }

  // block_volume_operations - computed: true, optional: false, required: false
  private _blockVolumeOperations = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList(this, "block_volume_operations", false);
  public get blockVolumeOperations() {
    return this._blockVolumeOperations;
  }

  // destination_availability_domain - computed: true, optional: false, required: false
  public get destinationAvailabilityDomain() {
    return this.getStringAttribute('destination_availability_domain');
  }

  // destination_capacity_reservation_id - computed: true, optional: false, required: false
  public get destinationCapacityReservationId() {
    return this.getStringAttribute('destination_capacity_reservation_id');
  }

  // destination_compartment_id - computed: true, optional: false, required: false
  public get destinationCompartmentId() {
    return this.getStringAttribute('destination_compartment_id');
  }

  // destination_dedicated_vm_host_id - computed: true, optional: false, required: false
  public get destinationDedicatedVmHostId() {
    return this.getStringAttribute('destination_dedicated_vm_host_id');
  }

  // destination_load_balancer_id - computed: true, optional: false, required: false
  public get destinationLoadBalancerId() {
    return this.getStringAttribute('destination_load_balancer_id');
  }

  // destination_network_load_balancer_id - computed: true, optional: false, required: false
  public get destinationNetworkLoadBalancerId() {
    return this.getStringAttribute('destination_network_load_balancer_id');
  }

  // export_mappings - computed: true, optional: false, required: false
  private _exportMappings = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList(this, "export_mappings", false);
  public get exportMappings() {
    return this._exportMappings;
  }

  // file_system_operations - computed: true, optional: false, required: false
  private _fileSystemOperations = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList(this, "file_system_operations", false);
  public get fileSystemOperations() {
    return this._fileSystemOperations;
  }

  // is_movable - computed: true, optional: false, required: false
  public get isMovable() {
    return this.getBooleanAttribute('is_movable');
  }

  // is_retain_fault_domain - computed: true, optional: false, required: false
  public get isRetainFaultDomain() {
    return this.getBooleanAttribute('is_retain_fault_domain');
  }

  // is_start_stop_enabled - computed: true, optional: false, required: false
  public get isStartStopEnabled() {
    return this.getBooleanAttribute('is_start_stop_enabled');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }

  // member_type - computed: true, optional: false, required: false
  public get memberType() {
    return this.getStringAttribute('member_type');
  }

  // password_vault_secret_id - computed: true, optional: false, required: false
  public get passwordVaultSecretId() {
    return this.getStringAttribute('password_vault_secret_id');
  }

  // vnic_mapping - computed: true, optional: false, required: false
  private _vnicMapping = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList(this, "vnic_mapping", false);
  public get vnicMapping() {
    return this._vnicMapping;
  }

  // vnic_mappings - computed: true, optional: false, required: false
  private _vnicMappings = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList(this, "vnic_mappings", false);
  public get vnicMappings() {
    return this._vnicMappings;
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association - computed: true, optional: false, required: false
  private _association = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList(this, "association", false);
  public get association() {
    return this._association;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // disassociate_trigger - computed: true, optional: false, required: false
  public get disassociateTrigger() {
    return this.getNumberAttribute('disassociate_trigger');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // life_cycle_details - computed: true, optional: false, required: false
  public get lifeCycleDetails() {
    return this.getStringAttribute('life_cycle_details');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: false
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // log_location - computed: true, optional: false, required: false
  private _logLocation = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList(this, "log_location", false);
  public get logLocation() {
    return this._logLocation;
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList(this, "members", false);
  public get members() {
    return this._members;
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
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection {
}

export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrProtectionGroupsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#name DataOciDisasterRecoveryDrProtectionGroups#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#regex DataOciDisasterRecoveryDrProtectionGroups#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#values DataOciDisasterRecoveryDrProtectionGroups#values}
  */
  readonly values: string[];
}

export function dataOciDisasterRecoveryDrProtectionGroupsFilterToTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDisasterRecoveryDrProtectionGroupsFilterToHclTerraform(struct?: DataOciDisasterRecoveryDrProtectionGroupsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrProtectionGroupsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrProtectionGroupsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDisasterRecoveryDrProtectionGroupsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDisasterRecoveryDrProtectionGroupsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference {
    return new DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups oci_disaster_recovery_dr_protection_groups}
*/
export class DataOciDisasterRecoveryDrProtectionGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_disaster_recovery_dr_protection_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDisasterRecoveryDrProtectionGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDisasterRecoveryDrProtectionGroups to import
  * @param importFromId The id of the existing DataOciDisasterRecoveryDrProtectionGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDisasterRecoveryDrProtectionGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_disaster_recovery_dr_protection_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/disaster_recovery_dr_protection_groups oci_disaster_recovery_dr_protection_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDisasterRecoveryDrProtectionGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDisasterRecoveryDrProtectionGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_disaster_recovery_dr_protection_groups',
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
    this._displayName = config.displayName;
    this._drProtectionGroupId = config.drProtectionGroupId;
    this._id = config.id;
    this._lifecycleSubState = config.lifecycleSubState;
    this._role = config.role;
    this._state = config.state;
    this._filter.internalValue = config.filter;
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

  // display_name - computed: false, optional: true, required: false
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

  // dr_protection_group_collection - computed: true, optional: false, required: false
  private _drProtectionGroupCollection = new DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList(this, "dr_protection_group_collection", false);
  public get drProtectionGroupCollection() {
    return this._drProtectionGroupCollection;
  }

  // dr_protection_group_id - computed: false, optional: true, required: false
  private _drProtectionGroupId?: string; 
  public get drProtectionGroupId() {
    return this.getStringAttribute('dr_protection_group_id');
  }
  public set drProtectionGroupId(value: string) {
    this._drProtectionGroupId = value;
  }
  public resetDrProtectionGroupId() {
    this._drProtectionGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drProtectionGroupIdInput() {
    return this._drProtectionGroupId;
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

  // lifecycle_sub_state - computed: false, optional: true, required: false
  private _lifecycleSubState?: string; 
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }
  public set lifecycleSubState(value: string) {
    this._lifecycleSubState = value;
  }
  public resetLifecycleSubState() {
    this._lifecycleSubState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleSubStateInput() {
    return this._lifecycleSubState;
  }

  // role - computed: false, optional: true, required: false
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDisasterRecoveryDrProtectionGroupsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDisasterRecoveryDrProtectionGroupsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      dr_protection_group_id: cdktf.stringToTerraform(this._drProtectionGroupId),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_sub_state: cdktf.stringToTerraform(this._lifecycleSubState),
      role: cdktf.stringToTerraform(this._role),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDisasterRecoveryDrProtectionGroupsFilterToTerraform, true)(this._filter.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dr_protection_group_id: {
        value: cdktf.stringToHclTerraform(this._drProtectionGroupId),
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
      lifecycle_sub_state: {
        value: cdktf.stringToHclTerraform(this._lifecycleSubState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDisasterRecoveryDrProtectionGroupsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDisasterRecoveryDrProtectionGroupsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
