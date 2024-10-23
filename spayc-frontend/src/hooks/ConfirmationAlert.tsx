import React, { useState } from 'react';
import { ConfirmationAlertProps } from '../utils/Interface';
import './ConfirmationAlertProps.css';

const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({ message, onConfirm }) => {
  const [modal, setModal] = useState<boolean>(true);

  const handleAccept = () => {
    setModal(false);
    onConfirm(); // Llama la función cuando se hace clic en Aceptar
  };

  return (
    <>
      {modal && (
        <div className="confirm_alert">
          <div className="confirm_alert_message">
            <p>{message}</p>
          </div>
          <div className='confirm_alert_button_container'>
            <button className="btn_submit" onClick={handleAccept}>Aceptar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationAlert;