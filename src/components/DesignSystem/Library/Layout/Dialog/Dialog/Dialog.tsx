import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from '@mui/material';
import React from 'react';
import {Breakpoint} from '@mui/system';
import {RestrictedVisualProps} from '../../../types';

export interface DialogProps
  extends Omit<MuiDialogProps, RestrictedVisualProps> {
  size?: Breakpoint;
}

export const Dialog = ({size, ...props}: DialogProps) => {
  return <MuiDialog maxWidth={size} {...props} />;
};

Dialog.displayName = 'Dialog';
