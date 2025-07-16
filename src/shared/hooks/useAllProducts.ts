import { useEffect, useState } from 'react';

import { axiosInstance } from '../lib/axios';
import type { Advert, SortBy, SortOrder } from '../types';
import type { AdvertItems } from '../types/advertisement.type';

interface Params {
  page?: number;
  sortBy?: SortBy | '';
  sortOrder?: SortOrder | '';
  city?: string | null;
  category?: string | null;
  priceFrom?: number | null;
  priceTo?: number | null;
  search?: string | null;
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
        const params: Record<string, string | number | boolean | null | undefined> = {
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
            .filter(([, v]) => v !== undefined && v !== null && v !== '')
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
    items: (products?.items as AdvertItems[]) || [],
    totalPages: products?.meta?.totalPages || 1,
    loading,
  };
};
