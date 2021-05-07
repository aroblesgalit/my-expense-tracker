import React from 'react';
import './input.css';

function Input({ type, label, name, options, border, onChange }) {
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
                            style={border && { border: `1px solid ${border}`, width: '100%' }}
                            onChange={onChange}
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