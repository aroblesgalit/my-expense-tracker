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

        console.log({ username, password, confirmPassword })

        // username && password && confirmPassword ? (
        //     password === confirmPassword ? (
        //         API.signupUser({
        //             username,
        //             password
        //         })
        //             .then(res => {
        //                 console.log(res);
        //                 // Clear form
        //             })
        //             .catch(err => console.log(err))
        //     ) : (
        //         console.log('Password does not match.')
        //     )
        // ) : (
        //     console.log('Please fill in all fields.')
        // )
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