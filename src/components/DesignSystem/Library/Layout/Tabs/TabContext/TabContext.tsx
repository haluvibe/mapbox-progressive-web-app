import {
  TabContext as MuiTabContext,
  TabContextProps as MuiTabContextProps,
} from '@mui/lab';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export type TabContextProps = Omit<MuiTabContextProps, RestrictedVisualProps>;

export const TabContext = (props: TabContextProps) => {
  return <MuiTabContext {...props} />;
};

TabContext.displayName = 'TabContext';
