import React from 'react';
import {BaseButton, BaseButtonProps} from '../BaseButton';

export type CriticalActionButtonProps = Omit<BaseButtonProps, 'variant'>;

export const CriticalActionButton = (props: CriticalActionButtonProps) => {
  return <BaseButton variant={'contained'} color={'error'} {...props} />;
};

CriticalActionButton.displayName = 'CriticalActionButton';
