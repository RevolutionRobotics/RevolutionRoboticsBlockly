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
    var OPERATORS = {
        'ABS': ['math.fabs({})', Blockly.Python.ORDER_FUNCTION_CALL],
        'ROOT': ['math.sqrt({})', Blockly.Python.ORDER_FUNCTION_CALL],
        'LN': ['math.log({})', Blockly.Python.ORDER_FUNCTION_CALL],
        'LOG10': ['math.log10({})', Blockly.Python.ORDER_FUNCTION_CALL],
        'EXP': ['math.exp({})', Blockly.Python.ORDER_FUNCTION_CALL],
        'POW10': ['math.pow(10, {})', Blockly.Python.ORDER_FUNCTION_CALL],
        'ROUND': ['round({})', Blockly.Python.ORDER_FUNCTION_CALL],
        'ROUNDUP': ['math.ceil({})', Blockly.Python.ORDER_FUNCTION_CALL],
        'ROUNDDOWN': ['math.floor({})', Blockly.Python.ORDER_FUNCTION_CALL],
        'SIN': ['math.sin({} / 180.0 * math.pi)', Blockly.Python.ORDER_FUNCTION_CALL],
        'COS': ['math.cos({} / 180.0 * math.pi)', Blockly.Python.ORDER_FUNCTION_CALL],
        'TAN': ['math.tan({} / 180.0 * math.pi)', Blockly.Python.ORDER_FUNCTION_CALL],

        'ASIN': ['math.asin({}) / math.pi * 180', Blockly.Python.ORDER_MULTIPLICATIVE],
        'ACOS': ['math.acos({}) / math.pi * 180', Blockly.Python.ORDER_MULTIPLICATIVE],
        'ATAN': ['math.atan({}) / math.pi * 180', Blockly.Python.ORDER_MULTIPLICATIVE]
    }

    if (!(operator in OPERATORS))
    {
        throw Error('Unknown math operator: ' + operator);
    }

    var tuple = OPERATORS[operator];
    var pattern = tuple[0];
    var order = tuple[1];

    var code = pattern.replace('{}', arg);

    return [code, order];
};

Blockly.Python['math_random_int2'] = function (block) {
    // Random integer between [X] and [Y].
    Blockly.Python.definitions_['import_random'] = 'import random';
    var argument0 = Blockly.Python.valueToCode(block, 'FROM', Blockly.Python.ORDER_NONE) || '0';
    var argument1 = Blockly.Python.valueToCode(block, 'TO', Blockly.Python.ORDER_NONE) || '0';
    var code = `random.randint(${argument0}, ${argument1})`;
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};