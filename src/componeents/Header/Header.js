import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h3>Welcome to my Rast Countryise</h3>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/countrise">Countrise</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;