goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['if_then_else'] = {
  init: function () {
    this.appendValueInput('COND')
      .setCheck('Boolean')
      .appendField('if');
    this.appendStatementInput('IN_IF')
      .setCheck(null)
      .appendField('then');
    this.appendStatementInput('IN_ELSE')
      .setCheck(null)
      .appendField('else');
    this.setInputsInline(false);
    this.setStyle('logic_blocks');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['if_then'] = {
  init: function () {
    this.appendValueInput('COND')
      .setCheck('Boolean')
      .appendField('if');
    this.appendStatementInput('IN_IF')
      .setCheck(null)
      .appendField('then');
    this.setInputsInline(false);
    this.setStyle('logic_blocks');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['logic_and'] = {
  init: function () {
    var leftValueInput = this.appendValueInput('LEFT').setCheck('Boolean');
    createShadowElement(this.workspace, 'logic_boolean', leftValueInput);

    this.appendDummyInput().appendField('and');

    var rightValueInput = this.appendValueInput('RIGHT').setCheck('Boolean');
    createShadowElement(this.workspace, 'logic_boolean', rightValueInput);

    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setStyle('logic_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['logic_or'] = {
  init: function () {
    var leftValueInput = this.appendValueInput('LEFT').setCheck('Boolean');
    createShadowElement(this.workspace, 'logic_boolean', leftValueInput);

    this.appendDummyInput().appendField('or');

    var rightValueInput = this.appendValueInput('RIGHT').setCheck('Boolean');
    createShadowElement(this.workspace, 'logic_boolean', rightValueInput);

    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setStyle('logic_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['logic_not'] = {
  init: function () {
    this.appendDummyInput().appendField('not');

    var rightValueInput = this.appendValueInput('RIGHT').setCheck('Boolean');
    createShadowElement(this.workspace, 'logic_boolean', rightValueInput);

    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setStyle('logic_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['logic_compare2'] = {
  init: function () {
    this.appendValueInput('A').setCheck('Number');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['==', 'EQ'],
        ['!=', 'NEQ'],
        ['<', 'LT'],
        ['<=', 'LTE'],
        ['>', 'GT'],
        ['>=', 'GTE']
      ]),
      'LOGIC_SELECTOR'
    );
    var inputB = this.appendValueInput('B').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', inputB, '10');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setStyle('logic_blocks');
    this.setTooltip('');
    this.setHelpUrl('%{BKY_LOGIC_COMPARE_HELPURL}');
  }
};

