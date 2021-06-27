import { makeStyles, withStyles } from '@material-ui/core'
import MuiPaper from '@material-ui/core/Paper'

export const useStyles = makeStyles(() => ({
  viewIcon: {
    width: '32px',
    cursor: 'pointer',
    padding: '10px',
    border: '1px solid #8A9BAE',
    borderRadius: '4px'
  },
  active: {
    border: '1px solid #43DDE6',
    backgroundColor: '#43DDE6',
    filter:
      'invert(100%) sepia(3%) saturate(0%) hue-rotate(359deg) brightness(116%) contrast(100%)'
  }
}))

export const MonthlyTotalsWrapper = withStyles({
  root: {
    width: '100%',
    padding: '16px'
  }
})(MuiPaper)
