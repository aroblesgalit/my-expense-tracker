import React from 'react';
import { Backdrop } from '@material-ui/core';

function ExpenseForm({ newExpense }) {
    return (
        <Backdrop open={newExpense}>
            <p>Expense Form</p>
        </Backdrop>
    )
}

export default ExpenseForm;