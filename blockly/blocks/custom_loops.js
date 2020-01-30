goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['block_repeat_forever'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.REPEAT_FOREVER, 15, 15, '*'),
        'REPEAT_FOREVER_IMAGE'
      )
      .appendField('repeat forever');
    this.appendStatementInput('STATEMENT')
      .setCheck(null)
      .appendField('do');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('loop_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['controls_repeat_n_times'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.REPEAT, 15, 15, '*'))
      .appendField('repeat')
      .appendField(
        new Blockly.FieldDropdown([
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
        'TIMES_SELECTOR')
      .appendField('times');
    this.appendStatementInput('DO')
      .setCheck(null)
      .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('loop_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_break'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.BREAK, 15, 15, '*'), 'BREAK_IMAGE')
      .appendField('break');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('loop_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_repeat_while'] = {
  init: function () {
    this.appendValueInput('CONDITION')
      .setCheck('Boolean')
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.REPEAT_WHILE, 15, 15, '*'),
        'REPEAT_WHILE_IMAGE'
      )
      .appendField('repeat while');
    this.appendStatementInput('STATEMENT')
      .setCheck(null)
      .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('loop_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_repeat_until'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.REPEAT_UNTIL, 15, 15, '*'),
        'REPEAT_UNTIL_IMAGE'
      )
      .appendField('repeat');
    this.appendStatementInput('STATEMENT')
      .setCheck(null)
      .appendField('do');
    this.appendValueInput('CONDITION')
      .setCheck('Boolean')
      .appendField('until');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('loop_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['controls_repeat_ext2'] = {
  init: function () {
    var forValueInput = this.appendValueInput('TIMES')
      .setCheck('Number')
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.REPEAT, 15, 15, '*'))
      .appendField('repeat');
    createShadowElement(this.workspace, 'math_number', forValueInput, 3);
    this.appendDummyInput().appendField('times');
    this.appendStatementInput('DO')
      .setCheck(null)
      .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('loop_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
  onchange: function (event) {
    roundNumber(event, this, this.workspace);
  }
};

Blockly.Blocks['block_terminate_program'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.STOP, 15, 15, '*'), 'STOP_IMAGE')
      .appendField('terminate program');
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setStyle('loop_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_terminate_all'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.STOP_ALL, 15, 15, '*'), 'STOP_IMAGE')
      .appendField('terminate all');
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setStyle('loop_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};