import React from 'react';
import './pages.css';
import LoginForm from '../components/LoginForm';
import Features from '../components/Features';

function Login() {
    return (
        <div className='container login-pg'>
            <Features />
            <div className='login-container'>
                <h1>Login</h1>
                <LoginForm />
                <p className='signup-copy'>Don't have an account? Sign up here</p>
            </div>
        </div>
    )
}

export default Login;