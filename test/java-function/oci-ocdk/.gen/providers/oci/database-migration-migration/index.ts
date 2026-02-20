// https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseMigrationMigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#agent_id DatabaseMigrationMigration#agent_id}
  */
  readonly agentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#csv_text DatabaseMigrationMigration#csv_text}
  */
  readonly csvText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}
  */
  readonly sourceContainerDatabaseConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}
  */
  readonly sourceDatabaseConnectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}
  */
  readonly targetDatabaseConnectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}
  */
  readonly type: string;
  /**
  * advisor_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#advisor_settings DatabaseMigrationMigration#advisor_settings}
  */
  readonly advisorSettings?: DatabaseMigrationMigrationAdvisorSettings;
  /**
  * data_transfer_medium_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#data_transfer_medium_details DatabaseMigrationMigration#data_transfer_medium_details}
  */
  readonly dataTransferMediumDetails?: DatabaseMigrationMigrationDataTransferMediumDetails;
  /**
  * data_transfer_medium_details_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#data_transfer_medium_details_v2 DatabaseMigrationMigration#data_transfer_medium_details_v2}
  */
  readonly dataTransferMediumDetailsV2?: DatabaseMigrationMigrationDataTransferMediumDetailsV2;
  /**
  * datapump_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#datapump_settings DatabaseMigrationMigration#datapump_settings}
  */
  readonly datapumpSettings?: DatabaseMigrationMigrationDatapumpSettings;
  /**
  * dump_transfer_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#dump_transfer_details DatabaseMigrationMigration#dump_transfer_details}
  */
  readonly dumpTransferDetails?: DatabaseMigrationMigrationDumpTransferDetails;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#exclude_objects DatabaseMigrationMigration#exclude_objects}
  */
  readonly excludeObjects?: DatabaseMigrationMigrationExcludeObjects[] | cdktf.IResolvable;
  /**
  * golden_gate_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#golden_gate_details DatabaseMigrationMigration#golden_gate_details}
  */
  readonly goldenGateDetails?: DatabaseMigrationMigrationGoldenGateDetails;
  /**
  * golden_gate_service_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#golden_gate_service_details DatabaseMigrationMigration#golden_gate_service_details}
  */
  readonly goldenGateServiceDetails?: DatabaseMigrationMigrationGoldenGateServiceDetails;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#include_objects DatabaseMigrationMigration#include_objects}
  */
  readonly includeObjects?: DatabaseMigrationMigrationIncludeObjects[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#timeouts DatabaseMigrationMigration#timeouts}
  */
  readonly timeouts?: DatabaseMigrationMigrationTimeouts;
  /**
  * vault_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#vault_details DatabaseMigrationMigration#vault_details}
  */
  readonly vaultDetails?: DatabaseMigrationMigrationVaultDetails;
}
export interface DatabaseMigrationMigrationAdvisorSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}
  */
  readonly isIgnoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}
  */
  readonly isSkipAdvisor?: boolean | cdktf.IResolvable;
}

export function databaseMigrationMigrationAdvisorSettingsToTerraform(struct?: DatabaseMigrationMigrationAdvisorSettingsOutputReference | DatabaseMigrationMigrationAdvisorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ignore_errors: cdktf.booleanToTerraform(struct!.isIgnoreErrors),
    is_skip_advisor: cdktf.booleanToTerraform(struct!.isSkipAdvisor),
  }
}


export function databaseMigrationMigrationAdvisorSettingsToHclTerraform(struct?: DatabaseMigrationMigrationAdvisorSettingsOutputReference | DatabaseMigrationMigrationAdvisorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_ignore_errors: {
      value: cdktf.booleanToHclTerraform(struct!.isIgnoreErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_skip_advisor: {
      value: cdktf.booleanToHclTerraform(struct!.isSkipAdvisor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationAdvisorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationAdvisorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isIgnoreErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIgnoreErrors = this._isIgnoreErrors;
    }
    if (this._isSkipAdvisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSkipAdvisor = this._isSkipAdvisor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationAdvisorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isIgnoreErrors = undefined;
      this._isSkipAdvisor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isIgnoreErrors = value.isIgnoreErrors;
      this._isSkipAdvisor = value.isSkipAdvisor;
    }
  }

  // is_ignore_errors - computed: true, optional: true, required: false
  private _isIgnoreErrors?: boolean | cdktf.IResolvable; 
  public get isIgnoreErrors() {
    return this.getBooleanAttribute('is_ignore_errors');
  }
  public set isIgnoreErrors(value: boolean | cdktf.IResolvable) {
    this._isIgnoreErrors = value;
  }
  public resetIsIgnoreErrors() {
    this._isIgnoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIgnoreErrorsInput() {
    return this._isIgnoreErrors;
  }

  // is_skip_advisor - computed: true, optional: true, required: false
  private _isSkipAdvisor?: boolean | cdktf.IResolvable; 
  public get isSkipAdvisor() {
    return this.getBooleanAttribute('is_skip_advisor');
  }
  public set isSkipAdvisor(value: boolean | cdktf.IResolvable) {
    this._isSkipAdvisor = value;
  }
  public resetIsSkipAdvisor() {
    this._isSkipAdvisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSkipAdvisorInput() {
    return this._isSkipAdvisor;
  }
}
export interface DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}
  */
  readonly namespace: string;
}

export function databaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketToTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function databaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketToHclTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket): any {
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

export class DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket | undefined {
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

  public set internalValue(value: DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket | undefined) {
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
}
export interface DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}
  */
  readonly name?: string;
  /**
  * wallet_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#wallet_bucket DatabaseMigrationMigration#wallet_bucket}
  */
  readonly walletBucket?: DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket;
}

export function databaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsToTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    wallet_bucket: databaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketToTerraform(struct!.walletBucket),
  }
}


export function databaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsToHclTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails): any {
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
    wallet_bucket: {
      value: databaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketToHclTerraform(struct!.walletBucket),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._walletBucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletBucket = this._walletBucket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._walletBucket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._walletBucket.internalValue = value.walletBucket;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // wallet_bucket - computed: false, optional: true, required: false
  private _walletBucket = new DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucketOutputReference(this, "wallet_bucket");
  public get walletBucket() {
    return this._walletBucket;
  }
  public putWalletBucket(value: DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsWalletBucket) {
    this._walletBucket.internalValue = value;
  }
  public resetWalletBucket() {
    this._walletBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletBucketInput() {
    return this._walletBucket.internalValue;
  }
}
export interface DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}
  */
  readonly namespace: string;
}

export function databaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsToTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function databaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsToHclTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails): any {
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

export class DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails | undefined {
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

  public set internalValue(value: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails | undefined) {
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
}
export interface DatabaseMigrationMigrationDataTransferMediumDetails {
  /**
  * database_link_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#database_link_details DatabaseMigrationMigration#database_link_details}
  */
  readonly databaseLinkDetails?: DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails;
  /**
  * object_storage_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#object_storage_details DatabaseMigrationMigration#object_storage_details}
  */
  readonly objectStorageDetails?: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails;
}

export function databaseMigrationMigrationDataTransferMediumDetailsToTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference | DatabaseMigrationMigrationDataTransferMediumDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_link_details: databaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsToTerraform(struct!.databaseLinkDetails),
    object_storage_details: databaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsToTerraform(struct!.objectStorageDetails),
  }
}


export function databaseMigrationMigrationDataTransferMediumDetailsToHclTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference | DatabaseMigrationMigrationDataTransferMediumDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_link_details: {
      value: databaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsToHclTerraform(struct!.databaseLinkDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsList",
    },
    object_storage_details: {
      value: databaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsToHclTerraform(struct!.objectStorageDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDataTransferMediumDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseLinkDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseLinkDetails = this._databaseLinkDetails?.internalValue;
    }
    if (this._objectStorageDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageDetails = this._objectStorageDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDataTransferMediumDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseLinkDetails.internalValue = undefined;
      this._objectStorageDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseLinkDetails.internalValue = value.databaseLinkDetails;
      this._objectStorageDetails.internalValue = value.objectStorageDetails;
    }
  }

  // database_link_details - computed: false, optional: true, required: false
  private _databaseLinkDetails = new DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetailsOutputReference(this, "database_link_details");
  public get databaseLinkDetails() {
    return this._databaseLinkDetails;
  }
  public putDatabaseLinkDetails(value: DatabaseMigrationMigrationDataTransferMediumDetailsDatabaseLinkDetails) {
    this._databaseLinkDetails.internalValue = value;
  }
  public resetDatabaseLinkDetails() {
    this._databaseLinkDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseLinkDetailsInput() {
    return this._databaseLinkDetails.internalValue;
  }

  // object_storage_details - computed: false, optional: true, required: false
  private _objectStorageDetails = new DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetailsOutputReference(this, "object_storage_details");
  public get objectStorageDetails() {
    return this._objectStorageDetails;
  }
  public putObjectStorageDetails(value: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageDetails) {
    this._objectStorageDetails.internalValue = value;
  }
  public resetObjectStorageDetails() {
    this._objectStorageDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageDetailsInput() {
    return this._objectStorageDetails.internalValue;
  }
}
export interface DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}
  */
  readonly namespace?: string;
}

export function databaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketToTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function databaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketToHclTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket): any {
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

export class DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket | undefined {
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

  public set internalValue(value: DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket | undefined) {
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

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DatabaseMigrationMigrationDataTransferMediumDetailsV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}
  */
  readonly type: string;
  /**
  * object_storage_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#object_storage_bucket DatabaseMigrationMigration#object_storage_bucket}
  */
  readonly objectStorageBucket?: DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket;
}

export function databaseMigrationMigrationDataTransferMediumDetailsV2ToTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsV2OutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    type: cdktf.stringToTerraform(struct!.type),
    object_storage_bucket: databaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketToTerraform(struct!.objectStorageBucket),
  }
}


export function databaseMigrationMigrationDataTransferMediumDetailsV2ToHclTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsV2OutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
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
    object_storage_bucket: {
      value: databaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketToHclTerraform(struct!.objectStorageBucket),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDataTransferMediumDetailsV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDataTransferMediumDetailsV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._objectStorageBucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageBucket = this._objectStorageBucket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDataTransferMediumDetailsV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._name = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._type = undefined;
      this._objectStorageBucket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._name = value.name;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._type = value.type;
      this._objectStorageBucket.internalValue = value.objectStorageBucket;
    }
  }

  // access_key_id - computed: true, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: true, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
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

  // object_storage_bucket - computed: false, optional: true, required: false
  private _objectStorageBucket = new DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucketOutputReference(this, "object_storage_bucket");
  public get objectStorageBucket() {
    return this._objectStorageBucket;
  }
  public putObjectStorageBucket(value: DatabaseMigrationMigrationDataTransferMediumDetailsV2ObjectStorageBucket) {
    this._objectStorageBucket.internalValue = value;
  }
  public resetObjectStorageBucket() {
    this._objectStorageBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketInput() {
    return this._objectStorageBucket.internalValue;
  }
}
export interface DatabaseMigrationMigrationDatapumpSettingsDataPumpParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}
  */
  readonly estimate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}
  */
  readonly excludeParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}
  */
  readonly exportParallelismDegree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}
  */
  readonly importParallelismDegree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}
  */
  readonly isCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}
  */
  readonly tableExistsAction?: string;
}

export function databaseMigrationMigrationDatapumpSettingsDataPumpParametersToTerraform(struct?: DatabaseMigrationMigrationDatapumpSettingsDataPumpParametersOutputReference | DatabaseMigrationMigrationDatapumpSettingsDataPumpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    estimate: cdktf.stringToTerraform(struct!.estimate),
    exclude_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeParameters),
    export_parallelism_degree: cdktf.numberToTerraform(struct!.exportParallelismDegree),
    import_parallelism_degree: cdktf.numberToTerraform(struct!.importParallelismDegree),
    is_cluster: cdktf.booleanToTerraform(struct!.isCluster),
    table_exists_action: cdktf.stringToTerraform(struct!.tableExistsAction),
  }
}


export function databaseMigrationMigrationDatapumpSettingsDataPumpParametersToHclTerraform(struct?: DatabaseMigrationMigrationDatapumpSettingsDataPumpParametersOutputReference | DatabaseMigrationMigrationDatapumpSettingsDataPumpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    estimate: {
      value: cdktf.stringToHclTerraform(struct!.estimate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    export_parallelism_degree: {
      value: cdktf.numberToHclTerraform(struct!.exportParallelismDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    import_parallelism_degree: {
      value: cdktf.numberToHclTerraform(struct!.importParallelismDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.isCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    table_exists_action: {
      value: cdktf.stringToHclTerraform(struct!.tableExistsAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDatapumpSettingsDataPumpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDatapumpSettingsDataPumpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._estimate !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimate = this._estimate;
    }
    if (this._excludeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeParameters = this._excludeParameters;
    }
    if (this._exportParallelismDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportParallelismDegree = this._exportParallelismDegree;
    }
    if (this._importParallelismDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.importParallelismDegree = this._importParallelismDegree;
    }
    if (this._isCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCluster = this._isCluster;
    }
    if (this._tableExistsAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableExistsAction = this._tableExistsAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDatapumpSettingsDataPumpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._estimate = undefined;
      this._excludeParameters = undefined;
      this._exportParallelismDegree = undefined;
      this._importParallelismDegree = undefined;
      this._isCluster = undefined;
      this._tableExistsAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._estimate = value.estimate;
      this._excludeParameters = value.excludeParameters;
      this._exportParallelismDegree = value.exportParallelismDegree;
      this._importParallelismDegree = value.importParallelismDegree;
      this._isCluster = value.isCluster;
      this._tableExistsAction = value.tableExistsAction;
    }
  }

  // estimate - computed: true, optional: true, required: false
  private _estimate?: string; 
  public get estimate() {
    return this.getStringAttribute('estimate');
  }
  public set estimate(value: string) {
    this._estimate = value;
  }
  public resetEstimate() {
    this._estimate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimateInput() {
    return this._estimate;
  }

  // exclude_parameters - computed: true, optional: true, required: false
  private _excludeParameters?: string[]; 
  public get excludeParameters() {
    return this.getListAttribute('exclude_parameters');
  }
  public set excludeParameters(value: string[]) {
    this._excludeParameters = value;
  }
  public resetExcludeParameters() {
    this._excludeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeParametersInput() {
    return this._excludeParameters;
  }

  // export_parallelism_degree - computed: true, optional: true, required: false
  private _exportParallelismDegree?: number; 
  public get exportParallelismDegree() {
    return this.getNumberAttribute('export_parallelism_degree');
  }
  public set exportParallelismDegree(value: number) {
    this._exportParallelismDegree = value;
  }
  public resetExportParallelismDegree() {
    this._exportParallelismDegree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportParallelismDegreeInput() {
    return this._exportParallelismDegree;
  }

  // import_parallelism_degree - computed: true, optional: true, required: false
  private _importParallelismDegree?: number; 
  public get importParallelismDegree() {
    return this.getNumberAttribute('import_parallelism_degree');
  }
  public set importParallelismDegree(value: number) {
    this._importParallelismDegree = value;
  }
  public resetImportParallelismDegree() {
    this._importParallelismDegree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importParallelismDegreeInput() {
    return this._importParallelismDegree;
  }

  // is_cluster - computed: true, optional: true, required: false
  private _isCluster?: boolean | cdktf.IResolvable; 
  public get isCluster() {
    return this.getBooleanAttribute('is_cluster');
  }
  public set isCluster(value: boolean | cdktf.IResolvable) {
    this._isCluster = value;
  }
  public resetIsCluster() {
    this._isCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isClusterInput() {
    return this._isCluster;
  }

  // table_exists_action - computed: true, optional: true, required: false
  private _tableExistsAction?: string; 
  public get tableExistsAction() {
    return this.getStringAttribute('table_exists_action');
  }
  public set tableExistsAction(value: string) {
    this._tableExistsAction = value;
  }
  public resetTableExistsAction() {
    this._tableExistsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableExistsActionInput() {
    return this._tableExistsAction;
  }
}
export interface DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}
  */
  readonly path?: string;
}

export function databaseMigrationMigrationDatapumpSettingsExportDirectoryObjectToTerraform(struct?: DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectOutputReference | DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function databaseMigrationMigrationDatapumpSettingsExportDirectoryObjectToHclTerraform(struct?: DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectOutputReference | DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._path = value.path;
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}
  */
  readonly path?: string;
}

export function databaseMigrationMigrationDatapumpSettingsImportDirectoryObjectToTerraform(struct?: DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectOutputReference | DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function databaseMigrationMigrationDatapumpSettingsImportDirectoryObjectToHclTerraform(struct?: DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectOutputReference | DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._path = value.path;
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DatabaseMigrationMigrationDatapumpSettingsMetadataRemaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}
  */
  readonly newValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}
  */
  readonly oldValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}
  */
  readonly type: string;
}

export function databaseMigrationMigrationDatapumpSettingsMetadataRemapsToTerraform(struct?: DatabaseMigrationMigrationDatapumpSettingsMetadataRemaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_value: cdktf.stringToTerraform(struct!.newValue),
    old_value: cdktf.stringToTerraform(struct!.oldValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function databaseMigrationMigrationDatapumpSettingsMetadataRemapsToHclTerraform(struct?: DatabaseMigrationMigrationDatapumpSettingsMetadataRemaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_value: {
      value: cdktf.stringToHclTerraform(struct!.newValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_value: {
      value: cdktf.stringToHclTerraform(struct!.oldValue),
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

export class DatabaseMigrationMigrationDatapumpSettingsMetadataRemapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationMigrationDatapumpSettingsMetadataRemaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newValue = this._newValue;
    }
    if (this._oldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldValue = this._oldValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDatapumpSettingsMetadataRemaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newValue = undefined;
      this._oldValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newValue = value.newValue;
      this._oldValue = value.oldValue;
      this._type = value.type;
    }
  }

  // new_value - computed: false, optional: false, required: true
  private _newValue?: string; 
  public get newValue() {
    return this.getStringAttribute('new_value');
  }
  public set newValue(value: string) {
    this._newValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newValueInput() {
    return this._newValue;
  }

  // old_value - computed: false, optional: false, required: true
  private _oldValue?: string; 
  public get oldValue() {
    return this.getStringAttribute('old_value');
  }
  public set oldValue(value: string) {
    this._oldValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldValueInput() {
    return this._oldValue;
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

export class DatabaseMigrationMigrationDatapumpSettingsMetadataRemapsList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationMigrationDatapumpSettingsMetadataRemaps[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationMigrationDatapumpSettingsMetadataRemapsOutputReference {
    return new DatabaseMigrationMigrationDatapumpSettingsMetadataRemapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationMigrationDatapumpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}
  */
  readonly jobMode?: string;
  /**
  * data_pump_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#data_pump_parameters DatabaseMigrationMigration#data_pump_parameters}
  */
  readonly dataPumpParameters?: DatabaseMigrationMigrationDatapumpSettingsDataPumpParameters;
  /**
  * export_directory_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#export_directory_object DatabaseMigrationMigration#export_directory_object}
  */
  readonly exportDirectoryObject?: DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject;
  /**
  * import_directory_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#import_directory_object DatabaseMigrationMigration#import_directory_object}
  */
  readonly importDirectoryObject?: DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject;
  /**
  * metadata_remaps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#metadata_remaps DatabaseMigrationMigration#metadata_remaps}
  */
  readonly metadataRemaps?: DatabaseMigrationMigrationDatapumpSettingsMetadataRemaps[] | cdktf.IResolvable;
}

export function databaseMigrationMigrationDatapumpSettingsToTerraform(struct?: DatabaseMigrationMigrationDatapumpSettingsOutputReference | DatabaseMigrationMigrationDatapumpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_mode: cdktf.stringToTerraform(struct!.jobMode),
    data_pump_parameters: databaseMigrationMigrationDatapumpSettingsDataPumpParametersToTerraform(struct!.dataPumpParameters),
    export_directory_object: databaseMigrationMigrationDatapumpSettingsExportDirectoryObjectToTerraform(struct!.exportDirectoryObject),
    import_directory_object: databaseMigrationMigrationDatapumpSettingsImportDirectoryObjectToTerraform(struct!.importDirectoryObject),
    metadata_remaps: cdktf.listMapper(databaseMigrationMigrationDatapumpSettingsMetadataRemapsToTerraform, true)(struct!.metadataRemaps),
  }
}


export function databaseMigrationMigrationDatapumpSettingsToHclTerraform(struct?: DatabaseMigrationMigrationDatapumpSettingsOutputReference | DatabaseMigrationMigrationDatapumpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_mode: {
      value: cdktf.stringToHclTerraform(struct!.jobMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_pump_parameters: {
      value: databaseMigrationMigrationDatapumpSettingsDataPumpParametersToHclTerraform(struct!.dataPumpParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDatapumpSettingsDataPumpParametersList",
    },
    export_directory_object: {
      value: databaseMigrationMigrationDatapumpSettingsExportDirectoryObjectToHclTerraform(struct!.exportDirectoryObject),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectList",
    },
    import_directory_object: {
      value: databaseMigrationMigrationDatapumpSettingsImportDirectoryObjectToHclTerraform(struct!.importDirectoryObject),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectList",
    },
    metadata_remaps: {
      value: cdktf.listMapperHcl(databaseMigrationMigrationDatapumpSettingsMetadataRemapsToHclTerraform, true)(struct!.metadataRemaps),
      isBlock: true,
      type: "set",
      storageClassType: "DatabaseMigrationMigrationDatapumpSettingsMetadataRemapsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDatapumpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDatapumpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobMode = this._jobMode;
    }
    if (this._dataPumpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPumpParameters = this._dataPumpParameters?.internalValue;
    }
    if (this._exportDirectoryObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportDirectoryObject = this._exportDirectoryObject?.internalValue;
    }
    if (this._importDirectoryObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importDirectoryObject = this._importDirectoryObject?.internalValue;
    }
    if (this._metadataRemaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataRemaps = this._metadataRemaps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDatapumpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobMode = undefined;
      this._dataPumpParameters.internalValue = undefined;
      this._exportDirectoryObject.internalValue = undefined;
      this._importDirectoryObject.internalValue = undefined;
      this._metadataRemaps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobMode = value.jobMode;
      this._dataPumpParameters.internalValue = value.dataPumpParameters;
      this._exportDirectoryObject.internalValue = value.exportDirectoryObject;
      this._importDirectoryObject.internalValue = value.importDirectoryObject;
      this._metadataRemaps.internalValue = value.metadataRemaps;
    }
  }

  // job_mode - computed: true, optional: true, required: false
  private _jobMode?: string; 
  public get jobMode() {
    return this.getStringAttribute('job_mode');
  }
  public set jobMode(value: string) {
    this._jobMode = value;
  }
  public resetJobMode() {
    this._jobMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobModeInput() {
    return this._jobMode;
  }

  // data_pump_parameters - computed: false, optional: true, required: false
  private _dataPumpParameters = new DatabaseMigrationMigrationDatapumpSettingsDataPumpParametersOutputReference(this, "data_pump_parameters");
  public get dataPumpParameters() {
    return this._dataPumpParameters;
  }
  public putDataPumpParameters(value: DatabaseMigrationMigrationDatapumpSettingsDataPumpParameters) {
    this._dataPumpParameters.internalValue = value;
  }
  public resetDataPumpParameters() {
    this._dataPumpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPumpParametersInput() {
    return this._dataPumpParameters.internalValue;
  }

  // export_directory_object - computed: false, optional: true, required: false
  private _exportDirectoryObject = new DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObjectOutputReference(this, "export_directory_object");
  public get exportDirectoryObject() {
    return this._exportDirectoryObject;
  }
  public putExportDirectoryObject(value: DatabaseMigrationMigrationDatapumpSettingsExportDirectoryObject) {
    this._exportDirectoryObject.internalValue = value;
  }
  public resetExportDirectoryObject() {
    this._exportDirectoryObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDirectoryObjectInput() {
    return this._exportDirectoryObject.internalValue;
  }

  // import_directory_object - computed: false, optional: true, required: false
  private _importDirectoryObject = new DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObjectOutputReference(this, "import_directory_object");
  public get importDirectoryObject() {
    return this._importDirectoryObject;
  }
  public putImportDirectoryObject(value: DatabaseMigrationMigrationDatapumpSettingsImportDirectoryObject) {
    this._importDirectoryObject.internalValue = value;
  }
  public resetImportDirectoryObject() {
    this._importDirectoryObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importDirectoryObjectInput() {
    return this._importDirectoryObject.internalValue;
  }

  // metadata_remaps - computed: false, optional: true, required: false
  private _metadataRemaps = new DatabaseMigrationMigrationDatapumpSettingsMetadataRemapsList(this, "metadata_remaps", true);
  public get metadataRemaps() {
    return this._metadataRemaps;
  }
  public putMetadataRemaps(value: DatabaseMigrationMigrationDatapumpSettingsMetadataRemaps[] | cdktf.IResolvable) {
    this._metadataRemaps.internalValue = value;
  }
  public resetMetadataRemaps() {
    this._metadataRemaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataRemapsInput() {
    return this._metadataRemaps.internalValue;
  }
}
export interface DatabaseMigrationMigrationDumpTransferDetailsSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}
  */
  readonly ociHome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}
  */
  readonly walletLocation?: string;
}

export function databaseMigrationMigrationDumpTransferDetailsSourceToTerraform(struct?: DatabaseMigrationMigrationDumpTransferDetailsSourceOutputReference | DatabaseMigrationMigrationDumpTransferDetailsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    oci_home: cdktf.stringToTerraform(struct!.ociHome),
    wallet_location: cdktf.stringToTerraform(struct!.walletLocation),
  }
}


export function databaseMigrationMigrationDumpTransferDetailsSourceToHclTerraform(struct?: DatabaseMigrationMigrationDumpTransferDetailsSourceOutputReference | DatabaseMigrationMigrationDumpTransferDetailsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oci_home: {
      value: cdktf.stringToHclTerraform(struct!.ociHome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_location: {
      value: cdktf.stringToHclTerraform(struct!.walletLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDumpTransferDetailsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDumpTransferDetailsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._ociHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.ociHome = this._ociHome;
    }
    if (this._walletLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletLocation = this._walletLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDumpTransferDetailsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._ociHome = undefined;
      this._walletLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._ociHome = value.ociHome;
      this._walletLocation = value.walletLocation;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // oci_home - computed: true, optional: true, required: false
  private _ociHome?: string; 
  public get ociHome() {
    return this.getStringAttribute('oci_home');
  }
  public set ociHome(value: string) {
    this._ociHome = value;
  }
  public resetOciHome() {
    this._ociHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociHomeInput() {
    return this._ociHome;
  }

  // wallet_location - computed: true, optional: true, required: false
  private _walletLocation?: string; 
  public get walletLocation() {
    return this.getStringAttribute('wallet_location');
  }
  public set walletLocation(value: string) {
    this._walletLocation = value;
  }
  public resetWalletLocation() {
    this._walletLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletLocationInput() {
    return this._walletLocation;
  }
}
export interface DatabaseMigrationMigrationDumpTransferDetailsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}
  */
  readonly ociHome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}
  */
  readonly walletLocation?: string;
}

export function databaseMigrationMigrationDumpTransferDetailsTargetToTerraform(struct?: DatabaseMigrationMigrationDumpTransferDetailsTargetOutputReference | DatabaseMigrationMigrationDumpTransferDetailsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    oci_home: cdktf.stringToTerraform(struct!.ociHome),
    wallet_location: cdktf.stringToTerraform(struct!.walletLocation),
  }
}


export function databaseMigrationMigrationDumpTransferDetailsTargetToHclTerraform(struct?: DatabaseMigrationMigrationDumpTransferDetailsTargetOutputReference | DatabaseMigrationMigrationDumpTransferDetailsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oci_home: {
      value: cdktf.stringToHclTerraform(struct!.ociHome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_location: {
      value: cdktf.stringToHclTerraform(struct!.walletLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDumpTransferDetailsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDumpTransferDetailsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._ociHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.ociHome = this._ociHome;
    }
    if (this._walletLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletLocation = this._walletLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDumpTransferDetailsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._ociHome = undefined;
      this._walletLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._ociHome = value.ociHome;
      this._walletLocation = value.walletLocation;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // oci_home - computed: true, optional: true, required: false
  private _ociHome?: string; 
  public get ociHome() {
    return this.getStringAttribute('oci_home');
  }
  public set ociHome(value: string) {
    this._ociHome = value;
  }
  public resetOciHome() {
    this._ociHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociHomeInput() {
    return this._ociHome;
  }

  // wallet_location - computed: true, optional: true, required: false
  private _walletLocation?: string; 
  public get walletLocation() {
    return this.getStringAttribute('wallet_location');
  }
  public set walletLocation(value: string) {
    this._walletLocation = value;
  }
  public resetWalletLocation() {
    this._walletLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletLocationInput() {
    return this._walletLocation;
  }
}
export interface DatabaseMigrationMigrationDumpTransferDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}
  */
  readonly sharedStorageMountTargetId?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#source DatabaseMigrationMigration#source}
  */
  readonly source?: DatabaseMigrationMigrationDumpTransferDetailsSource;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#target DatabaseMigrationMigration#target}
  */
  readonly target?: DatabaseMigrationMigrationDumpTransferDetailsTarget;
}

export function databaseMigrationMigrationDumpTransferDetailsToTerraform(struct?: DatabaseMigrationMigrationDumpTransferDetailsOutputReference | DatabaseMigrationMigrationDumpTransferDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shared_storage_mount_target_id: cdktf.stringToTerraform(struct!.sharedStorageMountTargetId),
    source: databaseMigrationMigrationDumpTransferDetailsSourceToTerraform(struct!.source),
    target: databaseMigrationMigrationDumpTransferDetailsTargetToTerraform(struct!.target),
  }
}


export function databaseMigrationMigrationDumpTransferDetailsToHclTerraform(struct?: DatabaseMigrationMigrationDumpTransferDetailsOutputReference | DatabaseMigrationMigrationDumpTransferDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shared_storage_mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.sharedStorageMountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: databaseMigrationMigrationDumpTransferDetailsSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDumpTransferDetailsSourceList",
    },
    target: {
      value: databaseMigrationMigrationDumpTransferDetailsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDumpTransferDetailsTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDumpTransferDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDumpTransferDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sharedStorageMountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedStorageMountTargetId = this._sharedStorageMountTargetId;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDumpTransferDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sharedStorageMountTargetId = undefined;
      this._source.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sharedStorageMountTargetId = value.sharedStorageMountTargetId;
      this._source.internalValue = value.source;
      this._target.internalValue = value.target;
    }
  }

  // shared_storage_mount_target_id - computed: true, optional: true, required: false
  private _sharedStorageMountTargetId?: string; 
  public get sharedStorageMountTargetId() {
    return this.getStringAttribute('shared_storage_mount_target_id');
  }
  public set sharedStorageMountTargetId(value: string) {
    this._sharedStorageMountTargetId = value;
  }
  public resetSharedStorageMountTargetId() {
    this._sharedStorageMountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedStorageMountTargetIdInput() {
    return this._sharedStorageMountTargetId;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DatabaseMigrationMigrationDumpTransferDetailsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DatabaseMigrationMigrationDumpTransferDetailsSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DatabaseMigrationMigrationDumpTransferDetailsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DatabaseMigrationMigrationDumpTransferDetailsTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DatabaseMigrationMigrationExcludeObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}
  */
  readonly isOmitExcludedTableFromReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}
  */
  readonly type?: string;
}

export function databaseMigrationMigrationExcludeObjectsToTerraform(struct?: DatabaseMigrationMigrationExcludeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_omit_excluded_table_from_replication: cdktf.booleanToTerraform(struct!.isOmitExcludedTableFromReplication),
    object: cdktf.stringToTerraform(struct!.object),
    owner: cdktf.stringToTerraform(struct!.owner),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function databaseMigrationMigrationExcludeObjectsToHclTerraform(struct?: DatabaseMigrationMigrationExcludeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_omit_excluded_table_from_replication: {
      value: cdktf.booleanToHclTerraform(struct!.isOmitExcludedTableFromReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
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

export class DatabaseMigrationMigrationExcludeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationMigrationExcludeObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isOmitExcludedTableFromReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOmitExcludedTableFromReplication = this._isOmitExcludedTableFromReplication;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationExcludeObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isOmitExcludedTableFromReplication = undefined;
      this._object = undefined;
      this._owner = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isOmitExcludedTableFromReplication = value.isOmitExcludedTableFromReplication;
      this._object = value.object;
      this._owner = value.owner;
      this._type = value.type;
    }
  }

  // is_omit_excluded_table_from_replication - computed: true, optional: true, required: false
  private _isOmitExcludedTableFromReplication?: boolean | cdktf.IResolvable; 
  public get isOmitExcludedTableFromReplication() {
    return this.getBooleanAttribute('is_omit_excluded_table_from_replication');
  }
  public set isOmitExcludedTableFromReplication(value: boolean | cdktf.IResolvable) {
    this._isOmitExcludedTableFromReplication = value;
  }
  public resetIsOmitExcludedTableFromReplication() {
    this._isOmitExcludedTableFromReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOmitExcludedTableFromReplicationInput() {
    return this._isOmitExcludedTableFromReplication;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DatabaseMigrationMigrationExcludeObjectsList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationMigrationExcludeObjects[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationMigrationExcludeObjectsOutputReference {
    return new DatabaseMigrationMigrationExcludeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}
  */
  readonly username: string;
}

export function databaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}
  */
  readonly username: string;
}

export function databaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}
  */
  readonly username: string;
}

export function databaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}
  */
  readonly username: string;
}

export function databaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseMigrationMigrationGoldenGateDetailsHub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}
  */
  readonly computeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#source_microservices_deployment_name DatabaseMigrationMigration#source_microservices_deployment_name}
  */
  readonly sourceMicroservicesDeploymentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#target_microservices_deployment_name DatabaseMigrationMigration#target_microservices_deployment_name}
  */
  readonly targetMicroservicesDeploymentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}
  */
  readonly url: string;
  /**
  * rest_admin_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#rest_admin_credentials DatabaseMigrationMigration#rest_admin_credentials}
  */
  readonly restAdminCredentials: DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials;
  /**
  * source_container_db_admin_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#source_container_db_admin_credentials DatabaseMigrationMigration#source_container_db_admin_credentials}
  */
  readonly sourceContainerDbAdminCredentials?: DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials;
  /**
  * source_db_admin_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#source_db_admin_credentials DatabaseMigrationMigration#source_db_admin_credentials}
  */
  readonly sourceDbAdminCredentials?: DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials;
  /**
  * target_db_admin_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#target_db_admin_credentials DatabaseMigrationMigration#target_db_admin_credentials}
  */
  readonly targetDbAdminCredentials?: DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials;
}

export function databaseMigrationMigrationGoldenGateDetailsHubToTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsHubOutputReference | DatabaseMigrationMigrationGoldenGateDetailsHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_id: cdktf.stringToTerraform(struct!.computeId),
    source_microservices_deployment_name: cdktf.stringToTerraform(struct!.sourceMicroservicesDeploymentName),
    target_microservices_deployment_name: cdktf.stringToTerraform(struct!.targetMicroservicesDeploymentName),
    url: cdktf.stringToTerraform(struct!.url),
    rest_admin_credentials: databaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsToTerraform(struct!.restAdminCredentials),
    source_container_db_admin_credentials: databaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsToTerraform(struct!.sourceContainerDbAdminCredentials),
    source_db_admin_credentials: databaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsToTerraform(struct!.sourceDbAdminCredentials),
    target_db_admin_credentials: databaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsToTerraform(struct!.targetDbAdminCredentials),
  }
}


export function databaseMigrationMigrationGoldenGateDetailsHubToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsHubOutputReference | DatabaseMigrationMigrationGoldenGateDetailsHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_id: {
      value: cdktf.stringToHclTerraform(struct!.computeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_microservices_deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceMicroservicesDeploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_microservices_deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.targetMicroservicesDeploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rest_admin_credentials: {
      value: databaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsToHclTerraform(struct!.restAdminCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsList",
    },
    source_container_db_admin_credentials: {
      value: databaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsToHclTerraform(struct!.sourceContainerDbAdminCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsList",
    },
    source_db_admin_credentials: {
      value: databaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsToHclTerraform(struct!.sourceDbAdminCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsList",
    },
    target_db_admin_credentials: {
      value: databaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsToHclTerraform(struct!.targetDbAdminCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateDetailsHubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateDetailsHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeId = this._computeId;
    }
    if (this._sourceMicroservicesDeploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMicroservicesDeploymentName = this._sourceMicroservicesDeploymentName;
    }
    if (this._targetMicroservicesDeploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMicroservicesDeploymentName = this._targetMicroservicesDeploymentName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._restAdminCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restAdminCredentials = this._restAdminCredentials?.internalValue;
    }
    if (this._sourceContainerDbAdminCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceContainerDbAdminCredentials = this._sourceContainerDbAdminCredentials?.internalValue;
    }
    if (this._sourceDbAdminCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDbAdminCredentials = this._sourceDbAdminCredentials?.internalValue;
    }
    if (this._targetDbAdminCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDbAdminCredentials = this._targetDbAdminCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateDetailsHub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeId = undefined;
      this._sourceMicroservicesDeploymentName = undefined;
      this._targetMicroservicesDeploymentName = undefined;
      this._url = undefined;
      this._restAdminCredentials.internalValue = undefined;
      this._sourceContainerDbAdminCredentials.internalValue = undefined;
      this._sourceDbAdminCredentials.internalValue = undefined;
      this._targetDbAdminCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeId = value.computeId;
      this._sourceMicroservicesDeploymentName = value.sourceMicroservicesDeploymentName;
      this._targetMicroservicesDeploymentName = value.targetMicroservicesDeploymentName;
      this._url = value.url;
      this._restAdminCredentials.internalValue = value.restAdminCredentials;
      this._sourceContainerDbAdminCredentials.internalValue = value.sourceContainerDbAdminCredentials;
      this._sourceDbAdminCredentials.internalValue = value.sourceDbAdminCredentials;
      this._targetDbAdminCredentials.internalValue = value.targetDbAdminCredentials;
    }
  }

  // compute_id - computed: true, optional: true, required: false
  private _computeId?: string; 
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }
  public set computeId(value: string) {
    this._computeId = value;
  }
  public resetComputeId() {
    this._computeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIdInput() {
    return this._computeId;
  }

  // source_microservices_deployment_name - computed: true, optional: true, required: false
  private _sourceMicroservicesDeploymentName?: string; 
  public get sourceMicroservicesDeploymentName() {
    return this.getStringAttribute('source_microservices_deployment_name');
  }
  public set sourceMicroservicesDeploymentName(value: string) {
    this._sourceMicroservicesDeploymentName = value;
  }
  public resetSourceMicroservicesDeploymentName() {
    this._sourceMicroservicesDeploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMicroservicesDeploymentNameInput() {
    return this._sourceMicroservicesDeploymentName;
  }

  // target_microservices_deployment_name - computed: true, optional: true, required: false
  private _targetMicroservicesDeploymentName?: string; 
  public get targetMicroservicesDeploymentName() {
    return this.getStringAttribute('target_microservices_deployment_name');
  }
  public set targetMicroservicesDeploymentName(value: string) {
    this._targetMicroservicesDeploymentName = value;
  }
  public resetTargetMicroservicesDeploymentName() {
    this._targetMicroservicesDeploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMicroservicesDeploymentNameInput() {
    return this._targetMicroservicesDeploymentName;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // rest_admin_credentials - computed: false, optional: false, required: true
  private _restAdminCredentials = new DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentialsOutputReference(this, "rest_admin_credentials");
  public get restAdminCredentials() {
    return this._restAdminCredentials;
  }
  public putRestAdminCredentials(value: DatabaseMigrationMigrationGoldenGateDetailsHubRestAdminCredentials) {
    this._restAdminCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restAdminCredentialsInput() {
    return this._restAdminCredentials.internalValue;
  }

  // source_container_db_admin_credentials - computed: false, optional: true, required: false
  private _sourceContainerDbAdminCredentials = new DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentialsOutputReference(this, "source_container_db_admin_credentials");
  public get sourceContainerDbAdminCredentials() {
    return this._sourceContainerDbAdminCredentials;
  }
  public putSourceContainerDbAdminCredentials(value: DatabaseMigrationMigrationGoldenGateDetailsHubSourceContainerDbAdminCredentials) {
    this._sourceContainerDbAdminCredentials.internalValue = value;
  }
  public resetSourceContainerDbAdminCredentials() {
    this._sourceContainerDbAdminCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContainerDbAdminCredentialsInput() {
    return this._sourceContainerDbAdminCredentials.internalValue;
  }

  // source_db_admin_credentials - computed: false, optional: true, required: false
  private _sourceDbAdminCredentials = new DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentialsOutputReference(this, "source_db_admin_credentials");
  public get sourceDbAdminCredentials() {
    return this._sourceDbAdminCredentials;
  }
  public putSourceDbAdminCredentials(value: DatabaseMigrationMigrationGoldenGateDetailsHubSourceDbAdminCredentials) {
    this._sourceDbAdminCredentials.internalValue = value;
  }
  public resetSourceDbAdminCredentials() {
    this._sourceDbAdminCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbAdminCredentialsInput() {
    return this._sourceDbAdminCredentials.internalValue;
  }

  // target_db_admin_credentials - computed: false, optional: true, required: false
  private _targetDbAdminCredentials = new DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentialsOutputReference(this, "target_db_admin_credentials");
  public get targetDbAdminCredentials() {
    return this._targetDbAdminCredentials;
  }
  public putTargetDbAdminCredentials(value: DatabaseMigrationMigrationGoldenGateDetailsHubTargetDbAdminCredentials) {
    this._targetDbAdminCredentials.internalValue = value;
  }
  public resetTargetDbAdminCredentials() {
    this._targetDbAdminCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDbAdminCredentialsInput() {
    return this._targetDbAdminCredentials.internalValue;
  }
}
export interface DatabaseMigrationMigrationGoldenGateDetailsSettingsExtract {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}
  */
  readonly longTransDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}
  */
  readonly performanceProfile?: string;
}

export function databaseMigrationMigrationGoldenGateDetailsSettingsExtractToTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsSettingsExtractOutputReference | DatabaseMigrationMigrationGoldenGateDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    long_trans_duration: cdktf.numberToTerraform(struct!.longTransDuration),
    performance_profile: cdktf.stringToTerraform(struct!.performanceProfile),
  }
}


export function databaseMigrationMigrationGoldenGateDetailsSettingsExtractToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsSettingsExtractOutputReference | DatabaseMigrationMigrationGoldenGateDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    long_trans_duration: {
      value: cdktf.numberToHclTerraform(struct!.longTransDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_profile: {
      value: cdktf.stringToHclTerraform(struct!.performanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateDetailsSettingsExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateDetailsSettingsExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._longTransDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.longTransDuration = this._longTransDuration;
    }
    if (this._performanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceProfile = this._performanceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateDetailsSettingsExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._longTransDuration = undefined;
      this._performanceProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._longTransDuration = value.longTransDuration;
      this._performanceProfile = value.performanceProfile;
    }
  }

  // long_trans_duration - computed: true, optional: true, required: false
  private _longTransDuration?: number; 
  public get longTransDuration() {
    return this.getNumberAttribute('long_trans_duration');
  }
  public set longTransDuration(value: number) {
    this._longTransDuration = value;
  }
  public resetLongTransDuration() {
    this._longTransDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTransDurationInput() {
    return this._longTransDuration;
  }

  // performance_profile - computed: true, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }
}
export interface DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#map_parallelism DatabaseMigrationMigration#map_parallelism}
  */
  readonly mapParallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#max_apply_parallelism DatabaseMigrationMigration#max_apply_parallelism}
  */
  readonly maxApplyParallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#min_apply_parallelism DatabaseMigrationMigration#min_apply_parallelism}
  */
  readonly minApplyParallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}
  */
  readonly performanceProfile?: string;
}

export function databaseMigrationMigrationGoldenGateDetailsSettingsReplicatToTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatOutputReference | DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_parallelism: cdktf.numberToTerraform(struct!.mapParallelism),
    max_apply_parallelism: cdktf.numberToTerraform(struct!.maxApplyParallelism),
    min_apply_parallelism: cdktf.numberToTerraform(struct!.minApplyParallelism),
    performance_profile: cdktf.stringToTerraform(struct!.performanceProfile),
  }
}


export function databaseMigrationMigrationGoldenGateDetailsSettingsReplicatToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatOutputReference | DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_parallelism: {
      value: cdktf.numberToHclTerraform(struct!.mapParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_apply_parallelism: {
      value: cdktf.numberToHclTerraform(struct!.maxApplyParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_apply_parallelism: {
      value: cdktf.numberToHclTerraform(struct!.minApplyParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_profile: {
      value: cdktf.stringToHclTerraform(struct!.performanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapParallelism = this._mapParallelism;
    }
    if (this._maxApplyParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxApplyParallelism = this._maxApplyParallelism;
    }
    if (this._minApplyParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.minApplyParallelism = this._minApplyParallelism;
    }
    if (this._performanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceProfile = this._performanceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mapParallelism = undefined;
      this._maxApplyParallelism = undefined;
      this._minApplyParallelism = undefined;
      this._performanceProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mapParallelism = value.mapParallelism;
      this._maxApplyParallelism = value.maxApplyParallelism;
      this._minApplyParallelism = value.minApplyParallelism;
      this._performanceProfile = value.performanceProfile;
    }
  }

  // map_parallelism - computed: true, optional: true, required: false
  private _mapParallelism?: number; 
  public get mapParallelism() {
    return this.getNumberAttribute('map_parallelism');
  }
  public set mapParallelism(value: number) {
    this._mapParallelism = value;
  }
  public resetMapParallelism() {
    this._mapParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapParallelismInput() {
    return this._mapParallelism;
  }

  // max_apply_parallelism - computed: true, optional: true, required: false
  private _maxApplyParallelism?: number; 
  public get maxApplyParallelism() {
    return this.getNumberAttribute('max_apply_parallelism');
  }
  public set maxApplyParallelism(value: number) {
    this._maxApplyParallelism = value;
  }
  public resetMaxApplyParallelism() {
    this._maxApplyParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxApplyParallelismInput() {
    return this._maxApplyParallelism;
  }

  // min_apply_parallelism - computed: true, optional: true, required: false
  private _minApplyParallelism?: number; 
  public get minApplyParallelism() {
    return this.getNumberAttribute('min_apply_parallelism');
  }
  public set minApplyParallelism(value: number) {
    this._minApplyParallelism = value;
  }
  public resetMinApplyParallelism() {
    this._minApplyParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minApplyParallelismInput() {
    return this._minApplyParallelism;
  }

  // performance_profile - computed: true, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }
}
export interface DatabaseMigrationMigrationGoldenGateDetailsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}
  */
  readonly acceptableLag?: number;
  /**
  * extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}
  */
  readonly extract?: DatabaseMigrationMigrationGoldenGateDetailsSettingsExtract;
  /**
  * replicat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}
  */
  readonly replicat?: DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat;
}

export function databaseMigrationMigrationGoldenGateDetailsSettingsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsSettingsOutputReference | DatabaseMigrationMigrationGoldenGateDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acceptable_lag: cdktf.numberToTerraform(struct!.acceptableLag),
    extract: databaseMigrationMigrationGoldenGateDetailsSettingsExtractToTerraform(struct!.extract),
    replicat: databaseMigrationMigrationGoldenGateDetailsSettingsReplicatToTerraform(struct!.replicat),
  }
}


export function databaseMigrationMigrationGoldenGateDetailsSettingsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsSettingsOutputReference | DatabaseMigrationMigrationGoldenGateDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acceptable_lag: {
      value: cdktf.numberToHclTerraform(struct!.acceptableLag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extract: {
      value: databaseMigrationMigrationGoldenGateDetailsSettingsExtractToHclTerraform(struct!.extract),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateDetailsSettingsExtractList",
    },
    replicat: {
      value: databaseMigrationMigrationGoldenGateDetailsSettingsReplicatToHclTerraform(struct!.replicat),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateDetailsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateDetailsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptableLag !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptableLag = this._acceptableLag;
    }
    if (this._extract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract?.internalValue;
    }
    if (this._replicat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicat = this._replicat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateDetailsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptableLag = undefined;
      this._extract.internalValue = undefined;
      this._replicat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptableLag = value.acceptableLag;
      this._extract.internalValue = value.extract;
      this._replicat.internalValue = value.replicat;
    }
  }

  // acceptable_lag - computed: true, optional: true, required: false
  private _acceptableLag?: number; 
  public get acceptableLag() {
    return this.getNumberAttribute('acceptable_lag');
  }
  public set acceptableLag(value: number) {
    this._acceptableLag = value;
  }
  public resetAcceptableLag() {
    this._acceptableLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptableLagInput() {
    return this._acceptableLag;
  }

  // extract - computed: false, optional: true, required: false
  private _extract = new DatabaseMigrationMigrationGoldenGateDetailsSettingsExtractOutputReference(this, "extract");
  public get extract() {
    return this._extract;
  }
  public putExtract(value: DatabaseMigrationMigrationGoldenGateDetailsSettingsExtract) {
    this._extract.internalValue = value;
  }
  public resetExtract() {
    this._extract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract.internalValue;
  }

  // replicat - computed: false, optional: true, required: false
  private _replicat = new DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicatOutputReference(this, "replicat");
  public get replicat() {
    return this._replicat;
  }
  public putReplicat(value: DatabaseMigrationMigrationGoldenGateDetailsSettingsReplicat) {
    this._replicat.internalValue = value;
  }
  public resetReplicat() {
    this._replicat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatInput() {
    return this._replicat.internalValue;
  }
}
export interface DatabaseMigrationMigrationGoldenGateDetails {
  /**
  * hub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#hub DatabaseMigrationMigration#hub}
  */
  readonly hub: DatabaseMigrationMigrationGoldenGateDetailsHub;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#settings DatabaseMigrationMigration#settings}
  */
  readonly settings?: DatabaseMigrationMigrationGoldenGateDetailsSettings;
}

export function databaseMigrationMigrationGoldenGateDetailsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsOutputReference | DatabaseMigrationMigrationGoldenGateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hub: databaseMigrationMigrationGoldenGateDetailsHubToTerraform(struct!.hub),
    settings: databaseMigrationMigrationGoldenGateDetailsSettingsToTerraform(struct!.settings),
  }
}


export function databaseMigrationMigrationGoldenGateDetailsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateDetailsOutputReference | DatabaseMigrationMigrationGoldenGateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hub: {
      value: databaseMigrationMigrationGoldenGateDetailsHubToHclTerraform(struct!.hub),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateDetailsHubList",
    },
    settings: {
      value: databaseMigrationMigrationGoldenGateDetailsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateDetailsSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hub = this._hub?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hub.internalValue = undefined;
      this._settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hub.internalValue = value.hub;
      this._settings.internalValue = value.settings;
    }
  }

  // hub - computed: false, optional: false, required: true
  private _hub = new DatabaseMigrationMigrationGoldenGateDetailsHubOutputReference(this, "hub");
  public get hub() {
    return this._hub;
  }
  public putHub(value: DatabaseMigrationMigrationGoldenGateDetailsHub) {
    this._hub.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubInput() {
    return this._hub.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DatabaseMigrationMigrationGoldenGateDetailsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DatabaseMigrationMigrationGoldenGateDetailsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface DatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeployment {
}

export function databaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentToTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeployment | undefined) {
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

export class DatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentOutputReference {
    return new DatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}
  */
  readonly longTransDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}
  */
  readonly performanceProfile?: string;
}

export function databaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractToTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    long_trans_duration: cdktf.numberToTerraform(struct!.longTransDuration),
    performance_profile: cdktf.stringToTerraform(struct!.performanceProfile),
  }
}


export function databaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    long_trans_duration: {
      value: cdktf.numberToHclTerraform(struct!.longTransDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_profile: {
      value: cdktf.stringToHclTerraform(struct!.performanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._longTransDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.longTransDuration = this._longTransDuration;
    }
    if (this._performanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceProfile = this._performanceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._longTransDuration = undefined;
      this._performanceProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._longTransDuration = value.longTransDuration;
      this._performanceProfile = value.performanceProfile;
    }
  }

  // long_trans_duration - computed: true, optional: true, required: false
  private _longTransDuration?: number; 
  public get longTransDuration() {
    return this.getNumberAttribute('long_trans_duration');
  }
  public set longTransDuration(value: number) {
    this._longTransDuration = value;
  }
  public resetLongTransDuration() {
    this._longTransDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTransDurationInput() {
    return this._longTransDuration;
  }

  // performance_profile - computed: true, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }
}
export interface DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#map_parallelism DatabaseMigrationMigration#map_parallelism}
  */
  readonly mapParallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#max_apply_parallelism DatabaseMigrationMigration#max_apply_parallelism}
  */
  readonly maxApplyParallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#min_apply_parallelism DatabaseMigrationMigration#min_apply_parallelism}
  */
  readonly minApplyParallelism?: number;
}

export function databaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatToTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_parallelism: cdktf.numberToTerraform(struct!.mapParallelism),
    max_apply_parallelism: cdktf.numberToTerraform(struct!.maxApplyParallelism),
    min_apply_parallelism: cdktf.numberToTerraform(struct!.minApplyParallelism),
  }
}


export function databaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_parallelism: {
      value: cdktf.numberToHclTerraform(struct!.mapParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_apply_parallelism: {
      value: cdktf.numberToHclTerraform(struct!.maxApplyParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_apply_parallelism: {
      value: cdktf.numberToHclTerraform(struct!.minApplyParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapParallelism = this._mapParallelism;
    }
    if (this._maxApplyParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxApplyParallelism = this._maxApplyParallelism;
    }
    if (this._minApplyParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.minApplyParallelism = this._minApplyParallelism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mapParallelism = undefined;
      this._maxApplyParallelism = undefined;
      this._minApplyParallelism = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mapParallelism = value.mapParallelism;
      this._maxApplyParallelism = value.maxApplyParallelism;
      this._minApplyParallelism = value.minApplyParallelism;
    }
  }

  // map_parallelism - computed: true, optional: true, required: false
  private _mapParallelism?: number; 
  public get mapParallelism() {
    return this.getNumberAttribute('map_parallelism');
  }
  public set mapParallelism(value: number) {
    this._mapParallelism = value;
  }
  public resetMapParallelism() {
    this._mapParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapParallelismInput() {
    return this._mapParallelism;
  }

  // max_apply_parallelism - computed: true, optional: true, required: false
  private _maxApplyParallelism?: number; 
  public get maxApplyParallelism() {
    return this.getNumberAttribute('max_apply_parallelism');
  }
  public set maxApplyParallelism(value: number) {
    this._maxApplyParallelism = value;
  }
  public resetMaxApplyParallelism() {
    this._maxApplyParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxApplyParallelismInput() {
    return this._maxApplyParallelism;
  }

  // min_apply_parallelism - computed: true, optional: true, required: false
  private _minApplyParallelism?: number; 
  public get minApplyParallelism() {
    return this.getNumberAttribute('min_apply_parallelism');
  }
  public set minApplyParallelism(value: number) {
    this._minApplyParallelism = value;
  }
  public resetMinApplyParallelism() {
    this._minApplyParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minApplyParallelismInput() {
    return this._minApplyParallelism;
  }
}
export interface DatabaseMigrationMigrationGoldenGateServiceDetailsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}
  */
  readonly acceptableLag?: number;
  /**
  * extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}
  */
  readonly extract?: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract;
  /**
  * replicat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}
  */
  readonly replicat?: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat;
}

export function databaseMigrationMigrationGoldenGateServiceDetailsSettingsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acceptable_lag: cdktf.numberToTerraform(struct!.acceptableLag),
    extract: databaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractToTerraform(struct!.extract),
    replicat: databaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatToTerraform(struct!.replicat),
  }
}


export function databaseMigrationMigrationGoldenGateServiceDetailsSettingsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acceptable_lag: {
      value: cdktf.numberToHclTerraform(struct!.acceptableLag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extract: {
      value: databaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractToHclTerraform(struct!.extract),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractList",
    },
    replicat: {
      value: databaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatToHclTerraform(struct!.replicat),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateServiceDetailsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptableLag !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptableLag = this._acceptableLag;
    }
    if (this._extract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract?.internalValue;
    }
    if (this._replicat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicat = this._replicat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateServiceDetailsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptableLag = undefined;
      this._extract.internalValue = undefined;
      this._replicat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptableLag = value.acceptableLag;
      this._extract.internalValue = value.extract;
      this._replicat.internalValue = value.replicat;
    }
  }

  // acceptable_lag - computed: true, optional: true, required: false
  private _acceptableLag?: number; 
  public get acceptableLag() {
    return this.getNumberAttribute('acceptable_lag');
  }
  public set acceptableLag(value: number) {
    this._acceptableLag = value;
  }
  public resetAcceptableLag() {
    this._acceptableLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptableLagInput() {
    return this._acceptableLag;
  }

  // extract - computed: false, optional: true, required: false
  private _extract = new DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtractOutputReference(this, "extract");
  public get extract() {
    return this._extract;
  }
  public putExtract(value: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsExtract) {
    this._extract.internalValue = value;
  }
  public resetExtract() {
    this._extract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract.internalValue;
  }

  // replicat - computed: false, optional: true, required: false
  private _replicat = new DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicatOutputReference(this, "replicat");
  public get replicat() {
    return this._replicat;
  }
  public putReplicat(value: DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsReplicat) {
    this._replicat.internalValue = value;
  }
  public resetReplicat() {
    this._replicat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatInput() {
    return this._replicat.internalValue;
  }
}
export interface DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}
  */
  readonly username: string;
}

export function databaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}
  */
  readonly username: string;
}

export function databaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}
  */
  readonly username: string;
}

export function databaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseMigrationMigrationGoldenGateServiceDetails {
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#settings DatabaseMigrationMigration#settings}
  */
  readonly settings?: DatabaseMigrationMigrationGoldenGateServiceDetailsSettings;
  /**
  * source_container_db_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#source_container_db_credentials DatabaseMigrationMigration#source_container_db_credentials}
  */
  readonly sourceContainerDbCredentials?: DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials;
  /**
  * source_db_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#source_db_credentials DatabaseMigrationMigration#source_db_credentials}
  */
  readonly sourceDbCredentials?: DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials;
  /**
  * target_db_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#target_db_credentials DatabaseMigrationMigration#target_db_credentials}
  */
  readonly targetDbCredentials?: DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials;
}

export function databaseMigrationMigrationGoldenGateServiceDetailsToTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    settings: databaseMigrationMigrationGoldenGateServiceDetailsSettingsToTerraform(struct!.settings),
    source_container_db_credentials: databaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsToTerraform(struct!.sourceContainerDbCredentials),
    source_db_credentials: databaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsToTerraform(struct!.sourceDbCredentials),
    target_db_credentials: databaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsToTerraform(struct!.targetDbCredentials),
  }
}


export function databaseMigrationMigrationGoldenGateServiceDetailsToHclTerraform(struct?: DatabaseMigrationMigrationGoldenGateServiceDetailsOutputReference | DatabaseMigrationMigrationGoldenGateServiceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    settings: {
      value: databaseMigrationMigrationGoldenGateServiceDetailsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsList",
    },
    source_container_db_credentials: {
      value: databaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsToHclTerraform(struct!.sourceContainerDbCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsList",
    },
    source_db_credentials: {
      value: databaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsToHclTerraform(struct!.sourceDbCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsList",
    },
    target_db_credentials: {
      value: databaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsToHclTerraform(struct!.targetDbCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGoldenGateServiceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGoldenGateServiceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._sourceContainerDbCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceContainerDbCredentials = this._sourceContainerDbCredentials?.internalValue;
    }
    if (this._sourceDbCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDbCredentials = this._sourceDbCredentials?.internalValue;
    }
    if (this._targetDbCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDbCredentials = this._targetDbCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGoldenGateServiceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._settings.internalValue = undefined;
      this._sourceContainerDbCredentials.internalValue = undefined;
      this._sourceDbCredentials.internalValue = undefined;
      this._targetDbCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._settings.internalValue = value.settings;
      this._sourceContainerDbCredentials.internalValue = value.sourceContainerDbCredentials;
      this._sourceDbCredentials.internalValue = value.sourceDbCredentials;
      this._targetDbCredentials.internalValue = value.targetDbCredentials;
    }
  }

  // ggs_deployment - computed: true, optional: false, required: false
  private _ggsDeployment = new DatabaseMigrationMigrationGoldenGateServiceDetailsGgsDeploymentList(this, "ggs_deployment", false);
  public get ggsDeployment() {
    return this._ggsDeployment;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DatabaseMigrationMigrationGoldenGateServiceDetailsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DatabaseMigrationMigrationGoldenGateServiceDetailsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // source_container_db_credentials - computed: false, optional: true, required: false
  private _sourceContainerDbCredentials = new DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentialsOutputReference(this, "source_container_db_credentials");
  public get sourceContainerDbCredentials() {
    return this._sourceContainerDbCredentials;
  }
  public putSourceContainerDbCredentials(value: DatabaseMigrationMigrationGoldenGateServiceDetailsSourceContainerDbCredentials) {
    this._sourceContainerDbCredentials.internalValue = value;
  }
  public resetSourceContainerDbCredentials() {
    this._sourceContainerDbCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContainerDbCredentialsInput() {
    return this._sourceContainerDbCredentials.internalValue;
  }

  // source_db_credentials - computed: false, optional: true, required: false
  private _sourceDbCredentials = new DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentialsOutputReference(this, "source_db_credentials");
  public get sourceDbCredentials() {
    return this._sourceDbCredentials;
  }
  public putSourceDbCredentials(value: DatabaseMigrationMigrationGoldenGateServiceDetailsSourceDbCredentials) {
    this._sourceDbCredentials.internalValue = value;
  }
  public resetSourceDbCredentials() {
    this._sourceDbCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbCredentialsInput() {
    return this._sourceDbCredentials.internalValue;
  }

  // target_db_credentials - computed: false, optional: true, required: false
  private _targetDbCredentials = new DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentialsOutputReference(this, "target_db_credentials");
  public get targetDbCredentials() {
    return this._targetDbCredentials;
  }
  public putTargetDbCredentials(value: DatabaseMigrationMigrationGoldenGateServiceDetailsTargetDbCredentials) {
    this._targetDbCredentials.internalValue = value;
  }
  public resetTargetDbCredentials() {
    this._targetDbCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDbCredentialsInput() {
    return this._targetDbCredentials.internalValue;
  }
}
export interface DatabaseMigrationMigrationIncludeObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}
  */
  readonly isOmitExcludedTableFromReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}
  */
  readonly type?: string;
}

export function databaseMigrationMigrationIncludeObjectsToTerraform(struct?: DatabaseMigrationMigrationIncludeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_omit_excluded_table_from_replication: cdktf.booleanToTerraform(struct!.isOmitExcludedTableFromReplication),
    object: cdktf.stringToTerraform(struct!.object),
    owner: cdktf.stringToTerraform(struct!.owner),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function databaseMigrationMigrationIncludeObjectsToHclTerraform(struct?: DatabaseMigrationMigrationIncludeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_omit_excluded_table_from_replication: {
      value: cdktf.booleanToHclTerraform(struct!.isOmitExcludedTableFromReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
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

export class DatabaseMigrationMigrationIncludeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationMigrationIncludeObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isOmitExcludedTableFromReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOmitExcludedTableFromReplication = this._isOmitExcludedTableFromReplication;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationIncludeObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isOmitExcludedTableFromReplication = undefined;
      this._object = undefined;
      this._owner = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isOmitExcludedTableFromReplication = value.isOmitExcludedTableFromReplication;
      this._object = value.object;
      this._owner = value.owner;
      this._type = value.type;
    }
  }

  // is_omit_excluded_table_from_replication - computed: true, optional: true, required: false
  private _isOmitExcludedTableFromReplication?: boolean | cdktf.IResolvable; 
  public get isOmitExcludedTableFromReplication() {
    return this.getBooleanAttribute('is_omit_excluded_table_from_replication');
  }
  public set isOmitExcludedTableFromReplication(value: boolean | cdktf.IResolvable) {
    this._isOmitExcludedTableFromReplication = value;
  }
  public resetIsOmitExcludedTableFromReplication() {
    this._isOmitExcludedTableFromReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOmitExcludedTableFromReplicationInput() {
    return this._isOmitExcludedTableFromReplication;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DatabaseMigrationMigrationIncludeObjectsList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationMigrationIncludeObjects[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationMigrationIncludeObjectsOutputReference {
    return new DatabaseMigrationMigrationIncludeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationMigrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}
  */
  readonly update?: string;
}

export function databaseMigrationMigrationTimeoutsToTerraform(struct?: DatabaseMigrationMigrationTimeouts | cdktf.IResolvable): any {
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


export function databaseMigrationMigrationTimeoutsToHclTerraform(struct?: DatabaseMigrationMigrationTimeouts | cdktf.IResolvable): any {
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

export class DatabaseMigrationMigrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMigrationMigrationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMigrationMigrationTimeouts | cdktf.IResolvable | undefined) {
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
export interface DatabaseMigrationMigrationVaultDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}
  */
  readonly vaultId: string;
}

export function databaseMigrationMigrationVaultDetailsToTerraform(struct?: DatabaseMigrationMigrationVaultDetailsOutputReference | DatabaseMigrationMigrationVaultDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function databaseMigrationMigrationVaultDetailsToHclTerraform(struct?: DatabaseMigrationMigrationVaultDetailsOutputReference | DatabaseMigrationMigrationVaultDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationVaultDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationVaultDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationVaultDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._keyId = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._keyId = value.keyId;
      this._vaultId = value.vaultId;
    }
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

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration oci_database_migration_migration}
*/
export class DatabaseMigrationMigration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseMigrationMigration to import
  * @param importFromId The id of the existing DatabaseMigrationMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseMigrationMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/resources/database_migration_migration oci_database_migration_migration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMigrationMigrationConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseMigrationMigrationConfig) {
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
    this._agentId = config.agentId;
    this._compartmentId = config.compartmentId;
    this._csvText = config.csvText;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._sourceContainerDatabaseConnectionId = config.sourceContainerDatabaseConnectionId;
    this._sourceDatabaseConnectionId = config.sourceDatabaseConnectionId;
    this._targetDatabaseConnectionId = config.targetDatabaseConnectionId;
    this._type = config.type;
    this._advisorSettings.internalValue = config.advisorSettings;
    this._dataTransferMediumDetails.internalValue = config.dataTransferMediumDetails;
    this._dataTransferMediumDetailsV2.internalValue = config.dataTransferMediumDetailsV2;
    this._datapumpSettings.internalValue = config.datapumpSettings;
    this._dumpTransferDetails.internalValue = config.dumpTransferDetails;
    this._excludeObjects.internalValue = config.excludeObjects;
    this._goldenGateDetails.internalValue = config.goldenGateDetails;
    this._goldenGateServiceDetails.internalValue = config.goldenGateServiceDetails;
    this._includeObjects.internalValue = config.includeObjects;
    this._timeouts.internalValue = config.timeouts;
    this._vaultDetails.internalValue = config.vaultDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: true, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
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

  // credentials_secret_id - computed: true, optional: false, required: false
  public get credentialsSecretId() {
    return this.getStringAttribute('credentials_secret_id');
  }

  // csv_text - computed: true, optional: true, required: false
  private _csvText?: string; 
  public get csvText() {
    return this.getStringAttribute('csv_text');
  }
  public set csvText(value: string) {
    this._csvText = value;
  }
  public resetCsvText() {
    this._csvText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvTextInput() {
    return this._csvText;
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

  // display_name - computed: true, optional: true, required: false
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

  // executing_job_id - computed: true, optional: false, required: false
  public get executingJobId() {
    return this.getStringAttribute('executing_job_id');
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

  // source_container_database_connection_id - computed: true, optional: true, required: false
  private _sourceContainerDatabaseConnectionId?: string; 
  public get sourceContainerDatabaseConnectionId() {
    return this.getStringAttribute('source_container_database_connection_id');
  }
  public set sourceContainerDatabaseConnectionId(value: string) {
    this._sourceContainerDatabaseConnectionId = value;
  }
  public resetSourceContainerDatabaseConnectionId() {
    this._sourceContainerDatabaseConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContainerDatabaseConnectionIdInput() {
    return this._sourceContainerDatabaseConnectionId;
  }

  // source_database_connection_id - computed: false, optional: false, required: true
  private _sourceDatabaseConnectionId?: string; 
  public get sourceDatabaseConnectionId() {
    return this.getStringAttribute('source_database_connection_id');
  }
  public set sourceDatabaseConnectionId(value: string) {
    this._sourceDatabaseConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatabaseConnectionIdInput() {
    return this._sourceDatabaseConnectionId;
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

  // target_database_connection_id - computed: false, optional: false, required: true
  private _targetDatabaseConnectionId?: string; 
  public get targetDatabaseConnectionId() {
    return this.getStringAttribute('target_database_connection_id');
  }
  public set targetDatabaseConnectionId(value: string) {
    this._targetDatabaseConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseConnectionIdInput() {
    return this._targetDatabaseConnectionId;
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

  // wait_after - computed: true, optional: false, required: false
  public get waitAfter() {
    return this.getStringAttribute('wait_after');
  }

  // advisor_settings - computed: false, optional: true, required: false
  private _advisorSettings = new DatabaseMigrationMigrationAdvisorSettingsOutputReference(this, "advisor_settings");
  public get advisorSettings() {
    return this._advisorSettings;
  }
  public putAdvisorSettings(value: DatabaseMigrationMigrationAdvisorSettings) {
    this._advisorSettings.internalValue = value;
  }
  public resetAdvisorSettings() {
    this._advisorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advisorSettingsInput() {
    return this._advisorSettings.internalValue;
  }

  // data_transfer_medium_details - computed: false, optional: true, required: false
  private _dataTransferMediumDetails = new DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference(this, "data_transfer_medium_details");
  public get dataTransferMediumDetails() {
    return this._dataTransferMediumDetails;
  }
  public putDataTransferMediumDetails(value: DatabaseMigrationMigrationDataTransferMediumDetails) {
    this._dataTransferMediumDetails.internalValue = value;
  }
  public resetDataTransferMediumDetails() {
    this._dataTransferMediumDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferMediumDetailsInput() {
    return this._dataTransferMediumDetails.internalValue;
  }

  // data_transfer_medium_details_v2 - computed: false, optional: true, required: false
  private _dataTransferMediumDetailsV2 = new DatabaseMigrationMigrationDataTransferMediumDetailsV2OutputReference(this, "data_transfer_medium_details_v2");
  public get dataTransferMediumDetailsV2() {
    return this._dataTransferMediumDetailsV2;
  }
  public putDataTransferMediumDetailsV2(value: DatabaseMigrationMigrationDataTransferMediumDetailsV2) {
    this._dataTransferMediumDetailsV2.internalValue = value;
  }
  public resetDataTransferMediumDetailsV2() {
    this._dataTransferMediumDetailsV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferMediumDetailsV2Input() {
    return this._dataTransferMediumDetailsV2.internalValue;
  }

  // datapump_settings - computed: false, optional: true, required: false
  private _datapumpSettings = new DatabaseMigrationMigrationDatapumpSettingsOutputReference(this, "datapump_settings");
  public get datapumpSettings() {
    return this._datapumpSettings;
  }
  public putDatapumpSettings(value: DatabaseMigrationMigrationDatapumpSettings) {
    this._datapumpSettings.internalValue = value;
  }
  public resetDatapumpSettings() {
    this._datapumpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapumpSettingsInput() {
    return this._datapumpSettings.internalValue;
  }

  // dump_transfer_details - computed: false, optional: true, required: false
  private _dumpTransferDetails = new DatabaseMigrationMigrationDumpTransferDetailsOutputReference(this, "dump_transfer_details");
  public get dumpTransferDetails() {
    return this._dumpTransferDetails;
  }
  public putDumpTransferDetails(value: DatabaseMigrationMigrationDumpTransferDetails) {
    this._dumpTransferDetails.internalValue = value;
  }
  public resetDumpTransferDetails() {
    this._dumpTransferDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpTransferDetailsInput() {
    return this._dumpTransferDetails.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatabaseMigrationMigrationExcludeObjectsList(this, "exclude_objects", true);
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatabaseMigrationMigrationExcludeObjects[] | cdktf.IResolvable) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // golden_gate_details - computed: false, optional: true, required: false
  private _goldenGateDetails = new DatabaseMigrationMigrationGoldenGateDetailsOutputReference(this, "golden_gate_details");
  public get goldenGateDetails() {
    return this._goldenGateDetails;
  }
  public putGoldenGateDetails(value: DatabaseMigrationMigrationGoldenGateDetails) {
    this._goldenGateDetails.internalValue = value;
  }
  public resetGoldenGateDetails() {
    this._goldenGateDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goldenGateDetailsInput() {
    return this._goldenGateDetails.internalValue;
  }

  // golden_gate_service_details - computed: false, optional: true, required: false
  private _goldenGateServiceDetails = new DatabaseMigrationMigrationGoldenGateServiceDetailsOutputReference(this, "golden_gate_service_details");
  public get goldenGateServiceDetails() {
    return this._goldenGateServiceDetails;
  }
  public putGoldenGateServiceDetails(value: DatabaseMigrationMigrationGoldenGateServiceDetails) {
    this._goldenGateServiceDetails.internalValue = value;
  }
  public resetGoldenGateServiceDetails() {
    this._goldenGateServiceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goldenGateServiceDetailsInput() {
    return this._goldenGateServiceDetails.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new DatabaseMigrationMigrationIncludeObjectsList(this, "include_objects", false);
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatabaseMigrationMigrationIncludeObjects[] | cdktf.IResolvable) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseMigrationMigrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseMigrationMigrationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vault_details - computed: false, optional: true, required: false
  private _vaultDetails = new DatabaseMigrationMigrationVaultDetailsOutputReference(this, "vault_details");
  public get vaultDetails() {
    return this._vaultDetails;
  }
  public putVaultDetails(value: DatabaseMigrationMigrationVaultDetails) {
    this._vaultDetails.internalValue = value;
  }
  public resetVaultDetails() {
    this._vaultDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultDetailsInput() {
    return this._vaultDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      csv_text: cdktf.stringToTerraform(this._csvText),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      source_container_database_connection_id: cdktf.stringToTerraform(this._sourceContainerDatabaseConnectionId),
      source_database_connection_id: cdktf.stringToTerraform(this._sourceDatabaseConnectionId),
      target_database_connection_id: cdktf.stringToTerraform(this._targetDatabaseConnectionId),
      type: cdktf.stringToTerraform(this._type),
      advisor_settings: databaseMigrationMigrationAdvisorSettingsToTerraform(this._advisorSettings.internalValue),
      data_transfer_medium_details: databaseMigrationMigrationDataTransferMediumDetailsToTerraform(this._dataTransferMediumDetails.internalValue),
      data_transfer_medium_details_v2: databaseMigrationMigrationDataTransferMediumDetailsV2ToTerraform(this._dataTransferMediumDetailsV2.internalValue),
      datapump_settings: databaseMigrationMigrationDatapumpSettingsToTerraform(this._datapumpSettings.internalValue),
      dump_transfer_details: databaseMigrationMigrationDumpTransferDetailsToTerraform(this._dumpTransferDetails.internalValue),
      exclude_objects: cdktf.listMapper(databaseMigrationMigrationExcludeObjectsToTerraform, true)(this._excludeObjects.internalValue),
      golden_gate_details: databaseMigrationMigrationGoldenGateDetailsToTerraform(this._goldenGateDetails.internalValue),
      golden_gate_service_details: databaseMigrationMigrationGoldenGateServiceDetailsToTerraform(this._goldenGateServiceDetails.internalValue),
      include_objects: cdktf.listMapper(databaseMigrationMigrationIncludeObjectsToTerraform, true)(this._includeObjects.internalValue),
      timeouts: databaseMigrationMigrationTimeoutsToTerraform(this._timeouts.internalValue),
      vault_details: databaseMigrationMigrationVaultDetailsToTerraform(this._vaultDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_text: {
        value: cdktf.stringToHclTerraform(this._csvText),
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
      source_container_database_connection_id: {
        value: cdktf.stringToHclTerraform(this._sourceContainerDatabaseConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_database_connection_id: {
        value: cdktf.stringToHclTerraform(this._sourceDatabaseConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_database_connection_id: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advisor_settings: {
        value: databaseMigrationMigrationAdvisorSettingsToHclTerraform(this._advisorSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationAdvisorSettingsList",
      },
      data_transfer_medium_details: {
        value: databaseMigrationMigrationDataTransferMediumDetailsToHclTerraform(this._dataTransferMediumDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationDataTransferMediumDetailsList",
      },
      data_transfer_medium_details_v2: {
        value: databaseMigrationMigrationDataTransferMediumDetailsV2ToHclTerraform(this._dataTransferMediumDetailsV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationDataTransferMediumDetailsV2List",
      },
      datapump_settings: {
        value: databaseMigrationMigrationDatapumpSettingsToHclTerraform(this._datapumpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationDatapumpSettingsList",
      },
      dump_transfer_details: {
        value: databaseMigrationMigrationDumpTransferDetailsToHclTerraform(this._dumpTransferDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationDumpTransferDetailsList",
      },
      exclude_objects: {
        value: cdktf.listMapperHcl(databaseMigrationMigrationExcludeObjectsToHclTerraform, true)(this._excludeObjects.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatabaseMigrationMigrationExcludeObjectsList",
      },
      golden_gate_details: {
        value: databaseMigrationMigrationGoldenGateDetailsToHclTerraform(this._goldenGateDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationGoldenGateDetailsList",
      },
      golden_gate_service_details: {
        value: databaseMigrationMigrationGoldenGateServiceDetailsToHclTerraform(this._goldenGateServiceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationGoldenGateServiceDetailsList",
      },
      include_objects: {
        value: cdktf.listMapperHcl(databaseMigrationMigrationIncludeObjectsToHclTerraform, true)(this._includeObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationIncludeObjectsList",
      },
      timeouts: {
        value: databaseMigrationMigrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseMigrationMigrationTimeouts",
      },
      vault_details: {
        value: databaseMigrationMigrationVaultDetailsToHclTerraform(this._vaultDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationVaultDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
