import { SwapVert, Tune } from '@mui/icons-material';
import { Stack } from '@mui/material';
import type { Advert } from '../../shared/types';
import { Button, InputSearch } from '../../shared/ui';
import { SizeSearch, VarianSearch } from '../../shared/ui/inputSearch/type';
import { ListAd } from '../../widgets';

const mockAdverts: Advert[] = [
  {
    title: 'Продам велосипед',
    description: 'Горный велосипед, почти новый',
    phone: ['+79991234567'],
    city: 'Грозный',
    image: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    ],
    date: '12.06.2024',
    price: 25000,
    properties: [
      { key: 'Состояние', value: 'Отличное' },
      { key: 'Цвет', value: 'Синий' },
    ],
  },
  {
    title: 'Сдам квартиру',
    description: '2-комнатная, центр города',
    phone: ['+79997654321'],
    city: 'Аргун',
    price: 25000,
    image: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    ],
    date: '12.06.2024',
    properties: [
      { key: 'Этаж', value: '3' },
      { key: 'Площадь', value: '60м2' },
    ],
  },
];

export default function HomePage() {
  return (
    <Stack flexDirection="column" gap={1}>
      <Stack flexDirection="column" gap={1}>
        <InputSearch
          placeholder="Введите товар..."
          type="search"
          size={SizeSearch['SMALL']}
          variant={VarianSearch['OUTLINED']}
        />
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Button endIcon={<Tune />}> Фильтры</Button>
          <Button endIcon={<SwapVert />}>Сортировка</Button>
        </Stack>
      </Stack>
      <ListAd data={mockAdverts} />
    </Stack>
  );
}
