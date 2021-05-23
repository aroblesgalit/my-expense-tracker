import { makeStyles, withStyles } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid';
import MuiMenuItem from '@material-ui/core/MenuItem';
import MuiListItemIcon from '@material-ui/core/ListItemIcon';

export const useStyles = makeStyles(() => ({
    headerLogo: {
        maxWidth: '100%'
    },
    active: {
        '&>div': {
            color: '#43DDE6'
        },

        '& a': {
            color: '#43DDE6!important'
        },
        
        '&>span:first-child': {
            color: '#43DDE6'
        }
    }
}));

export const HeaderContainer = withStyles({
    root: {
        backgroundColor: '#364F6B',
        fontFamily: 'Roboto, sans-serif',
        padding: '32px',
        height: '100vh'
    }
})(MuiGrid);

export const NavWrapper = withStyles({
    root: {
        
    }
})(MuiGrid);

export const MenuItem = withStyles({
    root: {
        padding: '0',
        color: '#8A9BAE',

        '& a': {
            textDecoration: 'none',
            color: '#8A9BAE',
        },

        '&:hover': {
            backgroundColor: 'transparent',
            color: '#43DDE6'
        },

        '&:hover > div': {
            color: '#43DDE6'
        },

        '&:hover a': {
            color: '#43DDE6'
        }
    }
})(MuiMenuItem);

export const ListItemIcon = withStyles({
    root: {
        color: '#8A9BAE',
    }
})(MuiListItemIcon);