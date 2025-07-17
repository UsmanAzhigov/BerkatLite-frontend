import { Stack } from '@mui/material';
import React from 'react';

/**
 * Свойства для компонента InfoMessage
 * @property {string} [message] - Сообщение для отображения
 */
interface InfoMessageProps {
  message?: string;
}

/**
 * Компонент InfoMessage отображает информационное сообщение по центру экрана
 * @param {InfoMessageProps} props - Свойства компонента
 * @returns {JSX.Element} Информационное сообщение
 */
export const InfoMessage: React.FC<InfoMessageProps> = ({ message }) => (
  <Stack justifyContent="center" alignItems="center" flex={1} height="100%">
    <h2>{message || ''}</h2>
  </Stack>
);
