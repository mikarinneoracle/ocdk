// https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/mysql_mysql_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMysqlMysqlBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/mysql_mysql_backup#backup_id DataOciMysqlMysqlBackup#backup_id}
  */
  readonly backupId: string;
}
export interface DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy {
}

export function dataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyToTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyToHclTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference {
    return new DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicy {
}

export function dataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyToTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyToHclTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // pitr_policy - computed: true, optional: false, required: false
  private _pitrPolicy = new DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList(this, "pitr_policy", false);
  public get pitrPolicy() {
    return this._pitrPolicy;
  }

  // retention_in_days - computed: true, optional: false, required: false
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }

  // window_start_time - computed: true, optional: false, required: false
  public get windowStartTime() {
    return this.getStringAttribute('window_start_time');
  }
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference {
    return new DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicy {
}

export function dataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicyToTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicyToHclTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_backup_retention - computed: true, optional: false, required: false
  public get automaticBackupRetention() {
    return this.getStringAttribute('automatic_backup_retention');
  }

  // final_backup - computed: true, optional: false, required: false
  public get finalBackup() {
    return this.getStringAttribute('final_backup');
  }

  // is_delete_protected - computed: true, optional: false, required: false
  public get isDeleteProtected() {
    return this.getBooleanAttribute('is_delete_protected');
  }
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference {
    return new DataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMysqlMysqlBackupDbSystemSnapshotEndpoints {
}

export function dataOciMysqlMysqlBackupDbSystemSnapshotEndpointsToTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMysqlMysqlBackupDbSystemSnapshotEndpointsToHclTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlMysqlBackupDbSystemSnapshotEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMysqlMysqlBackupDbSystemSnapshotEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // modes - computed: true, optional: false, required: false
  public get modes() {
    return this.getListAttribute('modes');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_x - computed: true, optional: false, required: false
  public get portX() {
    return this.getNumberAttribute('port_x');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_details - computed: true, optional: false, required: false
  public get statusDetails() {
    return this.getStringAttribute('status_details');
  }
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference {
    return new DataOciMysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMysqlMysqlBackupDbSystemSnapshotMaintenance {
}

export function dataOciMysqlMysqlBackupDbSystemSnapshotMaintenanceToTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotMaintenance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMysqlMysqlBackupDbSystemSnapshotMaintenanceToHclTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotMaintenance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlMysqlBackupDbSystemSnapshotMaintenance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMysqlMysqlBackupDbSystemSnapshotMaintenance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // window_start_time - computed: true, optional: false, required: false
  public get windowStartTime() {
    return this.getStringAttribute('window_start_time');
  }
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotMaintenanceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference {
    return new DataOciMysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMysqlMysqlBackupDbSystemSnapshotSecureConnections {
}

export function dataOciMysqlMysqlBackupDbSystemSnapshotSecureConnectionsToTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotSecureConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMysqlMysqlBackupDbSystemSnapshotSecureConnectionsToHclTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshotSecureConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlMysqlBackupDbSystemSnapshotSecureConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMysqlMysqlBackupDbSystemSnapshotSecureConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_generation_type - computed: true, optional: false, required: false
  public get certificateGenerationType() {
    return this.getStringAttribute('certificate_generation_type');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotSecureConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference {
    return new DataOciMysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMysqlMysqlBackupDbSystemSnapshot {
}

export function dataOciMysqlMysqlBackupDbSystemSnapshotToTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMysqlMysqlBackupDbSystemSnapshotToHclTerraform(struct?: DataOciMysqlMysqlBackupDbSystemSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlMysqlBackupDbSystemSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMysqlMysqlBackupDbSystemSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_policy - computed: true, optional: false, required: false
  private _backupPolicy = new DataOciMysqlMysqlBackupDbSystemSnapshotBackupPolicyList(this, "backup_policy", false);
  public get backupPolicy() {
    return this._backupPolicy;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // crash_recovery - computed: true, optional: false, required: false
  public get crashRecovery() {
    return this.getStringAttribute('crash_recovery');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: false
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // database_management - computed: true, optional: false, required: false
  public get databaseManagement() {
    return this.getStringAttribute('database_management');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deletion_policy - computed: true, optional: false, required: false
  private _deletionPolicy = new DataOciMysqlMysqlBackupDbSystemSnapshotDeletionPolicyList(this, "deletion_policy", false);
  public get deletionPolicy() {
    return this._deletionPolicy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataOciMysqlMysqlBackupDbSystemSnapshotEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_highly_available - computed: true, optional: false, required: false
  public get isHighlyAvailable() {
    return this.getBooleanAttribute('is_highly_available');
  }

  // maintenance - computed: true, optional: false, required: false
  private _maintenance = new DataOciMysqlMysqlBackupDbSystemSnapshotMaintenanceList(this, "maintenance", false);
  public get maintenance() {
    return this._maintenance;
  }

  // mysql_version - computed: true, optional: false, required: false
  public get mysqlVersion() {
    return this.getStringAttribute('mysql_version');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_x - computed: true, optional: false, required: false
  public get portX() {
    return this.getNumberAttribute('port_x');
  }

  // secure_connections - computed: true, optional: false, required: false
  private _secureConnections = new DataOciMysqlMysqlBackupDbSystemSnapshotSecureConnectionsList(this, "secure_connections", false);
  public get secureConnections() {
    return this._secureConnections;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciMysqlMysqlBackupDbSystemSnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMysqlMysqlBackupDbSystemSnapshotOutputReference {
    return new DataOciMysqlMysqlBackupDbSystemSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/mysql_mysql_backup oci_mysql_mysql_backup}
*/
export class DataOciMysqlMysqlBackup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_mysql_mysql_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMysqlMysqlBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMysqlMysqlBackup to import
  * @param importFromId The id of the existing DataOciMysqlMysqlBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/mysql_mysql_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMysqlMysqlBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_mysql_mysql_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/mysql_mysql_backup oci_mysql_mysql_backup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMysqlMysqlBackupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMysqlMysqlBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_backup',
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
    this._backupId = config.backupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backup_size_in_gbs - computed: true, optional: false, required: false
  public get backupSizeInGbs() {
    return this.getNumberAttribute('backup_size_in_gbs');
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // creation_type - computed: true, optional: false, required: false
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: false
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // db_system_snapshot - computed: true, optional: false, required: false
  private _dbSystemSnapshot = new DataOciMysqlMysqlBackupDbSystemSnapshotList(this, "db_system_snapshot", false);
  public get dbSystemSnapshot() {
    return this._dbSystemSnapshot;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // mysql_version - computed: true, optional: false, required: false
  public get mysqlVersion() {
    return this.getStringAttribute('mysql_version');
  }

  // retention_in_days - computed: true, optional: false, required: false
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_id: cdktf.stringToTerraform(this._backupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
