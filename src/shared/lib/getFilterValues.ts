/**
 * Функция getFilterValues формирует объект значений фильтров для объявлений
 * @param {string} [category] - Категория
 * @param {string} [city] - Город
 * @param {string} [priceFrom] - Цена от
 * @param {string} [priceTo] - Цена до
 * @returns {{ category: string; city: string; priceFrom: string; priceTo: string }} Объект значений фильтров
 */
export const getFilterValues = (
  category?: string,
  city?: string,
  priceFrom?: string,
  priceTo?: string,
) => ({
  category: category ?? '',
  city: city ?? '',
  priceFrom: priceFrom ?? '',
  priceTo: priceTo ?? '',
});
