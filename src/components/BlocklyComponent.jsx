// Updated BlocklyComponent.jsx
import React, { useEffect, useRef } from 'react';
import Blockly from 'blockly';
import { Logic } from './BlockCategories/Logic';
import { Loops } from './BlockCategories/Loops';
import { Math } from './BlockCategories/Math';
import { Text } from './BlockCategories/Text';
import { Variables } from './BlockCategories/Variables';
import { Events } from './BlockCategories/Events';
import {Operators} from './BlockCategories/Operators';
import {Control} from './BlockCategories/Control';
import {Motion} from './BlockCategories/Motion'
import {Looks} from './BlockCategories/Looks';
import initializeBlockly from './InitializeBlockly';
import { useDispatch } from 'react-redux';
import { javascriptGenerator } from 'blockly/javascript';
//import { generateCode } from '../features/codeSlice'; // Make sure to import the correct action

const BlocklyComponent = () => {
  const blocklyRef = useRef(null);

  useEffect(() => {
    if (blocklyRef.current === null) {
      // Initialize Blockly with English
        Blockly.setLocale('en');
      // Construct the complete toolbox XML
      const toolboxXml = `
        <xml id="toolbox" style="display: none">
          ${Logic}
          ${Loops}
          ${Math}
          ${Text}
          ${Variables}
          ${Events}
          ${Operators}
          ${Motion}
         ${Control}
          ${Looks}
        </xml>
      `;
      initializeBlockly(toolboxXml);  // Initialize Blockly using the separate function
      blocklyRef.current = true;
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '480px' }}>
      <h1 style={{ display: 'inline-block', fontSize: '14px', marginRight: '500px' }}>Blockly Toolbox</h1>
      <h1 style={{ display: 'inline-block', fontSize: '14px' }}>Blockly Workspace</h1>
      <div className="highlighted" id="blocklyDiv" style={{ height: '100%', width: '100%', position: 'relative' }}></div>      
    </div>
  );
};

export default BlocklyComponent;