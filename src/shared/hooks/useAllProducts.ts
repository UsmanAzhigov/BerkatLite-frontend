import { useEffect, useState } from 'react';

import { axiosInstance } from '../lib/axios';
import type { Advert } from '../types';

interface Params {
  page?: number;
  sortBy?: 'price' | 'popular' | 'createdAt';
  sortOrder?: 'asc' | 'desc' | '';
  city?: string;
  category?: string;
  priceFrom?: number;
  priceTo?: number;
}

export const useAllProducts = ({
  page,
  sortBy,
  sortOrder,
  city,
  priceFrom,
  priceTo,
  category,
}: Params) => {
  const [products, setProducts] = useState<Advert | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params: Record<string, string | number | boolean | undefined> = {
          page,
          sortBy,
          sortOrder,
          city,
          priceFrom,
          priceTo,
          category,
        };

        const query = new URLSearchParams(
          Object.entries(params)
            .filter(([, v]) => v !== undefined && v !== '')
            .map(([k, v]) => [k, String(v)]),
        );

        const { data } = await axiosInstance.get(`/products?${query.toString()}`);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [page, sortBy, sortOrder, city, priceFrom, priceTo, category]);

  return {
    items: products?.items || [],
    totalPages: products?.meta?.totalPages || 1,
  };
};
