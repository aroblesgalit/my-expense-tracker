import React from 'react';
import { PageContainer } from '../pages.styles';
import { useStyles } from './dashboard.styles';
import { ExpenseConsumer } from '../../utils/ExpenseContext';
import PageHeader from '../../components/PageHeader';
import { Grid } from '@material-ui/core';

function Dashboard() {
    const classes = useStyles();

    return (
        <ExpenseConsumer>
            {
                value => {
                    return (
                        <PageContainer component='section' container item md={10} xs={12} alignContent='space-between'>
                            <Grid container item xs={12}>
                                <PageHeader title='Dashboard' />
                            </Grid>
                        </PageContainer>
                    )
                }
            }
        </ExpenseConsumer>
    )
}