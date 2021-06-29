import { makeStyles, withStyles } from '@material-ui/core'
import MuiTableRow from '@material-ui/core/TableRow'

export const BreakdownRow = withStyles({
  root: {
    backgroundColor: '#f7f7f7',

    '& p': {
      fontSize: '12px'
    }
  }
})(MuiTableRow)

export const useStyles = makeStyles(() => ({
  breakdownLabel: {
    fontSize: '12px',
    padding: '6px'
  },
  breakdownValue: {
    fontSize: '12px',
    padding: '6px'
  }
}))
