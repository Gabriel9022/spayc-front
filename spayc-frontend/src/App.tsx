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
import { AuthProvider } from './context/AuthProvider';

const App: React.FC = () => {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AuthProvider>
        <ServicesProvider>
          <Routes>
            <Route path="/inicio" element={<Home />} />
            <Route path="/servicios" element={
              <ServicesProvider>
                <Services />
              </ServicesProvider>
            } />
            <Route path="/instituciones" element={<InstitutionalServices />} />
            <Route path="/profesionales" element={<Profesionals />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/trabaja-con-nosotros" element={<WorkWithUs />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={
              <AuthProvider>
                <Login />
              </AuthProvider>
            } />
            <Route path="/panel" element={
              <AuthProvider>
                <ServicesProvider>
                  <ProtectedRoute element={<EditPanel />} />
                </ServicesProvider>
              </AuthProvider>
            } />
          </Routes>
        </ServicesProvider>
      </AuthProvider>
      <Footer />
    </Router>
  )
}

export default App
