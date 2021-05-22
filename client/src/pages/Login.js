import React from 'react';
import { useStyles, ExtraDiv, H1Typography, RightContainer, RightWrapper, SmallTypography } from './pages.styles';
import LoginForm from '../components/LoginForm';
import Features from '../components/Features';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';


function Login() {

    const classes = useStyles();

    return (
        <Grid container>
            <Features />
            <ExtraDiv item xs={12}></ExtraDiv>
            <RightContainer container item md={5} xs={12} justify='center' alignContent='flex-start'>
                <RightWrapper container item xs={12} direction='column' justify='flex-start' alignContent='center'>
                    <H1Typography variant='h1'>Login</H1Typography>
                    <LoginForm />
                    <SmallTypography variant='body1'>Don't have an account? <Link to='/signup' className={classes.link}>Sign up here</Link></SmallTypography>
                </RightWrapper>
            </RightContainer>
        </Grid>
    )
}

export default Login;