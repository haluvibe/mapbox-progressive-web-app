import {
  DialogContentText as MuiDialogContentText,
  DialogContentTextProps as MuiDialogContentTextProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export type DialogContentTextProps = Omit<
  MuiDialogContentTextProps,
  RestrictedVisualProps
>;

export const DialogContentText = (props: DialogContentTextProps) => {
  return <MuiDialogContentText {...props} />;
};

DialogContentText.displayName = 'DialogContentText';
