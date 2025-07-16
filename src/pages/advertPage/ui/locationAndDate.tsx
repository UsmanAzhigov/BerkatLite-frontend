import { Box, Typography } from '@mui/material';
import React from 'react';

interface LocationAndDateProps {
  city: string;
  createdAt: string;
  formattedDate: (date: string) => string;
}

export const LocationAndDate: React.FC<LocationAndDateProps> = ({
  city,
  createdAt,
  formattedDate,
}) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Typography fontSize={13} color="text.secondary" fontWeight={500}>
      {city}
    </Typography>
    <Typography fontSize={13} color="text.secondary" fontWeight={500}>
      {formattedDate(createdAt)}
    </Typography>
  </Box>
);
