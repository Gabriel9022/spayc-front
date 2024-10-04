import React from "react";
import "../../ProtectedRoutes/ProtectedRoute.css";
import LogoutButton from "../LogoutButton";
import '../../ProtectedRoutes/ProtectedRoute.css';

const LoggedUserModal: React.FC<{ handlePanel: () => void }> = ({handlePanel}) => (

  <div className="Login_successful_container">
    <div className="Login_successful_modal">
      <p>Ya estás logueado.</p>
      <p>¿Deseas cerrar sesión?</p>
      <div className="Login_successful_btn_container">
        <button className="btn_submit panel" onClick={handlePanel} >Panel</button>
        <LogoutButton />
      </div>
    </div>
  </div>
);

export default LoggedUserModal;