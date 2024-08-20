import React, { useEffect, useState } from "react";
import getAllServices from "../../../utils/getAllServices";
import { ServicesType } from "../../../utils/Interface";




const MappingServices: React.FC = () => {

  const [services, setServices] = useState<ServicesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        setServices(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
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
                        {service.description.map((description) => (
                          <li className="Services_description">
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
                ) : (
                  <div style={{ display: "none" }}></div>
                )}
              </div>
            );
          } else {
            return (
              <div key={service.id} className="Services_card_container">
                {service.isActive == true ? (
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
                        {service.description.map((description) => (
                          <li className="Services_description">
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