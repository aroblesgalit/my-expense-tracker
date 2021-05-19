import React from 'react';
import './pages.css';

import SignupForm from '../components/SignupForm';
import Features from '../components/Features';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

function Signup() {
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
        <Grid container>
            <Grid item sm={7} xs={12}>
                <Features />
            </Grid>
            <Grid item sm={5} xs={12}>
                <h1>Signup</h1>
                <SignupForm />
                <p className='login-copy'>Already have an account? <Link to='/login'>Log in here</Link></p>
            </Grid>
        </Grid>
    )
}

export default Signup;