import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ServicesType } from '../../../utils/Interface';

interface ServiceCreateFormProps {
  onSubmit: SubmitHandler<{ service: ServicesType; panelSource: boolean; }>;
  isLoading: boolean;
  service: ServicesType;
  setService: React.Dispatch<React.SetStateAction<ServicesType>>;
  handleCreateModal: () => void;
  panelSource: boolean;
}

const ServiceCreateForm: React.FC<ServiceCreateFormProps> = ({ onSubmit, isLoading, service, setService, handleCreateModal, panelSource }) => {
  const [newDescription, setNewDescription] = useState<string>('');
  const [errorDescription, setErrorDescription] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<{ service: ServicesType; panelSource: boolean }>({
    defaultValues: {
      service: service,
      panelSource: panelSource,
    }
  });

  const validateDescription = (description: string) => {
    if (description.length < 20) {
      setErrorDescription("La cantidad mínima de caracteres es 20.");
      return false;
    }
    if (description.length > 300) {
      setErrorDescription("La cantidad máxima de caracteres es 300.");
      return false;
    }
    setErrorDescription('');
    return true;
  };

  const handleAddDescription = () => {
    if (validateDescription(newDescription)) {
      setService((prevObjeto) => ({
        ...prevObjeto,
        description: [...prevObjeto.description, newDescription],
      }));
      setNewDescription('');
      setValue('service.description', []);
    }
  };

  return (
    <form className='form_modal' onSubmit={handleSubmit(onSubmit)}>
      <div className='form_content'>
        <div className='title'>
          <div className='input_container'>
            <label>Título</label>
            <input
              className='title_content'
              type="text"
              placeholder='Título'
              {...register('service.title', {
                required: "Este campo es requerido.",
                minLength: { value: 5, message: "La cantidad mínima de caracteres es 5." },
                maxLength: { value: 40, message: "La cantidad máxima de caracteres es 40." }
              })}
            />
            {errors.service?.title && <p className='create_errors'>{errors.service.title.message}</p>}
          </div>
        </div>
        <div className='description'>
          <div className='input_container'>
            <label>Descripción</label>
            <textarea
              className='description_content'
              placeholder='Descripción'
              value={newDescription}
              {...register('service.description', {
                validate: () => service.description.length > 0 || newDescription.trim() !== '' || 'Este campo es requerido.',
                minLength: { value: 20, message: "La cantidad mínima de caracteres es 20." },
                maxLength: { value: 300, message: "La cantidad máxima de caracteres es 300." },
                onChange: (e) => {
                  setNewDescription(e.target.value);
                  validateDescription(e.target.value);
                }
              })}
            />
          </div>
          <button type='button' disabled={!!errorDescription} onClick={handleAddDescription}>+ Agregar descripción</button>
          {errorDescription && <p className='create_errors'>{errorDescription}</p>}
          {errors.service?.description && <p className='create_errors'>{errors.service.description.message}</p>}
          {service.description.length > 0 && (
            <div className='description_array_container'>
              <ul>
                {service.description.map((description, index) => (
                  <li key={index} className="services_description">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <button className='cancel_button' type="button" onClick={handleCreateModal}>Close</button>
      <button className='service_submit' type="submit" disabled={!service.description.length || isLoading}>
        {isLoading ? <div className='spinner'></div> : 'Crear'}
      </button>
    </form>
  );
};

export default ServiceCreateForm;
