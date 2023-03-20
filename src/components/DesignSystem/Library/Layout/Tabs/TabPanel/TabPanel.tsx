import React from 'react';
import {RestrictedVisualProps} from '../../../types';
import {
  TabPanel as MuiTabPanel,
  TabPanelProps as MuiTabPanelProps,
} from '@mui/lab';

export type TabPanelProps = Omit<MuiTabPanelProps, RestrictedVisualProps>;

export const TabPanel = (props: TabPanelProps) => {
  return <MuiTabPanel sx={{marginTop: 2, padding: 0}} {...props} />;
};

TabPanel.displayName = 'TabPanel';
