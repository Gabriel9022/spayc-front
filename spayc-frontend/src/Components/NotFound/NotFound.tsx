import React from 'react';
import notFoundImg from '../../assets/images/NotFound/notFound.webp';
import './NotFound.css';

const NotFound: React.FC = () => {
    return (
        <div className='NotFound_component'>
            <div className='NotFound_container'>
                <div className='NotFound_info_container'>
                    <h2>Página no encontrada</h2>
                    <p>Lo sentimos, la página que buscas no existe.</p>
                    <a href="/">Volver al inicio</a>
                </div>
                <div className='NotFound_img_container'>
                    <img src={notFoundImg} alt="imagen not found" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;