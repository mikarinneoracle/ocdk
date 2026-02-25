// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementCloudExadataInfrastructureManagedexadataManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management#cloud_exadata_infrastructure_id DatabaseManagementCloudExadataInfrastructureManagedexadataManagement#cloud_exadata_infrastructure_id}
  */
  readonly cloudExadataInfrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management#enable_managedexadata DatabaseManagementCloudExadataInfrastructureManagedexadataManagement#enable_managedexadata}
  */
  readonly enableManagedexadata: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management#id DatabaseManagementCloudExadataInfrastructureManagedexadataManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management#license_model DatabaseManagementCloudExadataInfrastructureManagedexadataManagement#license_model}
  */
  readonly licenseModel?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management#timeouts DatabaseManagementCloudExadataInfrastructureManagedexadataManagement#timeouts}
  */
  readonly timeouts?: DatabaseManagementCloudExadataInfrastructureManagedexadataManagementTimeouts;
}
export interface DatabaseManagementCloudExadataInfrastructureManagedexadataManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management#create DatabaseManagementCloudExadataInfrastructureManagedexadataManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management#delete DatabaseManagementCloudExadataInfrastructureManagedexadataManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management#update DatabaseManagementCloudExadataInfrastructureManagedexadataManagement#update}
  */
  readonly update?: string;
}

export function databaseManagementCloudExadataInfrastructureManagedexadataManagementTimeoutsToTerraform(struct?: DatabaseManagementCloudExadataInfrastructureManagedexadataManagementTimeouts | cdktf.IResolvable): any {
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


export function databaseManagementCloudExadataInfrastructureManagedexadataManagementTimeoutsToHclTerraform(struct?: DatabaseManagementCloudExadataInfrastructureManagedexadataManagementTimeouts | cdktf.IResolvable): any {
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

export class DatabaseManagementCloudExadataInfrastructureManagedexadataManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementCloudExadataInfrastructureManagedexadataManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseManagementCloudExadataInfrastructureManagedexadataManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management oci_database_management_cloud_exadata_infrastructure_managedexadata_management}
*/
export class DatabaseManagementCloudExadataInfrastructureManagedexadataManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_cloud_exadata_infrastructure_managedexadata_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementCloudExadataInfrastructureManagedexadataManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementCloudExadataInfrastructureManagedexadataManagement to import
  * @param importFromId The id of the existing DatabaseManagementCloudExadataInfrastructureManagedexadataManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementCloudExadataInfrastructureManagedexadataManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_cloud_exadata_infrastructure_managedexadata_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/resources/database_management_cloud_exadata_infrastructure_managedexadata_management oci_database_management_cloud_exadata_infrastructure_managedexadata_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementCloudExadataInfrastructureManagedexadataManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementCloudExadataInfrastructureManagedexadataManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_cloud_exadata_infrastructure_managedexadata_management',
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
    this._cloudExadataInfrastructureId = config.cloudExadataInfrastructureId;
    this._enableManagedexadata = config.enableManagedexadata;
    this._id = config.id;
    this._licenseModel = config.licenseModel;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_exadata_infrastructure_id - computed: false, optional: false, required: true
  private _cloudExadataInfrastructureId?: string; 
  public get cloudExadataInfrastructureId() {
    return this.getStringAttribute('cloud_exadata_infrastructure_id');
  }
  public set cloudExadataInfrastructureId(value: string) {
    this._cloudExadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudExadataInfrastructureIdInput() {
    return this._cloudExadataInfrastructureId;
  }

  // enable_managedexadata - computed: false, optional: false, required: true
  private _enableManagedexadata?: boolean | cdktf.IResolvable; 
  public get enableManagedexadata() {
    return this.getBooleanAttribute('enable_managedexadata');
  }
  public set enableManagedexadata(value: boolean | cdktf.IResolvable) {
    this._enableManagedexadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagedexadataInput() {
    return this._enableManagedexadata;
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

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementCloudExadataInfrastructureManagedexadataManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementCloudExadataInfrastructureManagedexadataManagementTimeouts) {
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
      cloud_exadata_infrastructure_id: cdktf.stringToTerraform(this._cloudExadataInfrastructureId),
      enable_managedexadata: cdktf.booleanToTerraform(this._enableManagedexadata),
      id: cdktf.stringToTerraform(this._id),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      timeouts: databaseManagementCloudExadataInfrastructureManagedexadataManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._cloudExadataInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_managedexadata: {
        value: cdktf.booleanToHclTerraform(this._enableManagedexadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databaseManagementCloudExadataInfrastructureManagedexadataManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementCloudExadataInfrastructureManagedexadataManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
