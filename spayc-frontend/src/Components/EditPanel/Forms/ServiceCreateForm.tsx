import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ServicesType } from '../../../utils/Interface';

interface ServiceCreateFormProps {
  onSubmit: SubmitHandler<{ service: ServicesType; panelSource: boolean; descriptionArray: string[]; file: FileList }>;
  isLoading: boolean;
  service: ServicesType;
  setService: React.Dispatch<React.SetStateAction<ServicesType>>;
  handleCreateModal: () => void;
  panelSource: boolean;
  descriptionArray: string[];
  setDescriptionArray: React.Dispatch<React.SetStateAction<string[]>>;
 // file: FileList;
}

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

const ServiceCreateForm: React.FC<ServiceCreateFormProps> = ({ onSubmit, isLoading, service, handleCreateModal, panelSource, descriptionArray, setDescriptionArray }) => {
  const [newDescription, setNewDescription] = useState<string>('');
  const [errorDescription, setErrorDescription] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    clearErrors,
  } = useForm<{ service: ServicesType; panelSource: boolean; descriptionArray: string[]; file: FileList }>({
    defaultValues: {
      service: service,
      panelSource: panelSource,
      descriptionArray: descriptionArray,
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
      const updatedArray = [...descriptionArray, newDescription];
      setDescriptionArray(updatedArray);
      setNewDescription('');
      setValue('descriptionArray', updatedArray);
    }
  };

  useEffect(() => {
    setValue('descriptionArray', descriptionArray);
  }, [descriptionArray, setValue]);

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
              onChange={(e) => {
                setNewDescription(e.target.value);
                validateDescription(e.target.value);
              }}
            />
          </div>
          <button type='button' disabled={!!errorDescription} onClick={handleAddDescription}>+ Agregar descripción</button>
          {errorDescription && <p className='create_errors'>{errorDescription}</p>}
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
        <div className='Image_file'>
          <label>Adjuntar imagen</label>
          <input className='Image_file_input'
            type="file"
            {...register('file', {
              required: 'La imagen es requerido.'
            })}
            onChange={(e) => {
              clearErrors("file");
              validateFileSize(e?.target.files);
            }}
          />
          {errors.file && <p className='Contact_errors'>{errors.file.message}</p>}
        </div>
      </div>
      <button className='cancel_button' type="button" onClick={handleCreateModal}>Close</button>
      <button className='service_submit' type="submit" disabled={!descriptionArray.length || isLoading}>
        {isLoading ? <div className='spinner'></div> : 'Crear'}
      </button>
    </form>
  );
};

export default ServiceCreateForm;
