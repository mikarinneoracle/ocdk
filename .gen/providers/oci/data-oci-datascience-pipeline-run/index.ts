// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/datascience_pipeline_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatasciencePipelineRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/datascience_pipeline_run#pipeline_run_id DataOciDatasciencePipelineRun#pipeline_run_id}
  */
  readonly pipelineRunId: string;
}
export interface DataOciDatasciencePipelineRunConfigurationDetails {
}

export function dataOciDatasciencePipelineRunConfigurationDetailsToTerraform(struct?: DataOciDatasciencePipelineRunConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineRunConfigurationDetailsToHclTerraform(struct?: DataOciDatasciencePipelineRunConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineRunConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineRunConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineRunConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_line_arguments - computed: true, optional: false, required: false
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // maximum_runtime_in_minutes - computed: true, optional: false, required: false
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatasciencePipelineRunConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineRunConfigurationDetailsOutputReference {
    return new DataOciDatasciencePipelineRunConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineRunConfigurationOverrideDetails {
}

export function dataOciDatasciencePipelineRunConfigurationOverrideDetailsToTerraform(struct?: DataOciDatasciencePipelineRunConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineRunConfigurationOverrideDetailsToHclTerraform(struct?: DataOciDatasciencePipelineRunConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineRunConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineRunConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineRunConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_line_arguments - computed: true, optional: false, required: false
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // maximum_runtime_in_minutes - computed: true, optional: false, required: false
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatasciencePipelineRunConfigurationOverrideDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineRunConfigurationOverrideDetailsOutputReference {
    return new DataOciDatasciencePipelineRunConfigurationOverrideDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineRunLogConfigurationOverrideDetails {
}

export function dataOciDatasciencePipelineRunLogConfigurationOverrideDetailsToTerraform(struct?: DataOciDatasciencePipelineRunLogConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineRunLogConfigurationOverrideDetailsToHclTerraform(struct?: DataOciDatasciencePipelineRunLogConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineRunLogConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineRunLogConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_auto_log_creation - computed: true, optional: false, required: false
  public get enableAutoLogCreation() {
    return this.getBooleanAttribute('enable_auto_log_creation');
  }

  // enable_logging - computed: true, optional: false, required: false
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // log_id - computed: true, optional: false, required: false
  public get logId() {
    return this.getStringAttribute('log_id');
  }
}

export class DataOciDatasciencePipelineRunLogConfigurationOverrideDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference {
    return new DataOciDatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineRunLogDetails {
}

export function dataOciDatasciencePipelineRunLogDetailsToTerraform(struct?: DataOciDatasciencePipelineRunLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineRunLogDetailsToHclTerraform(struct?: DataOciDatasciencePipelineRunLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineRunLogDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineRunLogDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineRunLogDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // log_id - computed: true, optional: false, required: false
  public get logId() {
    return this.getStringAttribute('log_id');
  }
}

export class DataOciDatasciencePipelineRunLogDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineRunLogDetailsOutputReference {
    return new DataOciDatasciencePipelineRunLogDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails {
}

export function dataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsToTerraform(struct?: DataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsToHclTerraform(struct?: DataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_line_arguments - computed: true, optional: false, required: false
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // maximum_runtime_in_minutes - computed: true, optional: false, required: false
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }
}

export class DataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference {
    return new DataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails {
}

export function dataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsToTerraform(struct?: DataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsToHclTerraform(struct?: DataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmd - computed: true, optional: false, required: false
  public get cmd() {
    return this.getListAttribute('cmd');
  }

  // container_type - computed: true, optional: false, required: false
  public get containerType() {
    return this.getStringAttribute('container_type');
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // image_signature_id - computed: true, optional: false, required: false
  public get imageSignatureId() {
    return this.getStringAttribute('image_signature_id');
  }
}

export class DataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference {
    return new DataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineRunStepOverrideDetails {
}

export function dataOciDatasciencePipelineRunStepOverrideDetailsToTerraform(struct?: DataOciDatasciencePipelineRunStepOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineRunStepOverrideDetailsToHclTerraform(struct?: DataOciDatasciencePipelineRunStepOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineRunStepOverrideDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineRunStepOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineRunStepOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // step_configuration_details - computed: true, optional: false, required: false
  private _stepConfigurationDetails = new DataOciDatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsList(this, "step_configuration_details", false);
  public get stepConfigurationDetails() {
    return this._stepConfigurationDetails;
  }

  // step_container_configuration_details - computed: true, optional: false, required: false
  private _stepContainerConfigurationDetails = new DataOciDatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsList(this, "step_container_configuration_details", false);
  public get stepContainerConfigurationDetails() {
    return this._stepContainerConfigurationDetails;
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
}

export class DataOciDatasciencePipelineRunStepOverrideDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineRunStepOverrideDetailsOutputReference {
    return new DataOciDatasciencePipelineRunStepOverrideDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatasciencePipelineRunStepRuns {
}

export function dataOciDatasciencePipelineRunStepRunsToTerraform(struct?: DataOciDatasciencePipelineRunStepRuns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatasciencePipelineRunStepRunsToHclTerraform(struct?: DataOciDatasciencePipelineRunStepRuns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatasciencePipelineRunStepRunsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatasciencePipelineRunStepRuns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatasciencePipelineRunStepRuns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_run_id - computed: true, optional: false, required: false
  public get jobRunId() {
    return this.getStringAttribute('job_run_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }

  // step_type - computed: true, optional: false, required: false
  public get stepType() {
    return this.getStringAttribute('step_type');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}

export class DataOciDatasciencePipelineRunStepRunsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatasciencePipelineRunStepRunsOutputReference {
    return new DataOciDatasciencePipelineRunStepRunsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/datascience_pipeline_run oci_datascience_pipeline_run}
*/
export class DataOciDatasciencePipelineRun extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_pipeline_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatasciencePipelineRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatasciencePipelineRun to import
  * @param importFromId The id of the existing DataOciDatasciencePipelineRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/datascience_pipeline_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatasciencePipelineRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_pipeline_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/data-sources/datascience_pipeline_run oci_datascience_pipeline_run} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatasciencePipelineRunConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatasciencePipelineRunConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_pipeline_run',
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
    this._pipelineRunId = config.pipelineRunId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration_details - computed: true, optional: false, required: false
  private _configurationDetails = new DataOciDatasciencePipelineRunConfigurationDetailsList(this, "configuration_details", false);
  public get configurationDetails() {
    return this._configurationDetails;
  }

  // configuration_override_details - computed: true, optional: false, required: false
  private _configurationOverrideDetails = new DataOciDatasciencePipelineRunConfigurationOverrideDetailsList(this, "configuration_override_details", false);
  public get configurationOverrideDetails() {
    return this._configurationOverrideDetails;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // delete_related_job_runs - computed: true, optional: false, required: false
  public get deleteRelatedJobRuns() {
    return this.getBooleanAttribute('delete_related_job_runs');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // log_configuration_override_details - computed: true, optional: false, required: false
  private _logConfigurationOverrideDetails = new DataOciDatasciencePipelineRunLogConfigurationOverrideDetailsList(this, "log_configuration_override_details", false);
  public get logConfigurationOverrideDetails() {
    return this._logConfigurationOverrideDetails;
  }

  // log_details - computed: true, optional: false, required: false
  private _logDetails = new DataOciDatasciencePipelineRunLogDetailsList(this, "log_details", false);
  public get logDetails() {
    return this._logDetails;
  }

  // opc_parent_rpt_url - computed: true, optional: false, required: false
  public get opcParentRptUrl() {
    return this.getStringAttribute('opc_parent_rpt_url');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // pipeline_run_id - computed: false, optional: false, required: true
  private _pipelineRunId?: string; 
  public get pipelineRunId() {
    return this.getStringAttribute('pipeline_run_id');
  }
  public set pipelineRunId(value: string) {
    this._pipelineRunId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineRunIdInput() {
    return this._pipelineRunId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // step_override_details - computed: true, optional: false, required: false
  private _stepOverrideDetails = new DataOciDatasciencePipelineRunStepOverrideDetailsList(this, "step_override_details", false);
  public get stepOverrideDetails() {
    return this._stepOverrideDetails;
  }

  // step_runs - computed: true, optional: false, required: false
  private _stepRuns = new DataOciDatasciencePipelineRunStepRunsList(this, "step_runs", false);
  public get stepRuns() {
    return this._stepRuns;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pipeline_run_id: cdktf.stringToTerraform(this._pipelineRunId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pipeline_run_id: {
        value: cdktf.stringToHclTerraform(this._pipelineRunId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
