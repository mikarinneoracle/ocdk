// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects#assessment_id DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects#assessment_id}
  */
  readonly assessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects#assessor_name DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects#assessor_name}
  */
  readonly assessorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects#check_name DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects#check_name}
  */
  readonly checkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects#id DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects#filter DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects#filter}
  */
  readonly filter?: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItems {
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItemsToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItemsToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItems | undefined) {
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

  // fields - computed: true, optional: false, required: false
  private _fields = new cdktf.StringMap(this, "fields");
  public get fields() {
    return this._fields;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // is_excluded - computed: true, optional: false, required: false
  public get isExcluded() {
    return this.getBooleanAttribute('is_excluded');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItemsOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollection {
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects#name DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects#regex DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects#values DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilterToTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilterToHclTerraform(struct?: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilterOutputReference {
    return new DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects oci_database_migration_assessment_assessor_check_affected_objects}
*/
export class DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_assessment_assessor_check_affected_objects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects to import
  * @param importFromId The id of the existing DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_assessment_assessor_check_affected_objects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_assessment_assessor_check_affected_objects oci_database_migration_assessment_assessor_check_affected_objects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_assessment_assessor_check_affected_objects',
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
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affected_objects_collection - computed: true, optional: false, required: false
  private _affectedObjectsCollection = new DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsAffectedObjectsCollectionList(this, "affected_objects_collection", false);
  public get affectedObjectsCollection() {
    return this._affectedObjectsCollection;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilter[] | cdktf.IResolvable) {
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
      assessor_name: cdktf.stringToTerraform(this._assessorName),
      check_name: cdktf.stringToTerraform(this._checkName),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseMigrationAssessmentAssessorCheckAffectedObjectsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
