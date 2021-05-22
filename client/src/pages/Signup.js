import React from 'react';
import { useStyles, RightContainer, RightWrapper, H1Typography, SmallTypography, ExtraDiv } from './pages.styles';
import SignupForm from '../components/SignupForm';
import Features from '../components/Features';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

function Signup() {

    const classes = useStyles();

    return (
        <Grid container xs={12}>
            <Features />
            <ExtraDiv item xs={12}></ExtraDiv>
            <RightContainer container item md={5} xs={12} justify='center' alignContent='flex-start'>
                <RightWrapper container item xs={12} direction='column' justify='flex-start' alignContent='center'>
                    <H1Typography variant='h1'>Signup</H1Typography>
                    <SignupForm />
                    <SmallTypography variant='body1'>Already have an account? <Link to='/login' className={classes.link}>Log in here</Link></SmallTypography>
                </RightWrapper>
            </RightContainer>
        </Grid>
    )
}

export default Signup;