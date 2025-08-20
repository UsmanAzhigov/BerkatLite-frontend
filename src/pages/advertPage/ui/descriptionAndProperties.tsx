import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../shared/constants';
import type { Property } from '../../../shared/types/advertisement.type';

/**
 * Свойства для компонента DescriptionAndProperties
 * @property {string} description - Описание объявления
 * @property {Property[]} properties - Список свойств объявления
 */
interface DescriptionAndPropertiesProps {
  description: string;
  properties: Property[];
}

/**
 * Компонент DescriptionAndProperties отображает описание и свойства объявления
 * @param {DescriptionAndPropertiesProps} props - Свойства компонента
 * @returns {JSX.Element} Описание и свойства объявления
 */
export const DescriptionAndProperties: React.FC<DescriptionAndPropertiesProps> = ({
  description,
  properties,
}) => (
  <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
    <Box flex={1}>
      <Typography variant="h5" mb={2.5} fontWeight={700}>
        Характеристики
      </Typography>
      {properties.map((prop, idx) => (
        <Stack key={idx} flexDirection="row" gap={1}>
          <Typography fontSize={15} mb={0.5} color="text.secondary">
            {prop.name}:
          </Typography>
          <Typography fontSize={15} color={COLORS.BLACK} fontWeight="700">
            {prop.text}
          </Typography>
        </Stack>
      ))}
    </Box>
    <Box flex={1}>
      <Typography variant="h5" mb={2.5} fontWeight={700}>
        Описание
      </Typography>
      <Typography fontSize={15} color="text.primary">
        {description}
      </Typography>
    </Box>
  </Box>
);
