'use strict';

goog.provide('Blockly.NativeBridge');

function map2DArrayToKeyValueArray(array) {
  return array.map(function(element) {
    if (Array.isArray(element)) return { key: element[1], value: element[0] };

    return { key: element, value: element };
  });
}

function mapOptionSelectorTypeToTitle(promptType) {
  if (promptType.includes('direction_selector')) promptType = 'direction_selector';
  if (promptType.includes('logic_boolean.bool')) promptType = 'logic_boolean.bool';
  if (promptType.includes('unit_speed_selector')) promptType = 'unit_speed_selector';

  switch (promptType) {
    case 'direction_selector':
      return 'Choose a direction!';
      break;
    case 'block_drive.unit_rotation_selector':
      return 'Make your choice!';
      break;
    case 'unit_speed_selector':
    case 'block_motor.unit_limit_selector':
    case 'block_stop_motor.stop_action_selector':
    case 'block_stop_all_motors.stop_all_action_selector':
      return 'What is your preference?';
      break;
    case 'logic_boolean.bool':
      return 'True or False?';
      break;
    case 'math_arithmetic2.operator_selector':
      return 'Which operation to perform?';
      break;
    case 'math_trig2.math_trig_selector':
      return 'Pick a function!';
      break;
    case 'math_round2.operator_selector':
      return 'How to round?';
      break;
  }

  return 'Choose an option!';
}

function transformBlockContextTitle(title) {
  return title
    .replace('block_', '')
    .replace('2', '')
    .replace(/_/g, ' ');
}

function calculateMinMaxValueForSlider(sourceBlock) {
  var driveBlockTypes = ["block_drive", "block_turn", "block_set_speed"];
  var parentInputList = sourceBlock.getParent().inputList;
  var isDriveBlock = (driveBlockTypes.indexOf(sourceBlock.getParent().type) > -1);
  var lastField = parentInputList[parentInputList.length - 1].fieldRow[0];
  var fieldValue = lastField.getValue();
  return {
    min: 0,
    max: (fieldValue == 'Motor.UNIT_SPEED_RPM' || fieldValue == 'rpm' ) ? (isDriveBlock ? 120 : 150) : 100
  };
}

Blockly.NativeBridge.CONTEXT_ACTION_TYPE = {
  ADD_COMMENT: 'ADD_COMMENT',
  REMOVE_COMMENT: 'REMOVE_COMMENT',
  DELETE_BLOCK: 'DELETE_BLOCK',
  HELP: 'HELP',
  DUPLICATE_BLOCK: 'DUPLICATE_BLOCK'
};

Blockly.NativeBridge.createPromptType = function(sourceBlock, field) {
  if (sourceBlock.isShadow()) {
    var parentBlock = sourceBlock.getParent();
    var childrenIDs = parentBlock.getChildren().map(function(child) {
      return child.id;
    });
    var index = childrenIDs.findIndex(function(id) {
      return sourceBlock.id === id;
    });

    var inputNames = parentBlock.inputList
      .filter(function(input) {
        return input.type === 1;
      })
      .map(function(input) {
        return input.name;
      });

    var fieldName = inputNames[index].toLowerCase();

    return `${parentBlock.type}.${fieldName}.${sourceBlock.type}.${field.name.toLowerCase()}`;
  }

  return `${sourceBlock.type}.${field.name.toLowerCase()}`;
};

Blockly.NativeBridge.optionSelector = function(type, defaultKey, options, callback) {
  var optionSelectorObject = {
    title: mapOptionSelectorTypeToTitle(type),
    defaultKey: defaultKey,
    options: map2DArrayToKeyValueArray(options)
  };

  Blockly.prompt(type, JSON.stringify(optionSelectorObject), callback);
};

Blockly.NativeBridge.input = function(sourceBlock, type, title, defaultInput, callback) {
  var textInputObject = {    
    defaultInput: defaultInput
  };
  var finalTitle = title;
  if (sourceBlock) {
    if (sourceBlock.type === 'block_motor' || sourceBlock.type === 'spin_motor'
      || sourceBlock.type === 'block_stop_motor') {
      finalTitle = 'Change motor:'
      textInputObject['subtitle'] = 'Motor:';  
    }
    if (sourceBlock.type === 'block_ultrasonic_sensor' || sourceBlock.type === 'block_bumper' || 
        sourceBlock.type === 'block_is_object_near' || sourceBlock.type === 'block_wait_for_button_press') {
      finalTitle = 'Change sensor:'
      textInputObject['subtitle'] = 'Sensor:';  
    }        
  }  

  textInputObject['title'] = finalTitle;  

  Blockly.prompt(type, JSON.stringify(textInputObject), callback);
};

Blockly.NativeBridge.slider = function(type, title, defaultValue, sourceBlock, callback) {
  var minMax = calculateMinMaxValueForSlider(sourceBlock);
  var sliderObject = {
    title: title,
    defaultValue: defaultValue,
    minimum: minMax.min,
    maximum: minMax.max
  };

  Blockly.prompt(type, JSON.stringify(sliderObject), callback);
};

Blockly.NativeBridge.blockContext = function(title, comment, callback) {
  var contextObject = {
    title: transformBlockContextTitle(title),
    comment: comment
  };

  Blockly.prompt('block_context', JSON.stringify(contextObject), callback);
};
