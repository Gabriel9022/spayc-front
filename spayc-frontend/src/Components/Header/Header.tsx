import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo_h from "../../assets/images/Header/spayc_logo.svg";
import logo_f from '../../assets/images/Footer/spayc_logo.svg';
import './Header.css';
import NavDesktop from './nav/NavDesktop';
import NavMobile from './nav/NavMobile';
import WindowSize from '../../hooks/windowsSize';
import facebook_circle_black_icon from '../../assets/images/Footer/social_media_icons/facebook_circle_black_icon.png';
import instagram_black_icon from '../../assets/images/Footer/social_media_icons/instagram_black_icon.png';
import tel from '../../assets/images/Footer/contact_icons/telephone_black_icon.png';

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const url = pathname !== '/panel' && pathname !== '/login';
  const windowWidth = WindowSize();
  const isMobile = windowWidth <= 768;
  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className='Header' id='Header'>
        <div className='Header_content_container'>
          <div className='Header_logo_container'>
            {url ?
              (<Link to="/inicio">
                <img src={isMobile ? logo_f : logo_h} alt="Logo SPAYC" className='logo' />
              </Link>) :
              (<img src={isMobile ? logo_f : logo_h} alt="Logo SPAYC" className='logo' />)
            }
          </div>
          {url ?
            <div className='Header_right_container'>
              {isMobile ? (
                <>
                  <p>Servicios Profesionales de Apoyo y Cuidado para Personas Mayores</p>
                  <NavMobile />
                </>
              ) : (
                <>
                  <div className='Header_info_container'>
                    <div className='Header_info_block'>
                      <p>Servicios Profesionales de Apoyo y Cuidado para Personas Mayores</p>
                    </div>
                    <div className='Header_info_block'></div>
                    <div className='Header_info_block'>
                      <a href='https://wa.me/5493547571781?text=SPAYC%20leí%20los%20servicios%20en%20su%20página%20y%20quería%20consultar%20acerca%20de:' target="_blank" rel="noopener noreferrer">
                        <img className='phone_icon' src={tel} alt="" />
                        <span>3547 571781</span>
                      </a>
                    </div>
                    <div className='Header_info_block'>
                      <div className='socialMedia_container_h'>
                        <div className='socialMedia_icon_container'>
                          <a className='Footer_socialmedia_link' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img className='socialMedia_icon' src={facebook_circle_black_icon} alt="" />
                          </a>
                        </div>
                        <div className='socialMedia_icon_container'>
                          <a className='Footer_socialmedia_link' href='https://www.instagram.com/spaycserviciospersonasmayores/' target="_blank" rel="noopener noreferrer">
                            <img className='socialMedia_icon' src={instagram_black_icon} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='Header_divisor'></div>
                </>
              )}
            </div> :
            <div className='Header_right_container'>
              {isMobile ? 
                <p>Servicios Profesionales de Apoyo y Cuidado para Personas Mayores</p> : 
                null}  
            </div>
          }
        </div>
      </header>
      {!isMobile && url ? (
        <div className={`Header_nav_container ${isSticky ? 'sticky' : ''}`}>
          <NavDesktop />
        </div>
      ) :
        null}
    </>
  )
}

export default Header;