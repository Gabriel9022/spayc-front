import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ServicesType } from '../../../utils/Interface';

interface ServiceCreateFormProps {
  onSubmit: SubmitHandler<ServicesType>;
  isLoading: boolean;
  descriptionArray: string[];
  setDescriptionArray: React.Dispatch<React.SetStateAction<string[]>>;
}

const ServiceCreateForm: React.FC<ServiceCreateFormProps> = ({ onSubmit, isLoading, descriptionArray, setDescriptionArray }) => {
  const [newDescription, setNewDescription] = useState<string>('');
  const [errorDescription, setErrorDescription] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<ServicesType>({
    defaultValues: {
      title: '',
      description: [],
      image: '',
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
      setDescriptionArray((prevArray) => [...prevArray, newDescription]);
      setNewDescription('');
      setValue('description', []);
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
              {...register('title', {
                required: "Este campo es requerido.",
                minLength: { value: 5, message: "La cantidad mínima de caracteres es 5." },
                maxLength: { value: 40, message: "La cantidad máxima de caracteres es 40." }
              })}
            />
            {errors.title && <p className='create_errors'>{errors.title.message}</p>}
          </div>
        </div>
        <div className='description'>
          <div className='input_container'>
            <label>Descripción</label>
            <textarea
              className='description_content'
              placeholder='Descripción'
              value={newDescription}
              {...register('description', {
                validate: () => descriptionArray.length > 0 || newDescription.trim() !== '' || 'Este campo es requerido.',
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
          {errors.description && <p className='create_errors'>{errors.description.message}</p>}
          {descriptionArray.length > 0 && (
            <div className='description_array_container'>
              <ul>
                {descriptionArray.map((description, index) => (
                  <li key={index} className="services_description">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <button className='cancel_button' type="button">Close</button>
      <button className='service_submit' type="submit" disabled={!descriptionArray.length || isLoading}>
        {isLoading ? <div className='spinner'></div> : 'Crear'}
      </button>
    </form>
  );
};

export default ServiceCreateForm;
