import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
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
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={props.onFilterPage}>
              <FilterListIcon sx={{ color: COLORS.BLACK }} />
            </IconButton>
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          backgroundColor: COLORS.GREY_BG,
        },
        '& .MuiOutlinedInput-placeholder': {
          color: COLORS.SEARCH_ICON,
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        fontSize: 11,
        ...props.sx,
      }}
      {...props}
    />
  );
};
