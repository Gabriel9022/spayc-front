import React from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import './LogoutButton.css';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_URL}/users/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        alert('Sesión cerrada correctamente');
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
        navigate('/login');
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
