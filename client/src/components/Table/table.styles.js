import { withStyles } from '@material-ui/core';
import MuiTableContainer from '@material-ui/core/TableContainer';

export const TableContainer = withStyles({
    root: {
        width: '100%',
        maxWidth: '900px',
        borderRadius: '10px' 
    }
})(MuiTableContainer);