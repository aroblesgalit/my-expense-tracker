import { makeStyles, withStyles } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid';

export const useStyles = makeStyles(() => ({

}));

export const SignupContainer = withStyles({
    root: {
        backgroundColor: '#F0F0F0',
        padding: '30px'
    }
})(MuiGrid);