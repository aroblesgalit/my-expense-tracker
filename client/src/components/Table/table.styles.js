import { makeStyles, withStyles } from '@material-ui/core'
import MuiTableContainer from '@material-ui/core/TableContainer'
import MuiTableCell from '@material-ui/core/TableCell'
import MuiTablePagination from '@material-ui/core/TablePagination'

export const useStyles = makeStyles(() => ({
  row: {
    '& > :last-child': {
      opacity: '0',

      '& > img': {
        width: '16px',
        cursor: 'pointer'
        // filter:
        //   'invert(72%) sepia(37%) saturate(188%) hue-rotate(171deg) brightness(80%) contrast(81%)'
      }
    },
    '&:hover': {
      backgroundColor: 'rgba(67,221,230,.2)',

      '& :last-child': {
        opacity: '1'
      }
    }
  }
}))

export const TableContainer = withStyles({
  root: {
    width: '100%',
    maxWidth: '900px',
    borderRadius: '10px'
  }
})(MuiTableContainer)

export const TableHeadCell = withStyles({
  root: {
    fontSize: '12px',
    fontWeight: '400',
    color: '#8A9BAE'
  }
})(MuiTableCell)

export const TablePagination = withStyles({
  root: {
    fontSize: '12px'
  },
  caption: {
    fontSize: '12px'
  },
  menuItem: {
    fontSize: '12px'
  }
})(MuiTablePagination)
