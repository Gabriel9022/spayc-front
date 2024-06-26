import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import CareOptions from './Components/CareOptions/CareOptions';
import InstitutionalServices from './Components/InstitutionalServices/InstitutionalServices';
import WorkWithUs from './Components/WorkWithUs/WorkWithUs';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/AboutUs/AboutUs';
import Loggin from './Components/Loggin/Loggin';
import EditPanel from './Components/EditPanel/EditPanel';
import './App.css'

const App: React.FC = () => {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/servicios" element={<Services/>}/>
        <Route path="/opciones-de-cuidados" element={<CareOptions/>}/>
        <Route path="/corporativo" element={<InstitutionalServices/>}/>
        <Route path="/nosotros" element={<AboutUs/>}/>
        <Route path="/trabaja-con-nosotros" element={<WorkWithUs/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/loggin" element={<Loggin/>}/>
        <Route path="/panel" element={<EditPanel/>}/>        
      </Routes>
    </Router>
  )
}

export default App
