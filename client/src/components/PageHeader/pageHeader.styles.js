import { withStyles } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid';
import MuiTypography from '@material-ui/core/Typography';

export const PageHeaderContainer = withStyles({
    root: {
        backgroundColor: '#364F6B',
        padding: '16px 32px',

        '@media (min-width: 960px)': {
            backgroundColor: 'transparent',
            padding: '50px 80px 0'
        }
    }
})(MuiGrid);

export const PageTitle = withStyles({
    root: {
        fontSize: '42px',
        fontWeight: '700',
        color: '#F0F0F0',

        '@media (min-width: 960px)': {
            fontSize: '48px',
            color: '#364F6B',
        }
    }
})(MuiTypography);

export const WelcomeMessage = withStyles({
    root: {
        fontSize: '14px',
        fontWeight: '700',
        textAlign: 'right',
        color: '#F0F0F0',

        '@media (min-width: 960px)': {
            textAlign: 'left',
            color: '#8A9BAE',
        }
    }
})(MuiTypography);