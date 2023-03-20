import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../types';

interface TooltipProps extends Omit<MuiTooltipProps, RestrictedVisualProps> {
  isClickable?: boolean;
}

export const Tooltip = ({children, isClickable, ...props}: TooltipProps) => {
  return (
    <MuiTooltip
      placement={'top'}
      sx={{cursor: isClickable ? 'pointer' : undefined}}
      {...props}
    >
      {children}
    </MuiTooltip>
  );
};

Tooltip.displayName = 'Tooltip';
