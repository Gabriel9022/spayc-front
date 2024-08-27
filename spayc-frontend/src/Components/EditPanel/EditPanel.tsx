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
  const [editMenu, setEditMenu] = useState<boolean>(false);
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [serviceEdit, setServiceEdit] = useState<ServicesType>({
    id: -1,
    title: '',
    description: [],
    image: '',
    isActive: true,
  });
  const [serviceCreate, setServiceCreate] = useState<ServicesType>({
    id: -1,
    title: '',
    description: [],
    image: '',
    isActive: true,
  });
  //const [descriptionArray, setDescriptionArray] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [panelSource, setPanelSource] = useState<boolean>(true)

  const modalRef = useRef<HTMLDivElement>(null);

  const expandMenu = () => setMenu(!menu);
  const expandEditMenu = () => setEditMenu(!editMenu);

  const handleCreateModal = () => {
    setCreateModal(!createModal);
    setPanelSource(true);
  };
  const handleEditModal = () => {
    setEditModal(!editModal);
    setPanelSource(false);
  };

  const handleEditService = (service: ServicesType) => {
    handleEditModal();
    setServiceEdit(service);
  }

  const onSubmit: SubmitHandler<{ service: ServicesType; panelSource: boolean }> = (data) => {
    try {
      setIsLoading(true);
      // const response = await sendDataToServer({ ...data, description: descriptionArray });
      // if (response.status === 200) { 
      console.log(panelSource)
      console.log('Form submitted successfully', { ...data.service, description: data.service.description });
      // reset();
      //setDescriptionArray([]);
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
                  Crear nuevo servicio
                </div>
                <div className='Edit_elements' onClick={expandEditMenu}>
                  {/*opcion 1: botón que agregar el lapiz y cruz a todos los elementos,
                           opcion 2: desplegable con n elementos como servicios existen y al hacer clic en cada uno muestre el servicio correspondiente ya listo para ser editado o borrado
                           */}
                  Editar servicio
                </div>
                {editMenu && (
                    <div className='Edit_menu'>
                      {servicesArray.map((service) => {
                        return (
                          <div key={service.id} className='Edit_menu_option' onClick={() => handleEditService(service)}>{service.title}</div>
                        )
                      })}
                    </div>
                  )}
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
                service={serviceCreate}
                setService={setServiceCreate}
                handleCreateModal={handleCreateModal}
                panelSource={panelSource}
              />
            </div>
          </div>
        )}
        {editModal && (
          <div className='edit_modal' ref={modalRef}>
            <div className='modal_content'>
              <h2>Editar servicio</h2>
              <ServiceCreateForm
                onSubmit={onSubmit}
                isLoading={isLoading}
                service={serviceEdit}
                setService={setServiceEdit}
                handleCreateModal={handleEditModal}
                panelSource={panelSource}
              />
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default EditPanel;