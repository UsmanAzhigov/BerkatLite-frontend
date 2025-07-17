import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React from 'react';

import { COLORS } from '../../constants';
import { SizeSearch, VarianSearch } from './inputSearch.type';

/**
 * Компонент InputSearch отображает поле поиска с иконкой
 * @param {React.ComponentProps<typeof TextField>} props - Свойства компонента
 * @returns {JSX.Element} Поле поиска
 */
export const InputSearch: React.FC<React.ComponentProps<typeof TextField>> = (props) => {
  return (
    <TextField
      type={props.type}
      variant={props.variant || VarianSearch['OUTLINED']}
      size={props.size || SizeSearch['SMALL']}
      placeholder={props.placeholder || 'Поиск...'}
      fullWidth={props.fullWidth ?? true}
      value={props.value}
      onChange={props.onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              sx={{
                color: COLORS.SEARCH_ICON,
              }}
            />
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          border: `0px solid ${COLORS.SEARCH_ICON} `,
        },
        '& .MuiOutlinedInput-placeholder': {
          color: COLORS.SEARCH_ICON,
        },
        ...props.sx,
      }}
      {...props}
    />
  );
};
