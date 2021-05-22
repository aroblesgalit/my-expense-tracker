import React from 'react';
import './loginForm.css';
import { useStyles, FormWrapper } from './loginForm.styles';
import { TextInput } from '../Input';
import Button from '../Button';
import { UserConsumer } from '../../utils/UserContext';
import { Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function LoginForm() {

    const classes = useStyles();

    return (
        <UserConsumer>
            {
                value => {
                    const { loginUserRef, loginPassRef, handleLogin, loginAlert } = value;
                    return (
                        <FormWrapper elevation={1}>
                            <form className={classes.loginForm}>
                                <Grid container xs={12}>
                                    <Grid item xs={12}>
                                        <TextInput
                                            type='text'
                                            label='Username'
                                            name='username'
                                            border='#CDCDCD'
                                            ref={loginUserRef}
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={classes.mt3}>
                                        <TextInput
                                            type='password'
                                            label='Password'
                                            name='password'
                                            border='#CDCDCD'
                                            ref={loginPassRef}
                                        />
                                    </Grid>
                                    {
                                        loginAlert.type && (
                                            <Grid item xs={12} className={classes.mt1}>
                                                <Alert severity={loginAlert.type === 'success' ? 'success' : 'error'}>{loginAlert.copy}</Alert>
                                            </Grid>
                                        )
                                    }
                                    <Grid container item xs={12} justify='flex-end' className={classes.mt3}>
                                        <Button
                                            type='submit'
                                            text='Log in'
                                            action='primary'
                                            color='blue'
                                            onClick={handleLogin}
                                        />
                                    </Grid>
                                </Grid>
                            </form>
                        </FormWrapper>
                    )
                }
            }
        </UserConsumer>
    )
}

export default LoginForm;