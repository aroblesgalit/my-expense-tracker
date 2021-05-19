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

export const Grid = withStyles({
    root: {
        backgroundColor: '#364F6B',
        minHeight: '100vh',
        width: '100%',
    },

})(MuiGrid)