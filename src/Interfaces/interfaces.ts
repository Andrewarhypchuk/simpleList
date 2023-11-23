export interface User {
  id: number;
  name: string;
  email: string;
  birthDate: string;
  address: string;
  phone: string;
  password: string;
}

export interface UserContainerProps {
  userData: User;
}

export interface UserState {
  users: User[];
}

export interface AvatarComponentProps {
  url: string;
}
