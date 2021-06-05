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
    },
}));

export const RightContainer = withStyles({
    root: {
        backgroundColor: '#F0F0F0',
        padding: '30px',
        maxHeight: '440px',

        '@media (min-width: 960px)': {
            minHeight: '100vh',
        }
    }
})(MuiGrid);

export const RightWrapper = withStyles({
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
        color: '#fff',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',

        '@media (min-width: 960px)': {
            marginBottom: '60px',
            color: '#364F6B',
            height: '111px'
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