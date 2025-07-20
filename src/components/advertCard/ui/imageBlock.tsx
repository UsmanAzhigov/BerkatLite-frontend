import { ImageNotSupported } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { COLORS } from '../../../shared/constants';
import type { ImageBlockProps } from '../../../shared/types/advertisement.type';

/**
 * Свойства для компонента ImageBlock.
 * @property {string[]} [image] - Массив URL изображений объявления
 * @property {string} title - Заголовок объявления (alt для изображения)
 */
export const ImageBlock = ({ image, title }: ImageBlockProps) =>
  image && image.length > 0 ? (
    <Box
      component="img"
      src={image[0]}
      alt={title}
      loading="lazy"
      sx={{
        width: '100%',
        height: 200,
        objectFit: 'cover',
        display: 'block',
        backgroundColor: COLORS.GREY_BG,
        borderRadius: 2,
        maxWidth: '100%',
        margin: '0 auto',
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
        backgroundColor: COLORS.GREY_BG,
        color: COLORS.GREY_TEXT,
      }}
    >
      <ImageNotSupported sx={{ fontSize: 48, mb: 1 }} />
      <Typography variant="body2">Нет фото</Typography>
    </Box>
  );
