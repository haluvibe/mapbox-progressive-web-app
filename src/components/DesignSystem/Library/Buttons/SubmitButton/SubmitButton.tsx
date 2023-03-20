import React from 'react';
import {BaseButton, BaseButtonProps} from '../BaseButton';

export type SubmitButtonProps = Omit<BaseButtonProps, 'variant'>;

export const SubmitButton = (props: SubmitButtonProps) => {
  return <BaseButton variant={'contained'} color={'primary'} {...props} />;
};

SubmitButton.displayName = 'SubmitButton';
