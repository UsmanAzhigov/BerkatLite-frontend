import { ImageNotSupported } from '@mui/icons-material';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export interface AdCardProps {
  image?: string[];
  title: string;
  price?: number;
  description: string;
  city: string;
  date: string;
  onClick?: () => void;
}

export const AdCard = ({ image, title, price, description, city, date, onClick }: AdCardProps) => (
  <Paper
    component={motion.div}
    whileHover={{ scale: 1.03, boxShadow: '0px 4px 16px 4px rgba(0,0,0,0.13)' }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
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
    {image && image.length > 0 ? (
      <Box
        component="img"
        src={image[0]}
        alt={title}
        sx={{
          width: '100%',
          height: 200,
        }}
      />
    ) : (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={{
          width: '100%',
          height: 200,
          backgroundColor: '#e0e0e0',
          color: '#777',
        }}
      >
        <ImageNotSupported sx={{ fontSize: 48, mb: 1 }} />
        <Typography variant="body2">Нет фото</Typography>
      </Box>
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
