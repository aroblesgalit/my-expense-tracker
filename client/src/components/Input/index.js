import { FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import React from 'react';
import './input.styles';
import { Input, InputLabel } from './input.styles.js';

const CustomInput = React.forwardRef(({ type, label, name, options, border, onChange }, ref) => (

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
                <FormControl>
                    {/* <label htmlFor={name}>{label}</label>
                    <input
                        name={name}
                        type={type}
                        style={border && { border: `1px solid ${border}`, width: '100%' }}
                        onChange={onChange}
                        ref={ref}
                    /> */}
                    <InputLabel htmlFor={name}>{label}</InputLabel>
                    <Input
                        id={name}
                        name={name}
                        type={type}
                        onChange={onChange}
                        inputRef={ref}
                    />
                </FormControl>
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

export const TextInput = React.forwardRef(({ type, label, name, onChange }, ref) => {
    return (
        <>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Input
                id={name}
                name={name}
                type={type}
                onChange={onChange}
                inputRef={ref}
                fullWidth
                disableUnderline
            />
        </>
    )
});

export const SelectInput = React.forwardRef(({ name, label, options }, ref) => {
    <>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <TextField
            id={name}
            inputRef={ref}
            select
        >
            {
                options.map((option, i) => <MenuItem key={`${i}-${option}`} value={option}>{option}</MenuItem>)
            }
        </TextField>
    </>
});


export default CustomInput;