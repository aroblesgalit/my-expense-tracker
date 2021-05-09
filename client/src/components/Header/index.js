import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { UserConsumer } from '../../utils/UserContext';

function Header() {

    // Use path endpoint to determine active page
    const location = useLocation();
    const currentPathname = location.pathname;

    return (
        <UserConsumer>
            {
                value => {
                    const { isLoggedIn } = value;

                    isLoggedIn && (
                        <header className='container'>
                            <div className='logo'>my expense tracker</div>
                            <nav>
                                <ul>
                                    <li>dashboard</li>
                                    <li className={`${currentPathname === '/expenses' && 'active'}`}><Link to='/expenses'>expenses</Link></li>
                                    <li>income</li>
                                    <li>analytics</li>
                                </ul>
                            </nav>
                        </header>
                    )
                }
            }

        </UserConsumer>
    )
}

export default Header;