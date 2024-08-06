import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/Header/SPAYC_logo.png"
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className='Header' id='Header'>
      <div className='Header_content_container'>
        <div className='Header_logo_container'>
          <img src={logo} alt="Logo SPAYC" className='logo' />
        </div>
        <nav className='Header_nav'>
          <ul className='Header_nav_menu'>
            <li className='Header_nav_menu_item'>
              <NavLink to="/">INICIO</NavLink>
            </li>
            <li className='Header_nav_menu_item'>
              <NavLink to="/servicios">SERVICIOS</NavLink>
            </li>
            <li className='Header_nav_menu_item'>
              <NavLink to="/instituciones">INSTITUCIONES</NavLink>
            </li>
            <li className='Header_nav_menu_item'>
              <NavLink to="/profesionales">PROFESIONALES</NavLink>
            </li>
            <li className='Header_nav_menu_item'>
              <NavLink to="/nosotros">NOSOTROS</NavLink>
            </li>
            <li className='Header_nav_menu_item'>
              <NavLink to="/trabaja-con-nosotros">TRABAJA CON NOSOTROS</NavLink>
            </li>
            <li className='Header_nav_menu_item'>
              <NavLink to="/contacto">CONTACTO</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;