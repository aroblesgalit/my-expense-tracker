import MuiInput from '@material-ui/core/Input';

export const Input = withStyles({
    root: {
        fontSize: '16px',
        color: '#364F6B',
        padding: '12px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer'
    }
})(MuiInput);