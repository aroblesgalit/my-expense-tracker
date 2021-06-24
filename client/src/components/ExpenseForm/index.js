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
import Input, { TextInput } from '../Input'
import Button from '../Button'

function ExpenseForm () {
  const classes = useStyles()

  return (
    <ExpenseConsumer>
      {value => {
        const {
          newExpense,
          setNewExpense,
          expDateRef,
          expCategoryRef,
          expDescRef,
          expAmountRef,
          addExpense
        } = value
        return (
          <Backdrop open={newExpense}>
            <ExpenseFormWrapper>
              <div className={classes.closeIconWrapper}>
                <Close fontSize='small' onClick={() => setNewExpense(false)} />
              </div>
              <FormHeading variant='h2' align='center'>
                New Expense
              </FormHeading>
              <form>
                <Grid container>
                  <Grid item xs={12}>
                    {/* <Input
                      type='date'
                      label='Date'
                      name='date'
                      ref={expDateRef}
                    /> */}
                    <TextInput
                      type='date'
                      label='Date'
                      name='date'
                      ref={expDateRef}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      type='dropdown'
                      label='Category'
                      name='category'
                      options={[
                        'groceries',
                        'bills',
                        'auto',
                        'medical',
                        'clothing',
                        'travel',
                        'loans',
                        'household',
                        'fun',
                        'gifts',
                        'other'
                      ]}
                      ref={expCategoryRef}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* <Input
                      type='text'
                      label='Description'
                      name='description'
                      ref={expDescRef}
                    /> */}
                    <TextInput
                      type='text'
                      label='Description'
                      name='description'
                      ref={expDescRef}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      type='number'
                      label='Amount'
                      name='amount'
                      ref={expAmountRef}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type='button'
                      text='Add'
                      action='primary'
                      color='magenta'
                      onClick={e => addExpense(e)}
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
