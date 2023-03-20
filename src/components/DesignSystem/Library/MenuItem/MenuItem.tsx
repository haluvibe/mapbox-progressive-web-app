import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../types';

export type MenuItemProps = Omit<MuiMenuItemProps, RestrictedVisualProps>;

export const MenuItem = (props: MenuItemProps) => {
  return <MuiMenuItem {...props} />;
};

MenuItem.displayName = 'MenuItem';
