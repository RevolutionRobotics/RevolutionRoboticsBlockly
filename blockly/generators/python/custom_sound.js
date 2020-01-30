'use strict';

goog.require('Blockly.Python');

var playTuneImpl = function (tune) {
    return `robot.play_tune('${tune}')\n`;
}

Blockly.Python['play_tune_cat'] = function (block) {
    return playTuneImpl('cat');
};

Blockly.Python['play_tune_uh_oh'] = function (block) {
    return playTuneImpl('uh_oh');
};

Blockly.Python['play_tune_robot'] = function (block) {
    return playTuneImpl('robot');
};

Blockly.Python['play_tune_tada'] = function (block) {
    return playTuneImpl('ta_da');
};

Blockly.Python['block_play_note'] = function (block) {
    var dropdown_octave = block.getFieldValue('OCTAVE_SELECTOR');
    var dropdown_key = block.getFieldValue('KEY_SELECTOR');
    var value_duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_robot_lib'] = 'import robot_lib';

    var code =
        'Sound.play_note(' +
        `octave=${dropdown_octave}, ` +
        `key=${dropdown_key}, ` +
        `duration=${value_duration})\n`;
    return code;
};

Blockly.Python['play_tune'] = function (block) {
    var dropdown_tune = block.getFieldValue('IN_SOUND');

    return playTuneImpl(dropdown_tune);
};

Blockly.Python['block_stop_playback'] = function (block) {
    return 'Sound.stop_playback()\n';
};