import React, { useState } from 'react';
import './Contact.css'
import { useForm, SubmitHandler } from 'react-hook-form';
import { validationRules } from '../../utils/validationRules';
import { ContactFormInputs } from '../../utils/Interface';
import { useConfirmationModal } from '../../hooks/useConfirmationModal';

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showModal, ModalComponent } = useConfirmationModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      message: ''
    }
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/contact/contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if(response.ok) { 
          await showModal('Formulario enviado con éxito');
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

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
        <section className="Contact_banner">
          <div className="Contact_banner_title">
            <h1>¿Cómo Contactar con nosotros?</h1>
          </div>
        </section>
        <section className='Contact_intro_section'>
          <p className='Contact_intro_description'>En SPAYC valoramos la comunicación directa y efectiva, si tiene alguna consulta o necesita más información sobre nuestros servicios, no dude en contactarnos y un asesor se comunicará con usted.</p>
        </section>
        <section className='Contact_info_form_sections'>
          <div className='Contact_section_info'>
            <h2 className='Contact_info_title'>Contactanos</h2>
            <div className='Contact_info_container'>
              <p>Ciudad: <span>Córdoba</span></p>
              <p>Teléfono: <a href='https://wa.me/5493547571781?text=SPAYC%20leí%20los%20servicios%20en%20su%20página%20y%20quería%20consultar%20acerca%20de:' target="_blank" rel="noopener noreferrer"><span>3547 571781</span></a></p>
              <p>Mail: <a href='mailto:spaycserviciosprofesionales@gmail.com' target="_blank" rel="noopener noreferrer"><span>spaycserviciosprofesionales@gmail.com</span></a></p>
              <p>Instagram: <a href='https://www.instagram.com/spaycserviciospersonasmayores/' target="_blank" rel="noopener noreferrer"><span>@spaycserviciospersonasmayores</span></a></p>
              <p>Facebook: <span>/spayc</span></p>
            </div>
          </div>
          <div className='Contact_section_form'>
            <h2 className='Contact_form_title'>Escribinos</h2>
            <div className='Contact_form_container'>
              <form className='Contact_form' onSubmit={handleSubmit(onSubmit)}>
                <div className='Contact_container_name_lastName'>
                  <div className='Contact_container_name'>
                    <label>Nombre</label>
                    <input className={`Contact_input ${errors.firstName ? 'input_error' : ''}`} type="text" placeholder='Nombre' {...register("firstName", validationRules.firstName)} />
                    {errors.firstName && <p className='error_message'>{errors.firstName?.message}</p>}
                  </div>
                  <div className='Contact_container_lastName'>
                    <label>Apellido</label>
                    <input className={`Contact_input ${errors.lastName ? 'input_error' : ''}`} type="text" placeholder='Apellido' {...register("lastName", validationRules.lastName)} />
                    {errors.lastName && <p className='error_message'>{errors.lastName?.message}</p>}
                  </div>
                </div>
                <div className='Contact_container_email'>
                  <label>Email</label>
                  <input className={`Contact_input ${errors.email ? 'input_error' : ''}`} type="email" placeholder='Email' {...register("email", validationRules.email)} />
                  {errors.email && <p className='error_message'>{errors.email?.message}</p>}
                </div>
                <div className='Contact_container_tel'>
                  <label>Teléfono</label>
                  <input className={`Contact_input ${errors.tel ? 'input_error' : ''}`} type="tel" placeholder='Teléfono' {...register("tel", validationRules.tel)} />
                  {errors.tel && <p className='error_message'>{errors.tel?.message}</p>}
                </div>
                <div className='Contact_container_message'>
                  <label>Mensaje</label>
                  <textarea className={`Contact_input ${errors.message ? 'input_error' : ''}`} placeholder='Mensaje' {...register("message", validationRules.message)} />
                  {errors.message && <p className='error_message'>{errors.message?.message}</p>}
                </div>
                <button className='btn_submit' type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <div className="spinner"></div>
                  ) : (
                    'Enviar'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      {ModalComponent}
    </div>
  )
}

export default Contact;