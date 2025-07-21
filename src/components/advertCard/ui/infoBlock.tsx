import { Link, Typography } from '@mui/material';
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
  onShowMore,
}: Omit<InfoBlockProps, 'title'> & { onShowMore?: () => void }) => {
  const MAX_LENGTH = 30;
  const isLong = description.length > MAX_LENGTH;
  const shortDescription = isLong ? description.slice(0, MAX_LENGTH) + '...' : description;
  const priceLabel = typeof price === 'number' && price > 1000 ? `${price} ₽` : 'Цена не указана';

  return (
    <>
      <Typography fontSize={16} mt={1} mb={1} fontWeight={700} color={COLORS.BLACK}>
        {priceLabel}
      </Typography>

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
