import React from 'react';
import './input.css';

function Input({ type, label, name, options }) {
    return (
        <div className='wrapper input'>
            {
                type === 'dropdown' && (
                    <>
                        <label htmlFor={name}>{label}</label>
                        <select name={name}>
                            {
                                options.map(option => <option key={option.toLowerCase()} value={option.toLowerCase()}>{option}</option>)
                            }
                        </select>
                    </>
                )
            }
            {
                type === 'date' && (
                    <>
                        <label htmlFor={name}>{label}</label>
                        <input 
                            name={name}
                            type={type}
                        />
                    </>
                )
            }
        </div>
    )
}

export default Input;