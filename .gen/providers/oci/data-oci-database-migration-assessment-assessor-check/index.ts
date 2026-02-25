// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMigrationAssessmentAssessorCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check#assessment_id DataOciDatabaseMigrationAssessmentAssessorCheck#assessment_id}
  */
  readonly assessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check#assessor_name DataOciDatabaseMigrationAssessmentAssessorCheck#assessor_name}
  */
  readonly assessorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check#check_name DataOciDatabaseMigrationAssessmentAssessorCheck#check_name}
  */
  readonly checkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check#compartment_id DataOciDatabaseMigrationAssessmentAssessorCheck#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check#id DataOciDatabaseMigrationAssessmentAssessorCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroup {
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroupToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroupToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroup | undefined) {
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

  // is_expanded - computed: true, optional: false, required: false
  public get isExpanded() {
    return this.getBooleanAttribute('is_expanded');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroupOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptions {
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptionsToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptionsToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptions | undefined) {
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

export class DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptionsOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesProperties {
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesProperties | undefined) {
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
  private _options = new DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOptionsList(this, "options", false);
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

export class DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedProperties {
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedProperties | undefined) {
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
  private _properties = new DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckCheckAction {
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckCheckActionToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckCheckAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorCheckCheckActionToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckCheckAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckCheckAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckCheckAction | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // user_defined_properties - computed: true, optional: false, required: false
  private _userDefinedProperties = new DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionUserDefinedPropertiesList(this, "user_defined_properties", false);
  public get userDefinedProperties() {
    return this._userDefinedProperties;
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckColumns {
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckColumnsToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorCheckColumnsToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckColumns | undefined) {
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

export class DataOciDatabaseMigrationAssessmentAssessorCheckColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckColumnsOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckLogLocation {
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckLogLocationToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorCheckLogLocationToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckLogLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckLogLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckLogLocation | undefined) {
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

export class DataOciDatabaseMigrationAssessmentAssessorCheckLogLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckLogLocationOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckLogLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckMetadata {
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckMetadataToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorCheckMetadataToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckMetadata | undefined) {
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

export class DataOciDatabaseMigrationAssessmentAssessorCheckMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckMetadataOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check oci_database_migration_assessment_assessor_check}
*/
export class DataOciDatabaseMigrationAssessmentAssessorCheck extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_assessment_assessor_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMigrationAssessmentAssessorCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMigrationAssessmentAssessorCheck to import
  * @param importFromId The id of the existing DataOciDatabaseMigrationAssessmentAssessorCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMigrationAssessmentAssessorCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_assessment_assessor_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check oci_database_migration_assessment_assessor_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMigrationAssessmentAssessorCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMigrationAssessmentAssessorCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_assessment_assessor_check',
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
    this._assessorName = config.assessorName;
    this._checkName = config.checkName;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

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

  // assessor_check_group - computed: true, optional: false, required: false
  private _assessorCheckGroup = new DataOciDatabaseMigrationAssessmentAssessorCheckAssessorCheckGroupList(this, "assessor_check_group", false);
  public get assessorCheckGroup() {
    return this._assessorCheckGroup;
  }

  // assessor_check_state - computed: true, optional: false, required: false
  public get assessorCheckState() {
    return this.getStringAttribute('assessor_check_state');
  }

  // assessor_name - computed: false, optional: false, required: true
  private _assessorName?: string; 
  public get assessorName() {
    return this.getStringAttribute('assessor_name');
  }
  public set assessorName(value: string) {
    this._assessorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assessorNameInput() {
    return this._assessorName;
  }

  // check_action - computed: true, optional: false, required: false
  private _checkAction = new DataOciDatabaseMigrationAssessmentAssessorCheckCheckActionList(this, "check_action", false);
  public get checkAction() {
    return this._checkAction;
  }

  // check_name - computed: false, optional: false, required: true
  private _checkName?: string; 
  public get checkName() {
    return this.getStringAttribute('check_name');
  }
  public set checkName(value: string) {
    this._checkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNameInput() {
    return this._checkName;
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataOciDatabaseMigrationAssessmentAssessorCheckColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fixup_script_location - computed: true, optional: false, required: false
  public get fixupScriptLocation() {
    return this.getStringAttribute('fixup_script_location');
  }

  // help_link_text - computed: true, optional: false, required: false
  public get helpLinkText() {
    return this.getStringAttribute('help_link_text');
  }

  // help_link_url - computed: true, optional: false, required: false
  public get helpLinkUrl() {
    return this.getStringAttribute('help_link_url');
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

  // impact - computed: true, optional: false, required: false
  public get impact() {
    return this.getStringAttribute('impact');
  }

  // is_exclusion_allowed - computed: true, optional: false, required: false
  public get isExclusionAllowed() {
    return this.getBooleanAttribute('is_exclusion_allowed');
  }

  // issue - computed: true, optional: false, required: false
  public get issue() {
    return this.getStringAttribute('issue');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // log_location - computed: true, optional: false, required: false
  private _logLocation = new DataOciDatabaseMigrationAssessmentAssessorCheckLogLocationList(this, "log_location", false);
  public get logLocation() {
    return this._logLocation;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciDatabaseMigrationAssessmentAssessorCheckMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_count - computed: true, optional: false, required: false
  public get objectCount() {
    return this.getNumberAttribute('object_count');
  }

  // objects_display_name - computed: true, optional: false, required: false
  public get objectsDisplayName() {
    return this.getStringAttribute('objects_display_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assessment_id: cdktf.stringToTerraform(this._assessmentId),
      assessor_name: cdktf.stringToTerraform(this._assessorName),
      check_name: cdktf.stringToTerraform(this._checkName),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
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
      assessor_name: {
        value: cdktf.stringToHclTerraform(this._assessorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_name: {
        value: cdktf.stringToHclTerraform(this._checkName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
