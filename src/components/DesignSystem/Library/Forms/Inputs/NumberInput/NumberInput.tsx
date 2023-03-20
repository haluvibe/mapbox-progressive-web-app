import * as R from 'ramda';
import React from 'react';
import {BaseInput, BaseInputProps} from '../BaseInput';

export interface NumberInputProps
  extends Omit<BaseInputProps, 'multiline' | 'maxRows' | 'minRows'> {
  stepper?: boolean;
}

export const NumberInput = ({
  stepper,
  inputProps = {},
  ...props
}: NumberInputProps) => {
  const value =
    stepper && R.is(String, props.value)
      ? parseFloat(props.value)
      : props.value;
  return (
    <BaseInput
      type={stepper ? 'number' : 'text'}
      inputProps={{inputMode: 'numeric', pattern: '[0-9]*', ...inputProps}}
      {...props}
      value={value}
    />
  );
};

NumberInput.displayName = 'NumberInput';
