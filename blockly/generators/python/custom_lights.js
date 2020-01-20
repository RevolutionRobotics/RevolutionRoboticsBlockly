'use strict';

goog.require('Blockly.Python');

Blockly.Python['block_set_leds_white'] = function (block) {
    return "robot.led.set(led_index=[1,2,3,4,5,6,7,8,9,10,11,12], color='#ffffff')\n";
};

Blockly.Python['block_set_leds_red'] = function (block) {
    return "robot.led.set(led_index=[1,2,3,4,5,6,7,8,9,10,11,12], color='#ff0000')\n";
};

Blockly.Python['block_set_leds_green'] = function (block) {
    return "robot.led.set(led_index=[1,2,3,4,5,6,7,8,9,10,11,12], color='#00ff00')\n";
};

Blockly.Python['block_set_leds_blue'] = function (block) {
    return "robot.led.set(led_index=[1,2,3,4,5,6,7,8,9,10,11,12], color='#0000ff')\n";
};

Blockly.Python['block_set_leds_black'] = function (block) {
    return "robot.led.set(led_index=[1,2,3,4,5,6,7,8,9,10,11,12], color='#000000')\n";
};

Blockly.Python['block_light_siren'] = function (block) {
    return "robot.led.start_animation(RingLed.Siren)\n";
};

Blockly.Python['block_light_rainbow'] = function (block) {
    return "robot.led.start_animation(RingLed.ColorWheel)\n";
};

Blockly.Python['block_light_traffic'] = function (block) {
    return "robot.led.start_animation(RingLed.TrafficLight)\n";
};

Blockly.Python['block_set_all_leds'] = function (block) {
    var value_color = block.getFieldValue('COLOR');
    return `robot.led.set(led_index=[1,2,3,4,5,6,7,8,9,10,11,12], color="${value_color}")\n`;
};

Blockly.Python['block_set_leds_black_small'] = Blockly.Python['block_set_leds_black'];

Blockly.Python['block_set_light_effect'] = function (block) {
    var effect = block.getFieldValue('LIGHT_EFFECT_SELECTOR');
    return `robot.led.start_animation(${effect})\n`;
};

Blockly.Python['block_set_led'] = function (block) {
    var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
    var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);

    var code = 'robot.led.set(' + 'led_index=' + value_led + ', ' + 'color=' + value_color + ')\n';
    return code;
};

Blockly.Python['block_set_multiple_led'] = function (block) {
    var value_led = block.getFieldValue('LED_IDS');
    var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);

    var code = 'robot.led.set(' + 'led_index=[' + value_led + '], ' + 'color=' + value_color + ')\n';
    return code;
};

Blockly.Python['colour_rgb2'] = function (block) {
    // Compose a color from RGB components expressed as percentages.
    var functionName = Blockly.Python.provideFunction_('color_rgb', [
        'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(r, g, b):',
        '  r = round(min(100, max(0, r)) * 2.55)',
        '  g = round(min(100, max(0, g)) * 2.55)',
        '  b = round(min(100, max(0, b)) * 2.55)',
        "  return '#%02x%02x%02x' % (r, g, b)"
    ]);
    var r = Blockly.Python.valueToCode(block, 'RED', Blockly.Python.ORDER_NONE) || 0;
    var g = Blockly.Python.valueToCode(block, 'GREEN', Blockly.Python.ORDER_NONE) || 0;
    var b = Blockly.Python.valueToCode(block, 'BLUE', Blockly.Python.ORDER_NONE) || 0;
    var code = functionName + '(' + r + ', ' + g + ', ' + b + ')';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
