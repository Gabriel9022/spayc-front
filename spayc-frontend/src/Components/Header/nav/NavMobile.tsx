import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './NavMobile.css';

const NavMobile: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const menuElement = menuRef.current;
        if (menuElement) {
          if (isOpen) {
            menuElement.style.maxHeight = `${menuElement.scrollHeight}px`;
          } else {
            menuElement.style.maxHeight = '0';
          }
        }
      }, [isOpen]);
    
  return (
        <nav className='Header_nav_mobile'>
            <div className='Hamburger' onClick={toggleMenu}>
                <div className={isOpen ? 'Bar open' : 'Bar'}></div>
                <div className={isOpen ? 'Bar open' : 'Bar'}></div>
                <div className={isOpen ? 'Bar open' : 'Bar'}></div>
            </div>
            <ul ref={menuRef} className={`Header_nav_menu_mobile ${isOpen ? 'open' : ''}`}>
                <li className='Header_nav_menu_item_m'>
                    <NavLink to="/inicio" onClick={toggleMenu}>INICIO</NavLink>
                </li>
                <li className='Header_nav_menu_item_m'>
                    <NavLink to="/servicios" onClick={toggleMenu}>SERVICIOS</NavLink>
                </li>
                <li className='Header_nav_menu_item_m'>
                    <NavLink to="/instituciones" onClick={toggleMenu}>INSTITUCIONES</NavLink>
                </li>
                <li className='Header_nav_menu_item_m'>
                    <NavLink to="/profesionales" onClick={toggleMenu}>PROFESIONALES</NavLink>
                </li>
                <li className='Header_nav_menu_item_m'>
                    <NavLink to="/nosotros" onClick={toggleMenu}>NOSOTROS</NavLink>
                </li>
                <li className='Header_nav_menu_item_m'>
                    <NavLink to="/trabaja-con-nosotros" onClick={toggleMenu}>TRABAJA CON NOSOTROS</NavLink>
                </li>
                <li className='Header_nav_menu_item_m'>
                    <NavLink to="/contacto" onClick={toggleMenu}>CONTACTO</NavLink>
                </li>
            </ul>
        </nav>
  )
}

export default NavMobile;