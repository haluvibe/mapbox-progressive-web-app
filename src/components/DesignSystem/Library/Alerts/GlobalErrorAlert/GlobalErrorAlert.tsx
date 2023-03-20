import React from 'react';
import {BaseAlert, BaseAlertProps} from '../BaseAlert';

export type GlobalErrorAlertProps = Omit<
  BaseAlertProps,
  'variant' | 'severity'
>;

export const GlobalErrorAlert = (props: GlobalErrorAlertProps) => {
  return <BaseAlert severity="error" {...props} />;
};

GlobalErrorAlert.displayName = 'GlobalErrorAlert';
