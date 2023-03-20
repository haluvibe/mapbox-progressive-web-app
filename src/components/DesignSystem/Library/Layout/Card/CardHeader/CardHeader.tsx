import React from 'react';
import {
  CardHeader as MuiCardHeader,
  CardHeaderProps as MuiCardHeaderProps,
} from '@mui/material';
import {RestrictedVisualProps} from '../../../types';

export type CardHeaderProps = Omit<
  MuiCardHeaderProps,
  'variant' | RestrictedVisualProps
>;

export const CardHeader = (props: CardHeaderProps) => {
  return <MuiCardHeader {...props} />;
};

CardHeader.displayName = 'CardHeader';
