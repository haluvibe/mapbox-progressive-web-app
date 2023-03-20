import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export type InputLabelProps = Omit<MuiInputLabelProps, RestrictedVisualProps>;

export const InputLabel = (props: InputLabelProps) => {
  return <MuiInputLabel {...props} />;
};

InputLabel.displayName = 'InputLabel';
