import React from 'react'
// import './input.styles'
import {
  useStyles,
  FormControl,
  Input,
  InputLabel,
  Select
} from './input.styles.js'
import { MenuItem } from '@material-ui/core'

const CustomInput = React.forwardRef(
  ({ type, label, name, options, border, onChange, value }, ref) => {
    const classes = useStyles()
    return (
      <div className='wrapper input'>
        {type === 'dropdown' && (
          <React.Fragment>
            <label className={classes.inputLabel} htmlFor={name}>
              {label}
            </label>
            <select name={name} ref={ref} value={value} onChange={onChange}>
              {options.map(option => (
                <option key={option} value={option}>{`${option
                  .charAt(0)
                  .toUpperCase()}${option.slice(1)}`}</option>
              ))}
            </select>
          </React.Fragment>
        )}
        {(type === 'date' || type === 'text') && (
          <FormControl>
            {/* <label htmlFor={name}>{label}</label>
                    <input
                        name={name}
                        type={type}
                        style={border && { border: `1px solid ${border}`, width: '100%' }}
                        onChange={onChange}
                        ref={ref}
                    /> */}
            {/* <InputLabel htmlFor={name}>{label}</InputLabel> */}
            <label className={classes.inputLabel} htmlFor={name}>
              {label}
            </label>
            <Input
              id={name}
              name={name}
              type={type}
              onChange={onChange}
              inputRef={ref}
            />
          </FormControl>
        )}
        {type === 'number' && (
          <React.Fragment>
            <label className={classes.inputLabel} htmlFor={name}>
              {label}
            </label>
            <div className='dollar-input'>
              <input name={name} type={type} min='0.01' ref={ref} />
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
)

export const TextInput = React.forwardRef(
  ({ type, label, name, onChange }, ref) => {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
)

export const SelectInput = ({ name, label, options, value, onChange }) => {
  return (
    <React.Fragment>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        id={name}
        name={name}
        value={value}
        onChange={e => onChange(e)}
        disableUnderline
      >
        {options.map((option, i) => (
          <MenuItem key={`${i}-${option}`} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  )
}

export default CustomInput
