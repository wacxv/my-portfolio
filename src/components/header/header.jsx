import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <>
            <div id='header-outer'>
                <div id='header-inner'>
                    <div id='header-container'>
                        <Link to='/' className='nav-link'>
                            lorem
                        </Link>
                        <Link to='/about' className='nav-link'>
                            ipsum
                        </Link>
                        <Link to='/contacts' className='nav-link'>
                            dolor
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
