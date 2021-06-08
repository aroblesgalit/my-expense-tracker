import React from 'react';
import { Backdrop } from './expenseForm.styles';
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
                            <p>Expense Form</p>
                        </Backdrop>
                    )
                }
            }
        </ExpenseConsumer>
    )
}

export default ExpenseForm;