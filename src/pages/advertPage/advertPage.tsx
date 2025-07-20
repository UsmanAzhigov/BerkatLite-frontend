import { Box, Divider, Paper, Typography } from '@mui/material';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { COLORS } from '../../shared/constants';
import { useAdvert } from '../../shared/hooks/useAdvert';

import { Button } from '../../shared/ui';
import { AdvertMainInfo, DescriptionAndProperties, ImageGallery, LocationAndDate } from './ui';

export const AdvertPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { advert } = useAdvert(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!advert) {
    return <Typography>Объявление не найдено</Typography>;
  }

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
          boxShadow: `0px 1px 4px 4px ${COLORS.SHADOW_LIGHT}`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ImageGallery images={advert.images} />
        <Box sx={{ p: '0px 16px 16px 16px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <AdvertMainInfo price={advert.price} phone={advert.phone} />
          <LocationAndDate city={advert.city} createdAt={advert.createdAt} />
          <Divider />
          <DescriptionAndProperties
            description={advert.description}
            properties={advert.properties}
          />
        </Box>
      </Paper>
    </>
  );
};
