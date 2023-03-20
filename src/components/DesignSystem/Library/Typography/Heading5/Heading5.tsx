import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type Heading5Props = Omit<BaseTypographyProps, 'variant'>;
export const Heading5 = (props: Heading5Props) => (
  <BaseTypography color={'text.primary'} variant={'h5'} {...props} />
);
