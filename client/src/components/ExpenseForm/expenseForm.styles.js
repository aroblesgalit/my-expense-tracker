import { withStyles } from '@material-ui/core';
import MuiBackdrop from '@material-ui/core/Backdrop';

export const Backdrop = withStyles({
    root: {
        zIndex: '2'
    }
})(MuiBackdrop);