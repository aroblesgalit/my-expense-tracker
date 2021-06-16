import React from 'react';
import { PageContainer, CardsWrapper } from '../pages.styles';
import { useStyles } from './dashboard.styles';
import { ExpenseConsumer } from '../../utils/ExpenseContext';
import PageHeader from '../../components/PageHeader';
import CardSingleVal from '../../components/CardSingleVal';
import { Grid } from '@material-ui/core';

function Dashboard() {
    const classes = useStyles();

    return (
        <ExpenseConsumer>
            {
                value => {
                    return (
                        <PageContainer component='section' container item md={10} xs={12} alignContent='flex-start'>
                            <Grid container item xs={12}>
                                <PageHeader title='Dashboard' />
                            </Grid>
                            <CardsWrapper container item xs={12}>
                                <CardSingleVal name='Loans' value='$1420' />
                                <CardSingleVal name='Groceries' value='$250' />
                                <CardSingleVal name='Fun' value='$179' />
                            </CardsWrapper>
                        </PageContainer>
                    )
                }
            }
        </ExpenseConsumer>
    )
}

export default Dashboard;