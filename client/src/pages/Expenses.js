import React from 'react';
// import './pages.css';
import Input, { SelectInput } from '../components/Input';
import Table from '../components/Table';
import Button from '../components/Button';
import { ExpenseConsumer } from '../utils/ExpenseContext';
import { useStyles, ExpensesContainer, PageHeader, PageTitle, WelcomeMessage } from './pages.styles';
import { Grid, useMediaQuery } from '@material-ui/core';

function Expenses() {

    const classes = useStyles();

    const desktopWidth = useMediaQuery('(min-width:960px)');

    return (
        <ExpenseConsumer>
            {
                value => {
                    const { filterRef, expenses, deleteExpense } = value;
                    return (
                        <ExpensesContainer component='section' container item md={10} xs={12} alignContent='flex-start'>
                            <PageHeader container item xs={12} direction={desktopWidth ? 'column' : 'row-reverse'} alignItems='baseline'>
                                <Grid item md={12} xs={5}>
                                    <WelcomeMessage variant='body1'>Hi, Alvin!</WelcomeMessage>
                                </Grid>
                                <Grid item md={12} xs={7}>
                                    <PageTitle variant='h1'>Expenses</PageTitle>
                                </Grid>
                            </PageHeader>
                            <Grid container item xs={12} justify='space-between' alignItems='flex-end' className={classes.mobilePadding}>
                                {/* <SelectInput 
                                    label='Filter'
                                    name='filter'
                                    options={['All', 'Daily', 'Weekly', 'Monthly', 'Yearly']}
                                    ref={filterRef}
                                /> */}
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
                            <Grid item xs={12} className={classes.mobilePadding}>
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