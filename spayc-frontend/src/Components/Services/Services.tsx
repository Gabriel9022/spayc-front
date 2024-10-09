import React from "react";
import MappingServices from './MapServices/MappingServices';
import { useServicesContext } from "../../context/useServicesContext";
import attendingPerson from "../../assets/images/Home/old-patient-suffering-from-parkinson.jpg";
import "./Services.css";

const Services: React.FC = () => {

  const { servicesArray } = useServicesContext();

  return (
    <div className="Services_component">
      <div className="Services_sections">
        <section className="Services_banner">
          <div className="Services_banner_title">
            <h1>Nuestros Servicios</h1>
          </div>
        </section>
        <section className="Services_card_section">
          <MappingServices services={servicesArray} />
        </section>
        <section className="Services_careOptionInfo_section">
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
                Parkinson, ELA, ICTUS.
              </li>
              <li>
                Servicio en hospitales, clínicas, Residencias, entre otros.
              </li>
            </ul>
          </div>
          <div className="Services_careOptionImg_container">
            <img className="Services_careOptionImg_img" src={attendingPerson} alt="Imagen de Opciones de Cuidados" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
