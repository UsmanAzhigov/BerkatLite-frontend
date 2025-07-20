import { Box } from '@mui/material';
import { COLORS } from '../../../../shared/constants';

interface ThumbnailProps {
  src: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt, isActive, onClick, isMobile }) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    onClick={onClick}
    sx={{
      width: isMobile ? 44 : 64,
      height: isMobile ? 44 : 64,
      objectFit: 'cover',
      borderRadius: 1,
      border: isActive ? `2px solid ${COLORS.BLUE}` : '2px solid transparent',
      boxShadow: isActive ? '0 0 0 2px #fff' : 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s, border 0.2s',
      transform: isActive ? 'scale(1.02)' : 'scale(1)',
      opacity: isActive ? 1 : 0.7,
      mx: 0.1,
    }}
  />
);
