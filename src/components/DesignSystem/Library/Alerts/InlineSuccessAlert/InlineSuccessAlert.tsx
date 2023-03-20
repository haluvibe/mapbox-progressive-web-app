import React from 'react';
import {BaseAlert, BaseAlertProps} from '../BaseAlert';

export type InlineSuccessAlertProps = Omit<
  BaseAlertProps,
  'variant' | 'severity'
>;

export const InlineSuccessAlert = (props: InlineSuccessAlertProps) => {
  return <BaseAlert variant={'outlined'} severity="success" {...props} />;
};

InlineSuccessAlert.displayName = 'InlineSuccessAlert';
