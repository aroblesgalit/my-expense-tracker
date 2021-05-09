import React, { useState } from 'react';
import './pages.css';
import API from '../utils/API';
import leftArrow from '../images/left-arrow.svg';
import rightArrow from '../images/right-arrow.svg';
import SignupForm from '../components/SignupForm';

function Signup() {
    return (
        <div className='container signup-pg'>
            {/* left side */}
            <div className='features-container'>
                <div>
                    <div className='logo'>my expense tracker</div>
                </div>
                <div className='features-wrapper'>
                    <div className='features'>
                        <div className='feat-left-arrow'><img src={leftArrow} alt="Left arrow" /></div>
                        <div className='feat-image-wrapper'>image</div>
                        <div className='feat-right-arrow'><img src={rightArrow} alt="Left arrow" /></div>
                    </div>
                    <p>Add a transaction</p>
                    <div className='feat-slick-dots'>
                        <span className='active'></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
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