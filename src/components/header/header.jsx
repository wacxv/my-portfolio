import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <>
            <div id='header-outer'>
                <div id='header-inner'>
                    <div id='header-container'>
                        <div id='username-container'>
                            <img src='src\assets\temp_image.jpg' alt='logo' id='username-logo' />
                            <span>wacxvizc</span>
                        </div>
                        <div id='nav-container'>
                            <NavLink to='/' end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Home
                            </NavLink>
                            <NavLink to='/project' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Projects
                            </NavLink>
                            <NavLink to='/experience' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Experience
                            </NavLink>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Contact
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
