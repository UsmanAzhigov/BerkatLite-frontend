import type { SelectOption } from '../../types';
import { FILTER_KEYS, TypeFileds } from '../../types';

/**
 * Функция getFilterOptions формирует массив опций фильтрации для объявлений
 * @param {SelectOption[]} cities - Список городов (объекты с value/label)
 * @param {SelectOption[]} categories - Список категорий (объекты с value/label)
 * @returns {Array} Массив опций фильтрации
 */
export const getFilterOptions = (cities: SelectOption[], categories: SelectOption[]) => [
  {
    key: FILTER_KEYS['CATEGORY'],
    label: 'Категория',
    type: TypeFileds['SELECT'],
    options: [{ value: '', label: 'Все категории' }, ...categories],
  },
  {
    key: FILTER_KEYS['CITY'],
    label: 'Город',
    type: TypeFileds['SELECT'],
    options: [{ value: '', label: 'Все города' }, ...cities],
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
