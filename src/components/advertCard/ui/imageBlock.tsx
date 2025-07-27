import { Box } from '@mui/material';
import { Placeholder } from '../../../pages/advertPage/ui/imageGallery/placeholder';
import { COLORS } from '../../../shared/constants';
import type { ImageBlockProps } from '../../../shared/types/advertisement.type';

/**
 * Свойства для компонента ImageBlock.
 * @property {string[]} [image] - Массив URL изображений объявления
 * @property {string} title - Заголовок объявления (alt для изображения)
 */
export const ImageBlock = ({ image }: Omit<ImageBlockProps, 'title'>) =>
  image && image.length > 0 ? (
    <Box
      component="img"
      src={image[0]}
      alt={''}
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
    <Placeholder />
  );
