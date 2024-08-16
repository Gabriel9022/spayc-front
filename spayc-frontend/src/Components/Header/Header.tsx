import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/Header/spayc_logo.svg";
import './Header.css';
import NavDesktop from './nav/NavDesktop';
import NavMobile from './nav/NavMobile';
import WindowSize from '../../hooks/windowsSize';

const Header: React.FC = () => {
  const windowWidth = WindowSize();
  const isMobile = windowWidth <= 1279; 

  return (
    <header className='Header' id='Header'>
      <div className='Header_content_container'>
        <div className='Header_logo_container'>
          <Link to="/">
            <img src={logo} alt="Logo SPAYC" className='logo' />
          </Link>
        </div>
        {isMobile ? <NavMobile/> : <NavDesktop/>}
      </div>
    </header>
  )
}

export default Header;