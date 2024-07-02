import React from 'react'
import './InstitutionalServices.css'

const InstitutionalServices: React.FC = () => {
  return (
    <div className='InstitutionalServices_component'>
      <span className='InstitutionalServices_title'>Trabajamos junto a Organismos Gubernamentales, no gubernamentales y/o Privados dedicados a Personas Mayores.</span>
      <ul className='InstitutionalServices_ul'>
        <li>Brindamos asesoramiento, orientación, capacitación para la contratación de personal altamente calificado, garantizando profesionalización y calidad humana, para Residencias de larga estadía, Geriátricos, hogares, etc.</li>
        <li>Propiciamos el Fortalecimiento institucional para organizaciones de la sociedad civil, como ser: Centros de jubilados, clubes, fundaciones, ongs, etc.</li>
        <li>Diseñamos Políticas Publicas de Vejez en ámbitos Gubernamentales, Municipal , Provincial y Nacional , de acuerdo a las realidades locales, con un diseño planificado con los actores y sus propios protagonistas.</li>
        <li>Brindamos cursos y talleres afines a la temática.</li>
      </ul>
    </div>
  )
}

export default InstitutionalServices