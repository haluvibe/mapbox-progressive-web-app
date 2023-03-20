import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../types';

export type DividerProps = Omit<MuiDividerProps, RestrictedVisualProps>;

export const Divider = (props: DividerProps) => {
  return <MuiDivider {...props} />;
};

Divider.displayName = 'Divider';
