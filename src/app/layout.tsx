import { Box, CssBaseline } from '@mui/material';
import React from 'react';

import { useLocation } from 'react-router-dom';
import { Header } from '../components';

/**
 *
 * @param params chidlren - Это компонент, который будет отображаться внутри Layout
 *
 * @returns {JSX.Element}  Возвращает компонент Layout, который содержит Header и основной контент
 */

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <>
      <CssBaseline />
      {location.pathname !== '/filters' && <Header />}
      <Box component="main">{children}</Box>
    </>
  );
};
