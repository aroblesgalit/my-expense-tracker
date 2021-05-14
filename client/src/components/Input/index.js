import React from 'react';
import './input.css';

const Input = React.forwardRef(({ type, label, name, options, border, onChange }, ref) => (

    <div className='wrapper input'>
        {
            type === 'dropdown' && (
                <>
                    <label htmlFor={name}>{label}</label>
                    <select name={name} ref={ref}>
                        {
                            options.map(option => <option key={option} value={option}>{option}</option>)
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
                        ref={ref}
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
                            ref={ref}
                        />
                    </div>
                </>
            )
        }
    </div>
));


export default Input;