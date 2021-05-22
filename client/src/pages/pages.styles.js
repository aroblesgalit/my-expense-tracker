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
        padding: '30px',
    }
})(MuiGrid);

export const SignupWrapper = withStyles({
    root: {
        transform: 'translateY(-260px)',

        '@media (min-width: 960px)': {
            transform: 'translateY(0)',
        }
    }
})(MuiGrid);

export const H1Typography = withStyles({
    root: {
        fontSize: '48px',
        fontWeight: '700',
        marginBottom: '30px',
        textAlign: 'center',
        color: '#fff',

        '@media (min-width: 960px)': {
            marginBottom: '60px',
            color: '#364F6B'
        }
    }
})(MuiTypography);

export const SmallTypography = withStyles({
    root: {
        color: '#8A9BAE',
        fontSize: '14px',
        marginTop: '40px',
        textAlign: 'center'
    }
})(MuiTypography);

export const ExtraDiv = withStyles({
    root: {
        height: '260px',
        backgroundColor: '#364F6B',

        '@media (min-width: 960px)': {
            display: 'none'
        }
    }
})(MuiGrid);