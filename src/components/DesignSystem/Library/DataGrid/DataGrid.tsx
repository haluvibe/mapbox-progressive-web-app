import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {
  DataGridPremium,
  DataGridPremiumProps,
  GridRowModel,
} from '@mui/x-data-grid-premium';
import {RestrictedVisualProps} from '../types';

export interface DataGridProps
  extends Omit<DataGridPremiumProps, RestrictedVisualProps> {
  idField?: string;
}

export const DataGrid = ({idField = 'id', ...restProps}: DataGridProps) => {
  return (
    <DataGridPremium
      disableColumnFilter={false}
      rowHeight={38}
      disableSelectionOnClick={true}
      autoHeight={false}
      getRowId={(row: GridRowModel): string => {
        return row?.[idField] ? row[idField] : uuidv4();
      }}
      {...restProps}
    />
  );
};
DataGrid.displayName = 'DataGrid';
