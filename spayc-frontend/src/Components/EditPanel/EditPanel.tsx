import React, { useState, useEffect, useRef } from 'react';
import MappingServices from '../Services/MapServices/MappingServices';
import { useServicesContext } from '../../hooks/useServicesContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ServicesType } from '../../utils/Interface';
import './EditPanel.css';

const EditPanel: React.FC = () => {

  const { servicesArray } = useServicesContext();

  const [menu, setMenu] = useState<boolean>(false);
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [newDescription, setNewDescription] = useState<string>('');
  const [descriptionArray, setDescriptionArray] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorDescription, setErrorDescription] = useState<string>('');

  const modalRef = useRef<HTMLDivElement>(null);


  const expandMenu = () => {
    setMenu(!menu);
  };

  const handleCreateModal = () => {
    setCreateModal(!createModal);
  }


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue
  } = useForm<ServicesType>({
    defaultValues: {
      title: '',
      description: [],
      image: '',
    }
  });

  const onSubmit: SubmitHandler<ServicesType> = async (data) => {
    try {
      setIsLoading(true);
      // const response = await sendDataToServer({ ...data, description: descriptionArray });
      // if (response.status === 200) { 
      console.log('Form submitted successfully', { ...data, description: descriptionArray });
      reset();
      setDescriptionArray([]);
      // }

      // setIsLoading(false); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

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
      setDescriptionArray(prevArray => [...prevArray, newDescription]);
      setNewDescription('');
      setValue('description', []);
    }
  }

  console.log("esto es errorDescription: ", errorDescription)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setCreateModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [createModal]);


  return (
    <div className='Edit_panel_component'>
      <div className='Edit_panel_sections'>
        <div className='Edit_panel_menu'>
          <div className='Edit_panel_item'>
            <div onClick={expandMenu}>SERVICIOS</div>
            {menu ? <div>
              <div className='Create_element' onClick={handleCreateModal}>
                {/*este tiene que ser un botón para ejecutar el create y se tiene que mostrar en el visualizer (puede ser un hook)*/}
                Create Element
              </div>
              <div className='Edit_elements'>
                {/*opcion 1: botón que agregar el lapiz y cruz a todos los elementos,
                           opcion 2: desplegable con n elementos como servicios existen y al hacer clic en cada uno muestre el servicio correspondiente ya listo para ser editado o borrado
                           */}
                Edit Element
              </div>
            </div> :
              <div></div>
            }
          </div>
        </div>
        <div className='Edit_panel_visualizer'>
          <div className='Visualizer_container'>
            {
              menu ?
                <MappingServices services={servicesArray} />
                :
                null
            }
          </div>
        </div>
        {createModal ?
          <div className='create_modal' ref={modalRef}>
            <div className='modal_content'>
              <h2>Crear nuevo servicio</h2>
              <form className='form_modal' onSubmit={handleSubmit(onSubmit)}>
                <div className='form_content'>
                  <div className='title'>
                    <div className='input_container'>
                      <label>Título</label>
                      <input className='title_content' type="text" placeholder='Título'
                        {...register("title",
                          {
                            required: "Este campo es requerido.",
                            minLength: {
                              value: 5,
                              message: "La cantidad mínima de caracteres es 5."
                            },
                            maxLength: {
                              value: 40,
                              message: "La cantidad máxima de caracteres es 40"
                            }
                          }
                        )}
                      />
                      {errors.title && <p className='create_errors'>{errors.title?.message}</p>}
                    </div>
                  </div>
                  <div className='description'>
                    <div className='input_container'>
                      <label>Descripción</label>
                      <textarea className='description_content' placeholder='Descripción' value={newDescription}
                        {...register('description',
                          {
                            validate: () => descriptionArray.length > 0 || newDescription.trim() !== '' || 'Este campo es requerido.',
                            minLength: {
                              value: 20,
                              message: "La cantidad mínima de caracteres es 20."
                            },
                            maxLength: {
                              value: 300,
                              message: "La cantidad máxima de caracteres es 300."
                            },
                            onChange: (e) => {
                              setNewDescription(e.target.value);
                              validateDescription(e.target.value);
                            }
                          }
                        )}
                      />
                    </div>
                    <button type='button' disabled={!!errorDescription} onClick={handleAddDescription}>+ Agregar descripción</button>
                    {errorDescription && <p className='create_errors'>{errorDescription}</p>}
                    {errors.description && <p className='create_errors'>{errors.description?.message}</p>}
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
                <button className='cancel_button' type="button" onClick={() => setCreateModal(false)}>Close</button>
                <button className='service_submit' type="submit" disabled={!descriptionArray.length || isLoading}>
                  {isLoading ? <div className='spinner'></div> : 'Crear'}
                </button>
              </form>
            </div>
          </div> :
          null
        }
      </div>
    </div>
  )
}

export default EditPanel;