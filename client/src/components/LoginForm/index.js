import React from 'react';
import './loginForm.css';
import Input from '../Input';
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
                                <Input
                                    type='text'
                                    label='Username'
                                    name='username'
                                    border='#CDCDCD'
                                    ref={loginUserRef}
                                />
                            </div>
                            <div className='mt-2'>
                                <Input
                                    type='text'
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
                                    backgroundColor='#43DDE6'
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