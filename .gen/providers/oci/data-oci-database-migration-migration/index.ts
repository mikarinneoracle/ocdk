// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMigrationMigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migration#migration_id DataOciDatabaseMigrationMigration#migration_id}
  */
  readonly migrationId: string;
}
export interface DataOciDatabaseMigrationMigrationAdvisorSettings {
}

export function dataOciDatabaseMigrationMigrationAdvisorSettingsToTerraform(struct?: DataOciDatabaseMigrationMigrationAdvisorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationAdvisorSettingsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationAdvisorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationAdvisorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationAdvisorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_ignore_errors - computed: true, optional: false, required: false
  public get isIgnoreErrors() {
    return this.getBooleanAttribute('is_ignore_errors');
  }

  // is_skip_advisor - computed: true, optional: false, required: false
  public get isSkipAdvisor() {
    return this.getBooleanAttribute('is_skip_advisor');
  }
}

export class DataOciDatabaseMigrationMigrationAdvisorSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference {
    return new DataOciDatabaseMigrationMigrationAdvisorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket {
}

export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketToTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket | undefined) {
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
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketOutputReference {
    return new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails {
}

export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // wallet_bucket - computed: true, optional: false, required: false
  private _walletBucket = new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketList(this, "wallet_bucket", false);
  public get walletBucket() {
    return this._walletBucket;
  }
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails {
}

export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails | undefined) {
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
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDataTransferMediumDetails {
}

export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDataTransferMediumDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDataTransferMediumDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_link_details - computed: true, optional: false, required: false
  private _databaseLinkDetails = new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsList(this, "database_link_details", false);
  public get databaseLinkDetails() {
    return this._databaseLinkDetails;
  }

  // object_storage_details - computed: true, optional: false, required: false
  private _objectStorageDetails = new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsList(this, "object_storage_details", false);
  public get objectStorageDetails() {
    return this._objectStorageDetails;
  }
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket {
}

export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketToTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket | undefined) {
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
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketOutputReference {
    return new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2 {
}

export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ToTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_storage_bucket - computed: true, optional: false, required: false
  private _objectStorageBucket = new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketList(this, "object_storage_bucket", false);
  public get objectStorageBucket() {
    return this._objectStorageBucket;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2List extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2OutputReference {
    return new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParameters {
}

export function dataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParametersToTerraform(struct?: DataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParametersToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // estimate - computed: true, optional: false, required: false
  public get estimate() {
    return this.getStringAttribute('estimate');
  }

  // exclude_parameters - computed: true, optional: false, required: false
  public get excludeParameters() {
    return this.getListAttribute('exclude_parameters');
  }

  // export_parallelism_degree - computed: true, optional: false, required: false
  public get exportParallelismDegree() {
    return this.getNumberAttribute('export_parallelism_degree');
  }

  // import_parallelism_degree - computed: true, optional: false, required: false
  public get importParallelismDegree() {
    return this.getNumberAttribute('import_parallelism_degree');
  }

  // is_cluster - computed: true, optional: false, required: false
  public get isCluster() {
    return this.getBooleanAttribute('is_cluster');
  }

  // table_exists_action - computed: true, optional: false, required: false
  public get tableExistsAction() {
    return this.getStringAttribute('table_exists_action');
  }
}

export class DataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParametersOutputReference {
    return new DataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject {
}

export function dataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectToTerraform(struct?: DataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectOutputReference {
    return new DataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject {
}

export function dataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectToTerraform(struct?: DataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectOutputReference {
    return new DataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemaps {
}

export function dataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemapsToTerraform(struct?: DataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemapsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // new_value - computed: true, optional: false, required: false
  public get newValue() {
    return this.getStringAttribute('new_value');
  }

  // old_value - computed: true, optional: false, required: false
  public get oldValue() {
    return this.getStringAttribute('old_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemapsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemapsOutputReference {
    return new DataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDatapumpSettings {
}

export function dataOciDatabaseMigrationMigrationDatapumpSettingsToTerraform(struct?: DataOciDatabaseMigrationMigrationDatapumpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDatapumpSettingsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDatapumpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDatapumpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDatapumpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDatapumpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_pump_parameters - computed: true, optional: false, required: false
  private _dataPumpParameters = new DataOciDatabaseMigrationMigrationDatapumpSettingsDataPumpParametersList(this, "data_pump_parameters", false);
  public get dataPumpParameters() {
    return this._dataPumpParameters;
  }

  // export_directory_object - computed: true, optional: false, required: false
  private _exportDirectoryObject = new DataOciDatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectList(this, "export_directory_object", false);
  public get exportDirectoryObject() {
    return this._exportDirectoryObject;
  }

  // import_directory_object - computed: true, optional: false, required: false
  private _importDirectoryObject = new DataOciDatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectList(this, "import_directory_object", false);
  public get importDirectoryObject() {
    return this._importDirectoryObject;
  }

  // job_mode - computed: true, optional: false, required: false
  public get jobMode() {
    return this.getStringAttribute('job_mode');
  }

  // metadata_remaps - computed: true, optional: false, required: false
  private _metadataRemaps = new DataOciDatabaseMigrationMigrationDatapumpSettingsMetadataRemapsList(this, "metadata_remaps", false);
  public get metadataRemaps() {
    return this._metadataRemaps;
  }
}

export class DataOciDatabaseMigrationMigrationDatapumpSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDatapumpSettingsOutputReference {
    return new DataOciDatabaseMigrationMigrationDatapumpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDumpTransferDetailsSource {
}

export function dataOciDatabaseMigrationMigrationDumpTransferDetailsSourceToTerraform(struct?: DataOciDatabaseMigrationMigrationDumpTransferDetailsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDumpTransferDetailsSourceToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDumpTransferDetailsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDumpTransferDetailsSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDumpTransferDetailsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDumpTransferDetailsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // oci_home - computed: true, optional: false, required: false
  public get ociHome() {
    return this.getStringAttribute('oci_home');
  }

  // wallet_location - computed: true, optional: false, required: false
  public get walletLocation() {
    return this.getStringAttribute('wallet_location');
  }
}

export class DataOciDatabaseMigrationMigrationDumpTransferDetailsSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDumpTransferDetailsSourceOutputReference {
    return new DataOciDatabaseMigrationMigrationDumpTransferDetailsSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDumpTransferDetailsTarget {
}

export function dataOciDatabaseMigrationMigrationDumpTransferDetailsTargetToTerraform(struct?: DataOciDatabaseMigrationMigrationDumpTransferDetailsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDumpTransferDetailsTargetToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDumpTransferDetailsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDumpTransferDetailsTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDumpTransferDetailsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDumpTransferDetailsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // oci_home - computed: true, optional: false, required: false
  public get ociHome() {
    return this.getStringAttribute('oci_home');
  }

  // wallet_location - computed: true, optional: false, required: false
  public get walletLocation() {
    return this.getStringAttribute('wallet_location');
  }
}

export class DataOciDatabaseMigrationMigrationDumpTransferDetailsTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDumpTransferDetailsTargetOutputReference {
    return new DataOciDatabaseMigrationMigrationDumpTransferDetailsTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationDumpTransferDetails {
}

export function dataOciDatabaseMigrationMigrationDumpTransferDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationDumpTransferDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationDumpTransferDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationDumpTransferDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationDumpTransferDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationDumpTransferDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationDumpTransferDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // shared_storage_mount_target_id - computed: true, optional: false, required: false
  public get sharedStorageMountTargetId() {
    return this.getStringAttribute('shared_storage_mount_target_id');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataOciDatabaseMigrationMigrationDumpTransferDetailsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataOciDatabaseMigrationMigrationDumpTransferDetailsTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
}

export class DataOciDatabaseMigrationMigrationDumpTransferDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationDumpTransferDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationDumpTransferDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationExcludeObjects {
}

export function dataOciDatabaseMigrationMigrationExcludeObjectsToTerraform(struct?: DataOciDatabaseMigrationMigrationExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationExcludeObjectsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_omit_excluded_table_from_replication - computed: true, optional: false, required: false
  public get isOmitExcludedTableFromReplication() {
    return this.getBooleanAttribute('is_omit_excluded_table_from_replication');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatabaseMigrationMigrationExcludeObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference {
    return new DataOciDatabaseMigrationMigrationExcludeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials {
}

export function dataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials {
}

export function dataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials {
}

export function dataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials {
}

export function dataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateDetailsHub {
}

export function dataOciDatabaseMigrationMigrationGoldenGateDetailsHubToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateDetailsHubToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsHubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateDetailsHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateDetailsHub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_id - computed: true, optional: false, required: false
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }

  // rest_admin_credentials - computed: true, optional: false, required: false
  private _restAdminCredentials = new DataOciDatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsList(this, "rest_admin_credentials", false);
  public get restAdminCredentials() {
    return this._restAdminCredentials;
  }

  // source_container_db_admin_credentials - computed: true, optional: false, required: false
  private _sourceContainerDbAdminCredentials = new DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsList(this, "source_container_db_admin_credentials", false);
  public get sourceContainerDbAdminCredentials() {
    return this._sourceContainerDbAdminCredentials;
  }

  // source_db_admin_credentials - computed: true, optional: false, required: false
  private _sourceDbAdminCredentials = new DataOciDatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsList(this, "source_db_admin_credentials", false);
  public get sourceDbAdminCredentials() {
    return this._sourceDbAdminCredentials;
  }

  // source_microservices_deployment_name - computed: true, optional: false, required: false
  public get sourceMicroservicesDeploymentName() {
    return this.getStringAttribute('source_microservices_deployment_name');
  }

  // target_db_admin_credentials - computed: true, optional: false, required: false
  private _targetDbAdminCredentials = new DataOciDatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsList(this, "target_db_admin_credentials", false);
  public get targetDbAdminCredentials() {
    return this._targetDbAdminCredentials;
  }

  // target_microservices_deployment_name - computed: true, optional: false, required: false
  public get targetMicroservicesDeploymentName() {
    return this.getStringAttribute('target_microservices_deployment_name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsHubList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateDetailsHubOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateDetailsHubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtract {
}

export function dataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtractToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtractToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_trans_duration - computed: true, optional: false, required: false
  public get longTransDuration() {
    return this.getNumberAttribute('long_trans_duration');
  }

  // performance_profile - computed: true, optional: false, required: false
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtractList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtractOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat {
}

export function dataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // map_parallelism - computed: true, optional: false, required: false
  public get mapParallelism() {
    return this.getNumberAttribute('map_parallelism');
  }

  // max_apply_parallelism - computed: true, optional: false, required: false
  public get maxApplyParallelism() {
    return this.getNumberAttribute('max_apply_parallelism');
  }

  // min_apply_parallelism - computed: true, optional: false, required: false
  public get minApplyParallelism() {
    return this.getNumberAttribute('min_apply_parallelism');
  }

  // performance_profile - computed: true, optional: false, required: false
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateDetailsSettings {
}

export function dataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateDetailsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateDetailsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acceptable_lag - computed: true, optional: false, required: false
  public get acceptableLag() {
    return this.getNumberAttribute('acceptable_lag');
  }

  // extract - computed: true, optional: false, required: false
  private _extract = new DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsExtractList(this, "extract", false);
  public get extract() {
    return this._extract;
  }

  // replicat - computed: true, optional: false, required: false
  private _replicat = new DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatList(this, "replicat", false);
  public get replicat() {
    return this._replicat;
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateDetails {
}

export function dataOciDatabaseMigrationMigrationGoldenGateDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hub - computed: true, optional: false, required: false
  private _hub = new DataOciDatabaseMigrationMigrationGoldenGateDetailsHubList(this, "hub", false);
  public get hub() {
    return this._hub;
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataOciDatabaseMigrationMigrationGoldenGateDetailsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeployment {
}

export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // ggs_admin_credentials_secret_id - computed: true, optional: false, required: false
  public get ggsAdminCredentialsSecretId() {
    return this.getStringAttribute('ggs_admin_credentials_secret_id');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract {
}

export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_trans_duration - computed: true, optional: false, required: false
  public get longTransDuration() {
    return this.getNumberAttribute('long_trans_duration');
  }

  // performance_profile - computed: true, optional: false, required: false
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat {
}

export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // map_parallelism - computed: true, optional: false, required: false
  public get mapParallelism() {
    return this.getNumberAttribute('map_parallelism');
  }

  // max_apply_parallelism - computed: true, optional: false, required: false
  public get maxApplyParallelism() {
    return this.getNumberAttribute('max_apply_parallelism');
  }

  // min_apply_parallelism - computed: true, optional: false, required: false
  public get minApplyParallelism() {
    return this.getNumberAttribute('min_apply_parallelism');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettings {
}

export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acceptable_lag - computed: true, optional: false, required: false
  public get acceptableLag() {
    return this.getNumberAttribute('acceptable_lag');
  }

  // extract - computed: true, optional: false, required: false
  private _extract = new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractList(this, "extract", false);
  public get extract() {
    return this._extract;
  }

  // replicat - computed: true, optional: false, required: false
  private _replicat = new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatList(this, "replicat", false);
  public get replicat() {
    return this._replicat;
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials {
}

export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials {
}

export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials {
}

export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationGoldenGateServiceDetails {
}

export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationGoldenGateServiceDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationGoldenGateServiceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationGoldenGateServiceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationGoldenGateServiceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ggs_deployment - computed: true, optional: false, required: false
  private _ggsDeployment = new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentList(this, "ggs_deployment", false);
  public get ggsDeployment() {
    return this._ggsDeployment;
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }

  // source_container_db_credentials - computed: true, optional: false, required: false
  private _sourceContainerDbCredentials = new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsList(this, "source_container_db_credentials", false);
  public get sourceContainerDbCredentials() {
    return this._sourceContainerDbCredentials;
  }

  // source_db_credentials - computed: true, optional: false, required: false
  private _sourceDbCredentials = new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsList(this, "source_db_credentials", false);
  public get sourceDbCredentials() {
    return this._sourceDbCredentials;
  }

  // target_db_credentials - computed: true, optional: false, required: false
  private _targetDbCredentials = new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsList(this, "target_db_credentials", false);
  public get targetDbCredentials() {
    return this._targetDbCredentials;
  }
}

export class DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationIncludeObjects {
}

export function dataOciDatabaseMigrationMigrationIncludeObjectsToTerraform(struct?: DataOciDatabaseMigrationMigrationIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationIncludeObjectsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_omit_excluded_table_from_replication - computed: true, optional: false, required: false
  public get isOmitExcludedTableFromReplication() {
    return this.getBooleanAttribute('is_omit_excluded_table_from_replication');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatabaseMigrationMigrationIncludeObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference {
    return new DataOciDatabaseMigrationMigrationIncludeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationVaultDetails {
}

export function dataOciDatabaseMigrationMigrationVaultDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationVaultDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationVaultDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationVaultDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationVaultDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationVaultDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationVaultDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataOciDatabaseMigrationMigrationVaultDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationVaultDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationVaultDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migration oci_database_migration_migration}
*/
export class DataOciDatabaseMigrationMigration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMigrationMigration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMigrationMigration to import
  * @param importFromId The id of the existing DataOciDatabaseMigrationMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMigrationMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migration oci_database_migration_migration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMigrationMigrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMigrationMigrationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_migration',
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
    this._migrationId = config.migrationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advisor_settings - computed: true, optional: false, required: false
  private _advisorSettings = new DataOciDatabaseMigrationMigrationAdvisorSettingsList(this, "advisor_settings", false);
  public get advisorSettings() {
    return this._advisorSettings;
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // credentials_secret_id - computed: true, optional: false, required: false
  public get credentialsSecretId() {
    return this.getStringAttribute('credentials_secret_id');
  }

  // csv_text - computed: true, optional: false, required: false
  public get csvText() {
    return this.getStringAttribute('csv_text');
  }

  // data_transfer_medium_details - computed: true, optional: false, required: false
  private _dataTransferMediumDetails = new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsList(this, "data_transfer_medium_details", false);
  public get dataTransferMediumDetails() {
    return this._dataTransferMediumDetails;
  }

  // data_transfer_medium_details_v2 - computed: true, optional: false, required: false
  private _dataTransferMediumDetailsV2 = new DataOciDatabaseMigrationMigrationDataTransferMediumDetailsV2List(this, "data_transfer_medium_details_v2", false);
  public get dataTransferMediumDetailsV2() {
    return this._dataTransferMediumDetailsV2;
  }

  // datapump_settings - computed: true, optional: false, required: false
  private _datapumpSettings = new DataOciDatabaseMigrationMigrationDatapumpSettingsList(this, "datapump_settings", false);
  public get datapumpSettings() {
    return this._datapumpSettings;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dump_transfer_details - computed: true, optional: false, required: false
  private _dumpTransferDetails = new DataOciDatabaseMigrationMigrationDumpTransferDetailsList(this, "dump_transfer_details", false);
  public get dumpTransferDetails() {
    return this._dumpTransferDetails;
  }

  // exclude_objects - computed: true, optional: false, required: false
  private _excludeObjects = new DataOciDatabaseMigrationMigrationExcludeObjectsList(this, "exclude_objects", false);
  public get excludeObjects() {
    return this._excludeObjects;
  }

  // executing_job_id - computed: true, optional: false, required: false
  public get executingJobId() {
    return this.getStringAttribute('executing_job_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // golden_gate_details - computed: true, optional: false, required: false
  private _goldenGateDetails = new DataOciDatabaseMigrationMigrationGoldenGateDetailsList(this, "golden_gate_details", false);
  public get goldenGateDetails() {
    return this._goldenGateDetails;
  }

  // golden_gate_service_details - computed: true, optional: false, required: false
  private _goldenGateServiceDetails = new DataOciDatabaseMigrationMigrationGoldenGateServiceDetailsList(this, "golden_gate_service_details", false);
  public get goldenGateServiceDetails() {
    return this._goldenGateServiceDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_objects - computed: true, optional: false, required: false
  private _includeObjects = new DataOciDatabaseMigrationMigrationIncludeObjectsList(this, "include_objects", false);
  public get includeObjects() {
    return this._includeObjects;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // migration_id - computed: false, optional: false, required: true
  private _migrationId?: string; 
  public get migrationId() {
    return this.getStringAttribute('migration_id');
  }
  public set migrationId(value: string) {
    this._migrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationIdInput() {
    return this._migrationId;
  }

  // source_container_database_connection_id - computed: true, optional: false, required: false
  public get sourceContainerDatabaseConnectionId() {
    return this.getStringAttribute('source_container_database_connection_id');
  }

  // source_database_connection_id - computed: true, optional: false, required: false
  public get sourceDatabaseConnectionId() {
    return this.getStringAttribute('source_database_connection_id');
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

  // target_database_connection_id - computed: true, optional: false, required: false
  public get targetDatabaseConnectionId() {
    return this.getStringAttribute('target_database_connection_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_migration - computed: true, optional: false, required: false
  public get timeLastMigration() {
    return this.getStringAttribute('time_last_migration');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vault_details - computed: true, optional: false, required: false
  private _vaultDetails = new DataOciDatabaseMigrationMigrationVaultDetailsList(this, "vault_details", false);
  public get vaultDetails() {
    return this._vaultDetails;
  }

  // wait_after - computed: true, optional: false, required: false
  public get waitAfter() {
    return this.getStringAttribute('wait_after');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      migration_id: cdktf.stringToTerraform(this._migrationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      migration_id: {
        value: cdktf.stringToHclTerraform(this._migrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
