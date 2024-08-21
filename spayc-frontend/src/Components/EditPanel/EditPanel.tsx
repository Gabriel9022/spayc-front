import React, { useState, useEffect, useRef } from 'react';
import MappingServices from '../Services/MapServices/MappingServices';
import { useServicesContext } from '../../hooks/useServicesContext';
import ServiceCreateForm from './Forms/ServiceCreateForm';
import { SubmitHandler } from 'react-hook-form';
import { ServicesType } from '../../utils/Interface';
import './EditPanel.css';

const EditPanel: React.FC = () => {

  const { servicesArray } = useServicesContext();
  const [menu, setMenu] = useState<boolean>(false);
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [descriptionArray, setDescriptionArray] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const modalRef = useRef<HTMLDivElement>(null);

  const expandMenu = () => setMenu(!menu);
  const handleCreateModal = () => setCreateModal(!createModal);
  const handleEditModal = () => setEditModal(!editModal);

  const onSubmit: SubmitHandler<ServicesType> = async (data) => {
    try {
      setIsLoading(true);
      // const response = await sendDataToServer({ ...data, description: descriptionArray });
      // if (response.status === 200) { 
      console.log('Form submitted successfully', { ...data, description: descriptionArray });
      // reset();
      setDescriptionArray([]);
      // }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setCreateModal(false);
        setEditModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [createModal]);


  return (
    <div className='Edit_panel_component'>
      <div className='Edit_panel_sections'>
        <div className='Edit_panel_menu'>
          <div className='Edit_panel_item'>
            <div onClick={expandMenu}>SERVICIOS</div>
            {menu && (
              <div>
                <div className='Create_element' onClick={handleCreateModal}>
                  Create Element
                </div>
                <div className='Edit_elements' onClick={handleEditModal}>
                  {/*opcion 1: botón que agregar el lapiz y cruz a todos los elementos,
                           opcion 2: desplegable con n elementos como servicios existen y al hacer clic en cada uno muestre el servicio correspondiente ya listo para ser editado o borrado
                           */}
                  Edit Element
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='Edit_panel_visualizer'>
          <div className='Visualizer_container'>
            {menu && <MappingServices services={servicesArray} />}
          </div>
        </div>
        {createModal && (
          <div className='create_modal' ref={modalRef}>
            <div className='modal_content'>
              <h2>Crear nuevo servicio</h2>
              <ServiceCreateForm
                onSubmit={onSubmit}
                isLoading={isLoading}
                descriptionArray={descriptionArray}
                setDescriptionArray={setDescriptionArray}
              />
            </div>
          </div>
        )}
        {editModal && (
          <div className='edit_modal' ref={modalRef}>
          <div className='modal_content'>
            <h2>Editar servicio</h2>


          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default EditPanel;