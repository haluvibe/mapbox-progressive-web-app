import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type Heading6Props = Omit<BaseTypographyProps, 'variant'>;
export const Heading6 = (props: Heading6Props) => (
  <BaseTypography {...props} variant={'h6'} />
);
