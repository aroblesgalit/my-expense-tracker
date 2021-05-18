import React from 'react';
import './signupForm.css';
import { TextInput } from '../Input';
import Button from '../Button';
import { UserConsumer } from '../../utils/UserContext';

function SignupForm() {
    return (
        <UserConsumer>
            {
                value => {
                    const { signupUserRef, signupPassRef, signupConfirmdRef, handleSignup, signupAlert } = value;
                    return (
                        <form className='signup-form'>
                            <div>
                                <TextInput
                                    type='text'
                                    label='Username'
                                    name='username'
                                    border='#CDCDCD'
                                    ref={signupUserRef}
                                />
                            </div>
                            <div className='mt-2'>
                                <TextInput
                                    type='password'
                                    label='Password'
                                    name='password'
                                    border='#CDCDCD'
                                    ref={signupPassRef}
                                />
                            </div>
                            <div className='mt-2'>
                                <TextInput
                                    type='password'
                                    label='Confirm Password'
                                    name='confirm-password'
                                    border='#CDCDCD'
                                    ref={signupConfirmdRef}
                                />
                            </div>
                            <p className={`signup-alert ${signupAlert.type === 'success' ? 'success' : 'fail'}`}>{signupAlert.copy}</p>
                            <div className='mt-2 d-flex jc-flex-end'>
                                <Button
                                    type='submit'
                                    text='Sign up'
                                    action='primary'
                                    color='blue'
                                    onClick={handleSignup}
                                />
                            </div>
                        </form>
                    )
                }
            }

        </UserConsumer>
    )
}

export default SignupForm;