import { makeStyles, withStyles } from '@material-ui/core'
import MuiTableRow from '@material-ui/core/TableRow'
import MuiTableCell from '@material-ui/core/TableCell'

export const BreakdownRow = withStyles({
  root: {
    backgroundColor: '#f7f7f7',

    '& p': {
      fontSize: '12px'
    }
  }
})(MuiTableRow)

export const TableHeadCell = withStyles({
  root: {
    fontSize: '12px',
    fontWeight: '400',
    color: '#8A9BAE'
  }
})(MuiTableCell)

export const TableCell = withStyles({
  sizeSmall: {
    width: '40px'
  }
})(MuiTableCell)

export const useStyles = makeStyles(() => ({
  breakdownLabel: {
    // fontSize: '12px',
    padding: '6px'
  },
  breakdownValue: {
    fontSize: '12px',
    padding: '6px',

    '@media (min-width: 960px)': {
      fontSize: '14px'
    }
  }
}))
