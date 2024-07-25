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
        <div className='Contact_intro_section'>
          <p className='Contact_intro_title'>¡Ponte en <h1>Contacto</h1> con Nosotros!</p>
          <p className='Contact_intro_description'>En SPAYC, valoramos la comunicación directa y efectiva con nuestros clientes. Si tienes alguna pregunta, comentario o necesitas más información sobre nuestros servicios, no dudes en contactarnos. Estamos aquí para ayudarte.</p>
        </div>
        <div className='Contact_info_form_sections'>
          <div className='Contact_section_info'>
            <p className='Contact_info_title'>Contactanos</p>
            <div className='Contact_info_container'>
                <p>Ciudad: Córdoba</p>
                <p>Teléfono: XXX XXXX XXXX</p>
                <p>Mail: spaycserviciosprofesionales@gmail.com</p>
                <p>Instagram: @spaycok</p>
                <p>Facebook: /spaycok</p>
            </div>
          </div>
          <div className='Contact_section_form'>
            <p className='Contact_form_title'>Escribinos</p>
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
                  <textarea className='Contact_input' placeholder='Mensaje' {...register("description",
                    {
                      required: "Este campo es obligatorio",
                      maxLength: {
                        value: 600,
                        message: "Se permiten hasta 600 caracteres"
                      }
                    }
                  )} />
                  {errors.description && <p className='Contact_errors'>{errors.description?.message}</p>}
                </div>
                <input className='Contact_submit' type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact