import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import WorkWithUsImage from '../../assets/images/WorkWithUs/WorkWithUs_img.png';
import './WorkWithUs.css'
import { validationRules } from '../../utils/validationRules';
import { WorkWithUsFormInputs } from '../../utils/Interface';
import { useConfirmationModal } from '../../hooks/useConfirmationModal';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

const WorkWithUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showModal, ModalComponent } = useConfirmationModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    clearErrors } = useForm<WorkWithUsFormInputs>({
      defaultValues: {
        name: '',
        email: '',
        tel: '',
        message: ''
      }
    });

  const validateFileSize = (file: FileList | null): boolean => {
    if (file && file[0] && file[0].size > MAX_FILE_SIZE) {
      setError("file", {
        type: "manual",
        message: "El archivo excede el tamaño máximo de 2MB",
      });
      return false;
    }
    return true;
  };

  const onSubmit: SubmitHandler<WorkWithUsFormInputs> = async (data) => {
    setIsLoading(true);
    if (!validateFileSize(data.file)) {
      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('tel', data.tel);
    formData.append('message', data.message);
    formData.append('file', data.file[0]);

    try {
      const response = await fetch('http://localhost:3001/workWithUs/workWithUs-contact-email', {
        method: 'POST',
        body: formData,
      });

      if(response.ok) await showModal('Formulario enviado con éxito')
      reset();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='WorkWithUs_component'>
      <div className='WorkWithUs_sections'>
        <section className="WorkWithUs_banner">
          <div className="WorkWithUs_banner_title">
            <h1>¡Trabaja con Nosotros!</h1>
          </div>
        </section>
        <section className='WorkWithUs_section_info'>
          <div className='WorkWithUs_info_container'>
            <div className='WorkWithUs_info'>
              <p className='WorkWithUs_info_description'>En SPAYC, Servicios Profesionales de Apoyo y Cuidado para Personas Mayores, contamos con una sólida trayectoria en el cuidado y acompañamiento de personas mayores. Nos dedicamos a ofrecer servicios de la más alta calidad, enfocados en mejorar la calidad de vida de las personas mayores y sus familias.</p>
              <p className='WorkWithUs_info_description'>Buscamos profesionales comprometidos y altamente capacitados que compartan nuestra pasión por el cuidado y el bienestar.</p>
              <p className='WorkWithUs_info_description'>Si contas con conocimientos, experiencia en el rubro y un fuerte deseo de hacer una diferencia positiva en la vida de las personas mayores y sus familias, CONTACTATE con nosotros y formá parte de nuestro equipo!</p>
            </div>
            <div className='WorkWithUs_image_container'>
              <img className='WorkWithUs_image' src={WorkWithUsImage} alt="imagen trabaja con nosotros" />
            </div>
          </div>
          <div className='WorkWithUs_perfil_container'>
            <div className='WorkWithUs_perfil'>
              <p className='WorkWithUs_perfil_description'>Conocé el <Link to="/profesionales">PERFIL DE NUESTROS PROFESIONALES</Link></p>
            </div>
          </div>
        </section>
        <section className='WorkWithUs_section_form'>
          <div className='WorkWithUs_section_form_container'>
            <h2 className='WorkWithUs_form_title'>Si querés formar parte de SPAYC completa el siguiente formulario</h2>
            <div className='WorkWithUs_form_container'>
              <form className='WorkWithUs_form' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className='WorkWithUs_container_name'>
                  <label>Nombre</label>
                  <input className={`WorkWithUs_input ${errors.name ? 'input_error' : ''}`} placeholder='Nombre' {...register('name', validationRules.name)} />
                  {errors.name && <p className='error_message'>{errors.name.message}</p>}
                </div>
                <div className='WorkWithUs_container_email'>
                  <label>Email</label>
                  <input className={`WorkWithUs_input ${errors.email ? 'input_error' : ''}`} type="email" placeholder='Email' {...register('email', validationRules.email)} />
                  {errors.email && <p className='error_message'>{errors.email.message}</p>}
                </div>
                <div className='WorkWithUs_container_tel'>
                  <label>Teléfono</label>
                  <input className={`WorkWithUs_input ${errors.tel ? 'input_error' : ''}`} type="tel" placeholder='Teléfono' {...register("tel", validationRules.tel )} />
                  {errors.tel && <p className='error_message'>{errors.tel?.message}</p>}
                </div>
                <div className='WorkWithUs_container_message'>
                  <label>Mensaje</label>
                  <textarea className={`WorkWithUs_input ${errors.message ? 'input_error' : ''}`} placeholder='Escriba aquí un mensaje'
                    {...register('message', validationRules.message)} />
                  {errors.message && <p className='error_message'>{errors.message.message}</p>}
                </div>
                <div className='WorkWithUs_container_file'>
                  <label>Adjuntar (CV)</label>
                  <input className='WorkWithUs_input_file'
                    type="file"
                    {...register('file', {
                      required: 'El archivo de CV es requerido.'
                    })}
                    onChange={(e) => {
                      clearErrors("file");
                      validateFileSize(e?.target.files);
                    }}
                  />
                  {errors.file && <p className='error_message'>{errors.file.message}</p>}
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
  );
};

export default WorkWithUs