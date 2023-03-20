import React from 'react';
import {BaseAlert, BaseAlertProps} from '../BaseAlert';

export type InlineInfoAlertProps = Omit<BaseAlertProps, 'variant' | 'severity'>;

export const InlineInfoAlert = (props: InlineInfoAlertProps) => {
  return <BaseAlert variant={'outlined'} severity="info" {...props} />;
};

InlineInfoAlert.displayName = 'InlineInfoAlert';
