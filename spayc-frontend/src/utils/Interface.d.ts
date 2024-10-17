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

export interface Inputs {
  userName: string;
  password: string;
}

export interface PasswordInputs {
  currentPassword: string;
  newPassword: string;
}

export interface ContactFormInputs {
  firstName: string,
  lastName: string,
  email: string,
  tel: string,
  message: string
}

export interface WorkWithUsFormInputs {
  name: string;
  email: string;
  message: string;
  tel: string;
  file: FileList;
}