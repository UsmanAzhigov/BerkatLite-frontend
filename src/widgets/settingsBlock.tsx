import { SwapVert, TuneOutlined } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

import { useAllCategories } from '../shared/hooks/useAllCategories';
import { useAllCities } from '../shared/hooks/useAllCities';
import { useFilterHandlers } from '../shared/hooks/useFilterHandlers';
import { getFilterValues } from '../shared/lib/getFilterValues';
import { useCategoryStore } from '../shared/store/categoryStore';
import { useCityStore } from '../shared/store/cityStore';
import { useFilterStore } from '../shared/store/filterStore';
import { SortOrder } from '../shared/types/defaultFields.type';
import { Button } from '../shared/ui';
import { FilterMenu } from '../shared/ui/filterMenu/filterMenu';
import { getFilterOptions } from '../shared/ui/filterMenu/filterOptions';
import { SortMenu } from '../shared/ui/sortMenu/sortMenu';

/**
 * Компонент SettingsBlock отображает фильтры и сортировку для списка объявлений
 * @returns {JSX.Element} Блок фильтров и сортировки
 */
export const SettingsBlock = () => {
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const { category, city, priceFrom, priceTo, sortBy, sortOrder, setField, resetFilters } =
    useFilterStore();

  const { cities } = useCityStore();
  const { categories } = useCategoryStore();
  const { fetchCities } = useAllCities();
  const { fetchCategories } = useAllCategories();
  const filterOptions = getFilterOptions(cities, categories);
  const filterValues = getFilterValues(category, city, priceFrom, priceTo);

  const { handleFilterChange, handleResetFilters, handleSortChange } = useFilterHandlers(
    setField,
    resetFilters,
    setFilterAnchorEl,
    setSortAnchorEl,
  );

  const handleFilterChangeAdapter = (key: string, value: string) => {
    handleFilterChange(key as keyof typeof filterValues, value);
  };

  useEffect(() => {
    fetchCities();
    fetchCategories();
  }, [fetchCities, fetchCategories]);

  return (
    <Stack flexDirection="row" alignItems="center" justifyContent="space-between" gap={2}>
      <Box width="100%">
        <Button
          fullWidth
          endIcon={<TuneOutlined />}
          onClick={(e) => setFilterAnchorEl(e.currentTarget)}
        >
          Фильтры
        </Button>
        <FilterMenu
          anchorEl={filterAnchorEl}
          open={Boolean(filterAnchorEl)}
          onClose={() => setFilterAnchorEl(null)}
          filters={filterOptions}
          values={filterValues}
          onChange={handleFilterChangeAdapter}
          onReset={handleResetFilters}
        />
      </Box>
      <Box width="100%">
        <Button
          fullWidth
          endIcon={
            <SwapVert
              sx={{
                transform: sortOrder === SortOrder['ASC'] ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          }
          onClick={(e) => setSortAnchorEl(e.currentTarget)}
        >
          Сортировка
        </Button>
        <SortMenu
          anchorEl={sortAnchorEl}
          open={Boolean(sortAnchorEl)}
          onClose={() => setSortAnchorEl(null)}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onChange={handleSortChange}
        />
      </Box>
    </Stack>
  );
};
