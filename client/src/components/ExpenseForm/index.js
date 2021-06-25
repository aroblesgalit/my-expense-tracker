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
          addExpense,
          category,
          onCategoryChange
        } = value
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
                      ref={expDateRef}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.padTop16}>
                    <SelectInput
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
                      value={category}
                      onChange={onCategoryChange}
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
