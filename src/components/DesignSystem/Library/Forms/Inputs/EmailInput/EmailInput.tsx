import React from 'react';
import {BaseInput, BaseInputProps} from '../BaseInput';

export type EmailInputProps = Omit<BaseInputProps, 'type'>;
export const EmailInput = (props: BaseInputProps) => {
  return <BaseInput type={'email'} {...props} />;
};

EmailInput.displayName = 'EmailInput';
