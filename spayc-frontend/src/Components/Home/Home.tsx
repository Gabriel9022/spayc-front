import React from "react";
import handsImage from "../../assets/images/Home/intr_img_home.webp";
import homeProfessionalImage from "../../assets/images/Home/home_professional.webp";
import homeContactImage from "../../assets/images/Home/home_contact.webp";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home_component">
      <div className="home_sections">
        <section className="main_banner">
          <div className="main_banner_title">
            <h1>Bienvenidos a SPAYC</h1>
            <span>
              Servicios Profesionales de Apoyo y Cuidado para Personas
              Mayores
            </span>
          </div>
        </section>
        <section className="home_introduction">
          <div className="home_introduction_container">
            <div className="home_introduction_image">
              <img src={handsImage} alt="Imagen de manos" />
            </div>
            <div className="home_introduction_us">
              <p>
                Somos un equipo de profesionales al cuidado integral y personalizado
                de personas mayores. Ofrecemos una amplia variedad de servicios
                de la más alta calidad profesional y humana, diseñados para
                brindar apoyo y cuidado a las personas mayores en el
                desarrollo de sus actividades básicas/ instrumentales de la vida
                diaria.
              </p>
              <p>
                Buscamos prolongar su permanencia en el hogar, evitando o
                postergando la institucionalización, porque no hay nada mejor
                que envejecer en un entorno hogareño, confortable, accesible,
                significativo y seguro.
              </p>
            </div>
          </div>
        </section>
        <section className="home_compromise">
          <div className="home_compromise_container">
            <div className="home_compromise_title">
              <h2>Nuestro compromiso</h2>
            </div>
            <div className="home_compromise_description">
              <div className="home_compromise_description_card">
                <h3>Crear un ambiente de respeto</h3>
                <p>
                  Tratar a cada persona con el máximo respeto y consideración,
                  reconociendo su biografía, sus experiencias y sus deseos.
                </p>
              </div>
              <div className="home_compromise_description_card">
                <h3>Promover la salud y el bienestar</h3>
                <p>
                  Brindar apoyo integral que incluya atención de salud,
                  actividades recreativas y programas de bienestar emocional y
                  social.
                </p>
              </div>
              <div className="home_compromise_description_card">
                <h3>Apoyar a las familias</h3>
                <p>
                  Colaborar estrechamente con las familias para proporcionar el
                  apoyo necesario y mantener la comunicación abierta, asegurando
                  que sus seres queridos reciban el mejor cuidado posible.
                </p>
              </div>
              <div className="home_compromise_description_card">
                <h3>Ofrecer atención personalizada</h3>
                <p>
                  Adaptar nuestros servicios a las necesidades individuales de
                  cada persona mayor, asegurando que reciban el cuidado adecuado
                  en todo momento.
                </p>
              </div>
              <div className="home_compromise_description_card">
                <h3>Promover la autonomía</h3>
                <p>
                  Ayudar a las personas mayores a mantener su autonomía y
                  dignidad, proporcionando la asistencia necesaria para que
                  puedan llevar una vida activa, saludable y gratificante.
                </p>
              </div>
            </div>
            <div className="home_compromise_service">
              <p>Para ello ofrecemos</p>
              <p><Link to="/servicios">SERVICIOS PARA PERSONAS MAYORES</Link></p>
            </div>
          </div>
        </section>
        <section className="home_services">
          <div className="home_services_container">
            <div className="home_services_introduction">
              <p>Si representas una institución, organización o entidad pública, privada o del tercer sector,  que trabaja con personas mayores, en SPAYC ofrecemos servicios profesionales de acompañamiento, orientación, capacitación en temáticas de vejez, como así también, asesoramiento para la creación, desarrollo y evaluación de políticas públicas de vejez.</p>
            </div>
            <div className="home_services_description">
              <h2>Nuestros servicios incluyen</h2>
              <div className="home_services_items">
                <div className="home_services_items_item">
                  <h3 className="home_services_items_item_title">Búsqueda de personal:</h3>
                  <p> Asesoramiento y orientación para la contratación de personal altamente calificado (para Residencias de larga estadía, Geriátricos, Centros de día), garantizando profesionalización y calidad humana.</p>
                </div>
                <div className="home_services_items_item">
                  <h3 className="home_services_items_item_title">Capacitación y Formación:</h3>
                  <p> Talleres y programas de formación para profesionales del sector.</p>
                </div>
                <div className="home_services_items_item">
                  <h3 className="home_services_items_item_title">Desarrollo de Políticas Públicas:</h3>
                  <p> Asesoría en la creación e implementación de políticas que promuevan el bienestar y la calidad de vida de las personas mayores.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home_services_link">
            <p>Conoce nuestros</p>
            <p><Link to={"/instituciones"}>SERVICIOS PARA INSTITUCIONES</Link></p>
          </div>
        </section>
        <section className="home_professionals">
          <div className="home_professionals_container">
            <div className="home_proffesionals_image">
              <img src={homeProfessionalImage} alt="Imagen de persona asistiendo a otra" />
            </div>
            <div className="home_professionals_introduction">
              <p>Estos servicios son brindados por profesionales  altamente capacitados, con formación y experiencia en el sector.</p>
              <p>Nos caracterizamos por trabajar desde un enfoque de derechos, con perspectiva de género y mirada gerontológica.</p>
              <div className="home_professionals_link">
                <p>Conoce el perfil </p>
                <p><Link to={"/profesionales"}>NUESTROS PROFESIONALES</Link></p>
              </div>
            </div>
          </div>
        </section>
        <div className="home_division" />
        <section className="home_contact">
          <div className="home_contact_container">
            <div className="home_contact_introduction">
              <p>Más  que un proveedor de servicios de cuidados, somos un socio de confianza en el bienestar y calidad de vida de las personas mayores. Estamos comprometidos con hacer una diferencia tangible en cada vida que acompañamos y nos enorgullece servir con pasión y excelencia en el campo gerontológico.</p>
              <div className="home_contact_link">
                <p>PARA CONOCER MAS SOBRE COMO PODEMOS AYUDARLE, NO DUDE EN 
                  <span><Link to={"/contacto"}>CONTACTARNOS</Link></span> 
                </p>
              </div>
            </div>
            <div className="home_contact_image">
              <img src={homeContactImage} alt="Imagen de persona asistiendo a otra" />
            </div>
          </div>
        </section>
        <div className="home_division" />
      </div>
    </div>
  );
};

export default Home;
