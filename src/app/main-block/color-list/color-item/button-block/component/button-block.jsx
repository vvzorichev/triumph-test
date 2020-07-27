import React from "react";

import './button-block.css';

import Button from "../button";

const ButtonBlockList = ({ id, deleteColor, isNamed, moveUpColor, moveDownColor }) => {
    return (
        <div className="ButtonBlockList">
            {   !isNamed ||
                <Button
                    className="ColorItem-MoveUpColorButton"
                    onClick={() => moveUpColor(id)}
                    value="&#8593;" />
            }
            {   !isNamed ||
                <Button
                    className="ColorItem-MoveDownColorButton"
                    onClick={() => moveDownColor(id)}
                    value=" &#8595;" />
            }
                <Button
                    className="ColorItem-RemoveColorButton"
                    onClick={() => deleteColor(id)}
                    value="&#10006;" />
        </div>

    );
};

export default ButtonBlockList;