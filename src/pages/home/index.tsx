import { Pagination, Stack } from '@mui/material';
import { useMemo } from 'react';
import { useDebounce } from '../../shared/hooks/useDebounce';

import { LoadingSkeleton, StateMessage } from '../../components';
import { useAllProducts } from '../../shared/hooks/useAllProducts';
import { useFilterStore } from '../../shared/store/filterStore';
import { InputSearch } from '../../shared/ui';
import { SizeSearch, VarianSearch } from '../../shared/ui/inputSearch/type';
import { FilterBlock, ListAd } from '../../widgets';

export default function HomePage() {
  const { search, sortBy, sortOrder, page, city, priceFrom, priceTo, category, setField } =
    useFilterStore();
  const debouncedSearch = useDebounce(search, 400);
  const productQueryParams = useMemo(
    () => ({
      page,
      sortBy,
      sortOrder,
      city: city || undefined,
      priceFrom: priceFrom ? Number(priceFrom) : undefined,
      priceTo: priceTo ? Number(priceTo) : undefined,
      category: category || undefined,
      search: debouncedSearch || undefined,
    }),
    [page, sortBy, sortOrder, city, priceFrom, priceTo, category, debouncedSearch],
  );

  const { items: allItems, totalPages, loading } = useAllProducts(productQueryParams);

  const renderContent = () => {
    if (loading) {
      return <LoadingSkeleton />;
    }
    if (allItems.length > 0) {
      return <ListAd data={allItems} />;
    }
    return <StateMessage />;
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
          onChange={(e) => setField('search', e.target.value)}
        />
        <FilterBlock />
        {renderContent()}
      </Stack>
      {allItems.length > 0 && (
        <Pagination
          sx={{ margin: '0 auto', mb: 2 }}
          count={totalPages}
          page={page}
          onChange={(_, value) => setField('page', value)}
        />
      )}
    </Stack>
  );
}
