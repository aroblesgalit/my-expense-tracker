import { withStyles } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid';

export const Grid = withStyles({
    root: {
        backgroundColor: '#364F6B',
        minHeight: '100vh',
        width: '100%',
    }
})(MuiGrid)