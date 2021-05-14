import React, { createRef, useEffect, useState } from 'react';
import API from './API';

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    const [user, setUser] = useState({
        isLoggedIn: null,
        userData: {}
    });

    function getUserData() {
        API.getUserData()
            .then(res => {
                setUser({
                    ...user,
                    isLoggedIn: true,
                    userData: res.data
                })
            })
            .catch(() => {
                console.log('User is NOT logged in.');
                setUser({
                    ...user,
                    isLoggedIn: false,
                    userData: {}
                })
            })
    }

    useEffect(() => {
        getUserData();
    }, [])

    /*********** Signup ***********/
    const signupUserRef = createRef();
    const signupPassRef = createRef();
    const signupConfirmdRef = createRef();

    const [signupAlert, setSignupAlert] = useState({
        type: '',
        copy: ''
    });

    const handleSignup = e => {
        e.preventDefault();

        const username = signupUserRef.current.value;
        const password = signupPassRef.current.value;
        const confirmPassword = signupConfirmdRef.current.value;

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
                        // setUser({
                        //     ...user,
                        //     isLoggedIn: true
                        // })
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
    /*********** END Signup ***********/

    /*********** Login ***********/
    const loginUserRef = createRef();
    const loginPassRef = createRef();

    const handleLogin = e => {
        e.preventDefault();

        const username = loginUserRef.current.value;
        const password = loginPassRef.current.value;

        username && password ? (
            API.loginUser({
                username,
                password
            })
                .then(res => {
                    console.log('User is logged in...', res);
                    getUserData();
                })
                .catch(err => {
                    console.log('Login failed...', err)
                })
        ) : (
            console.log('Please fill in all the fields.')
        )
    }
    /*********** END Login ***********/

    /*********** Logout ***********/
    const handleLogout = () => {
        API.logoutUser()
            .then(() => {
                getUserData();
            })
            .catch(err => console.log(err))
    }
    /*********** END Logout ***********/

    return (
        <UserContext.Provider
            value={{
                signupUserRef,
                signupPassRef,
                signupConfirmdRef,
                handleSignup,
                signupAlert,
                ...user,
                loginUserRef,
                loginPassRef,
                handleLogin,
                handleLogout
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