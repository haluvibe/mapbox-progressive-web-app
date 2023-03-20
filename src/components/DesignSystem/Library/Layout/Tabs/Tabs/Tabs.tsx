import {Tabs as MuiTabs, TabsProps as MuiTabsProps} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export type TabsProps = Omit<MuiTabsProps, RestrictedVisualProps>;

export const Tabs = (props: MuiTabsProps) => {
  return <MuiTabs {...props} />;
};

Tabs.displayName = 'Tabs';
