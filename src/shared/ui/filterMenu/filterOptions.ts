import { FILTER_KEYS, TypeFileds } from '../../types';

/**
 * Функция getFilterOptions формирует массив опций фильтрации для объявленийыы
 * @param {string[]} cities - Список городов
 * @param {any[]} categories - Список категорий
 * @returns {Array} Массив опций фильтрации
 */

interface FilterCategories {
  value: string;
  label: string;
}

export const getFilterOptions = (cities: string[], categories: FilterCategories[]) => [
  {
    key: FILTER_KEYS['CATEGORY'],
    label: 'Категория',
    type: TypeFileds['SELECT'],
    options: categories,
  },
  {
    key: FILTER_KEYS['CITY'],
    label: 'Город',
    type: TypeFileds['SELECT'],
    options: [
      { value: 'Все города', label: 'Все города' },
      ...cities.map((city) => ({ value: city, label: city })),
    ],
  },
  {
    key: FILTER_KEYS['PRICE_FROM'],
    label: 'Цена от',
    type: TypeFileds['INPUT'],
  },
  {
    key: FILTER_KEYS['PRICE_TO'],
    label: 'Цена до',
    type: TypeFileds['INPUT'],
  },
];
