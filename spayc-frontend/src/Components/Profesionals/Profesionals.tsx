import React from "react";
import professionalsImage1 from "../../assets/images/Professionals/prof1.webp";
import professionalsImage from "../../assets/images/Professionals/professionalsImage.webp";
import black_arrow from "../../assets/images/Professionals/black_arrow.png"
import "./Profesionals.css";

const Profesionals: React.FC = () => {
  return (
    <div className="professional_component">
      <div className="professional_sections">
        <section className="main_banner">
          <div className="main_banner_title">
            <h1>Perfil de nuestros profesionales</h1>
          </div>
        </section>
        <section className="professional_profile">
          <div className="professional_profile_intro">
            <p>
              El perfil de los profesionales en cuidados es fundamental para
              garantizar una atención de calidad y adaptada a las necesidades
              específicas. Los profesionales que conforman nuestro staff se
              caracterizan por
            </p>
            <img className="black_arrow" src={black_arrow} alt="black arrow" />
          </div>
          <div className="professional_profile_skills">
            <div className="professional_profile_skills_description">
              <div className="professional_profile_skills_skill">
                <h3>Empatía y Paciencia</h3>
                <p>
                  Los profesionales deben tener la capacidad de comprender las
                  necesidades emocionales y físicas de las personas mayores,
                  mostrando empatía y paciencia en su trabajo diario.
                </p>
              </div>
              <div className="professional_profile_skills_skill">
                <h3>Capacidad de Escucha Activa</h3>
                <p>
                  Es fundamental para los profesionales escuchar activamente a
                  los adultos mayores, comprendiendo sus preferencias,
                  preocupaciones y necesidades cambiantes.
                </p>
              </div>
              <div className="professional_profile_skills_skill">
                <h3>Comunicación Clara y Eficaz</h3>
                <p>
                  Los profesionales deben poder comunicarse de manera clara y
                  efectiva, tanto con los adultos mayores como con sus
                  familiares y otros miembros del equipo de atención.
                </p>
              </div>
              <div className="professional_profile_skills_skill">
                <h3>Capacidades Organizativas</h3>
                <p>
                  En entornos de cuidado, especialmente en instituciones, la
                  capacidad de organizar tareas, administrar el tiempo y
                  priorizar actividades es crucial para proporcionar cuidados
                  eficientes y completos.
                </p>
              </div>
            </div>
            <div className="professional_profile_skills_image">
              <img src={professionalsImage1} alt="imagen profesional" />
            </div>
          </div>
          <div className="professional_profile_skills">
            <div className="professional_profile_skills_image">
              <img src={professionalsImage} alt="imagen profesional" />
            </div>
            <div className="professional_profile_skills_description">
              <div className="professional_profile_skills_skill">
                <h3>Capacidad para Manejar el Estrés</h3>
                <p>
                  El cuidado de personas mayores puede ser emocional y
                  físicamente exigente. Los profesionales deben ser capaces de
                  manejar el estrés y mantener la calma en situaciones
                  desafiantes.
                </p>
              </div>
              <div className="professional_profile_skills_skill">
                <h3>Formación en Gerontología</h3>
                <p>
                  Los profesionales tienen formación específica en Gerontología.
                </p>
              </div>
              <div className="professional_profile_skills_skill">
                <h3>Experiencia en el Campo</h3>
                <p>
                  La experiencia previa en el cuidado de personas mayores es
                  valorada, ya que proporciona habilidades prácticas y
                  conocimientos sobre las necesidades y dinámicas específicas de
                  este grupo de edad.
                </p>
              </div>
              <div className="professional_profile_skills_skill">
                <h3>Certificaciones y Acreditaciones</h3>
                <p>
                  Los profesionales cuentan con certificaciones o acreditaciones
                  específicas que garantizan estándares de calidad y competencia
                  profesional.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="professional_profile_functions">
          <h2>Funciones de los profesionales en cuidados</h2>
          <div className="professional_profile_functions_container">
            <div className="professional_profile_functions_items">
              <div className="professional_profile_functions_item">
                <h3>Cuidado Personal</h3>
                <p>
                  Asistencia con actividades de la vida diaria (AVD) como aseo
                  personal, alimentación, movilidad, entre otras.
                </p>
              </div>
              <div className="professional_profile_functions_item">
                <h3>Apoyo Emocional y Social</h3>
                <p>
                  Proporcionar compañía, conversación y actividades recreativas
                  que promuevan la interacción social y el bienestar emocional.
                </p>
              </div>
            </div>
            <div className="professional_profile_functions_items">
              <div className="professional_profile_functions_item">
                <h3>Cuidados de salud</h3>
                <p>
                  Promoción de la salud en todas sus dimensiones, administración
                  de medicamentos según las indicaciones, y comunicación con
                  profesionales de la salud cuando sea necesario.
                </p>
              </div>
              <div className="professional_profile_functions_item">
                <h3>Registro y Documentación</h3>
                <p>
                  Mantener registros precisos de las actividades diarias,
                  cambios en la salud y comunicación relevante con la familia y
                  el equipo de atención.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="professional_profile_conclusion">
          <p>
            Los profesionales en cuidados de personas mayores poseen habilidades
            técnicas y personales, experiencia relevante y un compromiso ético
            con el bienestar y la calidad de vida de las personas mayores, en
            pos de garantizar un entorno de cuidado saludable, seguro,
            respetuoso y efectivo.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Profesionals;
