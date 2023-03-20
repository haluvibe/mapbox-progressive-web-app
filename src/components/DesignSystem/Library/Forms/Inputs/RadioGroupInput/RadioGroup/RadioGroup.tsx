import React from 'react';
import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material';
import {RestrictedVisualProps} from '../../../../types';

export type RadioGroupProps = Omit<MuiRadioGroupProps, RestrictedVisualProps>;

export const RadioGroup = (props: RadioGroupProps) => {
  return <MuiRadioGroup sx={{display: 'flex', gap: 0}} {...props} />;
};

RadioGroup.displayName = 'RadioGroup';
