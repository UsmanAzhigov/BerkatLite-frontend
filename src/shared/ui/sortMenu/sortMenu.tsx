import { Menu, MenuItem } from '@mui/material';
import type { FC } from 'react';

import { sortOptions } from '../../constants.tsx';
import { SortOrder } from '../../types/defaultFields.type.ts';
import type { SortMenuProps } from './sortMenu.type.ts';

/**
 * Свойства для компонента SortMenu
 * @property {HTMLElement | null} anchorEl - Элемент, к которому привязан выпадающий список
 * @property {boolean} open - Флаг открытия меню
 * @property {() => void} onClose - Обработчик закрытия меню
 * @property {string} sortBy - Текущее поле сортировки
 * @property {SortOrder} sortOrder - Текущий порядок сортировки
 * @property {(sortBy: string, sortOrder: SortOrder) => void} onChange - Обработчик изменения сортировки
 */
export const SortMenu: FC<SortMenuProps> = ({
  anchorEl,
  open,
  onClose,
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
    {sortOptions.map((option) => (
      <MenuItem
        key={option.value}
        onClick={() =>
          onChange(
            option.value,
            sortBy === option.value
              ? sortOrder === SortOrder['ASC']
                ? SortOrder['DESC']
                : SortOrder['ASC']
              : SortOrder['ASC'],
          )
        }
      >
        {option.label}
        {sortBy === option.value ? (sortOrder === SortOrder['ASC'] ? '↑' : '↓') : ''}
      </MenuItem>
    ))}
  </Menu>
);
