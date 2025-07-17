import { create } from 'zustand';
import { defaultFields, type DefaultFields } from '../types/defaultFields.type';

/**
 * Состояние фильтров для объявлений
 */
export type FilterState = Omit<DefaultFields, 'filterAnchorEl' | 'sortAnchorEl'>;

/**
 * Интерфейс FilterStore описывает zustand store для фильтров объявлений
 */
interface FilterStore extends FilterState {
  setField: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
}

/**
 * useFilterStore — zustand store для управления фильтрами объявлений
 */
export const useFilterStore = create<FilterStore>((set) => ({
  ...defaultFields,
  setField: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
  resetFilters: () =>
    set((state) => ({
      ...state,
      category: '',
      city: '',
      priceFrom: '',
      priceTo: '',
      page: 1,
    })),
}));
