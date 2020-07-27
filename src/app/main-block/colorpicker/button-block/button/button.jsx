import React from "react";

import './button.css';

const Button = ({ className, onClick, value}) => {
    return (
        <button
            className={`Button ${className}`}
            onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;