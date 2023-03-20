import {Box, BoxProps} from '@mui/material';
import {RestrictedVisualProps} from '../../../types';
import React from 'react';

export interface SidebarMenuTopAndBottomLayoutProps
  extends Omit<BoxProps, RestrictedVisualProps> {
  topSection: React.ReactNode;
  bottomSection: React.ReactNode;
}

export const SidebarMenuTopAndBottomLayout = ({
  topSection,
  bottomSection,
  ...boxProps
}: SidebarMenuTopAndBottomLayoutProps) => {
  return (
    <Box
      {...boxProps}
      sx={{
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 6,
      }}
      role="presentation"
    >
      {topSection}
      {bottomSection}
    </Box>
  );
};

SidebarMenuTopAndBottomLayout.displayName = 'SidebarMenuTopAndBottomLayout';
