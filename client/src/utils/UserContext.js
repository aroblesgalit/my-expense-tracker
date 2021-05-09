import React, { createRef, useEffect, useState } from 'react';
import API from './API';

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    const [user, setUser] = useState({
        isLoggedIn: false,
        info: {}
    });

    function getUserData() {
        API.getUserData()
            .then(res => {
                setUser({
                    ...user,
                    isLoggedIn: true,
                    info: res.data
                })
            })
    }

    // useEffect(() => {
    //     getUserData();
    // }, [])

    // Signup
    const usernameRef = createRef();
    const passwordRef = createRef();
    const confirmPasswordRef = createRef();

    const [signupAlert, setSignupAlert] = useState({
        type: '',
        copy: ''
    });

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
                        setSignupAlert({
                            type: 'success',
                            copy: 'Signup successful!'
                        });
                        getUserData();
                        // Redirect to dashboard
                    })
                    .catch(err => {
                        console.log('Signup failed...', err);
                        setSignupAlert({
                            type: 'fail',
                            copy: 'Username is already taken.'
                        });
                    })
            ) : (
                setSignupAlert({
                    type: 'fail',
                    copy: 'Password does not match.'
                })
            )
        ) : (
            setSignupAlert({
                type: 'fail',
                copy: 'Please fill in all the fields.'
            })
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