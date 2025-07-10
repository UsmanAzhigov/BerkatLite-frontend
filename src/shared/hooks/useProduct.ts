import React, { useEffect } from 'react';

import { axiosInstance } from '../lib/axios';
import type { AdvertItems } from '../types/advertisement.type';

export const useProduct = (id?: string) => {
  const [advert, setAdvert] = React.useState<AdvertItems>();

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axiosInstance.get(`/products/${id}`);
      setAdvert(data);
    }
    fetchProducts();
  }, [id]);

  return { advert };
};
