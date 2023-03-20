import React from 'react';
import {
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
  Theme,
} from '@mui/material';
import {RestrictedVisualProps} from '../../types';

type Props = Omit<MuiTableCellProps, RestrictedVisualProps> & {
  pinLeft?: boolean;
  minWidth?: number;
  width?: React.CSSProperties['width'];
  verticalAlign?: React.CSSProperties['verticalAlign'];
};

export const TableCell: React.FC<Props> = ({
  pinLeft = false,
  minWidth = 'fit-content',
  width = 'fit-content',
  color,
  verticalAlign = 'top',
  ...props
}) => {
  return (
    <MuiTableCell
      {...props}
      sx={(theme: Theme) => ({
        position: pinLeft ? 'sticky' : undefined,
        left: pinLeft ? 0 : undefined,
        bgcolor: 'background.paper',
        width,
        verticalAlign,
        zIndex: pinLeft ? theme.zIndex.appBar + 1 : undefined,
        minWidth,
        color,
      })}
    />
  );
};

TableCell.displayName = 'TableCell';
