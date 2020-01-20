'use strict';

goog.require('Blockly.Python');

var angles = {
    'ANGLE_SLIGHT': 45,
    'ANGLE_RIGHT': 90,
    'ANGLE_HALF':180,
    'ANGLE_FULL': 360
  };

var speeds = {
    'SPEED_SLOW': 25,
    'SPEED_MEDIUM': 75,
    'SPEED_FAST': 120
} 

var durations = {
    'DURATION_SHORT': 1,
    'DURATION_MEDIUM': 2,
    'DURATION_LONG': 5
} 

Blockly.Python['block_drive_fwd_small'] = function (block) {
    return 'robot.drive(direction=Motor.DIRECTION_FWD, rotation=2, unit_rotation=Motor.UNIT_SEC, speed=50, unit_speed=Motor.UNIT_SPEED_RPM)\n';
};

Blockly.Python['block_drive_fwd_big'] = function (block) {
    return 'robot.drive(direction=Motor.DIRECTION_FWD, rotation=5, unit_rotation=Motor.UNIT_SEC, speed=50, unit_speed=Motor.UNIT_SPEED_RPM)\n';
};

Blockly.Python['block_drive_back_small'] = function (block) {
    return 'robot.drive(direction=Motor.DIRECTION_BACK, rotation=2, unit_rotation=Motor.UNIT_SEC, speed=50, unit_speed=Motor.UNIT_SPEED_RPM)\n';
};

Blockly.Python['block_drive_back_big'] = function (block) {
    return 'robot.drive(direction=Motor.DIRECTION_BACK, rotation=5, unit_rotation=Motor.UNIT_SEC, speed=50, unit_speed=Motor.UNIT_SPEED_RPM)\n';
};

Blockly.Python['block_turn_left_90'] = function (block) {
    return 'robot.turn(direction=Motor.DIRECTION_LEFT, rotation=90, unit_rotation=Motor.UNIT_TURN_ANGLE, speed=50, unit_speed=Motor.UNIT_SPEED_RPM)\n';
};

Blockly.Python['block_turn_right_90'] = function (block) {
    return 'robot.turn(direction=Motor.DIRECTION_RIGHT, rotation=90, unit_rotation=Motor.UNIT_TURN_ANGLE, speed=50, unit_speed=Motor.UNIT_SPEED_RPM)\n';
};

Blockly.Python['block_turn_left_180'] = function (block) {
    return 'robot.turn(direction=Motor.DIRECTION_LEFT, rotation=180, unit_rotation=Motor.UNIT_TURN_ANGLE, speed=50, unit_speed=Motor.UNIT_SPEED_RPM)\n';
};

Blockly.Python['block_turn_right_180'] = function (block) {
    return 'robot.turn(direction=Motor.DIRECTION_RIGHT, rotation=180, unit_rotation=Motor.UNIT_TURN_ANGLE, speed=50, unit_speed=Motor.UNIT_SPEED_RPM)\n';
};

Blockly.Python['block_drive_simplified'] = function (block) {
    var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
    var duration = durations[block.getFieldValue('DURATION_SELECTOR')];
    var number_speed = speeds[block.getFieldValue('SPEED_SELECTOR')];

    var code =
        'robot.drive(' +
        'direction=' +
        dropdown_direction +
        ', ' +
        'rotation=' +
        duration +
        ', ' +
        'unit_rotation=' +
        'Motor.UNIT_SEC' +
        ', ' +
        'speed=' +
        number_speed +
        ', ' +
        'unit_speed=' +
        'Motor.UNIT_SPEED_RPM' +
        ')\n';
    return code;
};

Blockly.Python['block_turn_simplified'] = function (block) {
    var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
    var number_rotation = angles[block.getFieldValue('ROTATION_SELECTOR')];

    var code =
        'robot.turn(' +
        'direction=' +
        dropdown_direction +
        ', ' +
        'rotation=' +
        number_rotation +
        ', ' +
        'unit_rotation=' +
        'Motor.UNIT_TURN_ANGLE' +
        ', ' +
        'speed=' +
        '75' +
        ', ' +
        'unit_speed=Motor.UNIT_SPEED_RPM)\n';
    return code;
};

Blockly.Python['block_motor_simplified'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');
    var direction = block.getFieldValue('DIRECTION_SELECTOR');
    var amount = angles[block.getFieldValue('AMOUNT_SELECTOR')];

    var code =
        `robot.motors["${text_name}"].move(` +
        'direction=' +
        direction +
        ', ' +
        'amount=' +
        amount +
        ', ' +
        'unit_amount=' +
        'Motor.UNIT_DEG' +
        ', ' +
        'limit=' +
        '75' +
        ', ' +
        'unit_limit=' +
        'Motor.UNIT_SPEED_RPM' +
        ')\n';

    return code;
};

Blockly.Python['block_spin_motor_simplified'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');
    var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
    var number_speed = speeds[block.getFieldValue('SPEED_SELECTOR')];

    var code =
        `robot.motors["${text_name}"].spin(` +
        'direction=' +
        dropdown_direction +
        ', ' +
        'rotation=' +
        number_speed +
        ', ' +
        'unit_rotation=' +
        'Motor.UNIT_SPEED_RPM' +
        ')\n';

    return code;
};

Blockly.Python['block_drive'] = function (block) {
    var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
    var number_rotation = Blockly.Python.valueToCode(block, 'ROTATION', Blockly.Python.ORDER_ATOMIC);
    var unit_rotation = block.getFieldValue('UNIT_ROTATION_SELECTOR');
    var number_speed = Blockly.Python.valueToCode(block, 'SPEED_SLIDER', Blockly.Python.ORDER_ATOMIC);
    var unit_speed = block.getFieldValue('UNIT_SPEED_SELECTOR');

    var code =
        'robot.drive(' +
        'direction=' +
        dropdown_direction +
        ', ' +
        'rotation=' +
        number_rotation +
        ', ' +
        'unit_rotation=' +
        unit_rotation +
        ', ' +
        'speed=' +
        number_speed +
        ', ' +
        'unit_speed=' +
        unit_speed +
        ')\n';
    return code;
};

Blockly.Python['block_set_speed'] = function (block) {
    var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
    var number_speed = Blockly.Python.valueToCode(block, 'SPEED_SLIDER', Blockly.Python.ORDER_ATOMIC);
    var unit_speed = block.getFieldValue('UNIT_SPEED_SELECTOR');

    var code =
        'robot.drivetrain.set_speeds(' +
        'direction=' +
        dropdown_direction +
        ', ' +
        'speed=' +
        number_speed +
        ', ' +
        'unit_speed=' +
        unit_speed +
        ')\n';
    return code;
};

Blockly.Python['block_turn'] = function (block) {
    var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
    var number_rotation = Blockly.Python.valueToCode(block, 'ROTATION', Blockly.Python.ORDER_ATOMIC);
    var unit_rotation = block.getFieldValue('UNIT_ROTATION_SELECTOR');
    var number_speed = Blockly.Python.valueToCode(block, 'SPEED_SLIDER', Blockly.Python.ORDER_ATOMIC);
    var unit_speed = block.getFieldValue('UNIT_SPEED_SELECTOR');

    var code =
        'robot.turn(' +
        'direction=' +
        dropdown_direction +
        ', ' +
        'rotation=' +
        number_rotation +
        ', ' +
        'unit_rotation=' +
        unit_rotation +
        ', ' +
        'speed=' +
        number_speed +
        ', ' +
        'unit_speed=Motor.UNIT_SPEED_RPM)\n';
    return code;
};

Blockly.Python['block_motor'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');
    var direction = block.getFieldValue('DIRECTION_SELECTOR');
    var amount = Blockly.Python.valueToCode(block, 'AMOUNT', Blockly.Python.ORDER_ATOMIC);
    var unit_amount = block.getFieldValue('UNIT_AMOUNT_SELECTOR');
    var limit = Blockly.Python.valueToCode(block, 'LIMIT_SLIDER', Blockly.Python.ORDER_ATOMIC);
    var unit_limit = block.getFieldValue('UNIT_LIMIT_SELECTOR');

    var code =
        `robot.motors["${text_name}"].move(` +
        'direction=' +
        direction +
        ', ' +
        'amount=' +
        amount +
        ', ' +
        'unit_amount=' +
        unit_amount +
        ', ' +
        'limit=' +
        limit +
        ', ' +
        'unit_limit=' +
        unit_limit +
        ')\n';

    return code;
};

Blockly.Python['spin_motor'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');
    var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
    var number_rotation = Blockly.Python.valueToCode(
        block,
        'ROTATION_SLIDER',
        Blockly.Python.ORDER_ATOMIC
    );
    var dropdown_unit = block.getFieldValue('UNIT_SPEED_SELECTOR');

    var code =
        `robot.motors["${text_name}"].spin(` +
        'direction=' +
        dropdown_direction +
        ', ' +
        'rotation=' +
        number_rotation +
        ', ' +
        'unit_rotation=' +
        dropdown_unit +
        ')\n';

    return code;
};

Blockly.Python['block_stop_motor_simplified'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');
    var code = `robot.motors["${text_name}"].stop(` + 'action=Motor.ACTION_STOP_AND_HOLD)\n';
    return code;
};

Blockly.Python['block_stop_all_motors_simplified'] = function (block) {
    return 'for __motor in robot.motors:\n' +
            Blockly.Python.INDENT + '__motor.stop(action=Motor.ACTION_STOP_AND_HOLD)\n';
};

Blockly.Python['block_stop_motor'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');
    var dropdown_action = block.getFieldValue('STOP_ACTION_SELECTOR');

    var code = `robot.motors["${text_name}"].stop(` + 'action=' + dropdown_action + ')\n';
    return code;
};

Blockly.Python['block_stop_all_motors'] = function (block) {
    var dropdown_action = block.getFieldValue('STOP_ALL_ACTION_SELECTOR');
    var code = 'for __motor in robot.motors:\n' +
                Blockly.Python.INDENT + `__motor.stop(action='${dropdown_action})\n`;
    return code;
};
