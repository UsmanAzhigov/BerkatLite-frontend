import React from 'react';
import { axiosInstance } from '../lib/axios';
import type { Advert } from '../types';

export const useProduct = (id?: string) => {
  const [advert, setAdvert] = React.useState<Advert>();

  React.useEffect(() => {
    async function fetchProducts() {
      const { data } = await axiosInstance.get(`/products/${id}`);
      setAdvert(data);
    }
    fetchProducts();
  }, []);

  return { advert };
};
