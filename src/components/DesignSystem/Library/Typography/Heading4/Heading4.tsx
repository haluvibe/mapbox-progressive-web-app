import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type Heading4Props = Omit<BaseTypographyProps, 'variant'>;
export const Heading4 = (props: Heading4Props) => (
  <BaseTypography {...props} color={'text.primary'} variant={'h4'} />
);
