import React, { useState } from 'react';
import './pages.css';
import API from '../utils/API';

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOnClick = () => {
        console.log(username, password)
        API.signupUser({
            username,
            password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='container signup-pg'>
            {/* left side */}

            {/* right side */}
            <div className='signup-wrapper'>
                <h1>Signup</h1>
                {/* sign up form goes here */}
                <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="text" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleOnClick}>Sign up</button>
                <p>Already have an account? Log in here</p>
            </div>
        </div>
    )
}

export default Signup;