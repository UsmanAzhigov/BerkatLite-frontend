import { categories } from '../../constants';
import { TypeFileds } from '../../types/defaultFields.type';

export interface FilterOption {
  key: string;
  label: string;
  type: TypeFileds;
  options?: { value: string; label: string }[];
}

interface FilterValues {
  category: string;
  city: string;
  priceFrom: string;
  priceTo: string;
  [key: string]: string;
}

export interface FilterMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  filters: FilterOption[];
  values: FilterValues;

  onChange: (key: string, value: string) => void;
  onReset: () => void;
}

export const getFilterValues = (
  category: string,
  city: string,
  priceFrom: string,
  priceTo: string,
) => ({
  category: category ?? '',
  city: city ?? '',
  priceFrom: priceFrom ?? '',
  priceTo: priceTo ?? '',
});

export const getFilterOptions = (cities: string[]) => [
  {
    key: 'category',
    label: 'Категория',
    type: TypeFileds.SELECT,
    options: categories,
  },
  {
    key: 'city',
    label: 'Город',
    type: TypeFileds.SELECT,
    options: [
      { value: 'Все города', label: 'Все города' },
      ...cities.map((city) => ({ value: city, label: city })),
    ],
  },
  {
    key: 'priceFrom',
    label: 'Цена от',
    type: TypeFileds.INPUT,
  },
  {
    key: 'priceTo',
    label: 'Цена до',
    type: TypeFileds.INPUT,
  },
];
