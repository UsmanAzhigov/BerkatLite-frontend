import { create } from 'zustand';
import type { SelectOption } from '../types';

/**
 * Интерфейс CityStore описывает zustand store для городов
 */
interface CityStore {
  cities: SelectOption[];
  loading: boolean;
  setCities: (cities: SelectOption[]) => void;
  setLoading: (loading: boolean) => void;
}

/**
 * useCityStore — zustand store для управления списком городов
 */
export const useCityStore = create<CityStore>((set) => ({
  cities: [],
  loading: false,
  setCities: (cities) => set({ cities }),
  setLoading: (loading) => set({ loading }),
}));
