import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type Body1Props = Omit<BaseTypographyProps, 'variant'>;
export const Body1 = (props: Body1Props) => (
  <BaseTypography {...props} variant={'body1'} />
);
