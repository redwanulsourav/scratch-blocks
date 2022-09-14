'use strict';

goog.provide('Blockly.Blocks.custom');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['custom_block'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Custom block message",
      "category": "custom",
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};