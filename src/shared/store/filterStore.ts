import { create } from 'zustand';
import { defaultFields, type DefaultFields } from '../types/defaultFields.type';

export type FilterState = Omit<DefaultFields, 'filterAnchorEl' | 'sortAnchorEl'>;

interface FilterStore extends FilterState {
  setField: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
}

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
