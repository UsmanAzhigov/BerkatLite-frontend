import React from 'react';
import { axiosInstance } from '../lib/axios';
import type { Advert } from '../types';

export const useAllProducts = () => {
  const [items, setItems] = React.useState<Advert[]>([]);

  React.useEffect(() => {
    async function fetchProducts() {
      const { data } = await axiosInstance.get('/products');
      setItems(data);
    }
    fetchProducts();
  }, []);

  return { items };
};
