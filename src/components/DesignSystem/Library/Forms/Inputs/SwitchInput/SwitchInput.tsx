import {
  FormControlLabel,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@mui/material';
import React from 'react';
import {FormControl} from '../FormControl';
import {FormHelperText} from '../FormHelperText';
import {RestrictedVisualProps} from "../../../types";

export interface SwitchInputProps
  extends Omit<MuiSwitchProps, RestrictedVisualProps | 'inputProps'> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: boolean;
}

export const SwitchInput = ({
  label,
  helperText,
  error,
  ...switchProps
}: SwitchInputProps) => {
  return (
    <FormControl error={error}>
      <FormControlLabel
        control={
          <MuiSwitch
            inputProps={{'aria-label': 'controlled'}}
            {...switchProps}
          />
        }
        label={label}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

SwitchInput.displayName = 'SwitchInput';
