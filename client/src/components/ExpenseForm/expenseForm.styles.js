import { withStyles } from '@material-ui/core';
import MuiBackdrop from '@material-ui/core/Backdrop';
import MuiPaper from '@material-ui/core/Paper';
import MuiTypography from '@material-ui/core/Typography';

export const Backdrop = withStyles({
    root: {
        zIndex: '2'
    }
})(MuiBackdrop);

export const ExpenseFormWrapper = withStyles({
    root: {
        width: '100%',
        maxWidth: '400px',
        padding: '60px 38px',
        borderRadius: '10px'
    }
})(MuiPaper);

export const FormHeading = withStyles({
    root: {
        color: '#364F6B',
        fontSize: '32px',
        fontWeight: '700'
    }
})(MuiTypography);