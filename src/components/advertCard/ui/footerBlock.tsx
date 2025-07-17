import { Box, Typography } from '@mui/material';

/**
 * Свойства для компонента FooterBlock.
 * @property {string} city - Город объявления, который будет отображаться в футере.
 * @property {string} date - Дата объявления, которая будет отображаться в футере.
 */
interface FooterBlockProps {
  city: string;
  date: string;
}

/**
 * Компонент FooterBlock отображает город и дату объявления в футере карточки.
 * @param {FooterBlockProps} props - Свойства компонента.
 * @returns {JSX.Element} Элемент футера с городом и датой.
 */
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
