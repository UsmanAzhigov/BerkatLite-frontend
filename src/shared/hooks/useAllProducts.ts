import { useEffect, useState } from 'react';

import { axiosInstance } from '../lib/axios';
import type { Advert, SortBy, SortOrder } from '../types';

interface Params {
  page?: number;
  sortBy?: SortBy | '';
  sortOrder?: SortOrder | '';
  city?: string;
  category?: string;
  priceFrom?: number;
  priceTo?: number;
  search?: string;
}

export const useAllProducts = ({
  page,
  sortBy,
  sortOrder,
  city,
  priceFrom,
  priceTo,
  category,
  search,
}: Params) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Advert | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params: Record<string, string | number | boolean | undefined> = {
          page,
          sortBy,
          sortOrder,
          city,
          priceFrom,
          priceTo,
          category,
          search,
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
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, sortBy, sortOrder, city, priceFrom, priceTo, category, search]);

  return {
    items: products?.items || [],
    totalPages: products?.meta?.totalPages || 1,
    loading,
  };
};
