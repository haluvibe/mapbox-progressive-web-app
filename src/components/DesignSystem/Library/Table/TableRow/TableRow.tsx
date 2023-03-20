import {
  TableRow as MuiTableRow,
  TableRowProps as MuiTableRowProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from "../../types";

export type TableRowProps = Omit<MuiTableRowProps, RestrictedVisualProps>;

export const TableRow = (props: MuiTableRowProps) => {
  return <MuiTableRow {...props} />;
};

TableRow.displayName = 'TableRow';
