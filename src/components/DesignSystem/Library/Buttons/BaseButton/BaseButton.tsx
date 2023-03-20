import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import {RestrictedVisualProps} from '../../types';
import CircularProgress from '@mui/material/CircularProgress';
import {useGridItemStyles, UseGridItemStyles} from '../../';

export type BaseButtonProps = Omit<MuiButtonProps, RestrictedVisualProps> &
  UseGridItemStyles & {
    loading?: boolean;
  };

export const BaseButton = ({
  span,
  startIcon,
  loading,
  ...props
}: BaseButtonProps) => {
  const sx = useGridItemStyles(span);
  if (loading) {
    startIcon = <CircularProgress color="inherit" size={'1rem'} />;
  }

  return <MuiButton size={'large'} sx={sx} startIcon={startIcon} {...props} />;
};

BaseButton.displayName = 'BaseButton';
