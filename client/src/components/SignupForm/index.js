import React from 'react';
// import './signupForm.css';
import { useStyles, FormWrapper } from './signupForm.styles';
import { TextInput } from '../Input';
import Button from '../Button';
import { UserConsumer } from '../../utils/UserContext';
import { Alert } from '@material-ui/lab';
import { Grid } from '@material-ui/core';

function SignupForm() {

    const classes = useStyles();

    return (
        <UserConsumer>
            {
                value => {
                    const { signupUserRef, signupPassRef, signupConfirmdRef, handleSignup, signupAlert } = value;
                    return (
                        <FormWrapper elevation={1}>
                            <form className={classes.signupForm}>
                                <Grid container xs={12}>
                                    <Grid item xs={12}>
                                        <TextInput
                                            type='text'
                                            label='Username'
                                            name='username'
                                            border='#CDCDCD'
                                            ref={signupUserRef}
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={classes.mt3}>
                                        <TextInput
                                            type='password'
                                            label='Password'
                                            name='password'
                                            border='#CDCDCD'
                                            ref={signupPassRef}
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={classes.mt3}>
                                        <TextInput
                                            type='password'
                                            label='Confirm Password'
                                            name='confirm-password'
                                            border='#CDCDCD'
                                            ref={signupConfirmdRef}
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={classes.mt1}>
                                        <Alert severity={signupAlert.type === 'success' ? 'success' : 'error'}>{signupAlert.copy}</Alert>
                                    </Grid>
                                    <Grid container item xs={12} justify='flex-end' className={classes.mt3}>
                                        <Button
                                            type='submit'
                                            text='Sign up'
                                            action='primary'
                                            color='blue'
                                            onClick={handleSignup}
                                        />
                                    </Grid>
                                </Grid>
                            </form>
                        </FormWrapper>
                    )
                }
            }

        </UserConsumer >
    )
}

export default SignupForm;