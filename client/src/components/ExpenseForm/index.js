import React from 'react';
import { Backdrop, ExpenseFormWrapper, FormHeading } from './expenseForm.styles';
// import { Backdrop } from '@material-ui/core';
import { ExpenseConsumer } from '../../utils/ExpenseContext';

function ExpenseForm() {
    return (
        <ExpenseConsumer>
            {
                value => {
                    const { newExpense, setNewExpense } = value;
                    return (
                        <Backdrop open={newExpense} onClick={() => setNewExpense(false)}>
                            <ExpenseFormWrapper>
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