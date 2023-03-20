import {FormControlLabel, FormControlLabelProps, Radio} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from "../../../../types";

export type RadioOptionProps = Omit<
  FormControlLabelProps,
  RestrictedVisualProps | 'control' | 'size'
>;

export const RadioOption = (props: RadioOptionProps) => {
  return <FormControlLabel control={<Radio />} {...props} />;
};

RadioOption.displayName = 'RadioOption';
