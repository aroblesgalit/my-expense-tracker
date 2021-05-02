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
                (type === 'date' || type === 'text') && (
                    <>
                        <label htmlFor={name}>{label}</label>
                        <input
                            name={name}
                            type={type}
                        />
                    </>
                )
            }
            {
                type === 'number' && (
                    <>
                        <label htmlFor={name}>{label}</label>
                        <div className='dollar-input'>
                            <input
                                name={name}
                                type={type}
                                min='0.01'
                            />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Input;