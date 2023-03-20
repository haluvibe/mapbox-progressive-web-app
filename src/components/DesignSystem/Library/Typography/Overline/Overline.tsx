import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type OverlineProps = Omit<BaseTypographyProps, 'variant'>;

export const Overline = (props: OverlineProps) => (
  <BaseTypography {...props} variant={'overline'} />
);
