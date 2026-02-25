// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseMigrationConnectionDatabaseconnectiontypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes#compartment_id DataOciDatabaseMigrationConnectionDatabaseconnectiontypes#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes#connection_type DataOciDatabaseMigrationConnectionDatabaseconnectiontypes#connection_type}
  */
  readonly connectionType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes#id DataOciDatabaseMigrationConnectionDatabaseconnectiontypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes#source_connection_id DataOciDatabaseMigrationConnectionDatabaseconnectiontypes#source_connection_id}
  */
  readonly sourceConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes#technology_type DataOciDatabaseMigrationConnectionDatabaseconnectiontypes#technology_type}
  */
  readonly technologyType?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes#filter DataOciDatabaseMigrationConnectionDatabaseconnectiontypes#filter}
  */
  readonly filter?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypes {
}

export function dataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypesToTerraform(struct?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypesToHclTerraform(struct?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_versions - computed: true, optional: false, required: false
  public get databaseVersions() {
    return this.getListAttribute('database_versions');
  }

  // technology_sub_type - computed: true, optional: false, required: false
  public get technologySubType() {
    return this.getStringAttribute('technology_sub_type');
  }

  // technology_sub_type_display_name - computed: true, optional: false, required: false
  public get technologySubTypeDisplayName() {
    return this.getStringAttribute('technology_sub_type_display_name');
  }
}

export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypesOutputReference {
    return new DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypes {
}

export function dataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesToTerraform(struct?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesToHclTerraform(struct?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_versions - computed: true, optional: false, required: false
  public get databaseVersions() {
    return this.getListAttribute('database_versions');
  }

  // technology_sub_types - computed: true, optional: false, required: false
  private _technologySubTypes = new DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesTechnologySubTypesList(this, "technology_sub_types", false);
  public get technologySubTypes() {
    return this._technologySubTypes;
  }

  // technology_type - computed: true, optional: false, required: false
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
}

export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesOutputReference {
    return new DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItems {
}

export function dataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsToTerraform(struct?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsToHclTerraform(struct?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // technology_types - computed: true, optional: false, required: false
  private _technologyTypes = new DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsTechnologyTypesList(this, "technology_types", false);
  public get technologyTypes() {
    return this._technologyTypes;
  }
}

export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsOutputReference {
    return new DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollection {
}

export function dataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionToTerraform(struct?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionToHclTerraform(struct?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionOutputReference {
    return new DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes#name DataOciDatabaseMigrationConnectionDatabaseconnectiontypes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes#regex DataOciDatabaseMigrationConnectionDatabaseconnectiontypes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes#values DataOciDatabaseMigrationConnectionDatabaseconnectiontypes#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilterToTerraform(struct?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilterToHclTerraform(struct?: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilterOutputReference {
    return new DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes oci_database_migration_connection_databaseconnectiontypes}
*/
export class DataOciDatabaseMigrationConnectionDatabaseconnectiontypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_connection_databaseconnectiontypes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseMigrationConnectionDatabaseconnectiontypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseMigrationConnectionDatabaseconnectiontypes to import
  * @param importFromId The id of the existing DataOciDatabaseMigrationConnectionDatabaseconnectiontypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseMigrationConnectionDatabaseconnectiontypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_connection_databaseconnectiontypes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_migration_connection_databaseconnectiontypes oci_database_migration_connection_databaseconnectiontypes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseMigrationConnectionDatabaseconnectiontypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_connection_databaseconnectiontypes',
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
    this._compartmentId = config.compartmentId;
    this._connectionType = config.connectionType;
    this._id = config.id;
    this._sourceConnectionId = config.sourceConnectionId;
    this._technologyType = config.technologyType;
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

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string[]; 
  public get connectionType() {
    return this.getListAttribute('connection_type');
  }
  public set connectionType(value: string[]) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // database_connection_type_collection - computed: true, optional: false, required: false
  private _databaseConnectionTypeCollection = new DataOciDatabaseMigrationConnectionDatabaseconnectiontypesDatabaseConnectionTypeCollectionList(this, "database_connection_type_collection", false);
  public get databaseConnectionTypeCollection() {
    return this._databaseConnectionTypeCollection;
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

  // source_connection_id - computed: false, optional: true, required: false
  private _sourceConnectionId?: string; 
  public get sourceConnectionId() {
    return this.getStringAttribute('source_connection_id');
  }
  public set sourceConnectionId(value: string) {
    this._sourceConnectionId = value;
  }
  public resetSourceConnectionId() {
    this._sourceConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionIdInput() {
    return this._sourceConnectionId;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string[]; 
  public get technologyType() {
    return this.getListAttribute('technology_type');
  }
  public set technologyType(value: string[]) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilter[] | cdktf.IResolvable) {
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
      connection_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectionType),
      id: cdktf.stringToTerraform(this._id),
      source_connection_id: cdktf.stringToTerraform(this._sourceConnectionId),
      technology_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._technologyType),
      filter: cdktf.listMapper(dataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilterToTerraform, true)(this._filter.internalValue),
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
      connection_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectionType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_connection_id: {
        value: cdktf.stringToHclTerraform(this._sourceConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      technology_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._technologyType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseMigrationConnectionDatabaseconnectiontypesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
