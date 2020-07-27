import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

import ButtonBlock from "../button-block/component";

import './color-picker.css';

const ColorPicker = ({ selectedColor: { color }, addColor, changeColor }) => {

    const [newColor, setNewColor] = useState(color);

    return (
        <div className="ColorPicker" >
            <div className="ExampleBlock">
                <div className="OldBlock" style={{backgroundColor: color}} />
                <div className="NewBlock" style={{backgroundColor: newColor}} />
            </div>
            <div className="ColorPicker-Wrapper" >
                <ChromePicker
                    color={newColor}
                    width="100%"
                    disableAlpha={true}
                    onChange={(color) => setNewColor(color.hex)} />
            </div>
            <ButtonBlock
                addColor={() => addColor(newColor)}
                changeColor={() => changeColor(newColor)}
                undoColor={() => setNewColor(color)} />
        </div>
    );
};

export default ColorPicker;