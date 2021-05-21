import React from 'react';
import { useStyles, SignupContainer, H1Typography, SmallTypography, ExtraDiv } from './pages.styles';
import SignupForm from '../components/SignupForm';
import Features from '../components/Features';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

function Signup() {

    const classes = useStyles();

    return (
        <Grid container xs={12}>
            <Features />
            <ExtraDiv item xs={12}></ExtraDiv>
            <SignupContainer container item sm={5} xs={12} justify='center' alignContent='flex-start'>
                <H1Typography variant='h1'>Signup</H1Typography>
                <SignupForm />
                <SmallTypography variant='body1'>Already have an account? <Link to='/login' className={classes.link}>Log in here</Link></SmallTypography>
            </SignupContainer>
        </Grid>
    )
}

export default Signup;