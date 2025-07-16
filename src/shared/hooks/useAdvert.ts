import { useEffect, useState } from 'react';

import { axiosInstance } from '../lib/axios';
import type { AdvertItems } from '../types/advertisement.type';

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
