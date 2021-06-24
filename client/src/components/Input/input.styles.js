import { withStyles } from '@material-ui/core'
import MuiInput from '@material-ui/core/Input'
import MuiInputLabel from '@material-ui/core/InputLabel'
import MuiFormControl from '@material-ui/core/FormControl'

export const FormControl = withStyles({
  root: {
    width: '100%'
  }
})(MuiFormControl)

export const InputLabel = withStyles({
  root: {
    fontSize: '12px',
    color: '#8A9BAE',
    marginBottom: '8px'
  }
})(MuiInputLabel)

export const Input = withStyles({
  root: {
    fontSize: '16px',
    color: '#364F6B',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #CDCDCD',
    cursor: 'pointer',
    height: '40px',
    width: '100%'
  }
})(MuiInput)
