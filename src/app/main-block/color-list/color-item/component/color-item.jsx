import React from 'react';

import './color-item.css';

import ColorNameInput from "../color-name-input";
import ButtonBlock from "../button-block/component";

const ColorItem = ({
   color: { name, color },
   id,
   deleteColor,
   chooseColor,
   setColorName,
   selectedColorId,
}) => {

    const addClass = id === selectedColorId ? 'selected' : null;

    const isNamed = !!name;

    const colorNameInput = name ? null : <ColorNameInput setColorName={setColorName} id={id}/>;

    const colorName = !name ? null :
        <div className={`ColorItem-ColorName ${name ? null : 'noName'}`}
             onClick={() => chooseColor(id)}>
            {name}
        </div>;

    if (selectedColorId !== null && document.documentElement.clientWidth < 600) {
        return (
            <div className={`ColorItem ${addClass}`}
                 style={{ width: '90px' }}>
                <div className="ColorItem-ColorViewer"
                     style={{ backgroundColor: color, width: '100%' }}
                     onClick={() => chooseColor(id)} />
            </div>
        );
    }

    return (
        <div className={`ColorItem ${addClass}`}>
            <div className="ColorItem-ColorViewer"
                 style={{ backgroundColor: color }}
                 onClick={() => chooseColor(id)} />
            {colorName}
            {colorNameInput}
            <ButtonBlock deleteColor={deleteColor} id={id} isNamed={isNamed}/>
        </div>
    )
}

export default ColorItem;