import { makeStyles, withStyles } from '@material-ui/core'
import MuiPaper from '@material-ui/core/Paper'

export const useStyles = makeStyles(() => ({
  px: {
    padding: '0 32px',

    '@media (min-width: 960px)': {
      padding: '0 80px'
    }
  }
}))

export const MonthlyTotalsWrapper = withStyles({
  root: {
    width: '100%',
    overflow: 'scroll',
    padding: '16px'
  }
})(MuiPaper)
