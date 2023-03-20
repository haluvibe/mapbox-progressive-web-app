import {Box, BoxProps} from '@mui/material';
import {RestrictedVisualProps} from '../../../types';
import React from 'react';
import { Caption } from '../../../Typography/Caption';

export interface SidebarMenuCaptionProps
  extends Omit<BoxProps, RestrictedVisualProps> {
  text: string;
}

export const SidebarMenuCaption = ({
  text,
  ...boxProps
}: SidebarMenuCaptionProps) => {
  return (
    <Box {...boxProps} sx={{p: 3}}>
      <Caption>{text}</Caption>
    </Box>
  );
};

SidebarMenuCaption.displayName = 'SidebarMenuCaption';
