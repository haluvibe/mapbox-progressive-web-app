import React from 'react';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import {FormControl} from '../FormControl';
import {RestrictedVisualProps} from '../../../types';
import {UseGridItemStyles, useGridItemStyles} from '../../../';

export type BaseInputProps = UseGridItemStyles &
  Omit<
    MuiTextFieldProps,
    | 'variant'
    | 'children'
    | 'margin'
    | 'color'
    | 'size'
    | 'fullWidth'
    | 'select'
    | 'SelectProps'
    | 'defaultValue'
    | RestrictedVisualProps
  >;

export const BaseInput = ({span, ...props}: BaseInputProps) => {
  const sx = useGridItemStyles(span);
  return (
    <>
      <FormControl sx={sx}>
        <MuiTextField {...props} fullWidth />
      </FormControl>
    </>
  );
};

BaseInput.displayName = 'BaseInput';
