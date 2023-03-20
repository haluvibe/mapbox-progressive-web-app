import React from 'react';
import {Collapse, List, ListItemProps} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {SidebarMenuItem} from '../SidebarMenuItem';
import {RestrictedVisualProps} from '../../../types';

export interface SidebarMenuDropdownProps
  extends Omit<ListItemProps, RestrictedVisualProps> {
  icon: React.ReactNode;
  id: string;
  text: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const SidebarMenuDropdown = ({
  children,
  id,
  isOpen,
  onClick,
  ...restProps
}: SidebarMenuDropdownProps) => {
  const MenuIcon = isOpen ? ExpandLess : ExpandMore;
  return (
    <React.Fragment key={id}>
      <SidebarMenuItem onClick={onClick} {...restProps} id={id}>
        <MenuIcon color="action" fontSize={'small'} />
      </SidebarMenuItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

SidebarMenuDropdown.displayName = 'SidebarMenuDropdown';
