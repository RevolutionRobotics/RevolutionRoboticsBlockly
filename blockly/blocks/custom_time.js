goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['block_wait_1'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.WAIT_1, 50, 50, '*'),
      'LIGHT_IMAGE'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('time_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_wait_5'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.WAIT_5, 50, 50, '*'),
      'LIGHT_IMAGE'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('time_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_wait_simplified'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.WAIT, 15, 15, '*'), 'WAIT_IMAGE')
      .appendField('wait')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
          ['7', '7'],
          ['8', '8'],
          ['9', '9'],
          ['10', '10']
        ]),
        'WAIT_SELECTOR')
      .appendField('sec');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('time_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_wait'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.WAIT, 15, 15, '*'), 'WAIT_IMAGE')
      .appendField('wait');

    var limitValueInput = this.appendValueInput('WAIT').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', limitValueInput, '1');

    this.appendDummyInput().appendField('sec');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('time_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_global_timer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.GLOBAL_TIMER, 15, 15, '*'),
        'GLOBAL_TIMER_IMAGE'
      )
      .appendField('read global timer in sec');
    this.setOutput(true, 'Number');
    this.setStyle('time_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
