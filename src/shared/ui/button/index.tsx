import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface ButtonProps extends MuiButtonProps {
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, sx, fullWidth, ...rest } = props;
  const defaultSx = {
    borderRadius: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
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
