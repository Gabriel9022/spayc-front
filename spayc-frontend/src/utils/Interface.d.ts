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

export interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (authState: boolean) => void;
}

export interface Inputs{
  userName: string;
  password: string;
}

export interface PasswordInputs {
  currentPassword: string;
  newPassword: string;
}