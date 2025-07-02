import { SwapVert, Tune } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { mockAdverts } from '../../shared/lib/mockAdverts';
import { Button, InputSearch } from '../../shared/ui';
import { SizeSearch, VarianSearch } from '../../shared/ui/inputSearch/type';
import { ListAd } from '../../widgets';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const filteredAdverts = mockAdverts
    .filter(
      (ad) =>
        ad.title.toLowerCase().includes(search.toLowerCase()) ||
        ad.description.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => (sortAsc ? a.price - b.price : b.price - a.price));

  return (
    <Stack flexDirection="column" gap={1}>
      <Stack flexDirection="column" gap={1}>
        <InputSearch
          placeholder="Введите товар..."
          type="search"
          size={SizeSearch['SMALL']}
          variant={VarianSearch['OUTLINED']}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Stack flexDirection="row" alignItems="center" justifyContent="space-between" gap={2}>
          <Button endIcon={<Tune />}> Фильтры</Button>
          <Button
            endIcon={
              <SwapVert
                sx={{
                  transform: sortAsc ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            }
            onClick={() => setSortAsc((v) => !v)}
          >
            Сортировка:
          </Button>
        </Stack>
      </Stack>
      <ListAd data={filteredAdverts} />
    </Stack>
  );
}
