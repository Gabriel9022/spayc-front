import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/config';
import { useAuthContext } from '../../context/useAuthContext';
import { validationRules } from '../../utils/validationRules';
import { PasswordInputs } from '../../utils/Interface';
import './ChangePassword.css';
import { useConfirmationModal } from '../../hooks/useConfirmationModal';

const ChangePassword: React.FC = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { showModal, ModalComponent } = useConfirmationModal();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<PasswordInputs>({
        defaultValues: {
            currentPassword: '',
            newPassword: '',
        },
    });

    const onSubmit: SubmitHandler<PasswordInputs> = async (data) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/users/changePassword`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    await showModal('Error: Contraseña actual incorrecta.');
                } else {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return;
            }

            await showModal('Contraseña cambiada con éxito.');
            reset();

            // Después de cambiar la contraseña, cerrar la sesión
            const logoutResponse = await fetch(`${API_URL}/users/logout`, {
                method: 'POST',
                credentials: 'include',
            });

            if (logoutResponse.ok) {
                setIsAuthenticated(false);
                localStorage.setItem('isAuthenticated', 'false');
                navigate('/login');
            } else {
                await showModal('Error al cerrar la sesión. Inténtalo de nuevo.');
            }

        } catch (error) {
            console.error('Error al cambiar la contraseña:', error);
            await showModal('Hubo un problema al cambiar la contraseña.');
        } finally {
            setIsLoading(false);
            setIsModalOpen(false);
        }
    };


    return (
        <>
            <button
                className='Auth_Button'
                onClick={() => setIsModalOpen(true)}
            >
                Cambiar Contraseña
            </button>

            {isModalOpen && (
                <div className="password_modal">
                    <div className="password_modal_content">
                        <h2>Cambiar Contraseña</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='form_group'>
                                <label>Clave Actual:</label>
                                <input
                                    type="password"
                                    className={`input ${errors.currentPassword ? 'input_error' : ''}`}
                                    placeholder='Clave actual'
                                    {...register('currentPassword', validationRules.password)} // Usa las reglas de validación
                                />
                                {errors.currentPassword && (
                                    <p className='error_message'>{errors.currentPassword.message}</p>
                                )}
                            </div>
                            <div className='form_group'>
                                <label>Nueva Clave:</label>
                                <input
                                    type="password"
                                    className={`input ${errors.newPassword ? 'input_error' : ''}`}
                                    placeholder='Nueva clave'
                                    {...register('newPassword', validationRules.password)}
                                />
                                {errors.newPassword && (
                                    <p className='error_message'>{errors.newPassword.message}</p>
                                )}
                            </div>
                            <div className='password_button_group'>
                                <button
                                className='Auth_Button'
                                type='submit'
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="spinner"></div>
                                ) : (
                                    'Cambiar Contraseña'
                                )}
                                </button>
                                <button
                                className='close_button'
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {ModalComponent}
        </>
    );
};


{/* <button
className='Auth_Button'
onClick={handleChangePassword}
disabled={isLoading}
>
{isLoading ? (
    <div className="spinner"></div>
) : (
    'Cambiar Contraseña'
)}
</button> */}

export default ChangePassword;
