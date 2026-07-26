import axios, { AxiosInstance, AxiosError } from 'axios';
import { API_BASE_URL } from '@/utils/constants';
import { STORAGE_KEYS } from '@/utils/constants';
import { getLocalStorage } from '@/utils/helpers';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = getLocalStorage<string>(STORAGE_KEYS.AUTH_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.api.interceptors.response.use(
      (response) => response.data,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, config = {}) {
    return this.api.get<T>(url, config);
  }

  post<T>(url: string, data?: unknown, config = {}) {
    return this.api.post<T>(url, data, config);
  }

  put<T>(url: string, data?: unknown, config = {}) {
    return this.api.put<T>(url, data, config);
  }

  patch<T>(url: string, data?: unknown, config = {}) {
    return this.api.patch<T>(url, data, config);
  }

  delete<T>(url: string, config = {}) {
    return this.api.delete<T>(url, config);
  }
}

export default new ApiService();
