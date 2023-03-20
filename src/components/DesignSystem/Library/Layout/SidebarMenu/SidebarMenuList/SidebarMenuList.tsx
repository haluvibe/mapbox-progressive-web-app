import React from 'react';
import {List, ListProps} from '@mui/material';
import {RestrictedVisualProps} from '../../../types';

export type SidebarMenuListProps = Omit<ListProps, RestrictedVisualProps>;

export const SidebarMenuList = (props: SidebarMenuListProps) => {
  return (
    <List
      sx={{
        padding: 1,
        marginTop: 1,
      }}
      component="nav"
      aria-labelledby="nested-list"
      {...props}
    />
  );
};

SidebarMenuList.displayName = 'SidebarMenuList';
