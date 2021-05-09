import React from 'react';
import './signupForm.css';

function SignupForm() {
    return (
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
    )
}

export default SignupForm;