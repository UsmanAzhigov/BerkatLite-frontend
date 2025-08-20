import { Box, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Placeholder } from '../../../pages/advertPage/ui/imageGallery/placeholder';
import type { ImageBlockProps } from '../../../shared/types/advertisement.type';
import { CarouselPoints } from '../../../shared/ui/carouselPoints/carouselPoints';

export const ImageBlock = ({ image }: Omit<ImageBlockProps, 'title'>) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [current, setCurrent] = useState(0);

  if (!image || image.length === 0) {
    return <Placeholder />;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
        style={{ borderRadius: 8 }}
      >
        {image.map((src, idx) => (
          <SwiperSlide key={src + idx}>
            <Box
              component="img"
              src={src}
              alt=""
              sx={{
                width: '100%',
                height: isMobile ? 200 : 300,
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {image.length > 1 && <CarouselPoints images={image} current={current} />}
    </Box>
  );
};
