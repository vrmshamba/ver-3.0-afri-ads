import axios from 'axios';
import { LoginCredentials, RegisterData, AuthResponse } from '../types/auth';

const API_URL = 'https://api.afriads.com/v1/auth';

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      this.setToken(response.data.token);
      return response.data;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  }

  static async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await axios.post(`${API_URL}/register`, data);
      this.setToken(response.data.token);
      return response.data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  }

  static async logout(): Promise<void> {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  static setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  static getToken(): string | null {
    return localStorage.getItem('token');
  }

  static isAuthenticated(): boolean {
    return !!this.getToken();
  }
}