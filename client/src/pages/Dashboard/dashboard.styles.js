import { makeStyles, withStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    px: {
        padding: '0 32px',

        '@media (min-width: 960px)': {
            padding: '0 80px'
        }
    }
}));