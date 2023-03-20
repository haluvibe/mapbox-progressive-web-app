import React, {ReactNode} from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
} from '@mui/material';
import {FormControl} from '../FormControl';
import {RestrictedVisualProps} from '../../../types';
import {useGridItemStyles, UseGridItemStyles} from '../../../';

export type CheckboxInputProps = Omit<
  MuiCheckboxProps,
  'variant' | 'color' | RestrictedVisualProps
> &
  UseGridItemStyles & {
    label?: ReactNode;
    error?: boolean;
    textAlign?: React.CSSProperties['textAlign'];
  };

export const CheckboxInput = ({
  label = '',
  textAlign = 'inherit',
  span,
  error,
  ...props
}: CheckboxInputProps) => {
  const sx = useGridItemStyles(span);
  return (
    <FormControl error={error} sx={sx}>
      <FormControlLabel
        control={<MuiCheckbox {...props} color="primary" />}
        label={label}
        sx={{textAlign, color: 'text.primary'}}
      />
    </FormControl>
  );
};

CheckboxInput.displayName = 'CheckboxInput';
