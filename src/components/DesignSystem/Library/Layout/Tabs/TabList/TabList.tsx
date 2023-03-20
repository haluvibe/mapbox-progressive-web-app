import {TabList as MuiTabList, TabListProps as MuiTabListProps} from '@mui/lab';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export interface TabListProps
  extends Omit<MuiTabListProps, RestrictedVisualProps> {
  error?: boolean;
}

export const TabList = ({error, ...props}: TabListProps) => {
  return (
    <MuiTabList
      {...props}
      sx={{
        '& .MuiTabs-indicator': {
          bgcolor: error ? 'error.main' : 'primary.main',
        },
      }}
    />
  );
};

TabList.displayName = 'TabList';
