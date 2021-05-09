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

                    return (
                        <form>
                            <div>
                                <Input 
                                    type='text'
                                    label='Username'
                                    name='username'
                                    border='#CDCDCD'
                                />
                            </div>
                            <div>
                                <Input 
                                    type='text'
                                    label='Password'
                                    name='password'
                                    border='#CDCDCD'
                                />
                            </div>
                            <div>
                                <Button 
                                    type='submit'
                                    text='Log in'
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

export default LoginForm;