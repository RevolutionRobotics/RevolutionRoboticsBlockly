toolboxes = {};
toolboxes["empty"] = {
    xml: '<xml>' +
        '</xml>',
    icons: [
    ]
};

toolboxes["level1"] = {
    xml: '<xml>' +
        '<category name="move" colour="#e60312">' +
        '    <block type="block_drive_fwd_small"></block>' +
        '    <block type="block_drive_fwd_big"></block>' +
        '    <block type="block_drive_back_small"></block>' +
        '    <block type="block_drive_back_big"></block>' +
        '    <block type="block_turn_left_90"></block>' +
        '    <block type="block_turn_right_90"></block>' +
        '    <block type="block_turn_left_180"></block>' +
        '    <block type="block_turn_right_180"></block>' +
        '</category>'+
        '<category name="lights" colour="#e51777">' +
        '    <block type="block_set_leds_white"></block>' +
        '    <block type="block_set_leds_red"></block>' +
        '    <block type="block_set_leds_green"></block>' +
        '    <block type="block_set_leds_blue"></block>' +
        '    <block type="block_set_leds_black"></block>' +
        '    <block type="block_light_siren"></block>' +
        '    <block type="block_light_rainbow"></block>' +
        '    <block type="block_light_traffic"></block>' +
        '</category>' +
        '<category name="sounds" colour="#5e2882">' +
        '    <block type="play_tune_cat"></block>' +
        '    <block type="play_tune_uh_oh"></block>' +
        '    <block type="play_tune_robot"></block>' +
        '    <block type="play_tune_tada"></block>' +
        '</category>' +
        '<category name="time" colour="#868a8c">' +
        '    <block type="block_wait_1"></block>' +
        '    <block type="block_wait_5"></block>' +
        '</category>' +
        '</xml>',
    icons: [
        'motorIcon',
        'lightIcon',
        'soundIcon',
        'timeIcon'
    ]
};

toolboxes["level2"] = {
    xml: '<xml>' +
        '<category name="motors" colour="#e60312">' +
        '    <block type="block_drive_simplified"></block>' +
        '    <block type="block_turn_simplified"></block>' +
        '    <block type="block_motor_simplified"></block>' +
        '    <block type="block_spin_motor_simplified"></block>' +
        '    <block type="block_stop_motor_simplified"></block>' +
        '    <block type="block_stop_all_motors_simplified"></block>' +
        '</category>' +
        '<category name="sensors" colour="#f8bc08">' +
        '    <block type="if_then">' +
        '       <value name="COND">' +
        '           <block type="block_is_object_near"></block>' +
        '       </value>' +
        '    </block>' +
        '    <block type="if_then">' +
        '       <value name="COND">' +
        '           <block type="block_bumper"></block>' +
        '       </value>' +
        '    </block>' +
        '    <block type="block_wait_for_button_press"></block>' +
        '</category>' +
        '<category name="lights" colour="#e51777">' +
        '    <block type="block_set_all_leds"></block>' +
        '    <block type="block_set_leds_black_small"></block>' +
        '    <block type="block_set_light_effect"></block>' +
        '</category>' +
        '<category name="sounds" colour="#5e2882">' +
        '    <block type="play_tune"></block>' +
        '</category>' +
        '<category name="loops" colour="#dd7d3a">' +
        '    <block type="block_repeat_forever"></block>' +
        '    <block type="controls_repeat_n_times"></block>' +
        '    <block type="block_break"></block>' +
        '</category>' +
        '<category name="logic" colour="#0264ff">' +
        '    <block type="if_then"></block>' +
        '    <block type="if_then_else"></block>' +
        '    <block type="logic_not"></block>' +
        '</category>' +
        '<category name="time" colour="#868a8c">' +
        '    <block type="block_wait_simplified"></block>' +
        '</category>' +
        '</xml>',
    icons: [
        'motorIcon',
        'sensorIcon',
        'lightIcon',
        'soundIcon',
        'loopsIcon',
        'logicIcon',
        'timeIcon'
    ]
};

toolboxes["level3"] = {
    xml: '<xml>' +
        '<category name="motors" colour="#e60312">' +
        '    <block type="block_drive"></block>' +
        '    <block type="block_turn"></block>' +
        '    <block type="block_set_speed"></block>' +
        '    <block type="block_motor"></block>' +
        '    <block type="spin_motor"></block>' +
        '    <block type="block_stop_motor"></block>' +
        '    <block type="block_stop_all_motors"></block>' +
        '</category>' +
        '<category name="sensors" colour="#f8bc08">' +
        '    <block type="block_ultrasonic_sensor"></block>' +
        '    <block type="block_bumper"></block>' +
        '    <block type="block_wait_for_button_press"></block>' +
        '</category>' +
        '<category name="lights" colour="#e51777">' +
        '    <block type="colour_picker"></block>' +
        '    <block type="colour_rgb2"></block>' +
        '    <block type="block_set_led"></block>' +
        '    <block type="block_set_multiple_led"></block>' +
        '</category>' +
        '<category name="sounds" colour="#5e2882">' +
        '    <block type="play_tune"></block>' +
        '</category>' +
        '<category name="loops" colour="#dd7d3a">' +
        '    <block type="controls_repeat_ext2"></block>' +
        '    <block type="block_repeat_forever"></block>' +
        '    <block type="block_repeat_while"></block>' +
        '    <block type="block_repeat_until"></block>' +
        '    <block type="block_break"></block>' +
        '    <block type="block_terminate_program"></block>' +
        '    <block type="block_terminate_all"></block>' +
        '</category>' +
        '<category name="logic" colour="#0264ff">' +
        '    <block type="logic_boolean"></block>' +
        '    <block type="logic_compare2"></block>' +
        '    <block type="if_then"></block>' +
        '    <block type="if_then_else"></block>' +
        '    <block type="logic_and"></block>' +
        '    <block type="logic_or"></block>' +
        '    <block type="logic_not"></block>' +
        '</category>' +
        '<category name="time" colour="#868a8c">' +
        '    <block type="block_wait"></block>' +
        '    <block type="block_global_timer"></block>' +
        '</category>' +
        '<category name="math" colour="#4dc88f">' +
        '    <block type="math_number"></block>' +
        '    <block type="math_arithmetic2"></block>' +
        '    <block type="math_round2"></block>' +
        '    <block type="math_trig2"></block>' +
        '    <block type="math_random_int2"></block>' +
        '    <block type="math_pi"></block>' +
        '</category>' +
        '<category name="variables" colour="#cc7be6" custom="VARIABLE"></category>' +
        '<category name="functions" colour="#6ab3c1" custom="PROCEDURE"></category>' +
        '</xml>',
    icons: [
        'motorIcon',
        'sensorIcon',
        'lightIcon',
        'soundIcon',
        'loopsIcon',
        'logicIcon',
        'timeIcon',
        'mathIcon',
        'variablesIcon',
        'functionsIcon'
    ]
};
