import React from 'react';
import { useStyles, ExpensesContainer, TableTopContent, TotalsContainer, SectionHeading, CardsWrapper } from './expenses.styles';
import Input from '../../components/Input';
import Table from '../../components/Table';
import Button from '../../components/Button';
import CardSingleVal from '../../components/CardSingleVal';
import { ExpenseConsumer } from '../../utils/ExpenseContext';
import PageHeader from '../../components/PageHeader';
import { Grid } from '@material-ui/core';

function Expenses() {

    const classes = useStyles();

    // const desktopWidth = useMediaQuery('(min-width:960px)');

    return (
        <ExpenseConsumer>
            {
                value => {
                    const { expenses, deleteExpense, setNewExpense } = value;
                    return (
                        <ExpensesContainer component='section' container item md={10} xs={12} alignContent='flex-start'>
                            <PageHeader title='Expenses' />
                            <TableTopContent container item xs={12} justify='space-between' alignItems='flex-end'>
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
                                    onClick={() => setNewExpense(true)}
                                />
                            </TableTopContent>
                            <Grid item xs={12} className={classes.mobilePadding}>
                                <Table
                                    headings={['Date', 'Category', 'Description', 'Amount', '']}
                                    rows={expenses}
                                    handleDelete={deleteExpense}
                                />
                            </Grid>
                            <TotalsContainer container item xs={12}>
                                <Grid item xs={12}>
                                    <SectionHeading variant={'h3'}>Totals</SectionHeading>
                                </Grid>
                                <CardsWrapper container item xs={12}>
                                    <CardSingleVal name='Today' value='$48.92' />
                                    <CardSingleVal name='This week' value='$90.12' />
                                    <CardSingleVal name='This month' value='$2975.40' />
                                    <CardSingleVal name='This year' value='$13506.20' />
                                </CardsWrapper>
                            </TotalsContainer>
                        </ExpensesContainer>
                    )
                }
            }
        </ExpenseConsumer>
    )
}

export default Expenses;