import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export type SelectProps<T> = Omit<
  MuiSelectProps<T>,
  RestrictedVisualProps | 'variant'
>;

export const Select = function <T = string>(props: SelectProps<T>) {
  return <MuiSelect<T> variant="outlined" fullWidth {...props} />;
};

Select.displayName = 'Select';
