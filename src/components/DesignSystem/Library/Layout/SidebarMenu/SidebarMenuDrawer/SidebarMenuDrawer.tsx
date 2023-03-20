import {Drawer, DrawerProps} from '@mui/material';
import {RestrictedVisualProps} from '../../../types';
import React from 'react';

export interface SidebarMenuDrawerProps
  extends Omit<DrawerProps, RestrictedVisualProps> {
  drawerWidth?: number;
}

export const SidebarMenuDrawer = ({
  drawerWidth = 320,
  ...restProps
}: SidebarMenuDrawerProps) => {
  return (
    <Drawer
      {...restProps}
      sx={{
        zIndex: 199, // Hacky fix to be removed when we implement the app bar
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      anchor="left"
    />
  );
};

SidebarMenuDrawer.displayName = 'SidebarMenuDrawer';
