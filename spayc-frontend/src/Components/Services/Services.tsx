import React from "react";
import MappingServices from './MapServices/MappingServices';
import { useServicesContext } from "../../hooks/useServicesContext";
import "./Services.css";

const Services: React.FC = () => {

  const { servicesArray } = useServicesContext();

  return (
    <div className="Services_component">
      <div className="Services_sections">
        <div className="Services_card_section">
          <h1>Nuestros Servicios</h1>
            <MappingServices services={servicesArray}/>
        </div>
        <div className="Services_careOptionInfo_section">
          <div className="Services_careOptionInfo_container">
            <h3>Opciones de Cuidados</h3>
            <p>
              Contamos con diferentes opciones de cuidados según tus
              necesidades.
            </p>
            <ul className="Services_careOptionInfo_list">
              <li>Servicio por horas.</li>
              <li>Servicio fin de semana.</li>
              <li>Servicio jornada parcial.</li>
              <li>Servicio jornada completa.</li>
              <li>Servicio jornada nocturna.</li>
              <li>Servicio por 24 horas.</li>
              <li>
                Servicios especializados en patologías: Alzheimer, demencia,
                Parkinson, ELA.
              </li>
              <li>
                Servicio en hospitales, clínicas, Residencias, entre otros.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
