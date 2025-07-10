import { Skeleton, Stack } from '@mui/material';
import React from 'react';

export const LoadingSkeleton: React.FC = () => (
  <Stack gap={2}>
    {[...Array(4)].map((_, i) => (
      <Stack key={i} direction="row" gap={2} alignItems="center">
        <Skeleton variant="rectangular" width={80} height={80} />
        <Stack gap={1} flex={1}>
          <Skeleton variant="text" width="60%" height={28} />
          <Skeleton variant="text" width="40%" height={20} />
          <Skeleton variant="text" width="30%" height={20} />
        </Stack>
      </Stack>
    ))}
  </Stack>
);
