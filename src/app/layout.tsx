import { Box, CssBaseline } from '@mui/material';
import React from 'react';

import { Header } from '../components';

/**
 *
 * @param params chidlren - Это компонент, который будет отображаться внутри Layout
 *
 * @returns {JSX.Element}  Возвращает компонент Layout, который содержит Header и основной контент
 */

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          p: '13px 10px',
        }}
      >
        {children}
      </Box>
    </>
  );
};
