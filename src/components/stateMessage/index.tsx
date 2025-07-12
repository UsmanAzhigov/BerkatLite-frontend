import { Stack } from '@mui/material';
import React from 'react';

interface StateMessageProps {
  message?: string;
}

export const StateMessage: React.FC<StateMessageProps> = ({ message }) => (
  <Stack justifyContent="center" alignItems="center" flex={1} height="100%">
    <h2>{message || 'Ошибка'}</h2>
  </Stack>
);
