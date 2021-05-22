import React from 'react';
// import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { UserConsumer } from '../../utils/UserContext';
import Button from '../Button';
import { HeaderContainer } from './header.styles';

function Header() {

    // Use path endpoint to determine active page
    const location = useLocation();
    const currentPathname = location.pathname;

    return (
        <UserConsumer>
            {
                value => {
                    const { isLoggedIn, handleLogout } = value;

                    return isLoggedIn && (
                        <HeaderContainer component='header' container item sm={2} xs={12}>
                            <div className='logo'>my expense tracker</div>
                            <nav>
                                <ul>
                                    <li>dashboard</li>
                                    <li className={`${currentPathname === '/expenses' && 'active'}`}><Link to='/expenses'>expenses</Link></li>
                                    <li>income</li>
                                    <li>analytics</li>
                                </ul>
                            </nav>
                            <Button 
                                type='button'
                                text='Log out'
                                action='secondary'
                                color='gray'
                                onClick={handleLogout}
                            />
                        </HeaderContainer>
                    )
                }
            }
        </UserConsumer>
    )
}

export default Header;