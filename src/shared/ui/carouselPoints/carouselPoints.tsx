import { Box } from '@mui/material';
import type { FC } from 'react';
import type { CarouselOptions } from './carouseOptions';

export const CarouselPoints: FC<CarouselOptions> = ({ images, current }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '6px',
        mt: 1.2,
      }}
    >
      {images.map((_, idx) => (
        <Box
          key={idx}
          sx={{
            width: current === idx ? 19 : 6,
            height: 6,
            borderRadius: '999px',
            bgcolor: '#000',
            opacity: current === idx ? 1 : 0.3,
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </Box>
  );
};
