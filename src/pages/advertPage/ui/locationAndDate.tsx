import { Box, Typography } from '@mui/material';
import React from 'react';
import { formatDate } from '../../../shared/lib/dateFormat';

/**
 * Свойства для компонента LocationAndDate
 * @property {string} city - Город объявления
 * @property {string} createdAt - Дата создания объявления
 */
interface LocationAndDateProps {
  city: string;
  createdAt: string;
}

/**
 * Компонент LocationAndDate отображает город и дату создания объявления
 * @param {LocationAndDateProps} props - Свойства компонента
 * @returns {JSX.Element} Город и дата объявления
 */
export const LocationAndDate: React.FC<LocationAndDateProps> = ({ city, createdAt }) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Typography fontSize={13} color="text.secondary" fontWeight={500}>
      {city}
    </Typography>
    <Typography fontSize={13} color="text.secondary" fontWeight={500}>
      {formatDate(createdAt)}
    </Typography>
  </Box>
);
