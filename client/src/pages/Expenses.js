import React from 'react';
import './pages.css';
import Input from '../components/Input';

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
        </div>
    )
}

export default Expenses;