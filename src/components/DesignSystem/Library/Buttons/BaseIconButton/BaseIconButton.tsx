import React from 'react';
import {
  IconButtonProps as MuiIconButtonProps,
  IconButton as MuiIconButton,
} from '@mui/material';
import {RestrictedVisualProps} from '../../types';

export type BaseIconButtonProps = Omit<
  MuiIconButtonProps,
  RestrictedVisualProps
>;

export const BaseIconButton = ({
  color,
  ...props
}: BaseIconButtonProps): JSX.Element => {
  return <MuiIconButton {...props} />;
};

BaseIconButton.displayName = 'BaseIconButton';
