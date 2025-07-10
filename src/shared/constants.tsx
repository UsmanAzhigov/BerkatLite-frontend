import { SortBy } from './types';
import type { SortOption } from './ui/sortMenu/type';

export const categories = [
  { value: 'Все категории', label: 'Все категории' },
  { value: 'Транспорт', label: 'Транспорт' },
  { value: 'Недвижимость', label: 'Недвижимость' },
];

export const sortOptions: SortOption[] = [
  { value: SortBy['PRICE'], label: 'По цене' },
  { value: SortBy['POPULAR'], label: 'По популярности' },
  { value: SortBy['CREATED_AT'], label: 'По дате' },
];
