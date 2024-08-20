import { useContext } from 'react';
import { ServicesContext } from '../utils/getAllServices';

export const useServicesContext = () => useContext(ServicesContext);