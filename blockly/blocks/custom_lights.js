goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['block_set_leds_white'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT, 50, 50, '*'),
      'LIGHT_IMAGE'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_set_leds_red'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT_RED, 50, 50, '*'),
      'LIGHT_IMAGE'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_set_leds_green'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT_GREEN, 50, 50, '*'),
      'LIGHT_IMAGE'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_set_leds_blue'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT_BLUE, 50, 50, '*'),
      'LIGHT_IMAGE'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_set_leds_black'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT_BLACK, 50, 50, '*'),
      'LIGHT_IMAGE'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_light_siren'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT_SIREN, 50, 50, '*'),
      'LIGHT_IMAGE'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_light_rainbow'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT_RAINBOW, 50, 50, '*'),
      'LIGHT_IMAGE'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_light_traffic'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT_TRAFFIC, 50, 50, '*'),
      'LIGHT_IMAGE'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_set_all_leds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.LIGHTS, 15, 15, '*'), 'LIGHT_IMAGE')
      .appendField('set lights')
      .appendField(new Blockly.FieldColour('#ff0000'), 'COLOR');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_set_leds_black_small'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT_BLACK, 15, 15, '*'), 'LIGHT_IMAGE')
      .appendField('turn lights off');

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_set_light_effect'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.LIGHTS, 15, 15, '*'), 'LIGHT_IMAGE')
      .appendField('set light effect')
      .appendField(
        new Blockly.FieldDropdown([
          ['🚨', 'RingLed.Siren'],
          ['🚦', 'RingLed.TrafficLight'],
          ['🌈', 'RingLed.ColorWheel']
        ]),
        'LIGHT_EFFECT_SELECTOR'
      );

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_set_led'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT, 15, 15, '*'),
      'LIGHT_IMAGE'
    );

    var ledValueInput = this.appendValueInput('LED')
      .setCheck('Number')
      .appendField('set LED');
    createShadowElement(this.workspace, 'math_number', ledValueInput, '1');

    var colorValueInput = this.appendValueInput('COLOR')
      .setCheck('Colour')
      .appendField('color');
    createShadowElement(this.workspace, 'colour_picker', colorValueInput);

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_set_multiple_led'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.LIGHTS, 15, 15, '*'), 'LIGHT_IMAGE')
      .appendField('set LEDs')
      .appendField(new Blockly.FieldTextInput('1,2,3'), 'LED_IDS');

    var colorValueInput = this.appendValueInput('COLOR')
      .setCheck('Colour')
      .appendField('color');

    createShadowElement(this.workspace, 'colour_picker', colorValueInput);

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('light_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['colour_rgb2'] = {
  init: function () {
    this.appendDummyInput().appendField('color with red');

    var redValueInput = this.appendValueInput('RED').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', redValueInput, '0');

    this.appendDummyInput().appendField('green');
    var greenValueInput = this.appendValueInput('GREEN').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', greenValueInput, '0');

    this.appendDummyInput().appendField('blue');
    var blueValueInput = this.appendValueInput('BLUE').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', blueValueInput, '0');

    this.setInputsInline(true);
    this.setOutput(true, 'Colour');
    this.setStyle('light_blocks');
    this.setTooltip('%{BKY_COLOUR_RGB_TOOLTIP}');
    this.setHelpUrl('%{BKY_COLOUR_RGB_HELPURL}');
  }
};
