import { withStyles } from '@material-ui/core';
import MuiTypography from '@material-ui/core/Typography';
import MuiPaper from '@material-ui/core/Paper';

export const CardContainer = withStyles({
    root: {
        padding: '16px 20px 12px',
        borderRadius: '10px'
    }
})(MuiPaper);

export const CardTitle = withStyles({
    root: {
        color: '#8A9BAE',
        fontSize: '14px',
        fontWeight: '400'
    }
})(MuiTypography);

export const CardValue = withStyles({
    root: {
        color: '#FC5185',
        fontSize: '28px',
        fontWeight: '700',

        '@media (min-width: 960px)': {
            fontSize: '38px',
        }
    }
})(MuiTypography);