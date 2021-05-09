import React, { createRef } from 'react';
import API from './API';

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    // Signup
    const usernameRef = createRef();
    const passwordRef = createRef();
    const confirmPasswordRef = createRef();

    const handleSignup = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        username && password && confirmPassword ? (
            password === confirmPassword ? (
                API.signupUser({
                    username,
                    password
                })
                    .then(res => {
                        console.log('User is signed up...', res);
                        // Redirect to dashboard
                    })
                    .catch(err => {
                        console.log('Username is already taken. ', err);
                        // Render sign up failed copy 'username already taken'
                    })
            ) : (
                // Render password don't match copy
                console.log('Password doesn\'t match')
            )
        ) : (
            // Render missing fields copy
            console.log('Please fill in all fields.')
        )
    }
    // End Signup

    return (
        <UserContext.Provider
            value={{
                usernameRef,
                passwordRef,
                confirmPasswordRef,
                handleSignup
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

// Consumer
const UserConsumer = UserContext.Consumer;

export default UserContext;
export { UserProvider, UserConsumer };