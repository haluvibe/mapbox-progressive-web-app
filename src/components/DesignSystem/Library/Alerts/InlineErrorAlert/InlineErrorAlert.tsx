import React from 'react';
import {BaseAlert, BaseAlertProps} from '../BaseAlert';

export type InlineErrorAlertProps = Omit<
  BaseAlertProps,
  'variant' | 'severity'
>;

export const InlineErrorAlert = (props: InlineErrorAlertProps) => {
  return <BaseAlert variant={'outlined'} severity="error" {...props} />;
};

InlineErrorAlert.displayName = 'InlineErrorAlert';
