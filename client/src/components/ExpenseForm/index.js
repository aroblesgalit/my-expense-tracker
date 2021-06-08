import React from 'react';
import { useStyles, Backdrop, ExpenseFormWrapper, FormHeading } from './expenseForm.styles';
// import { Backdrop } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { ExpenseConsumer } from '../../utils/ExpenseContext';

function ExpenseForm() {

    const classes = useStyles();

    return (
        <ExpenseConsumer>
            {
                value => {
                    const { newExpense, setNewExpense } = value;
                    return (
                        <Backdrop open={newExpense}>
                            <ExpenseFormWrapper>
                                <div className={classes.closeIconWrapper}>
                                    <Close fontSize='small' onClick={() => setNewExpense(false)} />
                                </div>
                                <FormHeading variant='h2' align='center'>New Expense</FormHeading>
                            </ExpenseFormWrapper>
                        </Backdrop>
                    )
                }
            }
        </ExpenseConsumer>
    )
}

export default ExpenseForm;