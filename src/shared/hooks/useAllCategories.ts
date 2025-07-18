import { useCallback } from 'react';
import { axiosInstance } from '../lib/axios';
import { useCategoryStore } from '../store/categoryStore';
import type { Category } from '../types';

/**
 * Хук v предоставляет функцию для загрузки категорий из API `/categories`
 * @returns {{ fetchCategories: () => Promise<void> }} Функция для загрузки категорий
 */
export const useAllCategories = () => {
  const { setCategories, setLoading } = useCategoryStore();

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get<Category[]>('/categories');
      const categoryOptions = data.map((category) => ({
        value: category.id,
        label: category.name,
      }));
      setCategories(categoryOptions);
    } catch (e) {
      setCategories([]);
    } finally {
      setLoading(false);
    }
  }, [setCategories, setLoading]);

  return { fetchCategories };
};
