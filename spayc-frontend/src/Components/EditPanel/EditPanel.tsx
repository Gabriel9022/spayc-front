import React, { useState } from 'react';
import MappingServices from '../Services/MapServices/MappingServices';
import './EditPanel.css';

const EditPanel: React.FC = () => {

  const [menu, setMenu] = useState(false);


  const expandMenu = () => {
    setMenu(!menu);
  };




  return (
    <div className='Edit_panel_component'>
      <div className='Edit_panel_sections'>
        <div className='Edit_panel_menu'>
          <div className='Edit_panel_item'>
            <div onClick={expandMenu}>SERVICIOS</div>
            {menu ? <div>
              <div className='Create_element'>
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
            {menu ? <MappingServices /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditPanel;