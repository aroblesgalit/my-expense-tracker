import React from 'react';
import { Redirect } from 'react-router-dom';
import { UserConsumer } from '../../utils/UserContext';

function PublicRoute(props) {
    const Component = props.component;

    return (
        <UserConsumer>
            {
                value => {
                    const { user } = value;

                    return user.isLoggedIn ? 
                        <Redirect to='/expenses' /> :
                        <Component />
                }
            }
        </UserConsumer>
    )
}

export default PublicRoute;