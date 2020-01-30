'use strict';

goog.require('Blockly.Python');

var sleepImpl = function(value_wait) {
    Blockly.Python.definitions_['import_time'] = 'import time';

    return `time.sleep(${value_wait})\n`;
}

Blockly.Python['block_wait_1'] = function (block) {
    return sleepImpl(1);
};

Blockly.Python['block_wait_5'] = function (block) {
    return sleepImpl(5);
};

Blockly.Python['block_wait_simplified'] = function (block) {
    var value_wait = block.getFieldValue('WAIT_SELECTOR');

    return sleepImpl(value_wait);
};

Blockly.Python['block_wait'] = function (block) {
    var value_wait = Blockly.Python.valueToCode(block, 'WAIT', Blockly.Python.ORDER_ATOMIC);

    return sleepImpl(value_wait);
};

Blockly.Python['block_global_timer'] = function (block) {
    var code = 'robot.time()';
    return [code, Blockly.Python.ORDER_NONE];
};
