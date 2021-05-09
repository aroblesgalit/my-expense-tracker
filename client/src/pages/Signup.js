import React from 'react';
import './pages.css';

import SignupForm from '../components/SignupForm';
import Features from '../components/Features';

function Signup() {
    return (
        <div className='container signup-pg'>
            {/* left side */}
            <Features />
            {/* right side */}
            <div className='signup-container'>
                <h1>Signup</h1>
                <SignupForm />
                <p className='login-copy'>Already have an account? Log in here</p>
            </div>
        </div>
    )
}

export default Signup;