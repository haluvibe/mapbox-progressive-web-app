import {Table as MuiTable, TableProps as MuiTableProps} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../types';

export type TableProps = Omit<MuiTableProps, RestrictedVisualProps>;

export const Table = (props: MuiTableProps) => {
  return <MuiTable {...props} />;
};

Table.displayName = 'Table';
