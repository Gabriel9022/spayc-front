import React from "react";
import LogoutButton from "../LogoutButton";
import ChangePassword from "../ChangePassword";
import "../../ProtectedRoutes/ProtectedRoute.css";
import { useConfirmationModal } from "../../../hooks/useConfirmationModal";

const LoggedUserModal: React.FC<{ handlePanel: () => void }> = ({handlePanel}) => {
  const { showModal, ModalComponent } = useConfirmationModal();
  
  return (
  <div className="Login_successful_container">
    <div className="Login_successful_modal">
      <p>Ya estás logueado.</p>
      <p>Aquí tienes algunas opciones</p>
      <div className="Login_successful_btn_container">
        <div className="Logged_options_container">
          <ChangePassword />
          <div className="Logged_options_second_container">
            <button className="btn_submit panel" onClick={handlePanel} >Panel</button>
            <LogoutButton showModal={showModal}/>
          </div>
        </div>
      </div>
    </div>
    {ModalComponent}
  </div>
)};

export default LoggedUserModal;