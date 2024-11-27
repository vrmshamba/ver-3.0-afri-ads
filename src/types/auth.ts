export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  firstName: string;
  lastName: string;
  company?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}