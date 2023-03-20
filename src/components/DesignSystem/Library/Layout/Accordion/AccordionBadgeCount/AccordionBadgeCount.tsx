import {Badge, BadgeProps} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export interface AccordionBadgeCountProps
  extends Omit<BadgeProps, RestrictedVisualProps> {
  badgeCount: number;
}

// TODO: This needs styling but we are awaiting Jit's design

export const AccordionBadgeCount = ({
  badgeCount,
  ...badgeProps
}: AccordionBadgeCountProps) => {
  return (
    <Badge
      overlap="circular"
      badgeContent={<>{badgeCount}</>}
      {...badgeProps}
    />
  );
};

AccordionBadgeCount.displayName = 'AccordionBadgeCount';
