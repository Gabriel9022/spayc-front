import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validationRules } from '../../utils/validationRules';
import { Inputs } from '../../utils/Interface';
import './Login.css';


const Login: React.FC = () => {
  const [forgotPass, setForgotPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

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
        console.log('El usuario olvidó su contraseña', data.userName);
        // Lógica para restablecer contraseña
        const response: Response = await fetch('http://localhost:3001/users/forgotPassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({user: parseInt(data.userName)}),
        });
        if (response.ok) {
          alert('Revisa tu mail');
          window.location.href = '/login'; // Redireccionar a otra página
        }

      } else {
        console.log('Datos de inicio de sesión:', data);
        // Lógica de inicio de sesión
        const response: Response = await fetch('http://localhost:3001/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: parseInt(data.userName), password: data.password}),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token); // Guarda el token en localStorage
          alert('Login exitoso!');
          window.location.href = '/panel'; // Redireccionar a otra página
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
      <input
        className={`password_input ${errors.password ? 'input_error' : ''}`}
        type="password"
        placeholder="Contraseña"
        {...register('password', validationRules.password)}
      />
      {errors.password && <p className="Login_errors">{errors.password.message}</p>}
    </div>
  );

  return (
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
              {errors.userName && <p className="Login_errors">{errors.userName.message}</p>}
            </div>
            {!forgotPass && renderPasswordField()}
            {!forgotPass ? (
              <>
                {renderForgotPassword()}
                <button type="submit" disabled={isLoading}>
                  {isLoading ? 'Verificando...' : 'Ingresar'}
                </button>
              </>
            ) : (
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar'}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;