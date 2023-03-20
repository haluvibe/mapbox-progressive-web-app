import {
  TableContainer as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../types';

export type TableContainerProps = Omit<
  MuiTableContainerProps,
  RestrictedVisualProps
>;

export const TableContainer = (props: MuiTableContainerProps) => {
  return <MuiTableContainer {...props} />;
};

TableContainer.displayName = 'TableContainer';
