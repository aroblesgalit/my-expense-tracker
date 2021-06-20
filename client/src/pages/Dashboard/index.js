import React from 'react';
import { PageContainer, CardsWrapper } from '../pages.styles';
import { useStyles } from './dashboard.styles';
import { ExpenseConsumer } from '../../utils/ExpenseContext';
import PageHeader from '../../components/PageHeader';
import CardSingleVal from '../../components/CardSingleVal';
import { Grid, Paper } from '@material-ui/core';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

function Dashboard() {
    const classes = useStyles();

    const monthlyTotals = [
        {
            month: 'May', groceries: 0, bills: 86, auto: 0, medical: 0, clothing: 0, travel: 0, loans: 0, house: 0, fun: 0, gifts: 0, other: 0,
        }, {
            month: 'June', groceries: 71.16, bills: 86, auto: 0, medical: 0, clothing: 0, travel: 0, loans: 383.42, house: 0, fun: 0, gifts: 0, other: 0,
        }
    ];

    return (
        <ExpenseConsumer>
            {
                value => {
                    const { categoryCurMonthTotals } = value;
                    return (
                        <PageContainer component='section' container item md={10} xs={12} alignContent='flex-start'>
                            <Grid container item xs={12}>
                                <PageHeader title='Dashboard' />
                            </Grid>
                            <CardsWrapper className={classes.px} container item xs={12}>
                                {
                                    // categoryCurMonthTotals[0].map(category => <CardSingleVal name={category.name} value={`$${category.value}`} />)

                                    Object.keys(categoryCurMonthTotals[0]).map((category, i) => (
                                        (category !== 'month' && categoryCurMonthTotals[0][category] > 0) &&
                                        <CardSingleVal key={`${i}-${category}`} name={category} value={`$${categoryCurMonthTotals[0][category]}`} />
                                    ))
                                }
                            </CardsWrapper>
                            <Paper>
                                <Chart data={monthlyTotals}>
                                    <ArgumentAxis />
                                    <ValueAxis
                                        max={3000}
                                    />

                                    <BarSeries
                                        name="Groceries"
                                        valueField="Groceries"
                                        argumentField="month"
                                    />
                                    <BarSeries
                                        name="Bills-Utilities"
                                        valueField="Bills & Utilities"
                                        argumentField="month"
                                    />
                                    <BarSeries
                                        name="Auto - Transport"
                                        valueField="auto"
                                        argumentField="month"
                                    />
                                    <BarSeries
                                        name="Medical"
                                        valueField="medical"
                                        argumentField="month"
                                    />
                                    <BarSeries
                                        name="Clothing"
                                        valueField="clothing"
                                        argumentField="month"
                                    />
                                    <BarSeries
                                        name="Travel"
                                        valueField="travel"
                                        argumentField="month"
                                    />
                                    <BarSeries
                                        name="Loans"
                                        valueField="loans"
                                        argumentField="month"
                                    />
                                    <BarSeries
                                        name="Household"
                                        valueField="house"
                                        argumentField="month"
                                    />
                                    <BarSeries
                                        name="Fun"
                                        valueField="fun"
                                        argumentField="month"
                                    />
                                    <BarSeries
                                        name="Gifts"
                                        valueField="gifts"
                                        argumentField="month"
                                    />
                                    <BarSeries
                                        name="Other"
                                        valueField="other"
                                        argumentField="month"
                                    />
                                    <Animation />
                                    <Legend position="bottom" />
                                    <Title text="Monthly totals" />
                                    <Stack
                                        stacks={[
                                            { series: ['Groceries', 'Bills & Utilities', 'Auto & Transport', 'Medical', 'Clothing', 'Travel', 'Loans', 'Household', 'Fun', 'Gifts', 'Other'] },
                                        ]}
                                    />
                                </Chart>
                            </Paper>
                        </PageContainer>
                    )
                }
            }
        </ExpenseConsumer>
    )
}

export default Dashboard;