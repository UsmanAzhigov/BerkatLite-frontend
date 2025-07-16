import { useFilterStore } from '../store/filterStore';
import { useSearch } from './useSearch';

export function useProductQueryParams() {
  const { sortBy, sortOrder, page, city, priceFrom, priceTo, category } = useFilterStore();
  const { debouncedSearch } = useSearch();

  return {
    page,
    sortBy,
    sortOrder,
    city: city || null,
    priceFrom: priceFrom ? Number(priceFrom) : null,
    priceTo: priceTo ? Number(priceTo) : null,
    category: category || null,
    search: debouncedSearch || null,
  };
}
