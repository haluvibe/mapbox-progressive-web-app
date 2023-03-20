import React from 'react';
import {BaseAlert, BaseAlertProps} from '../BaseAlert';

export type GlobalSuccessAlertProps = Omit<
  BaseAlertProps,
  'variant' | 'severity'
>;

export const GlobalSuccessAlert = (props: GlobalSuccessAlertProps) => {
  return <BaseAlert severity="success" {...props} />;
};

GlobalSuccessAlert.displayName = 'GlobalSuccessAlert';
