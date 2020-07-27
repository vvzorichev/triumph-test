import React from "react";

import Button from "../button";

import './button-block.css';

const ButtonBlock = ({ undoColor, changeColor, addColor }) => {
    return (
        <div className="ButtonBlock">
            <Button
                className="UndoButton"
                onClick={undoColor}
                value="undo" />
            <Button
                className="ChangeButton"
                onClick={changeColor}
                value="change" />
            <Button
                className="NewButton"
                onClick={addColor}
                value="+" />
        </div>
    );
};

export default ButtonBlock;