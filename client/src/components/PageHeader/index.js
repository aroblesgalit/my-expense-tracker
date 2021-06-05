import React from 'react';
import { PageHeader, PageTitle, WelcomeMessage } from './pageHeader.styles';
import { Grid } from '@material-ui/core';

function PageHeader() {
    return (
        <PageHeader container item xs={12} direction={desktopWidth ? 'column' : 'row-reverse'} alignItems='baseline'>
            <Grid item md={12} xs={5}>
                <WelcomeMessage variant='body1'>Hi, Alvin!</WelcomeMessage>
            </Grid>
            <Grid item md={12} xs={7}>
                <PageTitle variant='h1'>Expenses</PageTitle>
            </Grid>
        </PageHeader>
    )
}

export default PageHeader;