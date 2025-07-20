import type { AxiosInstance } from 'axios';
import axios from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const showGlobalError = (message: string) => {
  const event = new CustomEvent('global-error', { detail: message });
  window.dispatchEvent(event);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    showGlobalError('Произошла ошибка при запросе к серверу');
    return Promise.reject(error);
  },
);

/**
 * Возвращает label города по его id из массива cities
 * @param cities - массив городов (SelectOption[])
 * @param cityId - id города
 * @returns label города или null
 */
export function getCityLabelById(
  cities: { value: string; label: string }[],
  cityId?: string,
): string | null {
  if (!cityId) return null;
  return cities.find((c) => c.value === cityId)?.label || null;
}
