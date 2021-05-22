import { makeStyles, withStyles } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid';

export const useStyles = makeStyles(() => ({
    
}));

export const HeaderContainer = withStyles({
    root: {
        backgroundColor: '#364F6B',
        fontFamily: 'Roboto, sans-serif',
        padding: '32px',
        height: '100vh'
    }
})(MuiGrid);