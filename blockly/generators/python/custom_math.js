'use strict';

goog.require('Blockly.Python');

Blockly.Python['math_trig2'] = function (block) {
    var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
    var selected_option = block.getFieldValue('MATH_TRIG_SELECTOR');

    Blockly.Python.definitions_['import_math'] = 'import math';
    var code = 'math.' + selected_option + '(' + value_right + ')';

    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['math_arithmetic2'] = function (block) {
    // Basic arithmetic operators, and power.
    var OPERATORS = {
        ADD: [' + ', Blockly.Python.ORDER_ADDITIVE],
        MINUS: [' - ', Blockly.Python.ORDER_ADDITIVE],
        MULTIPLY: [' * ', Blockly.Python.ORDER_MULTIPLICATIVE],
        DIVIDE: [' / ', Blockly.Python.ORDER_MULTIPLICATIVE],
        MODULO: [' % ', Blockly.Python.ORDER_MULTIPLICATIVE]
    };
    var tuple = OPERATORS[block.getFieldValue('OPERATOR_SELECTOR')];
    var operator = tuple[0];
    var order = tuple[1];
    var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
    var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
    var code = argument0 + operator + argument1;
    return [code, order];
    // In case of 'DIVIDE', division between integers returns different results
    // in Python 2 and 3. However, is not an issue since Blockly does not
    // guarantee identical results in all languages.  To do otherwise would
    // require every operator to be wrapped in a function call.  This would kill
    // legibility of the generated code.
};

Blockly.Python['math_pi'] = function (block) {
    Blockly.Python.definitions_['import_math'] = 'import math';
    return ['math.pi', Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['math_round2'] = function (block) {
    // Math operators with single operand.
    var operator = block.getFieldValue('OPERATOR_SELECTOR');
    var code;
    var arg;
    if (operator == 'NEG') {
        // Negation is a special case given its different operator precedence.
        var code = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_UNARY_SIGN) || '0';
        return ['-' + code, Blockly.Python.ORDER_UNARY_SIGN];
    }
    Blockly.Python.definitions_['import_math'] = 'import math';
    if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
        arg = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    } else {
        arg = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE) || '0';
    }
    // First, handle cases which generate values that don't need parentheses
    // wrapping the code.
    switch (operator) {
        case 'ABS':
            code = 'math.fabs(' + arg + ')';
            break;
        case 'ROOT':
            code = 'math.sqrt(' + arg + ')';
            break;
        case 'LN':
            code = 'math.log(' + arg + ')';
            break;
        case 'LOG10':
            code = 'math.log10(' + arg + ')';
            break;
        case 'EXP':
            code = 'math.exp(' + arg + ')';
            break;
        case 'POW10':
            code = 'math.pow(10,' + arg + ')';
            break;
        case 'ROUND':
            code = 'round(' + arg + ')';
            break;
        case 'ROUNDUP':
            code = 'math.ceil(' + arg + ')';
            break;
        case 'ROUNDDOWN':
            code = 'math.floor(' + arg + ')';
            break;
        case 'SIN':
            code = 'math.sin(' + arg + ' / 180.0 * math.pi)';
            break;
        case 'COS':
            code = 'math.cos(' + arg + ' / 180.0 * math.pi)';
            break;
        case 'TAN':
            code = 'math.tan(' + arg + ' / 180.0 * math.pi)';
            break;
    }
    if (code) {
        return [code, Blockly.Python.ORDER_FUNCTION_CALL];
    }
    // Second, handle cases which generate values that may need parentheses
    // wrapping the code.
    switch (operator) {
        case 'ASIN':
            code = 'math.asin(' + arg + ') / math.pi * 180';
            break;
        case 'ACOS':
            code = 'math.acos(' + arg + ') / math.pi * 180';
            break;
        case 'ATAN':
            code = 'math.atan(' + arg + ') / math.pi * 180';
            break;
        default:
            throw Error('Unknown math operator: ' + operator);
    }
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['math_random_int2'] = function (block) {
    // Random integer between [X] and [Y].
    Blockly.Python.definitions_['import_random'] = 'import random';
    var argument0 = Blockly.Python.valueToCode(block, 'FROM', Blockly.Python.ORDER_NONE) || '0';
    var argument1 = Blockly.Python.valueToCode(block, 'TO', Blockly.Python.ORDER_NONE) || '0';
    var code = 'random.randint(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};