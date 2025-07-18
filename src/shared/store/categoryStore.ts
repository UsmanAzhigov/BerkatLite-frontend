import { create } from 'zustand';
import type { SelectOption } from '../types';

/**
 * Интерфейс CategoryStore описывает zustand store для категорий
 */
interface CategoryStore {
  categories: SelectOption[];
  loading: boolean;
  setCategories: (categories: SelectOption[]) => void;
  setLoading: (loading: boolean) => void;
}

/**
 * useCategoryStore — zustand store для управления списком категорий
 */
export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  loading: false,
  setCategories: (categories) => set({ categories }),
  setLoading: (loading) => set({ loading }),
}));
