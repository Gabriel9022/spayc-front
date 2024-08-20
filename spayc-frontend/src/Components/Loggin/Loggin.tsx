import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Loggin.css';

type Inputs = {
  userName: string,
  password: string,
  forgotPassword: boolean;
};

const Loggin: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      userName: '',
      password: '',
      forgotPassword: false,
    }
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.forgotPassword) {
      console.log("El usuario olvidó su contraseña");
      //armar lógica de pop up para enviar reseteo de contraseña por mail.
      // solucionar que para submitear "olvidó la contraseña", pide si o si los campos requeridos.
    } else {
      console.log("esto es data: ", data)
    }

  };


  return (
    <div className='Loggin_component'>
      <div className='Loggin_container'>
        <div className='Loggin_form_container'>
          <form className='Loggin_form' onSubmit={handleSubmit(onSubmit)}>
            <div className='userName_container'>
              <label>Usuario</label>
              <input className='userName_input' type="text" placeholder='Usuario' {...register("userName",
                {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 15,
                    message: 'Debe contener al menos 15 letras.'
                  },
                  maxLength: {
                    value: 38,
                    message: "La cantidad máxima de letras es 38."
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'El formato del email es incorrecto.'
                  }
                }
              )} />
              {errors.userName && <p className='Loggin_errors'>{errors.userName?.message}</p>}
            </div>
            <div className='password_container'>
              <label>Contraseña</label>
              <input className='password_input' type="text" placeholder='Contraseña' {...register("password",
                {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 5,
                    message: 'Debe contener al menos 5 caracteres.'
                  },
                  maxLength: {
                    value: 15,
                    message: 'La cantidad máxima de caracteres es 15.'
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]+$/,
                    message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un símbolo, y no debe contener espacios en blanco.'
                  }
                }
              )} />
              {errors.password && <p className='Loggin_errors'>{errors.password?.message}</p>}

            </div>
            <div className='forgotPassword_container'>
              <label>
                <input type="checkbox" {...register('forgotPassword')}
                />
                Olvidé mi contraseña.
              </label>
            </div>
            <button type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Loggin