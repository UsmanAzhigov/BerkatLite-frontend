import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React from 'react';

import { SizeSearch, VarianSearch } from './type';

export const InputSearch: React.FC<React.ComponentProps<typeof TextField>> = (props) => {
  return (
    <TextField
      type={props.type}
      variant={props.variant || VarianSearch['OUTLINED']}
      size={props.size || SizeSearch['SMALL']}
      placeholder={props.placeholder || 'Поиск...'}
      fullWidth={props.fullWidth ?? true}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              sx={{
                color: '#D5D5D5',
              }}
            />
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          border: '0px solid #D5D5D5 ',
        },
        '& .MuiOutlinedInput-placeholder': {
          color: '#D5D5D5',
        },
        ...props.sx,
      }}
      {...props}
    />
  );
};
