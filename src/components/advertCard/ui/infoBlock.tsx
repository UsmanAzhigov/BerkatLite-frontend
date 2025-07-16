import { Box, Typography } from '@mui/material';

interface InfoBlockProps {
  title: string;
  price?: number;
  description: string;
}

export const InfoBlock = ({ title, price, description }: InfoBlockProps) => (
  <>
    <Box display="flex" flexDirection="column" mb={1}>
      <Typography fontSize={20} fontWeight={700} noWrap>
        {title}
      </Typography>
      {price && (
        <Typography fontSize={16} fontWeight={600} color="primary">
          {price} ₽
        </Typography>
      )}
    </Box>
    <Typography fontSize={12} color="text.secondary" mb={5}>
      {description}
    </Typography>
  </>
);
