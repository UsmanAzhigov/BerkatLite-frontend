import { Box, Paper, Skeleton, Stack } from '@mui/material';
import React from 'react';
import { COLORS } from '../shared/constants';

/**
 * Компонент LoadingSkeleton отображает скелетон для списка объявлений во время загрузки
 * @returns {JSX.Element} Скелетон карточек объявлений
 */
export const LoadingSkeleton: React.FC = () => (
  <Stack gap={2}>
    {[...Array(2)].map((_, i) => (
      <Paper
        key={i}
        sx={{
          width: '100%',
          borderRadius: '15px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: `0px 1px 4px 4px ${COLORS.SHADOW_LIGHT}`,
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
