import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { ContactButtons } from './contactButtons';

/**
 * Свойства для компонента AdvertMainInfo.
 * @property {number} [price] - Цена объявления
 * @property {string} phone - Список телефонов для связи
 */
interface AdvertMainInfoProps {
  title: string;
  price?: number;
  phone: string;
}

/**
 * Компонент AdvertMainInfo отображает цену и кнопки для связи.
 * @param {AdvertMainInfoProps} props - Свойства компонента
 * @returns {JSX.Element} Элемент с основной информацией объявления и кнопками связи
 */
export const AdvertMainInfo: React.FC<AdvertMainInfoProps> = ({ title, price, phone }) => {
  const priceLabel = typeof price === 'number' && price > 1000 ? `${price} ₽` : 'Цена не указана';

  return (
    <Box>
      <Stack display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5" fontWeight={700}>
          {priceLabel}
        </Typography>
        <Typography fontSize={16} fontWeight={400}>
          {title}
        </Typography>
      </Stack>
      <Box gap={1} mt={1}>
        <ContactButtons phone={phone} />
      </Box>
    </Box>
  );
};
