import {Toolbar, ToolbarProps} from '@mui/material';
import {RestrictedVisualProps} from '../../../types';
import React from 'react';

export interface SidebarMenuToolbarProps
  extends Omit<ToolbarProps, RestrictedVisualProps> {
  imageSrc?: string;
  imageDescription?: string;
}

export const SidebarMenuToolbar = ({
  imageSrc,
  imageDescription = '',
  ...toolbarProps
}: SidebarMenuToolbarProps) => {
  return (
    <Toolbar {...toolbarProps}>
      {imageSrc && (
        <img
          alt={imageDescription}
          src={imageSrc}
          width={'100%'}
          height={'auto'}
        />
      )}
    </Toolbar>
  );
};

SidebarMenuToolbar.displayName = 'SidebarMenuToolbar';
