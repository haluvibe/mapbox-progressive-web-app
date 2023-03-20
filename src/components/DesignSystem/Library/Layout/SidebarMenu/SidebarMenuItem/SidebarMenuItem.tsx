import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemProps,
  ListItemText,
} from '@mui/material';
import {RestrictedVisualProps} from '../../../types';
import React from 'react';
import {Body2} from "../../../Typography/Body2";
import {Body1} from "../../../Typography/Body1";

export interface SidebarMenuItemProps
  extends Omit<ListItemProps, RestrictedVisualProps> {
  id: string;
  text: string;
  onClick: () => void;
  selected?: boolean;
  disabled?: boolean;
  isSmall?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const SidebarMenuItem = ({
  id,
  text,
  icon,
  selected,
  disabled,
  isSmall,
  onClick,
  children,
  ...restProps
}: SidebarMenuItemProps) => {
  return (
    <ListItem key={id} disablePadding {...restProps}>
      <ListItemButton selected={selected} disabled={disabled} onClick={onClick}>
        <ListItemIcon color="action">{icon}</ListItemIcon>
        <ListItemText
          primary={isSmall ? <Body2>{text}</Body2> : <Body1>{text}</Body1>}
        />
        {children}
      </ListItemButton>
    </ListItem>
  );
};

SidebarMenuItem.displayName = 'SidebarMenuItem';
