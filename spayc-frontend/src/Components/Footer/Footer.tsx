import React from 'react';
import './Footer.css';
import facebook_black_icon from '../../assets/images/Footer/social_media_icons/facebook_black_icon.png';
import facebook_circle_black_icon from '../../assets/images/Footer/social_media_icons/facebook_circle_black_icon.png';
import instagram_black_icon from '../../assets/images/Footer/social_media_icons/instagram_black_icon.png';
import instagram_circle_black_icon from '../../assets/images/Footer/social_media_icons/instagram_circle_black_icon.png';

const Footer: React.FC = () => {
  return (
    <div className='Footer_component'>
        <div className='Footer_section'>
            <div className='Footer_firstSection_container'>
                <div className='logo_container'>
                    <p>SPAYC</p>
                </div>
                <div className='socialMedia_container'>
                    <div className='socialMedia_icon_container'>
                        <a className='Footer_link' href="https://www.facebook.com">
                            <img className='socialMedia_icon' src={facebook_black_icon} alt="" />                           
                        </a>
                    </div>
                    <div className='socialMedia_icon_container'>
                        <a className='Footer_link' href="https://www.facebook.com">
                            <img className='socialMedia_icon' src={facebook_circle_black_icon} alt="" />
                        </a>
                    </div>
                    <div className='socialMedia_icon_container'>
                        <a className='Footer_link' href="https://www.instagram.com">
                            <img className='socialMedia_icon' src={instagram_black_icon} alt=""/>                           
                        </a>
                    </div>
                    <div className='socialMedia_icon_container'>
                        <a className='Footer_link' href="https://www.instagram.com">
                            <img className='socialMedia_icon' src={instagram_circle_black_icon} alt=""/>                           
                        </a>
                    </div>
                </div>
            </div>
            <div className='Footer_secondSection_container'>
                <ul className='Footer_secondSection_ul'>
                    <li>Contactanos</li>
                    <li>351 545 9115</li>
                    <li>contacto@spayc.com</li>
                    <li>dirección</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer