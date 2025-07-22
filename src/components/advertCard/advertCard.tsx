import { Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FooterBlock, ImageBlock, InfoBlock } from './ui';

/**
 * Свойства для компонента карточки объявления.
 * @property {string[]} [image] - Массив URL изображений объявления
 * @property {number} [price] - Цена объявления
 * @property {string} description - Описание объявления
 * @property {string} city - Город размещения объявления
 * @property {string} date - Дата публикации объявления
 * @property {() => void} [onClick] - Обработчик клика по карточке
 */
export interface AdCardProps {
  image?: string[];
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
export const AdvertCard = ({ image, price, description, city, date, onClick }: AdCardProps) => (
  <Paper
    component={motion.div}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      borderRadius: '15px',
      position: 'relative',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
    }}
    onClick={onClick}
  >
    <ImageBlock image={image} />
    <Stack sx={{ p: '0px  17px 17px 17px' }}>
      <InfoBlock price={price} description={description} />
      <FooterBlock city={city} date={date} />
    </Stack>
  </Paper>
);
