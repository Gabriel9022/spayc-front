import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ServicesType } from '../../../utils/Interface';
import { useServicesContext } from '../../../hooks/useServicesContext';

interface ServiceCreateFormProps {
  onSubmit: SubmitHandler<{ service: ServicesType; panelSource: boolean; descriptionArray: string[]; file: FileList | null }>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  service: ServicesType;
  setService: React.Dispatch<React.SetStateAction<ServicesType>>;
  handleCreateModal: () => void;
  panelSource: boolean;
  descriptionArray: string[];
  setDescriptionArray: React.Dispatch<React.SetStateAction<string[]>>;
}

interface descriptionObject {
  description: string;
  index: number;
}

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

const ServiceCreateForm: React.FC<ServiceCreateFormProps> = ({ onSubmit, isLoading, setIsLoading, service, handleCreateModal, panelSource, descriptionArray, setDescriptionArray }) => {
  const { refreshServices } = useServicesContext();
  const [newDescription, setNewDescription] = useState<string>('');
  const [errorDescription, setErrorDescription] = useState<string>('');
  const [editIndividualDescription, setEditIndividualDescription] = useState<boolean>(false);
  const [oldDescription, setOldDescription] = useState<descriptionObject>({
    description: '',
    index: 0
  });
  const [confirmIsActiveService, setConfirmIsActiveService] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    clearErrors,
  } = useForm<{ service: ServicesType; panelSource: boolean; descriptionArray: string[]; file: FileList | null }>({
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
    if (description.length > 400) {
      setErrorDescription("La cantidad máxima de caracteres es 400.");
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


  const handleEditButton = (index: number) => {
    setEditIndividualDescription(true);
    setOldDescription({ description: descriptionArray[index], index });
  };

  const handleDeleteButton = (index: number) => {
    setDescriptionArray(descriptionArray.filter((e) => descriptionArray.indexOf(e) != index));
  };

  const handleSaveEditDescripcion = () => {
    setDescriptionArray(descriptionArray.map((e, i) => {
      if (i === oldDescription.index) {
        return oldDescription.description
      } else {
        return e
      }
    }));
    setErrorDescription('');
    setEditIndividualDescription(false);
  };

  const handleCancelEditDescription = () => {
    setEditIndividualDescription(false);
    setErrorDescription('');
  };

  const handleIsActiveService = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('id', service.id.toString());
      formData.append('isActive', (!service.isActive).toString());

      const response = await fetch('http://localhost:3001/admin/isActiveService', {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        await refreshServices();
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setConfirmIsActiveService(false);
      handleCreateModal();
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
              onChange={(e) => {
                setNewDescription(e.target.value);
                validateDescription(e.target.value);
              }}
            />
          </div>
          <button className='btn_submit' type='button' disabled={!!errorDescription} onClick={handleAddDescription}>+ Agregar descripción</button>
          {!editIndividualDescription && errorDescription && <p className='create_errors'>{errorDescription}</p>}
          {descriptionArray.length > 0 && (
            <div className='description_array_container'>
              <ul>
                {descriptionArray.map((description, index) => (
                  <li key={index} className="services_description">
                    {description}
                    <div className='description_buttons'>
                      <button className='edit_button_description' type='button' onClick={() => handleEditButton(index)}>±</button>
                      <button className='delete_button_description' type='button' onClick={() => handleDeleteButton(index)}>x</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className='image_file'>
          {panelSource ? (<>
            <label>Adjuntar imagen</label>
            <input className='image_file_input'
              type="file"
              {...register('file', {
                required: 'La imagen es requerido.'
              })}
              onChange={(e) => {
                clearErrors("file");
                validateFileSize(e?.target.files);
              }}
            />
          </>) :
            <>
              <label>Editar imagen</label>
              <input className='image_file_input'
                type="file"
                {...register('file')}
                onChange={(e) => {
                  clearErrors("file");
                  validateFileSize(e?.target.files);
                }}
              />
            </>
          }
          {errors.file && <p className='Contact_errors'>{errors.file.message}</p>}
        </div>
        <div className='form_buttons'>
          {panelSource ? null :
            <button className='is_active_button' type="button" onClick={() => setConfirmIsActiveService(true)}>
              {isLoading ? <div className='spinner'></div> :
                service.isActive ? <span>Desactivar</span> : <span>Activar</span>} </button>}
          <button className='btn_submit' type="submit" disabled={!descriptionArray.length || isLoading}>
            {panelSource ?
              isLoading ? <div className='spinner'></div> : 'Crear' :
              isLoading ? <div className='spinner'></div> : 'Guardar'}
          </button>
        </div>
        {editIndividualDescription && (
          <div className='edit_individual_description'>
            <textarea
              className='description_content'
              value={oldDescription.description}
              onChange={(e) => {
                setOldDescription({
                  ...oldDescription,
                  description: e.target.value
                });
                validateDescription(e.target.value);
              }} />
            {editIndividualDescription && errorDescription && <p className='create_errors'>{errorDescription}</p>}
            <div className='form_buttons'>
            <button className='btn_submit' type='button' onClick={handleSaveEditDescripcion}>Guardar</button>
            <button className='cancel_button' type='button' onClick={handleCancelEditDescription}>Cancelar</button>
            </div>
          </div>
        )}
        {confirmIsActiveService ?
          <div className='confirm_is_active_service'>
            <div className='is_active_question'>
              {service.isActive ?
                <span>¿Estás seguro que deseas desactivar este servicio?</span> :
                <span>¿Estás seguro que deseas activar este servicio?</span>}
            </div>
            <div className='form_buttons'>
              <button className='btn_submit' type='button' onClick={handleIsActiveService}>
                {service.isActive ?
                  <span>Desactivar</span> : <span>Activar</span>}
              </button>
              <button className='cancel_button' type='button' onClick={() => setConfirmIsActiveService(false)}>Cancelar</button>
            </div>
          </div> :
          null}
      </div>
    </form>
  );
};

export default ServiceCreateForm;
