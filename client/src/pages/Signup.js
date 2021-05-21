import React from 'react';
// import './pages.css';
import { useStyles, SignupContainer, H1Typography } from './pages.styles';
import SignupForm from '../components/SignupForm';
import Features from '../components/Features';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

function Signup() {

    const classes = useStyles();

    return (
        // <div className='container signup-pg'>
        //     {/* left side */}
        //     <Features />
        //     {/* right side */}
        //     <div className='signup-container'>
        //         <h1>Signup</h1>
        //         <SignupForm />
        //         <p className='login-copy'>Already have an account? <Link to='/login'>Log in here</Link></p>
        //     </div>
        // </div>
        <Grid container xs={12}>
            <Features />
            <SignupContainer container item sm={5} xs={12} justify='center' alignContent='flex-start'>
                <H1Typography variant='h1'>Signup</H1Typography>
                <SignupForm />
                <p className='login-copy'>Already have an account? <Link to='/login'>Log in here</Link></p>
            </SignupContainer>
        </Grid>
    )
}

export default Signup;