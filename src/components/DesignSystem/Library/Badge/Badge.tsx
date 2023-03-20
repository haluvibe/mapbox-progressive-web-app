import {Badge as MuiBadge, BadgeProps as MuiBadgeProps} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../types';

export type BadgeProps = Omit<MuiBadgeProps, RestrictedVisualProps>;

export const Badge = ({color = 'secondary', ...badgeProps}: BadgeProps) => {
  return <MuiBadge color={color} {...badgeProps} />;
};

Badge.displayName = 'Badge';
