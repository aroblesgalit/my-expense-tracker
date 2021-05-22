import { makeStyles, withStyles } from '@material-ui/core';
import MuiPaper from '@material-ui/core/Paper';

export const useStyles = makeStyles(() => ({
    loginForm: {
        width: '100%'
    },
    mt1: {
        marginTop: '10px'
    },
    mt3: {
        marginTop: '30px'
    }
}));

export const FormWrapper = withStyles({
    root: {
        width: '100%',
        maxWidth: '410px',
        padding: '60px 38px',
        borderRadius: '10px'
    }
})(MuiPaper);