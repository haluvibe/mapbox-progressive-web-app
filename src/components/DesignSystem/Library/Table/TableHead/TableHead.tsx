import {
  TableHead as MuiTableHead,
  TableHeadProps as MuiTableHeadProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../types';

export type TableHeadProps = Omit<MuiTableHeadProps, RestrictedVisualProps>;

export const TableHead = (props: MuiTableHeadProps) => {
  return <MuiTableHead {...props} />;
};

TableHead.displayName = 'TableHead';
