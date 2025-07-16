import { Pagination, Stack } from '@mui/material';

import { useAllProducts } from '../../shared/hooks/useAllProducts';
import { useProductQueryParams } from '../../shared/hooks/useProductQueryParams';
import { useSearch } from '../../shared/hooks/useSearch';
import { useFilterStore } from '../../shared/store/filterStore';
import { InputSearch } from '../../shared/ui';
import { SizeSearch, VarianSearch } from '../../shared/ui/inputSearch/inputSearch.type';

import { SettingsBlock } from '../../widgets';
import { RenderContent } from './ui';

export const HomePage = () => {
  const { search, setSearch } = useSearch();
  const { page, setField } = useFilterStore();
  const productQueryParams = useProductQueryParams();
  const { items: allItems, totalPages, loading } = useAllProducts(productQueryParams);

  const hasItems = allItems.length > 0;
  const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handlePaginationChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setField('page', value);
  };

  return (
    <Stack flexDirection="column" justifyContent="space-between" gap={1} sx={{ minHeight: '85vh' }}>
      <Stack flexDirection="column" gap={1} flex={1}>
        <InputSearch
          placeholder="Введите товар..."
          type="search"
          size={SizeSearch.SMALL}
          variant={VarianSearch.OUTLINED}
          value={search}
          onChange={handleInputSearchChange}
        />
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
