import React from 'react';
import './Header.css';
import menu from '../assets/menu-icon.svg';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header-tile">
      <div className="header-logo-tile">
        <img src={logo} className='logo' alt="Logo" />
      </div>
        <img src={menu} className='menu-icon' alt="Menu" />
    </div>
  );
}

export default Header;