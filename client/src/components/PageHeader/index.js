import React, { useContext } from 'react';
import { PageHeaderContainer, PageTitle, WelcomeMessage } from './pageHeader.styles';
import { Grid, useMediaQuery } from '@material-ui/core';
import UserContext from '../../utils/UserContext';

function PageHeader({ title }) {

    const { userData } = useContext(UserContext);

    const desktopWidth = useMediaQuery('(min-width:960px)');

    return (
        <PageHeaderContainer container item xs={12} direction={desktopWidth ? 'column' : 'row-reverse'} alignItems='baseline'>
            <Grid item md={12} xs={5}>
                <WelcomeMessage variant='body1'>Hi, {userData.username}</WelcomeMessage>
            </Grid>
            <Grid item md={12} xs={7}>
                <PageTitle variant='h1'>{title}</PageTitle>
            </Grid>
        </PageHeaderContainer>
    )
}

export default PageHeader;