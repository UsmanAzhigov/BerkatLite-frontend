import { SwapVert, TuneOutlined } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';

import { categories } from '../../shared/constants';
import { useCityStore } from '../../shared/store/cityStore';
import { useFilterStore } from '../../shared/store/filterStore';
import { SortBy, SortOrder } from '../../shared/types/defaultFields.type';
import { Button } from '../../shared/ui';
import { FilterMenu } from '../../shared/ui/filterMenu';
import { SortMenu } from '../../shared/ui/sortMenu';

export const FilterBlock = () => {
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const { category, city, priceFrom, priceTo, sortBy, sortOrder, setField, resetFilters } =
    useFilterStore();
  const { cities, fetchCities } = useCityStore();

  useState(() => {
    fetchCities();
  });

  const filterOptions = [
    {
      key: 'category',
      label: 'Категория',
      type: 'select' as const,
      options: categories,
    },
    {
      key: 'city',
      label: 'Город',
      type: 'select' as const,
      options: [
        { value: 'Все города', label: 'Все города' },
        ...cities.map((city) => ({ value: city, label: city })),
      ],
    },
    {
      key: 'priceFrom',
      label: 'Цена от',
      type: 'input' as const,
    },
    {
      key: 'priceTo',
      label: 'Цена до',
      type: 'input' as const,
    },
  ];

  const handleFilterChange = (key: string, value: string) => {
    setField(key as any, value);
  };

  const handleResetFilters = () => {
    resetFilters();
    setFilterAnchorEl(null);
  };

  const handleSortChange = (sortByValue: string, sortOrderValue: 'ASC' | 'DESC') => {
    setField('sortBy', sortByValue as SortBy);
    setField('sortOrder', sortOrderValue === 'ASC' ? SortOrder['ASC'] : SortOrder['DESC']);
    setSortAnchorEl(null);
  };

  const filterValues: Record<string, string> = {
    category: category ?? '',
    city: city ?? '',
    priceFrom: priceFrom ?? '',
    priceTo: priceTo ?? '',
  };

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
          onChange={handleFilterChange}
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
          sortBy={sortBy as string}
          sortOrder={sortOrder as unknown as 'ASC' | 'DESC'}
          onChange={handleSortChange}
        />
      </Box>
    </Stack>
  );
};
