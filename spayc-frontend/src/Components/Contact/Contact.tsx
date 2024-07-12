import React from 'react';
import './Contact.css'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  tel: string,
  description: string
};

const Contact: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      description: ''
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div className='Contact_component'>
      <div className='Contact_sections'>
        <div className='Contact_section_info'>
          <p>
            Ciudad: Córdoba <br/>
            Teléfono: -Patri y Majo- <br/>
            Mail: ... <br/>
            IG: ... <br/>
            Facebook: ...
          </p>
        </div>
        <div className='Contact_section_form'>
          <p>Escribinos</p><br/>
          <div className='Contact_form_container'>
            <form className='Contact_form' onSubmit={handleSubmit(onSubmit)}>
              <div className='Contact_name_lastName'>
                <div className='Contact_name'>
                  <label>Nombre:</label>
                  <input type="text" {...register("firstName", 
                    { required: "Este campo es obligatorio",
                      minLength: {
                        value: 4,
                        message: 'Debe contener al menos 4 letras.'
                      },
                      maxLength: {
                        value: 10,
                        message: "La cantidad máxima de letras es 10."
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Solo puede contener letras y sin espacios.'
                      }
                    }
                  )}/>
                  {errors.firstName && <p className='Contact_errors'>{errors.firstName?.message}</p>}
                </div>
                <div className='Contact_lastName'>
                  <label>Apellido:</label>
                  <input type="text" {...register("lastName", 
                    { required: "Este campo es obligatorio",
                      minLength: {
                        value: 4,
                        message: 'Debe contener al menos 4 letras.'
                      },
                      maxLength: {
                        value: 10,
                        message: "La cantidad máxima de letras es 10."
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Solo puede contener letras y sin espacios.'
                      }        
                    }    
                  )}/>
                  {errors.lastName && <p className='Contact_errors'>{errors.lastName?.message}</p>}
                </div>
              </div>
              <label>Email:</label>
              <input type="email" {...register("email", 
                { required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'El formato del email es incorrecto.'
                  }        
                }            
              )}/>
              {errors.email && <p className='Contact_errors'>{errors.email?.message}</p>}
              <label>Teléfono:</label>
              <input type="tel" {...register("tel",
                { required: "Este campo es obligatorio",
                  minLength: {
                    value: 6,
                    message: "Cantidad de dígitos inválida"
                  }, 
                  maxLength: {
                    value: 15,
                    message: "Cantidad de dígitos inválida"
                  },
                  pattern: {
                    value: /^[0-9()+-]+$/,
                    message: 'Número de teléfono inválido.'
                  }
                
                }
              )}/>
              {errors.tel && <p className='Contact_errors'>{errors.tel?.message}</p>}
              <label>Mensaje:</label>
              <input type="text" {...register("description", 
                { required: "Este campo es obligatorio",
                  maxLength: {
                    value: 600,
                    message: "Se permiten hasta 600 caracteres"
                  }
                 }
                )}/>
              {errors.description && <p className='Contact_errors'>{errors.description?.message}</p>}
              
              <input type="submit" />

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact