import React from 'react';
import {BaseButton, BaseButtonProps} from '../BaseButton';

export type OutlinedButtonProps = Omit<BaseButtonProps, 'variant'>;

export const OutlinedButton = (props: OutlinedButtonProps) => {
  return <BaseButton variant={'outlined'} {...props} />;
};

OutlinedButton.displayName = 'OutlinedButton';
