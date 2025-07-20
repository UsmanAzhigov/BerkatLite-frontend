import { Box, Typography } from '@mui/material';
import type { InfoBlockProps } from '../../../shared/types/advertisement.type';

/**
 * Свойства для компонента InfoBlock.
 * @property {string} title - Заголовок объявления
 * @property {number} [price] - Цена объявления
 * @property {string} description - Описание объявления
 */
export const InfoBlock = ({ title, price, description }: InfoBlockProps) => (
  <>
    <Box display="flex" flexDirection="column" mb={1}>
      <Typography fontSize={20} fontWeight={700} noWrap>
        {title}
      </Typography>
      {price ? (
        <Typography fontSize={16} fontWeight={600} color="primary">
          {price} ₽
        </Typography>
      ) : (
        <Typography fontSize={16} fontWeight={600} color="primary">
          Не указана цена
        </Typography>
      )}
    </Box>
    <Typography fontSize={12} color="text.secondary" mb={5}>
      {description}
    </Typography>
  </>
);
