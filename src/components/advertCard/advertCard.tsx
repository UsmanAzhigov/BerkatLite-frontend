import { Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../shared/constants';
import { FooterBlock, ImageBlock, InfoBlock } from './ui';

/**
 * Свойства для компонента карточки объявления.
 * @property {string[]} [image] - Массив URL изображений объявления
 * @property {string} title - Заголовок объявления
 * @property {number} [price] - Цена объявления
 * @property {string} description - Описание объявления
 * @property {string} city - Город размещения объявления
 * @property {string} date - Дата публикации объявления
 * @property {() => void} [onClick] - Обработчик клика по карточке
 */
export interface AdCardProps {
  image?: string[];
  title: string;
  price?: number;
  description: string;
  city: string;
  date: string;
  onClick?: () => void;
}

/**
 * Карточка объявления. Отображает изображение, заголовок, цену, описание, город и дату.
 * @param {AdCardProps} props - Свойства компонента
 * @returns {JSX.Element} Стилизованная карточка объявления
 */
export const AdvertCard = ({
  image,
  title,
  price,
  description,
  city,
  date,
  onClick,
}: AdCardProps) => (
  <Paper
    component={motion.div}
    whileHover={{ scale: 1.005, boxShadow: `0px 4px 16px 4px ${COLORS.SHADOW_CARD}` }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    sx={{
      width: '100%',
      borderRadius: '15px',
      position: 'relative',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      boxShadow: `0px 1px 4px 4px ${COLORS.SHADOW_LIGHT}`,
    }}
    onClick={onClick}
  >
    <ImageBlock image={image} title={title} />
    <Stack sx={{ p: '0px  17px 17px 17px' }}>
      <InfoBlock title={title} price={price} description={description} />
      <FooterBlock city={city} date={date} />
    </Stack>
  </Paper>
);
