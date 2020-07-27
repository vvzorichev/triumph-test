import React from 'react';

import './main-block.css';
import ColorList from "../color-list/component";
import ColorPicker from "../colorpicker/component";

const MainBlock = () => {
    return (
        <div className="MainBlock">
            <ColorList />
            <ColorPicker />
        </div>
    );
};

export default MainBlock;