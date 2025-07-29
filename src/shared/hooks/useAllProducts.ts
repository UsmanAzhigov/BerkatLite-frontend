import { useEffect, useState } from 'react';

import { axiosInstance, getCityLabelById } from '../lib/axios';
import { useCityStore } from '../store/cityStore';
import type { Advert, SortBy, SortOrder } from '../types';
import type { AdvertItems } from '../types/advertisement.type';

/**
 * Параметры для хука useAllProducts
 * @property {number} [page] - Номер страницы
 * @property {SortBy | ''} [sortBy] - Поле сортировки
 * @property {SortOrder | ''} [sortOrder] - Порядок сортировки
 * @property {string | null} [city] - Город
 * @property {string | null} [category] - Категория
 * @property {number | null} [priceFrom] - Цена от
 * @property {number | null} [priceTo] - Цена до
 * @property {string | null} [search] - Поисковый запрос
 */
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

/**
 * Хук useAllProducts получает список объявлений с сервера с учетом фильтров и сортировки
 * @param {Params} params - Параметры фильтрации и сортировки
 * @returns {{ items: AdvertItems[]; totalPages: number; loading: boolean }} Список объявлений, количество страниц и флаг загрузки
 */
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
  const { cities } = useCityStore();

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params: Record<string, string | number | boolean | null | undefined> = {
          page,
          sortBy,
          sortOrder,
          cityId: city || undefined,
          categoryId: category || undefined,
          priceFrom,
          priceTo,
          search,
        };

        const query = new URLSearchParams(
          Object.entries(params)
            .filter(([, v]) => v !== undefined && v !== null && v !== '')
            .map(([k, v]) => [k, String(v)]),
        );

        const { data } = await axiosInstance.get(`/?${query.toString()}`);
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    intervalId = setInterval(fetchProducts, 10000);

    return () => clearInterval(intervalId);
  }, [page, sortBy, sortOrder, city, priceFrom, priceTo, category, search]);

  return {
    items: ((products?.items as AdvertItems[]) || []).map((item) => ({
      ...item,
      city: getCityLabelById(cities, item.cityId),
    })),
    totalPages: products?.meta?.totalPages || 1,
    loading,
  };
};
