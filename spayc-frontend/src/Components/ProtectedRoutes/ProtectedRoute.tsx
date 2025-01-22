import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import logo from "../../assets/images/Header/spayc_logo.svg";
import "./ProtectedRoute.css";

const API_URL = import.meta.env.VITE_API_URL;

const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [loginSuccessfulModal, setLoginSuccessfulModal] = useState<boolean>(false);
    const [loginSuccessful, setLoginSuccessful] = useState<boolean>(false);

    const handleLogin = () => {
        setLoginSuccessfulModal(false);
        setLoginSuccessful(true);
    }

    useEffect(() => {
        const authValidation: () => Promise<void> = async () => {
            try {
                const response = await fetch(`${API_URL}/users/sp-panel`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                if (response.ok) {
                    setIsAuthenticated(true)
                } else {
                    setIsAuthenticated(false);
                    setLoginSuccessfulModal(true);
                }
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        authValidation();
    }, []);

    if (isAuthenticated === null) {
        return (
            <div className='loading_logo_container'>
                <img className='loading_logo' src={logo} alt="SPAYC Logo" />
            </div>);
    }

    if (isAuthenticated === false) {
        return (
            <>
                {loginSuccessfulModal &&
                    <div className='Login_successful_container'>
                        <div className='Login_successful_modal'>
                            <span className=''>¡No tienes permiso!</span>
                            <button className='' onClick={handleLogin}>Aceptar</button>
                        </div>
                    </div>
                }
                {loginSuccessful && <Navigate to="/sp-login" replace />}
            </>
        );
    }

    return element;
};

export default ProtectedRoute;
