import { Box, useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { COLORS } from '../../../../shared/constants';
import { Placeholder } from './Placeholder';
import { sliderSettings } from './sliderSettings';
import { Thumbnail } from './Thumbnail';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  if (images && images.length > 0) {
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
          <Slider {...sliderSettings} afterChange={setCurrent} ref={sliderRef}>
            {images.map((img, idx) => (
              <Box
                key={img + idx}
                component="img"
                src={img}
                alt=""
                sx={{
                  width: '100%',
                  height: isMobile ? 180 : 320,
                  objectFit: 'contain',

                  transition: 'opacity 0.4s',
                  background: COLORS.GREY_BG,
                  display: 'block',
                }}
              />
            ))}
          </Slider>
          {images.length > 1 && (
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                right: 16,
                bgcolor: 'rgba(0,0,0,0.55)',
                color: '#fff',
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontSize: 14,
                zIndex: 2,
                userSelect: 'none',
              }}
            >
              {current + 1} / {images.length}
            </Box>
          )}
        </Box>
        {images.length > 1 && (
          <Box
            sx={{
              display: 'flex',
              gap: 0.25,
              pb: 0.2,
              pt: 0.2,
              overflowX: 'auto',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {images.map((img, idx) => (
              <Thumbnail
                key={img + 'thumb' + idx}
                src={img}
                alt=""
                isActive={current === idx}
                onClick={() => {
                  setCurrent(idx);
                  sliderRef.current?.slickGoTo(idx);
                }}
                isMobile={isMobile}
              />
            ))}
          </Box>
        )}
      </Box>
    );
  }

  return <Placeholder />;
};
