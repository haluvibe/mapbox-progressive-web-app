import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type Heading1Props = Omit<BaseTypographyProps, 'variant'>;
export const Heading1 = (props: Heading1Props) => (
  <BaseTypography {...props} variant={'h1'} />
);
