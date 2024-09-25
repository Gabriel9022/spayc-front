import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Profesionals from './Components/Profesionals/Profesionals';
import InstitutionalServices from './Components/InstitutionalServices/InstitutionalServices';
import WorkWithUs from './Components/WorkWithUs/WorkWithUs';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/Login/Login';
import EditPanel from './Components/EditPanel/EditPanel';
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute';
import ScrollToTop from './hooks/scrollToTop';
import { ServicesProvider } from './utils/getAllServices';
import './App.css'

const App: React.FC = () => {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <ServicesProvider>
        <Routes>
          <Route path="/inicio" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/instituciones" element={<InstitutionalServices />} />
          <Route path="/profesionales" element={<Profesionals />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/trabaja-con-nosotros" element={<WorkWithUs />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<ProtectedRoute element={<EditPanel />} />} />
        </Routes>
      </ServicesProvider>
      <Footer />
    </Router>
  )
}

export default App
