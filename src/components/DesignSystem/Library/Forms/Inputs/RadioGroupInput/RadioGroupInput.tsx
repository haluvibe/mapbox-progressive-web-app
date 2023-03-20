import React from 'react';
import {RestrictedVisualProps} from '../../../types';
import {FormControl} from '../FormControl';
import {FormLabel} from '@mui/material';
import {RadioGroup, RadioGroupProps} from './RadioGroup';
import {RadioOption} from './RadioOption';
import {FormHelperText} from '../FormHelperText';

export interface RadioGroupInputProps
  extends Omit<RadioGroupProps, RestrictedVisualProps> {
  label?: React.ReactNode;
  options?: readonly string[];
  disabled?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
}

export const RadioGroupInput = ({
  id,
  label,
  options = [],
  helperText = '',
  disabled = false,
  error = false,
  ...radioGroupProps
}: RadioGroupInputProps) => {
  return (
    <FormControl
      sx={{display: 'flex', gap: 0, flexDirection: 'column'}}
      error={error}
    >
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={id}
        name={`radio-buttons-group-${id}`}
        {...radioGroupProps}
      >
        {options.map((option, index) => (
          <RadioOption
            disabled={disabled}
            key={index}
            value={option}
            label={option}
          />
        ))}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

RadioGroupInput.displayName = 'RadioGroupInput';
