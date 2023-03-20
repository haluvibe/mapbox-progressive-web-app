import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {BaseSelectInput, BaseSelectInputProps} from '../BaseSelectInput';

export type SelectInputProps<T = string> = BaseSelectInputProps<T> & {
  options?: readonly string[];
};

export const SelectInput = function <T = string>({
  options,
  ...props
}: SelectInputProps<T>) {
  return (
    <BaseSelectInput {...props}>
      {options?.map((option, index) => (
        <MenuItem key={index} value={option} id={option}>
          {option}
        </MenuItem>
      ))}
    </BaseSelectInput>
  );
};

SelectInput.displayName = 'SelectInput';
