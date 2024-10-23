import React from "react";
import '../../ProtectedRoutes/ProtectedRoute.css';

const MobileWarningModal: React.FC<{ handleLogin: () => void }> = ({ handleLogin }) => (
    <div className='Login_successful_container'>
      <div className='Login_successful_modal'>
        <p>Debes ingresar desde un ordenador para utilizar el Panel.</p>
        <p>Serás redirigido al Inicio.</p>
        <button onClick={handleLogin}>Aceptar</button>
      </div>
    </div>
  );

export default MobileWarningModal;
  