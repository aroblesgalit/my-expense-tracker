import { withStyles } from '@material-ui/core'
import MuiGrid from '@material-ui/core/Grid'
import MuiTypography from '@material-ui/core/Typography'

export const PageHeaderContainer = withStyles({
  root: {
    backgroundColor: '#364F6B',
    padding: '0 16px 16px',

    '@media (min-width: 960px)': {
      backgroundColor: 'transparent',
      padding: '50px 80px 0'
    }
  }
})(MuiGrid)

export const PageTitle = withStyles({
  root: {
    fontSize: '32px',
    fontWeight: '900',
    color: '#F0F0F0',

    '@media (min-width: 960px)': {
      fontSize: '48px',
      color: '#364F6B'
    }
  },
  h1: {
    fontFamily: "'Roboto Slab', serif"
  }
})(MuiTypography)

export const WelcomeMessage = withStyles({
  root: {
    fontSize: '14px',
    fontWeight: '900',
    color: '#F0F0F0',

    '@media (min-width: 960px)': {
      color: '#8A9BAE'
    }
  }
})(MuiTypography)

export const CurrentDate = withStyles({
  root: {
    fontSize: '12px',
    fontWeight: '300',
    color: '#F0F0F0',

    '@media (min-width: 960px)': {
      color: '#8A9BAE'
    }
  }
})(MuiTypography)
