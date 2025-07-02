import { Box, Paper, Typography } from '@mui/material';

export interface AdCardProps {
  image?: string[];
  title: string;
  price?: string | number;
  description: string;
  city: string;
  date: string;
  onClick?: () => void;
}

export const AdCard = ({
  image,
  title,
  price,
  description,
  city,
  date,
  onClick,
}: AdCardProps) => (
  <Paper
    sx={{
      width: '100%',
      p: 2,
      borderRadius: 2,
      boxShadow: 2,
      position: 'relative',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
    }}
    onClick={onClick}
  >
    {image && (
      <Box
        component="img"
        src={image && image[0]}
        alt={title}
        sx={{
          width: '100%',
          height: 180,
          objectFit: 'cover',
          borderRadius: 2,
          mb: 1.5,
        }}
      />
    )}
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={0.5}
    >
      <Typography variant="h6" fontWeight={600} noWrap>
        {title}
      </Typography>
      {price && (
        <Typography variant="h6" color="primary" fontWeight={700} ml={2}>
          {price} ₽
        </Typography>
      )}
    </Box>
    <Typography variant="body2" color="text.secondary" mb={2}>
      {description}
    </Typography>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      left={0}
      right={0}
      bottom={8}
      px={2}
    >
      <Typography variant="caption" color="text.secondary">
        {city}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {date}
      </Typography>
    </Box>
  </Paper>
);
