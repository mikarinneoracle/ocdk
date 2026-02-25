// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMigrationAssessmentAssessorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors#assessment_id DataOciDatabaseMigrationAssessmentAssessors#assessment_id}
  */
  readonly assessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors#display_name DataOciDatabaseMigrationAssessmentAssessors#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors#id DataOciDatabaseMigrationAssessmentAssessors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors#state DataOciDatabaseMigrationAssessmentAssessors#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors#filter DataOciDatabaseMigrationAssessmentAssessors#filter}
  */
  readonly filter?: DataOciDatabaseMigrationAssessmentAssessorsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptions {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptionsToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptionsToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptionsOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesProperties {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedProperties {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // help_link_text - computed: true, optional: false, required: false
  public get helpLinkText() {
    return this.getStringAttribute('help_link_text');
  }

  // help_link_url - computed: true, optional: false, required: false
  public get helpLinkUrl() {
    return this.getStringAttribute('help_link_url');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActions {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // user_defined_properties - computed: true, optional: false, required: false
  private _userDefinedProperties = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsUserDefinedPropertiesList(this, "user_defined_properties", false);
  public get userDefinedProperties() {
    return this._userDefinedProperties;
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptions {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptionsToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptionsToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptionsOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesProperties {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedProperties {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // help_link_text - computed: true, optional: false, required: false
  public get helpLinkText() {
    return this.getStringAttribute('help_link_text');
  }

  // help_link_url - computed: true, optional: false, required: false
  public get helpLinkUrl() {
    return this.getStringAttribute('help_link_url');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActions {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // user_defined_properties - computed: true, optional: false, required: false
  private _userDefinedProperties = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsUserDefinedPropertiesList(this, "user_defined_properties", false);
  public get userDefinedProperties() {
    return this._userDefinedProperties;
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroup {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItems {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // assessor_group - computed: true, optional: false, required: false
  private _assessorGroup = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsAssessorGroupList(this, "assessor_group", false);
  public get assessorGroup() {
    return this._assessorGroup;
  }

  // assessor_result - computed: true, optional: false, required: false
  public get assessorResult() {
    return this.getStringAttribute('assessor_result');
  }

  // checks_summary - computed: true, optional: false, required: false
  public get checksSummary() {
    return this.getStringAttribute('checks_summary');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // does_script_require_restart - computed: true, optional: false, required: false
  public get doesScriptRequireRestart() {
    return this.getBooleanAttribute('does_script_require_restart');
  }

  // has_script - computed: true, optional: false, required: false
  public get hasScript() {
    return this.getBooleanAttribute('has_script');
  }

  // help_link_text - computed: true, optional: false, required: false
  public get helpLinkText() {
    return this.getStringAttribute('help_link_text');
  }

  // help_link_url - computed: true, optional: false, required: false
  public get helpLinkUrl() {
    return this.getStringAttribute('help_link_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollection {
}

export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors#name DataOciDatabaseMigrationAssessmentAssessors#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors#regex DataOciDatabaseMigrationAssessmentAssessors#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors#values DataOciDatabaseMigrationAssessmentAssessors#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseMigrationAssessmentAssessorsFilterToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseMigrationAssessmentAssessorsFilterToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseMigrationAssessmentAssessorsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseMigrationAssessmentAssessorsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseMigrationAssessmentAssessorsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorsFilterOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors oci_database_migration_assessment_assessors}
*/
export class DataOciDatabaseMigrationAssessmentAssessors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_assessment_assessors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMigrationAssessmentAssessors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMigrationAssessmentAssessors to import
  * @param importFromId The id of the existing DataOciDatabaseMigrationAssessmentAssessors that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMigrationAssessmentAssessors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_assessment_assessors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessors oci_database_migration_assessment_assessors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMigrationAssessmentAssessorsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMigrationAssessmentAssessorsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_assessment_assessors',
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
    this._assessmentId = config.assessmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assessment_id - computed: false, optional: false, required: true
  private _assessmentId?: string; 
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }
  public set assessmentId(value: string) {
    this._assessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentIdInput() {
    return this._assessmentId;
  }

  // assessor_summary_collection - computed: true, optional: false, required: false
  private _assessorSummaryCollection = new DataOciDatabaseMigrationAssessmentAssessorsAssessorSummaryCollectionList(this, "assessor_summary_collection", false);
  public get assessorSummaryCollection() {
    return this._assessorSummaryCollection;
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
  private _filter = new DataOciDatabaseMigrationAssessmentAssessorsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseMigrationAssessmentAssessorsFilter[] | cdktf.IResolvable) {
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
      assessment_id: cdktf.stringToTerraform(this._assessmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDatabaseMigrationAssessmentAssessorsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assessment_id: {
        value: cdktf.stringToHclTerraform(this._assessmentId),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseMigrationAssessmentAssessorsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseMigrationAssessmentAssessorsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
