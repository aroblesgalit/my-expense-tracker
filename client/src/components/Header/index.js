import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='container header'>
            <div className='logo'>my expense tracker</div>
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