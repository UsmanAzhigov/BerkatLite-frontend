import { Stack, Typography } from '@mui/material';
import type { FC } from 'react';
import type { SelectOption } from '../../../shared/types';

interface AllCategoriesProps {
  categories: SelectOption[];
  selectedCategory: string;
  onSelect: (value: string) => void;
}

export const AllCategories: FC<AllCategoriesProps> = ({
  categories,
  selectedCategory,
  onSelect,
}) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {categories.map((cat) => (
        <Stack
          key={cat.value}
          display="flex"
          alignItems="center"
          onClick={() => onSelect(cat.value === selectedCategory ? '' : cat.value)}
          sx={{
            cursor: 'pointer',
            backgroundColor: selectedCategory === cat.value ? '#37AFFF' : '#E5E5E5',
            borderRadius: 1,
            p: 1,
            transition: 'background-color 0.2s ease',
          }}
        >
          <Typography
            fontSize={16}
            color={selectedCategory === cat.value ? '#fff' : 'text.primary'}
          >
            {cat.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
