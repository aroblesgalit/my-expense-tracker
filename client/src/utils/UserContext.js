import React from 'react';
import API from './API';

const UserContext = React.createContext();

// Provider
function UserProvider(props) {
    return (
        <UserContext.Provider
            value={{}}
        >
            {props.children}
        </UserContext.Provider>
    )
}

// Consumer
const UserConsumer = UserContext.Consumer;

export default UserContext;
export { UserProvider, UserConsumer };