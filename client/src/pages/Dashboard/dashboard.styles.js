import { withStyles } from '@material-ui/core'
import MuiPaper from '@material-ui/core/Paper'

// export const useStyles = makeStyles(() => ({}))

export const MonthlyTotalsWrapper = withStyles({
  root: {
    width: '100%',
    overflow: 'scroll',
    padding: '16px'
  }
})(MuiPaper)
