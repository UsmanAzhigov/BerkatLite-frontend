import { SwapVert, TuneOutlined } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import type { FC } from 'react';

import { useAllCities } from '../../shared/hooks/useAllCities';
import { SortBy, SortOrder } from '../../shared/types/defaultFields.type';
import { Button } from '../../shared/ui';
import { FilterMenu } from '../../shared/ui/filterMenu';
import type { FilterOption } from '../../shared/ui/filterMenu/type';
import { SortMenu } from '../../shared/ui/sortMenu';
import type { SortOption } from '../../shared/ui/sortMenu/type';
import type { FilterBlockProps } from './type';

const categories = [
  { value: '', label: 'Все категории' },
  { value: 'Транспорт', label: 'Транспорт' },
  { value: 'Недвижимость', label: 'Недвижимость' },
];

const sortOptions: SortOption[] = [
  { value: SortBy.PRICE, label: 'По цене' },
  { value: SortBy.POPULAR, label: 'По популярности' },
  { value: SortBy.CREATED_AT, label: 'По дате' },
];

export const FilterBlock: FC<FilterBlockProps> = ({ fields, setFields }) => {
  const allCities = useAllCities();

  const filterOptions: FilterOption[] = [
    {
      key: 'category',
      label: 'Категория',
      type: 'select',
      options: categories,
    },
    {
      key: 'city',
      label: 'Город',
      type: 'select',
      options: [
        { value: '', label: 'Все города' },
        ...allCities.map((city) => ({ value: city, label: city })),
      ],
    },
    {
      key: 'priceFrom',
      label: 'Цена от',
      type: 'input',
    },
    {
      key: 'priceTo',
      label: 'Цена до',
      type: 'input',
    },
  ];

  const handleFilterChange = (key: string, value: string) => {
    setFields((f) => ({ ...f, [key]: value, page: 1 }));
  };

  const handleResetFilters = () => {
    setFields((f) => ({
      ...f,
      category: '',
      city: '',
      priceFrom: '',
      priceTo: '',
      filterAnchorEl: null,
      page: 1,
    }));
  };

  const handleSortChange = (sortBy: string, sortOrder: 'ASC' | 'DESC') => {
    setFields((f) => ({
      ...f,
      sortBy: sortBy as SortBy,
      sortOrder: sortOrder === 'ASC' ? SortOrder['ASC'] : SortOrder['DESC'],
      sortAnchorEl: null,
      page: 1,
    }));
  };

  const filterValues: Record<string, string> = {
    category: fields.category ?? '',
    city: fields.city ?? '',
    priceFrom: fields.priceFrom ?? '',
    priceTo: fields.priceTo ?? '',
  };

  return (
    <Stack flexDirection="row" alignItems="center" justifyContent="space-between" gap={2}>
      <Box width="100%">
        <Button
          fullWidth
          endIcon={<TuneOutlined />}
          onClick={(e) => setFields((f) => ({ ...f, filterAnchorEl: e.currentTarget }))}
        >
          Фильтры
        </Button>
        <FilterMenu
          anchorEl={fields.filterAnchorEl}
          open={Boolean(fields.filterAnchorEl)}
          onClose={() => setFields((f) => ({ ...f, filterAnchorEl: null }))}
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
                transform:
                  fields.sortOrder === SortOrder['ASC'] ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          }
          onClick={(e) => setFields((f) => ({ ...f, sortAnchorEl: e.currentTarget }))}
        >
          Сортировка
        </Button>
        <SortMenu
          anchorEl={fields.sortAnchorEl}
          open={Boolean(fields.sortAnchorEl)}
          onClose={() => setFields((f) => ({ ...f, sortAnchorEl: null }))}
          options={sortOptions}
          sortBy={fields.sortBy as string}
          sortOrder={fields.sortOrder as 'ASC' | 'DESC'}
          onChange={handleSortChange}
        />
      </Box>
    </Stack>
  );
};
