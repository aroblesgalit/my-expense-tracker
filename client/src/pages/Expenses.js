import React from 'react';
// import './pages.css';
import Input, { SelectInput } from '../components/Input';
import Table from '../components/Table';
import Button from '../components/Button';
import { ExpenseConsumer } from '../utils/ExpenseContext';
import { ExpensesContainer, PageTitle, WelcomeMessage } from './pages.styles';
import { Grid } from '@material-ui/core';

function Expenses() {
    return (
        <ExpenseConsumer>
            {
                value => {
                    const { filterRef, expenses, deleteExpense } = value;
                    return (
                        <ExpensesContainer component='section' container item md={10} xs={12} alignContent='flex-start'>
                            <Grid item xs={12}>
                                <WelcomeMessage variant='body1'>Hi, Alvin!</WelcomeMessage>
                            </Grid>
                            <Grid item xs={12}>
                                <PageTitle variant='h1'>Expenses</PageTitle>
                            </Grid>
                            <Grid container item xs={12} justify='space-between' alignItems='flex-end'>
                                <SelectInput 
                                    label='Filter'
                                    name='filter'
                                    options={['All', 'Daily', 'Weekly', 'Monthly', 'Yearly']}
                                    ref={filterRef}
                                />
                                {/* <>
                                    <InputLabel htmlFor='filter'>Filter</InputLabel>
                                    <TextField
                                        id='filter'
                                        inputRef={expAmountRef}
                                        select
                                    >
                                        {
                                            ['All', 'Daily', 'Weekly', 'Monthly', 'Yearly'].map((option, i) => <MenuItem key={`${i}-${option}`} value={option}>{option}</MenuItem>)
                                        }
                                    </TextField>
                                </> */}
                                <Input
                                    type='dropdown'
                                    label='Filter'
                                    name='filter'
                                    options={['All', 'Daily', 'Weekly', 'Monthly', 'Yearly']}
                                />
                                <Button
                                    type='button'
                                    text='New'
                                    action='primary'
                                    color='magenta'
                                // onClick={(e) => addExpense(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Table
                                    headings={['Date', 'Category', 'Description', 'Amount']}
                                    rows={expenses}
                                    handleDelete={deleteExpense}
                                />
                            </Grid>
                            {/* <div className='expense-form mt-1 d-flex jc-space-between ai-flex-end'>
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
                                
                            </div> */}
                        </ExpensesContainer>
                    )
                }
            }
        </ExpenseConsumer>
    )
}

export default Expenses;