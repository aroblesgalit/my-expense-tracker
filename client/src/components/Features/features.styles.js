import { makeStyles, withStyles } from '@material-ui/core'
import MuiGrid from '@material-ui/core/Grid'
import MuiPaper from '@material-ui/core/Paper'
import MuiTypography from '@material-ui/core/Typography'
import MuiArrowBackIos from '@material-ui/icons/ArrowBackIos'
import MuiArrowForwardIos from '@material-ui/icons/ArrowForwardIos'

export const useStyles = makeStyles(() => ({
  logo: {
    width: '220px',

    '@media (min-width: 960px)': {
      width: 'auto'
    }
  },
  slickDots: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    maxWidth: '100px',

    '&>span': {
      width: '10px',
      height: '10px',
      backgroundColor: '#8A9BAE',
      borderRadius: '50%',
      cursor: 'pointer'
    }
  },
  activeSlickDot: {
    backgroundColor: '#43DDE6!important'
  }
}))

export const FeaturesContainer = withStyles({
  root: {
    backgroundColor: '#364F6B',
    minHeight: 'auto',
    width: '100%',
    padding: '40px 20px',

    '@media (min-width: 960px)': {
      minHeight: '100vh'
    }
  }
})(MuiGrid)

export const LogoWrapper = withStyles({
  root: {
    maxHeight: '111px',
    marginBottom: '50px'
  }
})(MuiGrid)

export const FeatureImagePaper = withStyles({
  root: {
    height: '320px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px',
    fontWeight: '900',
    color: '#f0f0f0',
    textAlign: 'center',
    borderRadius: '10px',
    overflow: 'hidden',

    '&>img': {
      height: '100%'
    },

    '@media (min-width: 960px)': {
      height: '420px',
      fontSize: '42px'
    }
  }
})(MuiPaper)

export const CaptionTypography = withStyles({
  root: {
    color: '#F0F0F0',
    fontSize: '18px',
    width: '100%',
    marginTop: '20px',

    '& > a': {
      color: '#43DDE6',
      textDecoration: 'none'
    }
  }
})(MuiTypography)

export const ArrowBackIos = withStyles({
  root: {
    color: '#8A9BAE',
    cursor: 'pointer',

    '&:hover': {
      color: '#43DDE6'
    }
  }
})(MuiArrowBackIos)

export const ArrowForwardIos = withStyles({
  root: {
    color: '#8A9BAE',
    cursor: 'pointer',

    '&:hover': {
      color: '#43DDE6'
    }
  }
})(MuiArrowForwardIos)
