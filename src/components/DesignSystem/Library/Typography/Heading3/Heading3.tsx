import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type Heading3Props = Omit<BaseTypographyProps, 'variant'>;
export const Heading3 = (props: Heading3Props) => (
  <BaseTypography {...props} variant={'h3'} color={'text.primary'} />
);
