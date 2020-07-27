import React from "react";

import './button.css';

const ButtonList = ({ className, onClick, value }) => {
    return (
        <button
            className={`Button ${className}`}
            onClick={onClick} >
            {value}
        </button>
    );
};

export default ButtonList;