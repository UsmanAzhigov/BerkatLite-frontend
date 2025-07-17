import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { COLORS } from '../constants';

/**
 * Свойства для компонента Button
 * @property {ReactNode} [children] - Дочерние элементы кнопки
 */
export interface ButtonProps extends MuiButtonProps {
  children?: ReactNode;
}

/**
 * Кастомная кнопка с анимацией нажатия
 * @param {ButtonProps} props - Свойства компонента
 * @returns {JSX.Element} Кнопка
 */
export const Button = (props: ButtonProps) => {
  const { children, sx, fullWidth, ...rest } = props;
  const defaultSx = {
    borderRadius: '10px',
    backgroundColor: COLORS.BLUE,
    color: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: '500',
  };
  const mergedSx = Array.isArray(sx) ? [defaultSx, ...sx] : sx ? [defaultSx, sx] : defaultSx;
  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ display: 'inline-block', width: fullWidth ? '100%' : undefined }}
    >
      <MuiButton fullWidth={fullWidth ?? true} sx={mergedSx} {...rest}>
        {children}
      </MuiButton>
    </motion.div>
  );
};
