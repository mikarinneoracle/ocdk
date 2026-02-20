// https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceJobRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#asynchronous DatascienceJobRun#asynchronous}
  */
  readonly asynchronous?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#compartment_id DatascienceJobRun#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#defined_tags DatascienceJobRun#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#display_name DatascienceJobRun#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#freeform_tags DatascienceJobRun#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#id DatascienceJobRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#job_id DatascienceJobRun#job_id}
  */
  readonly jobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#opc_parent_rpt_url DatascienceJobRun#opc_parent_rpt_url}
  */
  readonly opcParentRptUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#project_id DatascienceJobRun#project_id}
  */
  readonly projectId: string;
  /**
  * job_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#job_configuration_override_details DatascienceJobRun#job_configuration_override_details}
  */
  readonly jobConfigurationOverrideDetails?: DatascienceJobRunJobConfigurationOverrideDetails;
  /**
  * job_environment_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#job_environment_configuration_override_details DatascienceJobRun#job_environment_configuration_override_details}
  */
  readonly jobEnvironmentConfigurationOverrideDetails?: DatascienceJobRunJobEnvironmentConfigurationOverrideDetails;
  /**
  * job_log_configuration_override_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#job_log_configuration_override_details DatascienceJobRun#job_log_configuration_override_details}
  */
  readonly jobLogConfigurationOverrideDetails?: DatascienceJobRunJobLogConfigurationOverrideDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#timeouts DatascienceJobRun#timeouts}
  */
  readonly timeouts?: DatascienceJobRunTimeouts;
}
export interface DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails {
}

export function datascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsToHclTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference {
    return new DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobRunJobInfrastructureConfigurationDetails {
}

export function datascienceJobRunJobInfrastructureConfigurationDetailsToTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceJobRunJobInfrastructureConfigurationDetailsToHclTerraform(struct?: DatascienceJobRunJobInfrastructureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobRunJobInfrastructureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobInfrastructureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage_size_in_gbs - computed: true, optional: false, required: false
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }

  // job_infrastructure_type - computed: true, optional: false, required: false
  public get jobInfrastructureType() {
    return this.getStringAttribute('job_infrastructure_type');
  }

  // job_shape_config_details - computed: true, optional: false, required: false
  private _jobShapeConfigDetails = new DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList(this, "job_shape_config_details", false);
  public get jobShapeConfigDetails() {
    return this._jobShapeConfigDetails;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DatascienceJobRunJobInfrastructureConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference {
    return new DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobRunJobStorageMountConfigurationDetailsListStruct {
}

export function datascienceJobRunJobStorageMountConfigurationDetailsListStructToTerraform(struct?: DatascienceJobRunJobStorageMountConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceJobRunJobStorageMountConfigurationDetailsListStructToHclTerraform(struct?: DatascienceJobRunJobStorageMountConfigurationDetailsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobRunJobStorageMountConfigurationDetailsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobStorageMountConfigurationDetailsListStruct | undefined) {
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

  // destination_directory_name - computed: true, optional: false, required: false
  public get destinationDirectoryName() {
    return this.getStringAttribute('destination_directory_name');
  }

  // destination_path - computed: true, optional: false, required: false
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }

  // export_id - computed: true, optional: false, required: false
  public get exportId() {
    return this.getStringAttribute('export_id');
  }

  // mount_target_id - computed: true, optional: false, required: false
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}

export class DatascienceJobRunJobStorageMountConfigurationDetailsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference {
    return new DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobRunLogDetails {
}

export function datascienceJobRunLogDetailsToTerraform(struct?: DatascienceJobRunLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceJobRunLogDetailsToHclTerraform(struct?: DatascienceJobRunLogDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceJobRunLogDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceJobRunLogDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunLogDetails | undefined) {
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

export class DatascienceJobRunLogDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatascienceJobRunLogDetailsOutputReference {
    return new DatascienceJobRunLogDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceJobRunJobConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#command_line_arguments DatascienceJobRun#command_line_arguments}
  */
  readonly commandLineArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#environment_variables DatascienceJobRun#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#job_type DatascienceJobRun#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#maximum_runtime_in_minutes DatascienceJobRun#maximum_runtime_in_minutes}
  */
  readonly maximumRuntimeInMinutes?: string;
}

export function datascienceJobRunJobConfigurationOverrideDetailsToTerraform(struct?: DatascienceJobRunJobConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line_arguments: cdktf.stringToTerraform(struct!.commandLineArguments),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    job_type: cdktf.stringToTerraform(struct!.jobType),
    maximum_runtime_in_minutes: cdktf.stringToTerraform(struct!.maximumRuntimeInMinutes),
  }
}


export function datascienceJobRunJobConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceJobRunJobConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_line_arguments: {
      value: cdktf.stringToHclTerraform(struct!.commandLineArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    job_type: {
      value: cdktf.stringToHclTerraform(struct!.jobType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_runtime_in_minutes: {
      value: cdktf.stringToHclTerraform(struct!.maximumRuntimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLineArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLineArguments = this._commandLineArguments;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._jobType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobType = this._jobType;
    }
    if (this._maximumRuntimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeInMinutes = this._maximumRuntimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLineArguments = undefined;
      this._environmentVariables = undefined;
      this._jobType = undefined;
      this._maximumRuntimeInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLineArguments = value.commandLineArguments;
      this._environmentVariables = value.environmentVariables;
      this._jobType = value.jobType;
      this._maximumRuntimeInMinutes = value.maximumRuntimeInMinutes;
    }
  }

  // command_line_arguments - computed: true, optional: true, required: false
  private _commandLineArguments?: string; 
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: string) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // maximum_runtime_in_minutes - computed: true, optional: true, required: false
  private _maximumRuntimeInMinutes?: string; 
  public get maximumRuntimeInMinutes() {
    return this.getStringAttribute('maximum_runtime_in_minutes');
  }
  public set maximumRuntimeInMinutes(value: string) {
    this._maximumRuntimeInMinutes = value;
  }
  public resetMaximumRuntimeInMinutes() {
    this._maximumRuntimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRuntimeInMinutesInput() {
    return this._maximumRuntimeInMinutes;
  }
}
export interface DatascienceJobRunJobEnvironmentConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#cmd DatascienceJobRun#cmd}
  */
  readonly cmd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#entrypoint DatascienceJobRun#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#image DatascienceJobRun#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#image_digest DatascienceJobRun#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#image_signature_id DatascienceJobRun#image_signature_id}
  */
  readonly imageSignatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#job_environment_type DatascienceJobRun#job_environment_type}
  */
  readonly jobEnvironmentType: string;
}

export function datascienceJobRunJobEnvironmentConfigurationOverrideDetailsToTerraform(struct?: DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobEnvironmentConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cmd),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    image: cdktf.stringToTerraform(struct!.image),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    image_signature_id: cdktf.stringToTerraform(struct!.imageSignatureId),
    job_environment_type: cdktf.stringToTerraform(struct!.jobEnvironmentType),
  }
}


export function datascienceJobRunJobEnvironmentConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobEnvironmentConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cmd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_digest: {
      value: cdktf.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_signature_id: {
      value: cdktf.stringToHclTerraform(struct!.imageSignatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_environment_type: {
      value: cdktf.stringToHclTerraform(struct!.jobEnvironmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobEnvironmentConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._imageSignatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSignatureId = this._imageSignatureId;
    }
    if (this._jobEnvironmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobEnvironmentType = this._jobEnvironmentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobEnvironmentConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmd = undefined;
      this._entrypoint = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._imageSignatureId = undefined;
      this._jobEnvironmentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmd = value.cmd;
      this._entrypoint = value.entrypoint;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._imageSignatureId = value.imageSignatureId;
      this._jobEnvironmentType = value.jobEnvironmentType;
    }
  }

  // cmd - computed: true, optional: true, required: false
  private _cmd?: string[]; 
  public get cmd() {
    return this.getListAttribute('cmd');
  }
  public set cmd(value: string[]) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // image_signature_id - computed: true, optional: true, required: false
  private _imageSignatureId?: string; 
  public get imageSignatureId() {
    return this.getStringAttribute('image_signature_id');
  }
  public set imageSignatureId(value: string) {
    this._imageSignatureId = value;
  }
  public resetImageSignatureId() {
    this._imageSignatureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSignatureIdInput() {
    return this._imageSignatureId;
  }

  // job_environment_type - computed: false, optional: false, required: true
  private _jobEnvironmentType?: string; 
  public get jobEnvironmentType() {
    return this.getStringAttribute('job_environment_type');
  }
  public set jobEnvironmentType(value: string) {
    this._jobEnvironmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobEnvironmentTypeInput() {
    return this._jobEnvironmentType;
  }
}
export interface DatascienceJobRunJobLogConfigurationOverrideDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#enable_auto_log_creation DatascienceJobRun#enable_auto_log_creation}
  */
  readonly enableAutoLogCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#enable_logging DatascienceJobRun#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#log_group_id DatascienceJobRun#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#log_id DatascienceJobRun#log_id}
  */
  readonly logId?: string;
}

export function datascienceJobRunJobLogConfigurationOverrideDetailsToTerraform(struct?: DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobLogConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_log_creation: cdktf.booleanToTerraform(struct!.enableAutoLogCreation),
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function datascienceJobRunJobLogConfigurationOverrideDetailsToHclTerraform(struct?: DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference | DatascienceJobRunJobLogConfigurationOverrideDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_log_creation: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoLogCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceJobRunJobLogConfigurationOverrideDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoLogCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoLogCreation = this._enableAutoLogCreation;
    }
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceJobRunJobLogConfigurationOverrideDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAutoLogCreation = undefined;
      this._enableLogging = undefined;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAutoLogCreation = value.enableAutoLogCreation;
      this._enableLogging = value.enableLogging;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // enable_auto_log_creation - computed: true, optional: true, required: false
  private _enableAutoLogCreation?: boolean | cdktf.IResolvable; 
  public get enableAutoLogCreation() {
    return this.getBooleanAttribute('enable_auto_log_creation');
  }
  public set enableAutoLogCreation(value: boolean | cdktf.IResolvable) {
    this._enableAutoLogCreation = value;
  }
  public resetEnableAutoLogCreation() {
    this._enableAutoLogCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoLogCreationInput() {
    return this._enableAutoLogCreation;
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: true, optional: true, required: false
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  public resetLogId() {
    this._logId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DatascienceJobRunTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#create DatascienceJobRun#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#delete DatascienceJobRun#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#update DatascienceJobRun#update}
  */
  readonly update?: string;
}

export function datascienceJobRunTimeoutsToTerraform(struct?: DatascienceJobRunTimeouts | cdktf.IResolvable): any {
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


export function datascienceJobRunTimeoutsToHclTerraform(struct?: DatascienceJobRunTimeouts | cdktf.IResolvable): any {
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

export class DatascienceJobRunTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceJobRunTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatascienceJobRunTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run oci_datascience_job_run}
*/
export class DatascienceJobRun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_job_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceJobRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceJobRun to import
  * @param importFromId The id of the existing DatascienceJobRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceJobRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_job_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/5.47.0/docs/resources/datascience_job_run oci_datascience_job_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceJobRunConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceJobRunConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_job_run',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '5.47.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asynchronous = config.asynchronous;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._jobId = config.jobId;
    this._opcParentRptUrl = config.opcParentRptUrl;
    this._projectId = config.projectId;
    this._jobConfigurationOverrideDetails.internalValue = config.jobConfigurationOverrideDetails;
    this._jobEnvironmentConfigurationOverrideDetails.internalValue = config.jobEnvironmentConfigurationOverrideDetails;
    this._jobLogConfigurationOverrideDetails.internalValue = config.jobLogConfigurationOverrideDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asynchronous - computed: false, optional: true, required: false
  private _asynchronous?: boolean | cdktf.IResolvable; 
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
  }
  public set asynchronous(value: boolean | cdktf.IResolvable) {
    this._asynchronous = value;
  }
  public resetAsynchronous() {
    this._asynchronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInput() {
    return this._asynchronous;
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

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // job_infrastructure_configuration_details - computed: true, optional: false, required: false
  private _jobInfrastructureConfigurationDetails = new DatascienceJobRunJobInfrastructureConfigurationDetailsList(this, "job_infrastructure_configuration_details", false);
  public get jobInfrastructureConfigurationDetails() {
    return this._jobInfrastructureConfigurationDetails;
  }

  // job_storage_mount_configuration_details_list - computed: true, optional: false, required: false
  private _jobStorageMountConfigurationDetailsList = new DatascienceJobRunJobStorageMountConfigurationDetailsListStructList(this, "job_storage_mount_configuration_details_list", false);
  public get jobStorageMountConfigurationDetailsList() {
    return this._jobStorageMountConfigurationDetailsList;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // log_details - computed: true, optional: false, required: false
  private _logDetails = new DatascienceJobRunLogDetailsList(this, "log_details", false);
  public get logDetails() {
    return this._logDetails;
  }

  // opc_parent_rpt_url - computed: false, optional: true, required: false
  private _opcParentRptUrl?: string; 
  public get opcParentRptUrl() {
    return this.getStringAttribute('opc_parent_rpt_url');
  }
  public set opcParentRptUrl(value: string) {
    this._opcParentRptUrl = value;
  }
  public resetOpcParentRptUrl() {
    this._opcParentRptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcParentRptUrlInput() {
    return this._opcParentRptUrl;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // job_configuration_override_details - computed: false, optional: true, required: false
  private _jobConfigurationOverrideDetails = new DatascienceJobRunJobConfigurationOverrideDetailsOutputReference(this, "job_configuration_override_details");
  public get jobConfigurationOverrideDetails() {
    return this._jobConfigurationOverrideDetails;
  }
  public putJobConfigurationOverrideDetails(value: DatascienceJobRunJobConfigurationOverrideDetails) {
    this._jobConfigurationOverrideDetails.internalValue = value;
  }
  public resetJobConfigurationOverrideDetails() {
    this._jobConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobConfigurationOverrideDetailsInput() {
    return this._jobConfigurationOverrideDetails.internalValue;
  }

  // job_environment_configuration_override_details - computed: false, optional: true, required: false
  private _jobEnvironmentConfigurationOverrideDetails = new DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference(this, "job_environment_configuration_override_details");
  public get jobEnvironmentConfigurationOverrideDetails() {
    return this._jobEnvironmentConfigurationOverrideDetails;
  }
  public putJobEnvironmentConfigurationOverrideDetails(value: DatascienceJobRunJobEnvironmentConfigurationOverrideDetails) {
    this._jobEnvironmentConfigurationOverrideDetails.internalValue = value;
  }
  public resetJobEnvironmentConfigurationOverrideDetails() {
    this._jobEnvironmentConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobEnvironmentConfigurationOverrideDetailsInput() {
    return this._jobEnvironmentConfigurationOverrideDetails.internalValue;
  }

  // job_log_configuration_override_details - computed: false, optional: true, required: false
  private _jobLogConfigurationOverrideDetails = new DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference(this, "job_log_configuration_override_details");
  public get jobLogConfigurationOverrideDetails() {
    return this._jobLogConfigurationOverrideDetails;
  }
  public putJobLogConfigurationOverrideDetails(value: DatascienceJobRunJobLogConfigurationOverrideDetails) {
    this._jobLogConfigurationOverrideDetails.internalValue = value;
  }
  public resetJobLogConfigurationOverrideDetails() {
    this._jobLogConfigurationOverrideDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLogConfigurationOverrideDetailsInput() {
    return this._jobLogConfigurationOverrideDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceJobRunTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceJobRunTimeouts) {
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
      asynchronous: cdktf.booleanToTerraform(this._asynchronous),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      opc_parent_rpt_url: cdktf.stringToTerraform(this._opcParentRptUrl),
      project_id: cdktf.stringToTerraform(this._projectId),
      job_configuration_override_details: datascienceJobRunJobConfigurationOverrideDetailsToTerraform(this._jobConfigurationOverrideDetails.internalValue),
      job_environment_configuration_override_details: datascienceJobRunJobEnvironmentConfigurationOverrideDetailsToTerraform(this._jobEnvironmentConfigurationOverrideDetails.internalValue),
      job_log_configuration_override_details: datascienceJobRunJobLogConfigurationOverrideDetailsToTerraform(this._jobLogConfigurationOverrideDetails.internalValue),
      timeouts: datascienceJobRunTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asynchronous: {
        value: cdktf.booleanToHclTerraform(this._asynchronous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opc_parent_rpt_url: {
        value: cdktf.stringToHclTerraform(this._opcParentRptUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_configuration_override_details: {
        value: datascienceJobRunJobConfigurationOverrideDetailsToHclTerraform(this._jobConfigurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobRunJobConfigurationOverrideDetailsList",
      },
      job_environment_configuration_override_details: {
        value: datascienceJobRunJobEnvironmentConfigurationOverrideDetailsToHclTerraform(this._jobEnvironmentConfigurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList",
      },
      job_log_configuration_override_details: {
        value: datascienceJobRunJobLogConfigurationOverrideDetailsToHclTerraform(this._jobLogConfigurationOverrideDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceJobRunJobLogConfigurationOverrideDetailsList",
      },
      timeouts: {
        value: datascienceJobRunTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceJobRunTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
