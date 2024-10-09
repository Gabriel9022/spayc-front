import React from "react";
import { MappingServicesProps } from "../../../utils/Interface";
import { useServicesContext } from "../../../context/useServicesContext";


const MappingServices: React.FC<MappingServicesProps> = () => {

  const { servicesArray: services, loading, error } = useServicesContext();

  if (loading) return <div>Cargando...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {
        services.map((service, i) => {
          if (i % 2 == 0) {
            return (
              <div key={service.id} className="Services_card_container">
                {service.isActive == true ? (
                  <div className="Services_card">
                    <div className="Services_card_info">
                      <h2>{service.title}</h2>
                      <ul>
                        {service.description.map((description, index) => (
                          <li key={index} className="Services_description">
                            {description}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="Services_card_img_right">
                      <img
                        className="Services_img"
                        src={service.image}
                        alt="Imagen de servicio"
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          } else {
            return (
              <div key={service.id} className="Services_card_container">
                {service.isActive ? (
                  <div className="Services_card">
                    <div className="Services_card_img_left">
                      <img
                        className="Services_img"
                        src={service.image}
                        alt="Imagen de servicio"
                      />
                    </div>
                    <div className="Services_card_info">
                      <h2>{service.title}</h2>
                      <ul>
                        {service.description.map((description, index) => (
                          <li key={index} className="Services_description">
                            {description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: "none" }}></div>
                )}
              </div>
            );
          }
        }
        )
      }
    </div>
  )
}

export default MappingServices;