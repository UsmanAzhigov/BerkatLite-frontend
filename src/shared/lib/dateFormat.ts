import dayjs from 'dayjs';

/**
 * Форматирует дату в формат 'DD.MM.YYYY'.
 * @param date - строка или объект даты
 * @returns строка в формате 'DD.MM.YYYY'
 */
export function formatDate(date: string | Date): string {
  return dayjs(date).format('DD.MM.YYYY');
}
