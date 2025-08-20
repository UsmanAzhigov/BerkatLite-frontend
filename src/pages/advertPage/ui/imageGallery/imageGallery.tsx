import { Box, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { COLORS } from '../../../../shared/constants';
import { CarouselPoints } from '../../../../shared/ui/carouselPoints/carouselPoints';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <Box
        sx={{
          width: '100%',
          height: 200,
          bgcolor: COLORS.GREY_BG,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Нет фото
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
        style={{ borderRadius: 8 }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={img + idx}>
            <Box
              component="img"
              src={img}
              sx={{
                width: '100%',
                height: isMobile ? 240 : 320,
                objectFit: 'contain',
                backgroundColor: COLORS.GREY_BG,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && <CarouselPoints images={images} current={current} />}
    </Box>
  );
};
