#!/bin/sh

compressedBlocklyFullPath=/Users/balazsmaczak/Projects/RevolutionRobotics/BlocklyAndroid/blocklyjs

cd blockly

npm run prepare
python build.py $1

cp blockly_compressed.js $compressedBlocklyFullPath/Blockly/blockly_compressed.js
cp blocks_compressed.js $compressedBlocklyFullPath/Blockly/blocks_compressed.js
cp python_compressed.js $compressedBlocklyFullPath/Blockly/python_compressed.js
cp webview.html $compressedBlocklyFullPath/Blockly/webview.html
cp -R msg/ $compressedBlocklyFullPath/Blockly/msg/
cp -R media/ $compressedBlocklyFullPath/Blockly/media/


