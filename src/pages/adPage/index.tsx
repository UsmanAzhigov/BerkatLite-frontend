import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
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

export default function AdPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const advert = mockAdverts[Number(id)];

  if (!advert)
    return (
      <>
        <Typography>Объявление не найдено</Typography>
      </>
    );

  return (
    <>
      <Button onClick={() => navigate(-1)} variant="outlined" sx={{ mb: 2 }}>
        ← Назад
      </Button>
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        {advert.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {advert.city}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {advert.description}
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          Телефон:
        </Typography>
        <List sx={{ pl: 2 }}>
          {advert.phone.map((p) => (
            <ListItem key={p} sx={{ p: 0 }}>
              <Typography variant="body1">{p}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight={600}>
          Дополнительно:
        </Typography>
        <List sx={{ pl: 2 }}>
          {advert.properties.map((prop, idx) => (
            <ListItem key={prop.key + idx} sx={{ p: 0 }}>
              <Typography variant="body2">
                {prop.key}:{' '}
                <Box component="span" color="text.secondary">
                  {prop.value}
                </Box>
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
