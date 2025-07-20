import { Box, Link, Typography } from '@mui/material';
import type { InfoBlockProps } from '../../../shared/types/advertisement.type';

/**
 * Свойства для компонента InfoBlock.
 * @property {string} title - Заголовок объявления
 * @property {number} [price] - Цена объявления
 * @property {string} description - Описание объявления
 */
export const InfoBlock = ({
  title,
  price,
  description,
  onShowMore,
}: InfoBlockProps & { onShowMore?: () => void }) => {
  const MAX_LENGTH = 30;
  const isLong = description.length > MAX_LENGTH;
  const shortDescription = isLong ? description.slice(0, MAX_LENGTH) + '...' : description;

  return (
    <>
      <Box display="flex" flexDirection="column" mb={1}>
        <Typography fontSize={16} fontWeight={700} noWrap>
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
        {shortDescription}
        {isLong && (
          <>
            {'\u00A0'}
            <Link
              component="button"
              onClick={onShowMore}
              sx={{ display: 'inline', verticalAlign: 'baseline', p: 0, fontSize: 12 }}
            >
              Подробнее
            </Link>
          </>
        )}
      </Typography>
    </>
  );
};
