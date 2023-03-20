import React from 'react';
import {BaseAlert, BaseAlertProps} from '../BaseAlert';

export type InlineWarningAlertProps = Omit<
  BaseAlertProps,
  'variant' | 'severity'
>;

export const InlineWarningAlert = (props: InlineWarningAlertProps) => {
  return <BaseAlert variant={'outlined'} severity="warning" {...props} />;
};

InlineWarningAlert.displayName = 'InlineWarningAlert';
