import { Stack } from '@mui/material';
import React from 'react';

interface InfoMessageProps {
  message?: string;
}

export const InfoMessage: React.FC<InfoMessageProps> = ({ message }) => (
  <Stack justifyContent="center" alignItems="center" flex={1} height="100%">
    <h2>{message || ''}</h2>
  </Stack>
);
