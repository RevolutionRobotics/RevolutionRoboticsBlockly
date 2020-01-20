goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['math_random_int2'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.DICE, 18, 18, '*'),
      'DICE_IMAGE'
    );

    var fromValueInput = this.appendValueInput('FROM').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', fromValueInput, '1');

    this.appendDummyInput().appendField('to');

    var toValueInput = this.appendValueInput('TO').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', toValueInput, '100');

    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setStyle('math_blocks');
    this.setTooltip('%{BKY_MATH_RANDOM_INT_TOOLTIP}');
    this.setHelpUrl('%{BKY_MATH_RANDOM_INT_HELPURL}');
  },
  onchange: function (event) {
    roundNumber(event, this, this.workspace);
  }
};

Blockly.Blocks['math_round2'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['%{BKY_MATH_ROUND_OPERATOR_ROUND}', 'ROUND'],
        ['%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}', 'ROUNDUP'],
        ['%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}', 'ROUNDDOWN']
      ]),
      'OPERATOR_SELECTOR'
    );

    var rightValueInput = this.appendValueInput('NUM').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', rightValueInput);

    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setStyle('math_blocks');
    this.setTooltip('%{BKY_MATH_ROUND_HELPURL}');
    this.setHelpUrl('%{BKY_MATH_ROUND_TOOLTIP}');
  }
};

Blockly.Blocks['math_arithmetic2'] = {
  init: function () {
    var leftValueInput = this.appendValueInput('A').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', leftValueInput);

    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['+', 'ADD'],
        ['-', 'MINUS'],
        ['*', 'MULTIPLY'],
        ['/', 'DIVIDE'],
        ['%', 'MODULO']
      ]),
      'OPERATOR_SELECTOR'
    );

    var rightValueInput = this.appendValueInput('B').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', rightValueInput);

    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setStyle('math_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['math_pi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u03c0');
    this.setOutput(true, 'Number');
    this.setStyle('math_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
}

Blockly.Blocks['math_trig2'] = {
  init: function () {
    this.setStyle('math_blocks');
    var amountValueInput = this.appendValueInput('RIGHT')
      .setCheck('Number')
      .appendField(
        new Blockly.FieldDropdown([['sin', 'sin'], ['cos', 'cos'], ['tan', 'tan']]),
        'MATH_TRIG_SELECTOR'
      );
    createShadowElement(this.workspace, 'math_number', amountValueInput);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
