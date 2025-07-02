import { Message, Phone } from '@mui/icons-material';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Advert } from '../../shared/types';
import { Button } from '../../shared/ui';

const mockAdverts: Advert[] = [
  {
    title: 'Продам велосипед',
    description: 'Горный велосипед, почти новый',
    phone: ['+7 928 091 6480'],
    city: 'Грозный',
    price: 15000,
    image: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    ],
    date: '12.06.2024',
    properties: [
      { key: 'Состояние', value: 'Отличное' },
      { key: 'Цвет', value: 'Синий' },
    ],
  },
  {
    title: 'Сдам квартиру',
    description: '2-комнатная, центр города',
    phone: ['+7 938 007 4271'],
    city: 'Аргун',
    price: 20000,
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

export default function AdPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const advert = mockAdverts[Number(id)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!advert) return <Typography>Объявление не найдено</Typography>;

  return (
    <>
      <Button
        fullWidth={false}
        onClick={() => navigate(-1)}
        variant="outlined"
        sx={{ mb: 2 }}
      >
        ← Назад
      </Button>

      <Paper
        sx={{
          width: '100%',
          minHeight: 'calc(100vh - 32px)',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0px 1px 4px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {advert.image && (
          <Box
            component="img"
            src={advert.image[0]}
            alt={advert.title}
            sx={{
              width: '100%',
              height: 200,
              objectFit: 'cover',
            }}
          />
        )}

        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography fontSize={20} fontWeight={700}>
              {advert.title}
            </Typography>
            {advert.price && (
              <Typography fontSize={18} fontWeight={600} color="primary">
                {advert.price.toLocaleString()} ₽
              </Typography>
            )}
            <Box display="flex" gap={1} mt={1}>
              <Button
                startIcon={<Message />}
                sx={{ backgroundColor: '#25D366' }}
                onClick={() =>
                  window.open(
                    `https://wa.me/${advert.phone[0].replace(/\D/g, '')}`,
                    '_blank',
                  )
                }
              >
                Написать
              </Button>
              <Button
                startIcon={<Phone />}
                onClick={() => window.open(`tel:${advert.phone[0]}`)}
              >
                Позвонить
              </Button>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={13} color="text.secondary" fontWeight={500}>
              {advert.city}
            </Typography>
            <Typography fontSize={13} color="text.secondary" fontWeight={500}>
              {advert.date}
            </Typography>
          </Box>
          <Divider />
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={3}
          >
            <Box flex={1}>
              <Typography fontSize={15} color="text.primary">
                {advert.description}
              </Typography>
            </Box>
            <Box
              bgcolor="grey.300"
              width="1px"
              display={{ xs: 'none', md: 'block' }}
            />
            <Box flex={1}>
              {advert.properties.map((prop, idx) => (
                <Typography
                  key={idx}
                  fontSize={15}
                  color="text.secondary"
                  mb={0.5}
                >
                  <strong>{prop.key}:</strong> {prop.value}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
