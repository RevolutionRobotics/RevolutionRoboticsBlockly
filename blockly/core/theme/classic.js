/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2018 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Classic theme.
 * Contains multi colored border to create shadow effect.
 */

'use strict';

goog.provide('Blockly.Themes.Classic');

goog.require('Blockly.Theme');

var defaultBlockStyles = {
  "colour_blocks":{
    "colourPrimary": "#f8bc08",
    "colourSecondary":"#FFFFFF",
    "colourTertiary":"#f8bc08"
  },
  "motor_blocks": {
    "colourPrimary": "#e60312",
    "colourSecondary":"#FFFFFF",
    "colourTertiary":"#e60312"
  },
  "time_blocks": {
    "colourPrimary" : "#868a8c",
    "colourSecondary":"#FFFFFF",
    "colourTertiary":"#868a8c"
  },
  "light_blocks": {
    "colourPrimary": "#e51777"
  },
  "sound_blocks": {
    "colourPrimary" : "#5e2882"
  },
  "list_blocks": {
    "colourPrimary": "260"
  },
  "logic_blocks": {
    "colourPrimary": "#0264ff",
    "colourSecondary":"#FFFFFF",
    "colourTertiary":"#0264ff"
  },
  "loop_blocks": {
    "colourPrimary": "#dd7d3a",
    "colourSecondary":"#FFFFFF",
    "colourTertiary":"#dd7d3a"
  },
  "math_blocks": {
    "colourPrimary": "#4dc88f",
    "colourSecondary":"#FFFFFF",
    "colourTertiary":"#4dc88f"
  },
  "procedure_blocks": {
    "colourPrimary": "#6ab3c1",
    "colourSecondary":"#FFFFFF",
    "colourTertiary":"#6ab3c1"
  },
  "text_blocks": {
    "colourPrimary": "#000000",
    "colourSecondary":"#000000",
    "colourTertiary":"#000000"
  },
  "variable_blocks": {
    "colourPrimary": "#cc7be6",
    "colourSecondary":"#FFFFFF",
    "colourTertiary":"#cc7be6"
  },
  "variable_dynamic_blocks":{
    "colourPrimary": "#cc7be6",
    "colourSecondary":"#FFFFFF",
    "colourTertiary":"#cc7be6"
  },
  "hat_blocks":{
    "colourPrimary":"330",
    "hat":"cap"
  }
};

var categoryStyles = {
  "colour_category":{
    "colour": "20"
  },
  "motor_category" : {
    "color": "#e60312"
  },
  "list_category": {
    "colour": "260"
  },
  "logic_category": {
    "colour": "#0264ff"
  },
  "loop_category": {
    "colour": "#dd7d3a"
  },
  "math_category": {
    "colour": "#4dc88f"
  },
  "procedure_category": {
    "colour": "#6ab3c1"
  },
  "time_category": {
    "colour": "#868a8c"
  },
  "text_category": {
    "colour": "160"
  },
  "variable_category": {
    "colour": "#cc7be6"
  },
  "variable_dynamic_category":{
    "colour": "310"
  }
};

Blockly.Themes.Classic = new Blockly.Theme(defaultBlockStyles, categoryStyles);
