import React from 'react';
import './pages.css';
import Input from '../components/Input';
import Table from '../components/Table';
import Button from '../components/Button';
import { ExpenseConsumer } from '../utils/ExpenseContext';

function Expenses() {
    return (
        <div className='container expenses-pg'>
            <h1>Expenses</h1>
            <div className='mt-3'>
                <Input
                    type='dropdown'
                    label='Filter'
                    name='filter'
                    options={['All', 'Daily', 'Weekly', 'Monthly', 'Yearly']}
                />
            </div>
            <div className='mt-1'>
                <ExpenseConsumer>
                    {
                        value => {
                            const { expenses, deleteExpense } = value;
                            return <Table
                                headings={['Date', 'Category', 'Description', 'Amount']}
                                rows={expenses}
                                handleDelete={deleteExpense}
                            />
                        }
                    }
                </ExpenseConsumer>
            </div>
            <ExpenseConsumer>
                {
                    value => {
                        const { expDateRef, expCategoryRef, expDescRef, expAmountRef, addExpense } = value;
                        return (
                            <div className='expense-form mt-1 d-flex jc-space-between ai-flex-end'>
                                <Input
                                    type='date'
                                    label='Date'
                                    name='date'
                                    ref={expDateRef}
                                />
                                <Input
                                    type='dropdown'
                                    label='Category'
                                    name='category'
                                    options={['Groceries', 'Bills & Utilities', 'Auto & Transport', 'Medical', 'Clothing', 'Travel', 'Loans', 'Household', 'Fun', 'Gifts', 'Other']}
                                    ref={expCategoryRef}
                                />
                                <Input
                                    type='text'
                                    label='Description'
                                    name='description'
                                    ref={expDescRef}
                                />
                                <Input
                                    type='number'
                                    label='Amount'
                                    name='amount'
                                    ref={expAmountRef}
                                />
                                <Button
                                    type='submit'
                                    text='Add'
                                    action='primary'
                                    color='magenta'
                                    onClick={(e) => addExpense(e)}
                                />
                            </div>
                        )
                    }
                }
            </ExpenseConsumer>
        </div>
    )
}

export default Expenses;