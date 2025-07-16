import { Box, Typography } from '@mui/material';

interface FooterBlockProps {
  city: string;
  date: string;
}

export const FooterBlock = ({ city, date }: FooterBlockProps) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    position="absolute"
    left={17}
    right={17}
    bottom={10}
  >
    <Typography fontSize={12} color="text.secondary">
      {city}
    </Typography>
    <Typography fontSize={12} color="text.secondary">
      {date}
    </Typography>
  </Box>
);
