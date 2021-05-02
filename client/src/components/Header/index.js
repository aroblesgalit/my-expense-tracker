import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='container sidebar-menu'>
            <div><span className='logo'>my expense tracker</span></div>
            <div>
                <ul>
                    <li>dashboard</li>
                    <li><Link to='/expenses'>expenses</Link></li>
                    <li>income</li>
                    <li>analytics</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;