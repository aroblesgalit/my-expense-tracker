import React, { useState } from 'react';
import './pages.css';
import API from '../utils/API';
import leftArrow from '../images/left-arrow.svg';
import rightArrow from '../images/right-arrow.svg';
import Input from '../components/Input';
import Button from '../components/Button';

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOnClick = (e) => {
        e.preventDefault();

        username && password && confirmPassword ? (
            password === confirmPassword ? (
                API.signupUser({
                    username,
                    password
                })
                    .then(res => {
                        console.log(res);
                        // Clear form
                    })
                    .catch(err => console.log(err))
            ) : (
                console.log('Password does not match.')
            )
        ) : (
            console.log('Please fill in all fields.')
        )
    }

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
                {/* sign up form goes here */}
                <form className='signup-form'>
                    <div>
                        <Input
                            type='text'
                            label='Username'
                            name='username'
                            border='#CDCDCD'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='mt-2'>
                        <Input
                            type='text'
                            label='Password'
                            name='password'
                            border='#CDCDCD'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mt-2'>
                        <Input
                            type='text'
                            label='Confirm Password'
                            name='confirm-password'
                            border='#CDCDCD'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className='mt-2 d-flex jc-flex-end'>
                        <Button
                            type='submit'
                            text='Sign up'
                            onClick={handleOnClick}
                            backgroundColor='#43DDE6'
                        />
                    </div>
                </form>
                <p className='login-copy'>Already have an account? Log in here</p>
            </div>
        </div>
    )
}

export default Signup;