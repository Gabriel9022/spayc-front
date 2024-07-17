import { ServicesType } from './Interface';


const getAllServices = async (): Promise<ServicesType[]> => {
    const response = await fetch('http://localhost:3001/services', {
        method: 'GET',
      });
    if (!response.ok) {
      throw new Error('Error al traer los servicios');
    }
    const data: ServicesType[] = await response.json();

    console.log(data)
    return data;
  };

export default getAllServices