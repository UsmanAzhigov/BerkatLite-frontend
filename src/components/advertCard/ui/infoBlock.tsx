import { Box, Button, Stack, Typography } from '@mui/material';
import { COLORS } from '../../../shared/constants';
import type { InfoBlockProps } from '../../../shared/types/advertisement.type';

/**
 * Свойства для компонента InfoBlock.
 * @property {string} title - Заголовок объявления
 * @property {number} [price] - Цена объявления
 * @property {string} description - Описание объявления
 */
export const InfoBlock = ({
  price,
  description,
}: Omit<InfoBlockProps, 'title'> & { onShowMore?: () => void }) => {
  const MAX_LENGTH = 60;
  const isLong = description.length > MAX_LENGTH;
  const shortDescription = isLong ? description.slice(0, MAX_LENGTH) + '...' : description;
  const priceLabel = typeof price === 'number' && price > 1000 ? `${price} ₽` : 'Цена не указана';

  return (
    <Box display="flex" justifyContent="space-between" mt={2} alignItems="flex-start">
      <Typography
        fontSize={13}
        fontWeight={400}
        color="#181717"
        sx={{
          width: '56%',
          WebkitLineClamp: 7,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
        }}
      >
        {shortDescription}
      </Typography>

      <Stack display="flex" gap={1} alignItems="flex-end">
        <Typography fontSize={18} fontWeight={700} color={COLORS.BLACK}>
          {priceLabel}
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{
            width: '140px',
            backgroundColor: '#37AFFF',
            borderRadius: 2,
            color: COLORS.WHITE,
          }}
        >
          Перейти
        </Button>
      </Stack>
    </Box>
  );
};
