import React from 'react';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type CaptionProps = Omit<BaseTypographyProps, 'variant'>;

export const Caption = (props: CaptionProps) => (
  <BaseTypography {...props} variant={'caption'} />
);
