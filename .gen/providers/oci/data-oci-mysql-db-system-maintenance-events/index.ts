// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMysqlDbSystemMaintenanceEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#db_system_id DataOciMysqlDbSystemMaintenanceEvents#db_system_id}
  */
  readonly dbSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#id DataOciMysqlDbSystemMaintenanceEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#maintenance_action DataOciMysqlDbSystemMaintenanceEvents#maintenance_action}
  */
  readonly maintenanceAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#maintenance_status DataOciMysqlDbSystemMaintenanceEvents#maintenance_status}
  */
  readonly maintenanceStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#maintenance_type DataOciMysqlDbSystemMaintenanceEvents#maintenance_type}
  */
  readonly maintenanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#mysql_version_after_maintenance DataOciMysqlDbSystemMaintenanceEvents#mysql_version_after_maintenance}
  */
  readonly mysqlVersionAfterMaintenance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#mysql_version_before_maintenance DataOciMysqlDbSystemMaintenanceEvents#mysql_version_before_maintenance}
  */
  readonly mysqlVersionBeforeMaintenance?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#filter DataOciMysqlDbSystemMaintenanceEvents#filter}
  */
  readonly filter?: DataOciMysqlDbSystemMaintenanceEventsFilter[] | cdktf.IResolvable;
}
export interface DataOciMysqlDbSystemMaintenanceEventsMaintenanceEvents {
}

export function dataOciMysqlDbSystemMaintenanceEventsMaintenanceEventsToTerraform(struct?: DataOciMysqlDbSystemMaintenanceEventsMaintenanceEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMysqlDbSystemMaintenanceEventsMaintenanceEventsToHclTerraform(struct?: DataOciMysqlDbSystemMaintenanceEventsMaintenanceEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMysqlDbSystemMaintenanceEventsMaintenanceEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlDbSystemMaintenanceEventsMaintenanceEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMysqlDbSystemMaintenanceEventsMaintenanceEvents | undefined) {
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

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // maintenance_action - computed: true, optional: false, required: false
  public get maintenanceAction() {
    return this.getStringAttribute('maintenance_action');
  }

  // maintenance_notes - computed: true, optional: false, required: false
  public get maintenanceNotes() {
    return this.getStringAttribute('maintenance_notes');
  }

  // maintenance_scope - computed: true, optional: false, required: false
  public get maintenanceScope() {
    return this.getStringAttribute('maintenance_scope');
  }

  // maintenance_status - computed: true, optional: false, required: false
  public get maintenanceStatus() {
    return this.getStringAttribute('maintenance_status');
  }

  // maintenance_type - computed: true, optional: false, required: false
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // mysql_version_after_maintenance - computed: true, optional: false, required: false
  public get mysqlVersionAfterMaintenance() {
    return this.getStringAttribute('mysql_version_after_maintenance');
  }

  // mysql_version_before_maintenance - computed: true, optional: false, required: false
  public get mysqlVersionBeforeMaintenance() {
    return this.getStringAttribute('mysql_version_before_maintenance');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_mysql_switch_over_ended - computed: true, optional: false, required: false
  public get timeMysqlSwitchOverEnded() {
    return this.getStringAttribute('time_mysql_switch_over_ended');
  }

  // time_mysql_switch_over_started - computed: true, optional: false, required: false
  public get timeMysqlSwitchOverStarted() {
    return this.getStringAttribute('time_mysql_switch_over_started');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}

export class DataOciMysqlDbSystemMaintenanceEventsMaintenanceEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMysqlDbSystemMaintenanceEventsMaintenanceEventsOutputReference {
    return new DataOciMysqlDbSystemMaintenanceEventsMaintenanceEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMysqlDbSystemMaintenanceEventsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#name DataOciMysqlDbSystemMaintenanceEvents#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#regex DataOciMysqlDbSystemMaintenanceEvents#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#values DataOciMysqlDbSystemMaintenanceEvents#values}
  */
  readonly values: string[];
}

export function dataOciMysqlDbSystemMaintenanceEventsFilterToTerraform(struct?: DataOciMysqlDbSystemMaintenanceEventsFilter | cdktf.IResolvable): any {
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


export function dataOciMysqlDbSystemMaintenanceEventsFilterToHclTerraform(struct?: DataOciMysqlDbSystemMaintenanceEventsFilter | cdktf.IResolvable): any {
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

export class DataOciMysqlDbSystemMaintenanceEventsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlDbSystemMaintenanceEventsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciMysqlDbSystemMaintenanceEventsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciMysqlDbSystemMaintenanceEventsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciMysqlDbSystemMaintenanceEventsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciMysqlDbSystemMaintenanceEventsFilterOutputReference {
    return new DataOciMysqlDbSystemMaintenanceEventsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events oci_mysql_db_system_maintenance_events}
*/
export class DataOciMysqlDbSystemMaintenanceEvents extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_mysql_db_system_maintenance_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMysqlDbSystemMaintenanceEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMysqlDbSystemMaintenanceEvents to import
  * @param importFromId The id of the existing DataOciMysqlDbSystemMaintenanceEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMysqlDbSystemMaintenanceEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_mysql_db_system_maintenance_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/mysql_db_system_maintenance_events oci_mysql_db_system_maintenance_events} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMysqlDbSystemMaintenanceEventsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMysqlDbSystemMaintenanceEventsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_db_system_maintenance_events',
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
    this._dbSystemId = config.dbSystemId;
    this._id = config.id;
    this._maintenanceAction = config.maintenanceAction;
    this._maintenanceStatus = config.maintenanceStatus;
    this._maintenanceType = config.maintenanceType;
    this._mysqlVersionAfterMaintenance = config.mysqlVersionAfterMaintenance;
    this._mysqlVersionBeforeMaintenance = config.mysqlVersionBeforeMaintenance;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_system_id - computed: false, optional: false, required: true
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
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

  // maintenance_action - computed: false, optional: true, required: false
  private _maintenanceAction?: string; 
  public get maintenanceAction() {
    return this.getStringAttribute('maintenance_action');
  }
  public set maintenanceAction(value: string) {
    this._maintenanceAction = value;
  }
  public resetMaintenanceAction() {
    this._maintenanceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceActionInput() {
    return this._maintenanceAction;
  }

  // maintenance_events - computed: true, optional: false, required: false
  private _maintenanceEvents = new DataOciMysqlDbSystemMaintenanceEventsMaintenanceEventsList(this, "maintenance_events", false);
  public get maintenanceEvents() {
    return this._maintenanceEvents;
  }

  // maintenance_status - computed: false, optional: true, required: false
  private _maintenanceStatus?: string; 
  public get maintenanceStatus() {
    return this.getStringAttribute('maintenance_status');
  }
  public set maintenanceStatus(value: string) {
    this._maintenanceStatus = value;
  }
  public resetMaintenanceStatus() {
    this._maintenanceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStatusInput() {
    return this._maintenanceStatus;
  }

  // maintenance_type - computed: false, optional: true, required: false
  private _maintenanceType?: string; 
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }
  public set maintenanceType(value: string) {
    this._maintenanceType = value;
  }
  public resetMaintenanceType() {
    this._maintenanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTypeInput() {
    return this._maintenanceType;
  }

  // mysql_version_after_maintenance - computed: false, optional: true, required: false
  private _mysqlVersionAfterMaintenance?: string; 
  public get mysqlVersionAfterMaintenance() {
    return this.getStringAttribute('mysql_version_after_maintenance');
  }
  public set mysqlVersionAfterMaintenance(value: string) {
    this._mysqlVersionAfterMaintenance = value;
  }
  public resetMysqlVersionAfterMaintenance() {
    this._mysqlVersionAfterMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlVersionAfterMaintenanceInput() {
    return this._mysqlVersionAfterMaintenance;
  }

  // mysql_version_before_maintenance - computed: false, optional: true, required: false
  private _mysqlVersionBeforeMaintenance?: string; 
  public get mysqlVersionBeforeMaintenance() {
    return this.getStringAttribute('mysql_version_before_maintenance');
  }
  public set mysqlVersionBeforeMaintenance(value: string) {
    this._mysqlVersionBeforeMaintenance = value;
  }
  public resetMysqlVersionBeforeMaintenance() {
    this._mysqlVersionBeforeMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlVersionBeforeMaintenanceInput() {
    return this._mysqlVersionBeforeMaintenance;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciMysqlDbSystemMaintenanceEventsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciMysqlDbSystemMaintenanceEventsFilter[] | cdktf.IResolvable) {
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
      db_system_id: cdktf.stringToTerraform(this._dbSystemId),
      id: cdktf.stringToTerraform(this._id),
      maintenance_action: cdktf.stringToTerraform(this._maintenanceAction),
      maintenance_status: cdktf.stringToTerraform(this._maintenanceStatus),
      maintenance_type: cdktf.stringToTerraform(this._maintenanceType),
      mysql_version_after_maintenance: cdktf.stringToTerraform(this._mysqlVersionAfterMaintenance),
      mysql_version_before_maintenance: cdktf.stringToTerraform(this._mysqlVersionBeforeMaintenance),
      filter: cdktf.listMapper(dataOciMysqlDbSystemMaintenanceEventsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_system_id: {
        value: cdktf.stringToHclTerraform(this._dbSystemId),
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
      maintenance_action: {
        value: cdktf.stringToHclTerraform(this._maintenanceAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_status: {
        value: cdktf.stringToHclTerraform(this._maintenanceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_type: {
        value: cdktf.stringToHclTerraform(this._maintenanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_version_after_maintenance: {
        value: cdktf.stringToHclTerraform(this._mysqlVersionAfterMaintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_version_before_maintenance: {
        value: cdktf.stringToHclTerraform(this._mysqlVersionBeforeMaintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciMysqlDbSystemMaintenanceEventsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciMysqlDbSystemMaintenanceEventsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
