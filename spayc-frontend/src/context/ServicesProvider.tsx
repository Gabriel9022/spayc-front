import React, { createContext, useState, useEffect } from 'react';
import { ServicesType } from '../utils/Interface';

export const ServicesContext = createContext<{
  servicesArray: ServicesType[];
  loading: boolean;
  error: string | null;
  refreshServices: () => Promise<void>;
}>({ servicesArray: [], loading: true, error: null, refreshServices: async () => {} });

export const ServicesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [servicesArray, setServicesArray] = useState<ServicesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/services', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Error al traer los servicios');
      }
      const data: ServicesType[] = await response.json();
      setServicesArray(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <ServicesContext.Provider value={{ servicesArray, loading, error, refreshServices: fetchData }}>
      {children}
    </ServicesContext.Provider>
  );
};