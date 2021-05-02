import React from 'react';
import './pages.css';
import Input from '../components/Input';
import Table from '../components/Table';

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
        </div>
    )
}

export default Expenses;