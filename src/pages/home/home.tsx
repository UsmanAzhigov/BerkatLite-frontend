import { Pagination, Stack } from '@mui/material';

import { useAllProducts } from '../../shared/hooks/useAllProducts';
import { useProductQueryParams } from '../../shared/hooks/useProductQueryParams';
import { useFilterStore } from '../../shared/store/filterStore';

import { SettingsBlock } from '../../widgets';
import { RenderContent } from './ui';

/**
 * Главная страница со списком товаров, поиском и пагинацией
 * Использует zustand для управления фильтрами и поиском
 * @returns {JSX.Element} Компонент главной страницы
 */
export const HomePage = () => {
  const { page, setField } = useFilterStore();
  const productQueryParams = useProductQueryParams();
  const { items: allItems, totalPages, loading } = useAllProducts(productQueryParams);

  const hasItems = allItems.length > 0;

  /**
   * Обработчик изменения значения поиска
   * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения инпута
   */

  /**
   * Обработчик изменения страницы пагинации
   * @param {React.ChangeEvent<unknown>} _ - Событие изменения
   * @param {number} value - Новая страница
   */

  const handlePaginationChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setField('page', value);
  };

  return (
    <Stack flexDirection="column" justifyContent="space-between" gap={1} sx={{ minHeight: '85vh' }}>
      <Stack flexDirection="column" gap={1} flex={1}>
        <SettingsBlock />
        <RenderContent loading={loading} allItems={allItems} />
      </Stack>
      {hasItems && (
        <Pagination
          sx={{ margin: '0 auto', mb: 2 }}
          count={totalPages}
          page={page}
          onChange={handlePaginationChange}
        />
      )}
    </Stack>
  );
};
