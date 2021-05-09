import React from 'react';
import './signupForm.css';
import Input from '../Input';
import Button from '../Button';
import { UserConsumer } from '../../utils/UserContext';

function SignupForm() {
    return (
        <UserConsumer>
            {
                value => {
                    const { usernameRef, passwordRef, confirmPasswordRef, handleSignup, signupAlert } = value;
                    return (
                        <form className='signup-form'>
                            <div>
                                <Input
                                    type='text'
                                    label='Username'
                                    name='username'
                                    border='#CDCDCD'
                                    ref={usernameRef}
                                />
                            </div>
                            <div className='mt-2'>
                                <Input
                                    type='text'
                                    label='Password'
                                    name='password'
                                    border='#CDCDCD'
                                    ref={passwordRef}
                                />
                            </div>
                            <div className='mt-2'>
                                <Input
                                    type='text'
                                    label='Confirm Password'
                                    name='confirm-password'
                                    border='#CDCDCD'
                                    ref={confirmPasswordRef}
                                />
                            </div>
                            <p className={`signup-alert ${signupAlert.type === 'success' ? 'success' : 'fail'}`}>{signupAlert.copy}</p>
                            <div className='mt-2 d-flex jc-flex-end'>
                                <Button
                                    type='submit'
                                    text='Sign up'
                                    onClick={handleSignup}
                                    backgroundColor='#43DDE6'
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