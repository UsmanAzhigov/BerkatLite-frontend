import { useEffect, useState } from 'react';

import { axiosInstance, getCityLabelById } from '../lib/axios';
import { useCityStore } from '../store/cityStore';
import type { AdvertItems } from '../types/advertisement.type';

/**
 * Хук useAdvert получает данные одного объявления по id
 * @param {string} [id] - Идентификатор объявления
 * @returns {{ advert?: AdvertItems }} Данные объявления
 */
export const useAdvert = (id?: string) => {
  const { cities } = useCityStore();
  const [advert, setAdvert] = useState<AdvertItems>();

  useEffect(() => {
    async function fetchAdvert() {
      const { data } = await axiosInstance.get<AdvertItems>(`/advert/${id}`);
      setAdvert(data);
    }
    fetchAdvert();
  }, [id]);

  const cityLabel = getCityLabelById(cities, advert?.cityId);

  return { advert: advert ? { ...advert, city: cityLabel } : undefined };
};
