import React from 'react'
import MenuItems from './MenuItems';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar" style={{position:'static', zIndex:1, width: '100%'}}>
            <div className="logo">Logo</div>
            <div className="navbar_container">
            <div className="container">
                <div className="menu-items">
                    <MenuItems mode="horizontal" />
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
