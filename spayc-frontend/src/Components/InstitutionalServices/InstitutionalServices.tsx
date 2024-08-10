import React from "react";
import "./InstitutionalServices.css";

const InstitutionalServices: React.FC = () => {
  return (
    <div className="InstitutionalServices_component">
      <div className="InstitutionalServices_sections">
        <div className="InstitutionalServices_introduction">
          <h1>Servicios para instituciones</h1>
          <p>
            Si es representante de una institución, organización o entidad
            pública, privada o del tercer sector, que trabaja con personas
            mayores, en SPAYC ofrecemos servicios profesionales de
            acompañamiento, orientación, capacitación en temáticas de vejez,
            como así también, asesoramiento para la creación, desarrollo y
            evaluación de políticas públicas de vejez.
          </p>
        </div>
        <div className="InstitutionalServices_services">
          <div className="InstitutionalServices_services_title">
            <h2>Nuestros servicios incluyen</h2>
          </div>
          <div className="InstitutionalServices_services_container">
            <div className="InstitucionalServices_services_left">
              <ul>
                <li>
                  <p><span>Desarrollo de políticas y programas: </span>Diseño de políticas públicas adaptadas a las necesidades locales y regionales, considerando aspectos como la accesibilidad, la equidad y la sostenibilidad. Creación de programas integrales que aborden desde la prevención hasta la atención especializada, involucrando la promoción de la salud en todas sus dimensiones, desde una perspectiva de derechos.</p>
                </li>
                <li>
                  <p><span>Implementación y gestión: </span>Puesta en marcha de programas piloto y evaluación continua de su efectividad para ajustar estrategias según los resultados obtenidos. Coordinación interinstitucional y colaboración con organizaciones no gubernamentales y sector privado para maximizar los recursos y la eficiencia de los servicios.</p>
                </li>
                <li>
                  <p><span>Análisis y diagnóstico: </span>Evaluación exhaustiva de las necesidades y desafíos específicos en el ámbito de los cuidados y personas mayores, para determinar áreas de mejora. Estudios demográficos y análisis de tendencias para entender las dinámicas poblacionales y sus implicaciones.</p>
                </li>
              </ul>
            </div>
            <div className="InstitucionalServices_services_right">
              <ul>
                <li>
                  <p><span>Transparencia y rendición de cuentas: </span>Transparencia en la gestión de recursos públicos. Informes regulares y evaluaciones externas para garantizar la rendición de cuentas y la mejora continua del servicio.</p>
                </li>
                <li>
                  <p><span>Monitoreo y evaluación: </span>Establecimiento de indicadores de rendimiento y mecanismos de monitoreo para asegurar la calidad y la eficacia de los servicios. Evaluación periódica de impacto social y económico de las políticas implementadas, ajustando estrategias según los resultados obtenidos.</p>
                </li>
                <li>
                  <p>Asesoramiento y orientación para la contratación de personal altamente calificado, (para Residencias de larga estadía, Geriátricos, Centros de día), garantizando profesionalización y calidad humana.</p>
                </li>
                <li>
                  <p><span>Formación y capacitación: </span>Formación continua del personal involucrado en el trabajo con personas mayores. Capacitación a cuidadores familiares y comunitarios para fortalecer el apoyo en el entorno familiar y comunitario.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="InstitucionalServices_why">
          <div className="InstitutionalServices_why_title">
            <h2>¿Por qué SPAYC?</h2>
          </div>
          <div className="InstitutionalServices_why_section">
            <ul>
              <li>Expertos en Gerontología: Equipo calificado y con amplia experiencia.</li>
              <li>Impacto y Calidad: Soluciones eficaces y adaptadas a las necesidades de cada entidad.</li>
              <li>Compromiso y Confianza: Trabajamos de la mano con organizaciones para lograr un cambio positivo. diseñando y ejecutando estrategias efectivas que mejoren la calidad de vida y el bienestar de las personas mayores.</li>
            </ul>
          </div>
          <div className="InstitutionalServices_why_final">
            <h3>¡Transformamos el cuidado de las personas mayores con profesionalidad y dedicación! </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionalServices;
