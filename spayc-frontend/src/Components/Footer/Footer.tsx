import React from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';
import facebook_circle_black_icon from '../../assets/images/Footer/social_media_icons/facebook_circle_black_icon.png';
import instagram_black_icon from '../../assets/images/Footer/social_media_icons/instagram_black_icon.png';
import logo from '../../assets/images/Footer/spayc_logo.svg';

const Footer: React.FC = () => {
    const { pathname } = useLocation();
    const url = pathname !== '/panel' && pathname !== '/login';
  return (
    url ?
    <div className='Footer_component'>
        <div className='Footer_section'>
            <div className='Footer_firstSection_container'>
                <div className='logo_container'>
                    <Link to='/inicio'>
                        <img src={logo}  alt="Logo SPAYC" className='logo' />     
                    </Link>
                    <p>Servicios Profesionales de Apoyo y Cuidado para Personas Mayores</p>
                </div>
            </div>
            <div className='Footer_secondSection_container'>
                <ul className='Footer_secondSection_ul'>
                    <li><p>Contactanos</p></li>
                    <li><a href='https://wa.me/5493547571781?text=SPAYC%20leí%20los%20servicios%20en%20su%20página%20y%20quería%20consultar%20acerca%20de:' target="_blank" rel="noopener noreferrer">3547 571781</a></li>
                    <li><a href='mailto:spaycserviciosprofesionales@gmail.com' target="_blank" rel="noopener noreferrer">spaycserviciosprofesionales@gmail.com</a></li>
                </ul>
                <div className='Footer_secondSection_socialMedia'> 
                    <div className='socialMedia_container'>
                        <div className='socialMedia_icon_container'>
                            <a className='Footer_socialmedia_link' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img className='socialMedia_icon' src={facebook_circle_black_icon} alt="" />
                            </a>
                        </div>
                        <div className='socialMedia_icon_container'>
                            <a className='Footer_socialmedia_link' href='https://www.instagram.com/spaycserviciospersonasmayores/' target="_blank" rel="noopener noreferrer">
                                <img className='socialMedia_icon' src={instagram_black_icon} alt=""/>                           
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Rights_reserved_section">
        <p>{`© ${new Date().getFullYear()} SPAYC. Todos los derechos reservados - Powered by Gabriel Machado & Luis Tourn`}</p>
      </div>
    </div>
    :
    null
    )
}

export default Footer