import React, {useState} from 'react';
import './Contact.css'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  tel: string,
  message: string
};

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      message: ''
    }
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/contact/contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:  JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      reset();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className='Contact_component'>
      <div className='Contact_sections'>
      <div className="Contact_banner">
            <div className="Contact_banner_title">
              <h1>¿Cómo Contactar con nosotros?</h1>
            </div>
        </div>
        <div className='Contact_intro_section'>
          <p className='Contact_intro_description'>En SPAYC valoramos la comunicación directa y efectiva, si tiene alguna consulta o necesita más información sobre nuestros servicios, no dude en contactarnos y un asesor se comunicará con Ud.</p>
        </div>
        <div className='Contact_info_form_sections'>
          <div className='Contact_section_info'>
            <h2 className='Contact_info_title'>Contactanos</h2>
            <div className='Contact_info_container'>
                <p>Ciudad: <span>Córdoba</span></p>
                <p>Teléfono: <span>XXX XXXX XXXX</span></p>
                <p>Mail: <span>spaycserviciosprofesionales@gmail.com</span></p>
                <p>Instagram: <a href='https://www.instagram.com/spaycserviciospersonasmayores/' target="_blank" rel="noopener noreferrer"><span>@spaycserviciospersonasmayores</span></a></p>
                <p>Facebook: <span>/spaycok</span></p>
            </div>
          </div>
          <div className='Contact_section_form'>
            <h2 className='Contact_form_title'>Escribinos</h2>
            <div className='Contact_form_container'>
              <form className='Contact_form' onSubmit={handleSubmit(onSubmit)}>
                <div className='Contact_container_name_lastName'>
                  <div className='Contact_container_name'>
                    <label>Nombre</label>
                    <input className='Contact_input' type="text" placeholder='Nombre' {...register("firstName",
                      {
                        required: "Este campo es obligatorio",
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
                    )} />
                    {errors.firstName && <p className='Contact_errors'>{errors.firstName?.message}</p>}
                  </div>
                  <div className='Contact_container_lastName'>
                    <label>Apellido</label>
                    <input className='Contact_input' type="text" placeholder='Apellido' {...register("lastName",
                      {
                        required: "Este campo es obligatorio",
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
                    )} />
                    {errors.lastName && <p className='Contact_errors'>{errors.lastName?.message}</p>}
                  </div>
                </div>
                <div className='Contact_container_email'>
                  <label>Email</label>
                  <input className='Contact_input' type="email" placeholder='Email' {...register("email",
                    {
                      required: "Este campo es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'El formato del email es incorrecto.'
                      }
                    }
                  )} />
                  {errors.email && <p className='Contact_errors'>{errors.email?.message}</p>}
                </div>
                <div className='Contact_container_tel'>
                  <label>Teléfono</label>
                  <input className='Contact_input' type="tel" placeholder='Teléfono' {...register("tel",
                    {
                      required: "Este campo es obligatorio",
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
                  )} />
                  {errors.tel && <p className='Contact_errors'>{errors.tel?.message}</p>}
                </div>
                <div className='Contact_container_message'>
                  <label>Mensaje</label>
                  <textarea className='Contact_input' placeholder='Mensaje' {...register("message",
                    {
                      required: "Este campo es obligatorio",
                      maxLength: {
                        value: 600,
                        message: "Se permiten hasta 600 caracteres"
                      }
                    }
                  )} />
                  {errors.message && <p className='Contact_errors'>{errors.message?.message}</p>}
                </div>
                <button className='Contact_submit' type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <div className="spinner"></div>
                    ) : (
                      'Enviar'
                    )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;