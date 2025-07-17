import { useDebounce } from 'use-debounce';
import { useFilterStore } from '../store/filterStore';

/**
 * Хук useSearch управляет состоянием поисковой строки и возвращает её значение и debounce-версию
 * @returns {{ search: string; debouncedSearch: string; setSearch: (value: string) => void }} Значение поиска, debounce и функция установки
 */
export function useSearch() {
  const { search, setField } = useFilterStore();
  const [debouncedSearch] = useDebounce(search, 500);

  const setSearch = (value: string) => {
    setField('search', value);
    setField('page', 1);
  };

  return { search, debouncedSearch, setSearch };
}
