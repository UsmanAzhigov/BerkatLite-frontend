import { Menu, MenuItem } from '@mui/material';
import type { FC } from 'react';

import type { SortMenuProps } from './type';

export const SortMenu: FC<SortMenuProps> = ({
  anchorEl,
  open,
  onClose,
  options,
  sortBy,
  sortOrder,
  onChange,
}) => (
  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
  >
    {options.map((option) => (
      <MenuItem
        key={option.value}
        onClick={() =>
          onChange(
            option.value,
            sortBy === option.value ? (sortOrder === 'ASC' ? 'DESC' : 'ASC') : 'ASC',
          )
        }
      >
        {option.label}
        {sortBy === option.value ? (sortOrder === 'ASC' ? '↑' : '↓') : ''}
      </MenuItem>
    ))}
  </Menu>
);
