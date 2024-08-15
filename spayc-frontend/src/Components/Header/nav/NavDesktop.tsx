import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavDesktop.css';

const NavDesktop: React.FC = () => {
    return (
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
    )
}

export default NavDesktop;