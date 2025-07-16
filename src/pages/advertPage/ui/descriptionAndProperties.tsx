import { Box, Typography } from '@mui/material';
import React from 'react';
import type { Property } from '../../../shared/types/advertisement.type';

interface DescriptionAndPropertiesProps {
  description: string;
  properties: Property[];
}

export const DescriptionAndProperties: React.FC<DescriptionAndPropertiesProps> = ({
  description,
  properties,
}) => (
  <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
    <Box flex={1}>
      <Typography fontSize={15} color="text.primary">
        {description}
      </Typography>
    </Box>
    <Box bgcolor="grey.300" width="1px" display={{ xs: 'none', md: 'block' }} />
    <Box flex={1}>
      {properties.map((prop, idx) => (
        <Typography key={idx} fontSize={15} color="text.secondary" mb={0.5}>
          <strong>{prop.name}:</strong> {prop.text}
        </Typography>
      ))}
    </Box>
  </Box>
);
