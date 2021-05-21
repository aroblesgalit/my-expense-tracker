import { makeStyles, withStyles } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid';
import MuiTypography from '@material-ui/core/Typography';

export const useStyles = makeStyles(() => ({

}));

export const SignupContainer = withStyles({
    root: {
        backgroundColor: '#F0F0F0',
        padding: '30px'
    }
})(MuiGrid);

export const H1Typography = withStyles({
    root: {
        fontSize: '48px',
        fontWeight: '700',
        marginBottom: '60px'
    }
})(MuiTypography);