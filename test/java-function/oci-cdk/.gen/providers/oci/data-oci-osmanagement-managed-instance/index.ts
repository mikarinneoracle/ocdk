// https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsmanagementManagedInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance#managed_instance_id DataOciOsmanagementManagedInstance#managed_instance_id}
  */
  readonly managedInstanceId: string;
}
export interface DataOciOsmanagementManagedInstanceAutonomous {
}

export function dataOciOsmanagementManagedInstanceAutonomousToTerraform(struct?: DataOciOsmanagementManagedInstanceAutonomous): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsmanagementManagedInstanceAutonomousToHclTerraform(struct?: DataOciOsmanagementManagedInstanceAutonomous): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsmanagementManagedInstanceAutonomousOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsmanagementManagedInstanceAutonomous | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsmanagementManagedInstanceAutonomous | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_auto_update_enabled - computed: true, optional: false, required: false
  public get isAutoUpdateEnabled() {
    return this.getBooleanAttribute('is_auto_update_enabled');
  }
}

export class DataOciOsmanagementManagedInstanceAutonomousList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsmanagementManagedInstanceAutonomousOutputReference {
    return new DataOciOsmanagementManagedInstanceAutonomousOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsmanagementManagedInstanceChildSoftwareSources {
}

export function dataOciOsmanagementManagedInstanceChildSoftwareSourcesToTerraform(struct?: DataOciOsmanagementManagedInstanceChildSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsmanagementManagedInstanceChildSoftwareSourcesToHclTerraform(struct?: DataOciOsmanagementManagedInstanceChildSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsmanagementManagedInstanceChildSoftwareSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsmanagementManagedInstanceChildSoftwareSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciOsmanagementManagedInstanceChildSoftwareSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference {
    return new DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsmanagementManagedInstanceManagedInstanceGroups {
}

export function dataOciOsmanagementManagedInstanceManagedInstanceGroupsToTerraform(struct?: DataOciOsmanagementManagedInstanceManagedInstanceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsmanagementManagedInstanceManagedInstanceGroupsToHclTerraform(struct?: DataOciOsmanagementManagedInstanceManagedInstanceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsmanagementManagedInstanceManagedInstanceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsmanagementManagedInstanceManagedInstanceGroups | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciOsmanagementManagedInstanceManagedInstanceGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference {
    return new DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsmanagementManagedInstanceParentSoftwareSource {
}

export function dataOciOsmanagementManagedInstanceParentSoftwareSourceToTerraform(struct?: DataOciOsmanagementManagedInstanceParentSoftwareSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsmanagementManagedInstanceParentSoftwareSourceToHclTerraform(struct?: DataOciOsmanagementManagedInstanceParentSoftwareSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsmanagementManagedInstanceParentSoftwareSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsmanagementManagedInstanceParentSoftwareSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciOsmanagementManagedInstanceParentSoftwareSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference {
    return new DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance oci_osmanagement_managed_instance}
*/
export class DataOciOsmanagementManagedInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osmanagement_managed_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsmanagementManagedInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsmanagementManagedInstance to import
  * @param importFromId The id of the existing DataOciOsmanagementManagedInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsmanagementManagedInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osmanagement_managed_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/5.47.0/docs/data-sources/osmanagement_managed_instance oci_osmanagement_managed_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsmanagementManagedInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsmanagementManagedInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_managed_instance',
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
    this._managedInstanceId = config.managedInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous - computed: true, optional: false, required: false
  private _autonomous = new DataOciOsmanagementManagedInstanceAutonomousList(this, "autonomous", false);
  public get autonomous() {
    return this._autonomous;
  }

  // bug_updates_available - computed: true, optional: false, required: false
  public get bugUpdatesAvailable() {
    return this.getNumberAttribute('bug_updates_available');
  }

  // child_software_sources - computed: true, optional: false, required: false
  private _childSoftwareSources = new DataOciOsmanagementManagedInstanceChildSoftwareSourcesList(this, "child_software_sources", false);
  public get childSoftwareSources() {
    return this._childSoftwareSources;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enhancement_updates_available - computed: true, optional: false, required: false
  public get enhancementUpdatesAvailable() {
    return this.getNumberAttribute('enhancement_updates_available');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_data_collection_authorized - computed: true, optional: false, required: false
  public get isDataCollectionAuthorized() {
    return this.getBooleanAttribute('is_data_collection_authorized');
  }

  // is_reboot_required - computed: true, optional: false, required: false
  public get isRebootRequired() {
    return this.getBooleanAttribute('is_reboot_required');
  }

  // ksplice_effective_kernel_version - computed: true, optional: false, required: false
  public get kspliceEffectiveKernelVersion() {
    return this.getStringAttribute('ksplice_effective_kernel_version');
  }

  // last_boot - computed: true, optional: false, required: false
  public get lastBoot() {
    return this.getStringAttribute('last_boot');
  }

  // last_checkin - computed: true, optional: false, required: false
  public get lastCheckin() {
    return this.getStringAttribute('last_checkin');
  }

  // managed_instance_groups - computed: true, optional: false, required: false
  private _managedInstanceGroups = new DataOciOsmanagementManagedInstanceManagedInstanceGroupsList(this, "managed_instance_groups", false);
  public get managedInstanceGroups() {
    return this._managedInstanceGroups;
  }

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // notification_topic_id - computed: true, optional: false, required: false
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // os_kernel_version - computed: true, optional: false, required: false
  public get osKernelVersion() {
    return this.getStringAttribute('os_kernel_version');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // other_updates_available - computed: true, optional: false, required: false
  public get otherUpdatesAvailable() {
    return this.getNumberAttribute('other_updates_available');
  }

  // parent_software_source - computed: true, optional: false, required: false
  private _parentSoftwareSource = new DataOciOsmanagementManagedInstanceParentSoftwareSourceList(this, "parent_software_source", false);
  public get parentSoftwareSource() {
    return this._parentSoftwareSource;
  }

  // scheduled_job_count - computed: true, optional: false, required: false
  public get scheduledJobCount() {
    return this.getNumberAttribute('scheduled_job_count');
  }

  // security_updates_available - computed: true, optional: false, required: false
  public get securityUpdatesAvailable() {
    return this.getNumberAttribute('security_updates_available');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updates_available - computed: true, optional: false, required: false
  public get updatesAvailable() {
    return this.getNumberAttribute('updates_available');
  }

  // work_request_count - computed: true, optional: false, required: false
  public get workRequestCount() {
    return this.getNumberAttribute('work_request_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
