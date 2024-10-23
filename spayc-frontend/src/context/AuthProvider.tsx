import React, { createContext, useState, ReactNode } from 'react';
import { AuthContextType } from '../utils/Interface';

// Creamos el contexto con valores predeterminados
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false, // Inicialmente no autenticado
  setIsAuthenticated: () => {},
});

// Creamos el proveedor del contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => localStorage.getItem('isAuthenticated') === 'true' || false
  );

  const updateAuth = (authState: boolean) => {
    setIsAuthenticated(authState);
    localStorage.setItem('isAuthenticated', authState.toString());
  };

  // Devolvemos el contexto con el valor de autenticación
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated: updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
