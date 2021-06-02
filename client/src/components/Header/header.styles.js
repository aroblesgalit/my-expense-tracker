import { makeStyles, withStyles } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid';
import MuiMenuList from '@material-ui/core/MenuList';
import MuiMenuItem from '@material-ui/core/MenuItem';
import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import MuiDivider from '@material-ui/core/Divider';

export const useStyles = makeStyles(() => ({
    headerLogo: {
        maxWidth: '300px',

        '@media (min-width: 960px)': {
            maxWidth: '100%'
        }
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

export const MenuList = withStyles({
    root: {
        padding: '40px 0 0',
        display: 'none',

        '@media (min-width: 960px)': {
            display: 'block'
        }
    }
})(MuiMenuList);

export const MenuItem = withStyles({
    root: {
        padding: '0',
        color: '#8A9BAE',

        '&:not(:last-child)': {
            padding: '0 0 16px'
        },

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
        minWidth: '38px'
    }
})(MuiListItemIcon);

export const Divider = withStyles({
    root: {
        width: '100%',
        margin: '40px 0',
        backgroundColor: '#8A9BAE',

        '@media (min-width: 960px)': {
            // display: 'block'
        }
    }
})(MuiDivider);