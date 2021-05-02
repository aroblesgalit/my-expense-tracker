import React from 'react';
import './input.css';

function Input({ type, label, name, options }) {
    return (
        <>
            {
                type === 'dropdown' ? (
                    <div className='wrapper input'>
                        <label htmlFor={name}>{label}</label>
                        <select name={name}>
                            {
                                options.map(option => <option key={option.toLowerCase()} value={option.toLowerCase()}>{option}</option>)
                            }
                        </select>
                    </div>
                ) : (
                    <h2>Hello World</h2>
                )
            }
        </>

    )
}

export default Input;