import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ExpenseConsumer } from '../../utils/ExpenseContext'

export default function AlertDialog () {
  return (
    <ExpenseConsumer>
      {value => {
        const { openAlertDialog, setOpenAlertDialog, deleteExpense } = value

        return (
          <Dialog
            open={openAlertDialog.isOpen}
            onClose={() =>
              setOpenAlertDialog({
                id: null,
                isOpen: false
              })
            }
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                Are you sure you want to delete this expense?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() =>
                  setOpenAlertDialog({
                    id: null,
                    isOpen: false
                  })
                }
                color='primary'
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  deleteExpense(openAlertDialog.id)
                  setOpenAlertDialog({
                    id: null,
                    isOpen: false
                  })
                }}
                color='primary'
                autoFocus
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        )
      }}
    </ExpenseConsumer>
  )
}
