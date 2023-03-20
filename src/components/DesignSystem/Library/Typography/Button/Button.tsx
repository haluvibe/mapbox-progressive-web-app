import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type ButtonProps = Omit<BaseTypographyProps, 'variant'>;
export const Button = (props: ButtonProps) => (
  <BaseTypography {...props} variant={'button'} />
);
