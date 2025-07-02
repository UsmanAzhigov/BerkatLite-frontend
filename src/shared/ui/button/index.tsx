import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
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
    <MuiButton fullWidth={fullWidth ?? true} sx={mergedSx} {...rest}>
      {children}
    </MuiButton>
  );
};
