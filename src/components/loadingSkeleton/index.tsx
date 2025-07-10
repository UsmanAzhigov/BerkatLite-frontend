import { Box, Paper, Skeleton, Stack } from '@mui/material';
import React from 'react';

export const LoadingSkeleton: React.FC = () => (
  <Stack gap={2}>
    {[...Array(4)].map((_, i) => (
      <Paper
        key={i}
        sx={{
          width: '100%',
          borderRadius: '15px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0px 1px 4px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={200} />
        <Stack sx={{ p: '0px 17px 17px 17px' }}>
          <Box display="flex" flexDirection="column" mb={1}>
            <Skeleton variant="text" width="60%" height={28} />
            <Skeleton variant="text" width="30%" height={20} />
          </Box>
          <Skeleton variant="text" width="80%" height={16} style={{ marginBottom: 40 }} />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            left={17}
            right={17}
            bottom={10}
          >
            <Skeleton variant="text" width={60} height={16} />
            <Skeleton variant="text" width={60} height={16} />
          </Box>
        </Stack>
      </Paper>
    ))}
  </Stack>
);
