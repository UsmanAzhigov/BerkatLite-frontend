import { ImageNotSupported, Message, Phone } from '@mui/icons-material';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Button } from '../../shared/ui';
import { useProduct } from '../../shared/hooks/useProduct';
import { formattedDate } from '../../shared/lib/formattedDate';

export default function AdPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { advert } = useProduct(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!advert) return <Typography>Объявление не найдено</Typography>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Button fullWidth={false} onClick={() => navigate(-1)} variant="outlined" sx={{ mb: 2 }}>
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
        <Box>
          {advert.images && advert.images.length > 1 ? (
            <Slider {...sliderSettings}>
              {advert.images.map((img: string, idx: number) => (
                <Box
                  key={img + idx}
                  component="img"
                  src={img}
                  alt={advert.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
              ))}
            </Slider>
          ) : advert.images && advert.images.length === 1 ? (
            <Box
              component="img"
              src={advert.images[0]}
              alt={advert.title}
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
              }}
            />
          ) : (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              sx={{
                width: '100%',
                height: 200,
                backgroundColor: '#e0e0e0',
                color: '#777',
              }}
            >
              <ImageNotSupported sx={{ fontSize: 48, mb: 1 }} />
              <Typography variant="body2">Нет фото</Typography>
            </Box>
          )}
        </Box>

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
                  window.open(`https://wa.me/${advert.phone[0].replace(/\D/g, '')}`, '_blank')
                }
              >
                Написать
              </Button>
              <Button startIcon={<Phone />} onClick={() => window.open(`tel:${advert.phone[0]}`)}>
                Позвонить
              </Button>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontSize={13} color="text.secondary" fontWeight={500}>
              {advert.city}
            </Typography>
            <Typography fontSize={13} color="text.secondary" fontWeight={500}>
              {formattedDate(advert.createdAt)}
            </Typography>
          </Box>
          <Divider />
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
            <Box flex={1}>
              <Typography fontSize={15} color="text.primary">
                {advert.description}
              </Typography>
            </Box>
            <Box bgcolor="grey.300" width="1px" display={{ xs: 'none', md: 'block' }} />
            <Box flex={1}>
              {advert.properties.map((prop: { name: string; text: string }, idx: number) => (
                <Typography key={idx} fontSize={15} color="text.secondary" mb={0.5}>
                  <strong>{prop.name}:</strong> {prop.text}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
