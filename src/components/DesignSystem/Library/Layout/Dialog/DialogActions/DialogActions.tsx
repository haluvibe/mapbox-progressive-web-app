import {
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export type DialogActionsProps = Omit<
  MuiDialogActionsProps,
  RestrictedVisualProps
>;

export const DialogActions = (props: DialogActionsProps) => {
  return <MuiDialogActions {...props} />;
};

DialogActions.displayName = 'DialogActions';
