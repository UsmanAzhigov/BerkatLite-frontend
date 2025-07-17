import { SortBy } from './types';
import type { SortOption } from './ui/sortMenu/sortMenu.type';

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

export const COLORS = {
  WHITE: '#fff',
  BLACK: '#000000',
  BLUE: '#007BFF',
  GREEN_WHATSAPP: '#25D366',
  GREY_BORDER: '#d5d5d5',
  GREY_BG: '#e0e0e0',
  GREY_TEXT: '#777',
  SHADOW_LIGHT: 'rgba(0,0,0,0.1)',
  SHADOW_CARD: 'rgba(0,0,0,0.13)',
  SEARCH_ICON: '#D5D5D5',
};
