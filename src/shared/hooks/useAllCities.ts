import { useCallback } from 'react';
import { axiosInstance } from '../lib/axios';
import { useCityStore } from '../store/cityStore';
import type { City } from '../types';

/**
 * Хук useAllCities предоставляет функцию для загрузки городов из API `/cities`
 * @returns {{ fetchCities: () => Promise<void> }} Функция для загрузки городов
 */

export const useAllCities = () => {
  const { setCities, setLoading } = useCityStore();

  const fetchCities = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get<City[]>('/cities');
      const cityOptions = data.map((city) => ({
        value: city.id,
        label: city.name,
      }));
      setCities(cityOptions);
    } catch (e) {
      setCities([]);
    } finally {
      setLoading(false);
    }
  }, [setCities, setLoading]);

  return { fetchCities };
};
