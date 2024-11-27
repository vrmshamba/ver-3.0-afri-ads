import axios from 'axios';
import { Ad } from '../types/ad';

const API_BASE_URL = process.env.VITE_API_BASE_URL || 'https://api.afriads.com/v1';

export class AdDeploymentService {
  private static async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  static async deployAd(ad: Omit<Ad, 'id' | 'status' | 'performance'>): Promise<Ad> {
    try {
      return await this.request<Ad>('/ads/deploy', {
        method: 'POST',
        body: JSON.stringify(ad),
      });
    } catch (error) {
      console.error('Error deploying ad:', error);
      throw error;
    }
  }

  static async validateAd(ad: Partial<Ad>): Promise<{ valid: boolean; errors?: string[] }> {
    try {
      return await this.request<{ valid: boolean; errors?: string[] }>('/ads/validate', {
        method: 'POST',
        body: JSON.stringify(ad),
      });
    } catch (error) {
      console.error('Error validating ad:', error);
      throw error;
    }
  }

  static async getAdStatus(adId: string): Promise<Ad> {
    try {
      return await this.request<Ad>(`/ads/${adId}`);
    } catch (error) {
      console.error('Error getting ad status:', error);
      throw error;
    }
  }

  static async updateAdStatus(adId: string, status: Ad['status']): Promise<Ad> {
    try {
      return await this.request<Ad>(`/ads/${adId}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
    } catch (error) {
      console.error('Error updating ad status:', error);
      throw error;
    }
  }
}