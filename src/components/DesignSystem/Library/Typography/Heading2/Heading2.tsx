import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type Heading2Props = Omit<BaseTypographyProps, 'variant'>;
export const Heading2 = (props: Heading2Props) => (
  <BaseTypography {...props} variant={'h2'} />
);
