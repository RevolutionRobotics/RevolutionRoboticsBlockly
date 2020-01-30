'use strict';

goog.require('Blockly.Python');

var setLedsImpl = function (leds, color) {
    return `robot.led.set(leds=[${leds}], color=${color})\n`;
};

var setAllLedsImpl = function (color) {
    return setLedsImpl('1,2,3,4,5,6,7,8,9,10,11,12', color);
};

var startAnimationImpl = function (animation) {
    return `robot.led.start_animation(${animation})\n`;
};

Blockly.Python['block_set_leds_white'] = function (block) {
    return setAllLedsImpl("'#ffffff'");
};

Blockly.Python['block_set_leds_red'] = function (block) {
    return setAllLedsImpl("'#ff0000'");
};

Blockly.Python['block_set_leds_green'] = function (block) {
    return setAllLedsImpl("'#00ff00'");
};

Blockly.Python['block_set_leds_blue'] = function (block) {
    return setAllLedsImpl("'#0000ff'");
};

Blockly.Python['block_set_leds_black'] = function (block) {
    return setAllLedsImpl("'#000000'");
};

Blockly.Python['block_light_siren'] = function (block) {
    return startAnimationImpl('RingLed.Siren');
};

Blockly.Python['block_light_rainbow'] = function (block) {
    return startAnimationImpl('RingLed.ColorWheel');
};

Blockly.Python['block_light_traffic'] = function (block) {
    return startAnimationImpl('RingLed.TrafficLight');
};

Blockly.Python['block_set_all_leds'] = function (block) {
    var value_color = block.getFieldValue('COLOR');
    return setAllLedsImpl(`'${value_color}'`);
};

Blockly.Python['block_set_leds_black_small'] = Blockly.Python['block_set_leds_black'];

Blockly.Python['block_set_light_effect'] = function (block) {
    var effect = block.getFieldValue('LIGHT_EFFECT_SELECTOR');
    return startAnimationImpl(effect);
};

Blockly.Python['block_set_led'] = function (block) {
    var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
    var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);

    return setLedsImpl(value_led, value_color);
};

Blockly.Python['block_set_multiple_led'] = function (block) {
    var value_led = block.getFieldValue('LED_IDS');
    var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);

    return setLedsImpl(value_led, value_color);
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
    var code = `${functionName}(${r}, ${g}, ${b})`;
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
