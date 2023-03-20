import React from 'react';
import {BaseAlert, BaseAlertProps} from '../BaseAlert';

export type GlobalWarningAlertProps = Omit<
  BaseAlertProps,
  'variant' | 'severity'
>;

export const GlobalWarningAlert = (props: GlobalWarningAlertProps) => {
  return <BaseAlert severity="warning" {...props} />;
};

GlobalWarningAlert.displayName = 'GlobalWarningAlert';
