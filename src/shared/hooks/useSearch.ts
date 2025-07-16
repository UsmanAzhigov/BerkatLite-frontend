import { useDebounce } from 'use-debounce';
import { useFilterStore } from '../store/filterStore';

export function useSearch() {
  const { search, setField } = useFilterStore();
  const [debouncedSearch] = useDebounce(search, 500);

  const setSearch = (value: string) => {
    setField('search', value);
    setField('page', 1);
  };

  return { search, debouncedSearch, setSearch };
}
