import React from 'react';
import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
} from '@mui/material';

export type FormControlProps = MuiFormControlProps;

export const FormControl = ({...props}: FormControlProps) => {
  return <MuiFormControl variant="outlined" fullWidth {...props} />;
};

FormControl.displayName = 'FormControl';
