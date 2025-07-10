import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';

interface CityStore {
  cities: string[];
  loading: boolean;
  fetchCities: () => Promise<void>;
}

export const useCityStore = create<CityStore>((set) => ({
  cities: [],
  loading: false,
  fetchCities: async () => {
    set({ loading: true });
    try {
      const { data } = await axiosInstance.get('/products');
      const uniqueCities = Array.from(
        new Set((data.items || []).map((item: any) => item.city)),
      ).filter(Boolean) as string[];
      set({ cities: uniqueCities });
    } catch (e) {
      set({ cities: [] });
    } finally {
      set({ loading: false });
    }
  },
}));
