import { Pagination, Stack } from '@mui/material';
import { useMemo, useState } from 'react';

import { useAllProducts } from '../../shared/hooks/useAllProducts';
import { defaultFields, type DefaultFields } from '../../shared/types/defaultFields.type';
import { InputSearch } from '../../shared/ui';
import { SizeSearch, VarianSearch } from '../../shared/ui/inputSearch/type';
import { FilterBlock, ListAd } from '../../widgets';

export default function HomePage() {
  const [fields, setFields] = useState<DefaultFields>(defaultFields);
  const productQueryParams = useMemo(
    () => ({
      page: fields.page,
      sortBy: fields.sortBy,
      sortOrder: fields.sortOrder,
      city: fields.city || undefined,
      priceFrom: fields.priceFrom ? Number(fields.priceFrom) : undefined,
      priceTo: fields.priceTo ? Number(fields.priceTo) : undefined,
      category: fields.category || undefined,
    }),
    [fields],
  );

  const { items: allItems, totalPages } = useAllProducts(productQueryParams);
  const filteredItems = useMemo(
    () => allItems.filter((item) => item.title.toLowerCase().includes(fields.search.toLowerCase())),
    [allItems, fields.search],
  );

  return (
    <Stack flexDirection="column" gap={1}>
      <InputSearch
        placeholder="Введите товар..."
        type="search"
        size={SizeSearch.SMALL}
        variant={VarianSearch.OUTLINED}
        value={fields.search}
        onChange={(e) =>
          setFields((prev) => ({
            ...prev,
            search: e.target.value,
            page: 1,
          }))
        }
      />
      <FilterBlock fields={fields} setFields={setFields} />
      <ListAd data={filteredItems} />
      {!fields.search.trim() && (
        <Pagination
          count={totalPages}
          page={fields.page}
          onChange={(_, value) => setFields((prev) => ({ ...prev, page: value }))}
        />
      )}
    </Stack>
  );
}
