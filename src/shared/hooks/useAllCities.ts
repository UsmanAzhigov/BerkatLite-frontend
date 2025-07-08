import { useAllProducts } from './useAllProducts';

export function useAllCities() {
  const { items: allItems } = useAllProducts({});
  const uniqueCities = Array.from(new Set(allItems.map((item) => item.city))).filter(Boolean);
  return uniqueCities;
}
