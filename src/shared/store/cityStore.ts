import { create } from 'zustand';

/**
 * Интерфейс CityStore описывает zustand store для городов
 */
interface CityStore {
  cities: string[];
  loading: boolean;
  setCities: (cities: string[]) => void;
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
