'use strict';

goog.require('Blockly.Python');

Blockly.Python['controls_repeat_n_times'] = function (block) {
    var repeats = block.getFieldValue('TIMES_SELECTOR');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    var loopVar = Blockly.Python.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
    var code = 'for ' + loopVar + ' in range(' + repeats + '):\n' + branch;
    return code;
};

Blockly.Python['controls_repeat_ext2'] = function (block) {
    // Repeat n times.
    if (block.getField('TIMES')) {
        // Internal number.
        var repeats = String(parseInt(block.getFieldValue('TIMES'), 10));
    } else {
        // External number.
        var repeats = Blockly.Python.valueToCode(block, 'TIMES', Blockly.Python.ORDER_NONE) || '0';
    }
    if (Blockly.isNumber(repeats)) {
        repeats = parseInt(repeats, 10);
    } else {
        repeats = 'int(' + repeats + ')';
    }
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    var loopVar = Blockly.Python.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
    var code = 'for ' + loopVar + ' in range(' + repeats + '):\n' + branch;
    return code;
};

Blockly.Python['block_repeat_while'] = function (block) {
    var value_condition = Blockly.Python.valueToCode(block, 'CONDITION', Blockly.Python.ORDER_ATOMIC);
    var statements_statement = Blockly.Python.statementToCode(block, 'STATEMENT');

    var branch = Blockly.Python.addLoopTrap(statements_statement, block.id) || Blockly.Python.PASS;

    var code = 'while ' + (value_condition || 'False') + ':\n' + branch;
    return code;
};

Blockly.Python['block_repeat_until'] = function (block) {
    var statements_statement = Blockly.Python.statementToCode(block, 'STATEMENT');
    var value_condition = Blockly.Python.valueToCode(block, 'CONDITION', Blockly.Python.ORDER_ATOMIC);

    var branch = Blockly.Python.addLoopTrap(statements_statement, block.id) || Blockly.Python.PASS;

    branch += '  if ' + (value_condition || 'True') + ': break\n';

    var code = 'while True:\n' + branch;
    return code;
};

Blockly.Python['block_repeat_forever'] = function (block) {
    var statements_statement = Blockly.Python.statementToCode(block, 'STATEMENT');
    var branch = Blockly.Python.addLoopTrap(statements_statement, block.id) || Blockly.Python.PASS;
    Blockly.Python.definitions_['import_time'] = 'import time';
    var code = 'while True:\n' + branch + Blockly.Python.INDENT + 'time.sleep(0.05)  # allow other threads to run\n';
    return code;
};

Blockly.Python['block_break'] = function (block) {
    var code = 'break\n';
    return code;
};

Blockly.Python['block_terminate_program'] = function (block) {
    var code = 'Control.terminate_program()\n';
    return code;
};

Blockly.Python['block_terminate_all'] = function (block) {
    var code = 'Control.terminate_all()\n';
    return code;
};