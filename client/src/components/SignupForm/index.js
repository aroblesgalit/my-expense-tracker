import React from 'react';
// import './signupForm.css';
import { useStyles, FormWrapper } from './signupForm.styles';
import { TextInput } from '../Input';
import Button from '../Button';
import { UserConsumer } from '../../utils/UserContext';
import { Alert } from '@material-ui/lab';

function SignupForm() {

    const classes = useStyles();

    return (
        <UserConsumer>
            {
                value => {
                    const { signupUserRef, signupPassRef, signupConfirmdRef, handleSignup, signupAlert } = value;
                    return (
                        <FormWrapper elevation={1}>
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
                                <Alert severity={signupAlert.type === 'success' ? 'success' : 'error'}>{signupAlert.copy}</Alert>
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
                        </FormWrapper>
                    )
                }
            }

        </UserConsumer>
    )
}

export default SignupForm;