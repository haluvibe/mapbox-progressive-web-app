import React from 'react';
import {BaseAlert, BaseAlertProps} from '../BaseAlert';

export type GlobalInfoAlertProps = Omit<BaseAlertProps, 'variant' | 'severity'>;

export const GlobalInfoAlert = (props: GlobalInfoAlertProps) => {
  return <BaseAlert severity="info" {...props} />;
};

GlobalInfoAlert.displayName = 'GlobalInfoAlert';
