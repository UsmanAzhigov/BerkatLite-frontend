import axios from 'axios';
import type { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:7777',
});

axiosInstance.interceptors.request.use((config: any) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});
