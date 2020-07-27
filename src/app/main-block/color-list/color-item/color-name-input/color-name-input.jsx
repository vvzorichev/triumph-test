import React, { useState } from 'react';

import './color-name-input.css';

const ColorNameInput = ({ setColorName, id }) => {
    const [name, setName] = useState('');

    return (
        <div className="ColorNameInput">
            <input
                className="ColorNameInput-Text"
                type="text"
                placeholder="Enter color name"
                required
                autoFocus
                value={name}
                onChange={(event) => setName(event.target.value)}/>
            <button
                className="ColorNameInput-AddColorButton"
                type="submit"
                onClick={() => setColorName(id, name)}>
                &#10004;
            </button>
        </div>
    )
}

export default ColorNameInput;