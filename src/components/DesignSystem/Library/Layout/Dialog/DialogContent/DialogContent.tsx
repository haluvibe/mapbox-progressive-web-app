import {
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
} from '@mui/material';

import {StandardCSSProperties} from '@mui/system';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export interface DialogContentProps
  extends Omit<MuiDialogContentProps, RestrictedVisualProps> {
  width?: StandardCSSProperties['width'];
}

export const DialogContent = ({width, ...props}: DialogContentProps) => {
  return <MuiDialogContent sx={{width}} {...props} />;
};

DialogContent.displayName = 'DialogContent';
