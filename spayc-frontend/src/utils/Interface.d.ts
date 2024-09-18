export interface ServicesType {
    id: number;
    title: string;
    description: string[];
    image: string;
    isActive: boolean;
  }

export interface MappingServicesProps {
    services: ServicesType[];
  }

export type Inputs = {
  userName: string;
  password: string;
};