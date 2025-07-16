import { Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FooterBlock, ImageBlock, InfoBlock } from './ui';

export interface AdCardProps {
  image?: string[];
  title: string;
  price?: number;
  description: string;
  city: string;
  date: string;
  onClick?: () => void;
}

export const AdvertCard = ({
  image,
  title,
  price,
  description,
  city,
  date,
  onClick,
}: AdCardProps) => (
  <Paper
    component={motion.div}
    whileHover={{ scale: 1.005, boxShadow: '0px 4px 16px 4px rgba(0,0,0,0.13)' }}
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
    <ImageBlock image={image} title={title} />
    <Stack sx={{ p: '0px  17px 17px 17px' }}>
      <InfoBlock title={title} price={price} description={description} />
      <FooterBlock city={city} date={date} />
    </Stack>
  </Paper>
);
