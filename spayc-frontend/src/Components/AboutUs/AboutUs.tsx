import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className='AboutUs_component'>
      <div className='AboutUs_sections'>
      <div className="AboutUs_banner">
            <div className="AboutUs_banner_title">
              <h1>Sobre nosotros</h1>
            </div>
        </div>
        <div className='AboutUs_intro_section'>
          <p>Somos un equipo de profesionales dedicado al cuidado integral y personalizado de personas mayores, comprometida en ofrecer servicios de alta calidad que mejoren su vida y promuevan su bienestar y autonomía. Con un equipo especializado en gerontología y una profunda vocación de servicio, nos dedicamos a proporcionar soluciones adaptadas a las necesidades únicas de cada individuo y su familia, diseñando planes de cuidados personalizados que abarcan desde la asistencia en actividades básicas de la vida diaria hasta el apoyo y estimulación biopsicosocial.</p>
        </div>
        <div className='AboutUs_description_section'>
          <div className='AboutUs_description_container'>
            <p>En SPAYC nos caracterizamos por:</p>
            <div className='description_container'>
              <p>Selección y capacitación de profesionales</p>
              <p>Proceso riguroso de selección que incluye entrevistas, verificación de antecedentes, referencias y certificaciones para asegurar la idoneidad y confiabilidad de los profesionales.
              Capacitación continua en habilidades técnicas, buen trato y derechos de las personas mayores, promoviendo el respeto y la empatía en la atención.</p>
            </div>
            <div className='description_container'>
              <p>Adaptabilidad y personalización del servicio</p>
              <p>Evaluación detallada de las necesidades específicas de cada persona y adaptación de los cuidados según sus condiciones de salud, preferencias y rutinas diarias.</p>
            </div>
            <div className='description_container'>
              <p>Supervisión y apoyo continuo</p>
              <p>Apoyo emocional, asesoramiento profesional y monitoreo constante del desempeño de los cuidadores para garantizar la calidad del servicio y la satisfacción con la prestación.</p>
            </div>
            <div className='description_container'>
              <p>Coordinación con instituciones de salud y familiares</p>
              <p>Colaboración estrecha con instituciones médicas y sociales para asegurar un cuidado integral y coordinado.
              Comunicación abierta y regular con los familiares.</p>
            </div>
            <div className='description_container'>
              <p>Evaluación de satisfacción y mejora continua</p>
              <p>Retroalimentación constante con las personas mayores y familiares para evaluar la satisfacción con los servicios prestados e implementar mejoras continuas en los procesos.</p>
            </div>
          </div>
        </div>
        <div className='AboutUs_mision_vision_section'>
          <div className='AboutUs_mision_vision_description_container'>
            <div className='AboutUs_mision_vision_container'>
              <div className='AboutUs_mision'>
                <h2>Nuestra misión</h2>
                <p>Proporcionar un entorno seguro, respetuoso y enriquecedor para las personas mayores, ofreciendo servicios de apoyos y cuidados que promuevan su bienestar físico, emocional y social.</p>
              </div>
              <div className='AboutUs_vision'>
                <h2>Nuestra visión</h2>
                <p>Ser líderes en el campo gerontológico, conocidos por nuestra excelencia en la prestación de servicios y nuestra dedicación al bienestar de las personas mayores, promoviendo la dignidad y el respeto en cada etapa del proceso de envejecimiento.</p>
              </div>
            </div>
            <div className='AboutUs_mv_description_container'>
              <p>Para conocer más sobre cómo podemos ayudarte, no dude en contactarnos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs