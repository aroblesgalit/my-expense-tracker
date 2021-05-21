import { makeStyles, withStyles } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid';
import MuiTypography from '@material-ui/core/Typography';

export const useStyles = makeStyles(() => ({
    link: {
        fontWeight: '700',
        color: '#43DDE6',

        '&:hover': {
            color: '#0DC4CE'
        }
    }
}));

export const SignupContainer = withStyles({
    root: {
        backgroundColor: '#F0F0F0',
        padding: '30px'
    }
})(MuiGrid);

export const H1Typography = withStyles({
    root: {
        fontSize: '48px',
        fontWeight: '700',
        marginBottom: '60px'
    }
})(MuiTypography);

export const SmallTypography = withStyles({
    root: {
        color: '#8A9BAE',
        fontSize: '14px',
        marginTop: '40px'
    }
})(MuiTypography);