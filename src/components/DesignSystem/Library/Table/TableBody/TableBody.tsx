import {
  TableBody as MuiTableBody,
  TableBodyProps as MuiTableBodyProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../types';

export type TableBodyProps = Omit<MuiTableBodyProps, RestrictedVisualProps>;

export const TableBody = (props: MuiTableBodyProps) => {
  return <MuiTableBody {...props} />;
};

TableBody.displayName = 'TableBody';
