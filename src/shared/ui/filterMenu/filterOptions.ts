import { TypeFileds } from '../../types/defaultFields.type';

export const getFilterOptions = (cities: string[], categories: any[]) => [
  {
    key: 'category',
    label: 'Категория',
    type: TypeFileds['SELECT'],
    options: categories,
  },
  {
    key: 'city',
    label: 'Город',
    type: TypeFileds['SELECT'],
    options: [
      { value: 'Все города', label: 'Все города' },
      ...cities.map((city) => ({ value: city, label: city })),
    ],
  },
  {
    key: 'priceFrom',
    label: 'Цена от',
    type: TypeFileds['INPUT'],
  },
  {
    key: 'priceTo',
    label: 'Цена до',
    type: TypeFileds['INPUT'],
  },
];
