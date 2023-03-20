import React from 'react';
import {BaseInput, BaseInputProps} from '../BaseInput';

export type TextInputProps = Omit<
  BaseInputProps,
  'multiline' | 'rows' | 'maxRows' | 'minRows' | 'type'
>;

export const TextInput = (props: TextInputProps) => {
  return <BaseInput type={'text'} {...props} />;
};

TextInput.displayName = 'TextInput';
