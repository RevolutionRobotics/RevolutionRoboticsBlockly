goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['block_drive_fwd_small'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.DIRECTION_FWD, 50, 50, '*'),
        'DIRECTION_IMAGE'
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_drive_fwd_big'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.DIRECTION_FWD_FAST, 50, 50, '*'),
        'DIRECTION_IMAGE'
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_drive_back_small'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.DIRECTION_BACK, 50, 50, '*'),
        'DIRECTION_IMAGE'
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_drive_back_big'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.DIRECTION_BACK_FAST, 50, 50, '*'),
        'DIRECTION_IMAGE'
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_turn_left_90'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.TURN_LEFT_90, 50, 50, '*'),
        'DIRECTION_IMAGE'
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_turn_right_90'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.TURN_RIGHT_90, 50, 50, '*'),
        'DIRECTION_IMAGE'
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_turn_left_180'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.TURN_LEFT_180, 50, 50, '*'),
        'DIRECTION_IMAGE'
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_turn_right_180'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.TURN_RIGHT_180, 50, 50, '*'),
        'DIRECTION_IMAGE'
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_drive_simplified'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.DIRECTION_FWD, 15, 15, '*'),
        'DIRECTION_IMAGE'
      )
      .appendField('drive', 'DIRECTION_LABEL')
      .appendField(
        new Blockly.FieldDropdown([
          ['forward', 'Motor.DIRECTION_FWD'],
          ['backward', 'Motor.DIRECTION_BACK']
        ]),
        'DIRECTION_SELECTOR')
      .appendField('for')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', 'DURATION_SHORT'],
          ['2', 'DURATION_MEDIUM'],
          ['5', 'DURATION_LONG'],
        ]),
        'DURATION_SELECTOR')
      .appendField('seconds with')
      .appendField(
        new Blockly.FieldDropdown([
          ['slow', 'SPEED_SLOW'],
          ['medium', 'SPEED_MEDIUM'],
          ['fast', 'SPEED_FAST']
        ]),
        'SPEED_SELECTOR')
      .appendField('speed')

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
  onchange: function (event) {
    if (event instanceof Blockly.Events.Create) {
      var blocks = this.workspace.getBlocksByType('block_drive');
      for (var i = 0; i < blocks.length; i++) {
        var driveBlock = blocks[i];

        var directionSelector =
          driveBlock !== null ? driveBlock.getField('DIRECTION_SELECTOR') : null;
        if (directionSelector) {
          var imageField = driveBlock.getField('DIRECTION_IMAGE');
          if (imageField) {
            imageField.setValue(CUSTOM_IMAGES[directionSelector.getValue().replace('Motor.', '')]);
          }
        }
      }
    }

    if (event instanceof Blockly.Events.Change) {
      if (event.name === 'DIRECTION_SELECTOR') {
        var driveBlock = this.workspace.getBlockById(event.blockId);
        var imageField = driveBlock.getField('DIRECTION_IMAGE');

        imageField.setValue(CUSTOM_IMAGES[event.newValue.replace('Motor.', '')]);
      }
    }
  }
};

Blockly.Blocks['block_turn_simplified'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.DIRECTION_LEFT, 15, 15, '*'),
        'DIRECTION_IMAGE'
      )
      .appendField('turn', 'DIRECTION_LABEL')
      .appendField(
        new Blockly.FieldDropdown([
          ['left', 'Motor.DIRECTION_LEFT'],
          ['right', 'Motor.DIRECTION_RIGHT']
        ]),
        'DIRECTION_SELECTOR'
      )
      .appendField(
        new Blockly.FieldDropdown([
          ['45', 'ANGLE_SLIGHT'],
          ['90', 'ANGLE_RIGHT'],
          ['180', 'ANGLE_HALF']
        ]),
        'ROTATION_SELECTOR'
      )
      .appendField('degrees');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
  onchange: function (event) {
    if (event instanceof Blockly.Events.Create) {
      var blocks = this.workspace.getBlocksByType('block_turn');
      for (var i = 0; i < blocks.length; i++) {
        var driveBlock = blocks[i];

        var directionSelector =
          driveBlock !== null ? driveBlock.getField('DIRECTION_SELECTOR') : null;
        if (directionSelector) {
          var imageField = driveBlock.getField('DIRECTION_IMAGE');
          if (imageField) {
            imageField.setValue(CUSTOM_IMAGES[directionSelector.getValue().replace('Motor.', '')]);
          }
        }
      }
    }

    if (event instanceof Blockly.Events.Change) {
      if (event.name === 'DIRECTION_SELECTOR') {
        var driveBlock = this.workspace.getBlockById(event.blockId);
        var imageField = driveBlock.getField('DIRECTION_IMAGE');

        imageField.setValue(CUSTOM_IMAGES[event.newValue.replace('Motor.', '')]);
      }
    }
  }
};

Blockly.Blocks['block_motor_simplified'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.ENGINE, 15, 15, '*'), 'ENGINE_IMAGE')
      .appendField('move')
      .appendField(new Blockly.FieldTextInput('motor1'), 'NAME_INPUT')
      .appendField(
        new Blockly.FieldDropdown([
          ['forward', 'Motor.DIRECTION_FWD'],
          ['reversed', 'Motor.DIRECTION_BACK']
        ]),
        'DIRECTION_SELECTOR'
      )
      .appendField(
        new Blockly.FieldDropdown([
          ['45', 'ANGLE_SLIGHT'],
          ['90', 'ANGLE_RIGHT'],
          ['180', 'ANGLE_HALF'],
          ['360', 'ANGLE_FULL']
        ]),
        'AMOUNT_SELECTOR'
      )
      .appendField('degrees');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_spin_motor_simplified'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.SPIN, 15, 15, '*'), 'SPIN_IMAGE')
      .appendField('spin')
      .appendField(new Blockly.FieldTextInput('motor1'), 'NAME_INPUT')
      .appendField(
        new Blockly.FieldDropdown([
          ['forward', 'Motor.DIRECTION_FWD'],
          ['reversed', 'Motor.DIRECTION_BACK']
        ]),
        'DIRECTION_SELECTOR'
      )
      .appendField('with')
      .appendField(
        new Blockly.FieldDropdown([
          ['slow', 'SPEED_SLOW'],
          ['medium', 'SPEED_MEDIUM'],
          ['fast', 'SPEED_FAST']
        ]),
        'SPEED_SELECTOR')
      .appendField('speed');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_drive'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.DIRECTION_FWD, 15, 15, '*'),
        'DIRECTION_IMAGE'
      )
      .appendField('drive', 'DIRECTION_LABEL')
      .appendField(
        new Blockly.FieldDropdown([
          ['forward', 'Motor.DIRECTION_FWD'],
          ['backward', 'Motor.DIRECTION_BACK']
        ]),
        'DIRECTION_SELECTOR'
      );

    var rotationValueInput = this.appendValueInput('ROTATION').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', rotationValueInput, '3');

    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['seconds', 'Motor.UNIT_SEC'],
        ['rotations', 'Motor.UNIT_ROT']]),
      'UNIT_ROTATION_SELECTOR'
    );

    var speedValueInput = this.appendValueInput('SPEED_SLIDER').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', speedValueInput, 75);

    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['rpm', 'Motor.UNIT_SPEED_RPM'],
        ['power', 'Motor.UNIT_SPEED_PWR']
      ]),
      'UNIT_SPEED_SELECTOR'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
  onchange: function (event) {
    if (event instanceof Blockly.Events.Create) {
      var blocks = this.workspace.getBlocksByType('block_drive');
      for (var i = 0; i < blocks.length; i++) {
        var driveBlock = blocks[i];

        var directionSelector =
          driveBlock !== null ? driveBlock.getField('DIRECTION_SELECTOR') : null;
        if (directionSelector) {
          var imageField = driveBlock.getField('DIRECTION_IMAGE');
          if (imageField) {
            imageField.setValue(CUSTOM_IMAGES[directionSelector.getValue().replace('Motor.', '')]);
          }
        }
      }
    }

    if (event instanceof Blockly.Events.Change) {
      if (event.name === 'DIRECTION_SELECTOR') {
        var driveBlock = this.workspace.getBlockById(event.blockId);
        var imageField = driveBlock.getField('DIRECTION_IMAGE');

        imageField.setValue(CUSTOM_IMAGES[event.newValue.replace('Motor.', '')]);
      }

      if (event.name === 'UNIT_SPEED_SELECTOR') {
        var driveBlock = this.workspace.getBlockById(event.blockId);
        var selectedSpeedOption = driveBlock.getField('UNIT_SPEED_SELECTOR').getValue();
        var maxValue = 120;

        if (selectedSpeedOption === 'Motor.UNIT_SPEED_PWR') {
          maxValue = 100;
        }

        var chidrens = driveBlock.getChildren();
        // 2nd children is the speed shadow value, 1st input is the FieldNumber
        var unitRpm = chidrens[1].inputList[0];
        var shadowValue = unitRpm.fieldRow[0];

        var currentValue = shadowValue.getValue();

        if (currentValue >= maxValue) {
          shadowValue.setValue(100);
        }
      }
    }
  }
};

Blockly.Blocks['block_set_speed'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.DIRECTION_FWD, 15, 15, '*'),
        'DIRECTION_IMAGE'
      )
      .appendField('set drive speed to', 'DIRECTION_LABEL')
      .appendField(
        new Blockly.FieldDropdown([
          ['forward', 'Motor.DIRECTION_FWD'],
          ['backward', 'Motor.DIRECTION_BACK']
        ]),
        'DIRECTION_SELECTOR'
      );

    var speedValueInput = this.appendValueInput('SPEED_SLIDER').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', speedValueInput, 75);

    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['rpm', 'Motor.UNIT_SPEED_RPM'],
        ['power', 'Motor.UNIT_SPEED_PWR']
      ]),
      'UNIT_SPEED_SELECTOR'
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
  onchange: function (event) {
    if (event instanceof Blockly.Events.Create) {
      var blocks = this.workspace.getBlocksByType('block_set_speed');
      for (var i = 0; i < blocks.length; i++) {
        var driveBlock = blocks[i];

        var directionSelector =
          driveBlock !== null ? driveBlock.getField('DIRECTION_SELECTOR') : null;
        if (directionSelector) {
          var imageField = driveBlock.getField('DIRECTION_IMAGE');
          if (imageField) {
            imageField.setValue(CUSTOM_IMAGES[directionSelector.getValue().replace('Motor.', '')]);
          }
        }
      }
    }

    if (event instanceof Blockly.Events.Change) {
      if (event.name === 'DIRECTION_SELECTOR') {
        var driveBlock = this.workspace.getBlockById(event.blockId);
        var imageField = driveBlock.getField('DIRECTION_IMAGE');

        imageField.setValue(CUSTOM_IMAGES[event.newValue.replace('Motor.', '')]);
      }

      if (event.name === 'UNIT_SPEED_SELECTOR') {
        var driveBlock = this.workspace.getBlockById(event.blockId);
        var selectedSpeedOption = driveBlock.getField('UNIT_SPEED_SELECTOR').getValue();
        var maxValue = 120;

        if (selectedSpeedOption === 'Motor.UNIT_SPEED_PWR') {
          maxValue = 100;
        }

        var chidrens = driveBlock.getChildren();
        // 2nd children is the speed shadow value, 1st input is the FieldNumber
        var unitRpm = chidrens[1].inputList[0];
        var shadowValue = unitRpm.fieldRow[0];

        var currentValue = shadowValue.getValue();

        if (currentValue >= maxValue) {
          shadowValue.setValue(100);
        }
      }
    }
  }
};

Blockly.Blocks['block_turn'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.DIRECTION_LEFT, 15, 15, '*'),
        'DIRECTION_IMAGE'
      )
      .appendField('turn', 'DIRECTION_LABEL')
      .appendField(
        new Blockly.FieldDropdown([
          ['left', 'Motor.DIRECTION_LEFT'],
          ['right', 'Motor.DIRECTION_RIGHT']
        ]),
        'DIRECTION_SELECTOR'
      );

    var rotationValueInput = this.appendValueInput('ROTATION').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', rotationValueInput, 90);

    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['degrees', 'Motor.UNIT_TURN_ANGLE'],
        ['seconds', 'Motor.UNIT_SEC']
      ]),
      'UNIT_ROTATION_SELECTOR'
    );

    var speedValueInput = this.appendValueInput('SPEED_SLIDER').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', speedValueInput, 75);

    this.appendDummyInput().appendField('rpm', 'SPEED_LABEL');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
  onchange: function (event) {
    if (event instanceof Blockly.Events.Create) {
      var blocks = this.workspace.getBlocksByType('block_turn');
      for (var i = 0; i < blocks.length; i++) {
        var driveBlock = blocks[i];

        var directionSelector =
          driveBlock !== null ? driveBlock.getField('DIRECTION_SELECTOR') : null;
        if (directionSelector) {
          var imageField = driveBlock.getField('DIRECTION_IMAGE');
          if (imageField) {
            imageField.setValue(CUSTOM_IMAGES[directionSelector.getValue().replace('Motor.', '')]);
          }
        }
      }
    }

    if (event instanceof Blockly.Events.Change) {
      if (event.name === 'DIRECTION_SELECTOR') {
        var driveBlock = this.workspace.getBlockById(event.blockId);
        var imageField = driveBlock.getField('DIRECTION_IMAGE');

        imageField.setValue(CUSTOM_IMAGES[event.newValue.replace('Motor.', '')]);
      }
    }
  }
};

Blockly.Blocks['block_motor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.ENGINE, 15, 15, '*'), 'ENGINE_IMAGE')
      .appendField('move motor')
      .appendField(new Blockly.FieldTextInput('motor1'), 'NAME_INPUT')
      .appendField(
        new Blockly.FieldDropdown([
          ['forward', 'Motor.DIRECTION_FWD'],
          ['reversed', 'Motor.DIRECTION_BACK']
        ]),
        'DIRECTION_SELECTOR'
      );

    var amountValueInput = this.appendValueInput('AMOUNT').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', amountValueInput, 3);

    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['seconds', 'Motor.UNIT_SEC'],
        ['degrees', 'Motor.UNIT_DEG'],
        ['rotations', 'Motor.UNIT_ROT']
      ]),
      'UNIT_AMOUNT_SELECTOR'
    );

    var limitValueInput = this.appendValueInput('LIMIT_SLIDER').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', limitValueInput, 75);

    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['rpm', 'Motor.UNIT_SPEED_RPM'],
        ['power', 'Motor.UNIT_SPEED_PWR']
      ]),
      'UNIT_LIMIT_SELECTOR'
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
  onchange: function (event) {
    if (event instanceof Blockly.Events.Change) {
      if (event.name === 'UNIT_LIMIT_SELECTOR') {
        var driveBlock = this.workspace.getBlockById(event.blockId);
        var selectedSpeedOption = driveBlock.getField('UNIT_LIMIT_SELECTOR').getValue();
        var maxValue = 170;

        if (selectedSpeedOption === 'Motor.UNIT_SPEED_PWR') {
          maxValue = 100;
        }

        var chidrens = driveBlock.getChildren();
        // 2nd children is the speed shadow value, 1st input is the FieldNumber
        var unitRpm = chidrens[1].inputList[0];
        var shadowValue = unitRpm.fieldRow[0];

        var currentValue = shadowValue.getValue();

        if (currentValue >= maxValue) {
          shadowValue.setValue(100);
        }
      }
    }
  }
};

Blockly.Blocks['spin_motor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.SPIN, 15, 15, '*'), 'SPIN_IMAGE')
      .appendField('spin motor')
      .appendField(new Blockly.FieldTextInput('motor1'), 'NAME_INPUT')
      .appendField(
        new Blockly.FieldDropdown([
          ['forward', 'Motor.DIRECTION_FWD'],
          ['reversed', 'Motor.DIRECTION_BACK']
        ]),
        'DIRECTION_SELECTOR'
      );

    var rotationValueInput = this.appendValueInput('ROTATION_SLIDER').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', rotationValueInput, 75);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['rpm', 'Motor.UNIT_SPEED_RPM'],
        ['power', 'Motor.UNIT_SPEED_PWR']
      ]),
      'UNIT_SPEED_SELECTOR'
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
  onchange: function (event) {
    if (event instanceof Blockly.Events.Change) {
      if (event.name === 'UNIT_SPEED_SELECTOR') {
        var driveBlock = this.workspace.getBlockById(event.blockId);
        var selectedSpeedOption = driveBlock.getField('UNIT_SPEED_SELECTOR').getValue();
        var maxValue = 170;

        if (selectedSpeedOption === 'Motor.UNIT_SPEED_PWR') {
          maxValue = 100;
        }

        var chidrens = driveBlock.getChildren();

        // 2nd children is the speed shadow value, 1st input is the FieldNumber
        var unitRpm = chidrens[0].inputList[0];
        var shadowValue = unitRpm.fieldRow[0];

        var currentValue = shadowValue.getValue();

        if (currentValue >= maxValue) {
          shadowValue.setValue(100);
        }
      }
    }
  }
};

Blockly.Blocks['block_stop_motor_simplified'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.STOP, 15, 15, '*'), 'STOP_IMAGE')
      .appendField('stop motor')
      .appendField(new Blockly.FieldTextInput('motor1'), 'NAME_INPUT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_stop_all_motors_simplified'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.STOP_ALL, 15, 15, '*'), 'STOP_ALL_IMAGE')
      .appendField('stop all motors');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_stop_motor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.STOP, 15, 15, '*'), 'STOP_IMAGE')
      .appendField('stop motor')
      .appendField(new Blockly.FieldTextInput('motor1'), 'NAME_INPUT')
      .appendField(
        new Blockly.FieldDropdown([
          ['Stop & hold', 'Motor.ACTION_STOP_AND_HOLD'],
          ['Release', 'Motor.ACTION_RELEASE']
        ]),
        'STOP_ACTION_SELECTOR'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_stop_all_motors'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.STOP_ALL, 15, 15, '*'), 'STOP_ALL_IMAGE')
      .appendField('stop all motors')
      .appendField(
        new Blockly.FieldDropdown([
          ['Stop & hold', 'Motor.ACTION_STOP_AND_HOLD'],
          ['Release', 'Motor.ACTION_RELEASE']
        ]),
        'STOP_ALL_ACTION_SELECTOR'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('motor_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
