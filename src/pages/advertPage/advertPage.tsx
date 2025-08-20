import { Box, Divider, Typography } from '@mui/material';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { COLORS } from '../../shared/constants';
import { useAdvert } from '../../shared/hooks/useAdvert';
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
    <Box display="flex" flexDirection="column" padding="0 8px">
      <Typography
        display="flex"
        alignItems="center"
        onClick={() => navigate(-1)}
        fontWeight={700}
        my={2}
        sx={{
          color: COLORS.BLUE,
        }}
      >
        <KeyboardBackspaceIcon sx={{ color: COLORS.BLUE, mr: 1 }} />
        Вернуться назад
      </Typography>
      <Box
        sx={{
          width: '100%',
          borderRadius: '15px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ImageGallery images={advert.images} />
        <Box sx={{ pt: '16px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <AdvertMainInfo price={advert.price} phone={advert.phone} title={advert.title} />
          <LocationAndDate city={advert.city} createdAt={advert.createdAt} />
          <Divider />
          <DescriptionAndProperties
            description={advert.description}
            properties={advert.properties}
          />
        </Box>
      </Box>
    </Box>
  );
};
