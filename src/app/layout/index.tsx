import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';
import { Header } from '../../components';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <CssBaseline />
    <Header />
    <Box component="main" sx={{ p: 3 }}>
      <Container maxWidth="sm">{children}</Container>
    </Box>
  </>
);

export default Layout;
