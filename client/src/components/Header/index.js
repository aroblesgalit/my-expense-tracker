import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='container'>
            <div className='logo'>my expense tracker</div>
            <nav>
                <ul>
                    <li>dashboard</li>
                    <li><Link to='/expenses'>expenses</Link></li>
                    <li>income</li>
                    <li>analytics</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;