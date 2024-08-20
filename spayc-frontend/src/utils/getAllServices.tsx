import React, { createContext, useState, useEffect } from 'react';
import { ServicesType } from './Interface';

export const ServicesContext = createContext<{
  servicesArray: ServicesType[];
  loading: boolean;
  error: string | null;
}>({ servicesArray: [], loading: true, error: null });

export const ServicesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [servicesArray, setServicesArray] = useState<ServicesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/services', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Error al traer los servicios');
        }
        const data: ServicesType[] = await response.json();
        setServicesArray(data);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <ServicesContext.Provider value={{ servicesArray, loading, error }}>
      {children}
    </ServicesContext.Provider>
  );
};