import { useContext } from 'react';
import { ServicesContext } from '../context/ServicesProvider';

export const useServicesContext = () => useContext(ServicesContext);