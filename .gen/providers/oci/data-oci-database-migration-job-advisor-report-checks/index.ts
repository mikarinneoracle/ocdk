// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_job_advisor_report_checks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMigrationJobAdvisorReportChecksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_job_advisor_report_checks#id DataOciDatabaseMigrationJobAdvisorReportChecks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_job_advisor_report_checks#job_id DataOciDatabaseMigrationJobAdvisorReportChecks#job_id}
  */
  readonly jobId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_job_advisor_report_checks#filter DataOciDatabaseMigrationJobAdvisorReportChecks#filter}
  */
  readonly filter?: DataOciDatabaseMigrationJobAdvisorReportChecksFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumns {
}

export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumnsToTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumnsToHclTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumnsOutputReference {
    return new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadata {
}

export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadataToTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadataToHclTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_name_column - computed: true, optional: false, required: false
  public get objectNameColumn() {
    return this.getStringAttribute('object_name_column');
  }

  // object_type_column - computed: true, optional: false, required: false
  public get objectTypeColumn() {
    return this.getStringAttribute('object_type_column');
  }

  // object_type_fixed - computed: true, optional: false, required: false
  public get objectTypeFixed() {
    return this.getStringAttribute('object_type_fixed');
  }

  // schema_owner_column - computed: true, optional: false, required: false
  public get schemaOwnerColumn() {
    return this.getStringAttribute('schema_owner_column');
  }
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadataOutputReference {
    return new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItems {
}

export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsToTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsToHclTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fixup_script_location - computed: true, optional: false, required: false
  public get fixupScriptLocation() {
    return this.getStringAttribute('fixup_script_location');
  }

  // impact - computed: true, optional: false, required: false
  public get impact() {
    return this.getStringAttribute('impact');
  }

  // is_exclusion_allowed - computed: true, optional: false, required: false
  public get isExclusionAllowed() {
    return this.getBooleanAttribute('is_exclusion_allowed');
  }

  // is_reviewed - computed: true, optional: false, required: false
  public get isReviewed() {
    return this.getBooleanAttribute('is_reviewed');
  }

  // issue - computed: true, optional: false, required: false
  public get issue() {
    return this.getStringAttribute('issue');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // object_count - computed: true, optional: false, required: false
  public get objectCount() {
    return this.getNumberAttribute('object_count');
  }

  // result_type - computed: true, optional: false, required: false
  public get resultType() {
    return this.getStringAttribute('result_type');
  }
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsOutputReference {
    return new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummary {
}

export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummaryToTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummaryToHclTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocker_results_total_count - computed: true, optional: false, required: false
  public get blockerResultsTotalCount() {
    return this.getNumberAttribute('blocker_results_total_count');
  }

  // fatal_results_total_count - computed: true, optional: false, required: false
  public get fatalResultsTotalCount() {
    return this.getNumberAttribute('fatal_results_total_count');
  }

  // informational_results_total_count - computed: true, optional: false, required: false
  public get informationalResultsTotalCount() {
    return this.getNumberAttribute('informational_results_total_count');
  }

  // pass_results_total_count - computed: true, optional: false, required: false
  public get passResultsTotalCount() {
    return this.getNumberAttribute('pass_results_total_count');
  }

  // warning_results_total_count - computed: true, optional: false, required: false
  public get warningResultsTotalCount() {
    return this.getNumberAttribute('warning_results_total_count');
  }
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummaryOutputReference {
    return new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItems {
}

export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsToTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsToHclTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advisor_report_check_id - computed: true, optional: false, required: false
  public get advisorReportCheckId() {
    return this.getStringAttribute('advisor_report_check_id');
  }

  // is_reviewed - computed: true, optional: false, required: false
  public get isReviewed() {
    return this.getBooleanAttribute('is_reviewed');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // summary - computed: true, optional: false, required: false
  private _summary = new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsSummaryList(this, "summary", false);
  public get summary() {
    return this._summary;
  }
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsOutputReference {
    return new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummary {
}

export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummaryToTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummaryToHclTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocker_results_total_count - computed: true, optional: false, required: false
  public get blockerResultsTotalCount() {
    return this.getNumberAttribute('blocker_results_total_count');
  }

  // fatal_results_total_count - computed: true, optional: false, required: false
  public get fatalResultsTotalCount() {
    return this.getNumberAttribute('fatal_results_total_count');
  }

  // informational_results_total_count - computed: true, optional: false, required: false
  public get informationalResultsTotalCount() {
    return this.getNumberAttribute('informational_results_total_count');
  }

  // pass_results_total_count - computed: true, optional: false, required: false
  public get passResultsTotalCount() {
    return this.getNumberAttribute('pass_results_total_count');
  }

  // warning_results_total_count - computed: true, optional: false, required: false
  public get warningResultsTotalCount() {
    return this.getNumberAttribute('warning_results_total_count');
  }
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummaryOutputReference {
    return new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollection {
}

export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionToTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionToHclTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // summary - computed: true, optional: false, required: false
  private _summary = new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionSummaryList(this, "summary", false);
  public get summary() {
    return this._summary;
  }
}

export class DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionOutputReference {
    return new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationJobAdvisorReportChecksFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_job_advisor_report_checks#name DataOciDatabaseMigrationJobAdvisorReportChecks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_job_advisor_report_checks#regex DataOciDatabaseMigrationJobAdvisorReportChecks#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_job_advisor_report_checks#values DataOciDatabaseMigrationJobAdvisorReportChecks#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseMigrationJobAdvisorReportChecksFilterToTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseMigrationJobAdvisorReportChecksFilterToHclTerraform(struct?: DataOciDatabaseMigrationJobAdvisorReportChecksFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseMigrationJobAdvisorReportChecksFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationJobAdvisorReportChecksFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseMigrationJobAdvisorReportChecksFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseMigrationJobAdvisorReportChecksFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseMigrationJobAdvisorReportChecksFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseMigrationJobAdvisorReportChecksFilterOutputReference {
    return new DataOciDatabaseMigrationJobAdvisorReportChecksFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_job_advisor_report_checks oci_database_migration_job_advisor_report_checks}
*/
export class DataOciDatabaseMigrationJobAdvisorReportChecks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_job_advisor_report_checks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMigrationJobAdvisorReportChecks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMigrationJobAdvisorReportChecks to import
  * @param importFromId The id of the existing DataOciDatabaseMigrationJobAdvisorReportChecks that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_job_advisor_report_checks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMigrationJobAdvisorReportChecks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_job_advisor_report_checks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_job_advisor_report_checks oci_database_migration_job_advisor_report_checks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMigrationJobAdvisorReportChecksConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMigrationJobAdvisorReportChecksConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_job_advisor_report_checks',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '8.2.0',
        providerVersionConstraint: '>= 5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._jobId = config.jobId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advisor_report_check_collection - computed: true, optional: false, required: false
  private _advisorReportCheckCollection = new DataOciDatabaseMigrationJobAdvisorReportChecksAdvisorReportCheckCollectionList(this, "advisor_report_check_collection", false);
  public get advisorReportCheckCollection() {
    return this._advisorReportCheckCollection;
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

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseMigrationJobAdvisorReportChecksFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseMigrationJobAdvisorReportChecksFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      filter: cdktf.listMapper(dataOciDatabaseMigrationJobAdvisorReportChecksFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseMigrationJobAdvisorReportChecksFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseMigrationJobAdvisorReportChecksFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
