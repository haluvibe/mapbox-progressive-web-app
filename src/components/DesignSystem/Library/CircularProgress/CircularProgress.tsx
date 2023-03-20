import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../types';

export interface CircularProgressProps
  extends Omit<MuiCircularProgressProps, RestrictedVisualProps> {
  isAction?: boolean;
}

export const CircularProgress = ({
  isAction,
  ...props
}: CircularProgressProps) => {
  return (
    <MuiCircularProgress
      color={isAction ? undefined : 'inherit'}
      sx={{color: isAction ? 'action.active' : 'inherit'}}
      size={20}
      {...props}
    />
  );
};

CircularProgress.displayName = 'CircularProgress';
