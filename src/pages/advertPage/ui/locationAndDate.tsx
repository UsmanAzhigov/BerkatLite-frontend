import { Box, Typography } from '@mui/material';
import React from 'react';
import { formatDate } from '../../../shared/lib/dateFormat';

interface LocationAndDateProps {
  city: string;
  createdAt: string;
}

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
