import React, { createRef, useState } from 'react';
import API from './API';

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    // Signup
    const usernameRef = createRef();
    const passwordRef = createRef();
    const confirmPasswordRef = createRef();

    const [signupAlert, setSignupAlert] = useState('');

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
                        setSignupAlert('Signup successful!');
                        // Redirect to dashboard
                    })
                    .catch(err => {
                        console.log('Signup failed...', err);
                        setSignupAlert('Username is already taken.');
                    })
            ) : (
                setSignupAlert('Password does not match.')
            )
        ) : (
            setSignupAlert('Please fill in all the fields.')
        )
    }
    // End Signup

    return (
        <UserContext.Provider
            value={{
                usernameRef,
                passwordRef,
                confirmPasswordRef,
                handleSignup,
                signupAlert
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