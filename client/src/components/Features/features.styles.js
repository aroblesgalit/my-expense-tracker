import { makeStyles, withStyles } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid';
import MuiPaper from '@material-ui/core/Paper';
import MuiTypography from '@material-ui/core/Typography';
import MuiArrowBackIos from '@material-ui/icons/ArrowBackIos';
import MuiArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

export const useStyles = makeStyles(() => ({
    logo: {
        fontSize: '46px',
        fontWeight: '900',
        lineHeight: '0.9',
        color: '#43DDE6',
        padding: '28px 0 60px',
        width: '180px',
        position: 'relative'
    },
    slickDots: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '24px',
        maxWidth: '100px',

        '&>span': {
            width: '10px',
            height: '10px',
            backgroundColor: '#8A9BAE',
            borderRadius: '50%',
            cursor: 'pointer',
        }
    },
    activeSlickDot: {
        backgroundColor: '#43DDE6!important'
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

export const FeatureImagePaper = withStyles({
    root: {
        height: '420px',
        width: '100%'
    }
})(MuiPaper);

export const CaptionTypography = withStyles({
    root: {
        color: "#F0F0F0",
        fontSize: '18px',
        width: '100%'
    }
})(MuiTypography);

export const ArrowBackIos = withStyles({
    root: {
        color: '#8A9BAE',
        cursor: 'pointer',

        '&:hover': {
            color: '#43DDE6'
        }
    }
})(MuiArrowBackIos);

export const ArrowForwardIos = withStyles({
    root: {
        color: '#8A9BAE',
        cursor: 'pointer',

        '&:hover': {
            color: '#43DDE6'
        }
    }
})(MuiArrowForwardIos);