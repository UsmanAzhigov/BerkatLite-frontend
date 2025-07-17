import type { FilterState } from '../store/filterStore';
import { FILTER_KEYS, SortOrder } from '../types/defaultFields.type';

/**
 * Хук useFilterHandlers предоставляет обработчики для фильтрации и сортировки объявлений
 * @param setField - Функция для установки значения фильтра
 * @param resetFilters - Функция для сброса фильтров
 * @param setFilterAnchorEl - Функция для управления якорем меню фильтров
 * @param setSortAnchorEl - Функция для управления якорем меню сортировки
 * @returns {{ handleFilterChange, handleResetFilters, handleSortChange }} Обработчики фильтров и сортировки
 */
export const useFilterHandlers = (
  setField: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void,
  resetFilters: () => void,
  setFilterAnchorEl: (el: null | HTMLElement) => void,
  setSortAnchorEl: (el: null | HTMLElement) => void,
) => {
  const handleFilterChange = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setField(key as keyof FilterState, value);
    if (Object.values(FILTER_KEYS).includes(key as unknown as FILTER_KEYS)) {
      setField('page', 1 as FilterState['page']);
    }
  };

  const handleResetFilters = () => {
    resetFilters();
    setFilterAnchorEl(null);
  };

  const handleSortChange = (sortByValue: string, sortOrderValue: SortOrder) => {
    setField('sortBy', sortByValue as FilterState['sortBy']);
    setField(
      'sortOrder',
      sortOrderValue === SortOrder['ASC'] ? SortOrder['ASC'] : SortOrder['DESC'],
    );
    setSortAnchorEl(null);
  };

  return { handleFilterChange, handleResetFilters, handleSortChange };
};
