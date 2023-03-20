import React, {ReactNode} from 'react';
import {
  InputLabel,
  FormControlProps,
  CircularProgress,
  FormHelperText,
} from '@mui/material';
import {RestrictedVisualProps} from '../../../types';
import {
  FormControl,
  Select,
  SelectProps,
  UseGridItemStyles,
  useGridItemStyles,
} from '../../../';

export type BaseSelectInputProps<T> = Omit<
  SelectProps<T>,
  RestrictedVisualProps
> &
  Pick<FormControlProps, 'error'> &
  UseGridItemStyles & {
    helperText?: ReactNode;
    loading?: boolean;
  };

export const BaseSelectInput = function <T = string>({
  helperText,
  error,
  children,
  disabled,
  span,
  loading,
  endAdornment,
  ...props
}: BaseSelectInputProps<T>) {
  const sx = useGridItemStyles(span);
  return (
    <FormControl sx={sx} fullWidth error={error} disabled={disabled}>
      {props?.label && <InputLabel>{props.label}</InputLabel>}
      <Select<T>
        {...props}
        endAdornment={
          loading ? (
            <CircularProgress color="inherit" size={20} />
          ) : (
            endAdornment
          )
        }
      >
        {children}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

BaseSelectInput.displayName = 'BaseSelectInput';
