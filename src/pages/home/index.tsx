import {
  Box,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Advert } from '../../shared/types';

const mockAdverts: Advert[] = [
  {
    title: 'Продам велосипед',
    description: 'Горный велосипед, почти новый',
    phone: ['+79991234567'],
    city: 'Грозный',
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
    properties: [
      { key: 'Этаж', value: '3' },
      { key: 'Площадь', value: '60м2' },
    ],
  },
];

const cities = Array.from(new Set(mockAdverts.map((a) => a.city)));

export default function HomePage() {
  const [city, setCity] = useState('');
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');
  const navigate = useNavigate();

  const filtered = mockAdverts
    .filter((a) => !city || a.city === city)
    .sort((a, b) =>
      sort === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title),
    );

  return (
    <>
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Объявления
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <FormControl fullWidth size="small">
          <InputLabel>Город</InputLabel>
          <Select
            value={city}
            label="Город"
            onChange={(e) => setCity(e.target.value)}
          >
            <MenuItem value="">Все города</MenuItem>
            {cities.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          onClick={() => setSort((s) => (s === 'asc' ? 'desc' : 'asc'))}
        >
          {sort === 'asc' ? 'А-Я' : 'Я-А'}
        </Button>
      </Box>
      <List sx={{ p: 0 }}>
        {filtered.map((ad, idx) => (
          <ListItem
            key={ad.title + idx}
            disablePadding
            sx={{ mb: 2, cursor: 'pointer' }}
            onClick={() => navigate(`/ad/${idx}`)}
          >
            <Paper sx={{ width: '100%', p: 2, borderRadius: 2, boxShadow: 2 }}>
              <Typography variant="h6">{ad.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {ad.city}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {ad.description}
              </Typography>
            </Paper>
          </ListItem>
        ))}
      </List>
    </>
  );
}
