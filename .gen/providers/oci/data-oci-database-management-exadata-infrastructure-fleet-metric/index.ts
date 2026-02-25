// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementExadataInfrastructureFleetMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric#compare_baseline_time DataOciDatabaseManagementExadataInfrastructureFleetMetric#compare_baseline_time}
  */
  readonly compareBaselineTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric#compare_target_time DataOciDatabaseManagementExadataInfrastructureFleetMetric#compare_target_time}
  */
  readonly compareTargetTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric#compare_type DataOciDatabaseManagementExadataInfrastructureFleetMetric#compare_type}
  */
  readonly compareType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric#compartment_id DataOciDatabaseManagementExadataInfrastructureFleetMetric#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric#filter_by_exadata_infrastructure_deployment_type DataOciDatabaseManagementExadataInfrastructureFleetMetric#filter_by_exadata_infrastructure_deployment_type}
  */
  readonly filterByExadataInfrastructureDeploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric#filter_by_exadata_infrastructure_lifecycle_state DataOciDatabaseManagementExadataInfrastructureFleetMetric#filter_by_exadata_infrastructure_lifecycle_state}
  */
  readonly filterByExadataInfrastructureLifecycleState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric#id DataOciDatabaseManagementExadataInfrastructureFleetMetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensions {
}

export function dataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensionsToTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensionsToHclTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_name - computed: true, optional: false, required: false
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }

  // dimension_value - computed: true, optional: false, required: false
  public get dimensionValue() {
    return this.getStringAttribute('dimension_value');
  }
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensionsOutputReference {
    return new DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetrics {
}

export function dataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsToTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsToHclTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_value - computed: true, optional: false, required: false
  public get baselineValue() {
    return this.getNumberAttribute('baseline_value');
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // percentage_change - computed: true, optional: false, required: false
  public get percentageChange() {
    return this.getNumberAttribute('percentage_change');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsOutputReference {
    return new DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventory {
}

export function dataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventoryToTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventoryToHclTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // inventory_count - computed: true, optional: false, required: false
  public get inventoryCount() {
    return this.getNumberAttribute('inventory_count');
  }

  // rack_size - computed: true, optional: false, required: false
  public get rackSize() {
    return this.getStringAttribute('rack_size');
  }
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventoryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventoryOutputReference {
    return new DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummary {
}

export function dataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryToTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryToHclTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregated_metrics - computed: true, optional: false, required: false
  private _aggregatedMetrics = new DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryAggregatedMetricsList(this, "aggregated_metrics", false);
  public get aggregatedMetrics() {
    return this._aggregatedMetrics;
  }

  // inventory - computed: true, optional: false, required: false
  private _inventory = new DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryInventoryList(this, "inventory", false);
  public get inventory() {
    return this._inventory;
  }
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryOutputReference {
    return new DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensions {
}

export function dataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensionsToTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensionsToHclTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_name - computed: true, optional: false, required: false
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }

  // dimension_value - computed: true, optional: false, required: false
  public get dimensionValue() {
    return this.getStringAttribute('dimension_value');
  }
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensionsOutputReference {
    return new DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetrics {
}

export function dataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsToTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsToHclTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_value - computed: true, optional: false, required: false
  public get baselineValue() {
    return this.getNumberAttribute('baseline_value');
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // percentage_change - computed: true, optional: false, required: false
  public get percentageChange() {
    return this.getNumberAttribute('percentage_change');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsOutputReference {
    return new DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructures {
}

export function dataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresToTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresToHclTerraform(struct?: DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructures | undefined) {
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

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // infrastructure_id - computed: true, optional: false, required: false
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }

  // infrastructure_name - computed: true, optional: false, required: false
  public get infrastructureName() {
    return this.getStringAttribute('infrastructure_name');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // number_of_db_systems - computed: true, optional: false, required: false
  public get numberOfDbSystems() {
    return this.getNumberAttribute('number_of_db_systems');
  }

  // rack_size - computed: true, optional: false, required: false
  public get rackSize() {
    return this.getStringAttribute('rack_size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_server_count - computed: true, optional: false, required: false
  public get storageServerCount() {
    return this.getNumberAttribute('storage_server_count');
  }
}

export class DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresOutputReference {
    return new DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric oci_database_management_exadata_infrastructure_fleet_metric}
*/
export class DataOciDatabaseManagementExadataInfrastructureFleetMetric extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_exadata_infrastructure_fleet_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementExadataInfrastructureFleetMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementExadataInfrastructureFleetMetric to import
  * @param importFromId The id of the existing DataOciDatabaseManagementExadataInfrastructureFleetMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementExadataInfrastructureFleetMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_exadata_infrastructure_fleet_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/database_management_exadata_infrastructure_fleet_metric oci_database_management_exadata_infrastructure_fleet_metric} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementExadataInfrastructureFleetMetricConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementExadataInfrastructureFleetMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_exadata_infrastructure_fleet_metric',
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
    this._compareBaselineTime = config.compareBaselineTime;
    this._compareTargetTime = config.compareTargetTime;
    this._compareType = config.compareType;
    this._compartmentId = config.compartmentId;
    this._filterByExadataInfrastructureDeploymentType = config.filterByExadataInfrastructureDeploymentType;
    this._filterByExadataInfrastructureLifecycleState = config.filterByExadataInfrastructureLifecycleState;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compare_baseline_time - computed: false, optional: false, required: true
  private _compareBaselineTime?: string; 
  public get compareBaselineTime() {
    return this.getStringAttribute('compare_baseline_time');
  }
  public set compareBaselineTime(value: string) {
    this._compareBaselineTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareBaselineTimeInput() {
    return this._compareBaselineTime;
  }

  // compare_target_time - computed: false, optional: false, required: true
  private _compareTargetTime?: string; 
  public get compareTargetTime() {
    return this.getStringAttribute('compare_target_time');
  }
  public set compareTargetTime(value: string) {
    this._compareTargetTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareTargetTimeInput() {
    return this._compareTargetTime;
  }

  // compare_type - computed: false, optional: true, required: false
  private _compareType?: string; 
  public get compareType() {
    return this.getStringAttribute('compare_type');
  }
  public set compareType(value: string) {
    this._compareType = value;
  }
  public resetCompareType() {
    this._compareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareTypeInput() {
    return this._compareType;
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

  // exadata_infrastructure_fleet_summary - computed: true, optional: false, required: false
  private _exadataInfrastructureFleetSummary = new DataOciDatabaseManagementExadataInfrastructureFleetMetricExadataInfrastructureFleetSummaryList(this, "exadata_infrastructure_fleet_summary", false);
  public get exadataInfrastructureFleetSummary() {
    return this._exadataInfrastructureFleetSummary;
  }

  // filter_by_exadata_infrastructure_deployment_type - computed: false, optional: true, required: false
  private _filterByExadataInfrastructureDeploymentType?: string; 
  public get filterByExadataInfrastructureDeploymentType() {
    return this.getStringAttribute('filter_by_exadata_infrastructure_deployment_type');
  }
  public set filterByExadataInfrastructureDeploymentType(value: string) {
    this._filterByExadataInfrastructureDeploymentType = value;
  }
  public resetFilterByExadataInfrastructureDeploymentType() {
    this._filterByExadataInfrastructureDeploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByExadataInfrastructureDeploymentTypeInput() {
    return this._filterByExadataInfrastructureDeploymentType;
  }

  // filter_by_exadata_infrastructure_lifecycle_state - computed: false, optional: true, required: false
  private _filterByExadataInfrastructureLifecycleState?: string; 
  public get filterByExadataInfrastructureLifecycleState() {
    return this.getStringAttribute('filter_by_exadata_infrastructure_lifecycle_state');
  }
  public set filterByExadataInfrastructureLifecycleState(value: string) {
    this._filterByExadataInfrastructureLifecycleState = value;
  }
  public resetFilterByExadataInfrastructureLifecycleState() {
    this._filterByExadataInfrastructureLifecycleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByExadataInfrastructureLifecycleStateInput() {
    return this._filterByExadataInfrastructureLifecycleState;
  }

  // fleet_exadata_infrastructures - computed: true, optional: false, required: false
  private _fleetExadataInfrastructures = new DataOciDatabaseManagementExadataInfrastructureFleetMetricFleetExadataInfrastructuresList(this, "fleet_exadata_infrastructures", false);
  public get fleetExadataInfrastructures() {
    return this._fleetExadataInfrastructures;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compare_baseline_time: cdktf.stringToTerraform(this._compareBaselineTime),
      compare_target_time: cdktf.stringToTerraform(this._compareTargetTime),
      compare_type: cdktf.stringToTerraform(this._compareType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      filter_by_exadata_infrastructure_deployment_type: cdktf.stringToTerraform(this._filterByExadataInfrastructureDeploymentType),
      filter_by_exadata_infrastructure_lifecycle_state: cdktf.stringToTerraform(this._filterByExadataInfrastructureLifecycleState),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compare_baseline_time: {
        value: cdktf.stringToHclTerraform(this._compareBaselineTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compare_target_time: {
        value: cdktf.stringToHclTerraform(this._compareTargetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compare_type: {
        value: cdktf.stringToHclTerraform(this._compareType),
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
      filter_by_exadata_infrastructure_deployment_type: {
        value: cdktf.stringToHclTerraform(this._filterByExadataInfrastructureDeploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_by_exadata_infrastructure_lifecycle_state: {
        value: cdktf.stringToHclTerraform(this._filterByExadataInfrastructureLifecycleState),
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
