import React from 'react';
import {Chip as MuiChip, ChipProps as MuiChipProps} from '@mui/material';
import {RestrictedVisualProps} from '../types';

export type ChipProps = Omit<MuiChipProps, RestrictedVisualProps>;

export const Chip = ({
  size = 'medium',
  variant = 'filled',
  ...props
}: ChipProps) => {
  return <MuiChip size={size} variant={variant} {...props} />;
};

Chip.displayName = 'Chip';
