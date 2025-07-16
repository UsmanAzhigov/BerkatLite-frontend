import { useCallback } from 'react';
import { axiosInstance } from '../lib/axios';
import { useCityStore } from '../store/cityStore';
import type { AdvertItems } from '../types/advertisement.type';

export const useAllCities = () => {
  const { setCities, setLoading } = useCityStore();

  const fetchCities = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get('/products');
      const uniqueCities = Array.from(
        new Set((data.items || []).map((item: AdvertItems) => item.city)),
      ).filter(Boolean) as string[];
      setCities(uniqueCities);
    } catch (e) {
      setCities([]);
    } finally {
      setLoading(false);
    }
  }, [setCities, setLoading]);

  return { fetchCities };
};
