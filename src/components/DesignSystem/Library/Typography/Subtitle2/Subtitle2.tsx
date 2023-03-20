import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type Subtitle2Props = Omit<BaseTypographyProps, 'variant'>;

export const Subtitle2 = (props: Subtitle2Props) => (
  <BaseTypography {...props} variant={'subtitle2'} />
);
