import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCategoryStore } from '../../shared/store/categoryStore';
import { useCityStore } from '../../shared/store/cityStore';
import { useFilterStore } from '../../shared/store/filterStore';
import type { SortBy } from '../../shared/types';
import { AllCategories } from './ui/allCategories';
import { FilterHeader } from './ui/filterHeader';

export const FilterPage = () => {
  const navigate = useNavigate();
  const { categories } = useCategoryStore();
  const { cities } = useCityStore();

  const { category, city, priceFrom, priceTo, sortBy, setField, resetFilters } = useFilterStore();

  const onBackToHome = () => {
    navigate('/');
  };

  const onApply = () => {
    setField('page', 1); // чтобы начать с первой страницы
    navigate('/'); // вернёмся на главную, фильтры уже в zustand
  };

  return (
    <Box padding={2}>
      <FilterHeader onClick={onBackToHome} onReset={resetFilters} />
      <Stack gap={6} mt={3}>
        <Box flex={1}>
          <Typography variant="h6" mb={2.5} fontWeight={500}>
            Все категории
          </Typography>
          <AllCategories
            categories={categories}
            selectedCategory={category}
            onSelect={(value: string) => setField('category', value)}
          />
        </Box>

        <Box flex={1}>
          <Typography variant="h6" mb={2.5} fontWeight={500}>
            Где искать
          </Typography>
          <FormControl fullWidth>
            <InputLabel>{cities[0]?.label}</InputLabel>
            <Select label="Город" value={city} onChange={(e) => setField('city', e.target.value)}>
              <MenuItem value="">Все города</MenuItem>
              {cities.map((c) => (
                <MenuItem key={c.value} value={c.value}>
                  {c.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box flex={1}>
          <Typography variant="h6" mb={2.5} fontWeight={500}>
            Цена
          </Typography>
          <Stack direction="row" gap={2}>
            <TextField
              fullWidth
              label="От"
              type="number"
              value={priceFrom}
              onChange={(e) => setField('priceFrom', e.target.value)}
            />
            <TextField
              fullWidth
              label="До"
              type="number"
              value={priceTo}
              onChange={(e) => setField('priceTo', e.target.value)}
            />
          </Stack>
        </Box>

        <Box flex={1}>
          <Typography variant="h6" mb={2.5} fontWeight={500}>
            Сортировка
          </Typography>
          <FormControl>
            <RadioGroup
              value={sortBy}
              onChange={(e) => setField('sortBy', e.target.value as SortBy)}
            >
              <FormControlLabel value="price" control={<Radio />} label="По цене" />
              <FormControlLabel value="createdAt" control={<Radio />} label="По дате" />
              <FormControlLabel value="views" control={<Radio />} label="По просмотрам" />
            </RadioGroup>
          </FormControl>
        </Box>

        <Button sx={{ backgroundColor: '#37AFFF' }} variant="contained" onClick={onApply}>
          Применить
        </Button>
      </Stack>
    </Box>
  );
};
