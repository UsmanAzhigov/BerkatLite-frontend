import dayjs from 'dayjs';

/**
 * Функция formatDate форматирует дату в формат 'DD.MM.YYYY'
 * @param {string | Date} date - Дата для форматирования
 * @returns {string} Строка в формате 'DD.MM.YYYY'
 */
export function formatDate(date: string | Date): string {
  return dayjs(date).format('DD.MM.YYYY');
}
