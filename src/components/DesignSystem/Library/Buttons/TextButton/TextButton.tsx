import React from 'react';
import {BaseButton, BaseButtonProps} from '../BaseButton';

export type TextButtonProps = Omit<BaseButtonProps, 'variant'>;

export const TextButton = (props: TextButtonProps) => {
  return <BaseButton variant={'text'} {...props} />;
};

TextButton.displayName = 'TextButton';
