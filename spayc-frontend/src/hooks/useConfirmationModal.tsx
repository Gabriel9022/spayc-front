import { useState } from 'react';
import ConfirmationAlert from './ConfirmationAlert';

export const useConfirmationModal = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [resolvePromise, setResolvePromise] = useState<(() => void) | null>(null);

  const showModal = (msg: string): Promise<void> => {
    setMessage(msg);
    return new Promise((resolve) => {
      setResolvePromise(() => resolve);
    });
  };

  const handleConfirm = () => {
    if (resolvePromise) {
      resolvePromise(); // Resuelve la promesa cuando el usuario acepta
    }
    setMessage(null); // Cierra el modal
  };

  const ModalComponent = message ? (
    <ConfirmationAlert message={message} onConfirm={handleConfirm} />
  ) : null;

  return { showModal, ModalComponent };
};