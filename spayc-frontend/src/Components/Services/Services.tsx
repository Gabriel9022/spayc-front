import React,  { useEffect, useState } from 'react';
import getAllServices from '../../utils/getAllServices';
import { ServicesType } from '../../utils/Interface';
import './Services.css'


const Services: React.FC = () => {

  const [services, setServices] = useState<ServicesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        setServices(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className='Services_component'>
      <div className='Services_sections'>
        <div className='Services_card_section'>
          <h1>Nuestros Servicios</h1>
          {services.map((service) => (
            <div key={service.id} className="Services_card_container">
              {service.isActive == true ? 
                <div className='Services_card'>
                  <div className='Services_card_info'>
                    <h2>{service.title}</h2>
                    <ul>{service.description.map((description)=> (
                      <li className='Services_description'>
                        {description}
                      </li>
                    ))}</ul>
                  </div>
                  <div className='Services_card_img'>
                    <img className='Services_img' src={service.image} alt="Imagen de servicio" />
                  </div>
                </div> : <div style={{display: 'none'}}></div>}
            </div>
          ))}
        </div>
        <div className='Services_careOptionInfo_section'>
          <div className='Services_careOptionInfo_container'>
            <p>Opciones de Cuidados</p>
            <p>Contamos con diferentes opciones de cuidados según tus necesidades.</p>
            <ul className='Services_careOptionInfo_list'>
              <li>Servicio por horas.</li>
              <li>Servicio fin de semana.</li>
              <li>Servicio jornada parcial.</li>
              <li>Servicio jornada completa.</li>
              <li>Servicio jornada nocturna.</li>
              <li>Servicio por 24 horas.</li>
              <li>Servicios especializados en patologías: Alzheimer, demencia, Parkinson, ELA.</li>
              <li>Servicio en hospitales, clínicas, Residencias, entre otros.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services