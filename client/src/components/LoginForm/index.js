import React from 'react';
import './loginForm.css';
import { TextInput } from '../Input';
import Button from '../Button';
import { UserConsumer } from '../../utils/UserContext';

function LoginForm() {
    return (
        <UserConsumer>
            {
                value => {
                    const { loginUserRef, loginPassRef, handleLogin } = value;
                    return (
                        <form className='login-form'>
                            <div>
                                <TextInput
                                    type='text'
                                    label='Username'
                                    name='username'
                                    border='#CDCDCD'
                                    ref={loginUserRef}
                                />
                            </div>
                            <div className='mt-2'>
                                <TextInput
                                    type='password'
                                    label='Password'
                                    name='password'
                                    border='#CDCDCD'
                                    ref={loginPassRef}
                                />
                            </div>
                            <div className='mt-2 d-flex jc-flex-end'>
                                <Button
                                    type='submit'
                                    text='Log in'
                                    action='primary'
                                    color='blue'
                                    onClick={handleLogin}
                                />
                            </div>
                        </form>
                    )
                }
            }
        </UserConsumer>
    )
}

export default LoginForm;