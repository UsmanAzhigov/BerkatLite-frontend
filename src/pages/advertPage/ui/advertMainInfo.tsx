import { Box, Typography } from '@mui/material';
import React from 'react';
import { ContactButtons } from './ContactButtons';

interface AdvertMainInfoProps {
  title: string;
  price?: number;
  phone: string[];
}

export const AdvertMainInfo: React.FC<AdvertMainInfoProps> = ({ title, price, phone }) => (
  <Box>
    <Typography fontSize={20} fontWeight={700}>
      {title}
    </Typography>
    {price && (
      <Typography fontSize={18} fontWeight={600} color="primary">
        {price.toLocaleString()} ₽
      </Typography>
    )}
    <Box display="flex" gap={1} mt={1}>
      <ContactButtons phone={phone} />
    </Box>
  </Box>
);
