// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_autonomous_container_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousContainerDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_autonomous_container_database#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabase#autonomous_container_database_id}
  */
  readonly autonomousContainerDatabaseId: string;
}
export interface DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails {
}

export function dataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_proxy - computed: true, optional: false, required: false
  public get internetProxy() {
    return this.getStringAttribute('internet_proxy');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_password - computed: true, optional: false, required: false
  public get vpcPassword() {
    return this.getStringAttribute('vpc_password');
  }

  // vpc_user - computed: true, optional: false, required: false
  public get vpcUser() {
    return this.getStringAttribute('vpc_user');
  }
}

export class DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousContainerDatabaseBackupConfig {
}

export function dataOciDatabaseAutonomousContainerDatabaseBackupConfigToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabaseBackupConfigToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabaseBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabaseBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_destination_details - computed: true, optional: false, required: false
  private _backupDestinationDetails = new DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }

  // recovery_window_in_days - computed: true, optional: false, required: false
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
}

export class DataOciDatabaseAutonomousContainerDatabaseBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry {
}

export function dataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_version_id - computed: true, optional: false, required: false
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }

  // time_activated - computed: true, optional: false, required: false
  public get timeActivated() {
    return this.getStringAttribute('time_activated');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek {
}

export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek | undefined) {
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
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths {
}

export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths | undefined) {
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
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow {
}

export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_action_timeout_in_mins - computed: true, optional: false, required: false
  public get customActionTimeoutInMins() {
    return this.getNumberAttribute('custom_action_timeout_in_mins');
  }

  // days_of_week - computed: true, optional: false, required: false
  private _daysOfWeek = new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }

  // hours_of_day - computed: true, optional: false, required: false
  public get hoursOfDay() {
    return this.getNumberListAttribute('hours_of_day');
  }

  // is_custom_action_timeout_enabled - computed: true, optional: false, required: false
  public get isCustomActionTimeoutEnabled() {
    return this.getBooleanAttribute('is_custom_action_timeout_enabled');
  }

  // is_monthly_patching_enabled - computed: true, optional: false, required: false
  public get isMonthlyPatchingEnabled() {
    return this.getBooleanAttribute('is_monthly_patching_enabled');
  }

  // lead_time_in_weeks - computed: true, optional: false, required: false
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }

  // months - computed: true, optional: false, required: false
  private _months = new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }

  // patching_mode - computed: true, optional: false, required: false
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getStringAttribute('preference');
  }

  // skip_ru - computed: true, optional: false, required: false
  private _skipRu = new cdktf.BooleanList(this, "skip_ru", false);
  public get skipRu() {
    return this._skipRu;
  }

  // weeks_of_month - computed: true, optional: false, required: false
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek {
}

export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek | undefined) {
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
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths {
}

export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths | undefined) {
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
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails {
}

export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_action_timeout_in_mins - computed: true, optional: false, required: false
  public get customActionTimeoutInMins() {
    return this.getNumberAttribute('custom_action_timeout_in_mins');
  }

  // days_of_week - computed: true, optional: false, required: false
  private _daysOfWeek = new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }

  // hours_of_day - computed: true, optional: false, required: false
  public get hoursOfDay() {
    return this.getNumberListAttribute('hours_of_day');
  }

  // is_custom_action_timeout_enabled - computed: true, optional: false, required: false
  public get isCustomActionTimeoutEnabled() {
    return this.getBooleanAttribute('is_custom_action_timeout_enabled');
  }

  // is_monthly_patching_enabled - computed: true, optional: false, required: false
  public get isMonthlyPatchingEnabled() {
    return this.getBooleanAttribute('is_monthly_patching_enabled');
  }

  // lead_time_in_weeks - computed: true, optional: false, required: false
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }

  // months - computed: true, optional: false, required: false
  private _months = new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }

  // patching_mode - computed: true, optional: false, required: false
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getStringAttribute('preference');
  }

  // skip_ru - computed: true, optional: false, required: false
  private _skipRu = new cdktf.BooleanList(this, "skip_ru", false);
  public get skipRu() {
    return this._skipRu;
  }

  // weeks_of_month - computed: true, optional: false, required: false
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
}

export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails {
}

export function dataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_proxy - computed: true, optional: false, required: false
  public get internetProxy() {
    return this.getStringAttribute('internet_proxy');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_password - computed: true, optional: false, required: false
  public get vpcPassword() {
    return this.getStringAttribute('vpc_password');
  }

  // vpc_user - computed: true, optional: false, required: false
  public get vpcUser() {
    return this.getStringAttribute('vpc_user');
  }
}

export class DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig {
}

export function dataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigToTerraform(struct?: DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigToHclTerraform(struct?: DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_destination_details - computed: true, optional: false, required: false
  private _backupDestinationDetails = new DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(this, "backup_destination_details", false);
  public get backupDestinationDetails() {
    return this._backupDestinationDetails;
  }

  // recovery_window_in_days - computed: true, optional: false, required: false
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
}

export class DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference {
    return new DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_autonomous_container_database oci_database_autonomous_container_database}
*/
export class DataOciDatabaseAutonomousContainerDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_container_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabase to import
  * @param importFromId The id of the existing DataOciDatabaseAutonomousContainerDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_autonomous_container_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_container_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/database_autonomous_container_database oci_database_autonomous_container_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousContainerDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousContainerDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_container_database',
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
    this._autonomousContainerDatabaseId = config.autonomousContainerDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_container_database_id - computed: false, optional: false, required: true
  private _autonomousContainerDatabaseId?: string; 
  public get autonomousContainerDatabaseId() {
    return this.getStringAttribute('autonomous_container_database_id');
  }
  public set autonomousContainerDatabaseId(value: string) {
    this._autonomousContainerDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousContainerDatabaseIdInput() {
    return this._autonomousContainerDatabaseId;
  }

  // autonomous_exadata_infrastructure_id - computed: true, optional: false, required: false
  public get autonomousExadataInfrastructureId() {
    return this.getStringAttribute('autonomous_exadata_infrastructure_id');
  }

  // autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get autonomousVmClusterId() {
    return this.getStringAttribute('autonomous_vm_cluster_id');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // available_cpus - computed: true, optional: false, required: false
  public get availableCpus() {
    return this.getNumberAttribute('available_cpus');
  }

  // backup_config - computed: true, optional: false, required: false
  private _backupConfig = new DataOciDatabaseAutonomousContainerDatabaseBackupConfigList(this, "backup_config", false);
  public get backupConfig() {
    return this._backupConfig;
  }

  // cloud_autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get cloudAutonomousVmClusterId() {
    return this.getStringAttribute('cloud_autonomous_vm_cluster_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // database_software_image_id - computed: true, optional: false, required: false
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // db_split_threshold - computed: true, optional: false, required: false
  public get dbSplitThreshold() {
    return this.getNumberAttribute('db_split_threshold');
  }

  // db_unique_name - computed: true, optional: false, required: false
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
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

  // distribution_affinity - computed: true, optional: false, required: false
  public get distributionAffinity() {
    return this.getStringAttribute('distribution_affinity');
  }

  // dst_file_version - computed: true, optional: false, required: false
  public get dstFileVersion() {
    return this.getStringAttribute('dst_file_version');
  }

  // fast_start_fail_over_lag_limit_in_seconds - computed: true, optional: false, required: false
  public get fastStartFailOverLagLimitInSeconds() {
    return this.getNumberAttribute('fast_start_fail_over_lag_limit_in_seconds');
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

  // infrastructure_type - computed: true, optional: false, required: false
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }

  // is_automatic_failover_enabled - computed: true, optional: false, required: false
  public get isAutomaticFailoverEnabled() {
    return this.getBooleanAttribute('is_automatic_failover_enabled');
  }

  // is_dst_file_update_enabled - computed: true, optional: false, required: false
  public get isDstFileUpdateEnabled() {
    return this.getBooleanAttribute('is_dst_file_update_enabled');
  }

  // key_history_entry - computed: true, optional: false, required: false
  private _keyHistoryEntry = new DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList(this, "key_history_entry", false);
  public get keyHistoryEntry() {
    return this._keyHistoryEntry;
  }

  // key_store_id - computed: true, optional: false, required: false
  public get keyStoreId() {
    return this.getStringAttribute('key_store_id');
  }

  // key_store_wallet_name - computed: true, optional: false, required: false
  public get keyStoreWalletName() {
    return this.getStringAttribute('key_store_wallet_name');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // largest_provisionable_autonomous_database_in_cpus - computed: true, optional: false, required: false
  public get largestProvisionableAutonomousDatabaseInCpus() {
    return this.getNumberAttribute('largest_provisionable_autonomous_database_in_cpus');
  }

  // last_maintenance_run_id - computed: true, optional: false, required: false
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // list_one_off_patches - computed: true, optional: false, required: false
  public get listOneOffPatches() {
    return this.getListAttribute('list_one_off_patches');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // maintenance_window_details - computed: true, optional: false, required: false
  private _maintenanceWindowDetails = new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList(this, "maintenance_window_details", false);
  public get maintenanceWindowDetails() {
    return this._maintenanceWindowDetails;
  }

  // memory_per_oracle_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerOracleComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_oracle_compute_unit_in_gbs');
  }

  // net_services_architecture - computed: true, optional: false, required: false
  public get netServicesArchitecture() {
    return this.getStringAttribute('net_services_architecture');
  }

  // next_maintenance_run_id - computed: true, optional: false, required: false
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // patch_id - computed: true, optional: false, required: false
  public get patchId() {
    return this.getStringAttribute('patch_id');
  }

  // patch_model - computed: true, optional: false, required: false
  public get patchModel() {
    return this.getStringAttribute('patch_model');
  }

  // peer_autonomous_container_database_backup_config - computed: true, optional: false, required: false
  private _peerAutonomousContainerDatabaseBackupConfig = new DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList(this, "peer_autonomous_container_database_backup_config", false);
  public get peerAutonomousContainerDatabaseBackupConfig() {
    return this._peerAutonomousContainerDatabaseBackupConfig;
  }

  // peer_autonomous_container_database_compartment_id - computed: true, optional: false, required: false
  public get peerAutonomousContainerDatabaseCompartmentId() {
    return this.getStringAttribute('peer_autonomous_container_database_compartment_id');
  }

  // peer_autonomous_container_database_display_name - computed: true, optional: false, required: false
  public get peerAutonomousContainerDatabaseDisplayName() {
    return this.getStringAttribute('peer_autonomous_container_database_display_name');
  }

  // peer_autonomous_exadata_infrastructure_id - computed: true, optional: false, required: false
  public get peerAutonomousExadataInfrastructureId() {
    return this.getStringAttribute('peer_autonomous_exadata_infrastructure_id');
  }

  // peer_autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get peerAutonomousVmClusterId() {
    return this.getStringAttribute('peer_autonomous_vm_cluster_id');
  }

  // peer_cloud_autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get peerCloudAutonomousVmClusterId() {
    return this.getStringAttribute('peer_cloud_autonomous_vm_cluster_id');
  }

  // peer_db_unique_name - computed: true, optional: false, required: false
  public get peerDbUniqueName() {
    return this.getStringAttribute('peer_db_unique_name');
  }

  // protection_mode - computed: true, optional: false, required: false
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }

  // provisionable_cpus - computed: true, optional: false, required: false
  public get provisionableCpus() {
    return this.getNumberListAttribute('provisionable_cpus');
  }

  // provisioned_cpus - computed: true, optional: false, required: false
  public get provisionedCpus() {
    return this.getNumberAttribute('provisioned_cpus');
  }

  // reclaimable_cpus - computed: true, optional: false, required: false
  public get reclaimableCpus() {
    return this.getNumberAttribute('reclaimable_cpus');
  }

  // reserved_cpus - computed: true, optional: false, required: false
  public get reservedCpus() {
    return this.getNumberAttribute('reserved_cpus');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // rotate_key_trigger - computed: true, optional: false, required: false
  public get rotateKeyTrigger() {
    return this.getBooleanAttribute('rotate_key_trigger');
  }

  // service_level_agreement_type - computed: true, optional: false, required: false
  public get serviceLevelAgreementType() {
    return this.getStringAttribute('service_level_agreement_type');
  }

  // standby_maintenance_buffer_in_days - computed: true, optional: false, required: false
  public get standbyMaintenanceBufferInDays() {
    return this.getNumberAttribute('standby_maintenance_buffer_in_days');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_last_backup - computed: true, optional: false, required: false
  public get timeOfLastBackup() {
    return this.getStringAttribute('time_of_last_backup');
  }

  // time_snapshot_standby_revert - computed: true, optional: false, required: false
  public get timeSnapshotStandbyRevert() {
    return this.getStringAttribute('time_snapshot_standby_revert');
  }

  // total_cpus - computed: true, optional: false, required: false
  public get totalCpus() {
    return this.getNumberAttribute('total_cpus');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // version_preference - computed: true, optional: false, required: false
  public get versionPreference() {
    return this.getStringAttribute('version_preference');
  }

  // vm_failover_reservation - computed: true, optional: false, required: false
  public get vmFailoverReservation() {
    return this.getNumberAttribute('vm_failover_reservation');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_container_database_id: cdktf.stringToTerraform(this._autonomousContainerDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_container_database_id: {
        value: cdktf.stringToHclTerraform(this._autonomousContainerDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
