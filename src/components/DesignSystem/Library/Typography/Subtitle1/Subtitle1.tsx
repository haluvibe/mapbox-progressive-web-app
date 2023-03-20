import React from 'react';
import {RestrictedVisualProps} from '../../types';
import {BaseTypography, BaseTypographyProps} from '../BaseTypography';

export type Subtitle1Props = Omit<BaseTypographyProps, RestrictedVisualProps>;

export const Subtitle1 = (props: Subtitle1Props) => (
  <BaseTypography {...props} variant={'subtitle1'} color="text.secondary" />
);
