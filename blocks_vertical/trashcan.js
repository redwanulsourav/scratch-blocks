'use strict';

goog.provide('Blockly.Blocks.custom');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['trashcan_move_forward'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Move trashcan forward",
      "category": "Trashcan",
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['trashcan_move_backward'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Move trashcan backward",
      "category": "Trashcan",
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


Blockly.Blocks['trashcan_rotate_ccw'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Rotate Counter Clockwise",
      "category": "Trashcan",
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['trashcan_rotate_cw'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Rotate Clockwise",
      "category": "Trashcan",
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};