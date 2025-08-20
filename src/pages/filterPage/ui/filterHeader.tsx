import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button, Stack, Typography } from '@mui/material';
import type { FC } from 'react';
import { COLORS } from '../../../shared/constants';

interface FilterHeaderProps {
  onClick: () => void;
  onReset: () => void;
}

export const FilterHeader: FC<FilterHeaderProps> = ({ onClick, onReset }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Button
        onClick={onClick}
        size="small"
        variant="contained"
        sx={{
          backgroundColor: '#37AFFF',
          borderRadius: 2,
          color: COLORS.WHITE,
        }}
        startIcon={<KeyboardBackspaceIcon />}
      >
        Назад
      </Button>
      <Typography variant="h6" fontWeight={600}>
        Фильтры
      </Typography>
      <Button
        size="small"
        variant="contained"
        sx={{
          backgroundColor: '#37AFFF',
          borderRadius: 2,
          color: COLORS.WHITE,
        }}
        onClick={onReset}
      >
        Сбросить
      </Button>
    </Stack>
  );
};
