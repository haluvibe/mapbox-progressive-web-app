import {Tab as MuiTab, TabProps as MuiTabProps} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';
import {BaseTypography} from "../../../Typography/BaseTypography";

export interface TabProps
  extends Omit<MuiTabProps, RestrictedVisualProps | 'aria-invalid'> {
  error?: boolean;
}

export const Tab = ({label, error, ...props}: TabProps) => {
  return (
    <MuiTab
      {...props}
      aria-invalid={error}
      label={
        <BaseTypography color={error ? 'error' : 'inherit'}>
          {label}
        </BaseTypography>
      }
    />
  );
};

Tab.displayName = 'Tab';
