import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/useAuthContext';

const API_URL = import.meta.env.VITE_API_URL;

const LogoutButton: React.FC<{ showModal: (msg: string) => Promise<void>}> = ({showModal}) => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${API_URL}/users/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        await showModal('Sesión cerrada correctamente');
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
        navigate('/sp-login');
      } else {
        await showModal('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <button
      className='Auth_Button'
      onClick={handleLogout}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        'Cerrar sesión'
      )}
    </button>
  );
};

export default LogoutButton;
