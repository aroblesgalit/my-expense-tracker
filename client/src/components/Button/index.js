import React from 'react';
import './button.css';

function Button({ text }) {
    return (
        <button className='primary-btn' type='button'>{text}</button>
    )
}

export default Button;