// https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/queue_consumer_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciQueueConsumerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/queue_consumer_group#consumer_group_id DataOciQueueConsumerGroup#consumer_group_id}
  */
  readonly consumerGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/queue_consumer_group oci_queue_consumer_group}
*/
export class DataOciQueueConsumerGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_queue_consumer_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciQueueConsumerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciQueueConsumerGroup to import
  * @param importFromId The id of the existing DataOciQueueConsumerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/queue_consumer_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciQueueConsumerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_queue_consumer_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oci/8.2.0/docs/data-sources/queue_consumer_group oci_queue_consumer_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciQueueConsumerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciQueueConsumerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_queue_consumer_group',
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
    this._consumerGroupId = config.consumerGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_group_filter - computed: true, optional: false, required: false
  public get consumerGroupFilter() {
    return this.getStringAttribute('consumer_group_filter');
  }

  // consumer_group_id - computed: false, optional: false, required: true
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }

  // dead_letter_queue_delivery_count - computed: true, optional: false, required: false
  public get deadLetterQueueDeliveryCount() {
    return this.getNumberAttribute('dead_letter_queue_delivery_count');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_group_id: cdktf.stringToTerraform(this._consumerGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_group_id: {
        value: cdktf.stringToHclTerraform(this._consumerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
