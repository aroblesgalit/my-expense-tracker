import React from 'react';
import './pages.css';
import Input from '../components/Input';
import Table from '../components/Table';
import Button from '../components/Button';

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
                <Table />
            </div>
            <div className='expense-form mt-1 d-flex jc-space-between ai-flex-end'>
                <Input
                    type='date'
                    label='Date'
                    name='date'
                />
                <Input
                    type='dropdown'
                    label='Category'
                    name='category'
                    options={['Groceries', 'Bills & Utilities', 'Auto & Transport', 'Medical', 'Clothing', 'Travel', 'Loans', 'Household', 'Fun', 'Gifts', 'Other']}
                />
                <Input
                    type='text'
                    label='Description'
                    name='description'
                />
                <Input
                    type='number'
                    label='Amount'
                    name='amount'
                />
                <Button 
                    type='submit'
                    text='Add' 
                    action='primary'
                    color='magenta'
                />
            </div>
        </div>
    )
}

export default Expenses;