import React from 'react';
import { Redirect } from 'react-router-dom';
import { UserConsumer } from '../../utils/UserContext';

function ProtectedRoute(props) {
    const Component = props.component;

    return (
        <UserConsumer>
            {
                value => {
                    const { isLoggedIn } = value;

                    return isLoggedIn ?
                        <Component /> :
                        <Redirect to='/signup' />
                }
            }
        </UserConsumer>
    )
}

export default ProtectedRoute;