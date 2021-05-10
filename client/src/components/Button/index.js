import React from 'react';
import './button.css';

function Button({ type, text, action, color, onClick}) {
    return (
        <input
            type={type}
            value={text}
            className={`${action}-btn ${color}`}
            onClick={onClick}
        />
    )
}

export default Button;