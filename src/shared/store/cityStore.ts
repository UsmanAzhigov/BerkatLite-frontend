import { create } from 'zustand';

interface CityStore {
  cities: string[];
  loading: boolean;
  setCities: (cities: string[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useCityStore = create<CityStore>((set) => ({
  cities: [],
  loading: false,
  setCities: (cities) => set({ cities }),
  setLoading: (loading) => set({ loading }),
}));
