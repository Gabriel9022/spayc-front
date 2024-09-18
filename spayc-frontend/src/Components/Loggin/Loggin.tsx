import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validationRules } from '../../utils/validationRules';
import { Inputs } from '../../utils/Interface';
import './Loggin.css';


const Loggin: React.FC = () => {
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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    try {
      if (forgotPass) {
        console.log('El usuario olvidó su contraseña', data.userName);
        // Lógica para restablecer contraseña
      } else {
        console.log('Datos de inicio de sesión:', data);
        // Lógica de inicio de sesión
      }
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
      {errors.password && <p className="Loggin_errors">{errors.password.message}</p>}
    </div>
  );

  return (
    <div className="Loggin_component">
      <div className="Loggin_container">
        <div className="Loggin_form_container">
          <form className="Loggin_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="userName_container">
              <label>Usuario</label>
              <input
                className={`userName_input ${errors.userName ? 'input_error' : ''}`}
                type="text"
                placeholder="Usuario"
                {...register('userName', validationRules.userName)}
              />
              {errors.userName && <p className="Loggin_errors">{errors.userName.message}</p>}
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

export default Loggin;