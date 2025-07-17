import { useEffect, useState } from 'react';

import { axiosInstance } from '../lib/axios';
import type { AdvertItems } from '../types/advertisement.type';

/**
 * Хук useAdvert получает данные одного объявления по id
 * @param {string} [id] - Идентификатор объявления
 * @returns {{ advert?: AdvertItems }} Данные объявления
 */
export const useAdvert = (id?: string) => {
  const [advert, setAdvert] = useState<AdvertItems>();

  useEffect(() => {
    async function fetchAdvert() {
      const { data } = await axiosInstance.get<AdvertItems>(`/products/${id}`);
      setAdvert(data);
    }
    fetchAdvert();
  }, [id]);

  return { advert };
};
