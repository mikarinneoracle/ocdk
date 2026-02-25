// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseMigrationAssessmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#acceptable_downtime DatabaseMigrationAssessment#acceptable_downtime}
  */
  readonly acceptableDowntime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#bulk_include_exclude_data DatabaseMigrationAssessment#bulk_include_exclude_data}
  */
  readonly bulkIncludeExcludeData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#compartment_id DatabaseMigrationAssessment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#creation_type DatabaseMigrationAssessment#creation_type}
  */
  readonly creationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#database_combination DatabaseMigrationAssessment#database_combination}
  */
  readonly databaseCombination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#database_data_size DatabaseMigrationAssessment#database_data_size}
  */
  readonly databaseDataSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#ddl_expectation DatabaseMigrationAssessment#ddl_expectation}
  */
  readonly ddlExpectation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#defined_tags DatabaseMigrationAssessment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#description DatabaseMigrationAssessment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#display_name DatabaseMigrationAssessment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#freeform_tags DatabaseMigrationAssessment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#id DatabaseMigrationAssessment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#network_speed_megabit_per_second DatabaseMigrationAssessment#network_speed_megabit_per_second}
  */
  readonly networkSpeedMegabitPerSecond: string;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#exclude_objects DatabaseMigrationAssessment#exclude_objects}
  */
  readonly excludeObjects?: DatabaseMigrationAssessmentExcludeObjects[] | cdktf.IResolvable;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#include_objects DatabaseMigrationAssessment#include_objects}
  */
  readonly includeObjects?: DatabaseMigrationAssessmentIncludeObjects[] | cdktf.IResolvable;
  /**
  * source_database_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#source_database_connection DatabaseMigrationAssessment#source_database_connection}
  */
  readonly sourceDatabaseConnection: DatabaseMigrationAssessmentSourceDatabaseConnection;
  /**
  * target_database_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#target_database_connection DatabaseMigrationAssessment#target_database_connection}
  */
  readonly targetDatabaseConnection: DatabaseMigrationAssessmentTargetDatabaseConnection;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#timeouts DatabaseMigrationAssessment#timeouts}
  */
  readonly timeouts?: DatabaseMigrationAssessmentTimeouts;
}
export interface DatabaseMigrationAssessmentExcludeObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#is_omit_excluded_table_from_replication DatabaseMigrationAssessment#is_omit_excluded_table_from_replication}
  */
  readonly isOmitExcludedTableFromReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#object DatabaseMigrationAssessment#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#owner DatabaseMigrationAssessment#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#schema DatabaseMigrationAssessment#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#type DatabaseMigrationAssessment#type}
  */
  readonly type?: string;
}

export function databaseMigrationAssessmentExcludeObjectsToTerraform(struct?: DatabaseMigrationAssessmentExcludeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_omit_excluded_table_from_replication: cdktf.booleanToTerraform(struct!.isOmitExcludedTableFromReplication),
    object: cdktf.stringToTerraform(struct!.object),
    owner: cdktf.stringToTerraform(struct!.owner),
    schema: cdktf.stringToTerraform(struct!.schema),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function databaseMigrationAssessmentExcludeObjectsToHclTerraform(struct?: DatabaseMigrationAssessmentExcludeObjects | cdktf.IResolvable): any {
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
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
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

export class DatabaseMigrationAssessmentExcludeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationAssessmentExcludeObjects | cdktf.IResolvable | undefined {
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
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationAssessmentExcludeObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isOmitExcludedTableFromReplication = undefined;
      this._object = undefined;
      this._owner = undefined;
      this._schema = undefined;
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
      this._schema = value.schema;
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

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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

export class DatabaseMigrationAssessmentExcludeObjectsList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationAssessmentExcludeObjects[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationAssessmentExcludeObjectsOutputReference {
    return new DatabaseMigrationAssessmentExcludeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationAssessmentIncludeObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#is_omit_excluded_table_from_replication DatabaseMigrationAssessment#is_omit_excluded_table_from_replication}
  */
  readonly isOmitExcludedTableFromReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#object DatabaseMigrationAssessment#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#owner DatabaseMigrationAssessment#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#schema DatabaseMigrationAssessment#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#type DatabaseMigrationAssessment#type}
  */
  readonly type?: string;
}

export function databaseMigrationAssessmentIncludeObjectsToTerraform(struct?: DatabaseMigrationAssessmentIncludeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_omit_excluded_table_from_replication: cdktf.booleanToTerraform(struct!.isOmitExcludedTableFromReplication),
    object: cdktf.stringToTerraform(struct!.object),
    owner: cdktf.stringToTerraform(struct!.owner),
    schema: cdktf.stringToTerraform(struct!.schema),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function databaseMigrationAssessmentIncludeObjectsToHclTerraform(struct?: DatabaseMigrationAssessmentIncludeObjects | cdktf.IResolvable): any {
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
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
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

export class DatabaseMigrationAssessmentIncludeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationAssessmentIncludeObjects | cdktf.IResolvable | undefined {
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
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationAssessmentIncludeObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isOmitExcludedTableFromReplication = undefined;
      this._object = undefined;
      this._owner = undefined;
      this._schema = undefined;
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
      this._schema = value.schema;
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

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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

export class DatabaseMigrationAssessmentIncludeObjectsList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationAssessmentIncludeObjects[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationAssessmentIncludeObjectsOutputReference {
    return new DatabaseMigrationAssessmentIncludeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationAssessmentSourceDatabaseConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#id DatabaseMigrationAssessment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function databaseMigrationAssessmentSourceDatabaseConnectionToTerraform(struct?: DatabaseMigrationAssessmentSourceDatabaseConnectionOutputReference | DatabaseMigrationAssessmentSourceDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function databaseMigrationAssessmentSourceDatabaseConnectionToHclTerraform(struct?: DatabaseMigrationAssessmentSourceDatabaseConnectionOutputReference | DatabaseMigrationAssessmentSourceDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationAssessmentSourceDatabaseConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationAssessmentSourceDatabaseConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationAssessmentSourceDatabaseConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DatabaseMigrationAssessmentTargetDatabaseConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#connection_type DatabaseMigrationAssessment#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#database_version DatabaseMigrationAssessment#database_version}
  */
  readonly databaseVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#id DatabaseMigrationAssessment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#technology_sub_type DatabaseMigrationAssessment#technology_sub_type}
  */
  readonly technologySubType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#technology_type DatabaseMigrationAssessment#technology_type}
  */
  readonly technologyType?: string;
}

export function databaseMigrationAssessmentTargetDatabaseConnectionToTerraform(struct?: DatabaseMigrationAssessmentTargetDatabaseConnectionOutputReference | DatabaseMigrationAssessmentTargetDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    database_version: cdktf.stringToTerraform(struct!.databaseVersion),
    id: cdktf.stringToTerraform(struct!.id),
    technology_sub_type: cdktf.stringToTerraform(struct!.technologySubType),
    technology_type: cdktf.stringToTerraform(struct!.technologyType),
  }
}


export function databaseMigrationAssessmentTargetDatabaseConnectionToHclTerraform(struct?: DatabaseMigrationAssessmentTargetDatabaseConnectionOutputReference | DatabaseMigrationAssessmentTargetDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_version: {
      value: cdktf.stringToHclTerraform(struct!.databaseVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_sub_type: {
      value: cdktf.stringToHclTerraform(struct!.technologySubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktf.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationAssessmentTargetDatabaseConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationAssessmentTargetDatabaseConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._databaseVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseVersion = this._databaseVersion;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._technologySubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologySubType = this._technologySubType;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationAssessmentTargetDatabaseConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionType = undefined;
      this._databaseVersion = undefined;
      this._id = undefined;
      this._technologySubType = undefined;
      this._technologyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionType = value.connectionType;
      this._databaseVersion = value.databaseVersion;
      this._id = value.id;
      this._technologySubType = value.technologySubType;
      this._technologyType = value.technologyType;
    }
  }

  // connection_type - computed: true, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // database_version - computed: true, optional: true, required: false
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  public resetDatabaseVersion() {
    this._databaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
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

  // technology_sub_type - computed: true, optional: true, required: false
  private _technologySubType?: string; 
  public get technologySubType() {
    return this.getStringAttribute('technology_sub_type');
  }
  public set technologySubType(value: string) {
    this._technologySubType = value;
  }
  public resetTechnologySubType() {
    this._technologySubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologySubTypeInput() {
    return this._technologySubType;
  }

  // technology_type - computed: true, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }
}
export interface DatabaseMigrationAssessmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#create DatabaseMigrationAssessment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#delete DatabaseMigrationAssessment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#update DatabaseMigrationAssessment#update}
  */
  readonly update?: string;
}

export function databaseMigrationAssessmentTimeoutsToTerraform(struct?: DatabaseMigrationAssessmentTimeouts | cdktf.IResolvable): any {
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


export function databaseMigrationAssessmentTimeoutsToHclTerraform(struct?: DatabaseMigrationAssessmentTimeouts | cdktf.IResolvable): any {
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

export class DatabaseMigrationAssessmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMigrationAssessmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMigrationAssessmentTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment oci_database_migration_assessment}
*/
export class DatabaseMigrationAssessment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_assessment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseMigrationAssessment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseMigrationAssessment to import
  * @param importFromId The id of the existing DatabaseMigrationAssessment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseMigrationAssessment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_assessment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_migration_assessment oci_database_migration_assessment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMigrationAssessmentConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseMigrationAssessmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_assessment',
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
    this._acceptableDowntime = config.acceptableDowntime;
    this._bulkIncludeExcludeData = config.bulkIncludeExcludeData;
    this._compartmentId = config.compartmentId;
    this._creationType = config.creationType;
    this._databaseCombination = config.databaseCombination;
    this._databaseDataSize = config.databaseDataSize;
    this._ddlExpectation = config.ddlExpectation;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._networkSpeedMegabitPerSecond = config.networkSpeedMegabitPerSecond;
    this._excludeObjects.internalValue = config.excludeObjects;
    this._includeObjects.internalValue = config.includeObjects;
    this._sourceDatabaseConnection.internalValue = config.sourceDatabaseConnection;
    this._targetDatabaseConnection.internalValue = config.targetDatabaseConnection;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceptable_downtime - computed: false, optional: false, required: true
  private _acceptableDowntime?: string; 
  public get acceptableDowntime() {
    return this.getStringAttribute('acceptable_downtime');
  }
  public set acceptableDowntime(value: string) {
    this._acceptableDowntime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptableDowntimeInput() {
    return this._acceptableDowntime;
  }

  // assessment_migration_type - computed: true, optional: false, required: false
  public get assessmentMigrationType() {
    return this.getStringAttribute('assessment_migration_type');
  }

  // bulk_include_exclude_data - computed: true, optional: true, required: false
  private _bulkIncludeExcludeData?: string; 
  public get bulkIncludeExcludeData() {
    return this.getStringAttribute('bulk_include_exclude_data');
  }
  public set bulkIncludeExcludeData(value: string) {
    this._bulkIncludeExcludeData = value;
  }
  public resetBulkIncludeExcludeData() {
    this._bulkIncludeExcludeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkIncludeExcludeDataInput() {
    return this._bulkIncludeExcludeData;
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

  // creation_type - computed: true, optional: true, required: false
  private _creationType?: string; 
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }
  public set creationType(value: string) {
    this._creationType = value;
  }
  public resetCreationType() {
    this._creationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTypeInput() {
    return this._creationType;
  }

  // database_combination - computed: false, optional: false, required: true
  private _databaseCombination?: string; 
  public get databaseCombination() {
    return this.getStringAttribute('database_combination');
  }
  public set databaseCombination(value: string) {
    this._databaseCombination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCombinationInput() {
    return this._databaseCombination;
  }

  // database_data_size - computed: false, optional: false, required: true
  private _databaseDataSize?: string; 
  public get databaseDataSize() {
    return this.getStringAttribute('database_data_size');
  }
  public set databaseDataSize(value: string) {
    this._databaseDataSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseDataSizeInput() {
    return this._databaseDataSize;
  }

  // ddl_expectation - computed: false, optional: false, required: true
  private _ddlExpectation?: string; 
  public get ddlExpectation() {
    return this.getStringAttribute('ddl_expectation');
  }
  public set ddlExpectation(value: string) {
    this._ddlExpectation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlExpectationInput() {
    return this._ddlExpectation;
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // is_cdb_supported - computed: true, optional: false, required: false
  public get isCdbSupported() {
    return this.getBooleanAttribute('is_cdb_supported');
  }

  // migration_id - computed: true, optional: false, required: false
  public get migrationId() {
    return this.getStringAttribute('migration_id');
  }

  // network_speed_megabit_per_second - computed: false, optional: false, required: true
  private _networkSpeedMegabitPerSecond?: string; 
  public get networkSpeedMegabitPerSecond() {
    return this.getStringAttribute('network_speed_megabit_per_second');
  }
  public set networkSpeedMegabitPerSecond(value: string) {
    this._networkSpeedMegabitPerSecond = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSpeedMegabitPerSecondInput() {
    return this._networkSpeedMegabitPerSecond;
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatabaseMigrationAssessmentExcludeObjectsList(this, "exclude_objects", false);
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatabaseMigrationAssessmentExcludeObjects[] | cdktf.IResolvable) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new DatabaseMigrationAssessmentIncludeObjectsList(this, "include_objects", false);
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatabaseMigrationAssessmentIncludeObjects[] | cdktf.IResolvable) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }

  // source_database_connection - computed: false, optional: false, required: true
  private _sourceDatabaseConnection = new DatabaseMigrationAssessmentSourceDatabaseConnectionOutputReference(this, "source_database_connection");
  public get sourceDatabaseConnection() {
    return this._sourceDatabaseConnection;
  }
  public putSourceDatabaseConnection(value: DatabaseMigrationAssessmentSourceDatabaseConnection) {
    this._sourceDatabaseConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatabaseConnectionInput() {
    return this._sourceDatabaseConnection.internalValue;
  }

  // target_database_connection - computed: false, optional: false, required: true
  private _targetDatabaseConnection = new DatabaseMigrationAssessmentTargetDatabaseConnectionOutputReference(this, "target_database_connection");
  public get targetDatabaseConnection() {
    return this._targetDatabaseConnection;
  }
  public putTargetDatabaseConnection(value: DatabaseMigrationAssessmentTargetDatabaseConnection) {
    this._targetDatabaseConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseConnectionInput() {
    return this._targetDatabaseConnection.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseMigrationAssessmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseMigrationAssessmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceptable_downtime: cdktf.stringToTerraform(this._acceptableDowntime),
      bulk_include_exclude_data: cdktf.stringToTerraform(this._bulkIncludeExcludeData),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      creation_type: cdktf.stringToTerraform(this._creationType),
      database_combination: cdktf.stringToTerraform(this._databaseCombination),
      database_data_size: cdktf.stringToTerraform(this._databaseDataSize),
      ddl_expectation: cdktf.stringToTerraform(this._ddlExpectation),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      network_speed_megabit_per_second: cdktf.stringToTerraform(this._networkSpeedMegabitPerSecond),
      exclude_objects: cdktf.listMapper(databaseMigrationAssessmentExcludeObjectsToTerraform, true)(this._excludeObjects.internalValue),
      include_objects: cdktf.listMapper(databaseMigrationAssessmentIncludeObjectsToTerraform, true)(this._includeObjects.internalValue),
      source_database_connection: databaseMigrationAssessmentSourceDatabaseConnectionToTerraform(this._sourceDatabaseConnection.internalValue),
      target_database_connection: databaseMigrationAssessmentTargetDatabaseConnectionToTerraform(this._targetDatabaseConnection.internalValue),
      timeouts: databaseMigrationAssessmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acceptable_downtime: {
        value: cdktf.stringToHclTerraform(this._acceptableDowntime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bulk_include_exclude_data: {
        value: cdktf.stringToHclTerraform(this._bulkIncludeExcludeData),
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
      creation_type: {
        value: cdktf.stringToHclTerraform(this._creationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_combination: {
        value: cdktf.stringToHclTerraform(this._databaseCombination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_data_size: {
        value: cdktf.stringToHclTerraform(this._databaseDataSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddl_expectation: {
        value: cdktf.stringToHclTerraform(this._ddlExpectation),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      network_speed_megabit_per_second: {
        value: cdktf.stringToHclTerraform(this._networkSpeedMegabitPerSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_objects: {
        value: cdktf.listMapperHcl(databaseMigrationAssessmentExcludeObjectsToHclTerraform, true)(this._excludeObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationAssessmentExcludeObjectsList",
      },
      include_objects: {
        value: cdktf.listMapperHcl(databaseMigrationAssessmentIncludeObjectsToHclTerraform, true)(this._includeObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationAssessmentIncludeObjectsList",
      },
      source_database_connection: {
        value: databaseMigrationAssessmentSourceDatabaseConnectionToHclTerraform(this._sourceDatabaseConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationAssessmentSourceDatabaseConnectionList",
      },
      target_database_connection: {
        value: databaseMigrationAssessmentTargetDatabaseConnectionToHclTerraform(this._targetDatabaseConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationAssessmentTargetDatabaseConnectionList",
      },
      timeouts: {
        value: databaseMigrationAssessmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseMigrationAssessmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
