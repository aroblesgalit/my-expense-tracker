import React from 'react'
import {
  useStyles,
  Backdrop,
  ExpenseFormWrapper,
  FormHeading
} from './expenseForm.styles'
import { Grid } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { ExpenseConsumer } from '../../utils/ExpenseContext'
import { TextInput, SelectInput } from '../Input'
import Button from '../Button'
import AlertMessage from '../AlertMessage'

function ExpenseForm () {
  const classes = useStyles()

  return (
    <ExpenseConsumer>
      {value => {
        const {
          newExpense,
          setNewExpense,
          expDateRef,
          expDescRef,
          expAmountRef,
          addExpense,
          categories,
          category,
          onExpenseInputChange,
          displayDate,
          addResultMsg,
          btnDisabled
        } = value
        const dateMonth =
          displayDate.month + 1 < 10
            ? '0' + (displayDate.month + 1)
            : displayDate.month + 1
        const dateDay =
          displayDate.day < 10 ? '0' + displayDate.day : displayDate.day
        return (
          <Backdrop open={newExpense}>
            <ExpenseFormWrapper>
              <div className={classes.closeIconWrapper}>
                <Close
                  fontSize='small'
                  onClick={() => setNewExpense(false)}
                  className={classes.pointer}
                />
              </div>
              <FormHeading variant='h2' align='center'>
                New Expense
              </FormHeading>
              <form>
                <Grid container>
                  <Grid item xs={12} className={classes.padTop32}>
                    <TextInput
                      type='date'
                      label='Date'
                      name='date'
                      defaultValue={`${displayDate.year}-${dateMonth}-${dateDay}`}
                      max={{
                        max: `${displayDate.year}-${dateMonth}-${dateDay}`
                      }}
                      ref={expDateRef}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.padTop16}>
                    <SelectInput
                      label='Category'
                      name='category'
                      options={categories}
                      value={category}
                      onChange={e => onExpenseInputChange(e, 'category')}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.padTop16}>
                    <TextInput
                      type='text'
                      label='Description'
                      name='description'
                      ref={expDescRef}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.padTop16}>
                    <TextInput
                      type='number'
                      label='Amount'
                      name='amount'
                      ref={expAmountRef}
                    />
                  </Grid>
                  {addResultMsg.type && (
                    <Grid item xs={12} className={classes.padTop16}>
                      <AlertMessage
                        type={addResultMsg.type}
                        message={addResultMsg.message}
                      />
                    </Grid>
                  )}
                  <Grid item xs={12}></Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    justify='flex-end'
                    className={classes.padTop32}
                  >
                    <Button
                      type='button'
                      text='Add'
                      action='primary'
                      color='magenta'
                      onClick={e => addExpense(e)}
                      disabled={btnDisabled}
                    />
                  </Grid>
                </Grid>
              </form>
            </ExpenseFormWrapper>
          </Backdrop>
        )
      }}
    </ExpenseConsumer>
  )
}

export default ExpenseForm
