import { SwapVert, Tune } from '@mui/icons-material';
import {
  Pagination,
  Stack,
  Menu,
  MenuItem,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { useState } from 'react';

import { Button, InputSearch } from '../../shared/ui';
import { SizeSearch, VarianSearch } from '../../shared/ui/inputSearch/type';
import { ListAd } from '../../widgets';
import { useAllProducts } from '../../shared/hooks/useAllProducts';
import { useAllCities } from '../../shared/hooks/useAllCities';

export default function HomePage() {
  const [fields, setFields] = useState<{
    search: string;
    sortOrder: 'asc' | 'desc' | '';
    sortBy: 'price' | 'popular' | 'createdAt';
    page: number;
    city: string;
    priceFrom: string;
    priceTo: string;
    category: string;
    filterAnchorEl: null | HTMLElement;
    sortAnchorEl: null | HTMLElement;
  }>({
    search: '',
    sortOrder: '',
    sortBy: 'createdAt',
    page: 1,
    city: '',
    priceFrom: '',
    priceTo: '',
    category: '',
    filterAnchorEl: null,
    sortAnchorEl: null,
  });

  const { items: allItems, totalPages } = useAllProducts({
    page: fields.page,
    sortBy: fields.sortBy,
    sortOrder: fields.sortOrder,
    city: fields.city || undefined,
    priceFrom: fields.priceFrom ? Number(fields.priceFrom) : undefined,
    priceTo: fields.priceTo ? Number(fields.priceTo) : undefined,
    category: fields.category || undefined,
  });
  const allCities = useAllCities();

  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(fields.search.toLowerCase()),
  );

  return (
    <Stack flexDirection="column" gap={1}>
      <InputSearch
        placeholder="Введите товар..."
        type="search"
        size={SizeSearch.SMALL}
        variant={VarianSearch.OUTLINED}
        value={fields.search}
        onChange={(e) =>
          setFields((prev) => ({
            ...prev,
            search: e.target.value,
            page: 1,
          }))
        }
      />

      <Stack flexDirection="row" alignItems="center" justifyContent="space-between" gap={2}>
        <Box width="100%">
          <Button
            fullWidth
            endIcon={<Tune />}
            onClick={(e) => setFields((f) => ({ ...f, filterAnchorEl: e.currentTarget }))}
          >
            Фильтры
          </Button>
          <Menu
            anchorEl={fields.filterAnchorEl}
            open={Boolean(fields.filterAnchorEl)}
            onClose={() => setFields((f) => ({ ...f, filterAnchorEl: null }))}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <MenuItem disableRipple>
              <FormControl fullWidth>
                <InputLabel>Категория</InputLabel>
                <Select
                  label="Категория"
                  value={fields.category}
                  onChange={(e) => setFields((f) => ({ ...f, category: e.target.value, page: 1 }))}
                >
                  <MenuItem value="">Все категории</MenuItem>
                  <MenuItem value="Транспорт">Транспорт</MenuItem>
                  <MenuItem value="Недвижимость">Недвижимость</MenuItem>
                </Select>
              </FormControl>
            </MenuItem>
            <MenuItem disableRipple>
              <FormControl fullWidth>
                <InputLabel>Город</InputLabel>
                <Select
                  label="Город"
                  value={fields.city}
                  onChange={(e) => setFields((f) => ({ ...f, city: e.target.value, page: 1 }))}
                >
                  <MenuItem value="">Все города</MenuItem>
                  {allCities.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MenuItem>
            <MenuItem disableRipple>
              <TextField
                fullWidth
                label="Цена от"
                type="number"
                value={fields.priceFrom}
                onChange={(e) => setFields((f) => ({ ...f, priceFrom: e.target.value, page: 1 }))}
              />
            </MenuItem>
            <MenuItem disableRipple>
              <TextField
                fullWidth
                label="Цена до"
                type="number"
                value={fields.priceTo}
                onChange={(e) => setFields((f) => ({ ...f, priceTo: e.target.value, page: 1 }))}
              />
            </MenuItem>
          </Menu>
        </Box>

        <Box width="100%">
          <Button
            fullWidth
            endIcon={
              <SwapVert
                sx={{
                  transform: fields.sortOrder === 'asc' ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            }
            onClick={(e) => setFields((f) => ({ ...f, sortAnchorEl: e.currentTarget }))}
          >
            Сортировка
          </Button>
          <Menu
            anchorEl={fields.sortAnchorEl}
            open={Boolean(fields.sortAnchorEl)}
            onClose={() => setFields((f) => ({ ...f, sortAnchorEl: null }))}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            {['price', 'popular', 'createdAt'].map((sortKey) => (
              <MenuItem
                key={sortKey}
                onClick={() =>
                  setFields((prev) => ({
                    ...prev,
                    sortBy: sortKey as 'price' | 'popular' | 'createdAt',
                    sortOrder:
                      prev.sortBy === sortKey ? (prev.sortOrder === 'asc' ? 'desc' : 'asc') : 'asc',
                    sortAnchorEl: null,
                    page: 1,
                  }))
                }
              >
                {sortKey === 'price'
                  ? 'По цене'
                  : sortKey === 'popular'
                  ? 'По популярности'
                  : 'По дате'}{' '}
                {fields.sortBy === sortKey ? (fields.sortOrder === 'asc' ? '↑' : '↓') : ''}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Stack>

      <ListAd data={filteredItems} />

      {!fields.search.trim() && (
        <Pagination
          count={totalPages}
          page={fields.page}
          onChange={(_, value) => setFields((prev) => ({ ...prev, page: value }))}
        />
      )}
    </Stack>
  );
}
