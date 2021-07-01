import { makeStyles, withStyles } from '@material-ui/core'
import MuiPaper from '@material-ui/core/Paper'
import MuiBox from '@material-ui/core/Box'
import MuiGrid from '@material-ui/core/Grid'

export const MonthlyTotalsWrapper = withStyles({
  root: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: '10px'
  }
})(MuiPaper)

export const ViewIconWrapper = withStyles({
  root: {
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    border: '1px solid #8A9BAE',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& > img': {
      width: '16px',
      filter:
        'invert(72%) sepia(37%) saturate(188%) hue-rotate(171deg) brightness(80%) contrast(81%)'
    },

    '&:hover': {
      border: '1px solid #43DDE6',
      backgroundColor: '#43DDE6',

      '& > img': {
        filter:
          'invert(100%) sepia(3%) saturate(0%) hue-rotate(359deg) brightness(116%) contrast(100%)'
      }
    }
  }
})(MuiBox)

export const TotalsContainer = withStyles({
  root: {
    width: '100%',
    backgroundColor: 'rgba(54, 79, 107, 0.15)',
    padding: '16px',
    marginTop: '32px',

    '@media (min-width: 680px)': {
      padding: '32px'
    },

    '@media (min-width: 960px)': {
      padding: '32px 80px'
    }
  }
})(MuiGrid)

export const useStyles = makeStyles(() => ({
  active: {
    border: '1px solid #43DDE6',
    backgroundColor: '#43DDE6',

    '& > img': {
      filter:
        'invert(100%) sepia(3%) saturate(0%) hue-rotate(359deg) brightness(116%) contrast(100%)'
    }
  }
}))
