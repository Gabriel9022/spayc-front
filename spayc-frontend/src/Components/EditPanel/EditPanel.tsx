import React, { useState, useEffect, useRef } from 'react';
import MappingServices from '../Services/MapServices/MappingServices';
import { useServicesContext } from '../../hooks/useServicesContext';
import ServiceCreateForm from './Forms/ServiceCreateForm';
import { SubmitHandler } from 'react-hook-form';
import { ServicesType } from '../../utils/Interface';
import './EditPanel.css';

const EditPanel: React.FC = () => {

  const { servicesArray, refreshServices } = useServicesContext();
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
  const [descriptionArray, setDescriptionArray] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [panelSource, setPanelSource] = useState<boolean>(true)

  const modalRef = useRef<HTMLDivElement>(null);

  const expandMenu = () => setMenu(!menu);
  const expandEditMenu = () => setEditMenu(!editMenu);

  const handleCreateModal = () => {
    setCreateModal(!createModal);
    setPanelSource(true);
    setDescriptionArray([]);
  };

  const handleEditModal = () => {
    setEditModal(!editModal);
    setPanelSource(false);
  };

  const handleEditService = (service: ServicesType) => {
    handleEditModal();
    setServiceEdit(service);
  };

  const onSubmit: SubmitHandler<{ service: ServicesType; panelSource: boolean; descriptionArray: string[]; file: FileList }> = async (data) => {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('title', data.service.title);
      formData.append('description', data.descriptionArray.join('-.-'));
      formData.append('file', data.file[0]);

      const response = await fetch('http://localhost:3001/admin/newService', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        await refreshServices();
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setCreateModal(!createModal);
    }
  };

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
              <ServiceCreateForm
                onSubmit={onSubmit}
                isLoading={isLoading}
                service={serviceEdit}
                setService={setServiceEdit}
                handleCreateModal={handleEditModal}
                panelSource={panelSource}
                descriptionArray={descriptionArray}
                setDescriptionArray={setDescriptionArray}
              />
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default EditPanel;