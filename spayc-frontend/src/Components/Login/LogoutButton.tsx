import React from 'react';
import { API_URL } from '../../utils/config';
import './LogoutButton.css';

const LogoutButton: React.FC = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_URL}/users/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        alert('Sesión cerrada correctamente');
        window.location.href = '/login';
      } else {
        alert('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <button className='Logout_Button' onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
