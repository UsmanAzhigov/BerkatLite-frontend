import { Box, CssBaseline } from '@mui/material';
import React from 'react';

import { Header } from '../components';

const Layout = ({ children }: { children: React.ReactNode }) => {
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

export default Layout;
