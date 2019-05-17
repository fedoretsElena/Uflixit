import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import SearchForm from './SearchForm';

const Header = () => (
    <header className="header bg-dark py-1">
        <div className="container d-flex justify-content-between align-items-center">
            <Link className="header__logo"
                  to='/home'
            >
                <img className="img-fluid"
                     src="https://www.userlogos.org/files/netflix-n-logo-png.png"
                     alt="logo"
                />
            </Link>
            <SearchForm/>
        </div>
    </header>
);

export default Header;