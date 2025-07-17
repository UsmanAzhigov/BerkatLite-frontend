import { ImageNotSupported } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

/**
 * Свойства для компонента ImageGallery
 * @property {string[]} [images] - Массив URL изображений объявления
 * @property {string} title - Заголовок объявления (alt для изображения)
 */
interface ImageGalleryProps {
  images?: string[];
  title: string;
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

/**
 * Компонент ImageGallery отображает галерею изображений объявления или заглушку, если изображений нет
 * @param {ImageGalleryProps} props - Свойства компонента
 * @returns {JSX.Element} Галерея изображений или заглушка
 */
export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  if (images && images.length > 1) {
    return (
      <Slider {...sliderSettings}>
        {images.map((img, idx) => (
          <Box
            key={img + idx}
            component="img"
            src={img}
            alt={title}
            sx={{ width: '100%', height: 200, objectFit: 'cover' }}
          />
        ))}
      </Slider>
    );
  }
  if (images && images.length === 1) {
    return (
      <Box
        component="img"
        src={images[0]}
        alt={title}
        sx={{ width: '100%', height: 200, objectFit: 'cover' }}
      />
    );
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{ width: '100%', height: 200, backgroundColor: '#e0e0e0', color: '#777' }}
    >
      <ImageNotSupported sx={{ fontSize: 48, mb: 1 }} />
      <Typography variant="body2">Нет фото</Typography>
    </Box>
  );
};
