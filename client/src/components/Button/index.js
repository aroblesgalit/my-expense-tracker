import React from 'react';
import './button.css';

function Button({ type, text, onClick, backgroundColor }) {
    return (
        <input
            type={type}
            value={text}
            onClick={onClick}
            className='primary-btn'
            style={backgroundColor && { backgroundColor: `${backgroundColor}` }}
        />
    )
}

export default Button;