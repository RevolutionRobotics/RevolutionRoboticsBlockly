'use strict';

goog.require('Blockly.Python');

Blockly.Python['logic_compare2'] = function (block) {
    // Comparison operator.
    var OPERATORS = {
        EQ: '==',
        NEQ: '!=',
        LT: '<',
        LTE: '<=',
        GT: '>',
        GTE: '>='
    };
    var operator = OPERATORS[block.getFieldValue('LOGIC_SELECTOR')];
    var order = Blockly.Python.ORDER_RELATIONAL;
    var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
    var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
    var code = argument0 + ' ' + operator + ' ' + argument1;
    return [code, order];
};

Blockly.Python['logic_and'] = function (block) {
    var value_left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
    var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
    var code = value_left + ' and ' + value_right;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['logic_or'] = function (block) {
    var value_left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
    var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
    var code = value_left + ' or ' + value_right;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['logic_not'] = function (block) {
    var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
    var code = 'not ' + value_right;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['if_then_else'] = function (block) {
    var n = 0;
    var code = '',
        branchCode,
        conditionCode;

    conditionCode = Blockly.Python.valueToCode(block, 'COND', Blockly.Python.ORDER_NONE) || 'False';

    branchCode = Blockly.Python.statementToCode(block, 'IN_IF') || Blockly.Python.PASS;
    code += (n == 0 ? 'if ' : 'elif ') + conditionCode + ':\n' + branchCode;

    if (block.getInput('IN_ELSE')) {
        branchCode = Blockly.Python.statementToCode(block, 'IN_ELSE') || Blockly.Python.PASS;
        code += 'else:\n' + branchCode;
    }
    return code;
};

Blockly.Python['if_then'] = function (block) {
    var n = 0;
    var code = '',
        branchCode,
        conditionCode;

    conditionCode = Blockly.Python.valueToCode(block, 'COND', Blockly.Python.ORDER_NONE) || 'False';

    branchCode = Blockly.Python.statementToCode(block, 'IN_IF') || Blockly.Python.PASS;
    code += (n == 0 ? 'if ' : 'elif ') + conditionCode + ':\n' + branchCode;

    return code;
};