import { makeStyles, withStyles } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid';

export const useStyles = makeStyles(() => ({
    logo: {
        fontSize: '46px',
        fontWeight: '900',
        lineHeight: '0.9',
        color: '#43DDE6',
        padding: '28px 0 60px',
        width: '180px',
        position: 'relative'
    }
}));

export const FeaturesContainer = withStyles({
    root: {
        backgroundColor: '#364F6B',
        minHeight: '100vh',
        width: '100%',
        padding: '30px 52px'
    },

})(MuiGrid);

export const LogoWrapper = withStyles({
    root: {

    }
})(MuiGrid);

export const FeaturesWrapper = withStyles({
    root: {
        
    }
})(MuiGrid);