import { Button, FormControl, InputLabel, Menu, MenuItem, Select, TextField } from '@mui/material';
import type { FC } from 'react';

import type { FilterMenuProps } from './type';

export const FilterMenu: FC<FilterMenuProps> = ({
  anchorEl,
  open,
  onClose,
  filters,
  values,
  onChange,
  onReset,
}) => (
  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
  >
    {filters.map((filter) => (
      <MenuItem key={filter.key} disableRipple>
        {filter.type === 'select' ? (
          <FormControl fullWidth>
            <InputLabel>{filter.label}</InputLabel>
            <Select
              label={filter.label}
              value={values[filter.key] || ''}
              onChange={(e) => onChange(filter.key, e.target.value)}
            >
              {(filter.options || []).map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <TextField
            fullWidth
            label={filter.label}
            type="number"
            value={values[filter.key] || ''}
            onChange={(e) => onChange(filter.key, e.target.value)}
          />
        )}
      </MenuItem>
    ))}
    <MenuItem disableRipple>
      <Button fullWidth color="secondary" variant="outlined" onClick={onReset} sx={{ mt: 1 }}>
        Сбросить фильтры
      </Button>
    </MenuItem>
  </Menu>
);
