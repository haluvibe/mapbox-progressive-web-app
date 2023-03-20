import {Alert as MuiAlert, AlertProps as MuiAlertProps} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../types';

export type BaseAlertProps = Omit<
  MuiAlertProps,
  'elevation' | RestrictedVisualProps
>;

export const BaseAlert = ({
  variant = 'standard',
  ...alertProps
}: BaseAlertProps) => {
  return <MuiAlert elevation={0} variant={variant} {...alertProps} />;
};

BaseAlert.displayName = 'BaseAlert';
