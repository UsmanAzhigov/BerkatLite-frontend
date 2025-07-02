import { Box, Paper, Stack, Typography } from '@mui/material';

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
      borderRadius: '15px',
      position: 'relative',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      boxShadow: '0px 1px 4px 4px rgba(0,0,0,0.1)',
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
          height: 200,
          objectFit: 'cover',
        }}
      />
    )}
    <Stack
      sx={{
        p: '0px  17px 17px 17px',
      }}
    >
      <Box display="flex" flexDirection="column" mb={1}>
        <Typography fontSize={20} fontWeight={700} noWrap>
          {title}
        </Typography>
        {price && (
          <Typography fontSize={16} fontWeight={600}>
            {price} ₽
          </Typography>
        )}
      </Box>
      <Typography fontSize={12} color="text.secondary" mb={5}>
        {description}
      </Typography>
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
    </Stack>
  </Paper>
);
