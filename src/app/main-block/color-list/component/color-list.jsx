import React from 'react';

import './color-list.css';

import ColorItem from "../color-item/component";

const ColorList = ({ colors, newColor }) => {

    return (
        <div className="ColorList">
            {
                colors.map((color, id) => {
                    return (
                        <ColorItem
                            key={id}
                            id={id}
                            color={color}/>
                    )
                })
            }
            <div className="ColorList-NewColorButton" onClick={() => newColor()}>
                New color
            </div>
        </div>
    );
};

export default ColorList;