import { makeStyles, withStyles } from '@material-ui/core'
import MuiBackdrop from '@material-ui/core/Backdrop'
import MuiPaper from '@material-ui/core/Paper'
import MuiTypography from '@material-ui/core/Typography'

export const useStyles = makeStyles(() => ({
  closeIconWrapper: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  padTop16: {
    paddingTop: '16px'
  },
  padTop32: {
    paddingTop: '32px'
  },
  pointer: {
    cursor: 'pointer'
  },
  w100: {
    width: '100%'
  }
}))

export const Backdrop = withStyles({
  root: {
    zIndex: '2'
  }
})(MuiBackdrop)

export const ExpenseFormWrapper = withStyles({
  root: {
    width: '400px',
    maxWidth: '90%',
    padding: '20px 20px 30px',
    borderRadius: '10px'
  }
})(MuiPaper)

export const FormHeading = withStyles({
  root: {
    color: '#364F6B',
    fontSize: '32px',
    fontWeight: '700'
  }
})(MuiTypography)
