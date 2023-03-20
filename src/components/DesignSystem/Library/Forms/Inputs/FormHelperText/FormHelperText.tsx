import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material';
import {RestrictedVisualProps} from '../../../types';
import React from 'react';

export type FormHelperTextProps = Omit<
  MuiFormHelperTextProps,
  RestrictedVisualProps
>;

export const FormHelperText = (props: FormHelperTextProps) => {
  return <MuiFormHelperText {...props} sx={{ml: 0}} />;
};

FormHelperText.displayName = 'FormHelperText';
