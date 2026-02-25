// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBudgetCostAnomalyEventAnalyticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#compartment_id DataOciBudgetCostAnomalyEventAnalytics#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#cost_anomaly_monitor_id DataOciBudgetCostAnomalyEventAnalytics#cost_anomaly_monitor_id}
  */
  readonly costAnomalyMonitorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#cost_impact DataOciBudgetCostAnomalyEventAnalytics#cost_impact}
  */
  readonly costImpact?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#cost_impact_percentage DataOciBudgetCostAnomalyEventAnalytics#cost_impact_percentage}
  */
  readonly costImpactPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#id DataOciBudgetCostAnomalyEventAnalytics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#name DataOciBudgetCostAnomalyEventAnalytics#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#region DataOciBudgetCostAnomalyEventAnalytics#region}
  */
  readonly region?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#target_tenant_id DataOciBudgetCostAnomalyEventAnalytics#target_tenant_id}
  */
  readonly targetTenantId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#time_anomaly_event_end_date DataOciBudgetCostAnomalyEventAnalytics#time_anomaly_event_end_date}
  */
  readonly timeAnomalyEventEndDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#time_anomaly_event_start_date DataOciBudgetCostAnomalyEventAnalytics#time_anomaly_event_start_date}
  */
  readonly timeAnomalyEventStartDate?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#filter DataOciBudgetCostAnomalyEventAnalytics#filter}
  */
  readonly filter?: DataOciBudgetCostAnomalyEventAnalyticsFilter[] | cdktf.IResolvable;
}
export interface DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItems {
}

export function dataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItemsToTerraform(struct?: DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItemsToHclTerraform(struct?: DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // average_cost_impact - computed: true, optional: false, required: false
  public get averageCostImpact() {
    return this.getNumberAttribute('average_cost_impact');
  }

  // average_cost_variance - computed: true, optional: false, required: false
  public get averageCostVariance() {
    return this.getNumberAttribute('average_cost_variance');
  }

  // cost_anomaly_event_analytic_count - computed: true, optional: false, required: false
  public get costAnomalyEventAnalyticCount() {
    return this.getNumberAttribute('cost_anomaly_event_analytic_count');
  }
}

export class DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItemsOutputReference {
    return new DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollection {
}

export function dataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionToTerraform(struct?: DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionToHclTerraform(struct?: DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionOutputReference {
    return new DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBudgetCostAnomalyEventAnalyticsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#name DataOciBudgetCostAnomalyEventAnalytics#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#regex DataOciBudgetCostAnomalyEventAnalytics#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#values DataOciBudgetCostAnomalyEventAnalytics#values}
  */
  readonly values: string[];
}

export function dataOciBudgetCostAnomalyEventAnalyticsFilterToTerraform(struct?: DataOciBudgetCostAnomalyEventAnalyticsFilter | cdktf.IResolvable): any {
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


export function dataOciBudgetCostAnomalyEventAnalyticsFilterToHclTerraform(struct?: DataOciBudgetCostAnomalyEventAnalyticsFilter | cdktf.IResolvable): any {
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

export class DataOciBudgetCostAnomalyEventAnalyticsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBudgetCostAnomalyEventAnalyticsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciBudgetCostAnomalyEventAnalyticsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciBudgetCostAnomalyEventAnalyticsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciBudgetCostAnomalyEventAnalyticsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciBudgetCostAnomalyEventAnalyticsFilterOutputReference {
    return new DataOciBudgetCostAnomalyEventAnalyticsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics oci_budget_cost_anomaly_event_analytics}
*/
export class DataOciBudgetCostAnomalyEventAnalytics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_budget_cost_anomaly_event_analytics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBudgetCostAnomalyEventAnalytics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBudgetCostAnomalyEventAnalytics to import
  * @param importFromId The id of the existing DataOciBudgetCostAnomalyEventAnalytics that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBudgetCostAnomalyEventAnalytics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_budget_cost_anomaly_event_analytics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/budget_cost_anomaly_event_analytics oci_budget_cost_anomaly_event_analytics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBudgetCostAnomalyEventAnalyticsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBudgetCostAnomalyEventAnalyticsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_budget_cost_anomaly_event_analytics',
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
    this._costAnomalyMonitorId = config.costAnomalyMonitorId;
    this._costImpact = config.costImpact;
    this._costImpactPercentage = config.costImpactPercentage;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._targetTenantId = config.targetTenantId;
    this._timeAnomalyEventEndDate = config.timeAnomalyEventEndDate;
    this._timeAnomalyEventStartDate = config.timeAnomalyEventStartDate;
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

  // cost_anomaly_event_analytic_collection - computed: true, optional: false, required: false
  private _costAnomalyEventAnalyticCollection = new DataOciBudgetCostAnomalyEventAnalyticsCostAnomalyEventAnalyticCollectionList(this, "cost_anomaly_event_analytic_collection", false);
  public get costAnomalyEventAnalyticCollection() {
    return this._costAnomalyEventAnalyticCollection;
  }

  // cost_anomaly_monitor_id - computed: false, optional: true, required: false
  private _costAnomalyMonitorId?: string; 
  public get costAnomalyMonitorId() {
    return this.getStringAttribute('cost_anomaly_monitor_id');
  }
  public set costAnomalyMonitorId(value: string) {
    this._costAnomalyMonitorId = value;
  }
  public resetCostAnomalyMonitorId() {
    this._costAnomalyMonitorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costAnomalyMonitorIdInput() {
    return this._costAnomalyMonitorId;
  }

  // cost_impact - computed: false, optional: true, required: false
  private _costImpact?: number; 
  public get costImpact() {
    return this.getNumberAttribute('cost_impact');
  }
  public set costImpact(value: number) {
    this._costImpact = value;
  }
  public resetCostImpact() {
    this._costImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costImpactInput() {
    return this._costImpact;
  }

  // cost_impact_percentage - computed: false, optional: true, required: false
  private _costImpactPercentage?: number; 
  public get costImpactPercentage() {
    return this.getNumberAttribute('cost_impact_percentage');
  }
  public set costImpactPercentage(value: number) {
    this._costImpactPercentage = value;
  }
  public resetCostImpactPercentage() {
    this._costImpactPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costImpactPercentageInput() {
    return this._costImpactPercentage;
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

  // name - computed: false, optional: true, required: false
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

  // region - computed: false, optional: true, required: false
  private _region?: string[]; 
  public get region() {
    return this.getListAttribute('region');
  }
  public set region(value: string[]) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // target_tenant_id - computed: false, optional: true, required: false
  private _targetTenantId?: string[]; 
  public get targetTenantId() {
    return this.getListAttribute('target_tenant_id');
  }
  public set targetTenantId(value: string[]) {
    this._targetTenantId = value;
  }
  public resetTargetTenantId() {
    this._targetTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTenantIdInput() {
    return this._targetTenantId;
  }

  // time_anomaly_event_end_date - computed: false, optional: true, required: false
  private _timeAnomalyEventEndDate?: string; 
  public get timeAnomalyEventEndDate() {
    return this.getStringAttribute('time_anomaly_event_end_date');
  }
  public set timeAnomalyEventEndDate(value: string) {
    this._timeAnomalyEventEndDate = value;
  }
  public resetTimeAnomalyEventEndDate() {
    this._timeAnomalyEventEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAnomalyEventEndDateInput() {
    return this._timeAnomalyEventEndDate;
  }

  // time_anomaly_event_start_date - computed: false, optional: true, required: false
  private _timeAnomalyEventStartDate?: string; 
  public get timeAnomalyEventStartDate() {
    return this.getStringAttribute('time_anomaly_event_start_date');
  }
  public set timeAnomalyEventStartDate(value: string) {
    this._timeAnomalyEventStartDate = value;
  }
  public resetTimeAnomalyEventStartDate() {
    this._timeAnomalyEventStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAnomalyEventStartDateInput() {
    return this._timeAnomalyEventStartDate;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciBudgetCostAnomalyEventAnalyticsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciBudgetCostAnomalyEventAnalyticsFilter[] | cdktf.IResolvable) {
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
      cost_anomaly_monitor_id: cdktf.stringToTerraform(this._costAnomalyMonitorId),
      cost_impact: cdktf.numberToTerraform(this._costImpact),
      cost_impact_percentage: cdktf.numberToTerraform(this._costImpactPercentage),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.listMapper(cdktf.stringToTerraform, false)(this._region),
      target_tenant_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetTenantId),
      time_anomaly_event_end_date: cdktf.stringToTerraform(this._timeAnomalyEventEndDate),
      time_anomaly_event_start_date: cdktf.stringToTerraform(this._timeAnomalyEventStartDate),
      filter: cdktf.listMapper(dataOciBudgetCostAnomalyEventAnalyticsFilterToTerraform, true)(this._filter.internalValue),
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
      cost_anomaly_monitor_id: {
        value: cdktf.stringToHclTerraform(this._costAnomalyMonitorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost_impact: {
        value: cdktf.numberToHclTerraform(this._costImpact),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cost_impact_percentage: {
        value: cdktf.numberToHclTerraform(this._costImpactPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._region),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_tenant_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetTenantId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_anomaly_event_end_date: {
        value: cdktf.stringToHclTerraform(this._timeAnomalyEventEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_anomaly_event_start_date: {
        value: cdktf.stringToHclTerraform(this._timeAnomalyEventStartDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciBudgetCostAnomalyEventAnalyticsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciBudgetCostAnomalyEventAnalyticsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
