// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMigrationMigrationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations#compartment_id DataOciDatabaseMigrationMigrations#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations#display_name DataOciDatabaseMigrationMigrations#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations#id DataOciDatabaseMigrationMigrations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations#lifecycle_details DataOciDatabaseMigrationMigrations#lifecycle_details}
  */
  readonly lifecycleDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations#state DataOciDatabaseMigrationMigrations#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations#filter DataOciDatabaseMigrationMigrations#filter}
  */
  readonly filter?: DataOciDatabaseMigrationMigrationsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettings {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettingsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettingsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettings | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettingsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetails {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetails | undefined) {
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
  private _walletBucket = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketList(this, "wallet_bucket", false);
  public get walletBucket() {
    return this._walletBucket;
  }
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetails {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetails | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetails {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_link_details - computed: true, optional: false, required: false
  private _databaseLinkDetails = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsDatabaseLinkDetailsList(this, "database_link_details", false);
  public get databaseLinkDetails() {
    return this._databaseLinkDetails;
  }

  // object_storage_details - computed: true, optional: false, required: false
  private _objectStorageDetails = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsObjectStorageDetailsList(this, "object_storage_details", false);
  public get objectStorageDetails() {
    return this._objectStorageDetails;
  }
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucket {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucketToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucketToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucket | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucketList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucketOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2 {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2 | undefined) {
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
  private _objectStorageBucket = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2ObjectStorageBucketList(this, "object_storage_bucket", false);
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2List extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2OutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParameters {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParametersToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParametersToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParameters | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParametersOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObject {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObjectToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObjectToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObject | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObjectOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObject {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObjectToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObjectToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObject | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObjectOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemaps {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemapsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemapsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemaps | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemapsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemapsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettings {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_pump_parameters - computed: true, optional: false, required: false
  private _dataPumpParameters = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsDataPumpParametersList(this, "data_pump_parameters", false);
  public get dataPumpParameters() {
    return this._dataPumpParameters;
  }

  // export_directory_object - computed: true, optional: false, required: false
  private _exportDirectoryObject = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsExportDirectoryObjectList(this, "export_directory_object", false);
  public get exportDirectoryObject() {
    return this._exportDirectoryObject;
  }

  // import_directory_object - computed: true, optional: false, required: false
  private _importDirectoryObject = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsImportDirectoryObjectList(this, "import_directory_object", false);
  public get importDirectoryObject() {
    return this._importDirectoryObject;
  }

  // job_mode - computed: true, optional: false, required: false
  public get jobMode() {
    return this.getStringAttribute('job_mode');
  }

  // metadata_remaps - computed: true, optional: false, required: false
  private _metadataRemaps = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsMetadataRemapsList(this, "metadata_remaps", false);
  public get metadataRemaps() {
    return this._metadataRemaps;
  }
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSource {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSourceToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSourceToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSource | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSourceOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTarget {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTargetToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTargetToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTarget | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTargetOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetails {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetails | undefined) {
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
  private _source = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjects {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjectsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjectsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjects | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjectsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentials {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentials | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentials {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentials | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentials {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentials | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentials {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentials | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHub {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHub | undefined) {
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
  private _restAdminCredentials = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubRestAdminCredentialsList(this, "rest_admin_credentials", false);
  public get restAdminCredentials() {
    return this._restAdminCredentials;
  }

  // source_container_db_admin_credentials - computed: true, optional: false, required: false
  private _sourceContainerDbAdminCredentials = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceContainerDbAdminCredentialsList(this, "source_container_db_admin_credentials", false);
  public get sourceContainerDbAdminCredentials() {
    return this._sourceContainerDbAdminCredentials;
  }

  // source_db_admin_credentials - computed: true, optional: false, required: false
  private _sourceDbAdminCredentials = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubSourceDbAdminCredentialsList(this, "source_db_admin_credentials", false);
  public get sourceDbAdminCredentials() {
    return this._sourceDbAdminCredentials;
  }

  // source_microservices_deployment_name - computed: true, optional: false, required: false
  public get sourceMicroservicesDeploymentName() {
    return this.getStringAttribute('source_microservices_deployment_name');
  }

  // target_db_admin_credentials - computed: true, optional: false, required: false
  private _targetDbAdminCredentials = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubTargetDbAdminCredentialsList(this, "target_db_admin_credentials", false);
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtract {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtractToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtractToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtract | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtractList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtractOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicat {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicatToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicatToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicat | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicatList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicatOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettings {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettings | undefined) {
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
  private _extract = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsExtractList(this, "extract", false);
  public get extract() {
    return this._extract;
  }

  // replicat - computed: true, optional: false, required: false
  private _replicat = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsReplicatList(this, "replicat", false);
  public get replicat() {
    return this._replicat;
  }
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetails {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hub - computed: true, optional: false, required: false
  private _hub = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsHubList(this, "hub", false);
  public get hub() {
    return this._hub;
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeployment {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeploymentToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeploymentToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeployment | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeploymentOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtract {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtractToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtractToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtract | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtractList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtractOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicat {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicatToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicatToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicat | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicatList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicatOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettings {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettings | undefined) {
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
  private _extract = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsExtractList(this, "extract", false);
  public get extract() {
    return this._extract;
  }

  // replicat - computed: true, optional: false, required: false
  private _replicat = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsReplicatList(this, "replicat", false);
  public get replicat() {
    return this._replicat;
  }
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentials {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentials | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentials {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentials | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentials {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentialsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentialsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentials | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentialsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetails {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ggs_deployment - computed: true, optional: false, required: false
  private _ggsDeployment = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsGgsDeploymentList(this, "ggs_deployment", false);
  public get ggsDeployment() {
    return this._ggsDeployment;
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }

  // source_container_db_credentials - computed: true, optional: false, required: false
  private _sourceContainerDbCredentials = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceContainerDbCredentialsList(this, "source_container_db_credentials", false);
  public get sourceContainerDbCredentials() {
    return this._sourceContainerDbCredentials;
  }

  // source_db_credentials - computed: true, optional: false, required: false
  private _sourceDbCredentials = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsSourceDbCredentialsList(this, "source_db_credentials", false);
  public get sourceDbCredentials() {
    return this._sourceDbCredentials;
  }

  // target_db_credentials - computed: true, optional: false, required: false
  private _targetDbCredentials = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsTargetDbCredentialsList(this, "target_db_credentials", false);
  public get targetDbCredentials() {
    return this._targetDbCredentials;
  }
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjects {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjectsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjectsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjects | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjectsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetails {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetailsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetailsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetails | undefined) {
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

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetailsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollectionItems {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionItemsToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advisor_settings - computed: true, optional: false, required: false
  private _advisorSettings = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsAdvisorSettingsList(this, "advisor_settings", false);
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
  private _dataTransferMediumDetails = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsList(this, "data_transfer_medium_details", false);
  public get dataTransferMediumDetails() {
    return this._dataTransferMediumDetails;
  }

  // data_transfer_medium_details_v2 - computed: true, optional: false, required: false
  private _dataTransferMediumDetailsV2 = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDataTransferMediumDetailsV2List(this, "data_transfer_medium_details_v2", false);
  public get dataTransferMediumDetailsV2() {
    return this._dataTransferMediumDetailsV2;
  }

  // datapump_settings - computed: true, optional: false, required: false
  private _datapumpSettings = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDatapumpSettingsList(this, "datapump_settings", false);
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
  private _dumpTransferDetails = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsDumpTransferDetailsList(this, "dump_transfer_details", false);
  public get dumpTransferDetails() {
    return this._dumpTransferDetails;
  }

  // exclude_objects - computed: true, optional: false, required: false
  private _excludeObjects = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsExcludeObjectsList(this, "exclude_objects", false);
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
  private _goldenGateDetails = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateDetailsList(this, "golden_gate_details", false);
  public get goldenGateDetails() {
    return this._goldenGateDetails;
  }

  // golden_gate_service_details - computed: true, optional: false, required: false
  private _goldenGateServiceDetails = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsGoldenGateServiceDetailsList(this, "golden_gate_service_details", false);
  public get goldenGateServiceDetails() {
    return this._goldenGateServiceDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_objects - computed: true, optional: false, required: false
  private _includeObjects = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsIncludeObjectsList(this, "include_objects", false);
  public get includeObjects() {
    return this._includeObjects;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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
  private _vaultDetails = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsVaultDetailsList(this, "vault_details", false);
  public get vaultDetails() {
    return this._vaultDetails;
  }

  // wait_after - computed: true, optional: false, required: false
  public get waitAfter() {
    return this.getStringAttribute('wait_after');
  }
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionItemsOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsMigrationCollection {
}

export function dataOciDatabaseMigrationMigrationsMigrationCollectionToTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationMigrationsMigrationCollectionToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsMigrationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsMigrationCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationMigrationsMigrationCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseMigrationMigrationsMigrationCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseMigrationMigrationsMigrationCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationMigrationsMigrationCollectionOutputReference {
    return new DataOciDatabaseMigrationMigrationsMigrationCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationMigrationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations#name DataOciDatabaseMigrationMigrations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations#regex DataOciDatabaseMigrationMigrations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations#values DataOciDatabaseMigrationMigrations#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseMigrationMigrationsFilterToTerraform(struct?: DataOciDatabaseMigrationMigrationsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseMigrationMigrationsFilterToHclTerraform(struct?: DataOciDatabaseMigrationMigrationsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseMigrationMigrationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationMigrationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseMigrationMigrationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseMigrationMigrationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseMigrationMigrationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseMigrationMigrationsFilterOutputReference {
    return new DataOciDatabaseMigrationMigrationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations oci_database_migration_migrations}
*/
export class DataOciDatabaseMigrationMigrations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_migrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMigrationMigrations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMigrationMigrations to import
  * @param importFromId The id of the existing DataOciDatabaseMigrationMigrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMigrationMigrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_migrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_migration_migrations oci_database_migration_migrations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMigrationMigrationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMigrationMigrationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_migrations',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._lifecycleDetails = config.lifecycleDetails;
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

  // lifecycle_details - computed: false, optional: true, required: false
  private _lifecycleDetails?: string; 
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }
  public set lifecycleDetails(value: string) {
    this._lifecycleDetails = value;
  }
  public resetLifecycleDetails() {
    this._lifecycleDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleDetailsInput() {
    return this._lifecycleDetails;
  }

  // migration_collection - computed: true, optional: false, required: false
  private _migrationCollection = new DataOciDatabaseMigrationMigrationsMigrationCollectionList(this, "migration_collection", false);
  public get migrationCollection() {
    return this._migrationCollection;
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
  private _filter = new DataOciDatabaseMigrationMigrationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseMigrationMigrationsFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      lifecycle_details: cdktf.stringToTerraform(this._lifecycleDetails),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDatabaseMigrationMigrationsFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_details: {
        value: cdktf.stringToHclTerraform(this._lifecycleDetails),
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
        value: cdktf.listMapperHcl(dataOciDatabaseMigrationMigrationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseMigrationMigrationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
