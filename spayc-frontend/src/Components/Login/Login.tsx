import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { validationRules } from '../../utils/validationRules';
import { Inputs } from '../../utils/Interface';
import WindowSize from '../../hooks/windowsSize';
import MobileWarningModal from './Modal/MobileWarningModal';
import { useAuthContext } from '../../context/useAuthContext';
import LoggedUserModal from './Modal/LoggedUserModal';
import './Login.css';
import { useConfirmationModal } from '../../hooks/useConfirmationModal';

const API_URL = import.meta.env.VITE_API_URL;

const Login: React.FC = () => {
  const [forgotPass, setForgotPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const navigate = useNavigate();
  const windowWidth = WindowSize();
  const isMobile = windowWidth <= 768;

  const { isAuthenticated, setIsAuthenticated } = useAuthContext();
  const { showModal, ModalComponent } = useConfirmationModal();

  const handlePanel = () => {
    navigate('/panel')
}

  const handleLogin = () => {
    setShowMobileWarning(false)
    navigate('/inicio')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    try {

      if (forgotPass) {
        // Lógica para restablecer contraseña
        const response: Response = await fetch(`${API_URL}/users/forgotPassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: parseInt(data.userName) }),
        });
        if (response.ok) {
          await showModal('Revisa tu mail');
          window.location.href = '/login'; // Redireccionar a otra página
        }

      } else {
        // Lógica de inicio de sesión
        const response: Response = await fetch(`${API_URL}/users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ user: parseInt(data.userName), password: data.password }),
        });

        if (response.ok) {
          const data = await response.json();
          
        // Si la validación es exitosa, se actualiza el estado de autenticación global
          setIsAuthenticated(Object.keys(data.validation).length !== 0);

          if (data.validation.isAdmin) {
            if (isMobile) {
              setShowMobileWarning(true);
            } else {
              navigate('/panel');
            }
          } else {
            navigate('/inicio');
          }
        } else {
          await showModal('Usuario o contraseña incorrecta.');
        }
      }
    } catch (error: unknown) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderForgotPassword = () => (
    <label className="forgotPassword_label" onClick={() => setForgotPass(true)}>
      Olvidé mi contraseña.
    </label>
  );

  const renderPasswordField = () => (
    <div className="password_container">
      <label>Contraseña</label>
      <input className={`password_input ${errors.password ? 'input_error' : ''}`}
        type="password" placeholder="Contraseña"
        {...register('password', validationRules.password)}
      />
      {errors.password && <p className="error_message">{errors.password.message}</p>}
    </div>
  );
  
  return (
    <>
      { isAuthenticated ? <LoggedUserModal handlePanel={handlePanel}/> :
        showMobileWarning ?
          <MobileWarningModal handleLogin={handleLogin} /> :
          <div className="Login_component">
            <div className="Login_container">
              <div className="Login_form_container">
                <form className="Login_form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="userName_container">
                    <label>Usuario</label>
                    <input
                      className={`userName_input ${errors.userName ? 'input_error' : ''}`}
                      type="text"
                      placeholder="Usuario"
                      {...register('userName', validationRules.userName)}
                    />
                    {errors.userName && <p className="error_message">{errors.userName.message}</p>}
                  </div>
                  {!forgotPass && renderPasswordField()}
                  {!forgotPass ? (
                    <>
                      {renderForgotPassword()}
                      <button className='btn_submit' type="submit" disabled={isLoading}>
                        {isLoading ? 'Verificando...' : 'Ingresar'}
                      </button>
                    </>
                  ) : (
                    <button className='btn_submit' type="submit" disabled={isLoading}>
                      {isLoading ? 'Enviando...' : 'Enviar'}
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
      }
      {ModalComponent} 
    </>
  );
};

export default Login;